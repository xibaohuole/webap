/*
 * @Author: your name
 * @Date: 2021-08-23 15:27:24
 * @LastEditTime: 2021-08-23 16:36:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\Vuex\myVuex\src\store\index.js
 */
// 1.引入
import { createStore } from 'vuex'

// 2.创建一个stroe对象
const store = createStore({
    //启用严格模式 这样就必须按vuex的要求来
    // strict:true,
    //通常写法
    strict:process.env.NODE_ENV !== 'production',
    //全局共享的状态(数据)
    state: {
        counter: 120
    },
    //同步提交状态
    mutations: {
        // +1
        INCREMENT(state) {
            state.counter++
        },
        DECREMENT(state) {
            state.counter--
        },
        SUBASYNC(state){
            state.counter += 100;
        }
    },
    //提出操作（ 可同步可异步）给mutaions
    actions: {
        // +1
        incrment({commit}) {
            commit('INCREMENT')
        },
        //-1
        decrement({commit}) {
            commit('DECREMENT')
        },
        subAsync({commit},num){
            setTimeout(()=>{
                commit('SUBASYNC',num);
            },2000)
        }
    },
    //假设state里面的数据需要处理 那么久走getters 相当于计算属性
    getters: {

    }
})
//导出

export default store