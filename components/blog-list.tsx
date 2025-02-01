'use client';

import { useSearchParams } from 'next/navigation';
import { useBlogStore } from '@/app/store/useBlogStore';
import BlogCard from '@/components/blog-card';
import { useEffect, useRef } from 'react';

export default function BlogList() {
  const { blogs, fetchBlogs, hasMore, loading, resetBlogs } = useBlogStore();
  const observerRef = useRef(null);

  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') ?? 'All';

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        console.log('👀 Observer triggered!', entries[0].isIntersecting);
        if (entries[0].isIntersecting && hasMore && !loading) {
          fetchBlogs(currentCategory);
        }
      },
      { threshold: 1 },
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasMore, loading, fetchBlogs, currentCategory]);

  useEffect(() => {
    resetBlogs();
  }, [currentCategory, resetBlogs]);

  return (
    <div className="md:col-start-2 md:col-end-5 min-h-[928px]">
      {blogs.map(blog => (
        <BlogCard data={blog} key={blog.slug} />
      ))}

      <div ref={observerRef} className="h-10" />

      {loading && (
        <div className="h-24 flex justify-center items-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent text-primary"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}
