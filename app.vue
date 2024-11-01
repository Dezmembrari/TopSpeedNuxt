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
