import './components/index';
import '../styles/content_style.css';
import '../styles/style.css';
import './load_md';
import './components/card-component';
import './components/contributor-component';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { initializeMarkdownLoader } from './load_md';
import { initializeTableContents } from './table-contents';
import { initializeBreadcrumb } from './breadcrumb';
import { getCurrentPageConfig } from './page-config';
import { toggleUIElements } from './ui-manager';

// Application Insights 초기화
const appInsights = new ApplicationInsights({
  config: {
    connectionString:
      'InstrumentationKey=7bea0293-01dc-409c-9471-3a65567b11ed;IngestionEndpoint=https://koreacentral-0.in.applicationinsights.azure.com/;LiveEndpoint=https://koreacentral.livediagnostics.monitor.azure.com/;ApplicationId=ddbe985c-4d7a-41e4-80a8-a3961068933b',
    enableAutoRouteTracking: true,
    disableFetchTracking: false,
    disableAjaxTracking: false,
    disableExceptionTracking: false,
  },
});
appInsights.loadAppInsights();
appInsights.trackPageView();

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
    console.error('❌ main.ts: DOMContentLoaded : 페이지 초기화 실패!', error);
  }
});

window.addEventListener('hashchange', async () => {
  try {
    await initializePage();
    window.scrollTo(0, 0); // 페이지 이동 시 최상단으로 스크롤 이동
  } catch (error) {
    console.error('❌ main.ts: hashchange : 페이지 초기화 실패!', error);
  }
});
