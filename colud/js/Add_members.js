$(document).ready(function(){
//表单验证
//	jQuery.validator.addMethod("modal-box-item2-1-input",function(value,element){
//      var regular = /^([0-9]*)+$/;//正则
//      return this.optional(element) || (!regular.test(value));
//  },"只能为数字和字母的组合！");
//	jQuery.validator.addMethod("modal-box-item2-2-input",function(value,element){
//      var regular = /^1[3|4|5|7|8]\d{9}$/;//正则
//      return this.optional(element) || (!regular.test(value));
//  },"只能为纯数字的组合！");
//	jQuery.validator.addMethod("modal-box-item2-3-input",function(value,element){
//      var regular = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;//正则
//      return this.optional(element) || (!regular.test(value));
//  },"只能为数字和字母及@的组合！");
	var i=1;
	$('.modal-box-item2-3-btn').click(function(){
		//提交添加请求
		$.ajax({
			type:"get",
			url:'http://vip.foxitreader.cn/enterprise/addEnterpriseUser',
			dataType: "jsonp",
			jsonp:'jsonpcallback',
	        data:{
	        	nickName:$('.modal-box-item2-1-input').val(),
	        	email:$('.modal-box-item2-2-input').val(),
	        	tel:$('.modal-box-item2-3-input').val()
	        },
	        //获取用户信息
	        success:function(data){
	        	$.ajax({
	        		type:"get",
	        		url:"http://vip.foxitreader.cn/enterprise/listEnterpriseUsers",
	        		dataType:"jsonp",
	        		data:{},
	        		jsonp:'jsonpcallback',
	        		success:function(data){
	        			//清空input
	        			$(".modal-box-item2-1-input").val("");
	        			$(".modal-box-item2-2-input").val("");
	        			$(".modal-box-item2-3-input").val("");
	        			console.log(data);
	        			//渲染页面
	        			var Data1=data.data;
	        			
			        	for(i;i<Data1.length;i++){
			        		var Data=data.data[i];
			        		var State=Data.status==1?"已锁定":"活动的";//状态
				        	var html='';
				        		html=`
				        		<tr class="tr1">
									<th class="th-1">${Data.userId}</th>
									<th class="th-2">${Data.userName}</th>
									<th class="th-3">${Data.email}</th>
									<th class="th-4">${Data.tel}</th>
									<th class="th-5">${State}</th>
									<th class="th-6">
										<div class="locking" disabled="disabled"><a>解锁<a/></div>
										<div class="delete" disabled="disabled"><a>删除<a/></div>
										<div class="update" disabled="disabled"><a>修改<a/></div>
									</th>
								</tr>
					        	`;
					        $('.thead').append(html);
	        			}
			        }
	        	})
	       	//*弹出添加成功弹框
	       	$('.modal-box').addClass("none");
	       	$(".success").removeClass("none");
	        },
		});
	});
	//点击关闭，关闭模态框
	$(".success-btn2").click(function(){
		$(".mask").hide();
		$(".modal-box").hide();
		$('.success').hide();
	})
	//点击继续添加，返回添加窗口
	$(".success-btn1").click(function(){
		$(".success").addClass("none");
		$('.modal-box').removeClass("none");
	})
	


////验证表单
//	
//  $(function(){
//          var validate = $(".table").validate({
//              debug: false, //调试模式   true取消submit的默认提交功能   
//              //errorClass: "label.error", //默认为错误的样式类为：error   
//              focusInvalid: false, //当为false时，验证无效时，没有焦点响应  
//              onkeyup: false,   
//              submitHandler: function(form){   //表单提交句柄,为一回调函数，带一个参数：form   
//					console.log("提交表单");   
//                  form.submit();   //提交表单   
//              },                 
//              rules:{
//                  user_id:{
//                      required:true,
//                      rangelength:[5,12]
//                  },
//                  email:{
//                      required:true,
//                      email:true
//                  },
//                  tel:{
//                      required:true,
//                      digits:true, 
//                      minlength:11
//                  },               
//              },
//              messages:{
//                  user_id:{
//                      required:"必填",
//                      rangelength:"账号长度为5-12位"
//                  },
//                  email:{
//                      required:"必填",
//                      email:"E-Mail格式不正确"
//                  },
//       			tel:{
//       				required:"必填",
//       				minlength:"请输入正确的手机号"
//       			}
//              }
//                        
//          });    
//  
//      });

})

