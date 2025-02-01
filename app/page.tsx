import { Suspense } from 'react';

import AuthorIntro from '@/components/author-intro';
import BlogList from '@/components/blog-list';
import CategoryList from '@/components/category/category-list';

export default function Home() {
  return (
    <Suspense>
      <AuthorIntro />
      <hr></hr>
      <div className="p-2 md:p-5">
        <div className="md:grid md:grid-cols-4">
          <CategoryList />
          <BlogList />
        </div>
      </div>
    </Suspense>
  );
}
