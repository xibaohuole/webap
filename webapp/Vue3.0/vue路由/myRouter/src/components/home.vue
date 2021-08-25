<!--
 * @Author: your name
 * @Date: 2021-08-19 15:57:11
 * @LastEditTime: 2021-08-23 10:20:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\vue路由\myRouter\src\components\home.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-08-19 15:48:16
 * @LastEditTime: 2021-08-19 15:54:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\vue路由\myRouter\src\App.vue
-->
<template>
  <div id="home">
    home页面
    <input type="text" />
  </div>
</template>

<script>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import { onMounted, onUnmounted, onActivated, onDeactivated } from "vue";
// onBeforeRouteLeave((to,form,next)=>{
//     next()
// })
// onBeforeRouteUpdate((to,form,next)=>{
//     next()
// })

// onMounted(() => {
//   console.log('home -----onMounted()' );
// });
// onunmounted(() => {
//   console.log('home -----onunmounted()' );
// });

export default {
  name: "home",
  setup() {
    onActivated(() => {
      console.log("home -----onActivated()");
    });
    onDeactivated(() => {
      console.log("home -----onDeactivated()");
    });
  },
};
</script>

<style>
#home {
  width: 200px;
  height: 500px;
  background-color: cadetblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
