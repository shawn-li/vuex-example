<template>
    <div class="demo-split">
        <Alert type="error" v-show="queryAlert.error.flag" show-icon>
            <span>查询失败</span>
            <span slot="desc">
                {{queryAlert.error.msg}}
            </span>
        </Alert>
        <!-- 
        <Alert type="success" v-show="queryAlert.success.flag" show-icon>
            <h3>查询成功</h3>
            <span slot="desc">
                {{queryAlert.success.msg}}
            </span>
        </Alert> -->
        <Split v-model="topSplit" mode="vertical">
            <div slot="top" class="demo-split-pane">
                <Row>
                    <Col span="8">
                        <Row>
                            <Col span="10">
                                <span class="col-span-title">运动:</span>
                            </Col>
                            <Col span="14">
                                <Select v-model="selectedSports" clearable style="width:80%" size="default">
                                    <Option v-for="item in mockSportsList" :value="item.strSport" :key="item.strSport">{{ item.strSport }}</Option>
                                </Select>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="8">
                        <Col span="12">
                                <span class="col-span-title">国家:</span>
                            </Col>
                            <Col span="12">
                                <Select clearable v-model="selectedCountry" style="width:80%" size="default">
                                    <Option v-for="item in mockCountryList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </Col>
                    </Col>
                </Row>
                <br>
                <Row class="demo-split-pane-Row-last">
                    <Col span="3" offset="1">
                        <Button @click="query" size="large" icon="md-search" type="primary" class="grid-panel-btn">查询</Button>
                    </Col>
                    <Col span="3" offset="1">
                        <Button @click="clearQueryAll" size="large" icon="md-refresh-circle" type="primary" class="grid-panel-btn">清除</Button>
                    </Col>
                    <Col span="8">
                        
                    </Col>
                </Row>
                <br>
            </div>
            <div slot="bottom" class="demo-split-pane">
                <Table border :columns="mockCols" :data="pageList" size="small" style="overflow:hidden;"></Table>
                <Page :total="pageTotal" :page-size="pageSize" show-elevator @on-change="changePage"/>
            </div>
        </Split>
    </div>
</template>

<script>
import{ mapState, mapMutations, mapActions } from 'vuex'
import '../../static/css/global.css'
import server from '../../js/server.js'
import utils from '../../js/utils';

