<!-- //Postare.vue -->
<template>  
  <div class="postare">
    <div class="detalii">
      <div v-for="(detail, index) in details" class="detail-item">

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
  width: 100% !important;
  background-color: transparent !important;
  box-shadow: none !important;
  border-radius: 25px;
  overflow: hidden;
}

.detalii {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 10px;  
  background: none !important;
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
  font: 16px;
  color: #000;
  text-align: center;
  white-space: nowrap;
}


</style>
