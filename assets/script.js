document.addEventListener("DOMContentLoaded", function () {
    loadMarkdown();
    loadSideNav();
    window.addEventListener("hashchange", function () {
        loadMarkdown();
        loadSideNav();
    });
});

// Markdown 파일 로드
function loadMarkdown() {
    let page = location.hash ? location.hash.substring(1) : "get-started";
    let mdFile = `docs/${page}.md`;

    fetch(mdFile)
        .then(response => {
            if (!response.ok) throw new Error("페이지를 찾을 수 없습니다.");
            return response.text();
        })
        .then(mdText => {
            document.getElementById("content").innerHTML = marked.parse(mdText);
        })
        .catch(error => {
            document.getElementById("content").innerHTML = "<h3>페이지를 찾을 수 없습니다.</h3>";
        });
}

// 사이드 네비게이션 로드
function loadSideNav() {
    let section = location.hash ? location.hash.split("/")[0].substring(1) : "get-started";
    fetch("assets/side_nav.json")
        .then(response => response.json())
        .then(data => {
            let sidebar = document.getElementById("side-nav");
            let title = document.getElementById("sidebar").querySelector("h4");

            if (data[section]) {
                title.innerText = data[section].title;
                sidebar.innerHTML = ""; // 기존 목록 삭제 후 새 목록 추가
                sidebar.appendChild(createNavList(data[section].links));
            } else {
                title.innerText = "문서 없음";
                sidebar.innerHTML = "<p>해당 문서의 네비게이션을 찾을 수 없습니다.</p>";
            }
        })
        .catch(error => console.error("네비게이션 로드 오류:", error));
}

// 재귀적으로 리스트 생성 (하위 항목 드롭다운 지원)
function createNavList(links) {
    let ul = document.createElement("ul");

    links.forEach(link => {
        let li = document.createElement("li");

        if (link.url) {
            let a = document.createElement("a");
            a.href = link.url;
            a.innerText = link.name;
            li.appendChild(a);
        }

        if (link.children) {
            let dropdownBtn = document.createElement("button");
            dropdownBtn.innerText = link.name;
            dropdownBtn.classList.add("dropdown-toggle");
            dropdownBtn.style.border = "none";
            dropdownBtn.style.background = "none";
            dropdownBtn.style.cursor = "pointer";
            dropdownBtn.style.fontWeight = "bold";

            let subList = createNavList(link.children);
            subList.style.display = "none"; // 기본적으로 숨김
            subList.style.marginLeft = "10px"; // 들여쓰기 적용

            li.appendChild(dropdownBtn);
            li.appendChild(subList);

            // 이벤트 리스너 중복 방지 및 아이콘 전환
            dropdownBtn.onclick = function () {
                let isOpen = subList.style.display === "block";
                subList.style.display = isOpen ? "none" : "block";
                dropdownBtn.classList.toggle("open", !isOpen);
            };
        }

        ul.appendChild(li);
    });

    return ul;
}
