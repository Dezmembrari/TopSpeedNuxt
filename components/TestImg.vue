<script lang="ts" setup>
defineProps({
  ImageSrc: String,

});
</script>

<template>
  <div>
    <!-- <NuxtImg 
    src="https://upload.wikimedia.org/wikipedia/commons/6/65/Olympic_boycotts_1976_1980_1984.PNG" 
    />

    <NuxtImg
    src="/pexels.webp" 
    /> -->

    <NuxtImg
    :src="ImageSrc" 
    />
  </div>
</template>



<style></style>