<template>
  <v-container class="pt-15">
    <v-row>
      <v-col lg="6">
        <h2 class="intro-text">Welcome To Fajar Corp</h2>
        <p class="description-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quia
          atque perferendis laboriosam. Rem, dicta. Inventore alias temporibus
          repudiandae, quia mollitia itaque obcaecati dolorem suscipit,
          explicabo voluptas repellendus, asperiores hic?
        </p>
        <v-btn color="success mr-10" class="white--text" rounded
          >Get Started</v-btn
        >
        <v-btn color="indigo" class="white--text" rounded>
          <v-icon>mdi-play-circle</v-icon> Watch Video
        </v-btn>
      </v-col>
      <v-col lg="6">
        <img
          src="./../assets/undraw_Work_time_re_hdyv.png"
          alt="teamwork"
          width="100%"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.intro-text {
  font-size: 60px;
  font-weight: bold;
  font-family: cursive;
  color: #444;
}
.description-text {
  font-size: 19px;
  font-family: cursive;
  margin: 32px 0;
  color: #4444ba;
}
</style>