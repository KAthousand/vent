<template>
  <v-navigation-drawer 
    permanent 
    height='100vh' 
    width='100%'
    class='d-flex align-end'
  >
    <v-list 
      rounded 
      height='100%'
      width='100%'
      class='d-flex flex-column'
      >

      <v-list-item-group>
        <v-list-item-icon class='ma-0'>
          <v-btn icon class='pa-5' height='200%' width='100%'>
            <router-link to="/dashboard" style='textDecoration: none'>
              <v-icon>outdoor_grill</v-icon>
            </router-link>
          </v-btn>
        </v-list-item-icon>
        <v-list-item v-for="(link, idx) in links" :key='idx' router :to='link.route'>
          <v-list-item-icon>
            <v-icon v-text='link.icon'></v-icon>
          </v-list-item-icon>
          <v-list-item-content v-text='link.text'>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

      <CreatePost/>

      <v-spacer></v-spacer>

      <v-list-item-group class='d-flex justify-center align-end pb-5'>
        <v-list-item>
          <v-list-item-avatar class='pt-1'>
            <v-avatar size='40' class='grey'></v-avatar>
          </v-list-item-avatar>
          <v-list-item-content class='pl-2'>
            <v-list-item-title class='text-h6'>fakeUser</v-list-item-title>
            <v-list-item-subtitle>@fakeUser</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-icon class='pt-1' color='blue'>
            <v-icon>more_horiz</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
import CreatePost from '../components/CreatePost.vue'
export default {
  name: 'Navbar',
  components: {CreatePost},
  data: () => ({
    links: [
      {icon: 'home', text:'Home', route: '/dashboard' },
      {icon: 'tag', text:'Explore', route: '/explore' },
      {icon: 'notifications', text:'Notifications', route: '/notifications' },
      {icon: 'email', text:'Messages', route: '/messages' },
      {icon: 'bookmark', text:'Bookmarks', route: '/bookmarks' },
      {icon: 'subject', text:'Lists', route: '/lists' },
      {icon: 'account_circle', text:'Profile', route: '/profile' },
      {icon: 'more_horiz', text:'More', route: '/more' }
    ],
  })
}
</script>

<style>
  .v-navigation-drawer__border{
    display:none;
}
</style>