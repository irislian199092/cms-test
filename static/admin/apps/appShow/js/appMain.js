$(function(){

(function(){
/*整个项目入口函数*/
function appMain(){
	appControl();
	appModel();
	console.log(window);
}

/*实现页面交互的函数*/
function appControl(){
	/*菜单折叠*/
	function metisMenu($menu){
		$menu.find('li ul').hide();
		$menu.find('li .arrow').click(function(){
			$(this).parents('li').children('ul').toggle();
			$(this).parents('li').toggleClass('active');
			$(this).parents('li').siblings('li').removeClass('active');
			$(this).parents('li').siblings('li').children('ul').hide();
		});
	}
	metisMenu($('.appNav'));
	$('.appNav_body_item .add').each(function(t,n) {
		var z='data-phone';
        $(this).attr(z) || $(this).attr(z, t);
    });
	$('.appNav_body_item .add').on('click',function(){
		$('#boxForm').show();
		var s=$(this).siblings('.preview').html();
		var wrap=$('<div class="view"><div class="ui-sortable appWrap appWrap_'+s+'"></div></div>');
		$('.demo').append(wrap);
		if($('.demo').find('.view').size()===2){
			$('.demo').find('.view').eq(0).find('.appWrap').attr('class','ui-sortable appWrap appWrap_'+s);
			$('.demo').find('.view').eq(1).remove();
		};
		var index=$(this).data('phone');
		$('#boxType').find('select option').eq(index).attr('selected','selected');
  		$('#boxType').find('select option').eq(index).siblings('option').attr('selected',false);
  		$('#boxType').find('select option').eq(index).addClass('on');
  		$('#boxType').find('select option').eq(index).siblings('option').removeClass('on');
	});
	$('#save_box').on('click',function(){
		var q=$('#boxType').find('.on').html();
		var v=$('#boxType select').val();
		$('.demo').find('.appWrap').attr('class','ui-sortable appWrap appWrap_'+v);
		return false;
	})
	$('#cancel_box').on('click',function(){
		return false;
	})	
}
/*实现组件UI界面的函数*/
function  appView(secName,secOption,secData){
	var i=0;
	var _live_nav=0;
	/*给每个添加按钮加一个data属性*/
	$('.appNav_comp_'+secOption+' .add').each(function(t,n) {
		var z='data-'+secOption;
        $(this).attr(z) || $(this).attr(z, t);
    });

	/*添加组件操作*/
	$('.appNav_comp_'+secOption+' .add').on('click',function(){
		/*添加编辑*/
		i++;
		_live_nav++;

		$('#editForm').empty();
		var title=$(this).parents('ul').siblings().find('.nav-label').html(); //每一项列表的标题
		var index=$(this).data(secOption);   //添加按钮的index
		/*添加组件类型的选择*/
		function addEdit(){
			var arr=[];
			$('.appNav_comp_'+secOption).each(function(i,n){
				var h=$(this).find('.preview').html();
				var o='<option>'+h+'</option>';
				arr.push(o);
			})
			var arr2=arr.join('');
			var formList=$('<div class="form-group"  id='+secOption+'Type"><label class="col-sm-3 control-label" >'+title+':</label><div class="col-sm-9"><select class="form-control" name='+secOption+'Type">'+arr2+'</select></div></div>')
			$('#editForm').append(formList);
			var  b=$('<div class="hr-line-dashed"></div><div class="form-group"><div class="col-sm-12 col-sm-offset-3"><button class="btn btn-primary" id="save">保存内容</button><button class="btn btn-white" id="cancel">取消</button></div></div>')
			$('#editForm').append(b);
			$('#editForm .form-group select option').eq(index).attr('selected','selected');
			$('#editForm .form-group select option').eq(index).addClass('on');
			$('#save').on('click',function(){
				if($('#editForm .form-group').size()==2){
					var selctedV=$("#editForm .form-group select").find("option:selected").html();
					$('.appWrap').attr('class','ui-sortable appWrap appWrap_'+selctedV);
					return false;
				}
				if($('#editForm .form-group input[disabled]').size()===7){
					return false;
				}
				return false;
			});
			$('#cancel').on('click',function(){
	  			return false;
	  		});
		}
		/*添加组件属性编辑*/
		function addEditContent(){
			var arr3=[{
				title:'透明度',
				id:'_opacity',
				value:'1'
			},{
				title:'下边距',
				id:'_mb',
				value:'0'
			},{
				title:'上边距',
				id:'_mt',
				value:'0'
			},{
				title:'高度',
				id:'_height',
				value:'50px'
			},{
				title:'页面背景',
				id:'_bg',
				value:'#fff'
			}]
			$.each(arr3,function(i,n){
				var  editArea=$('<div class="form-group" id="Type'+n.id+'"><label class="col-md-3 control-label col-md-offset-3">'+n.title+'</label><div class="col-md-6"><input type="text" placeholder="#eee" class="form-control" value="'+n.value+'" disabled></div></div>')
				editArea.insertAfter($('#editForm').children().eq(0))
			});
		}
		
		/*判断当添加手机容器之后，属性编辑再出现*/
		if($('.view').children().size()){
			addEdit();
			if(secOption!=="phone"){
				addEditContent();
			}
		}

		/*让容器内排序*/
		$('.appWrap').sortable({ axis: "y" });

		/*添加组件对象*/
		var app=new App();
		var type=$(this).siblings('.preview').html();
		var cfg={secOption:{
			type:secName+($(this).data(secOption)+1),
			index:$(this).data(secOption)
		}};
		app.addSection(secName,cfg.secOption).addComponent(secOption,secData);
		
		/*添加右侧组件表单信息*/
		var h=$('.'+secName);
		h.on('click',function(){
			$('#editForm').empty();
			addEdit();
			addEditContent();
			$('#editForm .form-group input').prop({disabled:false});
			var n=$(this).data('eindex');
			var this_=$(this);
			$('#editForm .form-group select option').eq(n).attr('selected','selected');
      		$('#editForm .form-group select option').eq(n).siblings('option').attr('selected',false);
      		$('#editForm .form-group select option').eq(n).addClass('on');
      		$('#editForm .form-group select option').eq(n).siblings('option').removeClass('on');
      		$('#editForm #save').on('click',function(){
				var type=$('#editForm .form-group').eq(0).data('type');
				this_.css({
	      			background:$('#Type_bg input').val(),
					color:$('#Type_color input').val(),
					fontSize:$('#Type_fontSize input').val(),
					opacity:$('#Type_opacity input').val(),
					marginTop:$('#Type_mt input').val(),
					marginBottom:$('#Type_mb input').val(),
					height:$('#Type_height input').val()
	      		})
	  		})
		});
		
		/*右击菜单*/
		h.contextmenu({
	        target: '#context-menu',
	        onItem: function (context, e) {
		          if($(e.target).text()==='删除'){
		          		context.remove();
		          		i--;
		          		_live_nav--;
		          }
		          /*if($(e.target).text()==='编辑'){
		          		$('#editForm .form-group input').prop({disabled:false});
		          		var n=context.data('eindex');
		          		$('#editForm .form-group select option').eq(n).attr('selected','selected');
		          		$('#editForm .form-group select option').eq(n).siblings('option').attr('selected',false);
		          		$('#editForm .form-group select option').eq(n).addClass('on');
		          		$('#editForm .form-group select option').eq(n).siblings('option').removeClass('on');
		          		$('#editForm #save').on('click',function(){
	          				context.css({
			          			background:$('#Type_bg input').val(),
								color:$('#Type_color input').val(),
								fontSize:$('#Type_fontSize input').val(),
								opacity:$('#Type_opacity input').val(),
								marginTop:$('#Type_mt input').val(),
								marginBottom:$('#Type_mb input').val(),
								height:$('#Type_height input').val()
			          		})
		          				return false;
		          		})
		          }*/
		          $('#context-menu').hide();
		    }
	    });
	    if(secName==='appLogo'){
	    	$('.appLogo_list').on('click',function(){
	    		alert(1);
	    	})
	    }
	    /*导航条组件交互处理*/
		if(secName==='appHeader'){
			//获取每个li的left值
			$.each($('.appHeader_cont li'),function(i,n){
				var w=$('.appHeader_cont li').eq(0).outerWidth();
				$('.appHeader_cont li').eq(i).css({left:i*w});
			});
			//鼠标移入滚动条显示隐藏
			$('.appHeader_wrap').hover(function(){
				$('.appHeader_bar').show();
			},function(){
				$('.appHeader_bar').hide();
			});
			//点击每项加class
			$('.appHeader_wrap li').eq(0).addClass('active');
			$('.appHeader_wrap li').on('click',function(){
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
			});
			//获取滚动条插件
			$.getScript('http://admin.nmop.cn/static/admin/apps/appShow/js/appDemo.js',function(){
				var s1=new Scrollbar({
					dirSelector:'x',
					contSelector:$('.appHeader_cont'),
					barSelector:$('.appHeader_bar'),
					sliderSelector:$('.appHeader_slider')
				});
			});
		}
		/*轮播图组件交互处理*/
		if(secName==='appSlide'){
			Slide();
			function Slide(){
				var current = 1, //当前页指针（从1开始）
				s=$('.appWrap').width(),
				num=$('.bannerShow .bd ul li').size();
				// 初始化
				var auto = setInterval(function() {
		            $(".bannerShow .next").trigger("click");
		        }, 4000);
				$('.bannerShow .bd ul li').eq(0).show().siblings().hide();//初始化轮播图的第一张为show，其他隐藏
				$(".bannerShow .hd ul li").eq(0).addClass("on").siblings().removeClass();
		        //鼠标移入移出轮播图区域，上一页下一页按钮显现/消失，启动/停止轮播
		        $('.bannerShow').hover(function(){
		        	$('.bannerShow .next,.bannerShow .prev').stop(true,true).fadeIn(400);
		        	clearInterval(auto);
		        },function(){
		        	$('.bannerShow .next,.bannerShow .prev').stop(true,true).fadeOut(400);
	        		auto = setInterval(function() {
			            $(".bannerShow .next").trigger("click");

			        }, 4000);
		        })
		        //下一张点击切换图片
		        $('.bannerShow .next').click(function(e) {
		            e.preventDefault();
		            e.stopPropagation(); 
		            if (current === num) {
		                $('.bannerShow .bd ul li').eq(0).fadeIn(400).siblings().fadeOut(400);
		                $(".bannerShow .hd ul li").eq(0).addClass("on").siblings().removeClass();
		                current = 1;
		            } else {
		                $('.bannerShow .bd ul li').eq(current).fadeIn(400).siblings().fadeOut(400);
		                $(".bannerShow .hd ul li").eq(current).addClass("on").siblings().removeClass();
		                current++;
		            }

		        });
		        // 上一张点击切换图片
		        $('.bannerShow .prev').click(function(e) {
		            e.preventDefault();
		            e.stopPropagation(); 
		            if (current === 1) {
		                $('.bannerShow .bd ul li').eq(num-1).fadeIn(400).siblings().fadeOut(400);
		                $(".bannerShow .hd ul li").eq(num-1).addClass("on").siblings().removeClass();
		                current = num;
		            } else {
		                $('.bannerShow .bd ul li').eq(current-2).fadeIn(400).siblings().fadeOut(400);
		                $(".bannerShow .hd ul li").eq(current-2).addClass("on").siblings().removeClass();
		                current--;
		            }
		        });
			    // 小圆点导航按钮点击切换图片
		        $(".bannerShow .hd ul li").click(function() {
		            current = $(this).index() + 1;
		            $(this).addClass("on").siblings().removeClass();
		            $('.bannerShow .bd ul li').eq(current - 1).fadeIn(300).siblings().fadeOut(600);
		        });
			}
		}
		/*热搜组件交互处理*/
		if(secName==='appHotsearch'){
			h.find('.appHotsearch_box').eq(i-1).find('ul li').eq(0).children('i').addClass('red');
			h.find('.appHotsearch_box').eq(i-1).find('ul li').eq(1).children('i').addClass('orange');
			h.find('.appHotsearch_box').eq(i-1).find('ul li').eq(2).children('i').addClass('green');
		}
		/*直播导航条组件交互处理*/
		if(secName==='appLivenav'){
			h.find('.livenav_box').eq(i-1).find('.livenav_item').eq(0).addClass('active');
			h.find('.livenav_box').eq(i-1).find('.livenav_item').on('click',function(){
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
			})
		}
		/*点播导航条组件交互处理*/
		if(secName==='appLive_nav'){
			h.find('.appLive_nav_wrap').eq(_live_nav-1).find('.appLive_nav_item').eq(0).addClass('active');
			h.find('.appLive_nav_wrap').eq(_live_nav-1).find('.appLive_nav_item').on('click',function(){
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
			})
		}
		/*点播视频组件交互处理*/
		if(secName==='appLive_video'){
			$('.appLive_video_wrap').hover(function(){
				$('.appLive_video_title').show();
			},function(){
				$('.appLive_video_title').hide();
			})
		}
		/*点播综艺详情组件交互处理*/
		if(secName==='appLive_play_variety'){
			function metisMenu($menu){
				$menu.find('li ul').hide();
				$menu.find('li .arrow').click(function(){
					$(this).parents('li').children('ul').toggle();
					$(this).parents('li').toggleClass('active');
					$(this).parents('li').siblings('li').removeClass('active');
					$(this).parents('li').siblings('li').children('ul').hide();
				});
			}
			metisMenu($('.variety_pro_time'));
		}
		/*点播电影组件交互处理*/
		if(secName==='appLive_play_movie'||secName==='appLive_play_tv'){
			$('.detail').append( ' <a class="toggle" href="#"><span class="open">展开</span><span class="compact">收起</span></a>' );
			function createDots()
			{
				$('.detail').dotdotdot({
					after: 'a.toggle'
				});
			};
			function destroyDots() {
				$('.detail').trigger( 'destroy' );
			}
			createDots();
			$('.detail').on(
				'click',
				'a.toggle',
				function() {
					$('.detail').toggleClass( 'opened' );
					if ( $('.detail').hasClass( 'opened' ) ) {
						destroyDots();
					} else {
						createDots();
					}
					return false;
				}
			);
		}
		/*订阅频道组件交互处理*/
	    if(secName==='appLive_subscription'){
	    	var onOff=true;
    		$('.appLive_subscription_list i').on('click',function(){
    			var s=$(this).parents('.subscription_footer').siblings('.subscription_body');
		    	var len=Math.ceil(s.children().size()/4);
    			if(onOff){
		    		s.css({
		    			height: 10+len*51
		    		})
		    		s.siblings('.subscription_footer').find('.wrap p').html('点击收缩');
    			}
	    		else{
	    			s.css({
		    			height: 112
		    		})
		    		s.siblings('.subscription_footer').find('.wrap p').html('点击展开');
	    		}
	    		onOff=!onOff;
	    	})
	    }
	    /*搜索框组件交互处理*/
	    if(secName==='appUi_searchbox'){
	    	//console.log(2222);
	    	var list=$('<ul class="search_list" style="display: none;"><li>搜索结果1</li><li>搜索结果2</li></ul>');
	    	$('.appUi_searchbox').append(list);
	    	/*$.get('url',function(data){
	    			//将获取到的数据加到ul列表中；
	    	 },'json');*/
	    	$('.searchbox_input').bind('keyup',function(){
	    		$('.search_list').show();
	    		return false;
	    	});
	    	$(document).bind('click',function(){
	    		$('.search_list').hide();
	    	})
	    	$(document).delegate('.search_list li', 'click', function(){
	    		var keyword=$(this).text();
	    		location.href='http://http://admin.nmop.cn/search?q='+keyword;  //要跳转的地址,再修改
	    	})
	    }
		/*个人中心登录收藏、观看历史、预约*/
		if(secName==='appPerson_login_body_history'){
			$('.view').delegate('.appPerson_login_body_history_header_list', 'click', function(){
				var index=$(this).index();
				$('.appPerson_login_body_history_content').hide();
				$('.appPerson_login_body_history_content').eq(index).show();
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
			});
		}
		if(secName==='appPerson_login_message'){
			$('.appPerson_login_message_wrap li').eq(0).find('a').addClass('active');
			$('.appPerson_login_message_wrap li').eq(1).find('a').addClass('active');
		}
		if(secName==='appMore_setting'){
			$('.appMore_setting_h .setting_wifi').on('click',function(){
				$(this).toggleClass('off');
			})
		}
	});
};

/*实现数据方法函数*/
function appModel(){
	//个人中心登录头部
	appView('appPerson_login_header','person_login_header',{data:'Jack'});
	//个人中心登录详细信息
	appView('appPerson_login_body_detail','person_login_body_detail',{data:{
		name:'Jack',
		sex:'女',
		age:'25',
		telephone:'136xxxxxxx',
		email:'53468122@qq.com',
		cardCode:'6547261165478',
		interests:['运动','文学','军事']
	}});
	//个人中心登录消息中心
	appView('appPerson_login_message','person_login_message',{data:[{
		title:'撒娇女人：曝完整彩蛋',
		date:'2014-12-03'
	},{
		title:'exo刘德华被批没素质',
		date:'2016-12-03'
	},{
		title:'神雕侠侣首曝光',
		date:'2014-12-03'
	},{
		title:'撒娇女人：曝完整彩蛋',
		date:'2014-12-03'
	},{
		title:'exo刘德华被批没素质',
		date:'2016-12-03'
	},{
		title:'神雕侠侣首曝光',
		date:'2014-12-03'
	},{
		title:'撒娇女人：曝完整彩蛋',
		date:'2014-12-03'
	}]})
	//个人中心登录观看历史
	appView('appPerson_login_body_history','person_login_body_history',{
		data1:[{
				title:'奔跑的兄弟',
				date: '2014-11-28期',
				type:'有更新'
				},{
					title:'奔跑的兄弟',
					date:"2014-11-28期",
					type:"有更新"
				},{
					title:'奔跑的兄弟',
					date:"2014-11-28期",
					type:"有更新"}],
		data2:[{
				date:'今天',
				content:[{
					time:'19:00',
					title:'奔跑吧兄弟'
				},{
					time:'19:30',
					title:'第一财经'
				}]
				},{
				date:'11.04',
				content:[{
					time:'19:00',
					title:'奔跑吧兄弟'
				}]
			}],
		data3:[{
				date:'今天',
				content:[{
					time:'19:00',
					title:'奔跑吧兄弟'
				},{
					time:'19:30',
					title:'第一财经'
				}]
				},{
				date:'11.04',
				content:[{
					time:'19:00',
					title:'奔跑吧兄弟'
				}]
			}]
	});
	//个人中心未登录头部
	appView('appPerson_nonlogin_header','person_nonlogin_header');
	//个人中心未登录区块
	appView('appPersonbody','personbody');
	//个人中心未登录观看历史
	appView('appPerson_nonlogin_history','person_nonlogin_history',{data:[{
		date:'今天',
		content:[{
			time:'19:00',
			title:'奔跑吧兄弟'
		},{
			time:'19:30',
			title:'第一财经'
		}]
		},{
		date:'11.04',
		content:[{
			time:'19:00',
			title:'奔跑吧兄弟'
		}]
	}]});
	//个人中心注册头部
	appView('appPerson_register_h','person_register_h');
	//个人中心注册身体
	appView('appPerson_register_b','person_register_b');
	//点播头部
	appView('appLive_header','live_header',{data:'TVB'});
	//点播导航
	appView('appLive_nav','live_nav',{data:['最新','最热']});
	//点播视频
	appView('appLive_video','live_video',{data:{
		title:'被风吹过的夏天',
		url:'test.mp4'
	}});
	//点播内容列表
	appView('appLive_list','live_list',{data:[{url:"livelist_1.png",title:"甄嬛传"},{url:"livelist_1.png",title:"甄嬛传"},{url:"livelist_1.png",title:"甄嬛传"},{url:"livelist_1.png",title:"甄嬛传"},{url:"livelist_1.png",title:"甄嬛传"},{url:"livelist_1.png",title:"甄嬛传"}]});
	//点播电视剧猜你喜欢
	appView('appLive_like_tv','live_like_tv',{data:[{
		title:'甄嬛传',
		url:'livelist_1.png',
		number:'10'
	},{
		title:'被风吹过的夏天',
		url:'livelist_1.png',
		number:'2'
	},{
		title:'绝命毒师',
		url:'livelist_1.png',
		number:'4'
	},{
		title:'青年故事',
		url:'livelist_1.png',
		number:'11'
	}]});
	//点播电影猜你喜欢
	appView('appLive_like_movie','live_like_movie',{data:[{
		title:'刘诗诗获赞',
		url:'livelist_2.png',
		type:'动作 现代',
		actor:'刘诗诗 吴奇隆'
	},{
		title:'刘诗诗获赞',
		url:'livelist_2.png',
		type:'动作 现代',
		actor:'刘诗诗 吴奇隆'
	},{
		title:'刘诗诗获赞',
		url:'livelist_2.png',
		type:'动作 现代',
		actor:'刘诗诗 吴奇隆'
	},{
		title:'刘诗诗获赞',
		url:'livelist_2.png',
		type:'动作 现代',
		actor:'刘诗诗 吴奇隆'
	}]});
	//点播电视剧详情
	appView('appLive_play_tv','live_play_tv',{data:{
		num:[1,2,3,4,5,6,7,8,9],
		local:'内地',
		lan:'国语',
		type:'悬疑剧/偶像剧/网络剧/言情剧',
		actor:'古川雄辉/马思纯/王传君/叶祖新',
		director:'久保田哲史/桂言',
		detail:'《不可思议的夏天》是2014年由爱奇艺、亚细亚传媒、富士电视台三家联合出品的中国首部奇幻题材的网络自制剧，翻拍自日本经典'
	}});
	//点播电影详情
	appView('appLive_play_movie','live_play_movie',{data:{
		num:'512',
		type:'类型：犯罪|枪战|动作',
		actor:'赵又廷&nbsp;饰&nbsp;吴英雄&nbsp;&nbsp;林更新&nbsp;饰&nbsp;陈真<br/>张钧甯&nbsp;饰&nbsp;蓝西英&nbsp;&nbsp;黄渤&nbsp;饰&nbsp;徐达夫<br/>娜扎&nbsp;饰&nbsp;李小牧',
		director:'导演：蔡月轩',
		detail:'海港城全城突发连环爆，警探吴英雄身陷险境。千钧一发之时警官陈真及时现身，救海港城全城突发连环爆，警探吴英雄身陷险境。千钧一发之时警官陈真及时现身，救了吴英雄。跨海大桥被炸.'
	}});
	//点播综艺详情
	appView('appLive_play_variety','live_play_variety',{data:{
		key:'2014-11-28期&nbsp;&nbsp;&nbsp;嘉宾: 关喆&nbsp;于震',
		title:'奔跑吧兄弟',
		TV:'浙江卫视 每周五晚 21:00-23:00',
		host:'主持人:邓超 Ageababy 王宝强 陈赫  郑凯 王祖 李晨 Ageababy 王宝强 陈赫  郑凯 王祖 李晨',
		time:[
			{
				year:'2013年',
				context:[{
					url:'点播详情页－综艺-01.png',
					key:'完整版: 邓超掰手腕险输大妈郑恺为躲宝强进女厕',
					date:'2013-11-28'
				},{
					url:'点播详情页－综艺-01.png',
					key:'完整版: 邓超掰手腕险输大妈郑恺为躲宝强进女厕',
					date:'2013-11-28'
				},{
					url:'点播详情页－综艺-01.png',
					key:'完整版: 邓超掰手腕险输大妈郑恺为躲宝强进女厕',
					date:'2013-11-28'
				}]
			},
			{
				year:'2014年',
				context:[{
					url:'点播详情页－综艺-01.png',
					key:'完整版: 邓超掰手腕险输大妈郑恺为躲宝强进女厕',
					date:'2013-11-28'
				},{
					url:'点播详情页－综艺-01.png',
					key:'完整版: 邓超掰手腕险输大妈郑恺为躲宝强进女厕',
					date:'2013-11-28'
				},{
					url:'点播详情页－综艺-01.png',
					key:'完整版: 邓超掰手腕险输大妈郑恺为躲宝强进女厕',
					date:'2013-11-28'
				}]
			},
			{
				year:'2015年',
				context:[{
					url:'点播详情页－综艺-01.png',
					key:'完整版: 邓超掰手腕险输大妈郑恺为躲宝强进女厕',
					date:'2013-11-28'
				},{
					url:'点播详情页－综艺-01.png',
					key:'完整版: 邓超掰手腕险输大妈郑恺为躲宝强进女厕',
					date:'2013-11-28'
				},{
					url:'点播详情页－综艺-01.png',
					key:'完整版: 邓超掰手腕险输大妈郑恺为躲宝强进女厕',
					date:'2013-11-28'
				}]
			},
			{
				year:'2016年',
				context:[{
					url:'点播详情页－综艺-01.png',
					key:'完整版: 邓超掰手腕险输大妈郑恺为躲宝强进女厕',
					date:'2013-11-28'
				},{
					url:'点播详情页－综艺-01.png',
					key:'完整版: 邓超掰手腕险输大妈郑恺为躲宝强进女厕',
					date:'2013-11-28'
				},{
					url:'点播详情页－综艺-01.png',
					key:'完整版: 邓超掰手腕险输大妈郑恺为躲宝强进女厕',
					date:'2013-11-28'
				}]
			}
		]
	}});
	//订阅频道
	appView('appLive_subscription','live_subscription',{data:[{
		title:'已添加直播频道'
	},{
		title:'央视',
		url:['sub_01.png','sub_01.png','sub_01.png','sub_01.png','sub_01.png','sub_01.png','sub_01.png','sub_01.png','sub_01.png','sub_01.png']
	},{
		title:'卫视',
		url:['sub_02.png','sub_02.png','sub_02.png','sub_02.png','sub_02.png','sub_02.png']
	},{
		title:'其他',
		url:['sub_02.png','sub_02.png','sub_02.png','sub_02.png','sub_02.png','sub_02.png','sub_02.png','sub_02.png']
	}]});
	//直播导航条
	appView('appLivenav','livenav',{data:['央视频道','卫视频道','直播频道']});
	//直播内容
	appView('appLivecontent','livecontent',{data:['央视新闻','焦点访谈','天下足球','央视新闻','焦点访谈','天下足球']});
	//热搜
	appView('appHotsearch','hotsearch',{
		title:"热搜",
		data:["丁丁历险记","超人归来","碟中谍4","复仇者联盟","冒牌家庭","等风来","变形金刚","权利的游戏","火烈鸟","绝命毒师"]
	});
	//今日热播
	appView('appHotplay','hotplay',{data:['央视新闻','焦点访谈','天下足球','央视新闻','焦点访谈','天下足球']});
	//logo
	appView('appLogo','logo',{title:"多屏看"});
	appView('appLogo2','logo2');
	appView('appVideoplay','videoplay',{
		dataUrl:'test.mp4',
		dataTitle:'超人归来',
		dataTime:'102'
	});
	//首页导航条
	appView('appHeader','header',{data:['精选','电视剧','电影','少儿','娱乐','音频','视频','广播','直播','综合']});
	//轮播图
	appView('appSlide','slide',[{
		dataUrl:'banner-01.png',
		dataTitle:'战马'
		},{
			dataUrl:'banner-02.png',
			dataTitle:'简爱'
		},{
			dataUrl:'banner-03.png',
			dataTitle:'傲慢与偏见'
		},{
			dataUrl:'banner-04.png',
			dataTitle:'奈特凯利'
	}]);
	//内容区块
	appView('appSection','section',{
		data:[{
			title:"大片推荐",
			content:[{
				contentTitle:'功夫熊猫1',
				contentPv:'40.1',
				contentSrc:'content1.png'
			},{
				contentTitle:'功夫熊猫2',
				contentPv:'53.9',
				contentSrc:'content1.png'
			},{
				contentTitle:'功夫熊猫3',
				contentPv:'67,9',
				contentSrc:'content1.png'
			},{
				contentTitle:'功夫熊猫4',
				contentPv:'23.1',
				contentSrc:'content1.png'
			}]
		},{
			title:"精彩视频",
			content:[{
				contentTitle:'功夫熊猫1',
				contentPv:'40.1',
				contentSrc:'content1.png'
			},{
				contentTitle:'功夫熊猫2',
				contentPv:'53.9',
				contentSrc:'content1.png'
			},{
				contentTitle:'功夫熊猫3',
				contentPv:'67,9',
				contentSrc:'content1.png'
			},{
				contentTitle:'功夫熊猫4',
				contentPv:'53.9',
				contentSrc:'content1.png'
			},{
				contentTitle:'功夫熊猫5',
				contentPv:'67,9',
				contentSrc:'content1.png'
			},{
				contentTitle:'功夫熊猫6',
				contentPv:'23.1',
				contentSrc:'content1.png'
			}]
		},{
			title:"综合娱乐",
			content:[{
				contentTitle:'功夫熊猫1',
				contentPv:'40.1',
				contentSrc:'content1.png'
			},{
				contentTitle:'功夫熊猫2',
				contentPv:'53.9',
				contentSrc:'content1.png'
			}]
		}]
	});
	//底部导航条
	appView('appFooter','footer',{
		data:[{
			icon:'fa fa-home',
			title:'首页'
		},{
			icon:'fa fa-search',
			title:'直播'
		},{
			icon:'fa fa-tv',
			title:'点播'
		},{
			icon:'fa fa-star',
			title:'更多'
		}]
		});	
	//最近搜索
	appView('appUi_searchbox','ui_searchbox');
	appView('appUi_searchbox_lately','ui_searchbox_lately',{data:['晨曦公主','万万没想到','白发魔女传','爸爸去哪儿第二季','青年医生']});
	appView('appUi_searchbox_hot','ui_searchbox_hot',{data:['情书','后会无期','甄嬛传','征服','家有儿女','亮剑','奔跑的兄弟','情书']});
	//更多
	appView('appMore_add','more_add',{data:['今日热播','电视商城','我想看什么','应用添加']});
	appView('appMore_setting','more_setting');
	appView('appMore_advise','more_advise');

}
appMain()

})()

})