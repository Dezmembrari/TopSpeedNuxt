<template>
  <DelayHydration>
  <div>
    <Hero />
    <Cards />
    <Steps />
    <client-only>
      <Contact_noform />
    </client-only>
  </div>
  </DelayHydration>
</template>

<script setup>
definePageMeta({
  prerender: true  // Enables SSG (Static Generation) for this page
})

</script>