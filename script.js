document.addEventListener("DOMContentLoaded", function () {
    loadMarkdown();
    window.addEventListener("hashchange", loadMarkdown);
});

function loadMarkdown() {
    let page = location.hash ? location.hash.substring(1) : "home"; // 기본값: home
    let mdFile = `docs/${page}.md`; // Markdown 파일 경로

    fetch(mdFile)
        .then(response => {
            if (!response.ok) {
                throw new Error("페이지를 찾을 수 없습니다.");
            }
            return response.text();
        })
        .then(mdText => {
            document.getElementById("content").innerHTML = marked.parse(mdText);
        })
        .catch(error => {
            document.getElementById("content").innerHTML = "<h3>페이지를 찾을 수 없습니다.</h3>";
        });
}
