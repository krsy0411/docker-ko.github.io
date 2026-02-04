import { getElement } from './utils/dom';

/**
 *  Breadcrumb 아이템의 세그먼트 데이터 구조
 * - name: 세그먼트 이름
 * - linkable: 링크 가능 여부
 * - children: 하위 세그먼트들 (선택적)
 */
interface SegmentData {
  name: string;
  linkable: boolean;
  children?: Record<string, SegmentData>;
}
/**
 * Breadcrumb 아이템 구조
 */
interface BreadcrumbItem {
  name: string;
  path: string;
  linkable: boolean;
}

/**
 * 최상위 레벨의 키-값 구조
 */
interface TranslationData {
  [key: string]: SegmentData;
}

/**
 * Breadcrumb 번역 데이터를 로드합니다.
 */
async function loadTranslationData(): Promise<TranslationData> {
  try {
    const response = await fetch('/data/breadcrumb.json');
    if (!response.ok) {
      throw new Error('Failed to load breadcrumb translation data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading breadcrumb translation data:', error);
    // 기본값 반환 (빈 객체)
    return {};
  }
}

/**
 * 경로 세그먼트를 번역하고 링크 가능 여부를 확인합니다.
 * 계층적 구조를 고려하여 현재 경로에서 세그먼트를 찾습니다.
 * @param segments 전체 경로 세그먼트 배열
 * @param currentIndex 현재 처리 중인 세그먼트의 인덱스(깊이를 알기 위함)
 * @param translationData 번역 데이터
 * @returns 해당 세그먼트 데이터 또는 null (데이터가 없는 경우)
 */
function getSegmentData(
  segments: string[],
  currentIndex: number,
  translationData: TranslationData
): SegmentData | null {
  let current = translationData[segments[0]];

  if (!current) {
    return null;
  }

  for (let i = 1; i <= currentIndex; i++) {
    if (current.children && current.children[segments[i]]) {
      current = current.children[segments[i]];
    } else {
      return null;
    }
  }

  return current;
}

/**
 * 현재 hash를 기반으로 breadcrumb 아이템들을 생성합니다.
 *
 * 주의: 이 함수는 documentation 페이지에서만 호출되어야 합니다.
 * 호출 여부는 main.ts에서 결정합니다.
 */
async function generateBreadcrumbItems(): Promise<BreadcrumbItem[]> {
  const hash = window.location.hash.slice(1); // # 제거
  const translationData = await loadTranslationData();
  const pathSegments = hash.split('/').filter((segment) => segment !== '');

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: '홈', path: '/', linkable: true },
  ];

  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    const segmentData = getSegmentData(pathSegments, index, translationData);
    currentPath += `/${segment}`;

    // translations 데이터에 없는 세그먼트는 breadcrumb에 추가하지 않음
    if (segmentData) {
      breadcrumbItems.push({
        name: segmentData.name,
        path: `#${currentPath}`,
        linkable: segmentData.linkable,
      });
    }
  });

  return breadcrumbItems;
}

/**
 * XSS 방지를 위한 HTML escape
 */
function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Breadcrumb 아이템을 HTML 문자열로 변환
 */
function renderBreadcrumbItem(item: BreadcrumbItem, isLast: boolean): string {
  const escapedName = escapeHtml(item.name);

  if (isLast) {
    return `<span class="truncate text-gray-400 dark:text-gray-300">${escapedName}</span>`;
  }

  if (item.linkable) {
    return `<a href="${item.path}" class="truncate text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">${escapedName}</a> / `;
  }

  // linkable=false인 항목은 회색으로 표시 (클릭 불가 시각 표시)
  return `<span class="truncate text-gray-500 dark:text-gray-400">${escapedName}</span> / `;
}

/**
 * Breadcrumb HTML 요소를 생성합니다.
 */
function createBreadcrumbElement(items: BreadcrumbItem[]): HTMLElement {
  const breadcrumbNav = document.createElement('nav');
  breadcrumbNav.id = 'breadcrumbs';
  // nav 요소에서 색상 클래스 제거 (자식 요소에서 색상 관리)
  breadcrumbNav.className = 'pb-3 flex min-w-0 items-center gap-2';

  const breadcrumbHTML = items
    .map((item, index) => renderBreadcrumbItem(item, index === items.length - 1))
    .join('');

  breadcrumbNav.innerHTML = breadcrumbHTML;
  return breadcrumbNav;
}

/**
 * 기존 breadcrumb을 제거합니다.
 */
function removePreviousBreadcrumb(): void {
  const existingBreadcrumb = document.getElementById('breadcrumbs');
  if (existingBreadcrumb) {
    existingBreadcrumb.remove();
  }
}

/**
 * Breadcrumb을 생성하고 div#content의 첫 번째 자식으로 추가합니다.
 *
 * 주의: 이 함수는 documentation 페이지에서만 호출되어야 합니다.
 * 호출 여부는 main.ts에서 결정합니다.
 */
export async function initializeBreadcrumb(): Promise<void> {
  const contentDiv = getElement<HTMLDivElement>('content');
  if (!contentDiv) {
    console.warn('Breadcrumb 초기화 실패: content 요소를 찾을 수 없습니다.');
    return;
  }

  removePreviousBreadcrumb();

  const breadcrumbItems = await generateBreadcrumbItems();
  const breadcrumbElement = createBreadcrumbElement(breadcrumbItems);

  contentDiv.insertBefore(breadcrumbElement, contentDiv.firstChild);
}
