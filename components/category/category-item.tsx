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
      >
        <span className="md:hidden">{`${title}(${count})`}</span>
        <span className="hidden md:inline">{`${title} (${count})`}</span>
      </Link>
    </li>
  );
};

export default CategoryItem;
