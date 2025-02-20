import '../styles/content_style.css';
import '../styles/not_found.css';
import '../styles/style.css';
import './load_md';
import { initializeMarkdownLoader } from './load_md';
import { initializeNavFn } from './nav';

initializeMarkdownLoader();
initializeNavFn();
