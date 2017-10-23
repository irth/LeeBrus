<template>
  <div class="login">
    <form @submit="login">
      <h3 v-if="error != null">{{ error }}</h3>
      <input type="text" v-model="username">
      <input type="password" v-model="password">
      <input type="submit" value="Log in">
    </form>
  </div>
</template>

<script>
import Auth from '@/services/auth';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      error: null,
    };
  },
  methods: {
    login() {
      Auth.login(this, { username: this.username, password: this.password }, '/')
        .catch((err) => {
          this.error = (err != null && err.status === 401) ? 'Incorrect login and/or password' : 'Unknown error';
        });
    },

    clearErrors() {
      this.error = null;
    },
  },
};
</script>

<style>

</style>
