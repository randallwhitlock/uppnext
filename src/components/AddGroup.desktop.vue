<template>
  <v-layout justify-center>
      <v-flex xs8>
        <v-card>
            <v-toolbar style="background-color: #66BB6A; 
            color: white;  
            font-family: Roboto; 
            text-shadow: 1px 1px 2px black;">
              <v-toolbar-title>Add a group</v-toolbar-title>
            </v-toolbar>

            <v-layout justify-space-around>
              <v-flex xs4>
                <v-text-field
                  style="font-family: Roboto; font-weight: 500"
                  id="title"
                  name="input-1"
                  label="Group Name"
                  v-model="name"
                ></v-text-field>
              </v-flex>
              <v-flex xs4>
                <v-text-field
                  style="font-family: Roboto; font-weight: 500"
                  id="title"
                  name="input-1"
                  label="Time"
                  v-model="time"
                ></v-text-field>
              </v-flex>

              <v-btn @click="addSingleGroup" 
              class="mt-3" 
              style="background-color: #051760; 
              font-family: Roboto; 
              text-shadow: 1px 1px 2px black; 
              color: white" 
              >
              add
              </v-btn>
            </v-layout>

        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>

import AddGroupMixin from './AddGroup.mixin';

export default {
  mixins: [AddGroupMixin]
};
</script>
