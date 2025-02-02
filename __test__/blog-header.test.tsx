import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BlogHeader from '@/components/blog-header';

vi.mock('next/image', () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}));

describe('BlogHeader Component', () => {
  const mockData = {
    title: 'Test Blog Title',
    subtitle: 'This is a test subtitle',
    date: '2024-01-01',
    coverImageUrl: 'https://example.com/test-image.jpg',
  };

  it('renders title, subtitle, and formatted date', () => {
    render(<BlogHeader {...mockData} />);

    expect(screen.getByText('Test Blog Title')).toBeInTheDocument();
    expect(screen.getByText('This is a test subtitle')).toBeInTheDocument();
    expect(screen.getByText('January 1, 2024')).toBeInTheDocument();
  });

  it('renders cover image when coverImageUrl is provided', () => {
    render(<BlogHeader {...mockData} />);

    const image = screen.getByAltText("blog's cover image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockData.coverImageUrl);
  });

  it('does not render an image if coverImageUrl is not provided', () => {
    render(<BlogHeader {...mockData} coverImageUrl={null} />);

    expect(screen.queryByAltText("blog's cover image")).not.toBeInTheDocument();
  });
});
