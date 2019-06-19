<template>
    <div id="page1">
        <lxMenu id="lxMenu" :menu="menu"></lxMenu>
        <pageNba v-show="pageFlag.nba"></pageNba>
        <pagePremierLeague v-show="pageFlag.premierLeague"></pagePremierLeague>
        <pageSports v-show="pageFlag.sports"></pageSports>
    </div>
</template>

<script>
import lxMenu from '@/components/lxMenu/index'
import lxLayout from '@/components/lxLayout/index'
import pageNba from './page-nba';
import pagePremierLeague from './page-premierLeague'
import pageSports from './page-sports'

//引入vuex中各属性对应的辅助函数
import {mapActions, mapState, mapGetters} from 'vuex' //注册 action 、 state 、getter

export default {
    name: 'page1',
    data(){
        return{
            menu:{
                menuList:
                [
                    {
                        name:'NBA信息',
                        value:'nba'
                    },
                    {
                        name:'英超',
                        value:'premierLeague'
                    },
                    {
                        name:'体育',
                        value:'sports'
                    }
                ],
                theme:'light',
                lxMenuMoreFlag: false
            }
            
        }
    },
    computed:{
        //映射store.state.count
        ...mapState({
            pageFlag: state => state.pageFlag,
            nba: state => state.pageFlag.nba
        }) 
    },
    components:{
        lxMenu,
        pageNba,
        pagePremierLeague,
        pageSports
    },
    methods:{
        // loadPage:function(pageType){
        //     //console.log('main:' + pageType)
        //     this.changePageFlag(pageType)
        // },
        // changePageFlag:function(type){
        //     let _this = this;
        //     // this.pageFlag.nba = false;
        //     // this.pageFlag.pepMag = false;
        //     Object.keys(this.pageFlag).forEach((key, value) => {
        //         this.pageFlag[key] = false;
        //     })
            
        //     this.pageFlag[type] = true
        // }
    }
}
</script>

<style>
    #page1{
        margin: 0 auto;
        width: 80%;
        min-height: 1000px;
        background-color: #fff;
        overflow-y: auto;
        overflow-x: hidden;
    }
    #lxMenu{
        position: relative;
        z-index: 999;
    }
</style>
