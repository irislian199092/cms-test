
/*点播电视剧猜你喜欢*/
(function(win,doc,$){
 	function appComponentLive_like_tv(name,cfg){
 		var cfg=cfg||{};
		var component=$('<div class="appLive_like_tv_wrap">');
		var h=$('<div class="appLive_like_tv_header">猜你喜欢</div>');
		component.append(h);
		var box=$('<div class="appLive_like_tv_box">');
		if(cfg.data){
			$.each(cfg.data,function(i,n){
				var list=$('<div class="appLive_like_tv_list"><img src="../apps/appShow/img/'+n.url+'" class="fl" alt="#"/><div class="fl title"><p>'+n.title+'</p><p>更新至第'+n.number+'集</p></div><span class="like_icon fr"></span></div>');
				box.append(list);
				component.append(box);
			})
		}
		return component;
 	}
 win.appComponentLive_like_tv=appComponentLive_like_tv;
})(window,document,jQuery);
