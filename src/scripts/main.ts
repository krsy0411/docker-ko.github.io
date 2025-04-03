import '../styles/content_style.css';
import '../styles/not_found.css';
import '../styles/style.css';
import './load_md';
import { initializeMarkdownLoader } from './load_md';
import { initializeNavFn } from './nav';
import { initializeTableContents } from './table-contents';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await initializeMarkdownLoader();
    initializeNavFn();
    initializeTableContents();
  } catch (error) {
    console.error('❌ main.ts: DOMContentLoaded : Markdown 로드 실패!', error);
    // 실제 다른 작업이 필요
  }
});

window.addEventListener('hashchange', async () => {
  try {
    await initializeMarkdownLoader();
    initializeTableContents();
  } catch (error) {
    console.error('❌ main.ts: hashchange : Markdown 로드 실패!', error);
    // 실제 다른 작업이 필요
  }
});
