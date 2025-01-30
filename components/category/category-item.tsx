import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

import { CategoryWithCount } from '@/app/lib/types';

const CategoryItem = ({ title, count }: CategoryWithCount) => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') ?? 'All';

  return (
    <li className="mb-1 list-none">
      <Link
        href={title === 'All' ? '/' : `/?category=${title}`}
        className={clsx(
          'hover:underline hover:font-bold',
          currentCategory === title && 'font-bold underline',
        )}
      >{`${title} (${count})`}</Link>
    </li>
  );
};

export default CategoryItem;
