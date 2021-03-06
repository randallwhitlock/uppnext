import {mapMutations} from 'vuex'

export default {
  data () {
    return {
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: {
    user: {
      get () {
        return this.$store.state.User.user
      }
    },

    email: {
      get () {
        return this.$store.state.User.user.email
      },

      set (email) {
        this
          .$store
          .commit('SET_USER_EMAIL', email)
      }
    },

    password: {
      get () {
        return this.$store.state.User.user.password
      },

      set (password) {
        this
          .$store
          .commit('SET_USER_PASSWORD', password)
      }
    }
  },

  methods: {
    async login () {
      let {token, cookie} = await this
        .$store
        .dispatch('loginUser', this.user)

      window
        .localStorage
        .setItem('token', token)
      window
        .localStorage
        .setItem('email', this.email)
      this.setCookie('user', cookie, 3600 * 24 * 7)
      this.setIsUserAuthenticated(true)

      this
        .$router
        .push({name: 'AdminEventCreate'})
    },

    setCookie (name, value, seconds) {
      const expires = seconds
        ? '; expires=' + new Date(new Date().getTime() + seconds * 1000).toGMTString()
        : ''
      document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/'
    },
    ...mapMutations({setIsUserAuthenticated: 'SET_IS_USER_AUTHENTICATED'})
  }
}
