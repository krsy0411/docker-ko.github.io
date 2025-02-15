import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

const MarkdownPage = ({ filePath }: { filePath: string }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(filePath)
            .then((response) => response.text())
            .then((text) => setContent(text));
    }, [filePath]);

    return <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>;
};

export default MarkdownPage;