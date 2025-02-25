<template>
  <DelayHydration>
    <div>
      <!-- <Hero />
      <br><br><br><br><br><br><br><br> -->
      <Hero-Alt/>
      <SkipHydration>
        <Cards />
        <Steps />
      </SkipHydration>
      <client-only>
        <Contact_noform />
      </client-only>
      <SkipHydration>
        <DespreNoi />
      </SkipHydration>
    </div>
  </DelayHydration>
</template>

<script setup>
definePageMeta({
  prerender: true,  // Enables SSG (Static Generation) for this page
  // lazy: true,
})


useSeoMeta({
  ogImage: 'https://topspeedservice.eu/whatsapp-image-2024-08-04-at-15-45-14-e5fa0d06-1-1.webp',
  twitterTitle: 'Top Speed Service Bragadiru - Service Auto și Centru Daune',
  twitterDescription: 'Top Speed Service din Bragadiru oferă servicii auto complete de mecanică, tinichigerie, vopsitorie și constatare daune pentru vehiculul tău.',
  twitterImage: 'https://topspeedservice.eu/whatsapp-image-2024-08-04-at-15-45-14-e5fa0d06-1-1.webp',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'ro'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})
</script>