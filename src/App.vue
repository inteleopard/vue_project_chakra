<template>
  <v-app>
    <AppHeader />
    <v-main>
      <AppSlider />
      <AppHero />
      <SectionAbout />
      <SectionPortofolio />
      <SectionProject />
      <SectionGallery />
      <SectionContact />
      <SectionFooter />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppSlider from "./components/AppSlider.vue";
import AppHero from "./components/AppHero.vue";
import SectionAbout from "./components/Section/SectionAbout.vue";
import SectionPortofolio from "./components/Section/SectionPortofolio.vue";
import SectionProject from "./components/Section/SectionProject";
import SectionGallery from "./components/Section/SectionGallery";
import SectionContact from "./components/Section/SectionContact";
import SectionFooter from "./components/Section/SectionFooter";
export default {
  name: "App",

  components: {
    AppHeader,
    AppSlider,
    AppHero,
    SectionAbout,
    SectionPortofolio,
    SectionProject,
    SectionGallery,
    SectionContact,
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