<template>
    <div class="premierLeague">
        <div class="lf-box">
            <Tree :data="data" :load-data="loadData" @on-select-change="selectPlayer"></Tree>
        </div>
        <div class="rt-box">
            <lxDetail v-show="flag"></lxDetail>
        </div>
    </div>
</template>
<script>
    import server from '../../js/server.js'
    import utils from '../../js/utils';
    import lxDetail from '@/components/lxDetail/lxDetail'
    import{ mapState, mapMutations, mapActions } from 'vuex'

    export default {
        components:{
            lxDetail
        },
        data () {
            return {
                url: 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php',
                url1: 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php',
                url2: 'https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php',
                flag: false,
                data: [
                    {
                        title: 'Premier League',
                        loading: false,
                        value: '4328',
                        select: false,
                        children: [],
                        render: (h, { root, node, data }) => {
                            return h('span', {
                                style: {
                                    display: 'inline-block',
                                    color: 'crimson',
                                    fontWeight: 'blod',
                                    fontSize: '18px' 
                                }
                            }
                            , [
                                h('span', {
                                    
                                },[
                                    h('Icon', {
                                        props: {
                                            type: 'ios-notifications-outline'
                                        },
                                        style: {
                                            marginRight: '3px'
                                        }
                                    }),
                                    h('span', data.title)
                                ])
                            ]
                            );
                        }
                    }
                ]
            }
        },
        computed:{
            ...mapState({
                player: state => state.premierLeague.player
            })
        },
        methods: {
            ...mapMutations({
                setPlayer: 'SET_PREMIER_LEAGUE_PLAYER'
            }),
            selectPlayer(selects, item){
                if(item.select){
                    let _this = this;
                    this.getPlayerDetailData(item).then((result)=>{
                        //console.log(result)
                        if(result.body==null||result.body.players==null){
                            alert('未查到数据!')
                            return;
                        }
                        _this.setPlayer(result.body.players[0]);
                        console.log(_this.player)
                        _this.flag = true;
                    })
                }
            },
            loadData (item, callback) {
                //console.log(item)
                if(item.nodeKey==0){
                    //根节点
                    this.getTeamsData(item).then((result)=>{
                        //console.log(result)
                        if(result.body==null||result.body.teams==null){
                            alert('未查到数据!')
                            return;
                        }
                        //处理请求数据数组结构
                        let treeResult = utils.plToTreeTeamObj(result.body.teams);
                        //console.log(treeResult)
                        callback(treeResult)
                    })
                }else{
                    this.getPlayersData(item).then((result)=>{
                        //console.log(result)
                        if(result.body==null||result.body.player==null){
                            alert('未查到数据!')
                            return;
                        }
                        //处理请求数据数组结构
                        let treeResult = utils.plToTreePlayerObj(result.body.player);
                        //console.log(treeResult)
                        callback(treeResult)
                    })
                }
            },
            getTeamsData:function(item){
                let _this = this;
                //创建一个Promise实例，获取数据。并把数据传递给处理函数resolve和reject。需要注意的是Promise在声明的时候就执行了
                return new Promise(function(resolve,reject){
                    server.query(_this.$http, _this.url, {id:item.value}, function(val){
                        resolve(val)
                    });
                });
            },
            getPlayersData:function(item){
                let _this = this;
                //创建一个Promise实例，获取数据。并把数据传递给处理函数resolve和reject。需要注意的是Promise在声明的时候就执行了
                return new Promise(function(resolve,reject){
                    server.query(_this.$http, _this.url1, {id:item.value}, function(val){
                        resolve(val)
                    });
                });
            },
            getPlayerDetailData:function(item){
                let _this = this;
                //创建一个Promise实例，获取数据。并把数据传递给处理函数resolve和reject。需要注意的是Promise在声明的时候就执行了
                return new Promise(function(resolve,reject){
                    server.query(_this.$http, _this.url2, {id:item.value}, function(val){
                        resolve(val)
                    });
                });
            },
        },
        mounted(){
            
        }
    }
</script>

<style>
    #premierLeague{
        clear: both;
    }
    .lf-box{
        overflow: hidden;
        width: 20%;
        float: left;
    }
    .rt-box{
        width: 80%;
        float: right;
        height: 500px;
    }

    .ivu-tree ul{
        font-size: 15px;
    }
    .ivu-tree li ul{
        text-align: left;
    }
</style>
