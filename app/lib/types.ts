import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { PortableTextBlock } from 'next-sanity';

export interface Blog {
  coverImage: SanityImageSource | null;
  date: string;
  slug: string;
  subtitle: string;
  title: string;
}

export type BlogWithoutSlug = Pick<Blog, 'date' | 'title' | 'subtitle'> & {
  coverImageUrl: string | null;
};

export type BlogWithContent = Blog & { content: PortableTextBlock[] };

// export type CategoryTitle = 'Dev' | 'Experience' | 'Book' | 'Earth';

export interface Category {
  title: string;
}

export type CategoryWithCount = Category & { count: number };
