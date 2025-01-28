import Image from 'next/image';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import { BlogWithoutSlug } from '@/app/lib/types';

export default function BlogHeader({ title, subtitle, coverImageUrl, date }: BlogWithoutSlug) {
  dayjs.extend(localizedFormat);

  return (
    <div className="max-w-screen-md">
      <p className="text-lg mb-2">{dayjs(date).format('LL')}</p>
      <h1 className="text-3xl font-bold mb-3">{title}</h1>
      <h2 className="text-xl font-light">{subtitle}</h2>

      <div className="w-full mt-8">
        {coverImageUrl && (
          <Image
            src={coverImageUrl}
            alt="blog's cover image"
            priority
            width={1024}
            height={768}
            className="mx-auto rounded-sm"
          />
        )}
      </div>
    </div>
  );
}
