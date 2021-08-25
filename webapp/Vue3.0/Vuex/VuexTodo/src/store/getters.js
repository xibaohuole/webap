/*
 * @Author: your name
 * @Date: 2021-08-24 09:07:05
 * @LastEditTime: 2021-08-24 16:29:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\Vuex\VuexTodo\src\store\getters.js
 */
export default {
    // 1.todo的总数量
    todolistCount(state) {
        return state.todolist.length;

    },
        // 2.已经完成的todo数量
    finishCount(state) {
        return state.todolist.reduce((total, todo) => {
            return total + (todo.ischecked ? 1 : 0);
        }, 0)
    },
        // 3.是否全选
    selectAll(state, getters) {
        return getters.finishCount === state.todolist.length && state.todolist.length > 0;
    }
}