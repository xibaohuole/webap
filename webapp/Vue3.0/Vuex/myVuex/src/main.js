/*
 * @Author: your name
 * @Date: 2021-08-23 15:18:58
 * @LastEditTime: 2021-08-23 15:30:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\Vuex\myVuex\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js';
const app = createApp(App);
app.use(store)
app.mount('#app')