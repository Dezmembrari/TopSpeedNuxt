<template>
  <div class="postare">
    <h4 class="title">{{ title }}</h4>
    <div class="detalii">
      <div v-for="(detail, index) in details" :key="index" class="detail-item">

        <Icon
          :class="'w-4 h-4 icon'"
          :name="icons[index]"  
          style="background-color: darkgray"
          alt="Icon"
        />

        <div class="text">{{ detail }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  details: {
    type: Array as () => string[],
    required: true
  }
});

// Array of icons, each corresponding to a detail
const icons = [
  "ic:baseline-wallet",   // Icon for the first detail
  "ic:round-work",   // Icon for the second detail
  "ic:outline-access-time", // Icon for the third detail
  // Add more icons here as needed
];
</script>

<style scoped>
.postare {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 24px 4rem;
  width: clamp(340px, 90vw, 1250px);
  background-color: #fffffffc;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: all 0.2s ease-in;

  @media (max-width: 720px) {
    padding: 16px 1rem;
  }

  &:hover {
          scale: 1.05;
        }
}

.title {
  width: 100%;
  font: 500 22px "Roboto-Medium", Helvetica;
  color: #000;
}

.detalii {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 10px;
  
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 7px;
}

.icon {
  width: 32px;
  height: 32px;
}

.text {
  font: 400 16px "Roboto-Regular", Helvetica;
  color: #000;
  text-align: center;
  white-space: nowrap;
}


</style>
