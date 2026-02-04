import { describe, it, expect, beforeEach, beforeAll, afterAll } from 'vitest';
import { renderMarkdownWithComponents } from '../src/scripts/load_md';
import {
  setupTestEnvironment,
  waitForComponentRender,
  type TestEnvironment,
} from './helpers/test-environment';
import { registerMockComponents } from './helpers/component-factory';
import {
  CARD_COMPONENT_TEST_CASES,
  BUTTON_COMPONENT_TEST_CASES,
  HOME_LINK_CARD_COMPONENT_TEST_CASES,
} from './fixtures/component-test-data';

let testEnv: TestEnvironment;
let document: Document;
let contentElement: HTMLElement;

beforeAll(() => {
  testEnv = setupTestEnvironment();
  registerMockComponents(testEnv.dom);
});

afterAll(() => {
  testEnv.cleanup();
});

beforeEach(() => {
  document = testEnv.document;
  document.body.innerHTML = '<div id="content" class="markdown-content"></div>';
  contentElement = document.getElementById('content')!;
});

describe('renderMarkdownWithComponents', () => {
  describe('웹 컴포넌트 렌더링 검증', () => {
    // card-component 동적 테스트
    it.each(CARD_COMPONENT_TEST_CASES)(
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

    // button-component 동적 테스트
    it.each(BUTTON_COMPONENT_TEST_CASES)(
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

    // home-link-card-component 동적 테스트
    it.each(HOME_LINK_CARD_COMPONENT_TEST_CASES)(
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

  describe('에지 케이스 검증', () => {
    it('속성 값이 없는 컴포넌트도 렌더링됨', async () => {
      // Arrange
      const mdText = '<card-component></card-component>';

      // Act
      await renderMarkdownWithComponents(mdText, contentElement);
      await waitForComponentRender();

      // Assert
      const component = contentElement.querySelector('card-component');
      expect(component).toBeTruthy();
      expect(component!.innerHTML).toContain('href="#"'); // 기본값 확인
    });
  });
});
