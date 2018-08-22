$('.sign_in_btn').click(function(){
	$.ajax({
		type:"get",
		url:'http://vip.foxitreader.cn/enterprise/getEnterpriseInfo',
		dataType: "jsonp",
        jsonp: 'jsonpcallback',
        data:{
        	userName:$('.user_id').val(),
        	password:$('.password').val()
        },
        success:function(data){
        	console.log(1);
        	if(data.ret!==302){
        		console.log("登录成功");
      			window.location.href = 'http://127.0.0.1:8020/github_colud/colud/colud/Management_Center.html?__hbt=1534127748097';  
        	}else{
        		console.log("登录失败")
        	}
        },
        error:function(){
      			console.log("请求不成功！");
    	}
	});
	
});
