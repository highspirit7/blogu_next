import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';
import { Blog, BlogWithContent } from './types';

const builder = imageUrlBuilder(client);

const blogFields = `title, subtitle, 'slug': slug.current, date, coverImage,`;

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getAllBlogs() {
  const results: Blog[] = await client.fetch(
    `*[_type == "blog"] | order(date desc) {${blogFields}}`,
  );
  return results;
}

export async function getBlogBySlug(slug: string) {
  const result: BlogWithContent[] = await client.fetch(
    `*[_type == "blog" && slug.current == $slug] {
        ${blogFields}
         content
      }`,
    { slug },
  );

  return result[0];
}
