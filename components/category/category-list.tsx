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
    <div>
      <div className="font-bold text-xl mb-4">Categories</div>
      <ul className="p-0 flex justify-around md:block">
        {allCategories.map(category => (
          <CategoryItem key={category.title} title={category.title} count={category.count} />
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
