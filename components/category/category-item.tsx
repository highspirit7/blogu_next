import Link from 'next/link';
import { CategoryWithCount } from '@/app/lib/types';

const CategoryItem = ({ title, count }: CategoryWithCount) => {
  return (
    <li className="mb-1 list-none">
      <Link
        href={title === 'All' ? '/' : `/?category=${title}`}
        className="hover:underline"
      >{`${title} (${count})`}</Link>
    </li>
  );
};

export default CategoryItem;
