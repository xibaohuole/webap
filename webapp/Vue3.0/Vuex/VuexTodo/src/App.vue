<!--
 * @Author: your name
 * @Date: 2021-08-18 15:23:03
 * @LastEditTime: 2021-08-24 14:02:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\vue工程化\lk-todo\src\App.vue
-->
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- old -->
      <!-- 头部 -->
      <!-- <Header :addTodo="addTodo" /> -->
      <!-- 列表 -->
      <!-- <List :todos="todolist" :deltodoitem="delTodoItemWithIndex" /> -->
      <!-- 尾部 -->
      <!-- <Footer
        :selectAlltodo="selectAlltodo"
        :todolist="todolist"
        :delCheckedItem="delCheckedItem"
      /> -->

      <!-- new -->
      <!-- 头部 -->
      <Header/>
      <!-- 列表 -->
      <List />
      <!-- 尾部 -->
      <Footer/>
    </div>
  </div>
</template>

<script setup>
// 1. 引入组件
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
.btn {
  display: inline-block;
  padding: 8px 10px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-warning {
  color: #fff;
  background-color: orange;
  border: none;
}

.btn-warning:hover {
  color: #fff;
  background-color: red;
}

.btn:focus {
  outline: none;
}

/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
