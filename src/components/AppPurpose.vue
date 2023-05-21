<template>
  <v-responsive>
    <v-sheet
        border="md"
        class="pa-6 text-white mx-auto"
        max-width="1200"
    >
      <h6 class="mb-4 text-center">OUR PURPOSE</h6>

      <h1 class="mb-8 text-center text-family">
        We are helping people to find
        <br>
        love and courage in their hearts to live with
        <br>
        dignity and <span class="text-decoration-underline">{{ letters }}</span>.
      </h1>

      <h5 class="text-h5 font-weight-bold text-center">Piter Bowman</h5>
      <h5 class="text-h5 text-center">Community Leader</h5>
    </v-sheet>
  </v-responsive>
</template>

<script>
export default {
  name: "AppPurpose",
  data() {
    return {
      letters : {
        myLetters : ''
      }
    }
  },
  mounted() {
    const letters =['v', 'i', 'c', 't', 'o', 'r', 'y'];
    let index = 0;
    setInterval(() => {
      if (index === letters.length) {
          this.letters = '';
          index = 0;
      }
      this.letters = this.letters + letters[index];
      index++;
    }, 200)
  }

}
</script>

<style scoped>
  .text-family{
    font-family: "Crimson Pro","serif" !important;
    font-size: 3.35em !important;
    font-weight: 400 !important;
  }
</style>