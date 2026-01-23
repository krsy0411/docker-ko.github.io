import { marked } from 'marked';

// marked 옵션 설정 (브레이크, GFM 지원 등)
marked.setOptions({
  gfm: true,
  breaks: true,
});

// card-component를 블록 태그 및 셀프 클로징 태그로 처리하는 커스텀 토크나이저 추가
// 템플릿 리터럴에서 역참조(\1) 사용 불가하므로 정규식 리터럴로 하드코딩
const blockTagRegex =
  /^<(card-component)([\s\S]*?)(?:>([\s\S]*?)<\/card-component>|\s*\/)>/i;

const customBlockTokenizer = {
  name: 'custom-block-tag',
  level: 'block',
  start(src: string) {
    return src.match(blockTagRegex)?.index;
  },
  tokenizer(src: string) {
    const match = blockTagRegex.exec(src);
    if (match) {
      return {
        type: 'html',
        raw: match[0],
        text: match[0],
      };
    }
    return;
  },
} as const;

marked.use({ extensions: [customBlockTokenizer] });

/**
 * 마크다운과 HTML을 함께 렌더링
 * marked.js는 HTML 태그(div, card-component, button-component 등)를 자동으로 통과시킴
 * 웹 컴포넌트는 브라우저가 인식하여 자동으로 렌더링
 */
export async function renderMarkdownWithComponents(
  mdText: string,
  contentElement: HTMLElement
) {
  // marked.js가 마크다운 구문을 파싱하고 HTML은 그대로 통과
  const html = await marked.parse(mdText);
  contentElement.innerHTML = html;
}

async function loadMarkdown(page: string) {
  try {
    const response = await fetch(`/docs/${page}.md`);

    // HTTP 상태코드 확인
    if (!response.ok) {
      throw new Error(`❌ 페이지를 찾을 수 없습니다: ${page}`);
    }

    const mdText = await response.text();

    // Content-Type 확인 (개발 서버가 HTML을 반환하는 경우 대비)
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('text/html')) {
      throw new Error(`❌ 요청된 경로가 HTML을 반환합니다: ${page}`);
    }

    // 응답 내용이 HTML인지 확인 (더 정확한 검사)
    const trimmedText = mdText.trim();
    if (
      trimmedText.startsWith('<!DOCTYPE html>') ||
      trimmedText.startsWith('<html>') ||
      (trimmedText.startsWith('<title>') && trimmedText.includes('</title>'))
    ) {
      throw new Error(
        `❌ 요청된 경로가 Markdown이 아닌 HTML을 반환합니다: ${page}`
      );
    }

    const contentElement = document.getElementById('content')!;
    contentElement.innerHTML = '';
    await renderMarkdownWithComponents(mdText, contentElement);
  } catch {
    document.getElementById('content')!.innerHTML = `
      <div id="not-found" class="w-full">
        <p>열심히 문서를 업데이트하고 있습니다💦. 더 풍부한 한국어 번역 자료를 제공하기 위해 웹사이트 발전에 기여하고 싶다면 <a href="https://github.com/docker-ko/docker-ko.github.io">깃허브 레포지토리 주소</a>를 클릭하세요!</p>
        <button-component href="#/home" title="홈으로 돌아가기" />
      </div>
    `;
  }
}

export async function initializeMarkdownLoader() {
  const page = location.hash ? location.hash.substring(2) : 'home';
  await loadMarkdown(page);
}
