$(document).ready(function(){
	
	function header(){
		
		this._sign();//是否登录
		
		this._leftcss();//左侧自适应高度样式
		
		this._leftclick();//左侧选项卡切换
		
		this._leftupdate();//企业信息-管理员账号修改数据操作
		
		this._enterprise();//企业信息渲染
		
		this._validate();//表单验证插件
		
		this._validate1();//表单验证插件
    }
	
	/*
	 * 判断是否处于登陆
	 */
	header.prototype._sign=function(){
		$.ajax({
			type:"get",
			url:"http://vip.foxitreader.cn/getUserInfoApi",
			dataType: "jsonp",
	        jsonp: 'jsonpcallback',
	        success:function(data){
	        	if(data.ret !== 302){//如果不处于  未登录  状态
		        	if(data.data.roleName === 'admin'){//为企业账号时，填写右上角信息
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
	 * 左侧自适应高度背景
	 */
	header.prototype._leftcss=function(){
		//加载页面完成时左侧导航栏的高度
		 $(function(){
		 	var height=$(window).height();
		 	$(".main-l").css("height",height);
		 });
		//左侧导航窗口可视高度
		$(window).resize(function () {//当浏览器大小发生变化时发生的事件
		    var height=$(window).height();
		    $(".main-l").css("height",height);
		});
		//滚动条监听可视高度
		$(window).scroll(function(event){
			var s=$(window).scrollTop();
			var height=$(window).height()+s;
		    $(".main-l").css("height",height);
   		}); 	
	}
	
	//企业信息样式重置
	function css(){
		$(".information-item2-2>.item-2-6").addClass("none");
		$(".text-updata").removeClass("border");
	}
	
	//管理员信息样式重置
	function css1(){
		$(".admin-input").removeClass("border");
		$(".account-item2-6").addClass("none");
	}
	
	/*
	 * 选项卡切换事件
	 */
	header.prototype._leftclick=function(){
		//企业信息
		$(".item-4").on("click",function(){
				if(!$(".item-4").hasClass("item-bg-color")){
					$(".item-4").addClass("item-bg-color");
					$(".item-2,.item-5").removeClass("item-bg-color");
					$(".main-r-item1,table,.Page,.account").addClass("none");				
					$(".information-all").removeClass("none");					
				}
		});
		//管理员账号
		$(".item-5").click(function(){
				if(!$(".item-5").hasClass("item-bg-color")){
					$(".item-5").addClass("item-bg-color");
					$(".item-2,.item-4").removeClass("item-bg-color");
					$(".main-r-item1,table,.Page,.information-all").addClass("none");
					$(".account").removeClass("none");
				}
			});
		//成员管理
		$(".item-2").click(function(){
				if(!$(".item-2").hasClass("item-bg-color")){
					$(".item-2").addClass("item-bg-color");
					$(".item-4,.item-5").removeClass("item-bg-color");
					$(".account,.information-all").addClass("none");
					$(".main-r-item1,table,.Page").removeClass("none");
				}
		})
			
	}
	
	
	/*
	 * 企业信息界面渲染
	 */		
	header.prototype._enterprise=function(){
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
	 * 企业信息-管理员账号修改数据操作
	 */
	header.prototype._leftupdate=function(){
	/*
	 * 企业信息
	 */	
	 var that=this;
		//修改
		$(".information-item1>a").click(function(){
			//调用验证插件
			that._validate();
			//input样式边框
   			$(".text-updata").addClass("border");  			
   			$(".information-item2-2>.item-2-6").removeClass("none");
	   		//企业信息的数据修改与保存
	   		//获取存值的信息
			var companyName=$(".updata-item2-input1").val();//企业名称
			var companyPhone=$(".updata-item2-input3").val();//企业电话
			var companyAddr=$(".updata-item2-input4").val();//企业地址
			var postalcode=$(".updata-item2-input5").val();//邮编			
			$(".Preservation").off().on("click",function(){
				//声明判断需要遍量
				var companyName=$(".updata-item2-input1").val();//企业名称
				var companyPhone=$(".updata-item2-input3").val();//企业电话
				var companyAddr=$(".updata-item2-input4").val();//企业地址
				var postalcode=$(".updata-item2-input5").val();//邮编
//				if(companyName==$(".updata-item2-input1").val() && companyPhone==$(".updata-item2-input3").val() && companyAddr==$(".updata-item2-input4").val() && postalcode==$(".updata-item2-input5").val()){
//					console.log("未修改信息，不请求");
//					//样式重置
//					css();
//					return;
//				}else{
					
					//验证通过时，发送保存请求，否则不发送
					if(!$(".submit").validate().form()){
						return;
					}else{
						//获取修改后的信息
						var companyName=$(".updata-item2-input1").val();//企业名称
						var companyPhone=$(".updata-item2-input3").val();//企业电话
						var companyAddr=$(".updata-item2-input4").val();//企业地址
						var postalcode=$(".updata-item2-input5").val();//邮编
						$.ajax({
							type:"get",
							url:"http://vip.foxitreader.cn/enterprise/updateEnterpriseInfo",
							dataType:"jsonp",
							jsonp:'jsonpcallback',
							data:{
								companyName:companyName,
								companyPhone:companyPhone,
								companyAddr:companyAddr,
								postalcode:postalcode,
							},
							success:function(data){
								//数据保存
								$(".updata-item2-input1").val(companyName);
								$(".updata-item2-input3").val(companyPhone);
								$(".updata-item2-input4").val(companyAddr);
								$(".updata-item2-input5").val(postalcode);
								//样式重置 
								css();
							}
						});
					}//if
//				}//判断是否请求
			})
			
				
				//取消
				$(".cancel").click(function(){
					//样式重置
						css();
					//数据回填
						$(".updata-item2-input1").val(companyName);
						$(".updata-item2-input3").val(companyPhone);
						$(".updata-item2-input4").val(companyAddr);
						$(".updata-item2-input5").val(postalcode);
					//清空验证提示
						$("label").hide();
				})	
	   	})
		 
		 
   		//修改管理员账号
   		$('.account-item1>a').click(function(){
   			//调用验证插件
   			that._validate1();
			$(".admin-input").addClass("border");
			$(".account-item2-6").removeClass("none");
			//获取修改前的数据
			var name=$(".admin-input1").val();
			var email=$(".admin-input2").val();
			var tel=$(".admin-input3").val();
			//保存按钮
			$(".Preservation-1").on("click",function(){	
//				if(name==$(".admin-input1").val() && email==$(".admin-input2").val() && tel==$(".admin-input3").val()){					
//					console.log("未修改信息，不请求");
//					//样式重置
//					css1();
//					return;
//				}else{
					//验证通过时，发送保存请求，否则不发送
					if(!$(".user_submit").validate().form()){
						return;
					}else{
						//获取修改后的信息			
						var name=$(".admin-input1").val();
						var email=$(".admin-input2").val();
						var tel=$(".admin-input3").val();
						$.ajax({
							type:"get",
							url:"http://vip.foxitreader.cn/enterprise/updateEnterpriseUser",
							dataType:"jsonp",
							jsonp:'jsonpcallback',
							data:{
								nickName:name,
								email:email,
								tel:tel
							},
							success:function(data){									
								//保存数据
								$(".admin-input1").val(name);
								$(".admin-input2").val(email);
								$(".admin-input3").val(tel);
								//样式重置
								css1();
								//右上角信息修改
								$(".header-r-number").html($(".admin-input1").val());
							}
						});
					}
//				}//判断是否请求
			})
			//取消
			$(".cancel-1").click(function(){
				$(".account-item2-6").addClass("none");
				$(".admin-input").removeClass("border");
				//数据回档
				$(".admin-input1").val(name);
				$(".admin-input2").val(email);
				$(".admin-input3").val(tel);
				//样式重置
				css1();
				//验证清空
				$("label").hide();
			})
   		})
	}
	
	
	/*
	 * 表单验证方法
	 */
	header.prototype._validate=function(){
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
	    
	}
	
	header.prototype._validate1=function(){
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
	    
	    });
	}	
	new header();
})