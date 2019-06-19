<template>
    <div id="lxTabPane1">
        <Row>
            <Col span="12">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key">转会费：</span>
                <span class="tab-row-value">{{player.strSigning}}</span>
            </Col>
            <Col span="12">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key">薪水：</span>
                <span class="tab-row-value">{{player.strWage}}</span>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key">球鞋：</span>
                <span class="tab-row-value">{{player.strKit}}</span>
            </Col>
            <Col span="12">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key">经纪人：</span>
                <span class="tab-row-value">{{player.strAgent}}</span>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key no-letter-spacing">INS：</span>
                <span class="tab-row-value">{{player.strInstagram}}</span>
            </Col>
            <Col span="12">
                <Icon type="ios-checkmark" size="30"/>
                <span class="tab-row-key no-letter-spacing">Twitter：</span>
                <span class="tab-row-value">{{player.strTwitter}}</span>
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
    .no-letter-spacing{
        letter-spacing: 0 !important;
    }
    .tab-row-value{
        font-size: 14px;
        vertical-align: middle;
        color: #515a6e;
        font-weight: bold;
    }
</style>
