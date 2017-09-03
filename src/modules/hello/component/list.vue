<template>
    <div>
        <div class="head">
            <div class="head_list"></div>
        </div>
        <div v-for="(val, index) in list">
            <grid>
                <grid-item>{{index}}</grid-item>
                <grid-item>{{val}}</grid-item>
            </grid>
        </div>
    </div>
</template>
<script>
    import {Grid, GridItem} from 'vux'

    export default {
        data(){
            return {
                list:['applesss','banassssna','organ'],
            }
        },
        components:{
            Grid,
            GridItem
        },
        methods:{

        },
        mounted () {
            console.log('sssssaaaaa')
        }
    }
</script>
<style scoped lang="less">

body {
  div {
    background: red;
  }
}
</style>
