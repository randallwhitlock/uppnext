<template>
  <v-app light>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn
      style="background-color: #e9751a; color: white;"
      slot="activator"
      text="Log Out"
      class="loginButton"
      light>
      Login
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Log Out?</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
          style="background-color:"
          app
          flat @click.native="dialog = false">
          Cancel
          </v-btn>
          <v-btn
          style="background-color:"
          flat
          @click.native="postNewUser"
          >
          Log Out
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  </v-app>
</template>


<script>
//const axios = require('axios');

export default {
  data: () => ({
    dialog: false,
    isLoading: false,
  }),
};
</script>

<style scoped>
  .loginButton {
    overflow:hidden; 
    background-color: #e9751a; 
    color: white; 
    text-shadow: 1px 1px 2px black;  
    margin: 10px
  }

</style>
