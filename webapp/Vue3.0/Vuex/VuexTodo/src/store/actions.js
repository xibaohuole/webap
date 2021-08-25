/*
 * @Author: your name
 * @Date: 2021-08-24 09:07:19
 * @LastEditTime: 2021-08-24 16:54:59
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
    addTodo(context,todo){
        console.log(context)
       context.commit(ADD_TODO,{todo})
    },
    //2.删除选项
    delTodoItemWithIndex({commit},index){
        commit(DEL_TODO_ITEM_WITH_INDEX,{index})
    },
    //3.是否全选
    selectAllTodo({commit},isAllCheck){
        commit(SELECT_ALL_TODO,{isAllCheck})
    },
    //4.删除选中选项
    delCheckedItem({commit}){
        console.log('删除')
        commit(DEL_CHECKED_ITEM)
    }
}