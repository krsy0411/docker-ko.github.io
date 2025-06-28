import './components/index';
import '../styles/content_style.css';
import '../styles/style.css';
import './load_md';
import './components/card-component';
import { initializeMarkdownLoader } from './load_md';
import { initializeTableContents } from './table-contents';
import { initializeBreadcrumb } from './breadcrumb';
import appInsights from 'applicationinsights';
appInsights.setup("InstrumentationKey=7bea0293-01dc-409c-9471-3a65567b11ed;IngestionEndpoint=https://koreacentral-0.in.applicationinsights.azure.com/;LiveEndpoint=https://koreacentral.livediagnostics.monitor.azure.com/;ApplicationId=ddbe985c-4d7a-41e4-80a8-a3961068933b")
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true, true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true, false)
    .setAutoCollectPreAggregatedMetrics(true)
    .setSendLiveMetrics(false)
    .setInternalLogging(false, true)
    .enableWebInstrumentation(false)
    .start();

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await initializeMarkdownLoader();
    initializeTableContents();
    await initializeBreadcrumb();
  } catch (error) {
    console.error('❌ main.ts: DOMContentLoaded : Markdown 로드 실패!', error);
    // 실제 다른 작업이 필요
  }
});

window.addEventListener('hashchange', async () => {
  try {
    await initializeMarkdownLoader();
    initializeTableContents();
    await initializeBreadcrumb();
    window.scrollTo(0, 0); // 페이지 이동 시 최상단으로 스크롤 이동
  } catch (error) {
    console.error('❌ main.ts: hashchange : Markdown 로드 실패!', error);
    // 실제 다른 작업이 필요
  }
});
