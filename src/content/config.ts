import { defineCollection, z } from "astro:content";

/**
 * Schema for project markdown files.
 * Projects are located in src/content/projects/{lang}/*.md
 */
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    contentId: z.string(),
    contentType: z.literal("project"),
    contentSlug: z.string(),
    projectType: z.enum(["personal", "customer", "other"]).optional(),
    date: z.string(),
    language: z.enum(["en", "fr"]),
    featuredImage: z.string().optional(),
    liveProjectPreview: z.string().url().optional().or(z.literal("")),
    contentTitle: z.string(),
    projectSkills: z.array(z.string()).default([]),
    contentDescription: z.string(),
  }),
});

/**
 * Schema for blog post markdown files.
 * Posts are located in src/content/posts/{lang}/*.md
 */
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    contentId: z.string(),
    contentType: z.literal("post"),
    contentSlug: z.string().optional(),
    date: z.string(),
    language: z.enum(["en", "fr"]),
    contentTitle: z.string().optional(),
    contentDescription: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  posts: postsCollection,
};
