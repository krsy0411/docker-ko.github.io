var Kt=Object.defineProperty;var Qt=(t,e,n)=>e in t?Kt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var m=(t,e,n)=>Qt(t,typeof e!="symbol"?e+"":e,n);(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"2ff9028f790d44905dd2c1b61468a09e16a12650"};var e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="c156e415-f72e-44c0-a141-5b19e0f96524",t._sentryDebugIdIdentifier="sentry-dbid-c156e415-f72e-44c0-a141-5b19e0f96524")}catch{}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();class Xt extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
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
    `}}customElements.define("footer-component",Xt);class Jt extends HTMLElement{constructor(){super()}setupNavigationListeners(){window.addEventListener("hashchange",()=>{const e=window.location.hash.replace("#","");this.querySelectorAll(".nav-item").forEach(r=>{const i=r.getAttribute("data-path"),s=r.querySelector("a");i&&e.startsWith(i)?(s==null||s.classList.add("bg-blue-100","dark:bg-blue-900/30","text-blue-600","dark:text-blue-400"),s==null||s.classList.remove("text-gray-600","dark:text-gray-400")):(s==null||s.classList.remove("bg-blue-100","dark:bg-blue-900/30","text-blue-600","dark:text-blue-400"),s==null||s.classList.add("text-gray-600","dark:text-gray-400"))})}),window.dispatchEvent(new Event("hashchange"))}connectedCallback(){this.innerHTML=`
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
    `,this.setupNavigationListeners()}}customElements.define("header-component",Jt);class en extends HTMLElement{static get observedAttributes(){return["imgsrc","href","title","description"]}constructor(){super()}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}render(){const e=this.getAttribute("imgsrc"),n=this.getAttribute("href")||"#",r=this.getAttribute("title")||"",i=this.getAttribute("description")||"";this.innerHTML=`
      <div class="card">
        <a href="${n}" class="card-link">
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
    `}}customElements.define("card-component",en);class tn extends HTMLElement{static get observedAttributes(){return["href","title"]}constructor(){super()}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}render(){const e=this.getAttribute("href")||"#",n=this.getAttribute("title")||"";this.innerHTML=`
            <button type="button" class="not-prose my-4">
                <a href="${e}" class="cursor-pointer py-2 px-4 rounded bg-[#086dd7] hover:bg-[#2560ff] text-white!">
                    ${n}
                </a>
            </button>
        `}}customElements.define("button-component",tn);class nn extends HTMLElement{constructor(){super();m(this,"currentRoute","")}connectedCallback(){this.render(),this.setupEventListeners()}getCurrentRoute(){return window.location.hash.slice(2).split("/")[0]||"get-started"}async loadNavData(){this.currentRoute=this.getCurrentRoute();try{const n=await fetch(`/data/nav/${this.currentRoute}.json`);if(!n.ok)throw new Error(`Failed to load navigation data for ${this.currentRoute}`);return await n.json()}catch(n){return console.error("Error loading navigation data:",n),await(await fetch("/data/nav/get-started.json")).json()}}isGetStartedData(n){return this.currentRoute==="get-started"||Object.values(n)[0]&&typeof Object.values(n)[0]=="object"&&!Array.isArray(Object.values(n)[0])}generateGetStartedNav(n){return Object.entries(n).map(([,r])=>r.children?this.generateSectionWithChildren(r):`
          <li class="rounded px-2 hover:text-blue-500 hover:dark:text-blue-500">
            <a class="block w-full truncate py-2" href="${r.href_path}">
              ${r.name}
            </a>
          </li>
        `).join("")}generateSectionWithChildren(n){const r=n.children?Object.entries(n.children).map(([,i])=>i.children?this.generateNestedSection(i):`
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
            ${n.href_path?`<a class="block select-none hover:text-blue-500 hover:dark:text-blue-500" 
                 href="${n.href_path}">
                ${n.name}
              </a>`:`<span class="block select-none">
                ${n.name}
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
    `}generateNestedSection(n){const r=n.children?Object.entries(n.children).map(([,i])=>`
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
            ${n.href_path?`<a class="block select-none hover:text-blue-500 hover:dark:text-blue-500" 
                 href="${n.href_path}">
                ${n.name}
              </a>`:`<span class="block select-none">
                ${n.name}
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
    `}generateGuidesNav(n){return Object.entries(n).map(([r,i])=>`
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
    `).join("")}setupEventListeners(){this.addEventListener("click",n=>{const r=n.target.closest("button");r&&r.getAttribute("aria-label")==="Toggle section"&&this.toggleSection(r)}),window.addEventListener("hashchange",()=>{this.getCurrentRoute()!==this.currentRoute&&this.render()})}toggleSection(n){var a;const r=n.closest(".section__wrapper"),i=(a=r==null?void 0:r.parentElement)==null?void 0:a.querySelector("ul.ml-3");i&&i.classList.toggle("hidden"),n.querySelectorAll("span").forEach(u=>{u.classList.toggle("hidden")});const l=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",(!l).toString())}async render(){try{const n=await this.loadNavData();let r="";this.isGetStartedData(n)?r=this.generateGetStartedNav(n):r=this.generateGuidesNav(n),this.innerHTML=`
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
      `}}}customElements.define("nav-component",nn);class rn extends HTMLElement{static get observedAttributes(){return["username","avatar","role"]}constructor(){super()}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}escapeHtml(e){const n=document.createElement("div");return n.textContent=e,n.innerHTML}render(){const e=this.getAttribute("username"),n=this.getAttribute("avatar"),r=this.escapeHtml(this.getAttribute("role")||"기여자");if(!e)this.innerHTML=`
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
      `;else{const s=this.escapeHtml(e),l=`https://github.com/${e}`,a=n||"https://avatars.githubusercontent.com/u/0?v=4";this.innerHTML=`
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
      `}}}customElements.define("contributor-component",rn);class sn extends HTMLElement{static get observedAttributes(){return["href","icon","title","description"]}constructor(){super()}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}getIconSvg(e){const n={book:`
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
      `};return n[e]||n.rocket}isExternalLink(e){return e.startsWith("http://")||e.startsWith("https://")}escapeHtml(e){const n=document.createElement("div");return n.textContent=e,n.innerHTML}render(){const e=this.getAttribute("href")||"#",n=this.getAttribute("icon")||"rocket",r=this.escapeHtml(this.getAttribute("title")||"제목"),i=this.escapeHtml(this.getAttribute("description")||"설명"),s=this.isExternalLink(e),l=s?'target="_blank" rel="noopener noreferrer"':"",a=s?`${r} (새 창에서 열림)`:r;this.innerHTML=`
      <a
        href="${e}"
        ${l}
        class="group block rounded-xl border border-[#007bff] bg-white/80 backdrop-blur-sm p-6 transition hover:scale-[1.02] hover:border-[#0056b3] dark:border-[#007bff] dark:bg-gray-900/80 dark:hover:border-[#0056b3]"
        aria-label="${a}"
      >
        <div class="flex items-start gap-4">
          <div class="shrink-0 rounded-lg bg-blue-100 p-3 text-blue-500 dark:bg-gray-700 dark:text-blue-400">
            <span class="icon-svg">
              ${this.getIconSvg(n)}
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
    `}}customElements.define("home-link-card-component",sn);function Se(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var $=Se();function xt(t){$=t}var j={exec:()=>null};function g(t,e=""){let n=typeof t=="string"?t:t.source;const r={replace:(i,s)=>{let l=typeof s=="string"?s:s.source;return l=l.replace(x.caret,"$1"),n=n.replace(i,l),r},getRegex:()=>new RegExp(n,e)};return r}var x={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},an=/^(?:[ \t]*(?:\n|$))+/,on=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ln=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,F=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,cn=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Te=/(?:[*+-]|\d{1,9}[.)])/,vt=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,yt=g(vt).replace(/bull/g,Te).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),un=g(vt).replace(/bull/g,Te).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ee=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,pn=/^[^\n]+/,Ce=/(?!\s*\])(?:\\.|[^\[\]\\])+/,hn=g(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ce).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),dn=g(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Te).getRegex(),ie="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Re=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,fn=g("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Re).replace("tag",ie).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),wt=g(Ee).replace("hr",F).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ie).getRegex(),gn=g(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",wt).getRegex(),Ae={blockquote:gn,code:on,def:hn,fences:ln,heading:cn,hr:F,html:fn,lheading:yt,list:dn,newline:an,paragraph:wt,table:j,text:pn},We=g("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",F).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ie).getRegex(),bn={...Ae,lheading:un,table:We,paragraph:g(Ee).replace("hr",F).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",We).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ie).getRegex()},mn={...Ae,html:g(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Re).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:j,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:g(Ee).replace("hr",F).replace("heading",` *#{1,6} *[^
]`).replace("lheading",yt).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},kn=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,xn=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,_t=/^( {2,}|\\)\n(?!\s*$)/,vn=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,se=/[\p{P}\p{S}]/u,Le=/[\s\p{P}\p{S}]/u,St=/[^\s\p{P}\p{S}]/u,yn=g(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Le).getRegex(),Tt=/(?!~)[\p{P}\p{S}]/u,wn=/(?!~)[\s\p{P}\p{S}]/u,_n=/(?:[^\s\p{P}\p{S}]|~)/u,Sn=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Et=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Tn=g(Et,"u").replace(/punct/g,se).getRegex(),En=g(Et,"u").replace(/punct/g,Tt).getRegex(),Ct="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Cn=g(Ct,"gu").replace(/notPunctSpace/g,St).replace(/punctSpace/g,Le).replace(/punct/g,se).getRegex(),Rn=g(Ct,"gu").replace(/notPunctSpace/g,_n).replace(/punctSpace/g,wn).replace(/punct/g,Tt).getRegex(),An=g("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,St).replace(/punctSpace/g,Le).replace(/punct/g,se).getRegex(),Ln=g(/\\(punct)/,"gu").replace(/punct/g,se).getRegex(),In=g(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),$n=g(Re).replace("(?:-->|$)","-->").getRegex(),Mn=g("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",$n).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),J=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Pn=g(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",J).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Rt=g(/^!?\[(label)\]\[(ref)\]/).replace("label",J).replace("ref",Ce).getRegex(),At=g(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ce).getRegex(),Nn=g("reflink|nolink(?!\\()","g").replace("reflink",Rt).replace("nolink",At).getRegex(),Ie={_backpedal:j,anyPunctuation:Ln,autolink:In,blockSkip:Sn,br:_t,code:xn,del:j,emStrongLDelim:Tn,emStrongRDelimAst:Cn,emStrongRDelimUnd:An,escape:kn,link:Pn,nolink:At,punctuation:yn,reflink:Rt,reflinkSearch:Nn,tag:Mn,text:vn,url:j},zn={...Ie,link:g(/^!?\[(label)\]\((.*?)\)/).replace("label",J).getRegex(),reflink:g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",J).getRegex()},me={...Ie,emStrongRDelimAst:Rn,emStrongLDelim:En,url:g(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Bn={...me,br:g(_t).replace("{2,}","*").getRegex(),text:g(me.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},K={normal:Ae,gfm:bn,pedantic:mn},D={normal:Ie,gfm:me,breaks:Bn,pedantic:zn},On={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ve=t=>On[t];function v(t,e){if(e){if(x.escapeTest.test(t))return t.replace(x.escapeReplace,Ve)}else if(x.escapeTestNoEncode.test(t))return t.replace(x.escapeReplaceNoEncode,Ve);return t}function Ke(t){try{t=encodeURI(t).replace(x.percentDecode,"%")}catch{return null}return t}function Qe(t,e){var s;const n=t.replace(x.findPipe,(l,a,u)=>{let o=!1,c=a;for(;--c>=0&&u[c]==="\\";)o=!o;return o?"|":" |"}),r=n.split(x.splitPipe);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!((s=r.at(-1))!=null&&s.trim())&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(x.slashPipe,"|");return r}function q(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function Dn(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}function Xe(t,e,n,r,i){const s=e.href,l=e.title||null,a=t[1].replace(i.other.outputLinkReplace,"$1");r.state.inLink=!0;const u={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:s,title:l,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,u}function qn(t,e,n){const r=t.match(n.other.indentCodeCompensation);if(r===null)return e;const i=r[1];return e.split(`
`).map(s=>{const l=s.match(n.other.beginningSpace);if(l===null)return s;const[a]=l;return a.length>=i.length?s.slice(i.length):s}).join(`
`)}var ee=class{constructor(t){m(this,"options");m(this,"rules");m(this,"lexer");this.options=t||$}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:q(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],r=qn(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){const r=q(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:q(e[0],`
`)}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){let n=q(e[0],`
`).split(`
`),r="",i="";const s=[];for(;n.length>0;){let l=!1;const a=[];let u;for(u=0;u<n.length;u++)if(this.rules.other.blockquoteStart.test(n[u]))a.push(n[u]),l=!0;else if(!l)a.push(n[u]);else break;n=n.slice(u);const o=a.join(`
`),c=o.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${o}`:o,i=i?`${i}
${c}`:c;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,s,!0),this.lexer.state.top=h,n.length===0)break;const p=s.at(-1);if((p==null?void 0:p.type)==="code")break;if((p==null?void 0:p.type)==="blockquote"){const b=p,d=b.raw+`
`+n.join(`
`),k=this.blockquote(d);s[s.length-1]=k,r=r.substring(0,r.length-b.raw.length)+k.raw,i=i.substring(0,i.length-b.text.length)+k.text;break}else if((p==null?void 0:p.type)==="list"){const b=p,d=b.raw+`
`+n.join(`
`),k=this.list(d);s[s.length-1]=k,r=r.substring(0,r.length-p.raw.length)+k.raw,i=i.substring(0,i.length-b.raw.length)+k.raw,n=d.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:s,text:i}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim();const r=n.length>1,i={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const s=this.rules.other.listItemRegex(n);let l=!1;for(;t;){let u=!1,o="",c="";if(!(e=s.exec(t))||this.rules.block.hr.test(t))break;o=e[0],t=t.substring(o.length);let h=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,ue=>" ".repeat(3*ue.length)),p=t.split(`
`,1)[0],b=!h.trim(),d=0;if(this.options.pedantic?(d=2,c=h.trimStart()):b?d=e[1].length+1:(d=e[2].search(this.rules.other.nonSpaceChar),d=d>4?1:d,c=h.slice(d),d+=e[1].length),b&&this.rules.other.blankLine.test(p)&&(o+=p+`
`,t=t.substring(p.length+1),u=!0),!u){const ue=this.rules.other.nextBulletRegex(d),Ue=this.rules.other.hrRegex(d),Ze=this.rules.other.fencesBeginRegex(d),Ye=this.rules.other.headingBeginRegex(d),Vt=this.rules.other.htmlBeginRegex(d);for(;t;){const pe=t.split(`
`,1)[0];let O;if(p=pe,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),O=p):O=p.replace(this.rules.other.tabCharGlobal,"    "),Ze.test(p)||Ye.test(p)||Vt.test(p)||ue.test(p)||Ue.test(p))break;if(O.search(this.rules.other.nonSpaceChar)>=d||!p.trim())c+=`
`+O.slice(d);else{if(b||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Ze.test(h)||Ye.test(h)||Ue.test(h))break;c+=`
`+p}!b&&!p.trim()&&(b=!0),o+=pe+`
`,t=t.substring(pe.length+1),h=O.slice(d)}}i.loose||(l?i.loose=!0:this.rules.other.doubleBlankLine.test(o)&&(l=!0));let k=null,Fe;this.options.gfm&&(k=this.rules.other.listIsTask.exec(c),k&&(Fe=k[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:o,task:!!k,checked:Fe,loose:!1,text:c,tokens:[]}),i.raw+=o}const a=i.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let u=0;u<i.items.length;u++)if(this.lexer.state.top=!1,i.items[u].tokens=this.lexer.blockTokens(i.items[u].text,[]),!i.loose){const o=i.items[u].tokens.filter(h=>h.type==="space"),c=o.length>0&&o.some(h=>this.rules.other.anyLine.test(h.raw));i.loose=c}if(i.loose)for(let u=0;u<i.items.length;u++)i.items[u].loose=!0;return i}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:r,title:i}}}table(t){var l;const e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;const n=Qe(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=(l=e[3])!=null&&l.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const a of r)this.rules.other.tableAlignRight.test(a)?s.align.push("right"):this.rules.other.tableAlignCenter.test(a)?s.align.push("center"):this.rules.other.tableAlignLeft.test(a)?s.align.push("left"):s.align.push(null);for(let a=0;a<n.length;a++)s.header.push({text:n[a],tokens:this.lexer.inline(n[a]),header:!0,align:s.align[a]});for(const a of i)s.rows.push(Qe(a,s.header.length).map((u,o)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:s.align[o]})));return s}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const s=q(n.slice(0,-1),"\\");if((n.length-s.length)%2===0)return}else{const s=Dn(e[2],"()");if(s===-2)return;if(s>-1){const a=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let r=e[2],i="";if(this.options.pedantic){const s=this.rules.other.pedanticHrefTitle.exec(r);s&&(r=s[1],i=s[3])}else i=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),Xe(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){const r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[r.toLowerCase()];if(!i){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return Xe(n,i,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const s=[...r[0]].length-1;let l,a,u=s,o=0;const c=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,e=e.slice(-1*t.length+s);(r=c.exec(e))!=null;){if(l=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!l)continue;if(a=[...l].length,r[3]||r[4]){u+=a;continue}else if((r[5]||r[6])&&s%3&&!((s+a)%3)){o+=a;continue}if(u-=a,u>0)continue;a=Math.min(a,a+u+o);const h=[...r[0]][0].length,p=t.slice(0,s+r.index+h+a);if(Math.min(s,a)%2){const d=p.slice(1,-1);return{type:"em",raw:p,text:d,tokens:this.lexer.inlineTokens(d)}}const b=p.slice(2,-2);return{type:"strong",raw:p,text:b,tokens:this.lexer.inlineTokens(b)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(n),i=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&i&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var n;let e;if(e=this.rules.inline.url.exec(t)){let r,i;if(e[2]==="@")r=e[0],i="mailto:"+r;else{let s;do s=e[0],e[0]=((n=this.rules.inline._backpedal.exec(e[0]))==null?void 0:n[0])??"";while(s!==e[0]);r=e[0],e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){const n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},S=class ke{constructor(e){m(this,"tokens");m(this,"options");m(this,"state");m(this,"tokenizer");m(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||$,this.options.tokenizer=this.options.tokenizer||new ee,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:x,block:K.normal,inline:D.normal};this.options.pedantic?(n.block=K.pedantic,n.inline=D.pedantic):this.options.gfm&&(n.block=K.gfm,this.options.breaks?n.inline=D.breaks:n.inline=D.gfm),this.tokenizer.rules=n}static get rules(){return{block:K,inline:D}}static lex(e,n){return new ke(n).lex(e)}static lexInline(e,n){return new ke(n).inlineTokens(e)}lex(e){e=e.replace(x.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){var i,s,l;for(this.options.pedantic&&(e=e.replace(x.tabCharGlobal,"    ").replace(x.spaceLine,""));e;){let a;if((s=(i=this.options.extensions)==null?void 0:i.block)!=null&&s.some(o=>(a=o.call({lexer:this},e,n))?(e=e.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.space(e)){e=e.substring(a.raw.length);const o=n.at(-1);a.raw.length===1&&o!==void 0?o.raw+=`
`:n.push(a);continue}if(a=this.tokenizer.code(e)){e=e.substring(a.raw.length);const o=n.at(-1);(o==null?void 0:o.type)==="paragraph"||(o==null?void 0:o.type)==="text"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.at(-1).src=o.text):n.push(a);continue}if(a=this.tokenizer.fences(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.heading(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.hr(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.blockquote(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.list(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.html(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.def(e)){e=e.substring(a.raw.length);const o=n.at(-1);(o==null?void 0:o.type)==="paragraph"||(o==null?void 0:o.type)==="text"?(o.raw+=`
`+a.raw,o.text+=`
`+a.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.lheading(e)){e=e.substring(a.raw.length),n.push(a);continue}let u=e;if((l=this.options.extensions)!=null&&l.startBlock){let o=1/0;const c=e.slice(1);let h;this.options.extensions.startBlock.forEach(p=>{h=p.call({lexer:this},c),typeof h=="number"&&h>=0&&(o=Math.min(o,h))}),o<1/0&&o>=0&&(u=e.substring(0,o+1))}if(this.state.top&&(a=this.tokenizer.paragraph(u))){const o=n.at(-1);r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(a),r=u.length!==e.length,e=e.substring(a.raw.length);continue}if(a=this.tokenizer.text(e)){e=e.substring(a.raw.length);const o=n.at(-1);(o==null?void 0:o.type)==="text"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(a);continue}if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){var a,u,o;let r=e,i=null;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)c.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,i.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(i=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let s=!1,l="";for(;e;){s||(l=""),s=!1;let c;if((u=(a=this.options.extensions)==null?void 0:a.inline)!=null&&u.some(p=>(c=p.call({lexer:this},e,n))?(e=e.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(c.raw.length);const p=n.at(-1);c.type==="text"&&(p==null?void 0:p.type)==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(e,r,l)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(e)){e=e.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(e))){e=e.substring(c.raw.length),n.push(c);continue}let h=e;if((o=this.options.extensions)!=null&&o.startInline){let p=1/0;const b=e.slice(1);let d;this.options.extensions.startInline.forEach(k=>{d=k.call({lexer:this},b),typeof d=="number"&&d>=0&&(p=Math.min(p,d))}),p<1/0&&p>=0&&(h=e.substring(0,p+1))}if(c=this.tokenizer.inlineText(h)){e=e.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(l=c.raw.slice(-1)),s=!0;const p=n.at(-1);(p==null?void 0:p.type)==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(e){const p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}},te=class{constructor(t){m(this,"options");m(this,"parser");this.options=t||$}space(t){return""}code({text:t,lang:e,escaped:n}){var s;const r=(s=(e||"").match(x.notSpaceStart))==null?void 0:s[0],i=t.replace(x.endingNewline,"")+`
`;return r?'<pre><code class="language-'+v(r)+'">'+(n?i:v(i,!0))+`</code></pre>
`:"<pre><code>"+(n?i:v(i,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){const e=t.ordered,n=t.start;let r="";for(let l=0;l<t.items.length;l++){const a=t.items[l];r+=this.listitem(a)}const i=e?"ol":"ul",s=e&&n!==1?' start="'+n+'"':"";return"<"+i+s+`>
`+r+"</"+i+`>
`}listitem(t){var n;let e="";if(t.task){const r=this.checkbox({checked:!!t.checked});t.loose?((n=t.tokens[0])==null?void 0:n.type)==="paragraph"?(t.tokens[0].text=r+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=r+" "+v(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):e+=r+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",n="";for(let i=0;i<t.header.length;i++)n+=this.tablecell(t.header[i]);e+=this.tablerow({text:n});let r="";for(let i=0;i<t.rows.length;i++){const s=t.rows[i];n="";for(let l=0;l<s.length;l++)n+=this.tablecell(s[l]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){const e=this.parser.parseInline(t.tokens),n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${v(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:n}){const r=this.parser.parseInline(n),i=Ke(t);if(i===null)return r;t=i;let s='<a href="'+t+'"';return e&&(s+=' title="'+v(e)+'"'),s+=">"+r+"</a>",s}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));const i=Ke(t);if(i===null)return v(n);t=i;let s=`<img src="${t}" alt="${n}"`;return e&&(s+=` title="${v(e)}"`),s+=">",s}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:v(t.text)}},$e=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},T=class xe{constructor(e){m(this,"options");m(this,"renderer");m(this,"textRenderer");this.options=e||$,this.options.renderer=this.options.renderer||new te,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new $e}static parse(e,n){return new xe(n).parse(e)}static parseInline(e,n){return new xe(n).parseInline(e)}parse(e,n=!0){var i,s;let r="";for(let l=0;l<e.length;l++){const a=e[l];if((s=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&s[a.type]){const o=a,c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){r+=c||"";continue}}const u=a;switch(u.type){case"space":{r+=this.renderer.space(u);continue}case"hr":{r+=this.renderer.hr(u);continue}case"heading":{r+=this.renderer.heading(u);continue}case"code":{r+=this.renderer.code(u);continue}case"table":{r+=this.renderer.table(u);continue}case"blockquote":{r+=this.renderer.blockquote(u);continue}case"list":{r+=this.renderer.list(u);continue}case"html":{r+=this.renderer.html(u);continue}case"paragraph":{r+=this.renderer.paragraph(u);continue}case"text":{let o=u,c=this.renderer.text(o);for(;l+1<e.length&&e[l+1].type==="text";)o=e[++l],c+=`
`+this.renderer.text(o);n?r+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):r+=c;continue}default:{const o='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}parseInline(e,n=this.renderer){var i,s;let r="";for(let l=0;l<e.length;l++){const a=e[l];if((s=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&s[a.type]){const o=this.options.extensions.renderers[a.type].call({parser:this},a);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=o||"";continue}}const u=a;switch(u.type){case"escape":{r+=n.text(u);break}case"html":{r+=n.html(u);break}case"link":{r+=n.link(u);break}case"image":{r+=n.image(u);break}case"strong":{r+=n.strong(u);break}case"em":{r+=n.em(u);break}case"codespan":{r+=n.codespan(u);break}case"br":{r+=n.br(u);break}case"del":{r+=n.del(u);break}case"text":{r+=n.text(u);break}default:{const o='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}},be,X=(be=class{constructor(t){m(this,"options");m(this,"block");this.options=t||$}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?S.lex:S.lexInline}provideParser(){return this.block?T.parse:T.parseInline}},m(be,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),be),Hn=class{constructor(...t){m(this,"defaults",Se());m(this,"options",this.setOptions);m(this,"parse",this.parseMarkdown(!0));m(this,"parseInline",this.parseMarkdown(!1));m(this,"Parser",T);m(this,"Renderer",te);m(this,"TextRenderer",$e);m(this,"Lexer",S);m(this,"Tokenizer",ee);m(this,"Hooks",X);this.use(...t)}walkTokens(t,e){var r,i;let n=[];for(const s of t)switch(n=n.concat(e.call(this,s)),s.type){case"table":{const l=s;for(const a of l.header)n=n.concat(this.walkTokens(a.tokens,e));for(const a of l.rows)for(const u of a)n=n.concat(this.walkTokens(u.tokens,e));break}case"list":{const l=s;n=n.concat(this.walkTokens(l.items,e));break}default:{const l=s;(i=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&i[l.type]?this.defaults.extensions.childTokens[l.type].forEach(a=>{const u=l[a].flat(1/0);n=n.concat(this.walkTokens(u,e))}):l.tokens&&(n=n.concat(this.walkTokens(l.tokens,e)))}}return n}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const s=e.renderers[i.name];s?e.renderers[i.name]=function(...l){let a=i.renderer.apply(this,l);return a===!1&&(a=s.apply(this,l)),a}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=e[i.level];s?s.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),r.extensions=e),n.renderer){const i=this.defaults.renderer||new te(this.defaults);for(const s in n.renderer){if(!(s in i))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const l=s,a=n.renderer[l],u=i[l];i[l]=(...o)=>{let c=a.apply(i,o);return c===!1&&(c=u.apply(i,o)),c||""}}r.renderer=i}if(n.tokenizer){const i=this.defaults.tokenizer||new ee(this.defaults);for(const s in n.tokenizer){if(!(s in i))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const l=s,a=n.tokenizer[l],u=i[l];i[l]=(...o)=>{let c=a.apply(i,o);return c===!1&&(c=u.apply(i,o)),c}}r.tokenizer=i}if(n.hooks){const i=this.defaults.hooks||new X;for(const s in n.hooks){if(!(s in i))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;const l=s,a=n.hooks[l],u=i[l];X.passThroughHooks.has(s)?i[l]=o=>{if(this.defaults.async)return Promise.resolve(a.call(i,o)).then(h=>u.call(i,h));const c=a.call(i,o);return u.call(i,c)}:i[l]=(...o)=>{let c=a.apply(i,o);return c===!1&&(c=u.apply(i,o)),c}}r.hooks=i}if(n.walkTokens){const i=this.defaults.walkTokens,s=n.walkTokens;r.walkTokens=function(l){let a=[];return a.push(s.call(this,l)),i&&(a=a.concat(i.call(this,l))),a}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return S.lex(t,e??this.defaults)}parser(t,e){return T.parse(t,e??this.defaults)}parseMarkdown(t){return(n,r)=>{const i={...r},s={...this.defaults,...i},l=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&i.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=t);const a=s.hooks?s.hooks.provideLexer():t?S.lex:S.lexInline,u=s.hooks?s.hooks.provideParser():t?T.parse:T.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(n):n).then(o=>a(o,s)).then(o=>s.hooks?s.hooks.processAllTokens(o):o).then(o=>s.walkTokens?Promise.all(this.walkTokens(o,s.walkTokens)).then(()=>o):o).then(o=>u(o,s)).then(o=>s.hooks?s.hooks.postprocess(o):o).catch(l);try{s.hooks&&(n=s.hooks.preprocess(n));let o=a(n,s);s.hooks&&(o=s.hooks.processAllTokens(o)),s.walkTokens&&this.walkTokens(o,s.walkTokens);let c=u(o,s);return s.hooks&&(c=s.hooks.postprocess(c)),c}catch(o){return l(o)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const r="<p>An error occurred:</p><pre>"+v(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},I=new Hn;function f(t,e){return I.parse(t,e)}f.options=f.setOptions=function(t){return I.setOptions(t),f.defaults=I.defaults,xt(f.defaults),f};f.getDefaults=Se;f.defaults=$;f.use=function(...t){return I.use(...t),f.defaults=I.defaults,xt(f.defaults),f};f.walkTokens=function(t,e){return I.walkTokens(t,e)};f.parseInline=I.parseInline;f.Parser=T;f.parser=T.parse;f.Renderer=te;f.TextRenderer=$e;f.Lexer=S;f.lexer=S.lex;f.Tokenizer=ee;f.Hooks=X;f.parse=f;f.options;f.setOptions;f.use;f.walkTokens;f.parseInline;T.parse;S.lex;const jn=t=>{const e=t.replace(/^#?\/?/,"");return e===""||e==="home"?"landing":"documentation"},Gn=t=>({landing:{type:"landing",showBreadcrumb:!1,showTableOfContents:!1,showNavigation:!1},documentation:{type:"documentation",showBreadcrumb:!0,showTableOfContents:!0,showNavigation:!0}})[t],ae=()=>Gn(jn(window.location.hash));function N(t){return document.getElementById(t)}function Je(t){const e=document.getElementById(t);if(!e)throw new Error(`Required element not found: #${t}`);return e}f.setOptions({gfm:!0,breaks:!0});const Fn=["card-component","button-component","home-link-card-component"],Un=Fn.join("|"),et=new RegExp(`^<(${Un})([\\s\\S]*?)(?:>([\\s\\S]*?)<\\/\\1>|\\s*\\/>)`,"i"),Zn={name:"custom-block-tag",level:"block",start(t){var e;return(e=t.match(et))==null?void 0:e.index},tokenizer(t){const e=et.exec(t);if(e)return{type:"html",raw:e[0],text:e[0]}}};f.use({extensions:[Zn]});async function Yn(t,e){const n=await f.parse(t);e.innerHTML=n}async function Wn(t){try{const e=await fetch(`/docs/${t}.md`);if(!e.ok)throw new Error(`❌ 페이지를 찾을 수 없습니다: ${t}`);const n=await e.text(),r=e.headers.get("content-type");if(r&&r.includes("text/html"))throw new Error(`❌ 요청된 경로가 HTML을 반환합니다: ${t}`);const i=n.trim();if(i.startsWith("<!DOCTYPE html>")||i.startsWith("<html>")||i.startsWith("<title>")&&i.includes("</title>"))throw new Error(`❌ 요청된 경로가 Markdown이 아닌 HTML을 반환합니다: ${t}`);const s=Je("content");s.innerHTML="",await Yn(n,s)}catch{const e=Je("content");e.innerHTML=`
      <div id="not-found" class="w-full">
        <p>열심히 문서를 업데이트하고 있습니다💦. 더 풍부한 한국어 번역 자료를 제공하기 위해 웹사이트 발전에 기여하고 싶다면 <a href="https://github.com/docker-ko/docker-ko.github.io">깃허브 레포지토리 주소</a>를 클릭하세요!</p>
        <button-component href="#/home" title="홈으로 돌아가기" />
      </div>
    `}}async function Vn(){const e=ae().type==="landing"?"home":location.hash.substring(2)||"home";await Wn(e)}const Kn=t=>new IntersectionObserver(e=>{const n=e.filter(r=>r.isIntersecting).sort((r,i)=>r.boundingClientRect.top-i.boundingClientRect.top)[0];if(n){const r=n.target.id;Object.entries(t).forEach(([i,s])=>{i===r?s.classList.add("border-l-2","border-blue-500"):s.classList.remove("border-l-2","border-blue-500")})}},{rootMargin:"-60px 0px -60% 0px",threshold:.8}),Qn=()=>{const t=N("content"),e=N("toc");if(!t||!e){console.warn("TOC 초기화 실패: content 또는 toc 요소를 찾을 수 없습니다.");return}e.innerHTML="";const n=t.querySelectorAll("h2, h3");if(n.length===0)return;const r=document.createElement("p"),i=document.createElement("ul");r.classList.add("text-black","font-normal","text-lg","pb-5"),r.textContent="Table of contents";const s={};n.forEach((a,u)=>{const o=document.createElement("li");o.classList.add("max-w-64","font-extralight","hover:bg-gray-300","hover:font-semibold","cursor-pointer");const c=document.createElement("button");c.classList.add("flex","justify-start","items-stretch","p-1","cursor-pointer","w-full","truncate"),c.setAttribute("aria-label",a.textContent||"Heading Link"),c.setAttribute("role","link");const h=a.textContent||"";c.textContent=h.length>30?h.substring(0,30)+"...":h,c.addEventListener("click",p=>{p.preventDefault();const b=a.getBoundingClientRect(),d=window.scrollY+b.top-60;window.scrollTo({top:d,behavior:"smooth"})}),o.appendChild(c),i.appendChild(o),a.tagName==="H3"&&o.classList.add("pl-3"),a.id=`${u}`,s[a.id]=o}),e.appendChild(r),e.appendChild(i);const l=Kn(s);n.forEach(a=>l.observe(a))};async function Xn(){try{const t=await fetch("/data/breadcrumb.json");if(!t.ok)throw new Error("Failed to load breadcrumb translation data");return await t.json()}catch(t){return console.error("Error loading breadcrumb translation data:",t),{}}}function Jn(t,e,n){let r=n[t[0]];if(!r)return null;for(let i=1;i<=e;i++)if(r.children&&r.children[t[i]])r=r.children[t[i]];else return null;return r}async function er(){const t=window.location.hash.slice(1),e=await Xn(),n=t.split("/").filter(s=>s!==""),r=[{name:"홈",path:"/",linkable:!0}];let i="";return n.forEach((s,l)=>{const a=Jn(n,l,e);i+=`/${s}`,a&&r.push({name:a.name,path:`#${i}`,linkable:a.linkable})}),r}function tr(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function nr(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rr(t,e){const n=tr(t.name),r=nr(t.path);return e?`<span class="truncate text-gray-400 dark:text-gray-300">${n}</span>`:t.linkable?`<a href="${r}" class="truncate text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">${n}</a> / `:`<span class="truncate text-gray-500 dark:text-gray-400">${n}</span> / `}function ir(t){const e=document.createElement("nav");e.id="breadcrumbs",e.className="pb-3 flex min-w-0 items-center gap-2";const n=t.map((r,i)=>rr(r,i===t.length-1)).join("");return e.innerHTML=n,e}function sr(){const t=document.getElementById("breadcrumbs");t&&t.remove()}async function ar(){const t=N("content");if(!t){console.warn("Breadcrumb 초기화 실패: content 요소를 찾을 수 없습니다.");return}sr();const e=await er(),n=ir(e);t.insertBefore(n,t.firstChild)}function or(t){const e=N("sidebar");e&&(e.style.display=t.showNavigation?"":"none");const n=N("aside-toc");n&&(n.style.display=t.showTableOfContents?"":"none");const r=N("content");r&&(r.classList.remove("max-w-5xl","mx-auto"),t.type==="landing"&&r.classList.add("max-w-5xl","mx-auto"))}const w=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,E=globalThis,G="10.37.0";function U(){return Me(E),E}function Me(t){const e=t.__SENTRY__=t.__SENTRY__||{};return e.version=e.version||G,e[G]=e[G]||{}}function Z(t,e,n=E){const r=n.__SENTRY__=n.__SENTRY__||{},i=r[G]=r[G]||{};return i[t]||(i[t]=e())}const lr="Sentry Logger ",tt={};function cr(t){if(!("console"in E))return t();const e=E.console,n={},r=Object.keys(tt);r.forEach(i=>{const s=tt[i];n[i]=e[i],e[i]=s});try{return t()}finally{r.forEach(i=>{e[i]=n[i]})}}function ur(){Ne().enabled=!0}function pr(){Ne().enabled=!1}function Lt(){return Ne().enabled}function hr(...t){Pe("log",...t)}function dr(...t){Pe("warn",...t)}function fr(...t){Pe("error",...t)}function Pe(t,...e){w&&Lt()&&cr(()=>{E.console[t](`${lr}[${t}]:`,...e)})}function Ne(){return w?Z("loggerSettings",()=>({enabled:!1})):{enabled:!1}}const R={enable:ur,disable:pr,isEnabled:Lt,log:hr,warn:dr,error:fr},gr=Object.prototype.toString;function It(t,e){return gr.call(t)===`[object ${e}]`}function br(t){return It(t,"String")}function mr(t){return It(t,"Object")}function kr(t){return!!(t!=null&&t.then&&typeof t.then=="function")}function xr(t,e,n){try{Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0})}catch{w&&R.log(`Failed to add non-enumerable property "${e}" to object`,t)}}let M;function oe(t){if(M!==void 0)return M?M(t):t();const e=Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),n=E;return e in n&&typeof n[e]=="function"?(M=n[e],M(t)):(M=null,t())}function ve(){return oe(()=>Math.random())}function vr(){return oe(()=>Date.now())}function yr(t,e=0){return typeof t!="string"||e===0||t.length<=e?t:`${t.slice(0,e)}...`}function wr(){const t=E;return t.crypto||t.msCrypto}let he;function _r(){return ve()*16}function z(t=wr()){try{if(t!=null&&t.randomUUID)return oe(()=>t.randomUUID()).replace(/-/g,"")}catch{}return he||(he="10000000100040008000"+1e11),he.replace(/[018]/g,e=>(e^(_r()&15)>>e/4).toString(16))}const $t=1e3;function Mt(){return vr()/$t}function Sr(){const{performance:t}=E;if(!(t!=null&&t.now)||!t.timeOrigin)return Mt;const e=t.timeOrigin;return()=>(e+oe(()=>t.now()))/$t}let nt;function ze(){return(nt??(nt=Sr()))()}function Tr(t,e={}){if(e.user&&(!t.ipAddress&&e.user.ip_address&&(t.ipAddress=e.user.ip_address),!t.did&&!e.did&&(t.did=e.user.id||e.user.email||e.user.username)),t.timestamp=e.timestamp||ze(),e.abnormal_mechanism&&(t.abnormal_mechanism=e.abnormal_mechanism),e.ignoreDuration&&(t.ignoreDuration=e.ignoreDuration),e.sid&&(t.sid=e.sid.length===32?e.sid:z()),e.init!==void 0&&(t.init=e.init),!t.did&&e.did&&(t.did=`${e.did}`),typeof e.started=="number"&&(t.started=e.started),t.ignoreDuration)t.duration=void 0;else if(typeof e.duration=="number")t.duration=e.duration;else{const n=t.timestamp-t.started;t.duration=n>=0?n:0}e.release&&(t.release=e.release),e.environment&&(t.environment=e.environment),!t.ipAddress&&e.ipAddress&&(t.ipAddress=e.ipAddress),!t.userAgent&&e.userAgent&&(t.userAgent=e.userAgent),typeof e.errors=="number"&&(t.errors=e.errors),e.status&&(t.status=e.status)}function le(t,e,n=2){if(!e||typeof e!="object"||n<=0)return e;if(t&&Object.keys(e).length===0)return t;const r={...t};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=le(r[i],e[i],n-1));return r}function rt(){return z()}function Pt(){return z().substring(16)}const ye="_sentrySpan";function it(t,e){e?xr(t,ye,e):delete t[ye]}function ne(t){return t[ye]}const Er=100;class C{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._attributes={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:rt(),sampleRand:ve()}}clone(){const e=new C;return e._breadcrumbs=[...this._breadcrumbs],e._tags={...this._tags},e._attributes={...this._attributes},e._extra={...this._extra},e._contexts={...this._contexts},this._contexts.flags&&(e._contexts.flags={values:[...this._contexts.flags.values]}),e._user=this._user,e._level=this._level,e._session=this._session,e._transactionName=this._transactionName,e._fingerprint=this._fingerprint,e._eventProcessors=[...this._eventProcessors],e._attachments=[...this._attachments],e._sdkProcessingMetadata={...this._sdkProcessingMetadata},e._propagationContext={...this._propagationContext},e._client=this._client,e._lastEventId=this._lastEventId,e._conversationId=this._conversationId,it(e,ne(this)),e}setClient(e){this._client=e}setLastEventId(e){this._lastEventId=e}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&Tr(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}setConversationId(e){return this._conversationId=e||void 0,this._notifyScopeListeners(),this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,n){return this.setTags({[e]:n})}setAttributes(e){return this._attributes={...this._attributes,...e},this._notifyScopeListeners(),this}setAttribute(e,n){return this.setAttributes({[e]:n})}removeAttribute(e){return e in this._attributes&&(delete this._attributes[e],this._notifyScopeListeners()),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,n){return this._extra={...this._extra,[e]:n},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,n){return n===null?delete this._contexts[e]:this._contexts[e]=n,this._notifyScopeListeners(),this}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this;const n=typeof e=="function"?e(this):e,r=n instanceof C?n.getScopeData():mr(n)?e:void 0,{tags:i,attributes:s,extra:l,user:a,contexts:u,level:o,fingerprint:c=[],propagationContext:h,conversationId:p}=r||{};return this._tags={...this._tags,...i},this._attributes={...this._attributes,...s},this._extra={...this._extra,...l},this._contexts={...this._contexts,...u},a&&Object.keys(a).length&&(this._user=a),o&&(this._level=o),c.length&&(this._fingerprint=c),h&&(this._propagationContext=h),p&&(this._conversationId=p),this}clear(){return this._breadcrumbs=[],this._tags={},this._attributes={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,this._conversationId=void 0,it(this,void 0),this._attachments=[],this.setPropagationContext({traceId:rt(),sampleRand:ve()}),this._notifyScopeListeners(),this}addBreadcrumb(e,n){var s;const r=typeof n=="number"?n:Er;if(r<=0)return this;const i={timestamp:Mt(),...e,message:e.message?yr(e.message,2048):e.message};return this._breadcrumbs.push(i),this._breadcrumbs.length>r&&(this._breadcrumbs=this._breadcrumbs.slice(-r),(s=this._client)==null||s.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,attributes:this._attributes,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:ne(this),conversationId:this._conversationId}}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata=le(this._sdkProcessingMetadata,e,2),this}setPropagationContext(e){return this._propagationContext=e,this}getPropagationContext(){return this._propagationContext}captureException(e,n){const r=(n==null?void 0:n.event_id)||z();if(!this._client)return w&&R.warn("No client configured on scope - will not capture exception!"),r;const i=new Error("Sentry syntheticException");return this._client.captureException(e,{originalException:e,syntheticException:i,...n,event_id:r},this),r}captureMessage(e,n,r){const i=(r==null?void 0:r.event_id)||z();if(!this._client)return w&&R.warn("No client configured on scope - will not capture message!"),i;const s=(r==null?void 0:r.syntheticException)??new Error(e);return this._client.captureMessage(e,n,{originalException:e,syntheticException:s,...r,event_id:i},this),i}captureEvent(e,n){const r=(n==null?void 0:n.event_id)||z();return this._client?(this._client.captureEvent(e,{...n,event_id:r},this),r):(w&&R.warn("No client configured on scope - will not capture event!"),r)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(e=>{e(this)}),this._notifyingListeners=!1)}}function Cr(){return Z("defaultCurrentScope",()=>new C)}function Rr(){return Z("defaultIsolationScope",()=>new C)}class Ar{constructor(e,n){let r;e?r=e:r=new C;let i;n?i=n:i=new C,this._stack=[{scope:r}],this._isolationScope=i}withScope(e){const n=this._pushScope();let r;try{r=e(n)}catch(i){throw this._popScope(),i}return kr(r)?r.then(i=>(this._popScope(),i),i=>{throw this._popScope(),i}):(this._popScope(),r)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const e=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:e}),e}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function B(){const t=U(),e=Me(t);return e.stack=e.stack||new Ar(Cr(),Rr())}function Lr(t){return B().withScope(t)}function Ir(t,e){const n=B();return n.withScope(()=>(n.getStackTop().scope=t,e(t)))}function st(t){return B().withScope(()=>t(B().getIsolationScope()))}function $r(){return{withIsolationScope:st,withScope:Lr,withSetScope:Ir,withSetIsolationScope:(t,e)=>st(e),getCurrentScope:()=>B().getScope(),getIsolationScope:()=>B().getIsolationScope()}}function ce(t){const e=Me(t);return e.acs?e.acs:$r()}function Y(){const t=U();return ce(t).getCurrentScope()}function Be(){const t=U();return ce(t).getIsolationScope()}function Mr(){return Z("globalScope",()=>new C)}function Pr(...t){const e=U(),n=ce(e);if(t.length===2){const[r,i]=t;return r?n.withSetScope(r,i):n.withScope(i)}return n.withScope(t[0])}function Oe(){return Y().getClient()}function Nr(t){const e=t.getPropagationContext(),{traceId:n,parentSpanId:r,propagationSpanId:i}=e,s={trace_id:n,span_id:i||Pt()};return r&&(s.parent_span_id=r),s}const zr="sentry.source",Br="sentry.sample_rate",Or="sentry.previous_trace_sample_rate",Dr="sentry.op",qr="sentry.origin",Hr=0,jr=1,Gr="_sentryScope",Fr="_sentryIsolationScope";function Ur(t){if(t){if(typeof t=="object"&&"deref"in t&&typeof t.deref=="function")try{return t.deref()}catch{return}return t}}function Nt(t){const e=t;return{scope:e[Gr],isolationScope:Ur(e[Fr])}}const Zr="sentry-",Yr=/^sentry-/;function Wr(t){const e=Vr(t);if(!e)return;const n=Object.entries(e).reduce((r,[i,s])=>{if(i.match(Yr)){const l=i.slice(Zr.length);r[l]=s}return r},{});if(Object.keys(n).length>0)return n}function Vr(t){if(!(!t||!br(t)&&!Array.isArray(t)))return Array.isArray(t)?t.reduce((e,n)=>{const r=at(n);return Object.entries(r).forEach(([i,s])=>{e[i]=s}),e},{}):at(t)}function at(t){return t.split(",").map(e=>{const n=e.indexOf("=");if(n===-1)return[];const r=e.slice(0,n),i=e.slice(n+1);return[r,i].map(s=>{try{return decodeURIComponent(s.trim())}catch{return}})}).reduce((e,[n,r])=>(n&&r&&(e[n]=r),e),{})}const Kr=/^o(\d+)\./;function Qr(t,e=!1){const{host:n,path:r,pass:i,port:s,projectId:l,protocol:a,publicKey:u}=t;return`${a}://${u}${e&&i?`:${i}`:""}@${n}${s?`:${s}`:""}/${r&&`${r}/`}${l}`}function Xr(t){const e=t.match(Kr);return e==null?void 0:e[1]}function Jr(t){const e=t.getOptions(),{host:n}=t.getDsn()||{};let r;return e.orgId?r=String(e.orgId):n&&(r=Xr(n)),r}const zt=1;function ei(t){const{spanId:e,traceId:n,isRemote:r}=t.spanContext(),i=r?e:Bt(t).parent_span_id,s=Nt(t).scope,l=r?(s==null?void 0:s.getPropagationContext().propagationSpanId)||Pt():e;return{parent_span_id:i,span_id:l,trace_id:n}}function ti(t){if(t&&t.length>0)return t.map(({context:{spanId:e,traceId:n,traceFlags:r,...i},attributes:s})=>({span_id:e,trace_id:n,sampled:r===zt,attributes:s,...i}))}function ot(t){return typeof t=="number"?lt(t):Array.isArray(t)?t[0]+t[1]/1e9:t instanceof Date?lt(t.getTime()):ze()}function lt(t){return t>9999999999?t/1e3:t}function Bt(t){var r;if(ri(t))return t.getSpanJSON();const{spanId:e,traceId:n}=t.spanContext();if(ni(t)){const{attributes:i,startTime:s,name:l,endTime:a,status:u,links:o}=t,c="parentSpanId"in t?t.parentSpanId:"parentSpanContext"in t?(r=t.parentSpanContext)==null?void 0:r.spanId:void 0;return{span_id:e,trace_id:n,data:i,description:l,parent_span_id:c,start_timestamp:ot(s),timestamp:ot(a)||void 0,status:si(u),op:i[Dr],origin:i[qr],links:ti(o)}}return{span_id:e,trace_id:n,start_timestamp:0,data:{}}}function ni(t){const e=t;return!!e.attributes&&!!e.startTime&&!!e.name&&!!e.endTime&&!!e.status}function ri(t){return typeof t.getSpanJSON=="function"}function ii(t){const{traceFlags:e}=t.spanContext();return e===zt}function si(t){if(!(!t||t.code===Hr))return t.code===jr?"ok":t.message||"internal_error"}const ai="_sentryRootSpan";function oi(t){return t[ai]||t}function li(){const t=U(),e=ce(t);return e.getActiveSpan?e.getActiveSpan():ne(Y())}function ci(t){var n;if(typeof __SENTRY_TRACING__=="boolean"&&!__SENTRY_TRACING__)return!1;const e=(n=Oe())==null?void 0:n.getOptions();return!!e&&(e.tracesSampleRate!=null||!!e.tracesSampler)}const ui="production",pi="_frozenDsc";function Ot(t,e){const n=e.getOptions(),{publicKey:r}=e.getDsn()||{},i={environment:n.environment||ui,release:n.release,public_key:r,trace_id:t,org_id:Jr(e)};return e.emit("createDsc",i),i}function hi(t,e){const n=e.getPropagationContext();return n.dsc||Ot(n.traceId,t)}function di(t){var d;const e=Oe();if(!e)return{};const n=oi(t),r=Bt(n),i=r.data,s=n.spanContext().traceState,l=(s==null?void 0:s.get("sentry.sample_rate"))??i[Br]??i[Or];function a(k){return(typeof l=="number"||typeof l=="string")&&(k.sample_rate=`${l}`),k}const u=n[pi];if(u)return a(u);const o=s==null?void 0:s.get("sentry.dsc"),c=o&&Wr(o);if(c)return a(c);const h=Ot(t.spanContext().traceId,e),p=i[zr],b=r.description;return p!=="url"&&b&&(h.transaction=b),ci()&&(h.sampled=String(ii(n)),h.sample_rand=(s==null?void 0:s.get("sentry.sample_rand"))??((d=Nt(n).scope)==null?void 0:d.getPropagationContext().sampleRand.toString())),a(h),e.emit("createDsc",h,n),h}function fi(t,e=[]){return[t,e]}function ct(t,e){const{extra:n,tags:r,attributes:i,user:s,contexts:l,level:a,sdkProcessingMetadata:u,breadcrumbs:o,fingerprint:c,eventProcessors:h,attachments:p,propagationContext:b,transactionName:d,span:k}=e;H(t,"extra",n),H(t,"tags",r),H(t,"attributes",i),H(t,"user",s),H(t,"contexts",l),t.sdkProcessingMetadata=le(t.sdkProcessingMetadata,u,2),a&&(t.level=a),d&&(t.transactionName=d),k&&(t.span=k),o.length&&(t.breadcrumbs=[...t.breadcrumbs,...o]),c.length&&(t.fingerprint=[...t.fingerprint,...c]),h.length&&(t.eventProcessors=[...t.eventProcessors,...h]),p.length&&(t.attachments=[...t.attachments,...p]),t.propagationContext={...t.propagationContext,...b}}function H(t,e,n){t[e]=le(t[e],n,1)}function gi(t,e){const n=Mr().getScopeData();return t&&ct(n,t.getScopeData()),e&&ct(n,e.getScopeData()),n}function bi(t){if(t)return mi(t)?{captureContext:t}:xi(t)?{captureContext:t}:t}function mi(t){return t instanceof C||typeof t=="function"}const ki=["user","level","extra","contexts","tags","fingerprint","propagationContext"];function xi(t){return Object.keys(t).some(e=>ki.includes(e))}function vi(t,e){return Y().captureException(t,bi(e))}function yi(t,e){const n=typeof e=="string"?e:void 0,r=typeof e!="string"?{captureContext:e}:void 0;return Y().captureMessage(t,n,r)}function wi(t,e){Be().setContext(t,e)}function we(t,e){Be().setTag(t,e)}function _i(t){return typeof t=="object"&&t!=null&&!Array.isArray(t)&&Object.keys(t).includes("value")}function Si(t,e){const{value:n,unit:r}=_i(t)?t:{value:t,unit:void 0},i=Ti(n),s=r&&typeof r=="string"?{unit:r}:{};if(i)return{...i,...s};if(!e||e==="skip-undefined"&&n===void 0)return;let l="";try{l=JSON.stringify(n)??""}catch{}return{value:l,type:"string",...s}}function ut(t,e=!1){const n={};for(const[r,i]of Object.entries(t??{})){const s=Si(i,e);s&&(n[r]=s)}return n}function Ti(t){const e=typeof t=="string"?"string":typeof t=="boolean"?"boolean":typeof t=="number"&&!Number.isNaN(t)?Number.isInteger(t)?"integer":"double":null;if(e)return{value:t,type:e}}function Ei(t,e){return e?Pr(e,()=>{const n=li(),r=n?ei(n):Nr(e);return[n?di(n):hi(t,e),r]}):[void 0,void 0]}function Ci(t){return[{type:"trace_metric",item_count:t.length,content_type:"application/vnd.sentry.items.trace-metric+json"},{items:t}]}function Ri(t,e,n,r){const i={};return e!=null&&e.sdk&&(i.sdk={name:e.sdk.name,version:e.sdk.version}),n&&r&&(i.dsn=Qr(r)),fi(i,[Ci(t)])}const Ai=1e3;function _(t,e,n,r=!0){n&&(r||!(e in t))&&(t[e]=n)}function Li(t,e){const n=De(),r=Dt(t);r===void 0?n.set(t,[e]):r.length>=Ai?(Pi(t,r),n.set(t,[e])):n.set(t,[...r,e])}function Ii(t,e,n){var c;const{release:r,environment:i}=e.getOptions(),s={...t.attributes};_(s,"user.id",n.id,!1),_(s,"user.email",n.email,!1),_(s,"user.name",n.username,!1),_(s,"sentry.release",r),_(s,"sentry.environment",i);const{name:l,version:a}=((c=e.getSdkMetadata())==null?void 0:c.sdk)??{};_(s,"sentry.sdk.name",l),_(s,"sentry.sdk.version",a);const u=e.getIntegrationByName("Replay"),o=u==null?void 0:u.getReplayId(!0);return _(s,"sentry.replay_id",o),o&&(u==null?void 0:u.getRecordingMode())==="buffer"&&_(s,"sentry._internal.replay_is_buffering",!0),{...t,attributes:s}}function $i(t,e,n,r){const[,i]=Ei(e,n),s=ne(n),l=s?s.spanContext().traceId:i==null?void 0:i.trace_id,a=s?s.spanContext().spanId:void 0;return{timestamp:ze(),trace_id:l??"",span_id:a,name:t.name,type:t.type,unit:t.unit,value:t.value,attributes:{...ut(r),...ut(t.attributes,"skip-undefined")}}}function Mi(t,e){const n=Y(),r=(e==null?void 0:e.captureSerializedMetric)??Li,i=(n==null?void 0:n.getClient())??Oe();if(!i){w&&R.warn("No client available to capture metric.");return}const{_experiments:s,enableMetrics:l,beforeSendMetric:a}=i.getOptions();if(!(l??(s==null?void 0:s.enableMetrics)??!0)){w&&R.warn("metrics option not enabled, metric will not be captured.");return}const{user:o,attributes:c}=gi(Be(),n),h=Ii(t,i,o);i.emit("processMetric",h);const p=a||(s==null?void 0:s.beforeSendMetric),b=p?p(h):h;if(!b){w&&R.log("`beforeSendMetric` returned `null`, will not send metric.");return}const d=$i(b,i,n,c);w&&R.log("[Metric]",d),r(i,d),i.emit("afterCaptureMetric",b)}function Pi(t,e){const n=e??Dt(t)??[];if(n.length===0)return;const r=t.getOptions(),i=Ri(n,r._metadata,r.tunnel,t.getDsn());De().set(t,[]),t.emit("flushMetrics"),t.sendEnvelope(i)}function Dt(t){return De().get(t)}function De(){return Z("clientToMetricBufferMap",()=>new WeakMap)}function Ni(t,e,n,r){Mi({type:t,name:e,value:n,unit:r==null?void 0:r.unit,attributes:r==null?void 0:r.attributes},{})}function zi(t,e,n){Ni("gauge",t,e,n)}var _e,qt=-1,W=function(t){addEventListener("pageshow",(function(e){e.persisted&&(qt=e.timeStamp,t(e))}),!0)},Ht=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},qe=function(){var t=Ht();return t&&t.activationStart||0},A=function(t,e){var n=Ht(),r="navigate";return qt>=0?r="back-forward-cache":n&&(document.prerendering||qe()>0?r="prerender":document.wasDiscarded?r="restore":n.type&&(r=n.type.replace(/_/g,"-"))),{name:t,value:e===void 0?-1:e,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},V=function(t,e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var r=new PerformanceObserver((function(i){Promise.resolve().then((function(){e(i.getEntries())}))}));return r.observe(Object.assign({type:t,buffered:!0},n||{})),r}}catch{}},L=function(t,e,n,r){var i,s;return function(l){e.value>=0&&(l||r)&&((s=e.value-(i||0))||i===void 0)&&(i=e.value,e.delta=s,e.rating=(function(a,u){return a>u[1]?"poor":a>u[0]?"needs-improvement":"good"})(e.value,n),t(e))}},He=function(t){requestAnimationFrame((function(){return requestAnimationFrame((function(){return t()}))}))},je=function(t){var e=function(n){n.type!=="pagehide"&&document.visibilityState!=="hidden"||t(n)};addEventListener("visibilitychange",e,!0),addEventListener("pagehide",e,!0)},jt=function(t){var e=!1;return function(n){e||(t(n),e=!0)}},P=-1,pt=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},re=function(t){document.visibilityState==="hidden"&&P>-1&&(P=t.type==="visibilitychange"?t.timeStamp:0,Bi())},ht=function(){addEventListener("visibilitychange",re,!0),addEventListener("prerenderingchange",re,!0)},Bi=function(){removeEventListener("visibilitychange",re,!0),removeEventListener("prerenderingchange",re,!0)},Gt=function(){return P<0&&(P=pt(),ht(),W((function(){setTimeout((function(){P=pt(),ht()}),0)}))),{get firstHiddenTime(){return P}}},Ge=function(t){document.prerendering?addEventListener("prerenderingchange",(function(){return t()}),!0):t()},dt=[1800,3e3],Oi=function(t,e){e=e||{},Ge((function(){var n,r=Gt(),i=A("FCP"),s=V("paint",(function(l){l.forEach((function(a){a.name==="first-contentful-paint"&&(s.disconnect(),a.startTime<r.firstHiddenTime&&(i.value=Math.max(a.startTime-qe(),0),i.entries.push(a),n(!0)))}))}));s&&(n=L(t,i,dt,e.reportAllChanges),W((function(l){i=A("FCP"),n=L(t,i,dt,e.reportAllChanges),He((function(){i.value=performance.now()-l.timeStamp,n(!0)}))})))}))},ft=[.1,.25],Di=function(t,e){e=e||{},Oi(jt((function(){var n,r=A("CLS",0),i=0,s=[],l=function(u){u.forEach((function(o){if(!o.hadRecentInput){var c=s[0],h=s[s.length-1];i&&o.startTime-h.startTime<1e3&&o.startTime-c.startTime<5e3?(i+=o.value,s.push(o)):(i=o.value,s=[o])}})),i>r.value&&(r.value=i,r.entries=s,n())},a=V("layout-shift",l);a&&(n=L(t,r,ft,e.reportAllChanges),je((function(){l(a.takeRecords()),n(!0)})),W((function(){i=0,r=A("CLS",0),n=L(t,r,ft,e.reportAllChanges),He((function(){return n()}))})),setTimeout(n,0))})))},Ft=0,de=1/0,Q=0,qi=function(t){t.forEach((function(e){e.interactionId&&(de=Math.min(de,e.interactionId),Q=Math.max(Q,e.interactionId),Ft=Q?(Q-de)/7+1:0)}))},Ut=function(){return _e?Ft:performance.interactionCount||0},Hi=function(){"interactionCount"in performance||_e||(_e=V("event",qi,{type:"event",buffered:!0,durationThreshold:0}))},gt=[200,500],Zt=0,bt=function(){return Ut()-Zt},y=[],fe={},mt=function(t){var e=y[y.length-1],n=fe[t.interactionId];if(n||y.length<10||t.duration>e.latency){if(n)n.entries.push(t),n.latency=Math.max(n.latency,t.duration);else{var r={id:t.interactionId,latency:t.duration,entries:[t]};fe[r.id]=r,y.push(r)}y.sort((function(i,s){return s.latency-i.latency})),y.splice(10).forEach((function(i){delete fe[i.id]}))}},ji=function(t,e){e=e||{},Ge((function(){var n;Hi();var r,i=A("INP"),s=function(a){a.forEach((function(c){c.interactionId&&mt(c),c.entryType==="first-input"&&!y.some((function(h){return h.entries.some((function(p){return c.duration===p.duration&&c.startTime===p.startTime}))}))&&mt(c)}));var u,o=(u=Math.min(y.length-1,Math.floor(bt()/50)),y[u]);o&&o.latency!==i.value&&(i.value=o.latency,i.entries=o.entries,r())},l=V("event",s,{durationThreshold:(n=e.durationThreshold)!==null&&n!==void 0?n:40});r=L(t,i,gt,e.reportAllChanges),l&&("PerformanceEventTiming"in window&&"interactionId"in PerformanceEventTiming.prototype&&l.observe({type:"first-input",buffered:!0}),je((function(){s(l.takeRecords()),i.value<0&&bt()>0&&(i.value=0,i.entries=[]),r(!0)})),W((function(){y=[],Zt=Ut(),i=A("INP"),r=L(t,i,gt,e.reportAllChanges)})))}))},kt=[2500,4e3],ge={},Gi=function(t,e){e=e||{},Ge((function(){var n,r=Gt(),i=A("LCP"),s=function(u){var o=u[u.length-1];o&&o.startTime<r.firstHiddenTime&&(i.value=Math.max(o.startTime-qe(),0),i.entries=[o],n())},l=V("largest-contentful-paint",s);if(l){n=L(t,i,kt,e.reportAllChanges);var a=jt((function(){ge[i.id]||(s(l.takeRecords()),l.disconnect(),ge[i.id]=!0,n(!0))}));["keydown","click"].forEach((function(u){addEventListener(u,(function(){return setTimeout(a,0)}),!0)})),je(a),W((function(u){i=A("LCP"),n=L(t,i,kt,e.reportAllChanges),He((function(){i.value=performance.now()-u.timeStamp,ge[i.id]=!0,n(!0)}))}))}}))};function Fi(){return console.warn("⚠️ VITE_SENTRY_DSN not set. Monitoring disabled."),!1}function Ui(){const t=e=>{try{zi(e.name,e.value),we("metric_id",e.id),we("metric_rating",e.rating)}catch{}};Gi(t),Di(t),ji(t)}function Zi(){try{const t=ae();wi("page",{url:window.location.href,title:document.title,pageType:t.type}),we("pageType",t.type),yi(`Page View: ${document.title}`,{level:"info",tags:{pageType:t.type}})}catch{}}function Yt(t,e){try{vi(t,{tags:{location:e,pageType:ae().type},level:"error"})}catch{}}const Yi=Fi();Yi&&(Zi(),Ui());async function Wt(){const t=ae();await Vn(),or(t),t.showTableOfContents&&Qn(),t.showBreadcrumb&&await ar()}document.addEventListener("DOMContentLoaded",async()=>{try{await Wt()}catch(t){Yt(t,"DOMContentLoaded.initializePage"),console.error("❌ main.ts: DOMContentLoaded : 페이지 초기화 실패!",t)}});window.addEventListener("hashchange",async()=>{try{await Wt(),window.scrollTo(0,0)}catch(t){Yt(t,"hashchange.initializePage"),console.error("❌ main.ts: hashchange : 페이지 초기화 실패!",t)}});
//# sourceMappingURL=index-CBCSVCfC.js.map
