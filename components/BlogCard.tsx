import Link from 'next/link';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import { Blog } from '@/app/lib/types';
import { Card, CardDescription, CardTitle, CardHeader, CardFooter } from '@/components/ui/card';

const BlogCard = ({ data }: { data: Blog }) => {
  dayjs.extend(localizedFormat);

  return (
    <Card key={data.slug} className="my-2 border-none shadow-none">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.subtitle}</CardDescription>
      </CardHeader>
      <CardFooter className="justify-between mb-1">
        <time>{dayjs(data.date).format('LL')}</time>
        <Link href={`/blogs/${data.slug}`}>Read More →</Link>
      </CardFooter>
      <hr />
    </Card>
  );
};

export default BlogCard;
