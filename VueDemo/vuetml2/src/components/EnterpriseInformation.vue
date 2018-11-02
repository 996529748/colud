<template>
    <div class="information-all">
        <div class="information-item1">
            <h1>企业资料</h1>
            <a>修改</a>
        </div>
        <div class="information-form">					
        <form class="submit">	
            <div class="information-item2">						
                <ul class="information-item2-2">
                    <li class="item-2-1">企业名称：
                        <input class="input-1 text-updata updata-item2-input1 border" type="text" value="17758937232">
                    </li>
                    <li class="item-2-2">企业域名：
                        <input class="input2" type="text" disabled="disabled border" value="danteng">
                    </li>
                    <li class="item-2-3">联系电话：
                        <input class="input-3 text-updata updata-item2-input3 border" id="tel" name="tel" type="text" value="17758937232">
                    </li>
                    <li class="item-2-4">联系地址：
                        <input class="input-4 text-updata updata-item2-input4 border" id="addr" name="addr" type="text" value="121">
                    </li>
                    <li class="item-2-5">邮政编码：
                        <input class="input-5 text-updata updata-item2-input5 border" id="postalcode" name="postalcode" type="text" value="350000">
                    </li>
                    <li class="item-2-6 none">
                        <div class="Preservation">保存</div>
                        <div class="cancel">取消</div>
                    </li>			
                </ul>	
            </div>
        </form>
	</div>
        <!--授权-->
        <div class="authorization-item1">
            <h1>授权信息</h1>
        </div>
        <div class="authorization-item2">
            <ul>
                <li class="item-2-1">授权服务：<span>福昕云办公服务（包含福昕PDF编辑器客户端、福昕PDF转WORD客户端)</span></li>
                <li class="item-2-2">订阅数量：
                    <span><span>0</span>个（已使用<span>0</span>个,剩余<span>0</span>个）</span>
                    <a class="increase" href="http://work.foxitcloud.cn/buy.html?type=add_member" target="_blank">增加数量</a>
                </li>
                <li class="item-2-3 item-li-p">
                    <p class="item-2-3-p">限用户账号登录使用，同一用户最多支持3台浮动电脑上使用，不可同时在2台以上电脑使用</p>
                    <p class="item-2-3-p">账号使用权限包括福昕PDF编辑器、福昕PDF转WORD</p>
                </li>
                <li class="item-2-4 item-2-4-1">授权书：
                    <span>授权书到期时间：</span>
                    <a class="authorization" href="http://work.foxitcloud.cn/buy.html?type=delay" target="_blank">延长授权</a>
                </li>
            </ul>
        </div>
	</div>
</template>

<style scoped src="../css/globals.css"></style>
<style scoped>
.information-all{
    padding-left: 245px;
}
.information-item1{
	margin-top:75px;
	height: 50px;
	border-bottom: 1px solid #D7D7D7;
    font-family: '微软雅黑';
}
.information-item1>h1,.information-item1>a{
	float:left;
}
.information-item1>h1{
	font-size:16px;
}
.information-item1>a{
	line-height:23px;
	font-size: 12px;
	margin-left:20px;
	cursor: pointer;
}
.input1,.input2,.input3,.input4,.input5{
	outline: none;
	border: none;
	background: #fefefe;
	width:300px;
}
.input2{
	width: 300px;
}
.item-2-1,.item-2-2,.item-2-3,.item-2-4,.item-2-5{
	margin-top:10px;
	height: 38px;
	line-height: 38px;
	font-size: 14px;
	font-family: "微软雅黑";
}
/*增加按钮*/
.increase,.authorization{
	display: inline-block;
	width: 86px;
	height: 32px;
	line-height: 32px;
	text-align: center;
	color: #06c;
	border: 1px solid #06c;
}
.increase:hover,.authorization:hover{
	border: 1px solid #0081e8;
    color: #0081e8 !important;
}
.authorization{
	text-indent: 0px !important;
}
/*授权*/
.authorization-item1{
	margin-top:100px;
	height: 50px;
	border-bottom: 1px solid #D7D7D7;
}
.authorization-item1>h1{
	font-size:16px;
    font-family: '微软雅黑';
}
.authorization-item2{
	margin-bottom: 100px;
}
.item-2-3-p{
	font-size:12px;
	color:#999999;
	height: 16px;
	margin-left:75px;
}
.item-li-p{
	margin-top:0px;
}
.item-2-4-1{
	margin-top:25px;
	text-indent: 15px;
}
/*保存取消按钮*/
.item-2-6>div{
	float:left;
	width: 90px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    margin-left:70px;
    margin-top:30px;
    text-align: center;
    font-family: '微软雅黑';
}
.Preservation{	
	color:#FFFFFF;
	background-color: #06c;
	font-size:13px;
    font-family: '微软雅黑';
}
.Preservation:hover{
	background: #0081e8;
}
.cancel{
	background-color:#FFFFFF;
	color:#333;
	border:1px solid #d3d3d3;
	font-size:13px;
    font-family: '微软雅黑';
}
.cancel:hover{
	border: 1px solid #0081e8;
    color: #0081e8;
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
</style>
