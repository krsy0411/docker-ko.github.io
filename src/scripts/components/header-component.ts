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
        if (itemPath && currentPath.startsWith(itemPath)) {
          item.classList.remove('border-b-transparent');
          item.classList.add('border-b-white');
        } else {
          item.classList.remove('border-b-white');
          item.classList.add('border-b-transparent');
        }
      });
    });
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="w-full sticky top-0 z-20 h-16 px-6 text-white bg-[#086dd7]">
            <div class="max-w-[1920px] mx-auto flex lg:gap-8 gap-2 h-full items-center justify-between">
                <div class="flex h-full items-center lg:gap-8 gap-2">
                    <div>
                        <a href="/" title="Docker korean translation home page" class="group block transition-all duration-300 hover:scale-105">
                          <div class="flex items-baseline gap-1.5">
                            <span class="text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                              Docker
                            </span>
                            <span class="text-3xl lg:text-4xl font-extrabold tracking-wider bg-gradient-to-br from-red-400 via-pink-300 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:from-red-300 group-hover:via-pink-200 group-hover:to-blue-200">
                              KO
                            </span>
                          </div>
                        </a>
                    </div>
                    <nav class="mt-1 hidden md:block">
                        <ul class="flex text-sm md:text-base lg:gap-4">
                            <li class="nav-item border-b-4 border-transparent hover:border-white/20 cursor-pointer" data-path="/get-started">
                                <a class="block px-2 py-1 whitespace-nowrap" href="#/get-started">Get started</a>
                            </li>
                            <li class="nav-item border-b-4 border-transparent hover:border-white/20 cursor-pointer" data-path="/guides">
                                <a class="block px-2 py-1 whitespace-nowrap" href="#/guides">Guides</a>
                            </li>
                            <li class="nav-item border-b-4 border-transparent hover:border-white/20 cursor-pointer" data-path="/manuals">
                                <a class="block px-2 py-1 whitespace-nowrap" href="#/manuals">Manuals</a>
                            </li>
                            <li class="nav-item border-b-4 border-transparent hover:border-white/20 cursor-pointer" data-path="/reference">
                                <a class="block px-2 py-1 whitespace-nowrap" href="#/reference">Reference</a>
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
