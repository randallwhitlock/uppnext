<template>
  <v-app>    
    <v-container>
      <v-layout align-center justify-center class="form-container">
        <v-flex xs12 sm8 md4>
          <v-card class="mt-5 elevation-12 card-container">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Sign in</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form class="input-form">
                <v-text-field :rules="emailRules" prepend-icon="email" name="email" label="Email" type="text" v-model="email"></v-text-field>
                <v-text-field :rules="passwordRules" id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn dark color="blue lighten-2" @click.stop.prevent="goToSignup">New user?</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click.stop.prevent="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  import LoginMixin from './Login.mixin'

  export default {
    data: () => ({
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6
      ]
    }),
    mixins: [LoginMixin],
    methods: {
      goToSignup() {
        this.$router.push({ name: 'SignUp' })
      }
    }
  }
</script>

<style>
h1.title {
  font-weight: 900; 
  font-family: Roboto;
} 
span.title-text-up {
  text-shadow: 1px 1px 3px black;
}
span.title-text-next {
  color: 	#cae325;  
  text-shadow: 1px 1px 3px black;
}
.form-container {
  width: 100%;
  margin-top: 10%;
}
</style>