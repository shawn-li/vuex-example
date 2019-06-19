import finIfGenralDataDomain  from '../../../domain/preVouterModule/finIfGenralData/finIfGenralDataDomain';
import finBdInfluenDomain from "../../../domain/preVouterModule/finBdInfluen/finBdInfluenDomain";
import finBdCorpDomain from "../../../domain/preVouterModule/finBdCorp/finBdCorpDomain";
import finBdSystemDomain from "../../../domain/preVouterModule/finBdSystem/finBdSystemDomain";
import finIfGenralDataVoucherDomain from "../../../domain/preVouterModule/finIfGenralData/finIfGenralDataVoucherDomain";
import FinGlDetailDomain from "../../../domain/preVouterModule/finGlDetail/FinGlDetailDomain";
import finIfGenralDataService from "../../../service/preVouterModule/finIfGenralData/finIfGenralDataService";
import FinBdVouchTypeDomain from "../../../domain/preVouterModule/finBdVouchType/FinBdVouchTypeDomain";FinBdVouchTypeSR
import FinBdVouchTypeSR from "../../../domain/preVouterModule/finBdVouchType/FinBdVouchTypeSR";
//导入对应的Domain实体


const FinIfGenralDataStore ={
  state:{

    domain:finIfGenralDataDomain,
    domainData: GoingUtils.getJsonDomain(finIfGenralDataDomain),
    domainObj: GoingUtils.getDomainObj(finIfGenralDataDomain),
    title:'业务接口系统',
    gridConfig:{
      // queryUrl:"/gfyjhs-server/finBdInfluen/readAll",
      colOrderNum:true,
      colSelBox:true,
      fieldAry:finIfGenralDataDomain
    },
   vouchTypeConfig:{
      queryUrl:'/gfyjhs-server/finBdVouchType/readAll',
      colOrderNum:true,
      colSelBox:true,
      fieldAry:FinBdVouchTypeDomain,
    },
    vouchConfig:{
      // queryUrl:"/gfyjhs-server/finBdInfluen/readAll",
      colOrderNum:true,
      colSelBox:true,
      fieldAry:finIfGenralDataVoucherDomain
    },
    vouchTypeDomain:FinBdVouchTypeDomain,
    flag:false,
    vouchTypeSearchDomain:FinBdVouchTypeSR,


  },
  mutations:{

    [$M('CHANGE_FALSE','FinIfGenralDataStore')](state,backData) {
      state.flag=false;

    },
    [$M('reset','FinIfGenralDataStore')](state,backData) {
      state.domainData = {...GoingUtils.getJsonDomain(finBdInfluenDomain)};
      // state.modFlag=false;
    },
    [$M('searchByVouchType','FinIfGenralDataStore')](state,backData) {
      state.gridConfig.fieldAry= [
        {id:'systemCode',label:'外部系统编号',width:'100',disabled:true},
        {id:'systemName',label:'外部系统名称',width:'100'},
        {id:'companyCode',label:'公司系统(账号)',width:'100', disabled:true},
        {id:'companyName',label:'公司名称(账套)',width:'100'},
        {id:'vouchType',label:'业务类型',width:'100'},
        {id:'billDate',label:'业务日期',width:'100'},
        {id:'vouchFlag',label:'是否凭证',width:'100'},
        {id:'precessFlag',label:'处理标志',width:'100'},
        {id:'precessResult',label:'处理结果',width:'100'},
        {id:'acctTerm',label:'会计期',width:'100'},
        {id:'voucherNo',label:'凭证号',width:'100'},
      ];
      for(var i=0;i<backData.backData.length;i++){
        var b = {id:backData.backData[i].vouchMainType,label:backData.backData[i].vouchDetalType,width:'100'};
        state.gridConfig.fieldAry.push(b);
      }
      state.flag=true;
    },

  },
  actions:{

    //加载数据
    [$A('change', 'FinIfGenralDataStore')]: function ({commit, state} ) {
      finIfGenralDataService.change({
        // params: {recordId},
        successFun: function (backData) {
          // backFun();
        },
        backType: "json"
      });
    },

    //一键生成凭证
    [$A('generated', 'FinIfGenralDataStore')]: function ({commit, state},{domainData} ) {

      finIfGenralDataService.generated({
         params: {...domainData},
        successFun: function (backData) {
          // backFun();
        },
        backType: "json"
      });
    },
    //根据业务类型查询业务接口数据
    [$A('searchByVouchType', 'FinIfGenralDataStore')]: function ({commit, state},{domainData} ) {

      finIfGenralDataService.searchByVouchType({
        params: {...domainData},
        successFun: function (backData) {
          commit($M('searchByVouchType','FinIfGenralDataStore'),{backData})
        },
        backType: "json"
      });
    },


  },
  getters: {

    title: state => state.title
  }
}

export default FinIfGenralDataStore
