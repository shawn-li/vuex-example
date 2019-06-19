const utils = (function(){
    let isEmpty = function(obj){
        if(typeof obj == "undefined" || obj == null || obj == ""){
            return true;
        }else{
            return false;
        }
    };
    let isObject = function(obj){
        if(typeof obj=='object' || Object.prototype.toString.call(obj)=='[object Object]'){
            return true;
        }else{
            return false;
        }
    }
    
    //处理英超-树 请求数据数组转化为球队节点对象
    let plToTreeTeamObj = function(arr){
        let result = [];
        arr.forEach(function(el, index){
            let obj = {};
            obj.children = [];
            obj.loading = false;
            obj.value = el['idTeam'];
            obj.title = el['strTeam'];
            obj.expand = false;
            //是否可选择查看详情
            obj.select = false;
            result.push(obj);
        })
        return result;
    }
    //处理英超-树 请求数据数组转化为球员节点对象
    let plToTreePlayerObj = function(arr){
        let result = [];
        arr.forEach(function(el, index){
            let obj = {};
            obj.children = [];
            obj.value = el['idPlayer'];
            obj.title = el['strPlayer'];
            //是否可选择查看详情
            obj.select = true;
            result.push(obj);
        })
        return result;
    }



    return {
        isEmpty: isEmpty,
        isObject: isObject,
        plToTreeTeamObj: plToTreeTeamObj,
        plToTreePlayerObj: plToTreePlayerObj
    }

})()

export default utils