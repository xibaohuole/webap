<!--
 * @Author: your name
 * @Date: 2021-08-19 15:48:16
 * @LastEditTime: 2021-08-23 10:53:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\vue路由\myRouter\src\App.vue
-->
<template>
  <div>
    <!-- 导航 -->
    <div id="nav">
      <!-- <a href="">Home</a>
      <a href="">Main</a> -->
      <!-- active-class="current" -->
      <!-- <router-link to="/main" replace>首页</router-link>
      <p>-----------------------------------</p>
      <router-link to="/home" replace>家</router-link> -->

      <!-- <router-link to="/main">首页</router-link>
      <p>-----------------------------------</p>
      <router-link to="/home">家</router-link> -->

      <!-- 通过代码进行跳转 -->
      <!-- <button @click="main">首页</button>
      <button @click="home">家</button> -->

      <router-link to="/main">首页</router-link>
      <br />
      <router-link to="/home">家</router-link>
      <br />
      <!-- <router-link to="/news">新闻</router-link> //这里是匹配不到的 因为是动态的 -->
      <!-- 动态路由 可动态路由至页面 页面可通过传过去的动态值 进行之后的操作 那么如何拿到传过去的动态值呢 -->
      <!-- <router-link :to="'/news/' + newsId">新闻</router-link> 
      <br/>
      <router-link :to="{path:'/person',query:{name:'李文轩',age:12}}">人</router-link>  -->

      <!-- 动态路由 通过代码进行跳转 -->
      <button @click="news">新闻</button>
      <br />
      <button @click="person">人</button>
    </div>
    <!-- 路由出口 -->
    <!-- vue2中的写法 -->
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->

    <!-- <router-view v-slot="{Component}">
      <keep-alive include="home">
        <component :is="Component"></component>
      </keep-alive>
    </router-view> -->

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive"></component>
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive"></component>
    </router-view>
  </div>
</template>

<script setup>
//全局路由
import { useRouter } from "vue-router";
import { ref } from "vue";
import router from "./router";
name: "app";
const allRouter = useRouter();
const newsId = ref("lee001");
const home = () => {
  console.log("111");
  router.push("/home");
};
const main = () => {
  router.push("/main");
};

const news = () => {
  allRouter.push("/news/" + newsId.value);
};
const person = () => {
  allRouter.push({ path: "/person", query: { name: "李文轩", age: 12 } });
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* 默认的选择样式 */
.router-link-active {
  font-size: 18px;
  color: gold;
  font-weight: bolder;
}
.current {
  font-size: 18px;
  color: red;
  font-weight: bolder;
}
</style>
