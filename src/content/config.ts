import { defineCollection, z } from "astro:content";

const tilCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.date(),
        lang: z.enum(['en', 'id']),
        tags: z.array(z.string()).optional(),
        author: z.object({
            name: z.string()
        }),
    })
});

export const collections = {
    til: tilCollection
}
