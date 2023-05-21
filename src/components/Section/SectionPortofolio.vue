<template>
  <v-container class="my-15">
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center">Portofolio</v-subheader>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          omnis fugit porro saepe voluptatem ullam dignissimos aliquid sapiente
          eveniet amet, illum magnam animi nostrum expedita beatae, dicta
          laboriosam, error numquam.
        </p>
      </v-col>
      <v-col lg="12">
        <div class="text-center">
          <v-chip
            @click="activePortofolio = 'web'"
            :color="activePortofolio === 'web' ? 'success' : ''"
            class="mx-5"
            >Web App</v-chip
          >
          <v-chip
            @click="activePortofolio = 'mobile'"
            :color="activePortofolio === 'mobile' ? 'success' : ''"
            class="mx-5"
            >Moble App</v-chip
          >
          <v-chip
            @click="activePortofolio = 'desktop'"
            :color="activePortofolio === 'desktop' ? 'success' : ''"
            class="mx-5"
            >Desktop App</v-chip
          >
        </div>
      </v-col>
      <slot v-if="activePortofolio === 'web'">
        <v-col lg="3" v-for="(web, index) in webs" :key="index">
          <v-card>
            <v-img
              :src="web.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ web.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
      <slot v-if="activePortofolio === 'mobile'">
        <v-col lg="3" v-for="(mobile, index) in mobiles" :key="index">
          <v-card>
            <v-img
              :src="mobile.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ mobile.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
      <slot v-if="activePortofolio === 'desktop'">
        <v-col lg="3" v-for="(desktop, index) in desktops" :key="index">
          <v-card>
            <v-img
              :src="desktop.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ desktop.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    activePortofolio: "web",
    webs: [
      {
        title: "Web App 1",
        image:
          "https://cdn.dribbble.com/users/1392449/screenshots/17510371/media/66859b0f970b819b8bc76496860b37ea.png?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "Web App 2",
        image:
          "https://cdn.dribbble.com/users/4214551/screenshots/17480435/media/477fe1a32bbaed563de69c66eb71e160.jpg?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "web app 3",
        image:
          "https://cdn.dribbble.com/users/2192909/screenshots/17444235/media/e4ff8b25195e7d63926cd6a5e5645e52.png?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "web app 4",
        image:
          "https://cdn.dribbble.com/users/1392449/screenshots/17403673/media/26627505f9925a631b19cfe59236130a.png?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "web app 5",
        image:
          "https://cdn.dribbble.com/users/1392449/screenshots/17365401/media/64d808d05656185caf8c99b1a70829c8.png?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "web app 6",
        image:
          "https://cdn.dribbble.com/users/1392449/screenshots/17306221/media/b1d96635dc5cdca5141d5d4d0b7a1c8e.png?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "web app 7",
        image:
          "https://cdn.dribbble.com/users/756714/screenshots/17298031/media/c5e01235c8110f13d5bccd5606c95187.png?compress=1&resize=1200x900&vertical=top",
      },
    ],
    mobiles: [
      {
        title: "mobile 1",
        image:
          "https://cdn.dribbble.com/users/1963775/screenshots/17532775/media/2d9c81bc9dab3501cd5d784cbb207372.png?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "mobile 2",
        image:
          "https://cdn.dribbble.com/users/903897/screenshots/17527964/media/2d69d20213473df55da5656097d1b58f.png?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "mobile 3",
        image:
          "https://cdn.dribbble.com/users/12748/screenshots/17520423/media/dce166392607645db58aeecb51ab3210.png?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "mobile 4",
        image:
          "https://cdn.dribbble.com/users/4859/screenshots/17467711/media/16ea8281b07d30ad7372aea98034fb46.png?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "mobile 5",
        image:
          "https://cdn.dribbble.com/users/4573082/screenshots/17439563/media/78a6dbc22ef88f8cf54be50cdf1c9f6c.png?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "mobile 6",
        image:
          "https://cdn.dribbble.com/users/702789/screenshots/17411469/media/b5c8678cf80424caaea7fac55aa894e5.png?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "mobile 7",
        image:
          "https://cdn.dribbble.com/users/485324/screenshots/17398333/media/947eadd27fcfda19b863ec17285dd743.png?compress=1&resize=1200x900&vertical=top",
      },
    ],
    desktops: [
      {
        title: "Desktop 1",
        image:
          "https://cdn.dribbble.com/users/2153376/screenshots/17439265/media/abe260b2726eeb829c0ca12adb614729.jpg?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "Desktop 2",
        image:
          "https://cdn.dribbble.com/users/2153376/screenshots/17045938/media/83d30c64655ac96e2c0c6ecc59b1affc.jpg?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "Desktop 3",
        image:
          "https://cdn.dribbble.com/users/2153376/screenshots/17009268/media/a02deefdff7cb25082ba9bb5cad9ff2d.jpg?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "Desktop 4",
        image:
          "https://cdn.dribbble.com/users/1544818/screenshots/17465031/media/5ed53a1cc8c34149befacf87dd1227ae.png?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "Desktop 5",
        image:
          "https://cdn.dribbble.com/users/1690682/screenshots/17394813/media/260d34f6834d4a08d95f0bb863c21cfe.png?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "Desktop 6",
        image:
          "https://cdn.dribbble.com/users/33073/screenshots/14990549/media/22ee6d46f3261a736b7d2d9f846c70d1.png?compress=1&resize=1200x900&vertical=top",
      },
      {
        title: "Desktop 7",
        image:
          "https://cdn.dribbble.com/users/2271410/screenshots/15149633/media/71ef435c57342f9c84d936dfd6ffcb85.png?compress=1&resize=1200x900&vertical=top",
      },
    ],
  }),
};
</script>

<style scoped>
</style>