<template>
  <v-container
      fluid
  >
    <v-row>
      <v-col lg-6>
        <h3 class="intro-text">OUR Approache</h3>
        <h1 class="intro-text">We welcome everyone in our community</h1>
        <p class="description-text">
          Adults and children of all ages here are encouraged to learn about their own faith and the role of God in their everyday life and in the general sense.
        </p>
        <v-btn color="success mr-10" class="white--text" rounded
        >Learn more</v-btn
        >
        <v-btn color="indigo" class="white--text" rounded>
          <v-icon mdi-phone></v-icon>
        </v-btn>
      </v-col>
      <v-col lg-6>
        <v-img
            :width="300"
            aspect-ratio="16/9"
            cover
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AppOverview"
}
</script>

<style scoped>

</style>