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
          <v-card
              class="transparent-card mx-auto"
              max-width="800"
              style="left: -200px"
          >
            <v-card-title class="text-uppercase">Join the community</v-card-title>
            <v-card-text class="pt-7">We're Building a Better</v-card-text>
            <v-card-text class="pt-12">World Together</v-card-text>
            <v-btn class="mt-lg-12 text--white text-uppercase ms-4 slider-body-btn" color="green" width="250" height="54">Make An Appointment</v-btn>
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
          <v-card
              class="transparent-card mx-auto"
              max-width="800"
              style="left: -200px"
          >
            <v-card-title class="text-uppercase">Tramquility and peace</v-card-title>
            <v-card-text class="pt-7">Harmony Inside Brings</v-card-text>
            <v-card-text class="pt-12">Joy to the World</v-card-text>
            <v-btn class="mt-lg-12 text--white text-uppercase ms-4 slider-body-btn" color="green" width="250" height="54">Make An Appointment</v-btn>
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
          <v-card
              class="transparent-card mx-auto"
              max-width="800"
              style="left: -200px"
          >
            <v-card-title class="text-uppercase">Learning Bible</v-card-title>
            <v-card-text class="pt-7">We Aim to Be Guided</v-card-text>
            <v-card-text class="pt-12">by God's Word</v-card-text>
            <v-btn class="mt-lg-12 text--white text-uppercase ms-4 slider-body-btn" color="green" width="250" height="54">Make An Appointment</v-btn>
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

.v-card__title {
  color: white !important;
  font-family: "Crimson Pro",serif !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  letter-spacing: 2px !important;
}

.v-card__text {
  color: white !important;
  font-family: "Crimson Pro",serif !important;
  font-size: 80px !important;
}

.slider-body-btn {
  color: white !important;
  font-family: "Crimson Pro",serif !important;
  font-size: 15px !important;
  font-weight: 400 !important;
  border-radius: 50px !important;
  background-color: rgb(99, 198, 67) !important;
}
</style>