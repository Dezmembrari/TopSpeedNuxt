<script lang="ts" setup>
import AplicaAcum from '~/components/AplicaAcum.vue';
import PostareData from '~/components/PostareData.vue';
import type { JobMeta } from '~/types/types';

const route = useRoute();

const { data: post, error } = await useAsyncData<{
  title: any; meta: JobMeta
} | null>(route.path, () =>
  queryCollection('angajam').path(route.path).first()
);

if(error.value){
  throw createError({
    statusCode: error.value?.statusCode,
    statusMessage: error.value.statusMessage,
  })
}

const getDetailsFromMeta = (meta: JobMeta): string[] => {
  return [
    meta.salariu || 'Salariu nespecificat',
    meta.perioada || 'Perioada nespecificata',
    meta.program || 'Program nespecificat',
  ];
};
</script>

<template>
  <main class="flex justify-center min-h-screen bg-[rgba(228,255,205,0.25)] py-4 min-w-80">
    <div v-if="post" class="postare my-8">
      <!-- <h1>{{ post.title }}</h1> -->
      <Carousel v-if="post?.meta.images?.length" :images="post.meta.images" />
      <PostareData :details=getDetailsFromMeta(post.meta) />
      <ContentRenderer v-if="post" :value="post" class=" prose prose-base p-5 " />
      <AplicaAcum/>
    </div>

    <div v-else class="text-4xl sm:text-6xl text-black text-center justify-center">
      <br /> POST NOT FOUND <br />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.postare {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: clamp(340px, 60%, 800px);
  min-width: 340px;
  height: fit-content;
  /* Adjusts to text content */
  background-color: white;
  //padding: clamp(10px, 2vw, 2rem); /* Responsive padding */
  padding: 36px 20px;
  border-radius: 25px;
  /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  /* Light shadow */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
