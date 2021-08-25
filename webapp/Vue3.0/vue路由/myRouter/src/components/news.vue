<!--
 * @Author: your name
 * @Date: 2021-08-20 09:26:49
 * @LastEditTime: 2021-08-23 10:00:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\vue路由\myRouter\src\components\news.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-08-19 15:57:11
 * @LastEditTime: 2021-08-19 16:00:45
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
// 拿到路由参数的具体方法有两种
//第一种是 $route.params.
//第二种是通过 import {useRoute} from 'vue-router'
<template>
  <div id="news">
      <p>新闻详情</p>
      <p>新闻的id：{{$route.params.id}}</p>
      <input type="text">
  </div>
</template>

<script setup>
    import {useRoute} from 'vue-router'
    name:'news';
    const currentRote = useRoute();
    console.log(currentRote.params.id);
</script>

<style>
#news {
    width: 200px;
    height: 500px;
    background-color: seagreen;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
