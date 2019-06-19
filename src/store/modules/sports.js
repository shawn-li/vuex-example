import * as types from '../mutations-type';

const nba = {
    state:{
        selectedSports:'',
        selectedCountry:'',
        params: {},
        //请求结果
        queryResult: {
            code: 0,
            msg: ''
        },
        //表格数据
        list:[],
        //表格分页展示数据
        pageList: [],
        pageTotal: 0
    },
    getters:{

    },
    mutations:{
       [types.SET_SPORTS_SELECTED_TYPE](state, selected){
           state.selectedSports = selected
       },
       [types.SET_SPORTS_SELECTED_COUNTRY](state, selected){
            state.selectedCountry = selected
        },
        [types.CLEAR_SPORTS_SELECTED_TYPE](state){
            state.selectedSports = ''
        },
        [types.CLEAR_SPORTS_SELECTED_COUNTRY](state){
            state.selectedCountry = ''
         },
        [types.CLEAR_SPORTS_SELECTED_ALL](state){
            console.log(state)
            state.selectedSports = '';
            state.selectedCountry = '';
        },
        [types.SET_SPORTS_QUERY_PARAMS](state, params){
            state.params = params;
        },
        [types.SET_SPORTS_QUERY_RESULT](state, list){
            state.list = list;
        },
        [types.SET_SPORTS_PAGE_RESULT](state, list){
            state.pageList = list;
        },
        [types.SET_SPORTS_PAGE_TOTAL](state, total){
            state.pageTotal = total;
        },
        [types.CLEAR_SPORTS_QUERY_RESULT](state){
            state.queryResult = {}
        }
    },
    actions:{

    }
}

export default nba;