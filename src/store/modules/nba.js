import * as types from '../mutations-type';

const nba = {
    state:{
        nbaTeamList:[]
    },
    getters:{

    },
    mutations:{
        [types.SET_NBA_TEAM_LIST](state, list){
            state.nbaTeamList = list;
        },
    },
    actions:{

    }
}

export default nba;