export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'notes-app',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'
  ],

  pageTransition: 'fade',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/onesignal"
  ],
  bootstrapVue: {
    icons: true
  },

  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  axios: {
    baseURL: "https://localhost:4443"
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "login", method: "post" },
          user: { url: "usuario", method: "get", propertyName: false },
          logout: false
        }
      }
    }
  },

  // router: {
  //   routes: [
  //     {
  //       name: "index",
  //       path: "/",
  //       component: "pages/index.vue"
  //     },
  //     {
  //       name: "nota-new",
  //       path: "/nota",
  //       component: "pages/newNota.vue"
  //     },
  //     {
  //       name: "nota-edit",
  //       path: "/nota/:id",
  //       component: "pages/editNota.vue"
  //     }
  //   ]
  // },

   pwa: {
     icon: {
      source: "icon.png"
     },
    meta: {
      theme_color: "#FCC344"
    },
    manifest: {
       name: "Notes App TADS",
       short_name: "Notes App",
       description: "Aplicativo de Notas da Aula de Programa????o Web",
       lang: "pt-br"
     }
   },

   oneSignal: {
     init: {
       appId: "64f13c0b-c81a-44c0-8d43-da613c6e34c9",
       allowLocalHostAsSecureOrigin: true,
       cdn: true,
       welcomeNotification: {
         disable: true
       }
     }
   }
}
