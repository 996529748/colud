$(document).ready(function(){
	$.ajax({
		type:"get",
		url:"http://vip.foxitreader.cn/enterprise/listEnterpriseUsers",
		dataType: "jsonp",
        jsonp: 'jsonpcallback',
        success:function(data){
//      			console.log(data);       					
							//右上角账号信息
							$(".header-r-number").html(data.data[0].nickName);
				        	$(".user-name").html(data.data[0].userName);
				        	$(".header-r-usernumber").html(data.data[0].userName);
				        	$(".header-r-id").html("ID:"+data.data[0].userId);
				        	//管理员账号初始数据渲染
							$(".account-item2-1>.item-2-1>.input1").val(data.data[0].userId);
							$(".account-item2-1>.item-2-2>.input2").val(data.data[0].userName);
							$(".account-item2-1>.item-2-3>.input3").val(data.data[0].nickName);
							$(".account-item2-1>.item-2-4>.input4").val(data.data[0].email);
							$(".account-item2-1>.item-2-5>.input5").val(data.data[0].tel);
							//企业信息渲染数据
							//域名
							$(".information-item2-1>.item-2-2>.input2").val(data.data[0].companyDomain);
							$(".information-item2-1>.item-2-1>.input1").val($(".information-item2-1>.item-2-1>.input1").val());//企业名称
							$(".information-item2-1>.item-2-3>.input3").val(data.data[0].companyPhone);//联系电话
							$(".information-item2-1>.item-2-4>.input4").val(data.data[0].companyAddr);//联系地址
							$(".information-item2-1>.item-2-5>.input5").val(data.data[0].postalcode);//邮政编码
							//管理员账号渲染数据
							$(".account-item2-1>.item-2-3>.input3").val(data.data[0].nickName);//姓名
							$(".account-item2-1>.item-2-4>.input4").val(data.data[0].email);//邮箱
							$(".account-item2-1>.item-2-5>.input5").val(data.data[0].tel);//手机
							/*企业账号修改渲染*/
							$.ajax({
								type:"get",
								url:"http://vip.foxitreader.cn/enterprise/getEnterpriseInfo",//获取企业信息接口
								dataType:"jsonp",
								data:{},
								jsonp:'jsonpcallback',
								success:function(data){
//									console.log(data);
									$(".information-item2-1>.item-2-1>.input1").val(data.data.companyName);//企业名称
									$(".information-item2-1>.item-2-3>.input3").val(data.data.companyPhone);//联系电话
									$(".information-item2-1>.item-2-4>.input4").val(data.data.companyAddr);//联系地址
									$(".information-item2-1>.item-2-5>.input5").val(data.data.postalcode);//邮政编码
								}
							})
							/*管理员账号修改渲染*/
							$.ajax({
								type:"get",
								url:"http://vip.foxitreader.cn/enterprise/getEnterpriseUser",
								dataType:"jsonp",
								data:{},
								jsonp:'jsonpcallback',
								success:function(data){
//									console.log(data);
									$(".account-item2-1>.item-2-3>.input3").val(data.data.nickName);//姓名
									$(".account-item2-1>.item-2-4>.input4").val(data.data.email);//邮箱
									$(".account-item2-1>.item-2-5>.input5").val(data.data.tel);//手机
								}
							})
        			var Data=data.data;
		        	for(var i in Data){
		        		Data=data.data[i];
			        	var html='';
			        	var Email=Data.email==undefined?"":Data.email;//是否绑定邮箱
			        	var State=Data.status==1?"已锁定":"活动的";//状态
			        	if(Data.roleName=='admin'){      		
			        			html=`
				        		<tr class="tr">
									<th class="th-1">${Data.userId}</th>
									<th class="th-2">${Data.userName}<img src="img/u1.png" title="管理员帐号"><img></th>
									<th class="th-3">${Email}</th>
									<th class="th-4">${Data.tel}</th>
									<th class="th-5">${State}</th>
									<th class="th-6 tr1 tr-1">
										<div class="Locking" disabled="disabled">锁定</div>
										<div class="Delete" disabled="disabled">删除</div>
									</th>
								</tr>
					        	`;
					        	$('.thead').append(html);							
						//成员列表渲染
			        	}else{
			        		html=`
			        		<tr class="tr1">
								<th class="th-1">${Data.userId}</th>
								<th class="th-2">${Data.userName}</th>
								<th class="th-3">${Email}</th>
								<th class="th-4">${Data.tel}</th>
								<th class="th-5">${State}</th>
								<th class="th-6">
									<div class="locking"><a>解锁</a></div>
									<div class="delete"><a>删除</a></div>
									<div class="update"><a>修改</a></div>
								</th>
							</tr>
				        	`;
				        	$('.thead').append(html);	
			        	}
		        	}//for
        }
        
	});
	
	
	//企业信息、修改-保存-取消
	$('.Preservation').click(function(companyName,companyPhone,companyAddr,postalcode){
		$.ajax({
			type:"get",
			url:"http://vip.foxitreader.cn//enterprise/updateEnterpriseInfo",//修改企业信息接口
			dataType:"jsonp",
			data:{
				companyName:$(".information-item2-2>.item-2-1>.input-1").val(),
				companyPhone:$(".information-item2-2>.item-2-3>.input-3").val(),
				companyAddr:$(".information-item2-2>.item-2-4>.input-4").val(),
				postalcode:$(".information-item2-2>.item-2-5>.input-5").val()
			},
			jsonp: 'jsonpcallback',
			success:function(data){
				console.log(data);
				$(".information-item2-1>.item-2-1>.input1").val($(".information-item2-2>.item-2-1>.input-1").val());//企业名称
				$(".information-item2-1>.item-2-3>.input3").val($(".information-item2-2>.item-2-3>.input-3").val());//联系电话
				$(".information-item2-1>.item-2-4>.input4").val($(".information-item2-2>.item-2-4>.input-4").val());//联系地址
				$(".information-item2-1>.item-2-5>.input5").val($(".information-item2-2>.item-2-5>.input-5").val());//邮政编码
			},
		});
		//保存的DOM操作
		if($('.information-item2-1').hasClass("none")){
   			$('.information-item2-1').removeClass("none");
   			$('.information-item2-2').addClass("none");
   		};
	});
	//点击修改数据展示
		$(".information-item1>a").click(function(){
			$(".information-item2-2>.item-2-2>.input2").val($(".information-item2-1>.item-2-2>.input2").val());//企业域名
			$(".information-item2-2>.item-2-1>.input-1").val($(".information-item2-1>.item-2-1>.input1").val());//企业名称
			$(".information-item2-2>.item-2-3>.input-3").val($(".information-item2-1>.item-2-3>.input3").val());//联系电话
			$(".information-item2-2>.item-2-4>.input-4").val($(".information-item2-1>.item-2-4>.input4").val());//联系地址
			$(".information-item2-2>.item-2-5>.input-5").val($(".information-item2-1>.item-2-5>.input5").val());//邮政编码
		})	
		
		
	//管理员账号信息、修改-保存-取消
	$('.Preservation-1').click(function(nickName,email,tel){	
		$.ajax({
			type:"get",
			url:"http://vip.foxitreader.cn/enterprise/updateEnterpriseUser",
			dataType:"jsonp",
			data:{
				nickName:$(".account-item2-2>.item-2-3>.input-3").val(),
				email:$(".account-item2-2>.item-2-4>.input-4").val(),
				tel:$(".account-item2-2>.item-2-5>.input-5").val()
			},
			jsonp:'jsonpcallback',
			success:function(data){
				console.log(data);
				$(".account-item2-1>.item-2-3>.input3").val($(".account-item2-2>.item-2-3>.input-3").val());//姓名
				$(".account-item2-1>.item-2-4>.input4").val($(".account-item2-2>.item-2-4>.input-4").val());//邮箱
				$(".account-item2-1>.item-2-5>.input5").val($(".account-item2-2>.item-2-5>.input-5").val());//手机
			},
		});	
		//保存的DOM操作
		if($('.account-item2-1').hasClass("none")){  				
   				$('.account-item2-1').removeClass("none");
   				$('.account-item2-2').addClass("none");
   		}
	});
	//点击修改数据展示
	$(".account-item1>a").click(function(){
		$(".account-item2-2>.item-2-1>.input1").val($(".account-item2-1>.item-2-1>.input1").val());//ID
		$(".account-item2-2>.item-2-2>.input2").val($(".account-item2-1>.item-2-2>.input2").val());//账号
		$(".account-item2-2>.item-2-3>.input-3").val($(".account-item2-1>.item-2-3>.input3").val());//姓名
		$(".account-item2-2>.item-2-4>.input-4").val($(".account-item2-1>.item-2-4>.input4").val());//邮箱
		$(".account-item2-2>.item-2-5>.input-5").val($(".account-item2-1>.item-2-5>.input5").val());//手机
	})

	
})

