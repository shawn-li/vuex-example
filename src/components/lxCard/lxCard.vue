<template>
    <div>
        <Card v-for="(item, index) in nbaTeamList" :key="(item, index)" style="width:49%;float:left;margin-left:1%;margin-bottom:10px;">
            <p slot="title" style="text-align:left">
                <Icon type="md-basketball"></Icon>
                {{item.abbreviation}}
            </p>
            <a href="#" slot="extra" @click.prevent="changeLimit">
                <Icon type="md-pin" />
                {{item.conference}}
            </a>
            <ul>
                <li style="display:block;" v-for="key in cardTitelList" :key="key">
                    <span class="lx-card-li-span">
                        {{ key }}:
                    </span>
                    <span class="lx-card-li-span">
                        <a href="javascript:;" target="_blank">{{ item[key] }}</a>
                    </span>
                </li>
            </ul>
        </Card>
    </div>
</template>
<script>
    import {mapActions, mapState, mapGetters} from 'vuex' //注册 action 和 state

    export default {
        data () {
            return {       
                demo:[
                        {
                            abbreviation: "OKC",
                            city: "Oklahoma City",
                            conference: "West",
                            division: "Northwest",
                            full_name: "Oklahoma City Thunder",
                            id: 21,
                            name: "Thunder"
                        },
                        {
                            abbreviation: "BOS",
                            city: "Boston",
                            conference: "East",
                            division: "Atlantic",
                            full_name: "Boston Celtics",
                            id: 2,
                            name: "Celtics"
                        },
                        {
                            abbreviation: "BKN",
                            city: "Brooklyn",
                            conference: "East",
                            division: "Atlantic",
                            full_name: "Brooklyn Nets",
                            id: 3,
                            name: "Nets"
                        }
                    ]
            }
        },
        props:{
            
        },
        computed:{
            ...mapState({
                    nbaTeamList: state => state.nba.nbaTeamList
                }),
            cardTitelList:function(){
                return Object.keys(this.nbaTeamList[0]);
            }
        },
        watch:{
            
        },
        methods: {
            // changeLimit () {
            //     function getArrayItems(arr, num) {
            //         const temp_array = [];
            //         for (let index in arr) {
            //             temp_array.push(arr[index]);
            //         }
            //         const return_array = [];
            //         for (let i = 0; i<num; i++) {
            //             if (temp_array.length>0) {
            //                 const arrIndex = Math.floor(Math.random()*temp_array.length);
            //                 return_array[i] = temp_array[arrIndex];
            //                 temp_array.splice(arrIndex, 1);
            //             } else {
            //                 break;
            //             }
            //         }
            //         return return_array;
            //     }
            //     this.randomMovieList = getArrayItems(this.movieList, 5);
            // }
        },
        mounted () {
            
        }
    }
</script>

<style>
    .lx-card-li-span{
        display: inline-block!important;
        width: 49%!important;
        text-align: left;
    }
</style>

