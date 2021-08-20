<template>
  <v-list-item class="d-flex align-start justify-center pt-6">
    <v-btn
      depressed
      rounded
      width="250"
      color="primary"
      x-large
      @click="tweetDialog = true"
      >Tweet</v-btn
    >
    <v-dialog v-model="tweetDialog" width="600">
      <v-card class="rounded-xl" elevation="0">
        <v-btn icon class="ml-3 my-1" @click="tweetDialog = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-divider></v-divider>

        <v-card class="px-5 d-flex" width="100%">
          <v-list-item-group height="100%">
            <v-list-item-avatar class="pt-1">
              <v-avatar size="40" class="grey"></v-avatar>
            </v-list-item-avatar>
          </v-list-item-group>

          <div style="width:100%">
            <v-list-item class="">
              <v-text-field
                v-model="input"
                rounded
                label="What's Happening?"
                autofocus
              ></v-text-field>
            </v-list-item>

            <div class="d-flex justify-space-between">
              <div class="pb-4">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon color="primary" v-bind="attrs" v-on="on">
                      <v-icon>image</v-icon>
                    </v-btn>
                  </template>
                  <span class="text-caption">Media</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon color="primary" v-bind="attrs" v-on="on">
                      <v-icon>gif_box</v-icon>
                    </v-btn>
                  </template>
                  <span class="text-caption">GIF</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon color="primary" v-bind="attrs" v-on="on">
                      <v-icon>poll</v-icon>
                    </v-btn>
                  </template>
                  <span class="text-caption">Poll</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon color="primary" v-bind="attrs" v-on="on">
                      <v-icon>sentiment_satisfied_alt</v-icon>
                    </v-btn>
                  </template>
                  <span class="text-caption">Emoji</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      color="primary"
                      v-bind="attrs"
                      v-on="on"
                      @click="this.tweetDialog = false"
                    >
                      <v-icon>event_available</v-icon>
                    </v-btn>
                  </template>
                  <span class="text-caption">Schedule</span>
                </v-tooltip>
              </div>
              <div>
                <v-btn
                  depressed
                  rounded
                  class="pa-5"
                  color="primary"
                  :disabled="input ? false : true"
                  @click="tweetDialog = false"
                  >Tweet</v-btn
                >
              </div>
            </div>
          </div>
        </v-card>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script>
export default {
  name: "CreatePost",
  data: () => ({
    input: null,
    tweetDialog: false,
  }),
  methods: {
    closeModal() {
      this.$emit("dialogClosed")
    },
    openModal() {
      this.$emit("dialogOpened")
    },
  },
}
</script>

<style scoped></style>
