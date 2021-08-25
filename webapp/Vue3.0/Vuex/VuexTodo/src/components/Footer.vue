<!--
 * @Author: your name
 * @Date: 2021-08-18 15:23:03
 * @LastEditTime: 2021-08-24 17:33:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\vue工程化\lk-todo\src\components\Footer.vue
-->
<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isSelectAll" />
    </label>
    <span>
      <span>已完成{{ finishCount }}件</span> / 总计{{ todolistCount}}件
    </span>
    <button class="btn btn-warning" @click="delCheckedItem">
      清除已完成任务
    </button>
  </div>
</template>

<script setup>
// import { inject,computed, ref ,unref} from "vue";
import { computed, ref ,unref} from "vue";
import { useStore } from "vuex";

const store = useStore()
// let todolist = inject("todolist");
// const selectAlltodo = inject("selectAlltodo");
// const delCheckedItem = inject("delCheckedItem");
const delCheckedItem = ()=>{
  store.dispatch('delCheckedItem');
} 
const todolistCount = computed(()=>store.getters.todolistCount)
const finishCount = computed(()=>store.getters.finishCount)
const selectAll = computed(()=>store.getters.selectAll)
// const finishCount = computed(() => {
//   // console.log(store.state.todolist.length)
//   return store.state.todolist.reduce((total, todo) => {
//     console.log(total,todo);
//     return total + (todo.ischecked ? 1 : 0);
//   }, 0);
// });
const isSelectAll = computed(
  {
  get() {
    console.log('get')
    console.log(selectAll)
    return selectAll.value
    // return unref(finishCount) === todolist.length && todolist.length > 0;
  },
  set(value) {
    console.log('set')
    store.dispatch('selectAllTodo',value)
    // selectAlltodo(value);
  },
});

// export default {
//   name: "Footer",
//   props: {
//     todolist:Array,
//     selectAlltodo: Function,
//     delCheckedItem : Function
//   },

//   methods: {

//   },
//   computed:{
//     finishCount(){
//       return this.todolist.reduce((total,todo)=>{
//         return total + (todo.ischecked ? 1 :0)
//       },0)

//     },
//      selectAll: {
//        get(){
//          return this.finishCount === this.todolist.length && this.todolist.length>0
//        },
//        set(value){
//          this.selectAlltodo(value);
//        }
//       // this.ischecked = !this.ischecked;
//     },
//   }
// };
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