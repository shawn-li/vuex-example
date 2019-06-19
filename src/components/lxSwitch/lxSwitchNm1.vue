<template>
    <div>
        <span class="lxSwitchNm1-text">导航栏更多选项</span>
        <i-switch size="large" v-model="lxMenuMoreFlag" @on-change="change">
            <span slot="open">开启</span>
            <span slot="close">收起</span>
        </i-switch>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                lxMenuMoreFlag: false
            }  
        },
        methods: {
            change (status) {
                let _status = '';
                if(status===true){
                    _status = '开启'
                }else{
                    _status = '收起'
                }
                this.$Message.info('导航栏更多选项：' + _status);
                this.$emit('getLxMenuMoreFlag', status)
            }
        }
    }
</script>

<style>
    .lxSwitchNm1-text{
        font-size: 12px;
        margin-right: 10px;
    }
</style>

