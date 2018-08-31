$(document).ready(function(){
	//解锁
	var ID=$(this).parent().parent().parent().children().eq(0);
	var lock=$(this).parent().parent().parent().children().eq(4);
	var State=lock=="已锁定"?1:0
	console.log(ID);
	$("table>.tbody").on("click",".locking>a",function(){
		$.ajax({
			type:"get",
			url:"http://vip.foxitreader.cn/enterprise/lockEnterpriseUser",
			data:{
				userId:ID.html(),
				status:0
			},
			dataType:"jsonp",	
			jsonp:'jsonpcallback',
			success:function(data){
				console.log(data);
				//弹框提示
				//点击解锁提示
				$(".lock").removeClass("none");	
				$(".mask").removeClass("none");
			}
		})//ajax		
	})
	//确定关闭				
			$(".Sure-btn>a").click(function(){
				$(".lock").addClass("none");
				$(".mask").addClass("none");
			})
})