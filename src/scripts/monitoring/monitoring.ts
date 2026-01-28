/**
 * Sentry 모니터링 설정 및 유틸리티
 *
 * 책임:
 * - Sentry 초기화 및 설정
 * - Core Web Vitals 수집 및 전송
 * - 페이지뷰 및 예외 추적
 * - Session Replay (사용자 행동 녹화)
 */

import * as Sentry from '@sentry/browser';
import { onLCP, onCLS, onINP } from 'web-vitals';
import type { Metric } from 'web-vitals';
import { getCurrentPageConfig } from '../page-config';

/**
 * Sentry 모니터링 초기화
 *
 * @returns 초기화 성공 여부
 */
export function initializeMonitoring(): boolean {
  const dsn = import.meta.env.VITE_SENTRY_DSN as string;

  if (!dsn) {
    console.warn('⚠️ VITE_SENTRY_DSN not set. Monitoring disabled.');
    return false;
  }

  try {
    Sentry.init({
      dsn,
      environment: import.meta.env.PROD ? 'production' : 'development',

      // 성능 모니터링 샘플링 (프로덕션: 20%, 개발: 100%)
      tracesSampleRate: import.meta.env.PROD ? 0.2 : 1.0,

      // Session Replay 샘플링 (프로덕션: 10%, 개발: 100%)
      replaysSessionSampleRate: import.meta.env.PROD ? 0.1 : 1.0,

      // 에러 발생 시 Session Replay 샘플링 (100%)
      replaysOnErrorSampleRate: 1.0,

      // 릴리스 버전 추적
      release: import.meta.env.VITE_APP_VERSION as string | undefined,

      // PII 전송 설정 (GDPR 준수)
      sendDefaultPii: false,

      // 에러 필터링
      beforeSend(event, hint) {
        // 브라우저 확장 프로그램 에러 제외
        const error = hint.originalException;
        if (error && error.toString().includes('chrome-extension://')) {
          return null;
        }
        return event;
      },

      // 초기 태그 설정
      initialScope: {
        tags: {
          site: 'docker-ko.github.io',
          pageType: getCurrentPageConfig().type,
        },
      },

      // 통합 설정
      integrations: [
        Sentry.browserTracingIntegration({
          enableInp: true, // Interaction to Next Paint 추적
        }),
        Sentry.replayIntegration({
          // Session Replay 개인정보 보호 설정
          maskAllText: false, // 모든 텍스트 마스킹 (개인정보 보호)
          blockAllMedia: false, // 모든 미디어 차단 (프라이버시 보호)
        }),
      ],
    });

    console.log('✅ Sentry monitoring initialized');
    return true;
  } catch (error) {
    console.error('❌ Failed to initialize Sentry:', error);
    return false;
  }
}

/**
 * Web Vitals 수집 및 전송
 *
 * LCP, CLS, INP 메트릭을 자동으로 수집하여 Sentry로 전송합니다.
 */
export function setupWebVitalsTracking(): void {
  const sendVital = (metric: Metric) => {
    try {
      // Sentry 메트릭으로 전송
      Sentry.metrics.gauge(metric.name, metric.value);

      // 태그를 별도로 설정
      Sentry.setTag('metric_id', metric.id);
      Sentry.setTag('metric_rating', metric.rating);
    } catch {
      // Monitoring failure should not break the app
    }
  };

  onLCP(sendVital);
  onCLS(sendVital);
  onINP(sendVital);
}

/**
 * 페이지뷰 추적
 */
export function trackPageView(): void {
  try {
    const config = getCurrentPageConfig();

    // 페이지 컨텍스트 설정
    Sentry.setContext('page', {
      url: window.location.href,
      title: document.title,
      pageType: config.type,
    });

    // 태그 설정
    Sentry.setTag('pageType', config.type);

    // 커스텀 이벤트로 페이지뷰 전송
    Sentry.captureMessage(`Page View: ${document.title}`, {
      level: 'info',
      tags: {
        pageType: config.type,
      },
    });
  } catch {
    // Monitoring failure should not break the app
  }
}

/**
 * 예외 추적 헬퍼
 *
 * @param error - 추적할 에러 객체
 * @param location - 에러 발생 위치 (예: 'DOMContentLoaded.initializePage')
 */
export function trackException(error: Error, location: string): void {
  try {
    Sentry.captureException(error, {
      tags: {
        location,
        pageType: getCurrentPageConfig().type,
      },
      level: 'error',
    });
  } catch {
    // Monitoring failure should not break the app
  }
}

/**
 * 개발 환경 전용: Sentry 동작 확인
 *
 * 브라우저 콘솔에서 testSentry() 실행
 */
if (import.meta.env.DEV) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).testSentry = () => {
    Sentry.logger.info('User triggered test log', {
      log_source: 'sentry_test',
    });
    console.log('✅ Test sent. Check Sentry dashboard.');
  };

  console.log('Run: testSentry()');
}
