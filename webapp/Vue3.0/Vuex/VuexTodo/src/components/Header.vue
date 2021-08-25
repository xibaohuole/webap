<!--
 * @Author: your name
 * @Date: 2021-08-18 15:23:03
 * @LastEditTime: 2021-08-24 16:32:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\vue工程化\lk-todo\src\components\Header.vue
-->
<template>
  <div class="todo-header">
    <input
      type="text"
      v-model="inputTitle"
      placeholder="请输入今天的任务清单，按回车键确认"
      @keyup.enter="addTodoItem"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import{useStore} from 'vuex'

// import { ref, inject } from "vue";

let inputTitle = ref("");
const store = useStore();
// const addTodo = inject("addTodo");

const addTodoItem = () => {
  // 1.取出输入框中的内容
  const title = inputTitle.value.trim();
  // 2.数据不能为空
  if (!title) {
    alert("数据不能为空");
    return;
  }

  // 3.创建一个对象
  let todo = { title, ischecked: false };
  console.log(todo);
  //4.添加
  store.dispatch('addTodo', todo)
  // addTodo(todo);
  //5.清空
  inputTitle.value = "";
};

// export default {
//   name: "Header",
//   props: {
//     addTodo: Function,
//   },
//   data() {
//     return {
//       title: "",
//     };
//   },
//   methods: {
//     addTodoItem() {
//       // 1.取出输入框中的内容
//       const title = this.title.trim();
//       // 2.数据不能为空
//       if (!title) {
//         alert("数据不能为空");
//         return;
//       }

//       // 3.创建一个对象
//       let todo = { title, ischecked: false };
//       console.log(todo)
//       //4.添加
//       this.addTodo(todo);
//       //5.清空
//       this.title = ''
//     },
//   },
// };
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  outline: none;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(255, 0, 0, 0.8);
  box-shadow: inset 0 1px 1px rgba(255, 0, 0, 0.075),
    0 0 8px rgba(255, 0, 0, 0.6);
}
</style>