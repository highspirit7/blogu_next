import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';
import { BlogWithContent, Category } from './types';

const builder = imageUrlBuilder(client);

const blogFields = `title, subtitle, 'slug': slug.current, date, coverImage,`;

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getTotalOfBlogs(category: string) {
  const total = await client.fetch(`count(*[_type == "blog" && category->title == "${category}"])`);
  return total;
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

export async function getAllCategories() {
  const result: Category[] = await client.fetch(`*[_type == "category"] | {title}`);

  return result;
}

export async function getAllCategoriesOfBlogs() {
  const results = await client.fetch(`*[_type == "blog"] | {'category': category->title}`);
  return results;
}

const PAGE_LIMIT = 5;

export async function getPaginatedBlogs(page = 1, category = 'All') {
  const offset = (page - 1) * PAGE_LIMIT;

  const sanity_groq =
    category === 'All'
      ? `*[_type == "blog"] | order(date desc) {${blogFields}}[${offset}...${offset + PAGE_LIMIT}]`
      : `*[_type == "blog" && category->title == "${category}"] | order(date desc) {${blogFields}}[${offset}...${
          offset + PAGE_LIMIT
        }]`;
  const results = await client.fetch(sanity_groq);

  return results;
}
