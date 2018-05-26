import Vue from 'vue'
import VueResource from 'vue-resource'
import VueTranslate from 'vue-translate-plugin'
import store from './../src/state/index'
import VueStripeCheckout from 'vue-stripe-checkout'

Vue.use(VueResource)
Vue.use(VueTranslate)

const options = {
  key: 'pk_test_YwwFFUpskxZbjMNL5k12llgi',
  image: 'https://image.ibb.co/dv67Y8/upnextlogo.png',
  locale: 'auto',
  currency: 'USD',
  billingAddress: true,
  panelLabel: 'Subscribe {{amount}}'
}
Vue.use(VueStripeCheckout, options)

const LocaleMixin = {
  computed: {
    locale: {
      get () {
        return this.$store.state.locale
      },

      set (locale) {
        this.$store.commit('SET_LOCALE', locale)
      }
    }
  },

  watch: {
    locale () {
      this.$translate.setLang(this.locale)
    }
  }
}

export {
  Vue,
  store,
  LocaleMixin
}
