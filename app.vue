<template>
  <div>
    <DelayHydration>
      <header class="sticky top-0 z-50">
        <Navigation />
      </header>
    </DelayHydration>

    <NuxtPage />
    
    <SkipHydration>
      <footer>
        <Footer />
      </footer>
    </SkipHydration>
  </div>
</template>


<script lang="ts" setup>
import { useSchemaOrg } from '#imports'

useSchemaOrg([
  {
    '@type': 'AutoRepair',
    name: 'Top Speed Service',
    url: 'https://topspeedservice.eu',
    telephone: '+40788990011',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sos. Clinceni, DJ401A 6',
      addressLocality: 'Bragadiru',
      postalCode: '077025',
      addressCountry: 'RO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.37006664441284,
      longitude: 25.96906184733097,
    },
    openingHours: 'Mo,Tu,We,Th,Fr 08:00-17:00',
    isAccessibleForFree: true,
    currenciesAccepted: 'RON,EUR',
    paymentAccepted: 'Cash, Credit Card',
    sameAs: [
      'https://facebook.com/TopSpeedRomania/',
    ],
  }
])
</script>
