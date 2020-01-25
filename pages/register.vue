<template>
  <b-container class="d-flex justify-content-center align-items-baseline pt-2">
    <b-form @submit.prevent="onSubmit" class="auth-form form-container">
      <h2 class="text-center">
        {{ $t("navigation.registration") }}
      </h2>
      <b-form-group label="Photo:" label-for="photo">
        <b-form-input
          id="photo"
          v-model="form.photo"
          type="text"
          placeholder="Photo"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Name:" label-for="name">
        <b-form-input
          id="name"
          v-model="form.name"
          type="text"
          required
          placeholder="Name"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Surname:" label-for="surname">
        <b-form-input
          id="surname"
          v-model="form.surname"
          type="text"
          required
          placeholder="Surname"
        ></b-form-input>
      </b-form-group>
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
          validated="false"
          placeholder="Enter password"
          :state="validation"
        ></b-form-input>
        <b-form-invalid-feedback :state="validation">
          Your password must be 6-12 characters long.
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label="Confirm password:" label-for="conpassword">
        <b-form-input
          id="conpassword"
          v-model="conpassword"
          type="password"
          required
          placeholder="Confirm password"
          :state="confirmVal"
        ></b-form-input>
        <b-form-invalid-feedback :state="confirmVal">
          Your must confirm password.
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label="About me" label-for="aboutMe">
        <b-form-textarea
          id="aboutMe"
          v-model="form.aboutMe"
          type="text"
          placeholder="A few words"
          rows="2"
        ></b-form-textarea>
      </b-form-group>
      <b-button class="btn-block" type="submit" variant="primary">
        {{ $t("navigation.registration") }}
      </b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    conpassword: "",
    form: {
      photo: "",
      name: "",
      surname: "",
      email: "",
      password: "",
      aboutMe: ""
    }
  }),
  computed:{
    validation (){
      return this.form.password.length > 5
    },
    confirmVal (){
      return this.form.password === this.conpassword
    }
  },
  methods: {
    async onSubmit() {
      if (this.form.password !== this.conpassword) {
        this.$toast.error("Confirm the password")
      } else {
        await this.$axios.$post("/users", this.form)
        await this.$auth.loginWith("local", {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.form-container {
  width: 450px;
}
</style>
