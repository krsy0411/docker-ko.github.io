/**
 * 웹 컴포넌트 목 객체 팩토리
 * 테스트용 웹 컴포넌트를 동적으로 생성하여 코드 중복 제거
 */

import type { JSDOM } from 'jsdom';

interface ComponentConfig {
  name: string;
  attributes: string[];
  renderFn: (attrs: Record<string, string>) => string;
}

/**
 * 주어진 설정으로 목 웹 컴포넌트 클래스 생성
 */
function createMockComponent(
  baseElement: typeof HTMLElement,
  config: ComponentConfig
): typeof HTMLElement {
  return class extends baseElement {
    connectedCallback() {
      const attrs: Record<string, string> = {};
      config.attributes.forEach((attr) => {
        attrs[attr] = this.getAttribute(attr) || '';
      });
      this.innerHTML = config.renderFn(attrs);
    }
  };
}

/**
 * 컴포넌트 설정 목록
 * 새 컴포넌트 추가 시 여기에만 추가하면 됨 (Open/Closed Principle)
 */
const COMPONENT_CONFIGS: ComponentConfig[] = [
  {
    name: 'card-component',
    attributes: ['title', 'description', 'imgsrc', 'href'],
    renderFn: ({ title, description, imgsrc, href }) => {
      const hrefValue = href || '#';
      return `
      <div class="card">
        <a href="${hrefValue}" class="card-link">
          ${
            imgsrc
              ? `<div class="card-icon">
            <img class="card-img" src="${imgsrc}" alt="${title}" />
          </div>`
              : ''
          }
          <div class="card-content">
            <p class="card-description">
              <strong class="card-title">${title}</strong><br />
              ${description}
            </p>
          </div>
        </a>
      </div>
    `;
    },
  },
  {
    name: 'button-component',
    attributes: ['title', 'href'],
    renderFn: ({ title, href }) => {
      const hrefValue = href || '#';
      return `
      <button type="button" class="not-prose my-4">
        <a href="${hrefValue}" class="cursor-pointer py-2 px-4 rounded bg-[#086dd7] hover:bg-[#2560ff] text-white!">
          ${title}
        </a>
      </button>
    `;
    },
  },
  {
    name: 'home-link-card-component',
    attributes: ['title', 'description', 'href', 'icon'],
    renderFn: ({ title, description, href, icon }) => {
      const hrefValue = href || '#';
      const iconValue = icon || 'rocket';
      return `
      <a href="${hrefValue}" class="home-link-card" data-icon="${iconValue}">
        <h3>${title}</h3>
        <p>${description}</p>
      </a>
    `;
    },
  },
];

/**
 * JSDOM 환경에 모든 목 컴포넌트 등록
 */
export function registerMockComponents(dom: JSDOM): void {
  COMPONENT_CONFIGS.forEach((config) => {
    const ComponentClass = createMockComponent(dom.window.HTMLElement, config);
    dom.window.customElements.define(config.name, ComponentClass);
  });
}
