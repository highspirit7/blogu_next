import AuthorIntro from '@/components/author-intro';
import { getAllBlogs, getAllCategories, getAllCategoriesOfBlogs } from './lib/api';
import BlogCard from '@/components/blog-card';
import CategoryList from '@/components/category/category-list';

export default async function Home() {
  const allBlogs = await getAllBlogs();
  const categories = await getAllCategories();
  const allBlogCategories = await getAllCategoriesOfBlogs();
  console.log(categories);
  console.log(allBlogCategories);

  return (
    <>
      <AuthorIntro />
      <hr></hr>
      <div className="p-5">
        <div className="flex flex-wrap">
          <div className="flex-[0_0_25%] max-w-[25%">
            <CategoryList />
          </div>
          <div className="flex-[0_0_75%] max-w-[75%]">
            {allBlogs.map(blog => (
              <BlogCard data={blog} key={blog.slug} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
