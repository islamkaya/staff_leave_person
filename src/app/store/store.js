import { createStore } from "vuex";

const store = createStore({
  state: {
    userToken: String,
    saltkey: "ogzatech123!*-/__"
  },
  mutations: {
    setUserToken(state, data) {
      state.userToken = data;
    },
  },
  getters: {
    userToken: (state) => state.userToken,
    _saltKey : state => state.saltkey
  },
  actions: {},
});

export default store;
