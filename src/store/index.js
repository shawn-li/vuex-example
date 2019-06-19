import Vue from 'vue'
import Vuex from 'vuex'
import nba from './modules/nba';
import sports from './modules/sports'
import premierLeague from './modules/premierLeague'

/** 基础store **/
let initStore = {
    modules: {
        nba,
        sports,
        premierLeague
    },
    state: {
        // 初始化状态
        count: 10,
        params:{},
        settings:{},
        //导航切换界面
        pageFlag:{
            nba: false,
            premierLeague: false,
            sports: false
        },
    },
    mutations: {
        setParams(state, payload){
            state.params = payload.params
        },
        setSettings(state, payload){
            state.settings = payload.settings
        },
        setPageFlag(state, pageFlag){
            state.pageFlag = pageFlag
        }
    },
    actions: {
        increase({commit, state}){
          commit('increment',{
            step: 5
          })
          alert(state.count);
        },
        changePageFlag(context, type){
            let o = context.state.pageFlag;
            Object.keys(o).forEach((key, value) => {
                o[key] = false;
            })
            
            o[type] = true;
            context.commit('setPageFlag', o);
        },
        
        //例
        incrementStep({state, commit, rootState}) {
            if (rootState.count < 100) {
                store.dispatch('increment', {//调用increment()方法
                    step: 10
                })
            }
        }
    },
    getters: {
        //处理列表项
        someLists: state =>param=> {
            return state.someLists.filter(() => param.done)
        }
    }
}

Vue.use(Vuex)
export default new Vuex.Store(initStore);
