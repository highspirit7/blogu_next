'use client';

import { useCategoryStore } from '@/app/store/useCategoryStore';
import CategoryItem from './category-item';
import { useEffect } from 'react';
import { getAllCategories, getAllCategoriesOfBlogs } from '@/app/lib/api';

const CategoryList = () => {
  const setAllCategories = useCategoryStore(state => state.setAllCategories);
  const allCategories = useCategoryStore(state => state.allCategories);

  useEffect(() => {
    async function fetchAndSetCategories() {
      const allCategories = await getAllCategories();
      const allCategoriesOfBlogs = await getAllCategoriesOfBlogs();

      setAllCategories(allCategories, allCategoriesOfBlogs);
    }
    fetchAndSetCategories();
  }, [setAllCategories]);

  return (
    <div className="mt-2 md:mt-0 mb-4 md:grid-span-1">
      <div className="font-bold text-xl mb-4 hidden md:block">Categories</div>
      <ul className="p-0 flex justify-around md:block">
        {allCategories.map(category => (
          <CategoryItem key={category.title} title={category.title} count={category.count} />
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
