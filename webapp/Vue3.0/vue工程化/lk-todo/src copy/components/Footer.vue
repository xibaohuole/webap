<!--
 * @Author: your name
 * @Date: 2021-08-18 15:23:03
 * @LastEditTime: 2021-08-19 11:53:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\vue工程化\lk-todo\src\components\Footer.vue
-->
<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="selectAll" />
    </label>
    <span> <span>已完成{{finishCount}}件</span> / 总计{{todolist.length}}件 </span>
    <button class="btn btn-warning" @click="delCheckedItem">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    todolist:Array,
    selectAlltodo: Function,
    delCheckedItem : Function
  },
 
  methods: {
   
  },
  computed:{
    finishCount(){
      return this.todolist.reduce((total,todo)=>{
        return total + (todo.ischecked ? 1 :0)
      },0) 
      
    },
     selectAll: {
       get(){
         return this.finishCount === this.todolist.length && this.todolist.length>0
       },
       set(value){
         this.selectAlltodo(value);
       }
      // this.ischecked = !this.ischecked;
    },
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>