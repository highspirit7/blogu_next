import { Mock } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import SearchedBlogList from '@/components/searched-blog-list';
import { getBlogsByQuery } from '@/app/lib/api';

vi.mock('@/app/lib/api', () => ({
  getBlogsByQuery: vi.fn(),
}));

vi.mock('@/components/blog-card', () => ({
  default: ({ data }: { data: { title: string } }) => (
    <div data-testid="blog-card">{data.title}</div>
  ),
}));

describe('SearchedBlogList Component', () => {
  const initialBlogs = [
    { slug: 'blog-1', title: 'First Blog', subtitle: '', date: '', coverImage: null, content: '' },
    { slug: 'blog-2', title: 'Second Blog', subtitle: '', date: '', coverImage: null, content: '' },
  ];

  it('renders initial blog list correctly', () => {
    render(<SearchedBlogList initialBlogs={initialBlogs} />);

    expect(screen.getByText('There are 2 blogs found.')).toBeInTheDocument();
    expect(screen.getByText('First Blog')).toBeInTheDocument();
    expect(screen.getByText('Second Blog')).toBeInTheDocument();
  });

  it('filters blogs based on search input', async () => {
    (getBlogsByQuery as Mock).mockResolvedValue([
      {
        slug: 'blog-1',
        title: 'First Blog',
        subtitle: '',
        date: '',
        coverImage: null,
        content: '',
      },
    ]);

    render(<SearchedBlogList initialBlogs={initialBlogs} />);

    const searchInput = screen.getByPlaceholderText('Search');

    fireEvent.change(searchInput, { target: { value: 'Second' } });

    await waitFor(() => {
      expect(getBlogsByQuery).toHaveBeenCalledWith('Second');
      expect(screen.getByText('There are 1 blogs found.')).toBeInTheDocument();
      expect(screen.queryByText('First Blog')).toBeInTheDocument();
    });
  });
});
