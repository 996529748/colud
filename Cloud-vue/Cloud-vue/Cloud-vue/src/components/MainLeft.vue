<template>
    <div class="vue-main">
        <div class="vue-main-left">
            <ul>
                <li class="vue-main-left-item  Account-management" v-on:click="Isshow1()">
                    <img src="../assets/u20.png" alt="" />
                    账号管理
                    <i class="vue-main-left-item-img"></i>
                </li>
                <router-link to="/Management">
                    <li class="vue-main-left-item vue-main-left-item-hover" v-show="show,isshow1">成员管理</li>
                </router-link><!--路由跳转-->
                <li class="vue-main-left-item  Account-setting" v-on:click="Isshow()">
                    <img src="../assets/u21.png" alt="" />
                    账号设置
                    <i class="vue-main-left-item-img"></i>
                </li>
                <router-link to="/EnterpriseInformation">
                    <li class="vue-main-left-item vue-main-left-item-hover" v-show="show,isshow">企业信息</li>
                </router-link><!--路由跳转-->
                <router-link to="/administrator">
                    <li class="vue-main-left-item vue-main-left-item-hover" v-show="show,isshow">管理员账号</li>
                </router-link><!--路由跳转-->
            </ul>
        </div>
    </div>
</template>
<script>
import VueResource from 'vue-resource'
export default {
  name: 'MainLeft',
  data () {
    return {
        show:true,
        isshow1:true,
        isshow:true,
    }
  },
  methods:{
      //账号设置点击收起与展示
    Isshow(){
       if(this.isshow){
        this.isshow=false;
       }else if(!this.isshow){
        this.isshow=true;
       }
    },
     //账号管理点击收起与展示
    Isshow1(){
       if(this.isshow1){
        this.isshow1=false;
       }else if(!this.isshow1){
        this.isshow1=true;
       }
    },
    // //ajax管理员账号页面
    // get:function(){
    //         var that = this;
    //         this.$http.jsonp('http://vip.foxitreader.cn/enterprise/getEnterpriseUser',{jsonp:"jsonpcallback"}).then(function(response){
    //             that.msg= response.data.data;
    //             var datastr=JSON.stringify(response.data.data)
    //             that.$router.push({
    //                 path:'/administrator/'+datastr,
    //             })
    //         },function(){
    //             console.log('请求失败处理');
    //         })
    //     }
    }
}
</script>
<style scoped src="../css/globals.css"></style>
<style scoped>
    .none{
        display: none;
    }
    .vue-main{
        margin: -10px auto 0;
        min-width: 1200px;
        min-height: 100%;
    }
    /*选项卡菜单*/
    .active{
        background:#fff;
    }
    .router-link-exact-active li{
        background:#ffffff;
    }
    .vue-main-left{
        width: 210px;
        background: #f0f0f0;
        float: left;
        margin-right: 30px;
        position: absolute;
        min-height: 100%;
        z-index: 8;
    }
    .vue-main-left ul{
        overflow: hidden;
        padding-top: 67px;
    }
    .vue-main-left ul li{
        text-align: center;
        font-family: 微软雅黑;
        font-size: 14px;
        color: rgb(51, 51, 51);
        height: 40px;
        line-height: 40px;
        font-family: '微软雅黑';
    }
    .Account-management,.Account-setting{
        height: 40px;
        width: 210px;
        display: block;
        cursor: pointer;
        text-align: center;
        font-family: 微软雅黑;
        font-size: 14px;
        color: rgb(51, 51, 51);
        height: 40px;
        line-height: 40px;
    }
    .Account-management i,.Account-setting i{
        background: url(../assets/u14.png) no-repeat;
        display: block;
        width: 10px;
        height: 10px;
        float: right;
        margin-top: 10px;
        margin-left: 40px;
        margin-right: 20px;
    }
    .Account-management img,.Account-setting img{
        vertical-align: text-bottom;
        margin-right: 5px;
    }
    .vue-main-left-item{
        padding-right: 35px;
        cursor: pointer;
    }
    .vue-main-left-item-hover:hover {
        background-color: #fff;
    }
    
    .vue-main-right{
        padding-left: 245px;
        position: absolute;
        width: 99%;
        padding-right: 16px;
        box-sizing: border-box;
    }

</style>
