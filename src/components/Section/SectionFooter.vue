<template>
  <v-footer padless>
    <v-col lg="12">
      <v-row justify="center">
        <v-col lg="4" class="text-center">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 black--text"
              icon
            >
              <v-icon>{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>
          <v-subheader
            >Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quasi repellat nihil consectetur ipsum adipisci hic
            aspernatur corporis temporibus? Dolorum?
          </v-subheader>
          <v-form class="mt-4">
            <v-text-field label="Email" outlined dense />
            <v-btn rounded color="success">Subcribe us</v-btn>
          </v-form>
        </v-col>
      </v-row>
      <div class="mt-10">
        <v-divider></v-divider>
        <v-subheader>
          &copy; Fajar Coorp. All Rights Reserved
          {{ new Date().getFullYear() }} —
          <strong>Vuetify</strong>
          <v-spacer />
          <strong>Designed by Fajar Siagian</strong>
        </v-subheader>
      </div>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style scoped>
</style>