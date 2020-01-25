<template>
  <b-navbar-nav class="locale-changer">
    <li v-for="lang of locales" class="nav-item btn btn-outline-primary">
      <div @click.prevent.stop="changeLocale(lang)" >
        {{ lang }}
      </div>
    </li>
  </b-navbar-nav>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: "LocaleChanger",
    computed: mapGetters({
      locales: 'localization/locales'
    }),
      methods: {
          changeLocale (lang) {
              let path = this.$nuxt.$route.path.replace(`/${lang}`, '')
              this.locales.forEach((locale) => {
                  path = path.replace(`/${locale}`, '')
              })
              this.$router.replace(`/${lang}${path}`)
          }
      }
  }
</script>

<style scoped lang="scss">
  .locale-changer {
    display: flex;
    li {
      list-style-type: none;
      padding: 0.5rem;
    }
  }
</style>
