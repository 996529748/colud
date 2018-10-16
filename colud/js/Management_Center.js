$(document).ready(function(){
	
	function Index(){
		
		this._sign();//是否登录.
		
		this._Administrators();//管理员
		
		this._enterprise();//企业信息
				
		this._event();//时间绑定
		
		this._Member();//成员管理
    }
	
	/*
	 * 判断是否处于登陆
	 */
	Index.prototype._sign=function(){
		$.ajax({
			type:"get",
			url:"http://vip.foxitreader.cn/getUserInfoApi",
			dataType: "jsonp",
	        jsonp: 'jsonpcallback',
	        success:function(data){
	        	if(data.ret !== 302){//如果不处于未登录转态
		        	if(data.data.roleName === 'admin'){//为企业账号，填写信息
		        		$(".header-r-number").html(data.data.nickname);
						$(".user-name").html(data.data.userName);
						$(".header-r-usernumber").html(data.data.userName);
						$(".header-r-id").html("ID:"+data.data.userId);
		        	}else{//否则跳转到登录页
	//	        		window.location.href = 'http://vip.foxitreader.cn/userCenter';
		        	}
	        	}else{//跳转到主页
	//      			window.location.href = 'http://work.foxitcloud.cn/index.html';
	        	}
	        }
		})
	};
	/*
	 * 成员管理页面
	 */
	Index.prototype._Member=function(){
	     $('#page').pagination({
	        dataSource: function(done) {
	                        $.ajax({
	                            type: 'get',
	                            url:"http://vip.foxitreader.cn/enterprise/listEnterpriseUsers",
	                            dataType: "jsonp",
	                            jsonp: 'jsonpcallback',
	                            success: function(response) {
	                              done(response.data);
	                            }
	                        });
	                     },//总数据
	        pageSize: 12,//每页条数
	        prevText:"<",
	        nextText:">",
	        callback: function(data, pagination){
	        	console.log(data);
	        	var source = $("#entry-template-Member").html();
	  			var template = Handlebars.compile(source);
	  			$(".thead").append(template(data));
	        }
		});
	}
	
	/*
	 * 管理员账号界面
	 */
	Index.prototype._Administrators=function(){
		$.ajax({
	   		type:"get",
	   		url:"http://vip.foxitreader.cn/enterprise/getEnterpriseUser",
	   		dataType: "jsonp",
        	jsonp: 'jsonpcallback',
        	success:function(data){
        		var source = $("#entry-template-Administrators").html();
	  			var template = Handlebars.compile(source);
	  			$(".account").append(template(data.data));	
        	}
	   	});	   
	}
	
	/*
	 * 企业信息界面
	 */
	Index.prototype._enterprise=function(){
		$.ajax({
			type:"get",
			url:"http://vip.foxitreader.cn/enterprise/getEnterpriseInfo",
			dataType:"jsonp",
			jsonp:'jsonpcallback',
			success:function(data){
				var source = $("#entry-template-enterprise").html();
	  			var template = Handlebars.compile(source);
	  			$(".information-form").append(template(data.data));
			}
		});
		
	}
	
	/*
	 * 事件绑定
	 */
	Index.prototype._event=function(){
//		添加成员弹框
		$(".item1-add-btn").on("click",function(){
		    layer.open({
		      type: 1,
		      area: ['470px', '432px'],
		      title:"添加成员",
		      shadeClose: true, //点击遮罩关闭
		      content: '<form action="" class="table">'+
		      			'<div class="modal-box-item2">'+
							'<ul>'+
								'<li class="modal-box-item2-1">'+
									'<span>*账号：</span>'+
									'<input class="modal-box-item2-1-input" id="user_id" name="user_id" type="text" />'+
									'<span class="modal-box-item2-1-search"></span>'+
								'</li>'+
								'<li class="modal-box-item2-2">'+
									'<span>*邮箱：</span>'+
									'<input class="modal-box-item2-2-input"  id="email" name="email" type="text" />'+									
								'</li>'+
								'<li class="modal-box-item2-3">'+
									'<span>*手机：</span>'+
									'<input class="modal-box-item2-3-input" id="tel" name="tel" type="text" />'+
								'</li>'+
								'<li class="modal-box-item2-4">'+
									'<a class="modal-box-item2-3-btn">添加</a>'+
								'</li>'+
							'</ul>'+
						'</div>'+		      			
		      			'</form>'	      
		    });		    
		});
	}
		
//		修改成员信息弹窗
//		$(".update>a").on("click",function(){
//		    layer.open({
//		      type: 1,
//		      area: ['470px', '432px'],
//		      title:"修改成员信息",
//		      shadeClose: true, //点击遮罩关闭
//		      content: '<form action="" class="table">'+
//		      			'<div class="modal-box-item2">'+
//							'<ul>'+
//								'<li class="modal-box-item2-1">'+
//									'<span>*账号：</span>'+
//									'<input class="modal-box-item2-1-input" id="user_id" name="user_id" type="text" />'+
//									'<span class="modal-box-item2-1-search"></span>'+
//								'</li>'+
//								'<li class="modal-box-item2-2">'+
//									'<span>*邮箱：</span>'+
//									'<input class="modal-box-item2-2-input"  id="email" name="email" type="text" />'+									
//								'</li>'+
//								'<li class="modal-box-item2-3">'+
//									'<span>*手机：</span>'+
//									'<input class="modal-box-item2-3-input" id="tel" name="tel" type="text" />'+
//								'</li>'+
//								'<li class="modal-box-item2-4">'+
//									'<a class="modal-box-item2-3-btn">添加</a>'+
//								'</li>'+
//							'</ul>'+
//						'</div>'+		      			
//		      			'</form>'	      
//		    });		    
//		});
//	}
//	$.ajax({
//		type:"get",
//		url:"http://vip.foxitreader.cn/enterprise/listEnterpriseUsers",
//		dataType: "jsonp",
//      jsonp: 'jsonpcallback',
//      success:function(data){     					
//				        	//管理员账号初始数据渲染
//							$(".account-item2-2>.item-2-1>.input1").val(data.data[0].userId);
//							$(".account-item2-2>.item-2-2>.input2").val(data.data[0].userName);
//							$(".account-item2-2>.item-2-3>.input-3").val(data.data[0].nickName);
//							$(".account-item2-2>.item-2-4>.input-4").val(data.data[0].email);
//							$(".account-item2-2>.item-2-5>.input-5").val(data.data[0].tel);
//							//企业信息渲染数据
//							//添加弹窗的域名
//							$(".modal-box-item2-1-search").html("@"+data.data[0].companyDomain+".foxitcloud.cn");							
//							$(".information-item2-2>.item-2-2>.input2").val(data.data[0].companyDomain);//域名					
//							/*企业账号修改渲染*/
//							$.ajax({
//								type:"get",
//								url:"http://vip.foxitreader.cn/enterprise/getEnterpriseInfo",//获取企业信息接口
//								dataType:"jsonp",
//								data:{},
//								jsonp:'jsonpcallback',
//								success:function(data){								
//									$(".information-item2-2>.item-2-1>.input-1").val(data.data.companyName);//企业名称
//									$(".information-item2-2>.item-2-3>.input-3").val(data.data.companyPhone);//联系电话
//									$(".information-item2-2>.item-2-4>.input-4").val(data.data.companyAddr);//联系地址
//									$(".information-item2-2>.item-2-5>.input-5").val(data.data.postalcode);//邮政编码
//								}
//							})
//							/*管理员账号修改渲染*/
//							$.ajax({
//								type:"get",
//								url:"http://vip.foxitreader.cn/enterprise/getEnterpriseUser",
//								dataType:"jsonp",
//								data:{},
//								jsonp:'jsonpcallback',
//								success:function(data){
//									$(".account-item2-1>.item-2-3>.input3").val(data.data.nickName);//姓名
//									$(".account-item2-1>.item-2-4>.input4").val(data.data.email);//邮箱
//									$(".account-item2-1>.item-2-5>.input5").val(data.data.tel);//手机
//								}
//							})
//      }//success
        
//	});
			//点击修改
				$(".information-item1>a").click(function(){
					//企业信息表单验证
					$(function(){
				            var validate = $(".submit").validate({
				                debug: false, //调试模式   true取消submit的默认提交功能   
				                //errorClass: "label.error", //默认为错误的样式类为：error   
				                focusInvalid: true, //当为false时，验证无效时，没有焦点响应     //提交表单后,未通过验证的表单(第一个或提交之前获得焦点的未通过验证的表单)会获得焦点 默认:true   
				                submitHandler: function(form){   //表单提交句柄,为一回调函数，带一个参数：form     
				                    form.submit();   //提交表单   
				                },  
				                rules:{
				                    tel:{
				                        required:true,
				                        digits:true,
				                        minlength:11,
				                        maxlength:11
				                    },
				                    addr:{
				                        required:true,
				                    },
				                    postalcode:{
				                        required:true,
				                        digits:true, 
				                        minlength:6,
				                        maxlength:6
				                    },               
				                },
				                messages:{
				                    tel:{
				                        required:"请填写您的手机号",
				                        minlength:"请填写正确的手机号",
				                        maxlength:"请填写正确的手机号"
				                    },
				                    addr:{
				                        required:"请填写您的地址",
				                    },
				         			postalcode:{
				         				required:"请填写您的邮政编码",
				         				minlength:"请输入正确的邮政编码",
				         				maxlength:"请输入正确的邮政编码"
				         			}
				                }
				                          
				            });    
				    
				    });//插件
			   })
				$(".account-item1>a").click(function(){
				    //管理员账号表单验证
					$(function(){
				            var validate = $(".user_submit").validate({
				                debug: false, //调试模式   true取消submit的默认提交功能   
				                //errorClass: "label.error", //默认为错误的样式类为：error   
				                focusInvalid: true, //当为false时，验证无效时，没有焦点响应     //提交表单后,未通过验证的表单(第一个或提交之前获得焦点的未通过验证的表单)会获得焦点 默认:true   
				                submitHandler: function(form){   //表单提交句柄,为一回调函数，带一个参数：form     
				                    form.user_submit();   //提交表单   
				                },  
				                rules:{
				                    name:{
				                        required:true,
				                    },
				                    email:{
				                        required:true,
	                        			email:true
				                    },
				                    tel:{
				                        required:true,
				                        digits:true, 
				                        minlength:11,
				                        maxlength:11
				                    },               
				                },
				                messages:{
				                    name:{
				                        required:"请填写您的姓名",
				                    },
				                    email:{
				                        required:"请填写您的邮箱",
	                        			email:"E-Mail格式不正确"
				                    },
				         			tel:{
				         				required:"请填写您的电话号码",
				         				minlength:"请输入正确的电话号码",
				         				maxlength:"请输入正确的电话号码"
				         			}
				                }
				                          
				            });    
				    
				    });//插件
				})
	//企业信息、修改-保存
	$('.Preservation').click(function(companyName,companyPhone,companyAddr,postalcode){
			//添加只读
			$(".information-item2-2>li>input").prop('readonly',true);
			//光标取消
			$('input[readonly], textarea[readonly]').attr('unselectable','on');
		
		if($(".submit").validate().form()){
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
					//保存的DOM操作
					$(".information-item2-2>.item-2-1>.input-1").removeClass("border");
			   		$(".information-item2-2>.item-2-3>.input-3").removeClass("border");
			   		$(".information-item2-2>.item-2-4>.input-4").removeClass("border");
			   		$(".information-item2-2>.item-2-5>.input-5").removeClass("border");
			   		$(".information-item2-2>.item-2-6").addClass("none");			   		
				},
			});
		}//if
	});
	
	
	//管理员账号信息、修改-保存
	$('.Preservation-1').click(function(nickName,email,tel){
		if($(".user_submit").validate().form()){
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
					$(".account-item2-2>.item-2-3>.input-3").val($(".account-item2-2>.item-2-3>.input-3").val());//姓名
					$(".account-item2-2>.item-2-4>.input-4").val($(".account-item2-2>.item-2-4>.input-4").val());//邮箱
					$(".account-item2-2>.item-2-5>.input-5").val($(".account-item2-2>.item-2-5>.input-5").val());//手机
					//渲染修改成功页面到首页管理员
					$(".header-r-number").html($(".account-item2-2>.item-2-3>.input-3").val());
					$(".thead-th-3").html($(".account-item2-2>.item-2-4>.input-4").val());
					$(".thead-th-4").html($(".account-item2-2>.item-2-5>.input-5").val());				
				},
			});		
			//保存的DOM操作
			$(".account-item2-2>.item-2-3>.input-3").removeClass("border");
			$(".account-item2-2>.item-2-4>.input-4").removeClass("border");
			$(".account-item2-2>.item-2-5>.input-5").removeClass("border");
			$(".account-item2-6").addClass("none");
		}//if
			//添加只读
			$(".account-item2-2>li>input").prop('readonly',true);
			//光标取消
			$('input[readonly], textarea[readonly]').attr('unselectable','on');
	});
	//点击修改数据展示
