import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import BlogCard from '@/components/blog-card';
import { Blog } from '@/app/lib/types';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import dayjs from 'dayjs';

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}));

vi.mock('@/app/lib/api', () => ({
  urlFor: () => ({
    crop: () => ({
      fit: () => ({
        url: () => 'https://example.com/test-image.jpg',
      }),
    }),
  }),
}));

describe('BlogCard Component', () => {
  const mockBlogData: Blog = {
    title: 'Test Blog Post',
    subtitle: 'This is a test subtitle',
    slug: 'test-blog-post',
    date: '2024-01-01',
    coverImage: 'test-image-id',
  };

  it('renders title and subtitle', () => {
    render(<BlogCard data={mockBlogData} />, { wrapper: MemoryRouterProvider });

    expect(screen.getByText(mockBlogData.title)).toBeInTheDocument();
    expect(screen.getByText(mockBlogData.subtitle)).toBeInTheDocument();
  });

  it('renders formatted date correctly', () => {
    render(<BlogCard data={mockBlogData} />, { wrapper: MemoryRouterProvider });

    const formattedDate = dayjs(mockBlogData.date).format('LL');
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });

  it('renders "Read More" link with correct href', () => {
    render(<BlogCard data={mockBlogData} />, { wrapper: MemoryRouterProvider });

    const readMoreLink = screen.getByRole('link', { name: /read more/i });
    expect(readMoreLink).toBeInTheDocument();
    expect(readMoreLink).toHaveAttribute('href', `/blog/${mockBlogData.slug}`);
  });

  it('renders cover image when provided', () => {
    render(<BlogCard data={mockBlogData} />, { wrapper: MemoryRouterProvider });

    const image = screen.getByAltText(`Cover image for ${mockBlogData.title}`);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/test-image.jpg');
  });

  it('renders correctly without cover image', () => {
    const dataWithoutImage = { ...mockBlogData, coverImage: null };
    render(<BlogCard data={dataWithoutImage} />, { wrapper: MemoryRouterProvider });

    expect(screen.queryByAltText(`Cover image for ${mockBlogData.title}`)).not.toBeInTheDocument();
  });
});
