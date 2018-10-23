$(document).ready(function(){
	
	function Index(){
		
		this._Administrators();//管理员信息
		
		this._Member();//成员管理信息
		
		this._validate2();//验证插件		
						
    }
	
	/*
	 * 成员管理页面
	 */
	Index.prototype._Member=function(){
			var that=this;
		     $('#page').pagination({
		        dataSource: function(done) {
	                $.ajax({
	                    type: 'get',
	                    url:"http://vip.foxitreader.cn/enterprise/listEnterpriseUsers",
	                    dataType: "jsonp",
	                    jsonp: 'jsonpcallback',
	                    success: function(data) {
	                    	done(data.data);
	                      	/*保存域名全局数据变量*/
							that.companyDomain = data.data[0].companyDomain;								
	                    }
	                });
		        },//总数据量	                     
		        pageSize: 12,//每页条数
		        prevText:"<",
		        nextText:">",
		        callback: function(data, pagination){
		        	//判断字段添加
		        	for(var i = 0, max = data.length; i < max; i ++){
						//状态显示字段
						if(data[i].status==0){
							data[i].statusType = '活动的';
						}else if(data[i].status==1){
							data[i].statusType = '已锁定';
						}
						
						//管理员显示
						if(data[i].roleName=="admin"){
							data[i].isAdmin = true;
						}else if(data[i].roleName=="member"){
							data[i].isAdmin = false;
						}
					}
		        	//渲染
		        	var source = $("#entry-template-Member").html();
		  			var template = Handlebars.compile(source);
		  			$(".tbody").html(template(data));//模板数据渲染			
		  			that._event();//按钮绑定事件
		  			that._fram();//弹窗事件	  			
		        }		        	  
			});		
	}
	
	
	/*
	 * 管理员账号界面
	 */
	Index.prototype._Administrators=function(){
		$.ajax({
	   		type:"get",
	   		url:"http://vip.foxitreader.cn/enterprise/getEnterpriseUser",
	   		dataType: "jsonp",
        	jsonp: 'jsonpcallback',
        	success:function(data){
        		var source = $("#entry-template-Administrators").html();
	  			var template = Handlebars.compile(source);
	  			$(".account").append(template(data.data));	  			
        	}
	   	});
	}
	
	/*
	 * 弹窗事件
	 */
	Index.prototype._fram=function(){
		var that=this;
		//添加成员弹框
		$(".item1-add-btn").on("click",function(){
		    layer.open({
		      type: 1,
		      area: ['470px', '432px'],
		      title:"添加成员",
		      shadeClose: true, //点击遮罩关闭
		      content: '<form action="" class="table">'+
		      			'<div class="modal-box-item2">'+
							'<ul>'+
								'<li class="modal-box-item2-1">'+
									'<span>*账号：</span>'+
									'<input class="modal-box-item2-1-input"  id="nickName" name="nickName" aria-required="true" type="text"/>'+
									'<span class="modal-box-item2-1-search">@'+that.companyDomain+'.foxitcloud.cn</span>'+
								'</li>'+
								'<li class="modal-box-item2-2">'+
									'<span>*邮箱：</span>'+
									'<input class="modal-box-item2-2-input"   id="email"  name="email" aria-required="true" type="text" />'+									
								'</li>'+
								'<li class="modal-box-item2-3">'+
									'<span>*手机：</span>'+
									'<input id="tel" name="tel" aria-required="true" class="modal-box-item2-3-input"  type="text" />'+
								'</li>'+
								'<li class="modal-box-item2-4">'+
									'<a class="modal-box-item2-3-btn">添加</a>'+
								'</li>'+
							'</ul>'+
						'</div>'+		      			
		      			'</form>'	      
		    });
			    //调用验证插件
			    that._validate2();		    
			  	//确定
			    $(".modal-box-item2-3-btn").on("click",function(){
			    		if(!$(".table").validate().form()){
					    	return;
					    }else{
				    		$.ajax({
								type:"get",
								url:"http://vip.foxitreader.cn/enterprise/addEnterpriseUser",
								dataType: "jsonp",
					            jsonp: 'jsonpcallback',
					            data:{
					            	nickName:$(".modal-box-item2-1-input").val(),
					            	email:$(".modal-box-item2-2-input").val(),
					            	tel:$(".modal-box-item2-3-input").val(),
					            },
					            success: function(data) {
					            	//数据刷新
					            	that._Member();
					            }
							});
							layer.closeAll();//关闭所有层
						}
			    })		    
		});		
		//修改成员信息
		$(".update>a").on("click",function(e){
			var userId=$(this).attr('data-userId');
			var nickName=$(this).attr('data-nickName');
			var email=$(this).attr('data-email');
			var tel=$(this).attr('data-tel');
			layer.open({
		      type: 1,
		      area: ['470px', '432px'],
		      title:"修改成员信息",
		      shadeClose: true, //点击遮罩关闭
		      content:'<form action="" class="table">'+
		      			'<div class="modal-box-item2">'+
							'<ul>'+
								'<li class="modal-box-item2-1">'+
									'<span>*账号：</span>'+									
									'<input class="modal-box-item2-1-input update-input"  type="text" value='+nickName+'>'+									
									'<span class="modal-box-item2-1-search">@'+that.companyDomain+'.foxitcloud.cn</span>'+
								'</li>'+
								'<li class="modal-box-item2-2">'+
									'<span>*邮箱：</span>'+
									'<input id="email" name="email" aria-required="true" class="modal-box-item2-2-input"  type="text" value='+email+'>'+									
								'</li>'+
								'<li class="modal-box-item2-3">'+
									'<span>*手机：</span>'+
									'<input id="tel" name="tel" aria-required="true" class="modal-box-item2-3-input"  type="text" value='+tel+'>'+
								'</li>'+
								'<li class="modal-box-item2-4">'+
									'<a class="modal-box-item2-3-btn">确认</a>'+
								'</li>'+
							'</ul>'+
						'</div>'+		      			
		      			'</form>',		      
			});
			$(".update-input").prop("disabled","disabled");
			//调用验证插件
			that._validate2();
			//确定修改			
			$(".modal-box-item2-3-btn").on("click",function(){
				if(!$(".table").validate().form()){
					return;
				}else{
					$.ajax({
							type:"get",
							url:"http://vip.foxitreader.cn/enterprise/updateEnterpriseUserByAdmin",
							dataType: "jsonp",
				            jsonp: 'jsonpcallback',
				            data:{
				            	userId:userId,
				            	nickName:nickName,
				            	email:$(".modal-box-item2-2-input").val(),
				            	tel:$(".modal-box-item2-3-input").val(),			            	
				            },
				            success: function(data) {
				            	//修改页面层
				            	$(e.target).parents(".thead-tr").find(".thead-th-3").html($(".modal-box-item2-2-input").val());
				            	$(e.target).parents(".thead-tr").find(".thead-th-4").html($(".modal-box-item2-3-input").val());
				            	//数据刷新
				            	that._Member();
				            }
						});
					layer.closeAll();//关闭所有层
				}//if
			})
		})
		
		
		
		
		//删除弹窗
		$(".del").on("click",function(e){
			var nickName=$(this).attr('data-nickName');
			var userId=$(this).attr('data-userid');
			layer.open({
		      type: 1,
		      area: ['470px', '296px'],
		      title:"删除账号",
		      shadeClose: true, //点击遮罩关闭
		      content:'<div class="content-delete">'+
					      '<img src="./img/u5.png" alt="删除">'+
					      '<p>将账号“'+nickName+"@"+that.companyDomain+'.foxitcloud.cn”从成</p>'+
					      '<p>员列表中删除？</p>'+
					      '<div class="content-bottom clear">'+
						      '<button class="l">删除</button>'+
						      '<button class="r">取消</button>'+
					      '</div>'+
					    '</div>'
			});
			$(".r").on("click",function(){				
				layer.closeAll();//关闭所有层				
			})
			$(".l").on("click",function(){
				$.ajax({
					type:"get",
					url:"http://vip.foxitreader.cn/enterprise/deleteEnterpriseUser",
					dataType: "jsonp",
		            jsonp: 'jsonpcallback',
		            data:{
		            	userId:userId,
		            },
		            success: function(data) {
			            //移除页面元素
			           	$(e.target).parents(".thead-tr").remove();
			           	//数据刷新
			            that._Member();
			            layer.closeAll();//关闭所有层
			        }
				});
			})
		})
		//解锁弹窗
		$(".locking>a").on("click",function(){
			layer.open({
		      type: 1,
		      area: ['310px', '198px'],
		      title:"提示",
		      skin: 'layui-layer-locking',
		      shadeClose: true, //点击遮罩关闭
		      content:'<div class="layui-layer-content">'+
					      '<div class="content contentAccount">'+
						      '<img src="./img/u24.png" alt="提示">'+
						      '<p>当前活动状态的账号已达上限，请先</p>'+
						      '<p>进行人数的购买，然后再解锁成员</p>'+
						      '<button class="contentAccount-b">确定</button>'+
					      '</div>'+
					   '</div>'
			});
		})
	}
	

	
	/*
	 * 左侧导航栏切换，登录，搜索事件绑定
	 */
	Index.prototype._event=function(){
		var that=this;	
		/*
		 * 左侧导航栏选项卡切换
		 */
		//账号管理
		$(".item-1").on("click",function(){
			var img = $(this).children().eq(1);			
			if(img.hasClass("jiantou-down")){
				//切换箭头
				img.removeClass('jiantou-down').addClass('jiantou');
				//显示item-2
				$(".item-2").toggle();
			}else{
				img.addClass('jiantou-down').removeClass('jiantou');
				$(".item-2").toggle();
			}
		})
		//账号设置
		$(".item-3").on("click",function(){
			var img = $(this).children().eq(1);			
			if(img.hasClass("jiantou-down")){
				//切换箭头
				img.removeClass('jiantou-down').addClass('jiantou');
				//显示item-4,item-5
				$(".item-4").toggle();
				$(".item-5").toggle();
			}else{
				img.addClass('jiantou-down').removeClass('jiantou');
				$(".item-4").toggle();
				$(".item-5").toggle();
			}
		})
		//添加成员hover
		$('.item1-img').hover(function(){
			if($(".hover").hasClass("none")){
				$(".hover").removeClass("none");
			}else{
				$(".hover").addClass("none");
			}
		})
		//搜索框
		//搜索框获取焦点
		$(".item1-input").focus(function(){
		  $(".item1-search").css("border","1px solid #06c")
		});
		//搜索框失去焦点
		$(".item1-input").blur(function(){
		  $(".item1-search").css("border","1px solid #d3d3d3")
		});
	}
		
	
	//添加成员验证插件
	Index.prototype._validate2=function(){
		//企业信息表单验证		
		$(function(){
	            var validate = $(".table").validate({
	                debug: false, //调试模式   true取消submit的默认提交功能   
	                //errorClass: "label.error", //默认为错误的样式类为：error   
	                focusInvalid: true, //当为false时，验证无效时，没有焦点响应     //提交表单后,未通过验证的表单(第一个或提交之前获得焦点的未通过验证的表单)会获得焦点 默认:true   
	                submitHandler: function(form){   //表单提交句柄,为一回调函数，带一个参数：form     
	                    form.table();   //提交表单   
	                },  
	                rules:{	                    
	                    nickName:{
	                        required:true,
	                    },
	                    email:{
	                        required:true,
	            			email:true
	                    },
	                    tel:{
	                        required:true,
	                        digits:true,
	                        minlength:11,
	                        maxlength:11
	                    },
	                },
	                messages:{	                    
	                    nickName:{
	                        required:"请填写您的账户",
	                    },
	         			email:{
	                        required:"请填写您的邮箱",
	            			email:"E-Mail格式不正确"
	                    },
	                    tel:{
	                        required:"请填写您的手机号",
	                        minlength:"请填写正确的手机号",
	                        maxlength:"请填写正确的手机号"
	                    },
	                }
	                          
	            });    
	    });//插件	    
	}

	//状态列表筛选		
		$(".th5-drop>p>a").click(function(){
			var DataStatu=$(this).attr('data-status');
			if(DataStatu==2){
				$(".tr1").show();
			}else if(DataStatu==0){
				$(".tr1").hide();
				$(".th-5").filter(":contains('"+$(this).html()+"')").parent().show();
			}else if(DataStatu==1){
				$(".tr1").hide();
				$(".th-5").filter(":contains('"+"锁"+"')").parent().show();
			}
		})
		
	//右上角搜索框
		$(".search-text").click(function(){
			var text=$.trim($(".item1-input").val().toString());//获取去掉两头空格的搜索框内容
			if(text==""){
				$(".tr1").show();
			}else{
				$(".tr1").hide();
				$(".th-2").filter(":contains('"+text+"')").parent().show();
			}
		})
	
		//判断浏览器是否支持placeholder属性
	    var supportPlaceholder = 'placeholder' in document.createElement('input');
	
	    var placeholder = function placeholder(input) {
	
	      var text = input.attr('placeholder'),
	          defaultValue = input.defaultValue;
	
	      if (!defaultValue) {
	
	        input.val(text).addClass("phcolor");
	      }
			
	      input.focus(function () {
	
	        if (input.val() == text) {
	
	          $(this).val("");
	          //修改属性
	        }
	      });
	
	      input.blur(function () {
	
	        if (input.val() == "") {
	
	          $(this).val(text).addClass("phcolor");
	        }
	      });
	
	      //输入的字符不为灰色
	      input.keydown(function () {
	
	        $(this).removeClass("phcolor");
	      });
	    };
	
	    //当浏览器不支持placeholder属性时，调用placeholder函数
	    if (!supportPlaceholder) {
	
	      $('input').each(function () {
	
	        text = $(this).attr("placeholder");
	
	        if ($(this).attr("type") == "text" || $(this).attr("type") == "password") {
	
	          placeholder($(this));
	        }
	      });
	    }
	    
	new Index();
})