export default {
    data(){
        return{
            url:'https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php',
            topSplit: 0.18,
            mockCols:[
                {
                    title: '联赛ID',
                    key: 'idLeague',
                    width: 100
                },
                {
                    title: '联赛',
                    key: 'strLeague',
                    sortable: true,
                    width: 200
                },
                {
                    title: '联赛简介',
                    key: 'strDescriptionCN',
                    width: 400,
                    tooltip:  true
                },
                {
                    title: '运动类型',
                    key: 'strSport',
                    sortable: true,
                    width: 120
                },
                {
                    title: '国家',
                    key: 'strCountry',
                    width: 120,
                    filters: [
                        {
                            label: 'England',
                            value:'England'
                        },
                        {
                            label: 'Spain',
                            value:'Spain'
                        },
                        {
                            label: 'China',
                            value:'China'
                        },
                        {
                            label: 'Argentina',
                            value:'Argentina'
                        },
                        {
                            label: 'Australia',
                            value:'Australia'
                        },
                        {
                            label: 'Brazil',
                            value:'Brazil'
                        },
                        {
                            label: 'France',
                            value:'France'
                        },
                        {
                            label: 'Germany',
                            value:'Germany'
                        },
                        {
                            label: 'Portugal',
                            value:'Portugal'
                        },
                        {
                            label: 'Italy',
                            value:'Italy'
                        }
                    ],
                    filterMultiple: false,
                    filterMethod (value, row) {
                        return value === row.strCountry;
                    }
                },
                {
                    title: '成立年份',
                    key: 'intFormedYear',
                    width: 100
                },
                {
                    title: '性别',
                    key: 'strGender',
                    width: 100
                }
            ],
            mock:[
                {
                    idLeague: "4328",
                    strLeague: "English Premier League",
                    strDescriptionCN: "Premier League",
                    strSport: "Soccer",
                    intFormedYear: '1999',
                    strGender: 'male'
                },
                {
                    idLeague: "4329",
                    strLeague: "English League Championship",
                    strDescriptionCN: "Championship, Sky Bet Championship",
                    strSport: "Soccer",
                    intFormedYear: '1999',
                    strGender: 'male'
                },
                {
                    idLeague: "4330",
                    strLeague: "Scottish Premier League",
                    strDescriptionCN: "",
                    strSport: "Soccer",
                    intFormedYear: '1999',
                    strGender: 'male'
                },

            ],
            mockSportsList:[
                {
                    idSport: "102",
                    strSport: "Soccer",
                    strSportDescription: "Association football, more commonly known as football or soccer, is a team sport played between two teams of eleven players with a spherical ball. It is played by 250 million players in over 200 countries and dependencies, making it the world's most popular sport. The game is played on a rectangular field with a goal at each end. The object of the game is to score by getting the ball into the opposing goal./n Players are not allowed to touch the ball with their hands or arms while it is in play, unless they are goalkeepers (and then only when within their penalty area). Other players mainly use their feet to strike or pass the ball, but may also use any part of their body except the hands and the arms. The team that scores the most goals by the end of the match wins. If the score is level at the end of the game, either a draw is declared or the game goes into extra time or a penalty shootout depending on the format of the competition. The Laws of the Game were originally codified in England by The Football Association in 1863. Association football is governed internationally by the International Federation of Association Football (FIFA; French: Fédération Internationale de Football Association), which organises World Cups for both men and women every four years.",
                    strSportThumb: "https://www.thesportsdb.com/images/sports/soccer.jpg"
                },
                {
                    idSport: "106",
                    strSport: "Basketball",
                    strSportDescription: "Basketball is a limited-contact sport played on a rectangular court. While most often played as a team sport with five players on each side, three-on-three, two-on-two, and one-on-one competitions are also common. The objective is to shoot a ball through a hoop 18 inches (46 cm) in diameter and 10 feet (3.048 m) high that is mounted to a backboard at each end of the court. The game was invented in 1891 by Dr. James Naismith.\n A team can score a field goal by shooting the ball through the basket being defended by the opposition team during regular play. A field goal scores three points for the shooting team if the player shoots from behind the three-point line, and two points if shot from in front of the line. A team can also score via free throws, which are worth one point, after the other team is assessed with certain fouls. The team with the most points at the end of the game wins, but additional time (overtime) is mandated when the score is tied at the end of regulation. The ball can be advanced on the court by passing it to a teammate, or by bouncing it while walking or running (dribbling). It is a violation to lift, or drag, one's pivot foot without dribbling the ball, to carry it, or to hold the ball with both hands then resume dribbling.The game has many individual techniques for displaying skill—ball-handling, shooting, passing, dribbling, dunking, shot-blocking, and rebounding. Basketball teams generally have player positions, the tallest and strongest members of a team are called a center or power forward, while slightly shorter and more agile players are called small forward, and the shortest players or those who possess the best ball handling skills are called a point guard or shooting guard. The point guard directs the on court action of the team, implementing the coach's game plan, and managing the execution of offensive and defensive plays (player positioning).Basketball is one of the world's most popular and widely viewed sports.[1] The National Basketball Association (NBA) is the most significant professional basketball league in the world in terms of popularity, salaries, talent, and level of competition.[2][3] Outside North America, the top clubs from national leagues qualify to continental championships such as the Euroleague and FIBA Americas League. The FIBA Basketball World Cup and Men's Olympic Basketball Tournament are the major international events of the sport and attract top national teams from around the world. Each continent hosts regional competitions for national teams, like EuroBasket and FIBA AmeriCup.↵The FIBA Women's Basketball World Cup and Women's Olympic Basketball Tournament feature top national teams from continental championships. The main North American league is the WNBA (NCAA Women's Division I Basketball Championship is also popular), whereas strongest European clubs participate in the EuroLeague Women.",
                    strSportThumb: "https://www.thesportsdb.com/images/sports/basketball.jpg"
                }
            ],
            mockCountryList:[
                {
                    label: 'England',
                    value:'England'
                },
                {
                    label: 'Spain',
                    value:'Spain'
                },
                {
                    label: 'China',
                    value:'China'
                },
                {
                    label: 'Argentina',
                    value:'Argentina'
                },
                {
                    label: 'Australia',
                    value:'Australia'
                },
                {
                    label: 'Brazil',
                    value:'Brazil'
                },
                {
                    label: 'France',
                    value:'France'
                },
                {
                    label: 'Germany',
                    value:'Germany'
                },
                {
                    label: 'Portugal',
                    value:'Portugal'
                },
                {
                    label: 'Italy',
                    value:'Italy'
                }
            ],
            queryAlert:{
                success:{
                    flag: false,
                    msg: ''
                },
                error:{
                    flag: false,
                    msg: ''
                }
            },
            timer: null,
            //每页数据数
            pageSize: 15,
        }
    },
    computed:{
        //在这里映射 store.state.count，使用方法和 computed 里的其他属性一样
        ...mapState({
            isShow: state => state.pageFlag.sports,
            params: state => state.sports.params,
            //请求全部数据
            list: state => state.sports.list,
            //分页展示数据
            pageList: state => state.sports.pageList,
            //数据总数
            pageTotal: state => state.sports.pageTotal
        }),
        queryResult:{
            get(){
                return this.$store.state.sports.queryResult
            },
            set(val){
                this.$store.state.sports.queryResult = val;
                if(val.code!=null){
                    if(val.code=='1'){
                        this.$Notice.open({
                            title: '查询成功',
                            desc: "查询到" + val.body.countrys.length + '条数据!'
                        });
                    }else{
                        // this.$Notice.open({
                        //     title: '查询失败',
                        //     desc: val.msg
                        // });
                    }
                }else{

                }
            }
        },
        selectedSports:{
            get(){
                return this.$store.state.sports.selectedSports
            },
            set(val){
                this.$store.state.sports.selectedSports = val
            }
        },
        selectedCountry:{
            get(){
                return this.$store.state.sports.selectedCountry
            },
            set(val){
                this.$store.state.sports.selectedCountry = val
            }
        }
    },
    methods:{
        ...mapMutations({
            //清除所有条件
            clearQueryAll: 'CLEAR_SPORTS_SELECTED_ALL',
            //设置查询参数
            setQueryParams: 'SET_SPORTS_QUERY_PARAMS',
            setQueryResult: 'SET_SPORTS_QUERY_RESULT',
            setPageResult: 'SET_SPORTS_PAGE_RESULT',
            setPageTotal: 'SET_SPORTS_PAGE_TOTAL'
        }),
        //查询
        getData:function(){
            let params = {
                s: this.selectedSports,
                c: this.selectedCountry
            }
            var _this = this;
            this.setQueryParams(params);
            let strParams = server.parseParams(params);
            
            if(strParams!=null && strParams!=''){
                //loading
                this.handleSpinCustom();
            }
            //console.log(strParams);
            //发送请求
            //this.queryResult = server.query(this.$http, this.url, this.params, {});
            
            //创建一个Promise实例，获取数据。并把数据传递给处理函数resolve和reject。需要注意的是Promise在声明的时候就执行了
            return new Promise(function(resolve,reject){
                server.query(_this.$http, _this.url, _this.params, function(val){
                    resolve(val)
                });
            });
            //Promise的方法then,catch方法
            // promise.then(function(_result){
            //     //通过拿到的数据渲染页面
            //     console.log(_result)
            //     //设置查询结果state
            //     //_this.setQueryResult(_result);
            //     _this.queryResult = _result
            //     console.log(_this.queryResult)
            //     //提示
            //     _this.setQueryAlert(_this.queryResult);

            // }).catch(function(ErrMsg){
            //     //获取数据失败时的处理逻辑
            // })
    
        },
        //设置定时器
        clearTimer(_this){
            return new Promise((resolve, reject) => {
                _this.timer = setTimeout(() => {
                    if(_this.timer==null){
                        _this.clearQueryAlert.apply(_this)
                    }else{
                        //已存在定时器先清除
                        clearTimeout(_this.timer)
                        _this.clearQueryAlert.apply(_this); 
                    }
                    resolve('清除提示框成功');
                }, 3000);
            })
        },
        //loading加载
        handleSpinCustom () {
            this.$Spin.show({
                render: (h) => {
                    return h('div', [
                        h('Icon', {
                            'class': 'demo-spin-icon-load',
                            props: {
                                type: 'ios-loading',
                                size: 18
                            }
                        }),
                        h('div', 'Loading')
                    ])
                }
            });
        },
        async query(){
            //请求数据
            let _result = await this.getData();
            //写数据
            //通过拿到的数据渲染页面
            //设置请求数据结果
            this.queryResult = _result
            let hasData = this.setQueryAlert(this.queryResult);
            if(hasData){
                //有数据
                //设置表格查询结果list
                if(_result.body.countrys != null){
                    this.setQueryResult(_result.body.countrys);
                    console.log('请求总数据：')
                    console.log(this.list);
                    //数据总条数
                    this.setPageTotal(_result.body.countrys.length);
                    //设置分页后展示数据
                    if(this.pageTotal>this.pageSize){
                        //总数据 > 每页条数
                        this.setPageResult(this.list.slice(0, this.pageSize));
                    }else{
                        this.setPageResult(this.list);
                    }
                    console.log('请求分页后数据')
                    console.log(this.pageList)
                    console.log("数据条数:")
                    console.log(this.pageTotal)
                }else{
                    console.log(1)
                    this.setQueryResult([]);
                    this.setPageResult([]);
                    this.setPageTotal(0)
                }
            }else{
                let clearTxt = await this.clearTimer(this);
                console.log(clearTxt);
            }
            //加载loading清除
            if(this.$Spin){
                this.$Spin.hide();
            }       
        },

        //分页处理
        changePage:function(index){
            //起始索引
            let _start = (index-1) * this.pageSize;
            let _end = _start + this.pageSize;
            //设置分页后展示数据
            this.setPageResult(this.list.slice(_start, _end));
            console.log('切换页面后数据')
            console.log(this.pageList);
        },

        //根据查询返回码 设置查询提示数据
        setQueryAlert(result){
            if(result.code=='1'){
                //成功
                this.queryAlert.error.flag = false;
                this.queryAlert.success.flag = true;
                this.queryAlert.success.msg = result.msg;
                this.queryAlert.error.msg = '';
                return true;
            }else{
                //失败
                this.queryAlert.error.flag = true;
                this.queryAlert.success.flag = false;
                this.queryAlert.error.msg = result.msg;
                this.queryAlert.success.msg = '';
                return false;
            }
        },
        //清除alert提示
        clearQueryAlert(){
            this.queryAlert.error.flag = false;
            this.queryAlert.success.flag = false;
            this.queryAlert.error.msg = '';
            this.queryAlert.success.msg = '';
        }
    },
    mounted(){
      
    }
}
</script>

<style>
    .demo-split{
        height: 900px;
        border: 1px solid #dcdee2;
        overflow: hidden;
        margin-bottom: 30px;
        clear: both;
        position: relative;
    }
    .demo-split-pane{
        padding: 20px 10px 20px;
        overflow: hidden;
    }
    .top-pane{
        border: 1px solid #2d8cf0;
    }
    .ivu-split-pane{
        
    }
    .demo-split-pane-Row-last{
        margin-bottom: 10px;
    }
    .col-span-title{
        color: #464c5b;
        letter-spacing: 1em;
        font-size: 16px;
        line-height: 32px;
        font-weight: bold;
        padding-right: 10px;
        text-align: right;
        display: inline-block;
        width: 100%;
    }

    .ivu-alert{ 
        position: absolute;  
        right: 0;  
    }
    .ivu-alert-message{
        text-align: left;
    }
    
    .ivu-spin-fullscreen-wrapper{
        width: 20%;
        height: 20%;
        top: 30%;
        left: 40%;
        background-color: #f8f8f9;
        box-shadow: 0 1px 6px rgba(0,0,0,.2);
        border-color: #eee;
    }

    /* 分页 */
    .ivu-page{
        margin: 20px 0;
    }

</style>

