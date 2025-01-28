'use client';

import highlight from 'highlight.js';
import { createRef, useEffect } from 'react';

interface HighlightedCodeProps {
  language: string;
  children: React.ReactNode;
}

const HighlightedCode = ({ children, language }: HighlightedCodeProps) => {
  const code = createRef<HTMLPreElement>();

  useEffect(() => {
    console.log(code.current);
    if (code.current) {
      highlight.highlightElement(code.current);
    }
  }, [code, language]);

  return (
    <pre>
      <code ref={code} className={language}>
        {children}
      </code>
    </pre>
  );
};

export default HighlightedCode;
