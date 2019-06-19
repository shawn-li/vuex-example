<template>
    <div id="lxTabPane1">
        <Row>
            <Col span="12">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key">全名：</span>
                <span class="tab-row-value">{{player.strPlayer}}</span>
            </Col>
            <Col span="12">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key">国籍：</span>
                <span class="tab-row-value">{{player.strNationality}}</span>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key">性别：</span>
                <span class="tab-row-value">{{player.strGender}}</span>
            </Col>
            <Col span="12">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key">生日：</span>
                <span class="tab-row-value">{{player.dateBorn}}</span>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key">出生地：</span>
                <span class="tab-row-value">{{player.strBirthLocation}}</span>
            </Col>
            <Col span="12">
               
            </Col>
        </Row>
        <Row>
            <Col span="18"  style="position:relative;">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key">照片：</span>
                <span class="tab-row-value">
                    <img id="playerImg" v-show="loaded" class="tab-row-value-img" :src="player.strRender" :alt="player.strPlayer">
                    <div id="playerImgLoading" v-show="!loaded">加载中...</div>
                </span>
            </Col>
            
        </Row>
    </div>
</template>

<script>
import{ mapState, mapMutations, mapActions } from 'vuex'
export default {
    data(){
        return{
            loaded: false
        }
    },
    computed:{
        ...mapState({
            player: state => state.premierLeague.player
        })
    },
    watch:{
        player(val, oldVal){
            this.loaded = false;
        }
    },
    mounted(){
        var _this = this;
        playerImg.onload = function(){
            _this.loaded = true;
            console.log("图片加载完成")
        }
    }
}
</script>

<style>
    .ivu-row{
        height: 50px;
        line-height: 50px;
        text-align: left;
        padding-left: 40px;
    }
    .tab-row-key{
        font-size: 14px;
        vertical-align: middle;
        letter-spacing: 0.5em;
    }
    .tab-row-value{
        font-size: 14px;
        vertical-align: middle;
        color: #515a6e;
        font-weight: bold;
    }
    .tab-row-value-img{
        display: block;
    }
    #playerImgLoading{
        position: absolute;
        width: 200px;
        height: 200px;
        text-align: center;
        top: 60px;
        left: 50px;
    }
</style>
