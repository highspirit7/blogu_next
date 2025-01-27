import AuthorIntro from '@/components/author-intro';
import { getAllBlogs } from './lib/api';
import BlogCard from '@/components/blog-card';

export default async function Home() {
  const allBlogs = await getAllBlogs();

  return (
    <>
      <AuthorIntro />
      <hr></hr>
      <div className="p-5">
        <div className="flex flex-wrap">
          <div className="flex-[0_0_25%] max-w-[25%">{/* Category partx */}</div>
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
