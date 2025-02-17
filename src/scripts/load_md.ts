import { marked } from "marked";

// Vite의 `import.meta.glob()`을 사용하여 `docs/` 폴더 내 모든 `.md` 파일을 가져옴.
const markdownFiles = import.meta.glob("/docs/**/*.md", { as: "raw" });

async function loadMarkdown(page: string) {
    try {
        console.log(`📥 Loading Markdown: ${page}`);

        // `docs/${page}.md` 형식의 파일을 찾음
        const filePath = `/docs/${page}.md`;
        if (!markdownFiles[filePath]) throw new Error(`❌ 페이지를 찾을 수 없습니다: ${page}`);

        const mdText = await markdownFiles[filePath](); // 비동기적으로 가져오기
        if (!mdText.trim()) throw new Error(`Markdown 파일이 비어 있습니다: ${page}`);

        const htmlContent = await marked.parse(mdText);
        document.getElementById("content")!.innerHTML = htmlContent;
        
        console.log("✅ Markdown 로드 완료!");
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
        let page = location.hash ? location.hash.substring(1) : "home"; // 기본 페이지
        console.log(`🔄 페이지 변경 감지: ${page}`);
        loadMarkdown(page);
    }

    window.addEventListener("hashchange", updateMarkdown);
    window.addEventListener("popstate", updateMarkdown);
    updateMarkdown(); // 초기 실행
}