//	$(".account-item1>a").click(function(){
////		$(".account-item2-2>.item-2-1>.input1").val($(".account-item2-2>.item-2-1>.input1").val());//ID
////		$(".account-item2-2>.item-2-2>.input2").val($(".account-item2-2>.item-2-2>.input2").val());//账号
////		$(".account-item2-2>.item-2-3>.input-3").val($ (".account-item2-2>.item-2-3>.input-3").val());//姓名
////		$(".account-item2-2>.item-2-4>.input-4").val($(".account-item2-2>.item-2-4>.input-4").val());//邮箱
////		$(".account-item2-2>.item-2-5>.input-5").val($(".account-item2-2>.item-2-5>.input-5").val());//手机
//	})
	
	//状态列表筛选
		$(".th5-drop>p>a").click(function(){
			var text=$(this).html();
			if(text=="全部的"){
				$(".tr1").show();
			}else if(text=="活动的"){
				$(".tr1").hide();
				$(".th-5").filter(":contains('"+$(this).html()+"')").parent().show();
			}else if(text=="锁定的"){
				$(".tr1").hide();
				$(".th-5").filter(":contains('"+"锁"+"')").parent().show();
			}
		})	 
		//判断浏览器是否支持placeholder属性
	    var supportPlaceholder = 'placeholder' in document.createElement('input');
	
	    var placeholder = function placeholder(input) {
	
	      var text = input.attr('placeholder'),
	          defaultValue = input.defaultValue;
	
	      if (!defaultValue) {
	
	        input.val(text).addClass("phcolor");
	      }
			
	      input.focus(function () {
	
	        if (input.val() == text) {
	
	          $(this).val("");
	          //修改属性
	        }
	      });
	
	      input.blur(function () {
	
	        if (input.val() == "") {
	
	          $(this).val(text).addClass("phcolor");
	        }
	      });
	
	      //输入的字符不为灰色
	      input.keydown(function () {
	
	        $(this).removeClass("phcolor");
	      });
	    };
	
	    //当浏览器不支持placeholder属性时，调用placeholder函数
	    if (!supportPlaceholder) {
	
	      $('input').each(function () {
	
	        text = $(this).attr("placeholder");
	
	        if ($(this).attr("type") == "text" || $(this).attr("type") == "password") {
	
	          placeholder($(this));
	        }
	      });
	    }
	    
	new Index();
})
