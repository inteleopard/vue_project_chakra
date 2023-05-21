<template>
  <v-container class="my-15">
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center">Project</v-subheader>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
          voluptas accusamus quod maiores non sequi quisquam vero illum, eum
          iure aspernatur temporibus eveniet vitae ea ipsam nihil vel atque
          tempore?
        </p>
      </v-col>

      <v-col lg="4" v-for="project in 3" :key="project">
        <v-card class="mx-auto my-12" max-width="374">
          <v-img
            height="250"
            src="https://cdn.dribbble.com/users/1853242/screenshots/16429192/media/7f118765181bfba3fda88aabeb7fa22a.png?compress=1&resize=1200x900&vertical=top"
          ></v-img>
          <v-card-title>Project 1</v-card-title>
          <v-card-text>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              veritatis aspernatur quidem ab doloremque
            </div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="success" rounded>View Details</v-btn>
            <v-spacer />
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>