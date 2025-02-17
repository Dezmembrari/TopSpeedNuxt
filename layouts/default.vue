<template>
  <div v-bind="$attrs">
    
    <DelayHydration>
      <header class="sticky top-0 z-50">
        <Navigation />
      </header>
    </DelayHydration>

    <slot />


    <SkipHydration>
      <footer>
        <Footer />
      </footer>
    </SkipHydration>


  </div>
</template>

<script lang="ts" setup>
// Disable automatic attribute inheritance
defineOptions({
  inheritAttrs: false
})
</script>
