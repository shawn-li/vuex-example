<template>
    <div id="lxTabPane1">
        <Row>
            <Col span="12">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key">位置：</span>
                <span class="tab-row-value">{{player.strPosition}}</span>
            </Col>
            <Col span="12">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key">主脚：</span>
                <span class="tab-row-value">{{player.strSide}}</span>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key">球队：</span>
                <span class="tab-row-value">{{player.strTeam}}</span>
            </Col>
            <Col span="12">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key">号码：</span>
                <span class="tab-row-value">{{player.strNumber}}</span>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key">身高：</span>
                <span class="tab-row-value">{{player.strHeight}}</span>
            </Col>
            <Col span="12">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key">体重：</span>
                <span class="tab-row-value">{{player.strWeight}}</span>
            </Col>
        </Row>
        <Row>
            <Col span="24">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key">简介：</span>
                <span class="tab-row-value tab-row-value-area">
                    {{player.strDescriptionEN}}
                </span>
            </Col>
        </Row>
    </div>
</template>

<script>
import{ mapState, mapMutations, mapActions } from 'vuex'
export default {
    computed:{
        ...mapState({
            player: state => state.premierLeague.player
        })
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
    .tab-row-value-area{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow:hidden;
        /* text-overflow:ellipsis;
        white-space:nowrap; */
    }
</style>
