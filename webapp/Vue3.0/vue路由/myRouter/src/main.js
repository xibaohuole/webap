/*
 * @Author: your name
 * @Date: 2021-08-19 15:48:16
 * @LastEditTime: 2021-08-20 10:44:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\vue路由\myRouter\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
//引入路由
import router from './router/index.js'

const app = createApp(App);
//使用路由
app.use(router);
app.mount('#app');

