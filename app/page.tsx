import AuthorIntro from '@/components/author-intro';
import BlogList from '@/components/blog-list';

import CategoryList from '@/components/category/category-list';

export default function Home() {
  return (
    <>
      <AuthorIntro />
      <hr></hr>
      <div className="p-5">
        <div className="flex flex-wrap">
          <div className="flex-[0_0_25%] max-w-[25%">
            <CategoryList />
          </div>
          <BlogList />
        </div>
      </div>
    </>
  );
}
