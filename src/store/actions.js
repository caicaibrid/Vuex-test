/**
 * Created by sa on 27/05/17.
 */
export default {
  increment({commit},payload){  //{commit} = context= {commit:commit(xxx)}
    commit("increment",payload)
  }
}
