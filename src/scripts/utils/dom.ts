/**
 * 타입 안전한 DOM 접근 유틸리티
 *
 * 책임:
 * - null 체크를 통한 안전한 DOM 요소 접근
 * - 명확한 에러 메시지 제공
 * - 타입 안정성 보장
 */

/**
 * Type-safe DOM element getter
 *
 * 요소가 없으면 null을 반환하여 호출자가 처리하도록 합니다.
 *
 * @param id - 요소의 ID
 * @returns HTMLElement 또는 null
 *
 * @example
 * const content = getElement<HTMLDivElement>('content');
 * if (content) {
 *   content.innerHTML = 'Hello';
 * }
 */
export function getElement<T extends HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

/**
 * Required element getter
 *
 * 요소가 없으면 명확한 에러 메시지와 함께 예외를 발생시킵니다.
 * 반드시 존재해야 하는 요소에 사용하세요.
 *
 * @param id - 요소의 ID
 * @returns HTMLElement (null이 아님을 보장)
 * @throws {Error} 요소를 찾을 수 없는 경우
 *
 * @example
 * const content = requireElement<HTMLDivElement>('content');
 * content.innerHTML = 'Hello'; // null 체크 불필요
 */
export function requireElement<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id) as T | null;
  if (!element) {
    throw new Error(`Required element not found: #${id}`);
  }
  return element;
}
