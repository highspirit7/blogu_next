'use client';

import { useBlogStore } from '@/app/store/useBlogStore';
import { useCategoryStore } from '@/app/store/useCategoryStore';
import BlogCard from '@/components/blog-card';
import { useEffect, useRef } from 'react';

export default function BlogList() {
  const { blogs, fetchBlogs, hasMore, loading } = useBlogStore();
  const { currentCategory } = useCategoryStore();
  const observerRef = useRef(null);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        console.log('👀 Observer triggered!', entries[0].isIntersecting);
        if (entries[0].isIntersecting && hasMore) {
          fetchBlogs(currentCategory);
        }
      },
      { threshold: 1 },
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasMore, fetchBlogs, currentCategory]);

  return (
    <div className="flex-[0_0_75%] max-w-[75%]">
      {blogs.map(blog => (
        <BlogCard data={blog} key={blog.slug} />
      ))}

      <div ref={observerRef} className="h-10" />
      {loading && <p>Loading more...</p>}
    </div>
  );
}
