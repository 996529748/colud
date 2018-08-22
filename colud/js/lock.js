$(document).ready(function(){
	var ID=$(this).parent().parent().parent().children().eq(0);
	var lock=$(this).parent().parent().parent().children().eq(4);
	var State=lock=="已锁定"?1:0
	console.log(ID);
	$("table>.thead").on("click",".locking>a",function(){
		console.log(1);
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
			}
		})//ajax		
	})
})