export  default {
  //加载实体信息
  loadRecord({params = {}, successFun, errorFun, backType = "json"}) {
    let {recordId} = params;
    let queryCommand = new QueryCommand("/gfyjhs-server/finBdInfluen/read/"+recordId);
    //执行查询操作
    queryCommand.executeQuery({}, successFun, errorFun, backType);
  },
  //加载实体信息
  loadSubRecord({params = {}, successFun, errorFun, backType = "json"}) {
    let {recordId} = params;
    let queryCommand = new QueryCommand("/gfyjhs-server/finBdArcInfluen/read/"+recordId);
    //执行查询操作
    queryCommand.executeQuery({}, successFun, errorFun, backType);
  },
  //保存主表信息
  saveRecord({params={},successFun,errorFun,backType="json"}){

    let queryCommand = new QueryCommand("/gfyjhs-server/finBdInfluen/create");
    let submitJson = {
      dataset:new Dataset(params),
    };
    queryCommand.executeQuery(submitJson, successFun, errorFun,backType);
  },
  //保存子表信息
  saveSubRecord({id={},params={},successFun,errorFun,backType="json"}){
    let {recordId} = id;
    let queryCommand = new QueryCommand("/gfyjhs-server/finBdArcInfluen/create/"+recordId);
    let submitJson = {
      dataset:new Dataset(params),
    };
    queryCommand.executeQuery(submitJson, successFun, errorFun,backType);
  },
  //删除主表信息
  delRecord({params={},successFun,errorFun,backType="json"}){
    let {recordId}=params;
    let queryCommand = new QueryCommand("/gfyjhs-server/finBdInfluen/delete/"+recordId);
    //将json字符串转成dataset解构
    let submitJson = {
      dataset:new Dataset({ids:recordId}),
    };
    //执行查询操作
    queryCommand.executeQuery(submitJson, successFun, errorFun,backType);
  },
  //删除子表信息
  delSubRecord({params={},successFun,errorFun,backType="json"}){
    let {recordId}=params;
    let queryCommand = new QueryCommand("/gfyjhs-server/finBdArcInfluen/delete/"+recordId);
    //将json字符串转成dataset解构
    let submitJson = {
      dataset:new Dataset({ids:recordId}),
    };
    //执行查询操作
    queryCommand.executeQuery(submitJson, successFun, errorFun,backType);
  },
  //修改信息
  modRecord({params={},successFun,errorFun,backType="json"}){
    let queryCommand = new QueryCommand("/gfyjhs-server/finBdInfluen/update");

    let submitJson = {
      dataset:new Dataset(params),
    };
    queryCommand.executeQuery(submitJson, successFun, errorFun,backType);
  },
  //修改子表信息
  modSubRecord({params={},successFun,errorFun,backType="json"}){
    let queryCommand = new QueryCommand("/gfyjhs-server/finBdArcInfluen/update");

    let submitJson = {
      dataset:new Dataset(params),
    };
    queryCommand.executeQuery(submitJson, successFun, errorFun,backType);
  },
  
}
