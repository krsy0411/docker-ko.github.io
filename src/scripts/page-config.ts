/**
 * 페이지 타입 및 설정 관리 모듈
 *
 * 책임:
 * - URL 해시로부터 페이지 타입 결정
 * - 페이지 타입별 UI 설정 제공
 * - 중앙 집중식 페이지 타입 관리 (Single Source of Truth)
 */

export type PageType = 'landing' | 'documentation';

export interface PageConfig {
  type: PageType;
  showBreadcrumb: boolean;
  showTableOfContents: boolean;
  showNavigation: boolean;
}

/**
 * URL 해시로부터 페이지 타입을 결정합니다.
 *
 * @param hash - window.location.hash 값
 * @returns 페이지 타입 ('landing' | 'documentation')
 *
 * @example
 * getPageType('') // 'landing'
 * getPageType('#/') // 'landing'
 * getPageType('#/home') // 'landing'
 * getPageType('#/guides/docker-overview') // 'documentation'
 */
export const getPageType = (hash: string): PageType => {
  const normalizedHash = hash.replace(/^#?\/?/, ''); // #, / 제거

  // 빈 해시 또는 'home'인 경우 랜딩 페이지로 판단
  return normalizedHash === '' || normalizedHash === 'home'
    ? 'landing'
    : 'documentation';
};

/**
 * 페이지 타입에 따른 UI 설정을 반환합니다.
 *
 * @param pageType - 페이지 타입
 * @returns 페이지별 UI 설정
 *
 * @example
 * const config = getPageConfig('landing');
 * console.log(config.showBreadcrumb); // false
 */
export const getPageConfig = (pageType: PageType): PageConfig => {
  const configs: Record<PageType, PageConfig> = {
    landing: {
      type: 'landing',
      showBreadcrumb: false,
      showTableOfContents: false,
      showNavigation: false,
    },
    documentation: {
      type: 'documentation',
      showBreadcrumb: true,
      showTableOfContents: true,
      showNavigation: true,
    },
  };

  return configs[pageType];
};

/**
 * 현재 URL의 페이지 설정을 반환합니다.
 * getPageType과 getPageConfig를 조합한 헬퍼 함수입니다.
 *
 * @returns 현재 페이지의 UI 설정
 *
 * @example
 * const config = getCurrentPageConfig();
 * if (config.showBreadcrumb) {
 *   initializeBreadcrumb();
 * }
 */
export const getCurrentPageConfig = (): PageConfig => {
  return getPageConfig(getPageType(window.location.hash));
};
