<template>
  <div class='d-flex'>
      <header style='width: 31%;'>
        <navbar></navbar>
        <v-spacer></v-spacer>
      </header>
      <v-main>
        <post-container></post-container>
      </v-main>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import PostContainer from '../components/PostContainer.vue'
import SearchContainer from '../components/SearchContainer.vue'

export default {
  name: 'Dashboard',
  components: {Navbar, PostContainer, SearchContainer}
}
</script>

<style scoped>
</style>