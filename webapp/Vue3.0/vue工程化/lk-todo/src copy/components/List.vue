<!--
 * @Author: your name
 * @Date: 2021-08-18 15:23:04
 * @LastEditTime: 2021-08-19 10:06:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\vue工程化\lk-todo\src\components\List.vue
-->
<template>
  <ul class="todo-main">
    <Item 
    v-for="(todo,index) in todos"
    :key = index
    :todo = todo
    :index = index
    :deltodoItem = deltodoitem
    />
  </ul>
</template>

<script>
// 引入组件
import Item from "./Item.vue";
export default {
  name: "list",
  props:{
    todos:Array,
    deltodoitem:Function
  },
  data() {
    return {};
  },
  components: {
    Item,
  },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>