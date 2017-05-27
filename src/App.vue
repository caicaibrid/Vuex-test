<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <router-link tag="a" :to="'/share'">共享状态counter</router-link>
    <button v-on:click="increment">click</button>
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from "vuex"
export default {
  name: 'app',
  computed:mapState(["counter"]),
  methods:{
      /*
      *触发action来提交mutations
      *
      * increment(){  //方式一： 通过dispatch触发actiion
       this.$store.dispatch("increment",{
        name:this.$store.state.counter,
        age:2
       })
       },
       ...mapActions(["increment"]) //方式二： 通过mapActions 出发action
      *
      *
      *
      * */
    ...mapActions(["increment"])
    /*
    *直接出发mutations 修改state
    * ...mapMutations(["increment"]) //方式三：组件直接触发mutations
    *
    increment(){
        this.$store.commit("increment",{
          name:this.$store.state.counter,
          age:2
        })
    }
    */
    /*
    * mapActions  mapMutations 触发action和mutation 第二个参数为点击事件类型
    * */
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
