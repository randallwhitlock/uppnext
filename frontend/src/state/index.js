import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/user.module'
import events from './events/events.module'
import groups from './groups/groups.module'
Vue.use(Vuex)

const getCookie = name => {
  let a = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`)
  return a ? a[1] : ''
}

export default new Vuex.Store({
  modules: {
    User: user,
    Events: events,
    Groups: groups
  },

  state: {
    locale: 'en',
    isUserAuthenticated: !!getCookie('user'),
    isAdmin: !!getCookie('isAdmin'),
    isHelpVisible: false
  },

  mutations: {
    SET_IS_USER_AUTHENTICATED (state, isUserAuthenticated) {
      state.isUserAuthenticated = isUserAuthenticated
    },

    SET_IS_ADMIN (state, isAdmin) {
      state.isAdmin = isAdmin
    },

    SET_LOCALE (state, locale) {
      state.locale = locale
    },

    SET_IS_HELP_VISIBLE (state, isHelpVisible) {
      state.isHelpVisible = isHelpVisible
    }
  }
})
