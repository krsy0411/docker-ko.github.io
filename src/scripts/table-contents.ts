// const renderTableContents = () => {};

// const highlightCurrentSection = () => {};

export const initializeTableContents = () => {
  const content = document.getElementById('content') as HTMLElement;
  const toc = document.getElementById('toc') as HTMLElement;

  toc.innerHTML = '';
  if (!content.querySelector('h1')) return;

  const tocTitle = document.createElement('p');
  const tocList = document.createElement('ul');
  const headings = content.querySelectorAll('h2, h3');

  tocTitle.classList.add('text-black', 'font-light', 'text-2xl', 'pb-3');
  tocTitle.textContent = 'Table of contents';

  headings.forEach((heading) => {
    const listItem = document.createElement('li');
    listItem.classList.add(
      'max-w-64',
      'font-extralight',
      'hover:bg-gray-300',
      'hover:font-light',
      'cursor-pointer',
      'truncate',
      'pb-1'
    );
    const link = document.createElement('a');
    link.textContent = heading.textContent || '';

    listItem.appendChild(link);
    tocList.appendChild(listItem);

    if (heading.tagName === 'H3') {
      listItem.classList.add('pl-3');
    }
  });

  toc.appendChild(tocTitle);
  toc.appendChild(tocList);
};
