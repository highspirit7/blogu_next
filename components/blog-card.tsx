import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
import clsx from 'clsx';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import { Blog } from '@/app/lib/types';
import { Card, CardDescription, CardTitle, CardHeader, CardFooter } from '@/components/ui/card';
import { urlFor } from '@/app/lib/api';

const BlogCard = ({ data }: { data: Blog }) => {
  dayjs.extend(localizedFormat);

  return (
    <Card key={data.slug} className="my-2 mb-4 lg:grid lg:grid-cols-4">
      {data.coverImage && (
        <div className="hidden lg:col-span-1 lg:flex lg:items-center lg:pl-4 lg:py-4">
          <Image
            src={urlFor(data.coverImage).crop('center').fit('clip').url()}
            alt="card_image_cap"
            width={240}
            height={180}
          />
        </div>
      )}

      <div
        className={clsx(
          data.coverImage ? 'col-span-3' : 'col-span-4',
          'flex',
          'flex-col',
          'justify-between',
        )}
      >
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
          <CardDescription>{data.subtitle}</CardDescription>
        </CardHeader>
        <CardFooter className="justify-between mb-1">
          <time>{dayjs(data.date).format('LL')}</time>
          <Link href={`/blog/${data.slug}`}>Read More →</Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default BlogCard;
