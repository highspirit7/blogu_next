import { create } from 'zustand';

import { Blog } from '../lib/types';
import { getPaginatedBlogs, getTotalOfBlogs } from '../lib/api';

interface BlogState {
  blogs: Blog[];
  page: number;
  hasMore: boolean;
  loading: boolean;
  fetchBlogs: (category: string) => Promise<void>;
  resetBlogs: () => void;
}

export const useBlogStore = create<BlogState>((set, get) => ({
  blogs: [],
  page: 1,
  hasMore: true,
  loading: false,
  fetchBlogs: async (category: string) => {
    const { page, hasMore, loading, blogs } = get();

    if (loading || !hasMore) return;

    set({ loading: true });

    try {
      const newBlogs = await getPaginatedBlogs(page, category);
      const total = await getTotalOfBlogs(category);

      set({
        blogs: [...blogs, ...newBlogs],
        hasMore: blogs.length + newBlogs.length < total,
        page: page + 1,
      });
    } catch (error) {
      console.error(error);
    }

    set({ loading: false });
  },
  resetBlogs: () => set({ blogs: [], hasMore: true, page: 1, loading: false }),
}));
