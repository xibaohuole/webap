<!--
 * @Author: your name
 * @Date: 2021-08-18 15:23:04
 * @LastEditTime: 2021-08-24 14:47:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\vue工程化\lk-todo\src\components\Item.vue
-->
<template>
  <li
    @mouseenter="delshow(true)"
    @mouseleave="delshow(false)"
    :style="{ backgroundColor: bgColor }"
  >
    <label>
      <input type="checkbox" v-model="todo.ischecked"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-warning" v-show="isShow" @click="deletodo">删除</button>
  </li>
</template>

<script>
// import {inject,ref} from 'vue';
import {ref} from 'vue';
import {useStore} from 'vuex'
export default {
  name:'item',
  props:{
    todo:Object,
    index:Number
  },
  setup(props,context){
    const store = useStore()
    // 1.订阅删除方法
    // let delTodoItemWithIndex = inject('delTodoItemWithIndex');

    // 2.定义属性和方法
    //是否显示
    let isShow = ref(false);
    //背景颜色
    let bgColor = ref('#fff');

    const delshow = (isenter)=>{
     isShow.value = isenter;
     bgColor.value = isenter?'#ddd':'#fff'
    }
    const deletodo = ()=>{
      if(window.confirm(`您确定要删除吗？`)){
         store.dispatch('delTodoItemWithIndex', props.index)
      }
    }
    return{
      isShow,
      bgColor,
      delshow,
      deletodo
    }
  },
}
// export default {
//   name:'item',
//   data(){
//     return{
//       isShow :false,
//       bgColor :'#fff'
//     }
//   },
//   props:{
//     todo:Object,
//     deltodoItem:Function,
//     index:Number
//   },methods:{
//     delshow(isenter){
//      this.isShow = isenter;
//      this.bgColor = isenter?'#ddd':'#fff'
//     },
//     deletodoitem(){
//       if(window.confirm(`您确定要删除吗？`)){
//         this.deltodoItem(this.index);
//       }
//     }
//   }
// }
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
  line-height: 14px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>