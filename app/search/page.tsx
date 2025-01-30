import { getAllBlogs } from '../lib/api';
import SearchedBlogList from '@/components/searched-blog-list';

export default async function Search() {
  const initialBlogs = await getAllBlogs();

  return (
    <div className="max-w-screen-md mx-auto p-2 md:p-5">
      <SearchedBlogList initialBlogs={initialBlogs} />
    </div>
  );
}
