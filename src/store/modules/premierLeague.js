import * as types from '../mutations-type';

const premierLeague = {
    state:{
        player:{}
    },
    getters:{

    },
    mutations:{
        [types.SET_PREMIER_LEAGUE_PLAYER](state, obj){
            state.player = obj;
        },
    },
    actions:{

    }
}

export default premierLeague;