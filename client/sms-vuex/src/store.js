import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    messges: "",
    result: "",
  },
  getters: {
    getsend(state) {
      return state.messges;
    }
    // messages(state) {
    //   return;
    // }
  },
  mutations: {
    newSend: (state, payload) => {
      state.messges.push(payload);
    }
  },
  actions: {
    newSend({
      commit
    }, payload) {
      axios({
        'method': 'get',
        'url': `https://sms.ru/sms/send?api_id=e5a2f0a4-f5d8-1f64-714f-10c57ec5ff9c&to=${payload.telephone}&msg=${payload.messages}&json=1`
      }).then(res => {
        if (res == true) {
          console.log("1")
        }
      })

      commit('newSend', payload);

    }
  }
});