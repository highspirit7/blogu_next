import { create } from 'zustand';
import { Category, CategoryWithCount } from '../lib/types';

interface CategoryState {
  //   currentCategory: string;
  allCategories: CategoryWithCount[];
  setAllCategories: (categories: Category[], allCategoriesOfBlogs: { category: string }[]) => void;
  //   selectCurrentCategory: (category: string) => void;
}

export const useCategoryStore = create<CategoryState>(set => ({
  //   currentCategory: 'All',
  allCategories: [],
  setAllCategories: (categories: Category[], allCategoriesOfBlogs: { category: string }[]) => {
    const categoriesWithCount = categories.map(data => {
      return { ...data, count: 0 };
    });

    allCategoriesOfBlogs.forEach(data => {
      const index = categoriesWithCount.findIndex(category => category.title === data.category);
      const { count } = categoriesWithCount[index];
      categoriesWithCount[index].count = count + 1;
    });

    categoriesWithCount.unshift({ count: allCategoriesOfBlogs.length, title: 'All' });

    set({ allCategories: categoriesWithCount });
  },
  //   selectCurrentCategory: (category: string) =>
  //     set({
  //       currentCategory: category,
  //     }),
}));
