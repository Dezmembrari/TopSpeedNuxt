<template>
  <div v-bind="$attrs">
    
    <DelayHydration>
      <header class="sticky top-0 z-50">
        <Navigation />
      </header>
    </DelayHydration>

    <slot />


    <DelayHydration>
      <footer>
        <Footer />
      </footer>
    </DelayHydration>


  </div>
</template>

<script lang="ts" setup>
import { DelayHydration } from '#components';

// Disable automatic attribute inheritance
defineOptions({
  inheritAttrs: false
})
</script>
