'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

const BlogComments = () => {
  const commentsElementRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const scriptElement = document.createElement('script');

    scriptElement.src = 'https://utteranc.es/client.js';
    scriptElement.async = true;
    scriptElement.setAttribute('repo', 'highspirit7/blogu_next_utterances');
    scriptElement.setAttribute('issue-term', 'pathname');
    scriptElement.setAttribute('crossorigin', 'anonymous');

    scriptElement.setAttribute('theme', theme === 'dark' ? 'github-dark' : 'github-light');

    const existingScript = commentsElementRef.current?.querySelector('.utterances');
    if (existingScript) {
      existingScript.remove();
    }

    commentsElementRef.current?.appendChild(scriptElement);

    return () => {
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [theme]);

  return <div ref={commentsElementRef} className="w-full max-w-screen-md mt-12 mb-4"></div>;
};

export default BlogComments;
