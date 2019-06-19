<template>
    <div class="layout">
        <Layout>
            <Layout :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>NBA</BreadcrumbItem>
                </Breadcrumb>
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                    <Layout>
                        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}" class="clear">
                            <!-- <lxCard :cardContent="nbaTeamList"></lxCard> -->
                            <lxCard></lxCard>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2019.6 &copy; lx</Footer>
        </Layout>
    </div>
</template>
<script>
    import lxCard from '@/components/lxCard/lxCard'
    import lxLoading from '@/components/lxLoading/lxLoading'
    import server from '@/js/server';
    import {mapActions, mapState, mapMutations, mapGetters} from 'vuex' //注册 action 和 state

    export default {
        data(){
            return{
                
            }
        },
        components:{
            lxCard,
            lxLoading
        },
        props:[

        ],
        computed: {
            //在这里映射 store.state.count，使用方法和 computed 里的其他属性一样
            ...mapState({
                nbaTeamList: state => state.nba.nbaTeamList,
                isShow: state => state.pageFlag.nba
            })
        },
        methods:{
            ...mapActions([
                
            ]),
            ...mapMutations({
                setList: 'SET_NBA_TEAM_LIST'
            }),
            //请求数据
            getData(){
                let _this = this;
                _this.handleSpinCustom();
                this.$http.get('https://www.balldontlie.io/api/v1/teams',{
                    }).then((res) => {
                        console.log("请求加载...")
                        //成功提示
                        if(res.status == 200){
                            this.$Notice.open({
                                title: "请求成功:" + res.statusText,
                                desc: "请求成功:" + res.statusText
                            });
                            console.log(_this.nbaTeamList);
                            this.$Spin.hide();
                            this.setList(res.body.data);
                            //存在sessionStorage中
                            //sessionStorage.set("nbaTeam", _this.nbaTeamList)
                        }else{
                            this.$Notice.open({
                                title: "请求未成功:" + res.statusText,
                                desc: "请求未成功:" + res.statusText
                            });
                        }

                    }, (err) => {
                        console.log(err);
                    });
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
            }
        },
        watch:{
            isShow: function (val, oldVal) {
                let _this = this;
                if(val == true){
                    if(this.nbaTeamList.length == 0){
                        this.getData()
                    }
                }
            }
        },
        mounted(){
           
        }
    }
</script>

<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
