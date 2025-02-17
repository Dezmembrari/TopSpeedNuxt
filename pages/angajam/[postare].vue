// pages/blog/[...slug].vue
<script lang="ts" setup>

const route = useRoute()
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

console.log('output postare')
console.log(post)

</script>




<template>
  <main>
  <NuxtLayout name="angajam">
    <ContentRenderer 
    v-if="post" :value="post" />
    <div v-else class=" text-6xl text-black"> <br> POST NOT FOUND <br> </div>
  </NuxtLayout>
  </main>
  <!-- <main>
    <ContentDoc />
  </main> -->
</template>
