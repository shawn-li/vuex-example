<template>
    <div>

        <Menu class="clear" mode="horizontal" :theme="theme" active-name="" @on-select="changeMenuItem">
            <MenuItem :name="item.value" v-for="(item, index) in menuList" :key="(item, index)">
                <Icon :type="item.value" />
                {{item.name}}
            </MenuItem>

            <span class="fl-right" name="5">
                <lxSwitch class="inline-block" @getLxMenuMoreFlag="changeMenuMoreFlag"></lxSwitch>
            </span>
            
        </Menu>
        <br>
        <div v-show="flag" style="padding-bottom:30px;padding-top:10px;">
            <p>Change theme</p>
            <RadioGroup v-model="theme">
                <Radio label="light"></Radio>
                <Radio label="dark"></Radio>
                <Radio label="primary"></Radio>
            </RadioGroup>
        </div>
    </div>
</template>
<script>
    import lxSwitch from '@/components/lxSwitch/lxSwitchNm1'
    import Vue from 'vue'
    import {mapActions, mapState, mapGetters} from 'vuex' //注册 action 和 state

    export default {
        data () {
            return {
                menu_index: 1,
                theme: this.menu.menuTheme,
                flag: this.menu.lxMenuMoreFlag,
                menuList: this.menu.menuList
            }
        },
        //'menuList', 'menuTheme', 'lxMenuMoreFlag'
        props:
        {
            menu:{
                type: Object,
                default: function() {
                    console.log("menu default invoked.");
                    return;
                }
            }
        },
        components:{
            lxSwitch
        },
        methods:{
            ...mapActions(['changePageFlag']),
            changeMenuMoreFlag: function(flag){
                this.flag = flag;
            },
            changeMenuItem:function(){
                this.menu_index = arguments[0];
                let _menu_chn = '';
                this.menuList.forEach(el => {
                    if(arguments[0] === el.value){
                        _menu_chn = el.name
                    }
                });
                this.$Notice.open({
                    title: _menu_chn,
                    desc: "切换到" + _menu_chn + "界面"
                });
                //this.$emit("changePage", arguments[0]);
                this.changePageFlag(arguments[0]);
            }
        },
        mounted(){
            
        }
    }
</script>

<style>
    .ivu-menu{
        background-color: #f8f8f9;
    }
    .inline-block{
        margin-right: 10px;
    }
</style>


