import Vue from 'vue'
import Vuex from 'vuex'
import { GETLOGIN } from './mutations-type'
import { getLogin } from '../api/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     userInfo:{

     }
  },
  mutations: {
     [GETLOGIN]:(state,obj)=>{
          state.userInfo = obj 
     }
  },
  actions: {
    getLogin({commit},{obj,callback}){
       //发请求
       getLogin(obj).then(({data})=>{
           callback&&callback()
           commit('GETLOGIN',data.data)

       })
    }
  }
})
