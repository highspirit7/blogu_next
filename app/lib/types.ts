import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Blog {
  coverImage: SanityImageSource | null;
  date: string;
  slug: string;
  subtitle: string;
  title: string;
}