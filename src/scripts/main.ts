import './components/index';
import '../styles/content_style.css';
import '../styles/style.css';
import './load_md';
import './components/card-component';
import './components/contributor-component';
import { initializeMarkdownLoader } from './load_md';
import { initializeTableContents } from './table-contents';
import { initializeBreadcrumb } from './breadcrumb';
import { getCurrentPageConfig } from './page-config';
import { toggleUIElements } from './ui-manager';
import {
  initializeAppInsights,
  setupWebVitalsTracking,
  trackPageView,
  trackException,
} from './monitoring/app-insights';

// 모니터링 초기화
const appInsights = initializeAppInsights();
if (appInsights) {
  trackPageView(appInsights);
  setupWebVitalsTracking(appInsights);
}

/**
 * 페이지 초기화 오케스트레이터
 *
 * 책임:
 * - 페이지 설정에 따라 적절한 초기화 함수들을 조율
 * - UI 요소 표시/숨김 제어
 * - 조건부 컴포넌트 초기화
 */
async function initializePage(): Promise<void> {
  const config = getCurrentPageConfig();

  // 1. 마크다운 로드 (모든 페이지에서 필요)
  await initializeMarkdownLoader();

  // 2. UI 요소 표시/숨김 제어
  toggleUIElements(config);

  // 3. 조건부 초기화
  if (config.showTableOfContents) {
    initializeTableContents();
  }

  if (config.showBreadcrumb) {
    await initializeBreadcrumb();
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await initializePage();
  } catch (error) {
    trackException(
      appInsights,
      error as Error,
      'DOMContentLoaded.initializePage'
    );
    console.error('❌ main.ts: DOMContentLoaded : 페이지 초기화 실패!', error);
  }
});

window.addEventListener('hashchange', async () => {
  try {
    await initializePage();
    window.scrollTo(0, 0); // 페이지 이동 시 최상단으로 스크롤 이동
  } catch (error) {
    trackException(appInsights, error as Error, 'hashchange.initializePage');
    console.error('❌ main.ts: hashchange : 페이지 초기화 실패!', error);
  }
});
