import { getBlogBySlug, urlFor } from '@/app/lib/api';
import BlogComments from '@/components/blog-comments';
import BlogContent from '@/components/blog-content';
import BlogHeader from '@/components/blog-header';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const data = await getBlogBySlug(decodeURIComponent(slug));

  return (
    <div className="px-4 flex flex-col items-center">
      <BlogHeader
        title={data.title}
        subtitle={data.subtitle}
        coverImageUrl={data.coverImage ? urlFor(data.coverImage).url() : null}
        date={data.date}
      />
      <article className="prose dark:prose-invert w-full max-w-screen-md prose-a:break-words prose-img:my-4">
        <BlogContent content={data.content} />
      </article>
      <BlogComments />
    </div>
  );
}
