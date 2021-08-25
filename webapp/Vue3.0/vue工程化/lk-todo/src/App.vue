<!--
 * @Author: your name
 * @Date: 2021-08-18 15:23:03
 * @LastEditTime: 2021-08-19 15:01:01
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

<script>
// 1. 引入组件
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import { reactive, provide, readonly } from "vue";

export default {
  setup() {
    //定义数据
    let todolist = reactive([
      { title: "选项一", ischecked: false },
      { title: "选项二", ischecked: false },
      { title: "选项三", ischecked: false },
      { title: "选项四", ischecked: false },
      { title: "选项五", ischecked: false },
      { title: "选项六", ischecked: false },
    ]);

    //提供给子组件使用的方法
    const delTodoItemWithIndex = (index) => {
      todolist.splice(index, 1);
    };

    //增加顶部项
    const addTodo = (todo) => {
      todolist.unshift(todo);
    };
    //全选和取消全选
    const selectAlltodo = (isAllCheck) => {
      todolist.forEach((todo) => {
        todo.ischecked = isAllCheck;
      });
    };
    //删除已经完成的项目
    //发现没有作用 因为这里filter过滤出来是一个新组数 不带响应式的
    const delCheckedItem = () => {
      // todolist = todolist.filter((todo) => {
      //   return !todo.ischecked;
      // });

      for (let i = todolist.length - 1 ;  i>=0 ; i--) {
        if(todolist[i].ischecked){
          todolist.splice(i,1);
        }
      }
    };

    //发布
    provide("todolist", todolist);
    provide("delTodoItemWithIndex", delTodoItemWithIndex);
    provide("addTodo", addTodo);
    provide("selectAlltodo", selectAlltodo);
    provide("delCheckedItem", delCheckedItem);
  },
  components: {
    Header,
    List,
    Footer,
  },
};
// export default {
//   name: "app",
//   data() {
//     return {
//       todolist: [
//         { title: "选项一", ischecked: false },
//         { title: "选项二", ischecked: false },
//         { title: "选项三", ischecked: false },
//         { title: "选项四", ischecked: false },
//         { title: "选项五", ischecked: false },
//         { title: "选项六", ischecked: false },
//       ],
//     };
//   },
//   methods: {
//     //删除 传入index项目
//     delTodoItemWithIndex(index) {
//       this.todolist.splice(index, 1);
//     },
//     //增加顶部项
//     addTodo(todo) {
//       this.todolist.unshift(todo);
//     },
//     //全选和取消全选
//     selectAlltodo(isAllCheck) {
//         this.todolist.forEach((todo) => {
//           todo.ischecked = isAllCheck;
//         });
//     },
//     //删除已经完成的项目
//     delCheckedItem(){
//       this.todolist = this.todolist.filter((todo)=>{
//         return !todo.ischecked
//       })
//     }
//   },
//   components: {
//     Header,
//     List,
//     Footer,
//   },
// };
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
