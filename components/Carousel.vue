<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

defineProps<{
  images?: string[];
}>();

const modules = [Pagination, Navigation];

// State to track fullscreen mode
const isFullscreen = ref(false);

// Toggle fullscreen mode
const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value;
};
</script>

<template>
  <!-- Fullscreen Mode -->
  <div
    v-if="isFullscreen"
    class="fullscreen-overlay"
    @click="toggleFullscreen"
  >
    <!-- Prevent clicks on the content from closing fullscreen -->
    <div class="fullscreen-content" @click.stop>
      <swiper
        
        :spaceBetween="30"
        :hashNavigation="{ watchState: true }"
        :pagination="{ clickable: true, dynamicBullets: true }"
        :navigation="true"
        :rewind="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          v-for="(image, index) in images || []"
          :key="index"
          :data-hash="`slide${index + 1}`"
        >
          <NuxtImg :src="image" alt="Slider Image" class="image-slide" />
        </swiper-slide>
      </swiper>
    </div>
  </div>

  <!-- Normal Mode -->
  <div v-else class="swiper-container">
    <swiper
      :spaceBetween="30"
      :hashNavigation="{ watchState: true }"
      :pagination="{ clickable: true, dynamicBullets: true }"
      :navigation="true"
      :loop="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(image, index) in images || []"
        :key="index"
        :data-hash="`slide${index + 1}`"
      >
        <!-- Clicking the image enters fullscreen -->
        <NuxtImg
          :src="image"
          alt="Slider Image"
          class="image-slide"
          @click="toggleFullscreen"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
/* Normal mode styling */
.swiper-container {
  width: 100%;
  max-width: 700px;
  height: auto;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

/* Fullscreen overlay (darkened background) */
.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Fade-in animation */
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}

/* Container for the carousel content in fullscreen */
.fullscreen-content {
  width: clamp(300px,90%,1000px);
  height: auto;
  /* max-width: 50%; */
  /* Scale-in animation */
  transform: scale(0.95);
  animation: scaleIn 0.3s forwards;
}

/* Keyframes for animations */
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  to {
    transform: scale(1);
  }
}

/* Swiper inside fullscreen */
.fullscreen-overlay .mySwiper {
  width: 100%;
  height: auto;
}

/* Image styling */
.image-slide {
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain; /* Ensures images scale properly */

  border-radius: 20px;
  cursor: pointer;
}

/* Exclude navigation arrows from interfering */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  z-index: 10;
  pointer-events: auto;
}

/* Swiper slide styling */
.swiper-slide {
  text-align: center;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  height: clamp(200px, 50vw, 600px);
}
</style>
