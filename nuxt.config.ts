// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  nitro: {
    prerender:{
      crawlLinks: true,
      routes: [/*"/sitemap.xml", "/robots.txt",*/ "/"],
    },

    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
    routeRules: {
      '/**': { 
        headers: {
          'Accept-Encoding': 'br, gzip'
        }
      }
    },
    minify: true,
  },

  routeRules: {
    // delay the home page
    '/': { delayHydration: 'mount', prerender: true,},
  },

  css: ["~/assets/css/main.css",],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@zadigetvoltaire/nuxt-gtm',
    'nuxt-delay-hydration',
  ],

  gtm: {
    id: 'GTM-WF7RMP9G',  // Replace this with your actual GTM container ID
    enabled: true,       // Enable GTM for all environments
    debug: false,        // Set to true if you want to see debug messages in the console
    compatibility: true, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
    //defer: true, // Load the script without blocking page rendering
    enableRouterSync: true, // Pass the router instance of your app to automatically sync with router (optional)
  },

  googleFonts: {
    families: {
      // Specify the fonts and their variants here
      Roboto: [100, 300, 400, 500, 700, 900],
      'Open+Sans': [300, 400, 600],
    },
    display: 'swap', // Optional, recommended for performance
    preconnect: true, // Preconnect to the Google Fonts domain
    prefetch: true, // Prefetch the font files
    preload: true, // Preload the font files
    download: true, // Download the fonts and serve them locally
    inject: true, // Inject the Google Fonts link tag into the header
  },
})