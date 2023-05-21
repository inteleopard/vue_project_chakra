<template>
  <v-app>
    <AppHeader />
    <v-main>
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