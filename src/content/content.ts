import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
    }),
});


const landing = defineCollection({
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
    }),
});

const about = defineCollection({
  schema: () =>
    z.object({
      name: z.string(),
      image: z.string(),
      bio: z.string(),
      socialLinks: z.array(z.object({
        platform: z.string(),
        url: z.string(),
        icon: z.string(),
      })),
    }),
});

export const collections = {
  blog,
  landing,
  about,
};
