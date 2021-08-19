<template>
    <v-card elevation="0" width="368" class='px-4 mx-auto mt-2 d-flex flex-column'>
      <v-card-title class='d-flex flex-column align-start px-2 mb-2 text-h4 font-weight-black'>
        <v-icon class="material-icons md-18 pb-5" color="primary">outdoor_grill</v-icon>
        Log In to Twitter
      </v-card-title>
      <v-form class='d-flex flex-column center ma-0' width="100%">
        <v-text-field
        v-model="account"
        label='Account name'
        outlined
        clearable
        width="100%"
        type='text'
        >
        </v-text-field>

        <v-text-field
        v-model="password"
        label='Password'
        outlined
        clearable
        type="password">
        </v-text-field>

        <v-btn
        depressed
        rounded
        width='250'
        color='primary'
        x-large
        class='mx-auto'
        >
        Login
        </v-btn>

      </v-form>
      <v-card-text>
        <router-link to="/register" class='d-flex justify-center text-decoration-none'>
          Don't have an account? Sign up
        </router-link>
      </v-card-text>
    </v-card>
</template>

<script>
import { makeRequest } from '../utils/makeRequest'
export default {
  name: 'Login',
  data: () => ({
    account: "",
    password: ""
  }),
  methods: {
    async handleLogin(){
      try {
        const currentUser = await makeRequest('http://localhost:8082/users/', 'get', '')
      } catch (error) {
        
      }
    }
  }
}
</script>

<style scoped>
  .material-icons.md-18{
    font-size: 48px;
  }
  .login-text{
    border: 1px solid red;
  }

</style>