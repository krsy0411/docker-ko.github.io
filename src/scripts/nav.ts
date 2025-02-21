function toggleULElementVisibility(button: HTMLButtonElement) {
  const contentWrapperDiv = button.closest(
    '#section__wrapper'
  ) as HTMLDivElement;
  const ulElement = contentWrapperDiv?.parentElement?.querySelector(
    'ul.ml-3'
  ) as HTMLUListElement;

  if (ulElement) {
    ulElement.classList.toggle('hidden');
  }
}

function toggleSpanVisibility(button: HTMLButtonElement) {
  const spans = button.querySelectorAll('span');

  // button태그의 자식 태그 중 span태그가 있는지 확인
  if (spans.length > 0) {
    spans.forEach((span) => {
      span.classList.toggle('hidden');
    });
  } else {
    // 자식 태그 중 span태그가 없다면, 부모의 형제 요소의 span태그를 토글
    const siblingButton = button.parentElement
      ?.nextElementSibling as HTMLButtonElement;
    if (siblingButton) {
      const siblingSpans = siblingButton.querySelectorAll('span');
      siblingSpans.forEach((span) => {
        span.classList.toggle('hidden');
      });
    }
  }
}

export function initializeNavFn() {
  const buttons = document.querySelectorAll(
    'div#nav__get-started div > button, div#nav__content li > div > button'
  );
  buttons.forEach((button) => {
    button.addEventListener('click', () =>
      // Ul 요소의 Visibility를 결정
      toggleULElementVisibility(button as HTMLButtonElement)
    );
    button.addEventListener('click', () =>
      // button 내 span의 Visibility를 결정 : svg icon 변경
      toggleSpanVisibility(button as HTMLButtonElement)
    );
  });
}
