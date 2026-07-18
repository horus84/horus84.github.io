import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    status: z.enum(['published', 'preprint', 'in-progress']),
    summary: z.string(),
    paperLink: z.string().url().optional(),
    codeLink: z.string().url().optional(),
    slidesLink: z.string().url().optional(),
    tags: z.array(z.string()),
    featured: z.boolean(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
    codeLink: z.string().url().optional(),
    demoLink: z.string().url().optional(),
    tags: z.array(z.string()),
    featured: z.boolean(),
    track: z.enum(['llm', 'indus', 'other']),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    location: z.string(),
    date: z.string(),
    summary: z.string(),
    slidesLink: z.string().url().optional(),
    videoLink: z.string().url().optional(),
    featured: z.boolean(),
  }),
});

export const collections = {
  publications,
  projects,
  talks,
};
