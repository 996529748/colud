$(document).ready(function(){	
	var ID
	var ID_1
	$("table>.tbody").on("click",".delete>a",function(){
		//模态框
		$(".mask").show();
		//弹窗，是否确定删除
				 ID=$(this).parent().parent().parent().children().eq(0)
				 ID_1=$(this).parent().parent().parent()
				var Popup="";
				Popup=
					'<div class="Popup">'+
					'<h1>确定删除吗?</h1>'+
					'<span>'+
						'<div class="Popup-btn1">确定</div>'+
						'<div class="Popup-btn2">取消</div>'+
					'</span>'+
					'</div>'
				;
				$(".main").append(Popup);
	})
	
		//确定按钮被点击
		$("body").on("click",".Popup-btn1",function(){
			$(".mask").hide();
			$.ajax({
				type:"get",
				url:"http://vip.foxitreader.cn/enterprise/deleteEnterpriseUser",
				dataType:"jsonp",
				data:{
					userId:ID.html(),				
				},
				jsonp: 'jsonpcallback',
				success:function(){
					//移除页面Dom
					ID_1.remove()
				}
			});
			$(".Popup").addClass("none");
		})
		
		//取消删除
		$("body").on("click",".Popup-btn2",function(){
			$(".mask").hide();
			$(".Popup").addClass("none");
			return;
		})
})
