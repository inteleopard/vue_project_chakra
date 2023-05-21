<template>
  <v-container
      class="pt-20"
      :prev-icon="prevIcon"
      :next-icon="nextIcon"
  >
    <v-carousel height="900">
      <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
      >
        <v-container
            class="fill-height d-flex"
            fluid
            fill-height
            align-center
            justify-center
        >
          <v-card class="transparent-card mx-auto" max-width="700">
            <v-card-title class="text-h7">Join the community</v-card-title>
            <v-card-text class="text-h2 text--white">We're Building a Better World Together</v-card-text>
          </v-card>
        </v-container>
      </v-carousel-item>
      <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
          cover
      >
        <v-container
            class="fill-height d-flex"
            fluid
            fill-height
            align-center
            justify-center
        >
          <v-card class="transparent-card mx-auto" max-width="700">
            <v-card-title class="text-h7">Join the community</v-card-title>
            <v-card-text class="text-h2 text--white">Harmony Inside Brings Joy to the World</v-card-text>
          </v-card>
        </v-container>
      </v-carousel-item>
      <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
      >
        <v-container
            class="fill-height d-flex"
            fluid
            fill-height
            align-center
            justify-center
        >
          <v-card class="transparent-card mx-auto" max-width="700">
            <v-card-title class="text-h7">Join the community</v-card-title>
            <v-card-text class="text-h2 text--white">We Aim to Be Guided by  God's Word</v-card-text>
          </v-card>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      prevIcon: 'mdi-chevron-left',
      nextIcon: 'mdi-chevron-right'
    }
  }
};
</script>

<style>
.v-icon {
  font-size: 32px;
}

.transparent-card {
  background-color: transparent !important;
  box-shadow: none !important;
  color: white !important;
}

.v-card__text {
  color: white !important;
}
</style>