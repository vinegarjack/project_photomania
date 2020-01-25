<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand >
      <nuxt-link
        :to="{ name: 'home', params }"
        class="nav-link"
        exact
        exact-active-class="active"
      >
        <i class="fa fa-picture-o fa-3x" aria-hidden="true"></i>
        {{$t('navigation.brand')}}
      </nuxt-link>

    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li class="nav-item" v-if="$auth.loggedIn !== true">
          <nuxt-link
            :to="{ name: 'login', params }"
            class="nav-link"
            exact
            exact-active-class="active"
          >
            {{$t('navigation.login')}}
          </nuxt-link>
        </li>
        <li class="nav-item" v-if="$auth.loggedIn === true">
          <div class="nav-link"
            exact
            exact-active-class="active"
            @click.prevent="onSignOut"
            style="cursor: pointer"
          >
            {{$t('navigation.logout')}}
          </div>
        </li>
        <li class="nav-item" v-if="$auth.loggedIn !== true">
          <nuxt-link
            :to="{ name: 'register', params }"
            class="nav-link"
            exact
            exact-active-class="active"
          >
            {{$t('navigation.registration')}}
          </nuxt-link>
        </li>
         <!--<li class="nav-item" v-if="$auth.loggedIn === true">
          <nuxt-link
            :to="{ name: 'user', params }"
            class="nav-link"
            exact
            exact-active-class="active"
          >
            {{$t('navigation.profile')}}
          </nuxt-link>
        </li>-->
      </b-navbar-nav>
    </b-collapse>
    <LocaleChanger />
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
import LocaleChanger from "./LocaleChanger";
export default {
  name: "TheHeader",
  components: { LocaleChanger },
  computed: {
    ...mapGetters({
      lang: "localization/locale"
    }),
    params() {
      if (this.$i18n.locale === this.$i18n.fallbackLocale) {
        return {}
      }
      return { lang: this.lang }
    }
  },
    methods: {
        async onSignOut() {
            await this.$auth.logout();
            this.$router.replace(`/${this.lang}/login`)
        }
    },
};
</script>

<style scoped></style>
