$(document).ready(function(){
	//验证插件	
    $(function(){
            var validate = $(".form").validate({
                debug: false, //调试模式   true取消submit的默认提交功能   
                //errorClass: "label.error", //默认为错误的样式类为：error   
                focusInvalid: false, //当为false时，验证无效时，没有焦点响应 //提交表单后,未通过验证的表单(第一个或提交之前获得焦点的未通过验证的表单)会获得焦点 默认:true                
                rules:{
                	//用户名
                    User:{
                        required:true,
                        remote:{
                        	type:"get",
							url:"http://vip.foxitreader.cn/enterprise/isUserNameCanUse",//检查用户名是否可用
							dataType: "jsonp",
					        jsonp: 'jsonpcallback',
					        data:{
					        	userName:function(){
					        		return $(".form-1-1").val();
					        	}
					        }					        
                        }
                    },
                    //域名
                    Domain_name:{
                        required:true,
                        remote:{
                        	type:"get",
							url:"http://vip.foxitreader.cn/enterprise/isCompanyDomainCanUse",//检查域名是否可用
							dataType: "jsonp",
					        jsonp: 'jsonpcallback',
					        data:{
					        	companyDomain:function(){
					        		return $(".form-1-2").val();
					        	}
					        }					       
                        }
                    },
                    
                    Password:{
                        required:true,
                        digits:true, 
                        minlength:6,
                        maxlength:12
                    },
                    Pass_word:{
                    	required:true,
                    	equalTo:"#Password"
                    },                   
                    tel:{
                        required:true,
                        digits:true, //整数
                        minlength:11,
                        maxlength:11
                    },
                    verification_code:{
                    	required:true,
                        digits:true, //整数
                        minlength:6,
                        maxlength:6
                    }
                },
                messages:{ 
                	
                    User:{
                        required:"请填写您的用户名",
                        remote:"用户名已存在"
                    },
         			Domain_name:{
         				required:"请填写您的企业域名",
         				remote:"域名已存在"
         			},
         			Password:{
         				required:"请输入您的密码",
         				minlength:"密码长度至少8个字符",
         				maxlength:"密码长度至多12个字符"
         			},
         			Pass_word:{
         				required:"请再次输入您的密码",
         				equalTo:"请保持两次密码一致"
         			},
         			tel:{
         				required:"请填写您的手机号",
         				minlength:"请输入正确的手机号",
         				maxlength:"请输入正确的手机号"
         			},
         			verification_code:{
         				required:"请输入验证码",
         				minlength:"请输入正确的验证码",
         				maxlength:"请输入正确的验证码"
         			}
                },
                submitHandler: function(form){//表单提交句柄,为一回调函数，带一个参数：form     
                    form.submit();//提交表单   
                },  						
				})//validate
            
            				//验证成功
							$(".Establish-btn").click(function(){
								if($(".form").validate().form()){
									//企业用户注册
									$.ajax({
											type:"get",
											url:"http://vip.foxitreader.cn/enterprise/registEnterpriseUser",//检查用户名是否可用
											dataType: "jsonp",
									        jsonp: 'jsonpcallback',
									        data:{
									        	tel:$(".tel_number").val(),
									        	nickName:$(".form-1-1").val(),
									        	companyDomain:$(".form-1-2").val(),
									        	password:hex_md5($('.set_password').val()).toUpperCase(),
									        	code:$(".verification_code").val()
									        },
									        success:function(data){
									        	//跳转到注册成功页面，点击确认返回首页登录
									        	console.log(data);
									        	if(data.ret!==500){
									        		$(".main").addClass("none");
										        	$(".success_popup").removeClass("none");
										        	var user_name=$(".form-1-1").val();
										        	var domain_name=$(".form-1-2").val();
										        	var administrator_account=user_name+"@"+domain_name+".foxitcloud.cn";
										        	$(".success_userid").html(administrator_account);
									        	}else{
									        		console.log("验证码错误提示")
									        	}
									        }
										})
									
								}else{
									console.log("失败");
								}
								
							})
            
			
            });       
 
	
	//获取焦点事件
	$(".verification_code").focus(function(){
		//验证码边框
		$(".verification_code").css("border","1px solid #06c");
	})
	
	//如果手机号验证成功，开放发送验证码按钮------------------BUG：表单未填写验证码发送成功----------------------------
	$(".tel_number").blur(function(){		
		var tel = new RegExp(/^1[3|4|5|7|8]\d{9}$/);		
		if(tel.test($(".tel_number").val())){
			//按钮颜色
			$(".button").addClass("disabled");	
				//点击发送验证码
			$(".button").click(function(){
				//请求验证码
				$.ajax({
						type:"get",
						url:"http://vip.foxitreader.cn/enterprise/sendValidationCode",//发送验证码
						dataType: "jsonp",
					    jsonp: 'jsonpcallback',
					    data:{
					        tel:$(".tel_number").val(),
					    },
					    success:function(data){
					        console.log(data)
					    }
					})
				//验证码可输入
				$(".verification_code").removeAttr("disabled");
				//手机号码不可输入
				$('.tel_number').attr("disabled","disabled");
				//60s倒计时
				 var time = 60;
				function getRandomCode() {
				   if (time === 1) { 
				   	   $(".button").removeClass("click_disable");
				       $('.button').text("发送验证码");
				       $('.button').removeClass("background");
				       //添加事件
				       return;
				   }else{ 
				       time--;
				       $(".button").addClass("click_disable");
				       $('.button').addClass("background");
				       $('.button').text(time+""+"S");
				   } 
				   setTimeout(function() { 
				       getRandomCode();
				   },1000);
				}
				getRandomCode();
				
			})
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
		//密码框
		function password(input){
			var new_input=input;
      		var password_input=new_input.attr('placeholder');//设置input的placeholder属性
      		new_input.after('<input id="Password_placeholder" class="set_password Password_placeholder" type="text" value='+password_input+ '>');
      		$(".Password_placeholder").show();//新的input显示
      		new_input.hide();//旧的隐藏
		
			$(".Password_placeholder").focus(function(e){
				$(e.target).prevAll('.set_password').show();
				$(e.target).prevAll('.confirm_password').show();
	          	$(e.target).hide();//当前input隐藏
	          	$(e.target).prevAll('.set_password').focus();
	          	$(e.target).prevAll('.confirm_password').focus();
			})
			$(".Password_placeholder").blur(function(e){//失去焦点
		        if($(e.target).val() == '') {
		            $(e.target).nextAll('.set_password').show();
		            $(e.target).prevAll('.confirm_password').show();
		            $(e.target).hide();//当前input隐藏
		            $(e.target).prevAll('.set_password').focus();
		        }
	      	});
     	}
	    //当浏览器不支持placeholder属性时，调用placeholder函数
	    if (!supportPlaceholder) {
	      $('input').each(function () {	
	        text = $(this).attr("placeholder");	
	        if ($(this).attr("type") === "text") {
	          //个别表单无须展示placeholder属性不需要执行
	          if(!$(this).attr('data-ie8')){
	            placeholder($(this));
	          }
	        } else if($(this).attr("type") === "password"){
	          //个别表单无须展示placeholder属性不需要执行
	          if(!$(this).attr('data-ie8')){
	            password($(this));//调用
	          }
	        }
	      });
	    }
})
