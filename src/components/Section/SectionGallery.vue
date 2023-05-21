<template>
  <v-container class="my-15">
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center">Gallery</v-subheader>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          temporibus consequuntur! Autem officia et quam molestias in molestiae
          totam pariatur numquam consequuntur? Natus sapiente unde quaerat alias
          numquam corrupti nulla.
        </p>
      </v-col>
      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="2">
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>