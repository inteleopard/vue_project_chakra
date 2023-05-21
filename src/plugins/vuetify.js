import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@/assets/fonts/CrimsonPro.css'

Vue.use(Vuetify);

export default new Vuetify({
    themes: {
        light: {
            primary: '#1976D2',
            font: 'Crimson Pro, sans-serif',
        },
    },
});
