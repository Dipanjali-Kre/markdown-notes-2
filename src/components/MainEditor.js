import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './MainEditor.css';

function MainEditor({ currentNote, onContentChange }) {
  if (!currentNote) {
    return (
      <div className="main-editor no-note-selected">
        <p>Select a note from the sidebar or create a new one.</p>
      </div>
    );
  }

  return (
    <div className="main-editor">
      <div className="editor-pane">
        <textarea
          className="markdown-input"
          value={currentNote.content}
          onChange={(e) => onContentChange(e.target.value)}
          placeholder="Start writing your markdown..."
        />
      </div>
      <div className="preview-pane">
        <ReactMarkdown
          className="markdown-preview"
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {currentNote.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default MainEditor;
