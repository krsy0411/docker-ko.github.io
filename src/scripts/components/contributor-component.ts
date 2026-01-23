/**
 * ContributorComponent
 * 기여자 프로필을 카드 형식으로 표시하는 Web Component
 * Pinterest 스타일의 모던한 디자인을 적용
 */
export default class ContributorComponent extends HTMLElement {
  static get observedAttributes() {
    return ['username', 'avatar', 'role'];
  }

  constructor() {
    super();
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const username = this.getAttribute('username') || 'Anonymous';
    const avatar =
      this.getAttribute('avatar') ||
      'https://avatars.githubusercontent.com/u/0?v=4';
    const role = this.getAttribute('role') || '기여자';
    const githubUrl = `https://github.com/${username}`;

    this.innerHTML = `
      <a
        href="${githubUrl}"
        target="_blank"
        rel="noopener noreferrer"
        class="group block w-full"
        aria-label="${username}의 GitHub 프로필 보기"
      >
        <div class="
          relative
          overflow-hidden
          rounded-2xl
          bg-white
          p-4
          shadow-sm
          transition-all
          duration-300
          ease-out
          hover:shadow-xl
          hover:-translate-y-1
          dark:bg-gray-800
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
                src="${avatar}"
                alt="${username}의 프로필 사진"
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
                ${username}
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
                ${role}
              </span>
            </div>
          </div>
        </div>
      </a>
    `;
  }
}

// 웹 컴포넌트 등록
customElements.define('contributor-component', ContributorComponent);
