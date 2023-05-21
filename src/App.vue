<template>
  <v-app>
    <AppHeader />
    <v-main>
      <AppSlider />
      <SectionFooter />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppSlider from "./components/AppSlider.vue";
import SectionFooter from "./components/Section/SectionFooter";
export default {
  name: "App",

  components: {
    AppHeader,
    AppSlider,
    SectionFooter,
  },

  data: () => ({}),
};
</script>

<style scoped>
  .container {
    width: 100% !important;
    padding: 0 !important;
  }
  
  @media (min-width: 960px) {
    .container {
      max-width: 100%;
    }
  }

</style>