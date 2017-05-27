<template>
  <div>
    <router-link :to="'/'" tag="a">首页</router-link>
    <h1>{{counter}}</h1>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: 'share',
  computed:mapState(["counter"])
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
