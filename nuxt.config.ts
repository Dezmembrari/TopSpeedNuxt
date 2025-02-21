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
    prerender: {
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
    '/': { delayHydration: 'mount', prerender: true, },
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
    'nuxt-vitalizer',
    '@nuxtjs/seo',
    '@nuxt/content'
  ],

  gtm: {
    id: 'GTM-WF7RMP9G',  // Replace this with your actual GTM container ID
    enabled: true,       // Enable GTM for all environments
    debug: false,        // Set to true if you want to see debug messages in the console
    compatibility: true, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
    //defer: true, // Load the script without blocking page rendering
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
    url: 'topspeedservice.eu',
    name: 'Top Speed Service Bragadiru - Service Auto și Centru Daune'
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
      geo: {
        type: "GeoCoordinates",
        latitude: 44.37006664441284,
        longitude: 25.96906184733097
      },
      openingHoursSpecification: {
        type: "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00"
      },
      sameAs: [

      ]
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
        { property: 'og:url', content: 'https://topspeedservice.eu' },
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