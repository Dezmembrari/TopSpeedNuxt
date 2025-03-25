import { cache } from "sharp";

// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml", "/robots.txt", "/"],
    },

    storage:{
      cache:{
        driver: 'fs',
        base: "./.nitro/cache",
      },
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
      },

      // Allow XML files to be served properly
      '/sitemap*.xml': {
        headers: {
          'content-type': 'application/xml',
          // Optional: Add cache control if needed
          'cache-control': 'max-age=3600'
        }
      }
    },
    minify: true,
  },

  routeRules: {
    // delay the home page
    '/': { delayHydration: 'mount', prerender: true, },
  },

  css: ["~/assets/css/main.css",],
  
  vite:{
    plugins: [tailwindcss(),],
      //"@tailwindcss/postcss": {},
      build: {
        sourcemap: true,
      },
  },
    
  
  

  experimental:{
    payloadExtraction: true,
    treeshakeClientOnly: true,
    
  },

  modules: [
    //'@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@zadigetvoltaire/nuxt-gtm',
    'nuxt-delay-hydration',
    'nuxt-vitalizer',
    '@nuxtjs/seo',
    '@nuxt/content',
    //'@tailwindcss/postcss',
  ],

  // tailwindcss: {
  //   viewer: false, // Prevent unnecessary processing
  // },

  gtm: {
    id: 'GTM-WF7RMP9G',  // Replace this with your actual GTM container ID
    enabled: true,       // Enable GTM for all environments
    debug: false,        // Set to true if you want to see debug messages in the console
    compatibility: true, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
    defer: true, // Load the script without blocking page rendering
    enableRouterSync: true, // Pass the router instance of your app to automatically sync with router (optional)
  },

  vitalizer: {
    // Remove the render-blocking entry CSS
    disableStylesheets: 'entry',


    disablePrefetchLinks: true,

  },

  // delayHydration:{
  //   mode: 'mount' //hydrate after initial render
  // },

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



  //SEO

  site: {
    url: 'https://topspeedservice.eu/',
    name: 'Top Speed Service Bragadiru - Service Auto și Centru Daune'
  },

  sitemap: {
    autoLastmod: true,
    exclude: [
      '/admin/**',
      '/webmail/**'
    ],
  },

  robots: {
    sitemap: 'https://topspeedservice.eu/sitemap.xml?canonical'
  },


  schemaOrg: {
    identity: {
      type: "AutoRepair",
      name: "Top Speed Service",
      url: "https://topspeedservice.eu",
      telephone: "+40788990011",
      address: {
        type: "PostalAddress",
        streetAddress: "Sos. Clinceni, DJ401A 6",
        addressLocality: "Bragadiru",
        postalCode: "077025",
        addressCountry: "RO"
      },
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ro',
      },

      meta: [
        {
          name: "description",
          content: "Top Speed Service din Bragadiru oferă servicii auto complete de mecanică, tinichigerie, vopsitorie și constatare daune pentru vehiculul tău.",
        },
        { property: 'og:title', content: 'Top Speed Service Bragadiru - Service Auto și Centru Daune' },
        { property: 'og:description', content: 'Top Speed Service din Bragadiru oferă servicii auto complete de mecanică, tinichigerie, vopsitorie și constatare daune pentru vehiculul tău.' },
        { property: 'og:image', content: 'https://topspeedservice.eu/whatsapp-image-2024-08-04-at-15-45-14-e5fa0d06-1-1.webp' },
        { property: 'og:url', content: 'https://topspeedservice.eu/' },
        { property: 'og:type', content: 'website' }
      ],
    }
  },

  components: {
    global: true,
    dirs: [
      { path: '~/components', extensions: ['vue'], priority: 10 }
    ]
  },


  content: {

    watch: {
      enabled: true,
    },

    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3,
        },


        highlight: {
          theme: "github-dark",

          langs: [
            'c',
            'cpp',
            'java'
          ],


        },
      }
    },


  },
})