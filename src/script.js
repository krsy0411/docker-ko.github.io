import { marked } from "marked";

async function loadMarkdown(page) {
    const response = await fetch(`docs/${page}.md`);
    if (!response.ok) {
        document.getElementById("content").innerHTML = "<h3>페이지를 찾을 수 없습니다.</h3>";
        return;
    }
    const mdText = await response.text();
    document.getElementById("content").innerHTML = marked.parse(mdText);
}

document.addEventListener("DOMContentLoaded", () => {
    const page = location.hash ? location.hash.substring(1) : "get-started/readme";
    loadMarkdown(page);
    window.addEventListener("hashchange", () => loadMarkdown(location.hash.substring(1)));
});
