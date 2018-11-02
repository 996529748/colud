<template>
    <div class="account">
        <div class="account-item1">
            <h1>账号信息</h1>
            <a>修改</a>
        </div>				
      	<form class="user_submit" novalidate="novalidate">
			<div class="account-item2">							
				<ul class="account-item2-2">
					<li class="item-2-1 item-2-1-id">ID：<input class="input1" type="text" disabled="disabled" value="30000758"></li>
					<li class="item-2-2">账号：<input class="input2" type="text" disabled="disabled" value="777@danteng.foxitcloud.cn"></li>
					<li class="item-2-3">姓名：<input class="input-3 admin-input admin-input1 border" id="name" name="name" type="text" value="茶叶蛋"></li>
					<li class="item-2-4">邮箱：<input class="input-4 admin-input admin-input2 border" id="email" name="email" type="text" value="996529748@qq.com"></li>
					<li class="item-2-5">手机：<input class="input-5 admin-input admin-input3 border" id="tel" name="tel" type="text" value="17758937232"></li>
					<li class="account-item2-6">
						<div class="Preservation-1">保存</div>
						<div class="cancel-1">取消</div>
					</li>
				</ul>
			</div>
		</form>
   </div>
</template>
<style scoped src="../css/globals.css"></style>
<style scoped>
/*管理员账号*/
.account{
    padding-left: 245px
}
.account-item1{
	margin-top:75px;
	height: 50px;
	border-bottom: 1px solid #D7D7D7;
    font-family: '微软雅黑';
}
.account-item1>h1,.account-item1>a{
	float:left;
}
.account-item1>h1{
	font-size:16px;
}
.account-item1>a{
	line-height:23px;
	font-size: 12px;
	margin-left:20px;
	cursor: pointer;
}
.item-2-1-id{
	text-indent: 15px;
}
.account-item1>a:hover,.information-item1>a:hover{
	color: #06c;
    text-decoration: underline;
}
.account-item2-6>div{
	float:left;
	width: 90px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    margin-left:42px;
    margin-top:30px;
    text-align: center;
}
.Preservation-1{	
	color:#FFFFFF;
	background-color: #06c;
	font-size:13px;
    font-family: '微软雅黑';
}
.Preservation-1:hover{
	background: #0081e8;
}
.cancel-1{
	background-color:#FFFFFF;
	color:#333;
	border:1px solid #d3d3d3;
	font-size:13px;
    font-family: '微软雅黑';
}
.cancel-1:hover{
	border: 1px solid #0081e8;
    color: #0081e8;
}
.item-2-1-id {
    text-indent: 15px;
}
.item-2-1, .item-2-2, .item-2-3, .item-2-4, .item-2-5 {
    margin-top: 10px;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    font-family: 微软雅黑;
}
.border {
    border: 1px solid #ccc !important;
}
.input-1, .input1, .input2, .input-3, .input-4, .input-5 {
    width: 346px;
    height: 38px;
    line-height: 38px;
    box-sizing: border-box;
    border: 0px solid #ccc;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: #333;
    outline: 0;
    text-indent: 10px;
    border-radius: 2px;
    font-family: '微软雅黑';
}
.input1, .input2, .input3, .input4, .input5 {
    outline: none;
    border: none;
    background: #fefefe;
    width: 300px;
    font-family: '微软雅黑';
}
</style>
