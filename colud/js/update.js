$(document).ready(function(){	
	var ID
	$("table>.thead").on("click",".update>a",function(){
		ID=$(this).parent().parent().parent().children();
		console.log(ID.eq(0));
		//弹框
		if($(".modal-box-update").hasClass("none")){
			$(".modal-box-update").removeClass("none")
			$(".mask").removeClass("none");
		}
		//输入框初始值
		$('.modal-box-update-li1-input').val($(".account-item2-1>.item-2-3>.input3").val()),
		$('.modal-box-update-li2-input').val(ID.eq(2).html()),
		$(".modal-box-update-li3-input").val(ID.eq(3).html());
		
	})
	//点击关闭
	$(".modal-box-update-item-img").click(function(){
		$(".modal-box-update").addClass("none");
		$(".mask").addClass("none");
	})
	//点击确认，发送ajax请求
		$(".modal-box-update-li4-btn").click(function(){
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
					//渲染修改成功页面
					ID.eq(2).html($(".modal-box-update-li2-input").val())//邮箱
					ID.eq(3).html($(".modal-box-update-li3-input").val())//手机
					//关闭弹窗模态框
					if(!$(".modal-box-update").hasClass("none")){
						$(".modal-box-update").addClass("none")
						$(".mask").addClass("none");
					}
				}
			})//ajax
		})
})
