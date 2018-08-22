$(document).ready(function(){	
	$("table>.thead").on("click",".delete>a",function(){
		console.log($(this).parent().parent().parent())
		var ID=$(this).parent().parent().parent().children().eq(0)
		var ID_1=$(this).parent().parent().parent()
		$.ajax({
			type:"get",
			url:"http://vip.foxitreader.cn/enterprise/deleteEnterpriseUser",
			dataType:"jsonp",
			data:{
				userId:ID.html()				
			},
			jsonp:'jsonpcallback',
			success:function(){
				//移除页面Dom
				ID_1.remove()
			}
		})
	})
})
