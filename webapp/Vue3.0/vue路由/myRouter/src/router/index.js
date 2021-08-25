/*
 * @Author: your name
 * @Date: 2021-08-19 16:02:25
 * @LastEditTime: 2021-08-23 10:49:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\vue路由\myRouter\src\router\index.js
 */
//1.引入
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// import Main from './../components/main.vue'
import MainMsg from './../components/mainMsg.vue'
import MainOrder from './../components/mainOrder.vue'
// 1.路由懒加载的写法一
const Main = () => import('./../components/main.vue')
const Home = () => import('./../components/home.vue')
const News = () => import('./../components/news.vue')
const Person = () => import('./../components/person.vue')
// const MainMsg = ()=>import('./../components/mainMsg.vue')
// const MainOrder = ()=>import('./../components/mainOrder.vue')
// 2.路由懒加载写法二
// const routes = [
//     //路由的重定向
//     {path:'/',redirect:'/home'},
//     { path: '/home', component:  ()=>import('./../components/Home.vue') ,
//     { path: '/main', component: ()=>import('./../components/main.vue') ,
//     { path: '/news/:id', component: ()=>import('./../components/news.vue') ,
// ]


//2.创建路由对象映射表
const routes = [
    //路由的重定向
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home, meta: { title: '家' ,keepAlive :true}},
    {
        path: '/main',
        component: Main,
        children: [
            { path: '/main', redirect: '/main/msg' },
            { path: 'msg', component: MainMsg, meta: { title: '消息' } },
            { path: 'order', component: MainOrder, meta: { title: '订单' } },
        ],
        meta: { title: '主页' },
        //局部独享守卫
        beforeEach:((to, from) => {
            // document.title = to.meta.title;
        })
    },
    { path: '/news/:id', component: News, meta: { title: '新闻' } },
    { path: '/person', component: Person, meta: { title: '人' } },
]

const router = createRouter({
    //路由模式选择 有hash和history模式
    // hashchange事件之会看#后面的内容
    history: createWebHashHistory(),
    // history会重新请求地址 可能会发生页面丢失
    // history:createWebHistory(),

    //路由映射表
    routes,
    //默认选中样式
    // linkActiveClass:'current',
})

//全局路由的前置守卫
router.beforeEach((to, from, next) => {
    // console.log('从哪里来:', from)
    // console.log('到哪里去:', to)
    // document.title = to.meta.title;
    //放行
    next();
})
//全局路由的后置守卫
router.afterEach((to, from) => {
    document.title = to.meta.title;
})
// 3.导出路由对象
export default router;
