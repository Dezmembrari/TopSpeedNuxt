import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),

    // docs: defineCollection({
    //   type: 'page',
    //   source: '**',
    // }),
  }
})
