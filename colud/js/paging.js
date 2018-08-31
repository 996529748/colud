$(document).ready(function(){
    //分页
	  function paging(){
	     $('#page').pagination({
	        dataSource: function(done) {
	                        $.ajax({
	                            type: 'get',
	                            url:"http://vip.foxitreader.cn/enterprise/listEnterpriseUsers",
	                            dataType: "jsonp",
	                            jsonp: 'jsonpcallback',
	                            success: function(response) {
	                              done(response.data);
	                            }
	                        });
	                     } ,//总数据
	        pageSize: 12,//每页条数
	        prevText:"<",
	        nextText:">",
	        callback: function(data, pagination) {
	          var html='';
	          for(var i=0;i<data.length;i++){
	            var Data=data[i];
	            var State=Data.status==1?"已锁定":"活动的";//状态
	            var Email=Data.email==undefined?"":Data.email;//是否绑定邮箱
	            if(Data.roleName=='admin'){      		
			        			html=
				        		'<tr class="tr tr1 thead-tr">'+
									'<th class="th-1 thead-th-1">'+Data.userId+'</th>'+
									'<th class="th-2 thead-th-2">'+Data.userName+'<img src="img/u1.png" title="管理员帐号"><img></th>'+
									'<th class="th-3 thead-th-3">'+Email+'</th>'+
									'<th class="th-4 thead-th-4">'+Data.tel+'</th>'+
									'<th class="th-5 thead-th-5">'+State+'</th>'+
									'<th class="th-6 tr_1 tr-1 thead-th-6">'+
										'<div class="Locking" readonly="readonly">锁定</div>'+
										'<div class="Delete" readonly="readonly">删除</div>'+
									'</th>'+
								'</tr>'
					        	;					        								
						//成员列表渲染
			        	}else{
			              html+=
			                '<tr class="tr1">'+
			                  '<th class="th-1">'+Data.userId+'</th>'+
			                  '<th class="th-2">'+Data.userName+'</th>'+
			                  '<th class="th-3">'+Email+'</th>'+
			                  '<th class="th-4">'+Data.tel+'</th>'+
			                  '<th class="th-5">'+State+'</th>'+
			                  '<th class="th-6">'+
			                    '<div class="locking" readonly="readonly"><a>解锁<a/></div>'+
			                    '<div class="delete" readonly="readonly"><a>删除<a/></div>'+
			                    '<div class="update" readonly="readonly"><a>修改<a/></div>'+
			                  '</th>'+
			                '</tr>'
			              ;
	             }//else
	          }
	          $('.tbody').html(html);
	        }
	    })
	  }
  	paging();
})
