import { Route, Routes } from 'react-router-dom';
import "github-markdown-css"; // GitHub 스타일 CSS 가져오기
import MarkdownPage from './components/MarkdownPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MarkdownPage filePath="/README.md" />} />
    <Route
      path="/get-started/docker-concepts/the-basics/what-is-a-registry"
      element={
        <MarkdownPage filePath="/docs/get-started/docker-concepts/the-basics/what-is-a-registry.md" />
      }
    />
    <Route
      path="/get-started/docker-concepts/the-basics/what-is-a-container"
      element={
        <MarkdownPage filePath="/docs/get-started/docker-concepts/the-basics/what-is-a-container.md" />
      }
    />
    <Route
      path="/get-started/docker-concepts/the-basics/what-is-docker-compose"
      element={
        <MarkdownPage filePath="/docs/get-started/docker-concepts/the-basics/what-is-docker-compose.md" />
      }
    />
    <Route
      path="/get-started/docker-concepts/the-basics/what-is-an-image"
      element={
        <MarkdownPage filePath="/docs/get-started/docker-concepts/the-basics/what-is-an-image.md" />
      }
    />
  </Routes>
);

export default AppRoutes;