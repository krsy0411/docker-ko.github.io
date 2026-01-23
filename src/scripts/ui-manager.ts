/**
 * UI 요소 표시/숨김 관리 모듈
 *
 * 책임:
 * - 페이지 설정에 따른 UI 요소 표시/숨김 제어
 * - DOM 조작만 담당 (비즈니스 로직 없음)
 */

import type { PageConfig } from './page-config';
import { getElement } from './utils/dom';

/**
 * 페이지 설정에 따라 UI 요소들의 표시/숨김을 제어합니다.
 *
 * @param config - 페이지 설정 객체
 *
 * 제어 대상:
 * - #sidebar (네비게이션)
 * - #aside-toc (Table of Contents)
 * - #content (랜딩 페이지는 full-width)
 *
 * @example
 * const config = getCurrentPageConfig();
 * toggleUIElements(config);
 */
export function toggleUIElements(config: PageConfig): void {
  // 사이드바 (네비게이션) 표시/숨김
  const sidebar = getElement<HTMLElement>('sidebar');
  if (sidebar) {
    sidebar.style.display = config.showNavigation ? '' : 'none';
  }

  // Table of Contents 표시/숨김
  const asideToc = getElement<HTMLElement>('aside-toc');
  if (asideToc) {
    asideToc.style.display = config.showTableOfContents ? '' : 'none';
  }

  // Content 영역 레이아웃 조정
  const content = getElement<HTMLElement>('content');
  if (content) {
    if (config.type === 'landing') {
      // 랜딩 페이지: full-width, 중앙 정렬
      content.classList.add('max-w-5xl', 'mx-auto');
    } else {
      // 문서 페이지: 기본 레이아웃
      content.classList.remove('max-w-5xl', 'mx-auto');
    }
  }
}
