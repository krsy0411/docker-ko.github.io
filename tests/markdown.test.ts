import { describe, it, expect, beforeEach, beforeAll } from 'vitest';
import { JSDOM } from 'jsdom';
import { renderMarkdownWithComponents } from '../src/scripts/load_md';

let dom: JSDOM;
let document: Document;
let contentElement: HTMLElement;

beforeAll(() => {
  dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');

  // JSDOM 글로벌 환경 설정
  /* eslint-disable @typescript-eslint/no-explicit-any */
  (global as any).window = dom.window;
  (global as any).document = dom.window.document;
  (global as any).HTMLElement = dom.window.HTMLElement;
  (global as any).customElements = dom.window.customElements;
  /* eslint-enable @typescript-eslint/no-explicit-any */

  // CardComponent 정의
  class CardComponent extends dom.window.HTMLElement {
    connectedCallback() {
      const title = this.getAttribute('title') || '';
      const description = this.getAttribute('description') || '';
      const imgsrc = this.getAttribute('imgsrc') || '';
      const href = this.getAttribute('href') || '#';

      this.innerHTML = `
        <div class="card">
          <a href="${href}" class="card-link">
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
    }
  }

  // ButtonComponent 정의
  class ButtonComponent extends dom.window.HTMLElement {
    connectedCallback() {
      const title = this.getAttribute('title') || '';
      const href = this.getAttribute('href') || '#';

      this.innerHTML = `
        <button type="button" class="not-prose my-4">
          <a href="${href}" class="cursor-pointer py-2 px-4 rounded bg-[#086dd7] hover:bg-[#2560ff] text-white!">
            ${title}
          </a>
        </button>
      `;
    }
  }

  // HomeLinkCardComponent 정의
  class HomeLinkCardComponent extends dom.window.HTMLElement {
    connectedCallback() {
      const title = this.getAttribute('title') || '';
      const description = this.getAttribute('description') || '';
      const href = this.getAttribute('href') || '#';
      const icon = this.getAttribute('icon') || 'rocket';

      this.innerHTML = `
        <a href="${href}" class="home-link-card" data-icon="${icon}">
          <h3>${title}</h3>
          <p>${description}</p>
        </a>
      `;
    }
  }

  dom.window.customElements.define('card-component', CardComponent);
  dom.window.customElements.define('button-component', ButtonComponent);
  dom.window.customElements.define(
    'home-link-card-component',
    HomeLinkCardComponent
  );
});

beforeEach(() => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  document = (global as any).document;
  document.body.innerHTML = '<div id="content"></div>';
  contentElement = document.getElementById('content')!;
});

/**
 * 웹 컴포넌트 렌더링을 위한 헬퍼 함수
 * connectedCallback이 실행될 충분한 시간 대기
 */
async function waitForComponentRender() {
  await new Promise((resolve) => setTimeout(resolve, 50));
}

describe('renderMarkdownWithComponents', () => {
  describe('웹 컴포넌트 렌더링 검증', () => {
    // 동적 입력값을 사용한 card-component 테스트
    it.each([
      {
        title: 'Docker 개요',
        description: 'Docker의 기본 개념',
        imgsrc: '/imgs/docker.svg',
        href: '/overview',
      },
      {
        title: 'Kubernetes',
        description: '컨테이너 오케스트레이션',
        imgsrc: '/imgs/k8s.svg',
        href: '/k8s',
      },
    ])(
      'card-component가 올바르게 렌더링됨: $title',
      async ({ title, description, imgsrc, href }) => {
        // Arrange
        const mdText = `<card-component title="${title}" description="${description}" imgsrc="${imgsrc}" href="${href}"></card-component>`;

        // Act
        await renderMarkdownWithComponents(mdText, contentElement);
        await waitForComponentRender();

        // Assert
        const component = contentElement.querySelector('card-component');
        expect(component).toBeTruthy();
        expect(component!.innerHTML).toContain(title);
        expect(component!.innerHTML).toContain(description);
        expect(component!.querySelector('.card')).toBeTruthy();
      }
    );

    // 동적 입력값을 사용한 button-component 테스트
    it.each([
      { title: '시작하기', href: '/get-started' },
      { title: '문서 보기', href: '/docs' },
      { title: '튜토리얼', href: '/tutorial' },
    ])(
      'button-component가 올바르게 렌더링됨: $title',
      async ({ title, href }) => {
        // Arrange
        const mdText = `<button-component title="${title}" href="${href}"></button-component>`;

        // Act
        await renderMarkdownWithComponents(mdText, contentElement);
        await waitForComponentRender();

        // Assert
        const component = contentElement.querySelector('button-component');
        expect(component).toBeTruthy();
        expect(component!.innerHTML).toContain(title);
        expect(component!.innerHTML).toContain(`href="${href}"`);
      }
    );

    // 동적 입력값을 사용한 home-link-card-component 테스트
    it.each([
      {
        title: '문서 시작하기',
        description: 'Docker 기본 사항을 배워보세요',
        icon: 'book',
        href: '#/get-started',
      },
      {
        title: 'GitHub 저장소',
        description: '소스 코드 보기 및 기여하기',
        icon: 'github',
        href: 'https://github.com/docker-ko/docker-ko.github.io',
      },
    ])(
      'home-link-card-component가 올바르게 렌더링됨: $title',
      async ({ title, description, icon, href }) => {
        // Arrange
        const mdText = `<home-link-card-component title="${title}" description="${description}" icon="${icon}" href="${href}"></home-link-card-component>`;

        // Act
        await renderMarkdownWithComponents(mdText, contentElement);
        await waitForComponentRender();

        // Assert
        const component = contentElement.querySelector(
          'home-link-card-component'
        );
        expect(component).toBeTruthy();
        expect(component!.innerHTML).toContain(title);
        expect(component!.innerHTML).toContain(description);
      }
    );
  });

  describe('마크다운 파싱 검증', () => {
    it('일반 마크다운 텍스트가 HTML로 변환됨', async () => {
      // Arrange
      const mdText = '# 제목\n\n본문 내용입니다.';

      // Act
      await renderMarkdownWithComponents(mdText, contentElement);

      // Assert
      expect(contentElement.innerHTML).toContain('<h1');
      expect(contentElement.innerHTML).toContain('제목');
      expect(contentElement.innerHTML).toContain('본문 내용');
    });

    it('마크다운과 웹 컴포넌트가 혼합되어 렌더링됨', async () => {
      // Arrange
      const mdText = `
# Docker 시작하기

Docker를 배워보세요.

<button-component title="시작하기" href="/start"></button-component>
      `.trim();

      // Act
      await renderMarkdownWithComponents(mdText, contentElement);
      await waitForComponentRender();

      // Assert
      expect(contentElement.innerHTML).toContain('<h1');
      expect(contentElement.innerHTML).toContain('Docker 시작하기');

      const button = contentElement.querySelector('button-component');
      expect(button).toBeTruthy();
      expect(button!.innerHTML).toContain('시작하기');
    });
  });
});
