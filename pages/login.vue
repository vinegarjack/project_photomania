<template>
  <b-container class="d-flex justify-content-center align-items-baseline pt-2">
    <b-form @submit.prevent="onSubmit" class="auth-form form-container">
      <h2 class="text-center">
        {{$t('navigation.login')}}
      </h2>
      <b-form-group label="Email address:" label-for="email">
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Password:" label-for="password">
        <b-form-input
          id="password"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-button class="btn-block" type="submit" variant="primary">
        {{$t('navigation.login')}}
      </b-button>
        <nuxt-link :to="{ name: 'register' }" class="btn btn-link btn-flex ">
          Go to registration
        </nuxt-link>
        <nuxt-link :to="{ name: 'home' }" class="btn btn-link btn-flex float-right">
          Forgot the password?
        </nuxt-link>
    </b-form>
  </b-container>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    async onSubmit() {
      try {
        await this.$auth.loginWith('local', { data: this.form })

      } catch(e){
        if (e.response.status === 400)  {
          this.$toast.warning('Wrong password or email')
        }
        console.log(e.response.status)
      }

    }
  }
}
</script>

<style scoped lang="scss">
.form-container {
  width: 450px;
}
</style>
