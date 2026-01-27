/**
 * 테스트 환경 설정 및 정리
 * 전역 상태 관리와 cleanup 로직 제공
 */

import { JSDOM } from 'jsdom';

export interface TestEnvironment {
  dom: JSDOM;
  document: Document;
  cleanup: () => void;
}

/**
 * JSDOM 테스트 환경 설정
 * 전역 상태를 백업하고 테스트 종료 시 복원할 수 있도록 cleanup 함수 제공
 */
export function setupTestEnvironment(): TestEnvironment {
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');

  // 기존 전역 상태 백업
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const originalWindow = (global as any).window;
  const originalDocument = (global as any).document;
  const originalHTMLElement = (global as any).HTMLElement;
  const originalCustomElements = (global as any).customElements;

  // JSDOM 글로벌 환경 설정
  (global as any).window = dom.window;
  (global as any).document = dom.window.document;
  (global as any).HTMLElement = dom.window.HTMLElement;
  (global as any).customElements = dom.window.customElements;
  /* eslint-enable @typescript-eslint/no-explicit-any */

  // 정리 함수: 테스트 종료 시 전역 상태 복원
  const cleanup = () => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    (global as any).window = originalWindow;
    (global as any).document = originalDocument;
    (global as any).HTMLElement = originalHTMLElement;
    (global as any).customElements = originalCustomElements;
    /* eslint-enable @typescript-eslint/no-explicit-any */
  };

  return {
    dom,
    document: dom.window.document,
    cleanup,
  };
}

/**
 * 웹 컴포넌트 렌더링을 위한 헬퍼 함수
 * connectedCallback이 실행될 충분한 시간 대기
 *
 * @param timeoutMs - 대기 시간 (기본값: 50ms)
 */
export async function waitForComponentRender(
  timeoutMs: number = 50
): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, timeoutMs));
}
