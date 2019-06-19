<template>
    <div id="lxBoard">
        <Breadcrumb>
            <BreadcrumbItem>{{player.strTeam}}</BreadcrumbItem>
            <BreadcrumbItem>{{player.strPlayer}}</BreadcrumbItem>
        </Breadcrumb>
        <Divider orientation="left">详细资料</Divider>
        <Tabs>
            <TabPane label="基础资料" icon="md-list-box" size="30">
                <lxTabPane1></lxTabPane1>
            </TabPane>
            <TabPane label="足球资料" icon="md-football" size="30">
                <lxTabPane2></lxTabPane2>
            </TabPane>
            <TabPane label="其他" icon="ios-more">
                <lxTabPane3></lxTabPane3>
            </TabPane>
        </Tabs>
        
    </div>
</template>

<script>
import lxTabPane1 from '@/components/lxTabPane/lxTabPane1'
import lxTabPane2 from '@/components/lxTabPane/lxTabPane2'
import lxTabPane3 from '@/components/lxTabPane/lxTabPane3'
import{ mapState, mapMutations, mapActions } from 'vuex'
export default {
    name: 'lxDetail',
    components:{
        lxTabPane1, lxTabPane2, lxTabPane3
    },
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState({
            player: state => state.premierLeague.player
        })
    }
        
}
</script>

<style>
    #lxBoard{
        margin: 20px;
        padding-bottom: 50px;
        background-color: #f8f8f9;
    }
    .ivu-breadcrumb{
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        margin: 20px;
        text-align: left;
    }
    .ivu-divider-inner-text{
        color: #515a6e;
    }
    
</style>
