import { getBlogBySlug, urlFor } from '@/app/lib/api';
import BlogHeader from '@/components/blog-header';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const data = await getBlogBySlug(slug);
  console.log(data);
  return (
    <div className="px-4">
      <BlogHeader
        title={data.title}
        subtitle={data.subtitle}
        coverImageUrl={urlFor(data.coverImage).url()}
        date={data.date}
      />
    </div>
  );
}
