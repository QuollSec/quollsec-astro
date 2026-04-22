import { defineCollection } from 'astro:content';
import { z } from 'zod';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  posts,
};