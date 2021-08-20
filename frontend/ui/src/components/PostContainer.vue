<template>
  <div class="d-flex">
    <div>
      <v-sheet outlined class="mx-0" height="100vh" width="600">
        <v-container class="d-flex justify-space-between">
          <div class="text-h6 font-weight-bold">Home</div>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>auto_awesome</v-icon>
              </v-btn>
            </template>
            <span>Top Tweets</span>
          </v-tooltip>
        </v-container>
        <v-divider></v-divider>

        <v-virtual-scroll
          v-if="this.tweets"
          :items="tweets"
          height="90vh"
          item-height="153"
          bench="6"
          class="scrollbar-hidden"
        >
          <template v-slot:default="{ item }">
            <Tweet :tweet="item" />
          </template>
        </v-virtual-scroll>

        <div
          v-else
          class="d-flex justify-center align-center"
          style="height: 100%;"
        >
          <v-btn icon x-large :loading="loading" color="primary"></v-btn>
        </div>
      </v-sheet>
    </div>

    <div style="width: 100%;">
      <search-container></search-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
// components
import SearchContainer from "../components/SearchContainer.vue"
import Tweet from "./Tweet.vue"

// functions
import { makeRequest } from "../utils/makeRequest"

// types
import { PostRecord } from "../types/PostRecord"
import { UserRecord } from "../types/UserRecord"

export default Vue.extend({
  name: "PostContainer",
  components: { SearchContainer, Tweet },
  created: function() {
    this.fetchPosts()
  },
  data: () => ({
    tweets: null as null | PostRecord[],
    numberOfTweets: 0,
    loading: false,
  }),
  methods: {
    async getUsersData(): Promise<UserRecord[]> {
      const user = await makeRequest("http://localhost:8082/users/", "get", "")
      return user.items
    },
    async mapUsersToPosts(posts: PostRecord[]) {
      const users = await this.getUsersData()
      return posts.map((post) => ({
        ...post,
        user: users.find((user) => user.id === post.userId),
      }))
    },
    fetchPosts() {
      this.loading = true
      makeRequest("http://localhost:8082/posts", "get", "").then((response) => {
        this.mapUsersToPosts(response.items).then((mappedPosts) => {
          this.tweets = mappedPosts
        })
        this.numberOfTweets = response.total
      })
      // this.loading = false
    },
  },
})
</script>

<style>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
