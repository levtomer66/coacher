const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    auth: null,
  }
}
export const mutations = {
  setAuth (state, auth) {
    state.auth = auth
  }
}
export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let auth = null
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
          console.log(parsed.blogsiteToken);
           auth = parsed.blogsiteToken
      } catch (err) {
        console.error(err);
      }
    }
    commit('setAuth', auth)
  }
}
