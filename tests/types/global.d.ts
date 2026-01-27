/**
 * 테스트 전역 타입 정의
 * JSDOM 환경에서 전역 객체의 타입 안정성 확보
 */

import type { DOMWindow } from 'jsdom';

declare global {
  // eslint-disable-next-line no-var
  var window: DOMWindow;
  // eslint-disable-next-line no-var
  var document: Document;
  // eslint-disable-next-line no-var
  var HTMLElement: typeof HTMLElement;
  // eslint-disable-next-line no-var
  var customElements: CustomElementRegistry;
}

export {};
