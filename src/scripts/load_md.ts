import { marked } from "marked";

async function loadMarkdown(page: string) {
    try {
        console.log(`📥 Fetching Markdown: /docs/${page}.md`); // 디버깅 로그 추가

        const response = await fetch(`/docs/${page}.md?cache=${Date.now()}`);
        if (!response.ok) throw new Error(`❌ 페이지를 찾을 수 없습니다: ${page}`);

        const mdText = await response.text();
        if (mdText.trim().startsWith("<!DOCTYPE html>") || mdText.includes("<html"))
            throw new Error(`❌ 요청된 경로가 Markdown이 아닌 HTML을 반환합니다: ${page}`);

        const htmlContent = marked.parse(mdText);
        document.getElementById("content")!.innerHTML = await htmlContent;
        
        console.log("✅ Markdown 로드 완료!");
    } catch (error) {
        console.error(error);
        document.getElementById("content")!.innerHTML = `
            <div class="not-found">
                <h2>페이지를 찾을 수 없습니다.</h2>
                <p>요청하신 문서를 찾을 수 없습니다. 경로를 확인해 주세요.</p>
                <a href="#/home" class="back-home">홈으로 돌아가기</a>
            </div>
        `;
    }
}

export function initializeMarkdownLoader() {
    function updateMarkdown() {
        let page = location.hash ? location.hash.substring(2) : "home";

        console.log(`🔄 해시 기반 페이지 변경 감지: ${page}`);
        loadMarkdown(page);
    }

    window.addEventListener("hashchange", updateMarkdown);
    updateMarkdown(); // 초기 실행
}
