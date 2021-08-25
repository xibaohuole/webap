<!--
 * @Author: your name
 * @Date: 2021-08-19 15:57:11
 * @LastEditTime: 2021-08-20 14:09:27
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
  <div id="person">
   person页面
   <div>{{$route.query}}</div>
   <div>{{$route.query.name}}</div>
   <div>{{$route.query.age}}</div>
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
name:'person';
let route = useRoute();
console.log(route.query);

</script>

<style>
#person {
    width: 200px;
    height: 500px;
    background-color: beige;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
