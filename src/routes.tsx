import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import "github-markdown-css"; // GitHub 스타일 CSS 가져오기

const MarkdownPage = ({ filePath }: { filePath: string }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [filePath]);

  return <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>;
};

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MarkdownPage filePath="/README.md" />} />
      <Route
        path="/basics/registry"
        element={
          <MarkdownPage filePath="/docs/get-started/docker-concepts/the-basics/what-is-a-registry.md" />
        }
      />
      <Route
        path="/basics/container"
        element={
          <MarkdownPage filePath="/docs/translate/get-started/docker-concepts/the-basics/what-is-a-container.md" />
        }
      />
      <Route
        path="/basics/compose"
        element={
          <MarkdownPage filePath="/docs/get-started/docker-concepts/the-basics/what-is-docker-compose.md" />
        }
      />
      <Route
        path="/basics/image"
        element={
          <MarkdownPage filePath="/docs/get-started/docker-concepts/the-basics/what-is-an-image.md" />
        }
      />
    </Routes>
  </Router>
);

export default AppRoutes;
