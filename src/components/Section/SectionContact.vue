<template>
  <v-container class="my-15">
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center">Contact Us</v-subheader>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </v-col>
      <v-col lg="6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.965030503643!2d98.73246326529546!3d3.595490497383559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30313139834532ad%3A0x3525a16ce231639b!2sTembung%2C%20Kec.%20Medan%20Tembung%2C%20Kota%20Medan%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1645189560477!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </v-col>
      <v-col lg="6"
        ><v-form ref="form">
          <v-text-field
            v-model="contactInfo.name"
            :counter="10"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="contactInfo.email"
            label="E-mail"
            required
          ></v-text-field>

          <v-textarea
            label="Massage"
            v-model="contactInfo.message"
          ></v-textarea>

          <v-btn color="success" class="mr-4"> Send </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    contactInfo: { name: "", email: "", message: "" },
  }),
};
</script>

<style>
</style>