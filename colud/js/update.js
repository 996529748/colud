$(document).ready(function(){	
     //点击修改
	$("table>.tbody").on("click",".update>a",function(){
		ID=$(this).parents().children();
		//点击确认，发送ajax请求
			$(".modal-box-update-li4-btn").click(function(){
				if($(".update-btn").validate().form()){//表单是否验证完毕
				$.ajax({
					type:"get",
					url:"http://vip.foxitreader.cn/enterprise/updateEnterpriseUserByAdmin",
					dataType:"jsonp",
					data:{
						userId:ID.eq(0).html(),
					    nickName:$(".account-item2-1>.item-2-3>.input3").val(),
					    email:$(".modal-box-update-li2-input").val(),
					    tel:$(".modal-box-update-li3-input").val()
					},
					jsonp:'jsonpcallback',
					success:function(data){			
						//关闭弹窗模态框
						if(!$(".modal-box-update").hasClass("none")){
							$(".modal-box-update").addClass("none")
							$(".mask").addClass("none");
						//保存dom的操作
						ID.eq(3).html($(".modal-box-update-li3-input").val());
						ID.eq(2).html($(".modal-box-update-li2-input").val());
						}
					}
				})//ajax
			}//插件
		})
		
		
		
		//弹框
		if($(".modal-box-update").hasClass("none")){
			$(".modal-box-update").removeClass("none");
			$(".mask").removeClass("none");
		}
		//账号
		var str = ID.eq(1).html();
		var str1 = $(".information-item2-2>.item-2-2>.input2").val();//域名
		var reg = new RegExp("@"+str1+".foxitcloud.cn");
		var user=str.replace(reg,"");
		//输入框初始值
		$('.modal-box-update-li1-input').val(user),
		$('.modal-box-update-li2-input').val(ID.eq(2).html()),
		$(".modal-box-update-li3-input").val(ID.eq(3).html());
		
	})//修改按钮
	        
	//点击右上角关闭
	$(".modal-box-update-item-img").click(function(){
		$(".modal-box-update").addClass("none");
		$(".mask").addClass("none");
		//清空验证提示
		$("label.error").hide();
	})
	
	//验证表单	
    $(function(){
            var validate = $(".update-btn").validate({
                debug: false, //调试模式   true取消submit的默认提交功能   
                //errorClass: "label.error", //默认为错误的样式类为：error   
                focusInvalid: false, //当为false时，验证无效时，没有焦点响应 //提交表单后,未通过验证的表单(第一个或提交之前获得焦点的未通过验证的表单)会获得焦点 默认:true   
                onkeyup: true,   //是否在敲击键盘时验证 默认:true
                submitHandler: function(form){//表单提交句柄,为一回调函数，带一个参数：form     
                    form.submit();//提交表单   
                },                 
                rules:{
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
                    email:{
                        required:"请填写您的邮箱",
                        email:"E-Mail格式不正确"
                    },
         			tel:{
         				required:"请填写您的手机号",
         				minlength:"请输入正确的手机号",
         				maxlength:"请输入正确的手机号"
         			}
                }                          
            });       
        });
})
