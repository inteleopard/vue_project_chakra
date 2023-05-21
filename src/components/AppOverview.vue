<template>
  <v-container
      fluid
  >
    <v-row>
      <v-col lg-6>
        <v-sheet
            border="md"
            class="pa-6 text-white mx-auto ms-lg-12"
        >
          <h4 class="mb-4">OUR APPROACH</h4>
          <h1 class="mb-8 text-family">
            We welcome everyone in our community.
          </h1>
          <h3 class="mb-4">We have a strong sense of community.</h3>
          <h3 class="mb-8">
            Adults and children of all ages here are encouraged to
            learn about their own faith and the role of God in their
            everyday life and in the general sense.
          </h3>
        </v-sheet>
        <v-row justify="center" align="center">
          <v-col class="col-lg-2 offset-lg-2">
            <v-btn density="compact">LEARN MORE</v-btn>
          </v-col>
          <v-col class="col-lg-8">
            <v-icon style="margin-left: 10%;"> mdi-phone </v-icon>
            0 800 555 44 33
          </v-col>
        </v-row>
      </v-col>
      <v-col lg-6>

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
.text-family{
  font-family: "Crimson Pro","serif" !important;
  font-size: 3.35em !important;
  font-weight: 400 !important;
}
</style>