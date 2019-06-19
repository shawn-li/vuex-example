import finBdInfluenDomain  from '../../../domain/preVouterModule/finBdInfluen/finBdInfluenDomain';
import finBdArcInfluenDomain  from '../../../domain/preVouterModule/finBdInfluen/finBdArcInfluenDomain';
import finBdInfluenService from "../../../service/preVouterModule/finBdInfluen/finBdInfluenService";


//导入对应的Domain实体 和service

const FinBdInfluenStore = {
  state:{
    domain: finBdInfluenDomain,
    domainData: GoingUtils.getJsonDomain(finBdInfluenDomain),
    domainObj: GoingUtils.getDomainObj(finBdInfluenDomain),
    mainTitle: '自定义影响因素',
    gridConfig:{
      queryUrl:"/gfyjhs-server/finBdInfluen/readAll",
      colOrderNum:true,
      colSelBox:true,
      fieldAry:finBdInfluenDomain
  },

    subTitle:'自定义影响因素档案表',
    subDomain:finBdArcInfluenDomain,
    domainDataSub: GoingUtils.getJsonDomain(finBdArcInfluenDomain),
    domainObjSub: GoingUtils.getDomainObj(finBdArcInfluenDomain),
    subConfig:{
      // queryUrl:"/gfyjhs-server/customInfluencingFactorsRecord/read_All",
      colOrderNum:true,
      colSelBox:true,
      fieldAry:finBdArcInfluenDomain
    },
},
  mutations: {
    //清空相应的值
    [$M('CLEAR_DATA','FinBdInfluenStore')](state) {
      state.domainData = {...GoingUtils.getJsonDomain(finBdInfluenDomain)};
      state.modFlag=false;
    },
    //清空相应的值
    [$M('CLEAR_SUB_DATA','FinBdInfluenStore')](state) {
      state.domainDataSub = {...GoingUtils.getJsonDomain(finBdArcInfluenDomain)};
      state.modFlag=false;
    },
    //加载实体对象
    [$M('LOAD_DOMAIN_DATA','FinBdInfluenStore')](state, {backData}) {
      state.modFlag=true;
      state.domainData = {...backData[0]};
      state.domainDataSub = {...backData[0]};
      state.curSelRecord = {...backData[0]};
      console.log(state.domainData);
    },
  },
  actions: {
    //加载数据
    [$A('loadRecord', 'FinBdInfluenStore')]: function ({commit, state}, {recordId,backFun}) {
      finBdInfluenService.loadRecord({
        params: {recordId},
        successFun: function (backData) {
          commit($M('LOAD_DOMAIN_DATA','FinBdInfluenStore'), {backData});
          if(AssertUtils.isFunction(backFun)){
            backFun();
          }
        },
        backType: "json"
      });
    },
    //加载数据
    [$A('loadSubRecord', 'FinBdInfluenStore')]: function ({commit, state}, {recordId,backFun}) {
      finBdInfluenService.loadSubRecord({
        params: {recordId},
        successFun: function (backData) {
          commit($M('LOAD_DOMAIN_DATA','FinBdInfluenStore'), {backData});
          if(AssertUtils.isFunction(backFun)){
            backFun();
          }
        },
        backType: "json"
      });
    },
    //修改记录信息
    [$A('modRecord', 'FinBdInfluenStore')]: function ({commit, state}, {backFun}) {
      finBdInfluenService.modRecord({
        params: state.domainData,
        successFun: function (backData) {backFun();

        },
        backType: "json"
      });
    },
    //修改子表记录信息
    [$A('modSubRecord', 'FinBdInfluenStore')]: function ({commit, state}, {backFun}) {
      finBdInfluenService.modSubRecord({
        params: state.domainDataSub,
        backType: "json"
      });
    },
    //新增记录信息
    [$A('saveRecord', 'FinBdInfluenStore')]: function ({commit, state}, {domainData, backFun}) {
      finBdInfluenService.saveRecord({
        params: {...domainData},
        successFun: function (backData) {
          // debugger;
          backFun(backData);
        },
        backType: "json"
      });
    },
    //删除记录信息
    [$A('delRecord', 'FinBdInfluenStore')]: function ({commit, state}, {recordId, backFun}) {
      finBdInfluenService.delRecord({
        params: {recordId},
        successFun: function (backData) {
          backFun();
        },
        backType: "json"
      });
    },
    //新增记录信息
    [$A('saveSubRecord', 'FinBdInfluenStore')]: function ({commit, state}, {recordId,domainData, backFun}) {
      finBdInfluenService.saveSubRecord({
        id:{recordId},
        params: {...domainData},

        successFun: function (backData) {
          // debugger;
          backFun(backData);
        },
        backType: "json"
      });
    },
    //删除记录信息
    [$A('delSubRecord', 'FinBdInfluenStore')]: function ({commit, state}, {recordId, backFun}) {
      finBdInfluenService.delSubRecord({
        params: {recordId},
        successFun: function (backData) {
          backFun();
        },
        backType: "json"
      });
    },
  },


  getters: {}
}


export default FinBdInfluenStore;
