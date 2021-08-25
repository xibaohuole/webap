<!--
 * @Author: your name
 * @Date: 2021-08-19 16:00:27
 * @LastEditTime: 2021-08-23 09:43:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\vue路由\myRouter\src\components\main.vue
-->

<template>
  <div id="main">
    <h2>我的</h2>
    <div class="content">
      <div class="content-nav">
        <router-link class="content-msg" to="/main/msg">我的消息</router-link>
        <br/>
        <router-link class="content-oder" to="/main/order">我的订单</router-link>
        <br/>
      </div>
      <router-view class="content-list"></router-view>
    </div>
  </div>
</template>

<script setup>
    import {onMounted,onUnmounted,onActivated,onDeactivated} from 'vue'
    name:'main';

    onActivated(() => {
      console.log('main -----onActivated()' );
    });
    onDeactivated(() => {
      console.log('main -----onDeactivated()' );
    });
</script>

<style>
#main {
  width: 400px;
  height: 500px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  display: flex;
}
.content-nav {
  widows: 100px;
}
.content-list{
 flex: 1;
}
</style>
