/*footer_nav--------------------->底部导航*/
(function(win,doc,$){
 function appComponentFooter_nav(name,cfg){
 	var cfg=cfg||{};
	var component=$('<div class="appFooter_nav_wrap">');
	var left=$('<div class="appFooter_nav_left">');
	var middle=$('<div class="appFooter_nav_middle">');
	var right=$('<div class="appFooter_nav_right">');
	if(cfg){
		//热门频道
		var left_box=$('<div class="left_box">');
		var title=$('<div class="channel_title"><span>|&nbsp;</span><span>热门频道</span></div>');
		var con=$('<div class="channel_con">');
		$.each(cfg.Category,function(i,n){
			var tv_link=$('<a href="javascript:;">'+n.node_name+'</a>');
			con.append(tv_link);
		})
		left_box.append(title);
		left_box.append(con);
		left.append(left_box);
		//天山云频道
		var left_box2=$('<div class="left_box">');
		var title2=$('<div class="channel_title"><span>|&nbsp;</span><span>天山云频道</span></div>');
		var con2=$('<div class="channel_con">');
		/*$.each(cfg.data[1].cont,function(i,n){
			var tv_link2=$('<a href="javascript:;">'+n+'</a>');
			con2.append(tv_link2);
		})*/
		var tv_link2=$(cfg.Code_Recommend[0].content);
		con2.append(tv_link2);

		left_box2.append(title2);
		left_box2.append(con2);
		left.append(left_box2);
		//二维码
		/*$.each(cfg.data[2].weixin,function(i,n){
			var weixin_box=$('<div class="wexin_box">');
			var weixin_con=$('<img src="http://by.tsytv.com.cn/img/tsytv/images/tsy-anzuo.png" alt=""/><h4>'+n.title+'</h4><p>'+n.cont+'</p>');
			weixin_box.append(weixin_con);
			middle.append(weixin_box);
		})*/
		middle.append(cfg.Code_WeChat[0].content);

		//合作伙伴
		var parter_title=$('<div class="partner_title"><span>|&nbsp;</span><span>合作伙伴</span></div>');
		var parter_con=$('<div class="partner_con">');
		/*$.each(cfg.data[3].cont,function(i,n){
			var parter_link=$('<a href="javascript:;">'+n+'</a>');
			parter_con.append(parter_link);
		})*/
		parter_con.append(cfg.Code_Friend[0].content);

		right.append(parter_title);
		right.append(parter_con);
		
		component.append(left);
		component.append(middle);
		component.append(right);
	}
	return component;
 }
 win.appComponentFooter_nav=appComponentFooter_nav;
})(window,document,jQuery);
