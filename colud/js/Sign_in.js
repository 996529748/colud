$('.sign_in_btn').click(function(){
	$.ajax({
		type:"get",
		url:'http://vip.foxitreader.cn/getUserInfoApi',
		dataType: "jsonp",
        jsonp: 'jsonpcallback',
        success:function(data){
        	console.log(data);
        	if(data.ret!==302){
        		console.log("登录成功");
      			window.location.href = 'http://127.0.0.1:8020/github_colud/colud/colud/Management_Center.html?__hbt=1535328758153';  
        	}else{
        		//弹框0.8秒后自动消失
        		$('.Sign').show();
				setTimeout(function(){$('.Sign').hide();}, 800);
        	}
        },
        error:function(){
      			console.log("请求不成功！");
    	}
	});
	
});
