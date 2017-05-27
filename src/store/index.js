/**
 * Created by sa on 27/05/17.
 */
import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"
import actions from "./actions"
import getter from "./getter"

Vue.use(Vuex)

const state = {
  counter:10
};
export default new Vuex.Store({
  state,
  getter,
  actions,
  mutations
})
