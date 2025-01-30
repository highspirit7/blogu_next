'use client';

import { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

import { Input } from '@/components/ui/input';
import BlogCard from './blog-card';
import { Blog } from '@/app/lib/types';
import { getBlogsByQuery } from '@/app/lib/api';

interface SearchedBlogListProps {
  initialBlogs: Blog[];
}

export default function SearchedBlogList({ initialBlogs }: SearchedBlogListProps) {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [keyword, setKeyword] = useState('');

  const debouncedFetchBlogs = useCallback(
    debounce(async query => {
      if (!query) {
        setBlogs(initialBlogs);
        return;
      }
      const searchedBlogs = await getBlogsByQuery(query);
      setBlogs(searchedBlogs);
    }, 400),
    [initialBlogs, setBlogs],
  );

  useEffect(() => {
    debouncedFetchBlogs(keyword);
  }, [debouncedFetchBlogs, keyword]);

  return (
    <>
      <h2 className="text-xl font-semibold">{`There are ${blogs.length} blogs found.`}</h2>
      <div className="w-full space-x-2">
        <Input
          type="search"
          placeholder="Search"
          value={keyword}
          onChange={event => setKeyword(event.target.value)}
          className="my-2 mb-8"
        />
      </div>
      <hr></hr>
      <div className="mt-8">
        {blogs.map(blog => (
          <BlogCard data={blog} key={blog.slug} />
        ))}
      </div>
    </>
  );
}
