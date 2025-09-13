import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(), // Format: "MM. DD"
    year: z.number(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const weeklyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(), // Format: "MM/DD" (e.g., "04/20")
    year: z.number(), // e.g., 2025
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  weekly: weeklyCollection
};