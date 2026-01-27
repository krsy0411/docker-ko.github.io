/**
 * 테스트 전역 타입 정의
 * JSDOM 환경에서 전역 객체의 타입 안정성 확보
 */

import type { DOMWindow } from 'jsdom';

declare global {
  var window: DOMWindow;

  var document: Document;

  var HTMLElement: typeof HTMLElement;

  var customElements: CustomElementRegistry;
}

export {};
