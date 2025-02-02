import { Suspense } from 'react';

import AuthorIntro from '@/components/author-intro';
import BlogList from '@/components/blog-list';
import CategoryList from '@/components/category/category-list';
import { AUTHOR_INTRO_TEXT } from '@/app/lib/constant';

export default function Home() {
  return (
    <Suspense>
      <AuthorIntro introText={AUTHOR_INTRO_TEXT} />
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
