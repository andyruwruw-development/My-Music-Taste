import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        'grey-8': '#FFFFFF',
        'grey-7': '#A9AAAD',
        'grey-6': '#848B93',
        'grey-5': '#6E6E74',
        'grey-4': '#444D56',
        'grey-3': '#3B434C',
        'grey-2': '#2F363D',
        'grey-1': '#24292E',
        'turquoise-4': '#70C2B5',
        'turquoise-3': '#52E3C2',
        'turquoise-2': '#31AE84',
        'turquoise-1': '#43675B',
        'warm-6': '#FBC156',
        'warm-5': '#F7A46D',
        'warm-4': '#F79388',
        'warm-3': '#F1839C',
        'warm-2': '#E85AC6',
        'warm-1': '#AB4D7C',
        'purple-6': '#7C37F4',
        'purple-5': '#5F00E7',
        'purple-4': '#5400E2',
        'purple-3': '#3500AE',
        'purple-2': '#2F0098',
        'purple-1': '#220367',
        'blue-1': '#40C4FF',
        'orange-1': '#C07A2C',
      },
    },
    options: {
      customProperties: true,
    },
  },
});
