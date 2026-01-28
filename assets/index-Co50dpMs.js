var rt=Object.defineProperty;var it=(n,e,t)=>e in n?rt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var b=(n,e,t)=>it(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();class st extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
      <footer class="w-full mt-auto border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div class="max-w-[1920px] mx-auto px-4 sm:px-6 py-6">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <!-- Logo Section -->
            <div class="flex items-baseline gap-1.5">
              <span class="text-xl font-bold text-blue-600 dark:text-blue-400">Docker</span>
              <span class="text-lg font-bold text-pink-500 dark:text-pink-400">KO</span>
            </div>

            <!-- Center - Links Section (hidden on mobile, shown on desktop) -->
            <div class="hidden md:flex items-center">
              <a
                href="https://github.com/docker-ko/docker-ko.github.io"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-gray-600 dark:text-gray-400 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <span class="text-sm font-medium">GitHub</span>
              </a>
            </div>

            <!-- Right - Copyright -->
            <div class="text-sm text-gray-500 dark:text-gray-400">
              © 2025 Docker 한국어 문서
            </div>

            <!-- Mobile - GitHub Link (shown only on mobile) -->
            <div class="md:hidden flex items-center">
              <a
                href="https://github.com/docker-ko/docker-ko.github.io"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-gray-600 dark:text-gray-400 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <span class="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    `}}customElements.define("footer-component",st);class at extends HTMLElement{constructor(){super()}setupNavigationListeners(){window.addEventListener("hashchange",()=>{const e=window.location.hash.replace("#","");this.querySelectorAll(".nav-item").forEach(r=>{const i=r.getAttribute("data-path"),s=r.querySelector("a");i&&e.startsWith(i)?(s==null||s.classList.add("bg-blue-100","dark:bg-blue-900/30","text-blue-600","dark:text-blue-400"),s==null||s.classList.remove("text-gray-600","dark:text-gray-400")):(s==null||s.classList.remove("bg-blue-100","dark:bg-blue-900/30","text-blue-600","dark:text-blue-400"),s==null||s.classList.add("text-gray-600","dark:text-gray-400"))})}),window.dispatchEvent(new Event("hashchange"))}connectedCallback(){this.innerHTML=`
      <header class="w-full sticky top-0 z-20 px-4 sm:px-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 backdrop-blur-lg bg-white/95 dark:bg-gray-900/95 shadow-sm">
        <div class="max-w-[1920px] mx-auto flex items-center justify-between h-16">
          <!-- Logo Section -->
          <div class="flex items-center gap-4 sm:gap-6">
            <a href="/" title="Docker korean translation home page" class="group flex items-baseline gap-1.5 transition-transform duration-200 hover:scale-105">
              <span class="text-3xl sm:text-4xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
                Docker
              </span>
              <span class="text-2xl sm:text-3xl font-bold tracking-wider text-pink-500 dark:text-pink-400">
                KO
              </span>
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden md:block">
              <ul class="flex items-center gap-1">
                <li class="nav-item" data-path="/get-started">
                  <a
                    class="block px-3 py-1.5 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white whitespace-nowrap"
                    href="#/get-started"
                  >
                    Get started
                  </a>
                </li>
                <li class="nav-item" data-path="/guides">
                  <a
                    class="block px-3 py-1.5 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white whitespace-nowrap"
                    href="#/guides"
                  >
                    Guides
                  </a>
                </li>
                <li class="nav-item" data-path="/manuals">
                  <a
                    class="block px-3 py-1.5 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white whitespace-nowrap"
                    href="#/manuals"
                  >
                    Manuals
                  </a>
                </li>
                <li class="nav-item" data-path="/reference">
                  <a
                    class="block px-3 py-1.5 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white whitespace-nowrap"
                    href="#/reference"
                  >
                    Reference
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    `,this.setupNavigationListeners()}}customElements.define("header-component",at);class ot extends HTMLElement{static get observedAttributes(){return["imgsrc","href","title","description"]}constructor(){super()}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}render(){const e=this.getAttribute("imgsrc"),t=this.getAttribute("href")||"#",r=this.getAttribute("title")||"",i=this.getAttribute("description")||"";this.innerHTML=`
      <div class="card">
        <a href="${t}" class="card-link">
          ${e?`<div class="card-icon">
                <img class="card-img" src="${e}" alt="${r}" />
              </div>`:""}
          <div class="card-content">
            <p class="card-description">
              <strong class="card-title">${r}</strong><br />
              ${i}
            </p>
          </div>
        </a>
      </div>
    `}}customElements.define("card-component",ot);class lt extends HTMLElement{static get observedAttributes(){return["href","title"]}constructor(){super()}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}render(){const e=this.getAttribute("href")||"#",t=this.getAttribute("title")||"";this.innerHTML=`
            <button type="button" class="not-prose my-4">
                <a href="${e}" class="cursor-pointer py-2 px-4 rounded bg-[#086dd7] hover:bg-[#2560ff] text-white!">
                    ${t}
                </a>
            </button>
        `}}customElements.define("button-component",lt);class ct extends HTMLElement{constructor(){super();b(this,"currentRoute","")}connectedCallback(){this.render(),this.setupEventListeners()}getCurrentRoute(){return window.location.hash.slice(2).split("/")[0]||"get-started"}async loadNavData(){this.currentRoute=this.getCurrentRoute();try{const t=await fetch(`/data/nav/${this.currentRoute}.json`);if(!t.ok)throw new Error(`Failed to load navigation data for ${this.currentRoute}`);return await t.json()}catch(t){return console.error("Error loading navigation data:",t),await(await fetch("/data/nav/get-started.json")).json()}}isGetStartedData(t){return this.currentRoute==="get-started"||Object.values(t)[0]&&typeof Object.values(t)[0]=="object"&&!Array.isArray(Object.values(t)[0])}generateGetStartedNav(t){return Object.entries(t).map(([,r])=>r.children?this.generateSectionWithChildren(r):`
          <li class="rounded px-2 hover:text-blue-500 hover:dark:text-blue-500">
            <a class="block w-full truncate py-2" href="${r.href_path}">
              ${r.name}
            </a>
          </li>
        `).join("")}generateSectionWithChildren(t){const r=t.children?Object.entries(t.children).map(([,i])=>i.children?this.generateNestedSection(i):`
            <li class="rounded px-2 hover:text-blue-500 hover:dark:text-blue-500">
              <a class="block w-full truncate py-2" 
                 href="${i.href_path}" 
                 title="${i.name}">
                ${i.name}
              </a>
            </li>
          `).join(""):"";return`
      <li>
        <div class="section__wrapper flex w-full items-center justify-between rounded px-2">
          <div class="w-full truncate py-2">
            ${t.href_path?`<a class="block select-none hover:text-blue-500 hover:dark:text-blue-500" 
                 href="${t.href_path}">
                ${t.name}
              </a>`:`<span class="block select-none">
                ${t.name}
              </span>`}
          </div>
          <button class="inline-flex h-7 w-7 items-center justify-center rounded hover:cursor-pointer hover:bg-gray-400 hover:dark:bg-gray-400" aria-label="Toggle section" aria-expanded="false">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="12" height="12">
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
              </svg>
            </span>
            <span class="hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="12" height="12">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 129.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
              </svg>
            </span>
          </button>
        </div>
        <ul class="ml-3 hidden">
          ${r}
        </ul>
      </li>
    `}generateNestedSection(t){const r=t.children?Object.entries(t.children).map(([,i])=>`
        <li class="rounded px-2 hover:text-blue-500 hover:dark:text-blue-500">
          <a class="block w-full truncate py-2" 
             href="${i.href_path}" 
             title="${i.name}">
            ${i.name}
          </a>
        </li>
      `).join(""):"";return`
      <li>
        <div class="section__wrapper flex w-full items-center justify-between rounded px-2">
          <div class="w-full truncate py-2">
            ${t.href_path?`<a class="block select-none hover:text-blue-500 hover:dark:text-blue-500" 
                 href="${t.href_path}">
                ${t.name}
              </a>`:`<span class="block select-none">
                ${t.name}
              </span>`}
          </div>
          <button class="inline-flex h-7 w-7 items-center justify-center rounded hover:cursor-pointer hover:bg-gray-400 hover:dark:bg-gray-400"
                  aria-label="Toggle section" 
                  aria-expanded="false">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="12" height="12">
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
              </svg>
            </span>
            <span class="hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="12" height="12">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 129.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
              </svg>
            </span>
          </button>
        </div>
        <ul class="ml-3 hidden">
          ${r}
        </ul>
      </li>
    `}generateGuidesNav(t){return Object.entries(t).map(([r,i])=>`
      <li class="mb-2">
        <h3 class="mb-2 text-lg font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
          ${r}
        </h3>
        <ul class="ml-0">
          ${i.map(s=>`
            <li class="rounded px-2 hover:text-blue-500 hover:dark:text-blue-500">
              <div class="flex items-center py-2">
                <input type="checkbox" class="mr-2 rounded cursor-pointer" id="${r.toLowerCase()}-${s.toLowerCase().replace(/\s+/g,"-").replace(/[#+]/g,"")}">
                <label class="block w-full truncate cursor-pointer" for="${r.toLowerCase()}-${s.toLowerCase().replace(/\s+/g,"-").replace(/[#+]/g,"")}">
                  ${s}
                </label>
              </div>
            </li>
          `).join("")}
        </ul>
      </li>
    `).join("")}setupEventListeners(){this.addEventListener("click",t=>{const r=t.target.closest("button");r&&r.getAttribute("aria-label")==="Toggle section"&&this.toggleSection(r)}),window.addEventListener("hashchange",()=>{this.getCurrentRoute()!==this.currentRoute&&this.render()})}toggleSection(t){var a;const r=t.closest(".section__wrapper"),i=(a=r==null?void 0:r.parentElement)==null?void 0:a.querySelector("ul.ml-3");i&&i.classList.toggle("hidden"),t.querySelectorAll("span").forEach(u=>{u.classList.toggle("hidden")});const l=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",(!l).toString())}async render(){try{const t=await this.loadNavData();let r="";this.isGetStartedData(t)?r=this.generateGetStartedNav(t):r=this.generateGuidesNav(t),this.innerHTML=`
        <div class="dark:bg-gray-dark-100 z-50 w-full p-4 md:block h-full">
          <div id="nav__content" class="flex flex-col font-light text-black md:text-base">
            <ul>
              ${r}
            </ul>
          </div>
        </div>
      `}catch{this.innerHTML=`
        <div class="dark:bg-gray-dark-100 z-50 w-full p-4 md:block">
          <div class="text-black">네비게이션을 로드할 수 없습니다. 새로고침을 해보세요.</div>
        </div>
      `}}}customElements.define("nav-component",ct);class ut extends HTMLElement{static get observedAttributes(){return["username","avatar","role"]}constructor(){super()}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}render(){const e=this.getAttribute("username"),t=this.getAttribute("avatar"),r=this.escapeHtml(this.getAttribute("role")||"기여자");if(!e)this.innerHTML=`
        <a
          href="https://github.com/docker-ko/docker-ko.github.io?tab=readme-ov-file#%EC%B0%B8%EC%97%AC-%EB%B0%A9%EB%B2%95"
          target="_blank"
          rel="noopener noreferrer"
          class="group block w-full"
          aria-label="기여 가이드 보기"
        >
          <div class="
            relative
            overflow-hidden
            rounded-2xl
            border-2
            border-dashed
            border-gray-300
            bg-white
            p-4
            transition-all
            duration-300
            ease-out
            hover:border-blue-400
            hover:shadow-xl
            hover:-translate-y-1
            dark:border-gray-600
            dark:bg-gray-800
            dark:hover:border-blue-500
          ">
            <!-- 컨텐츠 -->
            <div class="relative flex flex-col items-center gap-3">
              <!-- + 아이콘 -->
              <div class="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-white
                ring-4
                ring-gray-200
                transition-all
                duration-300
                group-hover:ring-blue-300
                group-hover:scale-105
                dark:bg-gray-800
                dark:ring-gray-600
                dark:group-hover:ring-blue-600
              ">
                <svg
                  class="h-10 w-10 text-gray-400 transition-colors duration-300 group-hover:text-blue-500 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>

              <!-- 텍스트 -->
              <div class="flex flex-col items-center gap-1 text-center">
                <div class="
                  text-base
                  font-semibold
                  text-gray-700
                  transition-colors
                  duration-300
                  group-hover:text-blue-600
                  dark:text-gray-300
                  dark:group-hover:text-blue-400
                ">
                  기여하기
                </div>

                <span class="
                  inline-flex
                  items-center
                  rounded-full
                  bg-white
                  px-2.5
                  py-0.5
                  text-xs
                  font-medium
                  text-gray-600
                  transition-all
                  duration-300
                  group-hover:bg-blue-100
                  group-hover:text-blue-700
                  dark:bg-gray-700
                  dark:text-gray-300
                  dark:group-hover:bg-blue-900/50
                  dark:group-hover:text-blue-300
                ">
                  함께 만들어요
                </span>
              </div>
            </div>
          </div>
        </a>
      `;else{const s=this.escapeHtml(e),l=`https://github.com/${e}`,a=t||"https://avatars.githubusercontent.com/u/0?v=4";this.innerHTML=`
        <a
          href="${l}"
          target="_blank"
          rel="noopener noreferrer"
          class="group block w-full"
          aria-label="${e}의 GitHub 프로필 보기"
        >
          <div class="
            relative
            overflow-hidden
            rounded-2xl
            bg-white/80
            backdrop-blur-sm
            p-4
            shadow-sm
            transition-all
            duration-300
            ease-out
            hover:shadow-xl
            hover:-translate-y-1
            dark:bg-gray-800/80
          ">
            <!-- 배경 그라디언트 효과 -->
            <div class="
              absolute
              inset-0
              bg-gradient-to-br
              from-blue-50
              to-purple-50
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
              dark:from-blue-900/20
              dark:to-purple-900/20
            "></div>

            <!-- 컨텐츠 -->
            <div class="relative flex flex-col items-center gap-3">
              <!-- 아바타 이미지 -->
              <div class="
                relative
                overflow-hidden
                rounded-full
                ring-4
                ring-gray-100
                transition-all
                duration-300
                group-hover:ring-blue-200
                group-hover:scale-105
                dark:ring-gray-700
                dark:group-hover:ring-blue-700
              ">
                <img
                  src="${a}"
                  alt="${e}의 프로필 사진"
                  class="h-20 w-20 object-cover"
                  loading="lazy"
                />

                <!-- 호버 시 오버레이 효과 -->
                <div class="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-blue-600/20
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "></div>
              </div>

              <!-- 사용자 정보 -->
              <div class="flex flex-col items-center gap-1 text-center">
                <div class="
                  text-base
                  font-semibold
                  text-gray-900
                  transition-colors
                  duration-300
                  group-hover:text-blue-600
                  dark:text-gray-100
                  dark:group-hover:text-blue-400
                ">
                  ${s}
                </div>

                <span class="
                  inline-flex
                  items-center
                  rounded-full
                  bg-gray-100
                  px-2.5
                  py-0.5
                  text-xs
                  font-medium
                  text-gray-600
                  transition-all
                  duration-300
                  group-hover:bg-blue-100
                  group-hover:text-blue-700
                  dark:bg-gray-700
                  dark:text-gray-300
                  dark:group-hover:bg-blue-900/50
                  dark:group-hover:text-blue-300
                ">
                  ${r}
                </span>
              </div>
            </div>
          </div>
        </a>
      `}}}customElements.define("contributor-component",ut);class ht extends HTMLElement{static get observedAttributes(){return["href","icon","title","description"]}constructor(){super()}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}getIconSvg(e){const t={book:`
        <svg width="48" height="48" viewBox="0 -960 960 960" fill="currentColor">
          <path d="M512-250q50-25 98-37.5T712-3e2q38 0 78.5 6t69.5 16v-429q-34-17-72-25t-76-8q-54 0-104.5 16.5T512-677v427zm-30 79q-8 0-14.5-1.5T456-178q-47-29-1e2-45t-108-16q-37 0-72 9t-70 22q-23 11-44.5-3T40-251v-463q0-15 7-27.5T68-761q42-20 87.5-29.5T248-8e2q63 0 122.5 17T482-731q51-35 109.5-52T712-8e2q47 0 92 9.5t87 29.5q14 7 21.5 19.5T920-714v463q0 28-22.5 42.5t-44.5.5q-34-14-69-22.5t-72-8.5q-54 0-106 16t-98 45q-5 4-11.5 5.5T482-171z"/>
        </svg>
      `,rocket:`
        <svg width="48" height="48" viewBox="0 -960 960 960" fill="currentColor">
          <path d="M201-96q-15 6-28-3t-13-25v-193q0-20 9.5-38t26.5-29l65-44q5 83 20 146.5T328-146L201-96zm183-64q-9 0-16.5-6.5T355-184q-28-62-41.5-128T3e2-453q0-115 42-219t114-166q5-4 11-6t13-2 13 2 11 6q72 62 114 166t42 219q0 76-13.5 141.5T605-184q-5 11-12.5 17.5T576-160H384zm96-290q29 0 49.5-20.5T550-520t-20.5-49.5T480-590t-49.5 20.5T410-520t20.5 49.5T480-450zM759-96l-127-50q32-72 47-135.5T699-428l65 44q17 11 26.5 29t9.5 38v193q0 16-13 25t-28 3z"/>
        </svg>
      `,github:`
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      `,chat:`
        <svg width="48" height="48" viewBox="0 -960 960 960" fill="currentColor">
          <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
        </svg>
      `};return t[e]||t.rocket}isExternalLink(e){return e.startsWith("http://")||e.startsWith("https://")}escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}render(){const e=this.getAttribute("href")||"#",t=this.getAttribute("icon")||"rocket",r=this.escapeHtml(this.getAttribute("title")||"제목"),i=this.escapeHtml(this.getAttribute("description")||"설명"),s=this.isExternalLink(e),l=s?'target="_blank" rel="noopener noreferrer"':"",a=s?`${r} (새 창에서 열림)`:r;this.innerHTML=`
      <a
        href="${e}"
        ${l}
        class="group block rounded-xl border border-[#007bff] bg-white/80 backdrop-blur-sm p-6 transition hover:scale-[1.02] hover:border-[#0056b3] dark:border-[#007bff] dark:bg-gray-900/80 dark:hover:border-[#0056b3]"
        aria-label="${a}"
      >
        <div class="flex items-start gap-4">
          <div class="shrink-0 rounded-lg bg-blue-100 p-3 text-blue-500 dark:bg-gray-700 dark:text-blue-400">
            <span class="icon-svg">
              ${this.getIconSvg(t)}
            </span>
          </div>
          <div class="flex flex-col items-start justify-start">
            <div class="mb-1 text-lg font-bold text-black dark:text-white">
              ${r}
            </div>
            <p class="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              ${i}
            </p>
          </div>
        </div>
      </a>
    `}}customElements.define("home-link-card-component",ht);function re(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var L=re();function qe(n){L=n}var P={exec:()=>null};function f(n,e=""){let t=typeof n=="string"?n:n.source;const r={replace:(i,s)=>{let l=typeof s=="string"?s:s.source;return l=l.replace(k.caret,"$1"),t=t.replace(i,l),r},getRegex:()=>new RegExp(t,e)};return r}var k={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i")},pt=/^(?:[ \t]*(?:\n|$))+/,dt=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,gt=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,M=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ft=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ie=/(?:[*+-]|\d{1,9}[.)])/,Ie=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,He=f(Ie).replace(/bull/g,ie).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),bt=f(Ie).replace(/bull/g,ie).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),se=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,mt=/^[^\n]+/,ae=/(?!\s*\])(?:\\.|[^\[\]\\])+/,kt=f(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ae).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),xt=f(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ie).getRegex(),F="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",oe=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,vt=f("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",oe).replace("tag",F).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Oe=f(se).replace("hr",M).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F).getRegex(),wt=f(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Oe).getRegex(),le={blockquote:wt,code:dt,def:kt,fences:gt,heading:ft,hr:M,html:vt,lheading:He,list:xt,newline:pt,paragraph:Oe,table:P,text:mt},we=f("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",M).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F).getRegex(),yt={...le,lheading:bt,table:we,paragraph:f(se).replace("hr",M).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",we).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F).getRegex()},Tt={...le,html:f(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",oe).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:P,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:f(se).replace("hr",M).replace("heading",` *#{1,6} *[^
]`).replace("lheading",He).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},$t=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ct=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,je=/^( {2,}|\\)\n(?!\s*$)/,St=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Q=/[\p{P}\p{S}]/u,ce=/[\s\p{P}\p{S}]/u,Ne=/[^\s\p{P}\p{S}]/u,Lt=f(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ce).getRegex(),De=/(?!~)[\p{P}\p{S}]/u,Rt=/(?!~)[\s\p{P}\p{S}]/u,Et=/(?:[^\s\p{P}\p{S}]|~)/u,At=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Ge=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,zt=f(Ge,"u").replace(/punct/g,Q).getRegex(),_t=f(Ge,"u").replace(/punct/g,De).getRegex(),Ze="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Pt=f(Ze,"gu").replace(/notPunctSpace/g,Ne).replace(/punctSpace/g,ce).replace(/punct/g,Q).getRegex(),Bt=f(Ze,"gu").replace(/notPunctSpace/g,Et).replace(/punctSpace/g,Rt).replace(/punct/g,De).getRegex(),Mt=f("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ne).replace(/punctSpace/g,ce).replace(/punct/g,Q).getRegex(),qt=f(/\\(punct)/,"gu").replace(/punct/g,Q).getRegex(),It=f(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ht=f(oe).replace("(?:-->|$)","-->").getRegex(),Ot=f("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ht).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),N=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,jt=f(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",N).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Fe=f(/^!?\[(label)\]\[(ref)\]/).replace("label",N).replace("ref",ae).getRegex(),Qe=f(/^!?\[(ref)\](?:\[\])?/).replace("ref",ae).getRegex(),Nt=f("reflink|nolink(?!\\()","g").replace("reflink",Fe).replace("nolink",Qe).getRegex(),ue={_backpedal:P,anyPunctuation:qt,autolink:It,blockSkip:At,br:je,code:Ct,del:P,emStrongLDelim:zt,emStrongRDelimAst:Pt,emStrongRDelimUnd:Mt,escape:$t,link:jt,nolink:Qe,punctuation:Lt,reflink:Fe,reflinkSearch:Nt,tag:Ot,text:St,url:P},Dt={...ue,link:f(/^!?\[(label)\]\((.*?)\)/).replace("label",N).getRegex(),reflink:f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",N).getRegex()},J={...ue,emStrongRDelimAst:Bt,emStrongLDelim:_t,url:f(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Gt={...J,br:f(je).replace("{2,}","*").getRegex(),text:f(J.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},H={normal:le,gfm:yt,pedantic:Tt},z={normal:ue,gfm:J,breaks:Gt,pedantic:Dt},Zt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ye=n=>Zt[n];function v(n,e){if(e){if(k.escapeTest.test(n))return n.replace(k.escapeReplace,ye)}else if(k.escapeTestNoEncode.test(n))return n.replace(k.escapeReplaceNoEncode,ye);return n}function Te(n){try{n=encodeURI(n).replace(k.percentDecode,"%")}catch{return null}return n}function $e(n,e){var s;const t=n.replace(k.findPipe,(l,a,u)=>{let o=!1,c=a;for(;--c>=0&&u[c]==="\\";)o=!o;return o?"|":" |"}),r=t.split(k.splitPipe);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!((s=r.at(-1))!=null&&s.trim())&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(k.slashPipe,"|");return r}function _(n,e,t){const r=n.length;if(r===0)return"";let i=0;for(;i<r&&n.charAt(r-i-1)===e;)i++;return n.slice(0,r-i)}function Ft(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let r=0;r<n.length;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])t++;else if(n[r]===e[1]&&(t--,t<0))return r;return t>0?-2:-1}function Ce(n,e,t,r,i){const s=e.href,l=e.title||null,a=n[1].replace(i.other.outputLinkReplace,"$1");r.state.inLink=!0;const u={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:s,title:l,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,u}function Qt(n,e,t){const r=n.match(t.other.indentCodeCompensation);if(r===null)return e;const i=r[1];return e.split(`
`).map(s=>{const l=s.match(t.other.beginningSpace);if(l===null)return s;const[a]=l;return a.length>=i.length?s.slice(i.length):s}).join(`
`)}var D=class{constructor(n){b(this,"options");b(this,"rules");b(this,"lexer");this.options=n||L}space(n){const e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){const e=this.rules.block.code.exec(n);if(e){const t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:_(t,`
`)}}}fences(n){const e=this.rules.block.fences.exec(n);if(e){const t=e[0],r=Qt(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(n){const e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){const r=_(t,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(t=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){const e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:_(e[0],`
`)}}blockquote(n){const e=this.rules.block.blockquote.exec(n);if(e){let t=_(e[0],`
`).split(`
`),r="",i="";const s=[];for(;t.length>0;){let l=!1;const a=[];let u;for(u=0;u<t.length;u++)if(this.rules.other.blockquoteStart.test(t[u]))a.push(t[u]),l=!0;else if(!l)a.push(t[u]);else break;t=t.slice(u);const o=a.join(`
`),c=o.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${o}`:o,i=i?`${i}
${c}`:c;const p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,s,!0),this.lexer.state.top=p,t.length===0)break;const h=s.at(-1);if((h==null?void 0:h.type)==="code")break;if((h==null?void 0:h.type)==="blockquote"){const m=h,d=m.raw+`
`+t.join(`
`),x=this.blockquote(d);s[s.length-1]=x,r=r.substring(0,r.length-m.raw.length)+x.raw,i=i.substring(0,i.length-m.text.length)+x.text;break}else if((h==null?void 0:h.type)==="list"){const m=h,d=m.raw+`
`+t.join(`
`),x=this.list(d);s[s.length-1]=x,r=r.substring(0,r.length-h.raw.length)+x.raw,i=i.substring(0,i.length-m.raw.length)+x.raw,t=d.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:s,text:i}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim();const r=t.length>1,i={type:"list",raw:"",ordered:r,start:r?+t.slice(0,-1):"",loose:!1,items:[]};t=r?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=r?t:"[*+-]");const s=this.rules.other.listItemRegex(t);let l=!1;for(;n;){let u=!1,o="",c="";if(!(e=s.exec(n))||this.rules.block.hr.test(n))break;o=e[0],n=n.substring(o.length);let p=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,W=>" ".repeat(3*W.length)),h=n.split(`
`,1)[0],m=!p.trim(),d=0;if(this.options.pedantic?(d=2,c=p.trimStart()):m?d=e[1].length+1:(d=e[2].search(this.rules.other.nonSpaceChar),d=d>4?1:d,c=p.slice(d),d+=e[1].length),m&&this.rules.other.blankLine.test(h)&&(o+=h+`
`,n=n.substring(h.length+1),u=!0),!u){const W=this.rules.other.nextBulletRegex(d),ke=this.rules.other.hrRegex(d),xe=this.rules.other.fencesBeginRegex(d),ve=this.rules.other.headingBeginRegex(d),nt=this.rules.other.htmlBeginRegex(d);for(;n;){const U=n.split(`
`,1)[0];let A;if(h=U,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),A=h):A=h.replace(this.rules.other.tabCharGlobal,"    "),xe.test(h)||ve.test(h)||nt.test(h)||W.test(h)||ke.test(h))break;if(A.search(this.rules.other.nonSpaceChar)>=d||!h.trim())c+=`
`+A.slice(d);else{if(m||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||xe.test(p)||ve.test(p)||ke.test(p))break;c+=`
`+h}!m&&!h.trim()&&(m=!0),o+=U+`
`,n=n.substring(U.length+1),p=A.slice(d)}}i.loose||(l?i.loose=!0:this.rules.other.doubleBlankLine.test(o)&&(l=!0));let x=null,me;this.options.gfm&&(x=this.rules.other.listIsTask.exec(c),x&&(me=x[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:o,task:!!x,checked:me,loose:!1,text:c,tokens:[]}),i.raw+=o}const a=i.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let u=0;u<i.items.length;u++)if(this.lexer.state.top=!1,i.items[u].tokens=this.lexer.blockTokens(i.items[u].text,[]),!i.loose){const o=i.items[u].tokens.filter(p=>p.type==="space"),c=o.length>0&&o.some(p=>this.rules.other.anyLine.test(p.raw));i.loose=c}if(i.loose)for(let u=0;u<i.items.length;u++)i.items[u].loose=!0;return i}}html(n){const e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){const e=this.rules.block.def.exec(n);if(e){const t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:r,title:i}}}table(n){var l;const e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;const t=$e(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=(l=e[3])!=null&&l.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===r.length){for(const a of r)this.rules.other.tableAlignRight.test(a)?s.align.push("right"):this.rules.other.tableAlignCenter.test(a)?s.align.push("center"):this.rules.other.tableAlignLeft.test(a)?s.align.push("left"):s.align.push(null);for(let a=0;a<t.length;a++)s.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:s.align[a]});for(const a of i)s.rows.push($e(a,s.header.length).map((u,o)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:s.align[o]})));return s}}lheading(n){const e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){const e=this.rules.block.paragraph.exec(n);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){const e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){const e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){const e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){const e=this.rules.inline.link.exec(n);if(e){const t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;const s=_(t.slice(0,-1),"\\");if((t.length-s.length)%2===0)return}else{const s=Ft(e[2],"()");if(s===-2)return;if(s>-1){const a=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let r=e[2],i="";if(this.options.pedantic){const s=this.rules.other.pedanticHrefTitle.exec(r);s&&(r=s[1],i=s[3])}else i=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?r=r.slice(1):r=r.slice(1,-1)),Ce(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){const r=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[r.toLowerCase()];if(!i){const s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return Ce(t,i,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let r=this.rules.inline.emStrongLDelim.exec(n);if(!r||r[3]&&t.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const s=[...r[0]].length-1;let l,a,u=s,o=0;const c=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,e=e.slice(-1*n.length+s);(r=c.exec(e))!=null;){if(l=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!l)continue;if(a=[...l].length,r[3]||r[4]){u+=a;continue}else if((r[5]||r[6])&&s%3&&!((s+a)%3)){o+=a;continue}if(u-=a,u>0)continue;a=Math.min(a,a+u+o);const p=[...r[0]][0].length,h=n.slice(0,s+r.index+p+a);if(Math.min(s,a)%2){const d=h.slice(1,-1);return{type:"em",raw:h,text:d,tokens:this.lexer.inlineTokens(d)}}const m=h.slice(2,-2);return{type:"strong",raw:h,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(n){const e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(t),i=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return r&&i&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){const e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){const e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n){const e=this.rules.inline.autolink.exec(n);if(e){let t,r;return e[2]==="@"?(t=e[1],r="mailto:"+t):(t=e[1],r=t),{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(n){var t;let e;if(e=this.rules.inline.url.exec(n)){let r,i;if(e[2]==="@")r=e[0],i="mailto:"+r;else{let s;do s=e[0],e[0]=((t=this.rules.inline._backpedal.exec(e[0]))==null?void 0:t[0])??"";while(s!==e[0]);r=e[0],e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(n){const e=this.rules.inline.text.exec(n);if(e){const t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},y=class ee{constructor(e){b(this,"tokens");b(this,"options");b(this,"state");b(this,"tokenizer");b(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||L,this.options.tokenizer=this.options.tokenizer||new D,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={other:k,block:H.normal,inline:z.normal};this.options.pedantic?(t.block=H.pedantic,t.inline=z.pedantic):this.options.gfm&&(t.block=H.gfm,this.options.breaks?t.inline=z.breaks:t.inline=z.gfm),this.tokenizer.rules=t}static get rules(){return{block:H,inline:z}}static lex(e,t){return new ee(t).lex(e)}static lexInline(e,t){return new ee(t).inlineTokens(e)}lex(e){e=e.replace(k.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],r=!1){var i,s,l;for(this.options.pedantic&&(e=e.replace(k.tabCharGlobal,"    ").replace(k.spaceLine,""));e;){let a;if((s=(i=this.options.extensions)==null?void 0:i.block)!=null&&s.some(o=>(a=o.call({lexer:this},e,t))?(e=e.substring(a.raw.length),t.push(a),!0):!1))continue;if(a=this.tokenizer.space(e)){e=e.substring(a.raw.length);const o=t.at(-1);a.raw.length===1&&o!==void 0?o.raw+=`
`:t.push(a);continue}if(a=this.tokenizer.code(e)){e=e.substring(a.raw.length);const o=t.at(-1);(o==null?void 0:o.type)==="paragraph"||(o==null?void 0:o.type)==="text"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.at(-1).src=o.text):t.push(a);continue}if(a=this.tokenizer.fences(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.heading(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.hr(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.blockquote(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.list(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.html(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.def(e)){e=e.substring(a.raw.length);const o=t.at(-1);(o==null?void 0:o.type)==="paragraph"||(o==null?void 0:o.type)==="text"?(o.raw+=`
`+a.raw,o.text+=`
`+a.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.lheading(e)){e=e.substring(a.raw.length),t.push(a);continue}let u=e;if((l=this.options.extensions)!=null&&l.startBlock){let o=1/0;const c=e.slice(1);let p;this.options.extensions.startBlock.forEach(h=>{p=h.call({lexer:this},c),typeof p=="number"&&p>=0&&(o=Math.min(o,p))}),o<1/0&&o>=0&&(u=e.substring(0,o+1))}if(this.state.top&&(a=this.tokenizer.paragraph(u))){const o=t.at(-1);r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(a),r=u.length!==e.length,e=e.substring(a.raw.length);continue}if(a=this.tokenizer.text(e)){e=e.substring(a.raw.length);const o=t.at(-1);(o==null?void 0:o.type)==="text"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(a);continue}if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var a,u,o;let r=e,i=null;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)c.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,i.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(i=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let s=!1,l="";for(;e;){s||(l=""),s=!1;let c;if((u=(a=this.options.extensions)==null?void 0:a.inline)!=null&&u.some(h=>(c=h.call({lexer:this},e,t))?(e=e.substring(c.raw.length),t.push(c),!0):!1))continue;if(c=this.tokenizer.escape(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.tag(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.link(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(c.raw.length);const h=t.at(-1);c.type==="text"&&(h==null?void 0:h.type)==="text"?(h.raw+=c.raw,h.text+=c.text):t.push(c);continue}if(c=this.tokenizer.emStrong(e,r,l)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.codespan(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.br(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.del(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.autolink(e)){e=e.substring(c.raw.length),t.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(e))){e=e.substring(c.raw.length),t.push(c);continue}let p=e;if((o=this.options.extensions)!=null&&o.startInline){let h=1/0;const m=e.slice(1);let d;this.options.extensions.startInline.forEach(x=>{d=x.call({lexer:this},m),typeof d=="number"&&d>=0&&(h=Math.min(h,d))}),h<1/0&&h>=0&&(p=e.substring(0,h+1))}if(c=this.tokenizer.inlineText(p)){e=e.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(l=c.raw.slice(-1)),s=!0;const h=t.at(-1);(h==null?void 0:h.type)==="text"?(h.raw+=c.raw,h.text+=c.text):t.push(c);continue}if(e){const h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return t}},G=class{constructor(n){b(this,"options");b(this,"parser");this.options=n||L}space(n){return""}code({text:n,lang:e,escaped:t}){var s;const r=(s=(e||"").match(k.notSpaceStart))==null?void 0:s[0],i=n.replace(k.endingNewline,"")+`
`;return r?'<pre><code class="language-'+v(r)+'">'+(t?i:v(i,!0))+`</code></pre>
`:"<pre><code>"+(t?i:v(i,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){const e=n.ordered,t=n.start;let r="";for(let l=0;l<n.items.length;l++){const a=n.items[l];r+=this.listitem(a)}const i=e?"ol":"ul",s=e&&t!==1?' start="'+t+'"':"";return"<"+i+s+`>
`+r+"</"+i+`>
`}listitem(n){var t;let e="";if(n.task){const r=this.checkbox({checked:!!n.checked});n.loose?((t=n.tokens[0])==null?void 0:t.type)==="paragraph"?(n.tokens[0].text=r+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=r+" "+v(n.tokens[0].tokens[0].text),n.tokens[0].tokens[0].escaped=!0)):n.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):e+=r+" "}return e+=this.parser.parse(n.tokens,!!n.loose),`<li>${e}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let i=0;i<n.header.length;i++)t+=this.tablecell(n.header[i]);e+=this.tablerow({text:t});let r="";for(let i=0;i<n.rows.length;i++){const s=n.rows[i];t="";for(let l=0;l<s.length;l++)t+=this.tablecell(s[l]);r+=this.tablerow({text:t})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${v(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){const r=this.parser.parseInline(t),i=Te(n);if(i===null)return r;n=i;let s='<a href="'+n+'"';return e&&(s+=' title="'+v(e)+'"'),s+=">"+r+"</a>",s}image({href:n,title:e,text:t,tokens:r}){r&&(t=this.parser.parseInline(r,this.parser.textRenderer));const i=Te(n);if(i===null)return v(t);n=i;let s=`<img src="${n}" alt="${t}"`;return e&&(s+=` title="${v(e)}"`),s+=">",s}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:v(n.text)}},he=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}},T=class te{constructor(e){b(this,"options");b(this,"renderer");b(this,"textRenderer");this.options=e||L,this.options.renderer=this.options.renderer||new G,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new he}static parse(e,t){return new te(t).parse(e)}static parseInline(e,t){return new te(t).parseInline(e)}parse(e,t=!0){var i,s;let r="";for(let l=0;l<e.length;l++){const a=e[l];if((s=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&s[a.type]){const o=a,c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){r+=c||"";continue}}const u=a;switch(u.type){case"space":{r+=this.renderer.space(u);continue}case"hr":{r+=this.renderer.hr(u);continue}case"heading":{r+=this.renderer.heading(u);continue}case"code":{r+=this.renderer.code(u);continue}case"table":{r+=this.renderer.table(u);continue}case"blockquote":{r+=this.renderer.blockquote(u);continue}case"list":{r+=this.renderer.list(u);continue}case"html":{r+=this.renderer.html(u);continue}case"paragraph":{r+=this.renderer.paragraph(u);continue}case"text":{let o=u,c=this.renderer.text(o);for(;l+1<e.length&&e[l+1].type==="text";)o=e[++l],c+=`
`+this.renderer.text(o);t?r+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):r+=c;continue}default:{const o='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}parseInline(e,t=this.renderer){var i,s;let r="";for(let l=0;l<e.length;l++){const a=e[l];if((s=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&s[a.type]){const o=this.options.extensions.renderers[a.type].call({parser:this},a);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=o||"";continue}}const u=a;switch(u.type){case"escape":{r+=t.text(u);break}case"html":{r+=t.html(u);break}case"link":{r+=t.link(u);break}case"image":{r+=t.image(u);break}case"strong":{r+=t.strong(u);break}case"em":{r+=t.em(u);break}case"codespan":{r+=t.codespan(u);break}case"br":{r+=t.br(u);break}case"del":{r+=t.del(u);break}case"text":{r+=t.text(u);break}default:{const o='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}},Y,j=(Y=class{constructor(n){b(this,"options");b(this,"block");this.options=n||L}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}provideLexer(){return this.block?y.lex:y.lexInline}provideParser(){return this.block?T.parse:T.parseInline}},b(Y,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Y),Wt=class{constructor(...n){b(this,"defaults",re());b(this,"options",this.setOptions);b(this,"parse",this.parseMarkdown(!0));b(this,"parseInline",this.parseMarkdown(!1));b(this,"Parser",T);b(this,"Renderer",G);b(this,"TextRenderer",he);b(this,"Lexer",y);b(this,"Tokenizer",D);b(this,"Hooks",j);this.use(...n)}walkTokens(n,e){var r,i;let t=[];for(const s of n)switch(t=t.concat(e.call(this,s)),s.type){case"table":{const l=s;for(const a of l.header)t=t.concat(this.walkTokens(a.tokens,e));for(const a of l.rows)for(const u of a)t=t.concat(this.walkTokens(u.tokens,e));break}case"list":{const l=s;t=t.concat(this.walkTokens(l.items,e));break}default:{const l=s;(i=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&i[l.type]?this.defaults.extensions.childTokens[l.type].forEach(a=>{const u=l[a].flat(1/0);t=t.concat(this.walkTokens(u,e))}):l.tokens&&(t=t.concat(this.walkTokens(l.tokens,e)))}}return t}use(...n){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{const r={...t};if(r.async=this.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const s=e.renderers[i.name];s?e.renderers[i.name]=function(...l){let a=i.renderer.apply(this,l);return a===!1&&(a=s.apply(this,l)),a}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=e[i.level];s?s.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),r.extensions=e),t.renderer){const i=this.defaults.renderer||new G(this.defaults);for(const s in t.renderer){if(!(s in i))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const l=s,a=t.renderer[l],u=i[l];i[l]=(...o)=>{let c=a.apply(i,o);return c===!1&&(c=u.apply(i,o)),c||""}}r.renderer=i}if(t.tokenizer){const i=this.defaults.tokenizer||new D(this.defaults);for(const s in t.tokenizer){if(!(s in i))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const l=s,a=t.tokenizer[l],u=i[l];i[l]=(...o)=>{let c=a.apply(i,o);return c===!1&&(c=u.apply(i,o)),c}}r.tokenizer=i}if(t.hooks){const i=this.defaults.hooks||new j;for(const s in t.hooks){if(!(s in i))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;const l=s,a=t.hooks[l],u=i[l];j.passThroughHooks.has(s)?i[l]=o=>{if(this.defaults.async)return Promise.resolve(a.call(i,o)).then(p=>u.call(i,p));const c=a.call(i,o);return u.call(i,c)}:i[l]=(...o)=>{let c=a.apply(i,o);return c===!1&&(c=u.apply(i,o)),c}}r.hooks=i}if(t.walkTokens){const i=this.defaults.walkTokens,s=t.walkTokens;r.walkTokens=function(l){let a=[];return a.push(s.call(this,l)),i&&(a=a.concat(i.call(this,l))),a}}this.defaults={...this.defaults,...r}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return y.lex(n,e??this.defaults)}parser(n,e){return T.parse(n,e??this.defaults)}parseMarkdown(n){return(t,r)=>{const i={...r},s={...this.defaults,...i},l=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&i.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=n);const a=s.hooks?s.hooks.provideLexer():n?y.lex:y.lexInline,u=s.hooks?s.hooks.provideParser():n?T.parse:T.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(t):t).then(o=>a(o,s)).then(o=>s.hooks?s.hooks.processAllTokens(o):o).then(o=>s.walkTokens?Promise.all(this.walkTokens(o,s.walkTokens)).then(()=>o):o).then(o=>u(o,s)).then(o=>s.hooks?s.hooks.postprocess(o):o).catch(l);try{s.hooks&&(t=s.hooks.preprocess(t));let o=a(t,s);s.hooks&&(o=s.hooks.processAllTokens(o)),s.walkTokens&&this.walkTokens(o,s.walkTokens);let c=u(o,s);return s.hooks&&(c=s.hooks.postprocess(c)),c}catch(o){return l(o)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const r="<p>An error occurred:</p><pre>"+v(t.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(t);throw t}}},S=new Wt;function g(n,e){return S.parse(n,e)}g.options=g.setOptions=function(n){return S.setOptions(n),g.defaults=S.defaults,qe(g.defaults),g};g.getDefaults=re;g.defaults=L;g.use=function(...n){return S.use(...n),g.defaults=S.defaults,qe(g.defaults),g};g.walkTokens=function(n,e){return S.walkTokens(n,e)};g.parseInline=S.parseInline;g.Parser=T;g.parser=T.parse;g.Renderer=G;g.TextRenderer=he;g.Lexer=y;g.lexer=y.lex;g.Tokenizer=D;g.Hooks=j;g.parse=g;g.options;g.setOptions;g.use;g.walkTokens;g.parseInline;T.parse;y.lex;const Ut=n=>{const e=n.replace(/^#?\/?/,"");return e===""||e==="home"?"landing":"documentation"},Vt=n=>({landing:{type:"landing",showBreadcrumb:!1,showTableOfContents:!1,showNavigation:!1},documentation:{type:"documentation",showBreadcrumb:!0,showTableOfContents:!0,showNavigation:!0}})[n],pe=()=>Vt(Ut(window.location.hash));function E(n){return document.getElementById(n)}function Se(n){const e=document.getElementById(n);if(!e)throw new Error(`Required element not found: #${n}`);return e}g.setOptions({gfm:!0,breaks:!0});const Kt=["card-component","button-component","home-link-card-component"],Xt=Kt.join("|"),Le=new RegExp(`^<(${Xt})([\\s\\S]*?)(?:>([\\s\\S]*?)<\\/\\1>|\\s*\\/>)`,"i"),Yt={name:"custom-block-tag",level:"block",start(n){var e;return(e=n.match(Le))==null?void 0:e.index},tokenizer(n){const e=Le.exec(n);if(e)return{type:"html",raw:e[0],text:e[0]}}};g.use({extensions:[Yt]});async function Jt(n,e){const t=await g.parse(n);e.innerHTML=t}async function en(n){try{const e=await fetch(`/docs/${n}.md`);if(!e.ok)throw new Error(`❌ 페이지를 찾을 수 없습니다: ${n}`);const t=await e.text(),r=e.headers.get("content-type");if(r&&r.includes("text/html"))throw new Error(`❌ 요청된 경로가 HTML을 반환합니다: ${n}`);const i=t.trim();if(i.startsWith("<!DOCTYPE html>")||i.startsWith("<html>")||i.startsWith("<title>")&&i.includes("</title>"))throw new Error(`❌ 요청된 경로가 Markdown이 아닌 HTML을 반환합니다: ${n}`);const s=Se("content");s.innerHTML="",await Jt(t,s)}catch{const e=Se("content");e.innerHTML=`
      <div id="not-found" class="w-full">
        <p>열심히 문서를 업데이트하고 있습니다💦. 더 풍부한 한국어 번역 자료를 제공하기 위해 웹사이트 발전에 기여하고 싶다면 <a href="https://github.com/docker-ko/docker-ko.github.io">깃허브 레포지토리 주소</a>를 클릭하세요!</p>
        <button-component href="#/home" title="홈으로 돌아가기" />
      </div>
    `}}async function tn(){const e=pe().type==="landing"?"home":location.hash.substring(2)||"home";await en(e)}const nn=n=>new IntersectionObserver(e=>{const t=e.filter(r=>r.isIntersecting).sort((r,i)=>r.boundingClientRect.top-i.boundingClientRect.top)[0];if(t){const r=t.target.id;Object.entries(n).forEach(([i,s])=>{i===r?s.classList.add("border-l-2","border-blue-500"):s.classList.remove("border-l-2","border-blue-500")})}},{rootMargin:"-60px 0px -60% 0px",threshold:.8}),rn=()=>{const n=E("content"),e=E("toc");if(!n||!e){console.warn("TOC 초기화 실패: content 또는 toc 요소를 찾을 수 없습니다.");return}e.innerHTML="";const t=n.querySelectorAll("h2, h3");if(t.length===0)return;const r=document.createElement("p"),i=document.createElement("ul");r.classList.add("text-black","font-normal","text-lg","pb-5"),r.textContent="Table of contents";const s={};t.forEach((a,u)=>{const o=document.createElement("li");o.classList.add("max-w-64","font-extralight","hover:bg-gray-300","hover:font-semibold","cursor-pointer");const c=document.createElement("button");c.classList.add("flex","justify-start","items-stretch","p-1","cursor-pointer","w-full","truncate"),c.setAttribute("aria-label",a.textContent||"Heading Link"),c.setAttribute("role","link");const p=a.textContent||"";c.textContent=p.length>30?p.substring(0,30)+"...":p,c.addEventListener("click",h=>{h.preventDefault();const m=a.getBoundingClientRect(),d=window.scrollY+m.top-60;window.scrollTo({top:d,behavior:"smooth"})}),o.appendChild(c),i.appendChild(o),a.tagName==="H3"&&o.classList.add("pl-3"),a.id=`${u}`,s[a.id]=o}),e.appendChild(r),e.appendChild(i);const l=nn(s);t.forEach(a=>l.observe(a))};async function sn(){try{const n=await fetch("/data/breadcrumb.json");if(!n.ok)throw new Error("Failed to load breadcrumb translation data");return await n.json()}catch(n){return console.error("Error loading breadcrumb translation data:",n),{}}}function an(n,e,t){let r=t[n[0]];if(!r)return null;for(let i=1;i<=e;i++)if(r.children&&r.children[n[i]])r=r.children[n[i]];else return null;return r}async function on(){const n=window.location.hash.slice(1),e=await sn(),t=n.split("/").filter(s=>s!==""),r=[{name:"홈",path:"/",linkable:!0}];let i="";return t.forEach((s,l)=>{const a=an(t,l,e);i+=`/${s}`,a&&r.push({name:a.name,path:`#${i}`,linkable:a.linkable})}),r}function ln(n){const e=document.createElement("nav");e.id="breadcrumbs",e.className="pb-3 flex min-w-0 items-center gap-2 text-gray-400 dark:text-gray-300";const t=n.map((r,i)=>i===n.length-1?`<span class="truncate">${r.name}</span>`:r.linkable?`<a href="${r.path}" class="link truncate">${r.name}</a> / `:`<span class="truncate text-blue-500">${r.name}</span> / `).join("");return e.innerHTML=t,e}function cn(){const n=document.getElementById("breadcrumbs");n&&n.remove()}async function un(){const n=E("content");if(!n){console.warn("Breadcrumb 초기화 실패: content 요소를 찾을 수 없습니다.");return}cn();const e=await on(),t=ln(e);n.insertBefore(t,n.firstChild)}function hn(n){const e=E("sidebar");e&&(e.style.display=n.showNavigation?"":"none");const t=E("aside-toc");t&&(t.style.display=n.showTableOfContents?"":"none");const r=E("content");r&&(r.classList.remove("max-w-5xl","mx-auto"),n.type==="landing"&&r.classList.add("max-w-5xl","mx-auto"))}var ne,We=-1,q=function(n){addEventListener("pageshow",(function(e){e.persisted&&(We=e.timeStamp,n(e))}),!0)},Ue=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},de=function(){var n=Ue();return n&&n.activationStart||0},$=function(n,e){var t=Ue(),r="navigate";return We>=0?r="back-forward-cache":t&&(document.prerendering||de()>0?r="prerender":document.wasDiscarded?r="restore":t.type&&(r=t.type.replace(/_/g,"-"))),{name:n,value:e===void 0?-1:e,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},I=function(n,e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var r=new PerformanceObserver((function(i){Promise.resolve().then((function(){e(i.getEntries())}))}));return r.observe(Object.assign({type:n,buffered:!0},t||{})),r}}catch{}},C=function(n,e,t,r){var i,s;return function(l){e.value>=0&&(l||r)&&((s=e.value-(i||0))||i===void 0)&&(i=e.value,e.delta=s,e.rating=(function(a,u){return a>u[1]?"poor":a>u[0]?"needs-improvement":"good"})(e.value,t),n(e))}},ge=function(n){requestAnimationFrame((function(){return requestAnimationFrame((function(){return n()}))}))},fe=function(n){var e=function(t){t.type!=="pagehide"&&document.visibilityState!=="hidden"||n(t)};addEventListener("visibilitychange",e,!0),addEventListener("pagehide",e,!0)},Ve=function(n){var e=!1;return function(t){e||(n(t),e=!0)}},R=-1,Re=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},Z=function(n){document.visibilityState==="hidden"&&R>-1&&(R=n.type==="visibilitychange"?n.timeStamp:0,pn())},Ee=function(){addEventListener("visibilitychange",Z,!0),addEventListener("prerenderingchange",Z,!0)},pn=function(){removeEventListener("visibilitychange",Z,!0),removeEventListener("prerenderingchange",Z,!0)},Ke=function(){return R<0&&(R=Re(),Ee(),q((function(){setTimeout((function(){R=Re(),Ee()}),0)}))),{get firstHiddenTime(){return R}}},be=function(n){document.prerendering?addEventListener("prerenderingchange",(function(){return n()}),!0):n()},Ae=[1800,3e3],dn=function(n,e){e=e||{},be((function(){var t,r=Ke(),i=$("FCP"),s=I("paint",(function(l){l.forEach((function(a){a.name==="first-contentful-paint"&&(s.disconnect(),a.startTime<r.firstHiddenTime&&(i.value=Math.max(a.startTime-de(),0),i.entries.push(a),t(!0)))}))}));s&&(t=C(n,i,Ae,e.reportAllChanges),q((function(l){i=$("FCP"),t=C(n,i,Ae,e.reportAllChanges),ge((function(){i.value=performance.now()-l.timeStamp,t(!0)}))})))}))},ze=[.1,.25],gn=function(n,e){e=e||{},dn(Ve((function(){var t,r=$("CLS",0),i=0,s=[],l=function(u){u.forEach((function(o){if(!o.hadRecentInput){var c=s[0],p=s[s.length-1];i&&o.startTime-p.startTime<1e3&&o.startTime-c.startTime<5e3?(i+=o.value,s.push(o)):(i=o.value,s=[o])}})),i>r.value&&(r.value=i,r.entries=s,t())},a=I("layout-shift",l);a&&(t=C(n,r,ze,e.reportAllChanges),fe((function(){l(a.takeRecords()),t(!0)})),q((function(){i=0,r=$("CLS",0),t=C(n,r,ze,e.reportAllChanges),ge((function(){return t()}))})),setTimeout(t,0))})))},Xe=0,V=1/0,O=0,fn=function(n){n.forEach((function(e){e.interactionId&&(V=Math.min(V,e.interactionId),O=Math.max(O,e.interactionId),Xe=O?(O-V)/7+1:0)}))},Ye=function(){return ne?Xe:performance.interactionCount||0},bn=function(){"interactionCount"in performance||ne||(ne=I("event",fn,{type:"event",buffered:!0,durationThreshold:0}))},_e=[200,500],Je=0,Pe=function(){return Ye()-Je},w=[],K={},Be=function(n){var e=w[w.length-1],t=K[n.interactionId];if(t||w.length<10||n.duration>e.latency){if(t)t.entries.push(n),t.latency=Math.max(t.latency,n.duration);else{var r={id:n.interactionId,latency:n.duration,entries:[n]};K[r.id]=r,w.push(r)}w.sort((function(i,s){return s.latency-i.latency})),w.splice(10).forEach((function(i){delete K[i.id]}))}},mn=function(n,e){e=e||{},be((function(){var t;bn();var r,i=$("INP"),s=function(a){a.forEach((function(c){c.interactionId&&Be(c),c.entryType==="first-input"&&!w.some((function(p){return p.entries.some((function(h){return c.duration===h.duration&&c.startTime===h.startTime}))}))&&Be(c)}));var u,o=(u=Math.min(w.length-1,Math.floor(Pe()/50)),w[u]);o&&o.latency!==i.value&&(i.value=o.latency,i.entries=o.entries,r())},l=I("event",s,{durationThreshold:(t=e.durationThreshold)!==null&&t!==void 0?t:40});r=C(n,i,_e,e.reportAllChanges),l&&("PerformanceEventTiming"in window&&"interactionId"in PerformanceEventTiming.prototype&&l.observe({type:"first-input",buffered:!0}),fe((function(){s(l.takeRecords()),i.value<0&&Pe()>0&&(i.value=0,i.entries=[]),r(!0)})),q((function(){w=[],Je=Ye(),i=$("INP"),r=C(n,i,_e,e.reportAllChanges)})))}))},Me=[2500,4e3],X={},kn=function(n,e){e=e||{},be((function(){var t,r=Ke(),i=$("LCP"),s=function(u){var o=u[u.length-1];o&&o.startTime<r.firstHiddenTime&&(i.value=Math.max(o.startTime-de(),0),i.entries=[o],t())},l=I("largest-contentful-paint",s);if(l){t=C(n,i,Me,e.reportAllChanges);var a=Ve((function(){X[i.id]||(s(l.takeRecords()),l.disconnect(),X[i.id]=!0,t(!0))}));["keydown","click"].forEach((function(u){addEventListener(u,(function(){return setTimeout(a,0)}),!0)})),fe(a),q((function(u){i=$("LCP"),t=C(n,i,Me,e.reportAllChanges),ge((function(){i.value=performance.now()-u.timeStamp,X[i.id]=!0,t(!0)}))}))}}))};function xn(){return console.warn("⚠️ VITE_APPINSIGHTS_CONNECTION_STRING not set. Monitoring disabled."),null}function vn(n){const e=t=>{try{n.trackMetric({name:t.name,average:t.value,properties:{id:t.id,delta:t.delta,rating:t.rating}})}catch{}};kn(e),gn(e),mn(e)}function wn(n){const e=pe();n.trackPageView({name:document.title,uri:window.location.href,properties:{pageType:e.type}})}function et(n,e,t){if(n)try{n.trackException({error:e,properties:{location:t}})}catch{}}const B=xn();B&&(wn(B),vn(B));async function tt(){const n=pe();await tn(),hn(n),n.showTableOfContents&&rn(),n.showBreadcrumb&&await un()}document.addEventListener("DOMContentLoaded",async()=>{try{await tt()}catch(n){et(B,n,"DOMContentLoaded.initializePage"),console.error("❌ main.ts: DOMContentLoaded : 페이지 초기화 실패!",n)}});window.addEventListener("hashchange",async()=>{try{await tt(),window.scrollTo(0,0)}catch(n){et(B,n,"hashchange.initializePage"),console.error("❌ main.ts: hashchange : 페이지 초기화 실패!",n)}});
