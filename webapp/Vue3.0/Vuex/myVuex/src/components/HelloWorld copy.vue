<!--
 * @Author: your name
 * @Date: 2021-08-23 15:18:58
 * @LastEditTime: 2021-08-23 16:36:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\Vuex\myVuex\src\components\HelloWorld.vue
-->
<template>
  <div>
    <p>---------------其它页面--------------</p>
    <h3>其它页面{{ $store.state.counter }}</h3>
    <p>---------------其它页面--------------</p>
    <button type="reset" @click="addVaule()">+1</button>
    <button type="reset" @click="subVaule()">-1</button>
    <button type="reset" @click="sub100(100)">加100</button>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import { useStore } from "vuex";
let myStore = useStore();
let addVaule = () => {
  // myStore.state.counter ++ 没有遵从vuex的单向数据流 使用会导致异常
  // myStore.dispatch('incrment');
  //异步流程 actions ---> mutations ---> state
  //同步流程 mutations ---> state
  myStore.commit('INCREMENT')
};
let subVaule = () => {
  // myStore.state.counter -- 没有遵从vuex的单向数据流 使用会导致异常
  // 异步
  // myStore.dispatch('decrement');
  //同步
  myStore.commit('DECREMENT')
};

let sub100 = (num) => {
 myStore.dispatch('subAsync',num); 
}
defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
