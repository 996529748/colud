<template>
    <div class="vue-header">
        <div class="vue-header-left">
            <img src="../assets/u17.png" alt="">
            <span>福昕云办公管理中心</span>
        </div>
        <div class="vue-header-right">
            <a class="vue-header-link" href="http://edit.foxitcloud.cn" target="_bank">进入福昕云编辑</a>
            <div class="vue-header-down">
                <img src="../assets/u13.png" alt="">
                <span>下载云办公套件</span>
                <div class="drop-down-menu">
                    <a class="drop-down-item1" href="http://file.foxitreader.cn/edit/file/201810/FoxitPDFEditor_cGQ=.exe">福昕PDF编辑器</a>
                    <a class="drop-down-item2" href="http://file.foxitreader.cn/pdf2doc/update/website/FP2WSetup.exe">福昕PDF转Word</a>
                </div>
            </div>
            <div class="vue-header-information">
                <span class="vue-header-information-username">777@danteng.foxitcloud.cn</span>
                <i></i>
                <div class="vue-header-drop">
                    <div class="vue-header-drop-top">
                        <img src="../assets/u15.png" alt="头像">
                        <div class="vue-header-drop-username">卤蛋</div>
                        <div class="vue-header-drop-id">
                            <span>ID：</span>
                            <p class="vue-header-id">30000758</p>
                        </div>
                        <p class="vue-header-drop-companyDomain">777@danteng.foxitcloud.cn</p>
                    </div>
                    <div class="vue-header-drop-bottom">
                        <a href="./management.html">管理中心</a>
                        <a href="https://sso.foxitreader.cn/forgot" target="_blank">修改密码</a>
                        <a class="logout">退出账号</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'CloudHeader',
  data () {
    return {
    }
  }
}
</script>
<style scoped src="../css/globals.css"></style>
<style scoped>
.vue-header{
    height: 50px;
    background:#06c;
    position: fixed;
    width: 100%;
    z-index: 100;
}
/* 头部左上logo */
.vue-header-left{
    float:left;
}
.vue-header-left img{
    width: 48px;
    height: 35px;
    margin: 7px 10px 0 20px;
    float: left;
}
.vue-header-left span{
    color: #fff;
    font-weight: 400;
    font-family: '微软雅黑';
    font-size: 18px;
    line-height: 50px;
}
.vue-header-right{
    float:right;
}
/* 头部右上 */
.vue-header-right{
    float: right;
    position: absolute;
    right: 3%;
}
/*点击链接*/
.vue-header-link{
    float: left;
    width: 134px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 50px;
    font-size: 14px;
    margin: 5px 30px 0 0;
}
.vue-header-link{
    color:#fff;
    font-family: '微软雅黑';
}
.vue-header-link:hover{
    background: #fff;
    color: #06c;
}
/*下载*/
.vue-header-down, .vue-header-down img, .vue-header-down span{
    float:left;
    font-family: '微软雅黑';
    cursor:default;
}
.vue-header-down img{
    margin: 20px 10px 0 0;
}
.vue-header-down span{
    float: left;
    line-height: 50px;
    font-weight: 400;
    font-style: normal;
    color: #fff;
    font-size: 13px;
    padding-bottom: 5px;
}
.vue-header-down{
    position: relative;
}
.vue-header-down:hover .drop-down-menu{
    display: block;
}
/* 下载下拉 */
.drop-down-menu{
    width: 148px;
    padding: 11px 0;
    height: 63px;
    border: 1px solid #bbb;
    -moz-box-shadow: 0 0 5px rgba(0,0,0,.349019607843137);
    -webkit-box-shadow: 0 0 5px rgba(0,0,0,.349019607843137);
    box-shadow: 0 0 5px rgba(0,0,0,.349019607843137);
    position: absolute;
    top: 55px;
    background: #fff;
    z-index: 9999;
    display: none;
}
.drop-down-menu a{
    display: block;
    line-height: 33px;
    text-align: left;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: #666;
    text-indent: 20px;
}
.drop-down-menu a:hover{
    color:#06c;
}
/*登录用户的信息*/
.vue-header-information{
    float: left;
    height: 55px;
}
.vue-header-information:hover .vue-header-information i{
    background: url(../assets/u18.png) no-repeat;
    display: block;
    width: 10px;
    height: 10px;
    float: left;
    margin: 20px 0 0 10px;
}
.vue-header-information i{
    background: url(../assets/u18.png) no-repeat;
    display: block;
    width: 10px;
    height: 10px;
    float: left;
    margin: 20px 0 0 10px;
}
.vue-header-information-username{
    float: left;
    display: block;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 50px;
    font-weight: 400;
    font-style: normal;
    color: #fff;
    font-family: '微软雅黑';
    font-size: 13px;
    margin-right: 10px;
    margin-left: 30px;
    cursor: default;
}
.vue-header-information:hover .vue-header-drop{
    display: block;
}
.vue-header-information:hover i{
    background: url(../assets/u19.png) no-repeat;
    display: block;
    width: 10px;
    height: 10px;
    float: left;
    margin: 20px 0 0 10px;
}
/* 下拉 */
.vue-header-drop{
    display: none;
    position: absolute;
    top: 55px;
    right: -45px;
    width: 223px;
    height: 286px;
    background: #fff;
    -moz-box-shadow: 0 0 5px rgba(0,0,0,.349019607843137);
    -webkit-box-shadow: 0 0 5px rgba(0,0,0,.349019607843137);
    box-shadow: 0 0 5px rgba(0,0,0,.349019607843137);
    border: 1px solid #bbb;
    z-index: 9999;
}
.vue-header-drop-top img{
    margin: 15px auto;
    display: block;
    width: 45px;
    height: 45px;
    border-radius: 100px;
}
.vue-header-drop-username{
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    text-align: center;
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 auto;
    font-family: '微软雅黑';
}
.vue-header-drop-id{
    display: table;
    margin: 5px auto -5px;
}
.vue-header-drop-id span,.vue-header-drop-id p{
     float:left;
     font-family: '微软雅黑';
     color:#666;
     font-size: 13px;
}
.vue-header-drop-id span{
    color:#666;
    margin: 0 auto 10px;
}

.vue-header-drop-companyDomain{
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    color: #666;
    text-align: center;
    margin: 0 auto 10px;
    max-width: 190px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: '微软雅黑';
}
.vue-header-drop-bottom a{
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: #666;
    cursor: pointer;
    display: inline-block;
    margin: 14px 100px 0 20px;
    font-family: '微软雅黑';
}
.vue-header-drop-bottom a:hover{
    color:#06c;
}
</style>
