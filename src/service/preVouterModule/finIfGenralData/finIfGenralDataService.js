export default {

  //一键生成凭证
  generated({params = {}, successFun, errorFun, backType = "json"}) {

    let queryCommand = new QueryCommand("/gfyjhs-server/finIfGenralData/generateByPeriodMonth");
    //执行查询操作
    let submitJson = {
      dataset:new Dataset(params),
    };
    queryCommand.executeQuery(submitJson, successFun, errorFun, backType);
  },

  //根据业务类型查询业务接口数据
  searchByVouchType({params = {}, successFun, errorFun, backType = "json"}) {

    let queryCommand = new QueryCommand("/gfyjhs-server/finIfGenralData/searchByVouchType");
    //执行查询操作
    let submitJson = {
      dataset:new Dataset(params),
    };
    queryCommand.executeQuery(submitJson, successFun, errorFun, backType);
  },
}
