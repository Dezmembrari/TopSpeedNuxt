<template>
  <DelayHydration>
    <div>
      <Hero />
      <SkipHydration>
        <Cards />
        <Steps />
      </SkipHydration>
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