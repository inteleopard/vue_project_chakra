<template>
  <v-app-bar
    app
    color="white"
    light
    elevation="6"
    elevate-on-scroll
  >
    <v-img
          :src="require('../assets/logo.webp')"
          class=""
          contain
          height="60"
        />
    <v-spacer />
    <v-list class="d-flex align-center">
      <v-list-item
        link
        v-for="(menu, index) in menus"
        :key="index"
        :to="menu.route"
      >
        <v-list-item-title>{{ menu.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-icon></v-icon>
    <v-icon>mdi-facebook</v-icon>
    <v-icon>mdi-twitter</v-icon>
    <v-icon>mdi-dribbble</v-icon>
    <v-icon>mdi-instagram</v-icon>
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
  font-family: cursive;
}
</style>