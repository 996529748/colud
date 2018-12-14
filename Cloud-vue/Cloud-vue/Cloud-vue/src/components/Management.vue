<template>
    <div class="vue-main-right">
        <!--添加成员按钮-->
        <div class="vue-main-right-item1">
            <div class="vue-add">
                <span class="vue-add-btn" href="">添加成员</span>
                <i class="vue-add-img">
                    <div class="vue-main-right-hover hover">
                        <h3>添加成员</h3>
                        <p>添加成员成功后，该成员</p>
                        <p>会收到福昕云办公下发的</p>
                        <p>激活邮件和激活短信，根</p>
                        <p>据指引完成激活后，可以</p>
                        <p>使用;</p>
                    </div>
                </i>                    
                <!--搜索-->
                <div class="vue-search">
                    <input class="vue-search-input" placeholder="搜索账号" type="text" />
                    <span class="vue-search-btn">搜索</span>
                </div>
            </div>
        </div>
        <!-- 信息表 -->
        <table>
            <thead>
                <tr>
                    <th class="th1">ID</th>
                    <th class="th2">账号</th>
                    <th class="th3">邮箱</th>
                    <th class="th4">手机</th>
                    <th class="th5">
                    <div class="i">
                        状态
                        <div class="drop none">
                        <ul class="thead_status">
                            <li data-status="10">全部的</li>
                            <li data-status="0" data-name="活动的">活动的</li>
                            <li data-status="1" data-name="锁定的">锁定的</li>
                        </ul>
                        </div>
                    </div>
                    </th>
                    <th class="th6">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="Management in Management" class="disabled">
                    <td class="table_id" >{{Management.userId}}</td>
                    <td>
                        <p title="">{{Management.userName}}</p>                  
                    </td>
                    <td>{{Management.email}}</td>
                    <td>{{Management.tel}}</td>
                    <td>已锁定</td>
                    <td>
                        <div class="lockUnlock" data-userid="30000804" data-status="0" data-pagenumber="">解锁</div>
                        <div class="orderDelete" data-userid="30000804" data-username="44444@danteng.foxitcloud.cn">删除</div>
                        <div class="modify" data-userid="30000804" data-nickname="44444" data-email="996529748@qq.com" data-tel="17758937232">修改</div>
                    </td>
                </tr>
            </tbody>
            <!-- 表格尾部==分页-->
            <tfoot>
                
            </tfoot>
        </table>
    </div>   
</template>
<script>
export default {
  data() {
    return {
      change: false,
      Management:{ }
    };
  },
  created() {
    var that = this;
    this.$http.jsonp('http://vip.foxitreader.cn/enterprise/listEnterpriseUsers',{jsonp:"jsonpcallback"}).then(function(response){
        that.Management= response.data.data;
        console.log(that.Management);
    },function(){
        console.log('请求失败处理');
    })
  },
  methods: {
    
  }
};
</script>
<style scoped src="../css/globals.css"></style>
<style scoped>
i{ font-style:normal}
.vue-add{
    margin-top: 75px;
    position: relative;
    font-family: '微软雅黑';
}
.vue-add-btn{
    display: block;
    width: 90px;
    height: 36px;
    text-align: center;
    font-weight: 400;
    font-size: 13px;
    cursor: pointer;
    float: left;
    background-color: #06c;
    line-height: 36px;
    color: #FFFFFF;
}
.vue-add-btn:hover{
    background: #0081e8;
}
.vue-add-img{
    background-image: url(../assets/u2.png);
    margin-left: 7px;
    cursor: pointer;
    left: 41px;
    padding-left: 21px;
    line-height: 35px;
    cursor: pointer;
}
.vue-main-right{
    margin-left: 245px;
}
.hover{
    display: none;
    width: 200px;
    height: 220px;
    border: 1px solid #bbb;
    box-shadow: 0 0 5px rgba(0,0,0,.349019607843137);
    position: absolute;
    top: 30px;
    z-index: 99999;
    background-color: #FFFFFF;
    left: 355px;
}
.vue-add-img:hover .hover{
    display: block;
    width: 200px;
    height: 220px;
    border: 1px solid #bbb;
    box-shadow: 0 0 5px rgba(0,0,0,.349019607843137);
    position: absolute;
    left: 105px;
    top: 30px;
    z-index: 99999;
    background-color: #FFFFFF;
}
.vue-add .vue-main-right-hover h3{
    margin: 10px 0px 0px 15px;
    font-size: 16px;
    font-family: '微软雅黑';
    font-weight: 500;
}
.vue-main-right-hover p{
    font-size: 14px;
    color: #666;
    text-indent: 15px;
    font-family: '微软雅黑';
    margin: 0px 0px;
    height: 28px;
}
/*搜索*/
.vue-search{
    float: right;
    border: 1px solid #d3d3d3;
    width: 250px;
}
.vue-search-input{
    width: 172px;
    height: 36px;
    line-height: 36px;
    border: none;
    border-radius: 3px;
    outline: 0;
    text-indent: 10px;
    font-size: 14px;
    font-family: "微软雅黑";
}
.vue-search-btn{
    display: inline-block;
    width: 70px;
    height: 36px;
    font-size: 13px;
    text-align: center;
    line-height: 36px;
    background: #f5f5f5;
    cursor: pointer;
    color: #333;
    font-family: '微软雅黑';
}
/* 表格 */
table{
	width: 100%;
	margin-top:20px;
	cursor: default;
    min-width: 955px;
    font-family: "微软雅黑";
    font-size:14px;
    border-collapse: collapse;
}
thead tr{
	background: #efefef;
	height: 50px;
    width: 100%;
}
td{
    height: 50px;
}
th{
	text-align: left;
	font-weight: 400 !important;
    font-size: 14px;
}
.th1{
	width: 14%;
	text-indent: 15px
}
.th2{
	width: 24%;
}
.th3{
	width: 22%;
}
.th4{
	width: 20%;
}
.th5{
	width: 10%;
}
.th5-drop{
	width: 76px;
    height: 100px;
    border: 1px solid #bbb;
    position: absolute;
    top: 23px;
    background: #fff;
    z-index: 9999;
    text-align: center;
    right:-60px;
    display: none;
    box-shadow: 0 0 5px rgba(0,0,0,.349019607843137);
}
.th5-drop-p1{
	margin-top:10px;
}
.th5-drop>p>a:hover {
    color: #06c;
    cursor: pointer;
}
.th5-div{
	background-image: url(../assets/u3.png);
	width: 22px;
	height: 22px;
	display: inline-block;
	position:relative;
	vertical-align: bottom;
	padding:3px 0px;
}
.th-5-text{
	line-height: 30px;
}
.th5-div:hover .th5-drop{
	display:block
}
.th5-drop>p{
	height: 30px;
}
.th6{
	width: 10%;
}
.thead_status{
    display: none;
}
.lockUnlock,.orderDelete,.modify{
    float: left;
    color: #0071e1;
    cursor: pointer;
}
.orderDelete{
    margin: 0 5px;
}
tbody .table_id{
    text-indent: 15px;
}
</style>
