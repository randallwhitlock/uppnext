<template>
  <v-app light>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn
      class="logoutButton"
      slot="activator"
      text="Log Out"
      style="background-color: #962F2F; color: white;"
      light>
      Logout
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
  .logoutButton {
    overflow:hidden; 
    text-shadow: 1px 1px 2px black; 
    margin: 10px
  }

</style>
