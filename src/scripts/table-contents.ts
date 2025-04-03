export const initializeTableContents = () => {
  const content = document.getElementById('content') as HTMLElement;
  const tableOfContents = document.getElementById(
    'TableOfContents'
  ) as HTMLElement;

  tableOfContents.innerHTML = '';
  if (!content.querySelector('h1')) return;

  const headings = content.querySelectorAll('h2, h3');
  const tableContentsList = document.createElement('ul');

  headings.forEach((heading) => {
    const listItem = document.createElement('li');
    listItem.classList.add(
      'max-w-64',
      'hover:bg-gray-300',
      'hover:font-semibold',
      'cursor-pointer',
      'truncate',
      'p-1'
    );
    const link = document.createElement('a');
    // 👇👇👇 문서 목차에 스크린 이동 👇👇👇
    // link.href = `#${heading.id}`;
    link.textContent = heading.textContent || '';

    listItem.appendChild(link);
    tableContentsList.appendChild(listItem);

    if (heading.tagName === 'H3') {
      listItem.classList.add('pl-3');
    }
  });

  tableOfContents.appendChild(tableContentsList);
};
