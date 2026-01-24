class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  setupNavigationListeners() {
    // URL 해시 변경 감지
    window.addEventListener('hashchange', () => {
      const currentPath = window.location.hash.replace('#', '');
      const navItems = this.querySelectorAll('.nav-item');

      navItems.forEach((item) => {
        const itemPath = item.getAttribute('data-path');
        const link = item.querySelector('a');

        if (itemPath && currentPath.startsWith(itemPath)) {
          // Active state: rounded pill with solid background
          link?.classList.add('bg-blue-100', 'dark:bg-blue-900/30', 'text-blue-600', 'dark:text-blue-400');
          link?.classList.remove('text-gray-600', 'dark:text-gray-400');
        } else {
          // Inactive state
          link?.classList.remove('bg-blue-100', 'dark:bg-blue-900/30', 'text-blue-600', 'dark:text-blue-400');
          link?.classList.add('text-gray-600', 'dark:text-gray-400');
        }
      });
    });

    // 초기 상태 설정
    window.dispatchEvent(new Event('hashchange'));
  }

  connectedCallback() {
    this.innerHTML = `
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
    `;

    this.setupNavigationListeners();
  }
}

customElements.define('header-component', HeaderComponent);
