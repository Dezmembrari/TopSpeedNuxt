<script lang="ts" setup>
useHead({
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
});

import type { JobMeta } from '~/types/types';

const route = useRoute();

const { data: post } = await useAsyncData<{ meta: JobMeta } | null>(route.path, () =>
  queryCollection('content').path(route.path).first()
);
</script>

<template>
  <main>
    <h1>{{ post?.meta.images }}</h1>

    <Carousel v-if="post?.meta.images?.length" :images="post.meta.images" />

    <ContentRenderer v-if="post" :value="post" />
    
    <div v-else class="text-6xl text-black">
      <br /> POST NOT FOUND <br />
    </div>
  </main>
</template>
