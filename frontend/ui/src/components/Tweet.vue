<template>
  <v-container fluid class="pa-0 ma-0">
    <v-card width="100%" elevation="0">
      <v-card-title class="pb-1">
        {{ tweet.user.displayName }}
        <v-card-subtitle class="pa-1">{{ tweet.user.account }}</v-card-subtitle>
      </v-card-title>

      <v-card-text class="pb-1">
        {{ tweet.content }}
      </v-card-text>

      <v-card-actions class="d-flex justify-space-around">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-hover v-slot="{ hover }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                class="{ 'on-hover': hover }"
                :color="hover ? 'primary' : 'grey'"
              >
                <v-icon>mode_comment</v-icon>
              </v-btn>
            </v-hover>
          </template>
          <span class="text-caption">Reply</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-hover v-slot="{ hover }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                class="{ 'on-hover': hover }"
                :color="hover ? 'success' : 'grey'"
              >
                <v-icon>cached</v-icon>
              </v-btn>
            </v-hover>
          </template>
          <span class="text-caption">Retweet</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-hover v-slot="{ hover }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                class="{ 'on-hover': hover }"
                :color="hover ? 'error' : 'grey'"
              >
                <v-icon>favorite_border</v-icon>
              </v-btn>
            </v-hover>
          </template>
          <span class="text-caption">Like</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-hover v-slot="{ hover }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                class="{ 'on-hover': hover }"
                :color="hover ? 'primary' : 'grey'"
              >
                <v-icon>file_upload</v-icon>
              </v-btn>
            </v-hover>
          </template>
          <span class="text-caption">Share</span>
        </v-tooltip>
      </v-card-actions>
    </v-card>
    <v-divider></v-divider>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "Tweet",
  props: ["tweet"],
  data: () => ({
    loading: false,
  }),
}
</script>

<style scoped></style>
