/**
 * Application Insights 모니터링 설정 및 유틸리티
 *
 * 책임:
 * - App Insights 초기화 및 설정
 * - Core Web Vitals 수집 및 전송
 * - 페이지뷰 및 예외 추적
 */

import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import type { ITelemetryItem } from '@microsoft/applicationinsights-web';
import { onLCP, onCLS, onINP } from 'web-vitals';
import type { Metric } from 'web-vitals';
import { getCurrentPageConfig } from '../page-config';

/**
 * Application Insights 인스턴스 초기화 및 설정
 *
 * @returns ApplicationInsights 인스턴스 또는 null (연결 문자열 미설정 시)
 */
export function initializeAppInsights(): ApplicationInsights | null {
  const connectionString = import.meta.env
    .VITE_APPINSIGHTS_CONNECTION_STRING as string;

  if (!connectionString) {
    console.warn(
      '⚠️ VITE_APPINSIGHTS_CONNECTION_STRING not set. Monitoring disabled.'
    );
    return null;
  }

  const appInsights = new ApplicationInsights({
    config: {
      connectionString,
      enableAutoRouteTracking: true,
      disableFetchTracking: false,
      disableAjaxTracking: false,
      disableExceptionTracking: false,
    },
  });

  // 텔레메트리 초기자: 모든 텔레메트리에 공통 메타데이터 주입
  appInsights.addTelemetryInitializer((envelope: ITelemetryItem) => {
    try {
      const baseData = envelope?.baseData;
      if (baseData && 'properties' in baseData) {
        baseData.properties = baseData.properties || {};
        baseData.properties.pageType = getCurrentPageConfig().type;
        baseData.properties.site = 'docker-ko.github.io';
      }
    } catch {
      // Initializer must never throw
    }
  });

  appInsights.loadAppInsights();
  return appInsights;
}

/**
 * Web Vitals 수집 및 전송
 *
 * LCP, CLS, INP 메트릭을 자동으로 수집하여 App Insights로 전송합니다.
 *
 * @param appInsights - App Insights 인스턴스
 */
export function setupWebVitalsTracking(appInsights: ApplicationInsights): void {
  const sendVital = (metric: Metric) => {
    try {
      appInsights.trackMetric({
        name: metric.name,
        average: metric.value,
        properties: {
          id: metric.id,
          delta: metric.delta,
          rating: metric.rating,
        },
      });
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
 *
 * @param appInsights - App Insights 인스턴스
 */
export function trackPageView(appInsights: ApplicationInsights): void {
  const config = getCurrentPageConfig();
  appInsights.trackPageView({
    name: document.title,
    uri: window.location.href,
    properties: { pageType: config.type },
  });
}

/**
 * 예외 추적 헬퍼
 *
 * @param appInsights - App Insights 인스턴스 (null 가능)
 * @param error - 추적할 에러 객체
 * @param location - 에러 발생 위치 (예: 'DOMContentLoaded.initializePage')
 */
export function trackException(
  appInsights: ApplicationInsights | null,
  error: Error,
  location: string
): void {
  if (!appInsights) return;

  try {
    appInsights.trackException({
      error,
      properties: { location },
    });
  } catch {
    // Monitoring failure should not break the app
  }
}
