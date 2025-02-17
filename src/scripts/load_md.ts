import { marked } from "marked";

async function loadMarkdown(page: string) {
    try {
        console.log(`Fetching Markdown: /docs/${page}.md`); // 디버깅 로그 추가

        const response = await fetch(`/docs/${page}.md?cache=${Date.now()}`);
        if (!response.ok) throw new Error(`페이지를 찾을 수 없습니다: ${page}`);

        const mdText = await response.text();
        if (mdText.trim().startsWith("<!DOCTYPE html>") || mdText.includes("<html")) throw new Error(`요청된 경로가 Markdown이 아닌 HTML을 반환합니다: ${page}`);
        if (!mdText.trim()) throw new Error(`Markdown 파일이 비어 있습니다: ${page}`);

        const htmlContent = marked.parse(mdText);

        const contentElement = document.getElementById("content")!;
        contentElement.innerHTML = await htmlContent;  // HTML 삽입
        
        console.log(`Markdown 로드 완료! ${mdText}`);
    } catch (error) {
        console.error(error);
        document.getElementById("content")!.innerHTML = `
            <div class="not-found">
                <h2>페이지를 찾을 수 없습니다.</h2>
                <p>요청하신 문서를 찾을 수 없습니다. 경로를 확인해 주세요.</p>
                <a href="/" class="back-home">홈으로 돌아가기</a>
            </div>
        `;
    }
}


export function initializeMarkdownLoader() {
    function updateMarkdown() {
        let page: string;

        if (location.hash) {
            page = location.hash.substring(1); // 해시(#)를 제거한 경로
        } else {
            // 해시가 없는 경우 location.pathname 사용
            page = location.pathname.startsWith("/") ? location.pathname.substring(1) : location.pathname;
        }

        console.log(`현재 location.pathname: ${location.pathname}`);
        console.log(`현재 location.hash: ${location.hash}`);
        console.log(`페이지 변경 감지: ${page}`);

        loadMarkdown(page);
    }

    window.addEventListener("hashchange", updateMarkdown);
    window.addEventListener("popstate", updateMarkdown); // 브라우저 뒤로 가기/앞으로 가기 감지
    updateMarkdown(); // 초기 실행
}

