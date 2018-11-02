<template>
    <div class="vue-main">
        <div class="vue-main-left">
            <ul>
                <li class="vue-main-left-item  Account-management" v-on:click=clickfunction(show)>
                    <img src="../assets/u20.png" alt="" />
                    账号管理
                    <i class="vue-main-left-item-img"></i>
                </li>
                <router-link to="/Management">
                    <li class="vue-main-left-item vue-main-left-item-hover" v-show="show">成员管理</li>
                </router-link><!--路由跳转-->
                <li class="vue-main-left-item  Account-setting" v-on:click=clickfunction(hidden)>
                    <img src="../assets/u21.png" alt="" />
                    账号设置
                    <i class="vue-main-left-item-img"></i>
                </li>
                <router-link to="/EnterpriseInformation">
                    <li class="vue-main-left-item vue-main-left-item-hover" v-show="hidden">企业信息</li>
                </router-link><!--路由跳转-->
                <router-link to="/administrator">
                    <li class="vue-main-left-item vue-main-left-item-hover" v-show="hidden">管理员账号</li>
                </router-link><!--路由跳转-->
            </ul>
        </div>
        
    </div>
</template>
<script>
export default {
  name: 'MainLeft',
  data () {
    return {
      show: true,
      hidden: true
    }
  },
  methods: {
    clickfunction (event) {
    // var that = event.currentTarget // 获取当前按钮    
      this.show = !this.show
      this.hidden = !this.hidden
    }
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
        background:#fff;
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
