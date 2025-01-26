import { createClient } from 'next-sanity';

const client = createClient({
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-25',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'lfw619jp',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
});

export default client;
