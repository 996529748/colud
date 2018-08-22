$(document).ready(function(){
	$(".search-text").click(function(){
		var text=$.trim($(".item1-input").val().toString());//获取去掉两头空格的搜索框内容
		if(text==""){
			$(".tr1").show();
		}else{
			$(".tr1").hide();
			$(".th-2").filter(":contains('"+text+"')").parent().show();
		}
	})
})