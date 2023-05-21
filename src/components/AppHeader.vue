<template>
  <v-app-bar
    app
    color="white"
    light
    elevation="6"
    elevate-on-scroll
    height="130"
  >
      <v-img
          :src="require('../assets/logo.webp')"
          class="col-3"
          contain
          height="50"
      />
      <v-list class="d-flex align-center col-6">
        <v-list-item
            link
            v-for="(menu, index) in menus"
            :key="index"
            :to="menu.route"
        >
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list class="col-3 align-end">
        <v-icon class="justify-end" style="margin-left: 50%;">mdi-facebook</v-icon>
        <v-icon class="justify-end" style="margin-left: 10%;">mdi-twitter</v-icon>
        <v-icon class="justify-end" style="margin-left: 10%;">mdi-instagram</v-icon>
      </v-list>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    menus: [
      { title: "Home", route: "home" },
      { title: "Activities", route: "home" },
      { title: "Retreats", route: "home" },
      { title: "Accommodation", route: "home" },
      { title: "Spirituality", route: "home" },
      { title: "About Us", route: "home" },
      { title: "Contact Us", route: "home" },
    ],
  }),
};
</script>

<style>
.v-toolbar__title {
  font-size: 32px;
  color: #536dfe;
  font-weight: 700;
  
}
.v-list-item__title {
  font-family: "Crimson Pro",serif !important;
  font-size: 18px !important;
  line-height: 1.5em !important;
  font-weight: 500 !important;
}

.v-image__image--contain{
  background-position: left center !important;
  margin-left: 50px;
}
</style>