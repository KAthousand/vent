<template>
  <div style='display: flex' class='search-container'>
    <v-list height='100vh' min-width='425'>

      <v-list-item>
        <v-text-field
        filled
        rounded
        prepend-inner-icon='search'
        label='Search Twitter'
        single-line
        ></v-text-field>
      </v-list-item>

      <v-list-item>
        <v-card 
        width='100%'
        flat
        outlined
        class='rounded-xl mb-5'>
          <v-card-title>
            What's Happening
          </v-card-title>
          <v-card-text>
            news card
          </v-card-text>
        </v-card>
      </v-list-item>

      <v-list-item>
        <v-card 
        width='100%'
        flat
        outlined
        class='rounded-xl'>
          <v-card-title>
            Who to follow
          </v-card-title>
          <v-card-text>
            twitter peeps
          </v-card-text>
        </v-card>
      </v-list-item>

      <v-list-item>
        terms of service
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'SearchContainer'
}
</script>

<style scoped>
</style>