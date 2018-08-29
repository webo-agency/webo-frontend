import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: 'pl-PL',
    messages: {
      'en-GB': {
        example: 'example'
      },
      'pl-PL': {
        example: 'przykład'
      }
    }
  })
}
