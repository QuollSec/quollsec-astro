import { defineCollection } from 'astro:content';
import { z } from 'zod';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
  }),
});

export const collections = {
  posts,
};