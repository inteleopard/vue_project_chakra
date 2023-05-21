<template>
  <v-app>
    <AppHeader />
    <v-main>
      <AppSlider />
      <AppOverview />
      <AppPurpose />
      <SectionFooter />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppSlider from "./components/AppSlider.vue";
import AppOverview from "@/components/AppOverview.vue";
import AppPurpose from "@/components/AppPurpose.vue";
import SectionFooter from "./components/Section/SectionFooter";
export default {
  name: "App",

  components: {
    AppPurpose,
    AppHeader,
    AppSlider,
    AppOverview,
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