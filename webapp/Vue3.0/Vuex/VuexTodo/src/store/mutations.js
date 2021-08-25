/*
 * @Author: your name
 * @Date: 2021-08-24 09:07:19
 * @LastEditTime: 2021-08-24 15:00:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\Vuex\VuexTodo\src\store\mutaions.js
 */
import {
    ADD_TODO,
    DEL_TODO_ITEM_WITH_INDEX,
    DEL_CHECKED_ITEM,
    SELECT_ALL_TODO
} from './mutations-type.js'

export default {
    //1.添加选项
    [ADD_TODO](state,{todo}){
        state.todolist.unshift(todo);
    },
    //2.删除选项
    [DEL_TODO_ITEM_WITH_INDEX](state,{index}){
        state.todolist.splice(index, 1);
    },
    //3.是否全选
    [SELECT_ALL_TODO](state,{isAllCheck}){
        state.todolist.forEach((todo) => {
            todo.ischecked = isAllCheck;
          });
    },
    //4.删除选中选项
    [DEL_CHECKED_ITEM](state){
        for (let i = state.todolist.length - 1 ;  i>=0 ; i--) {
            if(state.todolist[i].ischecked){
                state.todolist.splice(i,1);
            }
          }
    }
}