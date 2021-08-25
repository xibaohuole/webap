/*
 * @Author: your name
 * @Date: 2021-08-24 09:02:24
 * @LastEditTime: 2021-08-25 10:33:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\Vuex\VuexTodo\src\store\store.js
 */
import { createStore } from 'vuex'
// import state from './state.js'
import state from '../store/state.js'
import getters from '../store/getters.js'
import mutations from '../store/mutations.js'
import actions from '../store/actions.js'
// import mutations_type from './mutations-type.js'

const moduleA = () = >{
    state:()=>({
        name:'lee'
    }),
    mutations:{

    },
    actions:{

    },
    getters:{

    }
}


const store = createStore({
    state,
    getters,
    mutations,
    getters,
    actions,
    modules:{
        // a : moduleA
    }
})

export default store