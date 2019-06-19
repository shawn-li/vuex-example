import Vue from 'vue'
import utils from './utils'

const server = (function(){
    let query = function(HTTP, url, params, callback){
        if(url==null || typeof url != 'string'){
            callback({
                msg: "url为空或者格式不正确!",
                code: '0'
            });
        }
        
        if(params == 'no'){
            //不需要参数
        }else{
            //将参数对象处理成字符串
            let strParams = parseParams(params);
            console.log('str_params:' + strParams)
            //如果参数为空，直接返回信息
            if(utils.isEmpty(strParams)){
                callback({
                    msg: '查询条件不能为空！',
                    code: '0'
                })
            }
            url += strParams;
        }
        
        console.log(url)
        HTTP.get(url, {
            }).then((res) => {
                //成功提示
                if(res.status == 200){
                    console.log(res.body)
                    callback({
                        code: '1',
                        msg: '成功',
                        body: res.body
                    });
                    // this.$Notice.open({
                    //     title: "请求成功:" + res.statusText,
                    //     desc: "请求成功:" + res.statusText
                    // });
                    // _this.nbaTeamList = res.body.data;
                    // console.log(_this.nbaTeamList);
                    // this.$Spin.hide();
                    //存在sessionStorage中
                    //sessionStorage.set("nbaTeam", _this.nbaTeamList)
                }else{
                    callback({
                        msg:'Error',
                        code: '2'
                    });
                    // this.$Notice.open({
                    //     title: "请求未成功:" + res.statusText,
                    //     desc: "请求未成功:" + res.statusText
                    // });
                }
            }, (err) => {
                console.log(err);
                callback({
                    msg:'Error',
                    code: '2'
                });
            });
    }
    let parseParams = function(params){
        let strParams = "";
        let hasParams = false;
        if(!utils.isObject(params)){
            //非对象
            return '';
        }
        
        Object.keys(params).forEach(function(key, index){
            if(!utils.isEmpty(params[key])){
                //不为空
                if(index == 0){
                   //不用加'&'
                }else{
                    strParams += "&";
                }
                strParams += key + '=';
                strParams += params[key];
                hasParams = true;
            }
            //为空则忽略
        })
        if(hasParams){
            strParams = "?" + strParams
        }
        return strParams
    }
    let test = function($http){
        console.log($http)
    }

    return {
        query: query,
        parseParams: parseParams,
        test: test
    }
})()

export default server