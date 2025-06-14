import { marked } from 'marked';

// ✅ marked 옵션 설정 (브레이크, GFM 지원 등)
marked.setOptions({
  gfm: true,
  breaks: true,
});

/**
 * mdText를 웹 컴포넌트 태그(<box-component>, <button-component>) 기준으로 분할하여
 * 마크다운은 파싱하고, 웹 컴포넌트는 그대로 삽입하는 함수
 */
export async function renderMarkdownWithComponents(
  mdText: string,
  contentElement: HTMLElement
) {
  const tokens = mdText
    .split(/(<\/?box-component[^>]*>|<\/?button-component[^>]*>)/gi)
    .filter(Boolean);

  for (const token of tokens) {
    if (/^<\/?(box-component|button-component)[^>]*>$/.test(token)) {
      contentElement.innerHTML += token;
    } else if (token.trim()) {
      const html = await marked.parse(token);
      contentElement.innerHTML += html;
    }
  }
}

async function loadMarkdown(page: string) {
  try {
    const response = await fetch(`/docs/${page}.md?cache=${Date.now()}`);
    if (!response.ok) throw new Error(`❌ 페이지를 찾을 수 없습니다: ${page}`);
    const mdText = await response.text();

    if (
      mdText.trim().startsWith('<!DOCTYPE html>') ||
      mdText.includes('<html>')
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
        <p>페이지를 찾을 수 없습니다.</p>
        <a href="#/home" class="back-home">홈으로 돌아가기</a>
      </div>
    `;
  }
}

export async function initializeMarkdownLoader() {
  const page = location.hash ? location.hash.substring(2) : 'home';
  await loadMarkdown(page);
}
