<template>

  <div>

  <v-container  fluid grid-list-sm>

    <v-layout justify-center>
      <v-flex xs8>
        <v-card>
          <v-toolbar 
          style="background-color: #66BB6A; 
          color: white;  
          font-family: Roboto; 
          text-shadow: 1px 1px 2px black;">
            <v-toolbar-title>Event Info</v-toolbar-title>

          </v-toolbar>

          <v-layout >
            <!-- <v-flex xs4>
            <v-subheader style="font-family: Roboto;" class="subheading mt-2">Event Title</v-subheader>
            </v-flex> -->
            <v-flex class="mr-3 px-4" xs8>
              <v-text-field
                style="font-family: Roboto; font-weight: 500"
                id="title"
                name="input-1"
                label="Event Name"
                v-model="title"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout>
            <!-- <v-flex xs4>
            <v-subheader style="font-family: Roboto;" class="subheading mt-2">Event Date</v-subheader>
            </v-flex> -->
            <v-flex class="mr-3 px-4" xs8>
              <v-text-field
                style="font-family: Roboto; font-weight: 500"
                id="title"
                name="input-1"
                label="Date"
                v-model="startDate"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout>
            <!-- <v-flex xs4>
            <v-subheader style="font-family: Roboto;" class="subheading mt-2">Event Description</v-subheader>
            </v-flex> -->
            <v-flex class="mr-3 px-4" xs8>
              <v-text-field
                style="font-family: Roboto; font-weight: 500"
                id="title"
                name="input-1"
                label="Give a brief description"
                v-model="description"
              ></v-text-field>
            </v-flex>
          </v-layout>

        </v-card>
      </v-flex>
    </v-layout>

    <br>

    <AddGroup></AddGroup>

    <br>

    <Schedule :adminCreate="true" :adminShow="false" :nonAdmin="false"></Schedule>

    <v-layout justify-center>
      <v-flex xs8>
        <v-btn @click="addSingleEvent" style="background-color: #051760; color: white; text-shadow: 1px 1px 2px black; font-family: Roboto" >PROCEED TO CHECKOUT</v-btn>
      </v-flex>
    </v-layout>



  </v-container>
  </div>
</template>

<style>

</style>

<script>
import AddGroup from './AddGroup.desktop';
import Schedule from './Schedule.desktop';
import EventAddMixin from './AdminEventCreate.mixin'

export default {
  components: {
    AddGroup,
    Schedule
  },
  mixins: [EventAddMixin]
};
</script>
