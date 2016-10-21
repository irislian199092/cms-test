/*点播电影猜你喜欢*/
(function(win,doc,$){
 	function appComponentLive_like_movie(name,cfg){
 		var cfg=cfg||{};
		var component=$('<div class="appLive_like_movie_wrap">');
		var h=$('<div class="appLive_like_movie_header">猜你喜欢</div>');
		component.append(h);
		var box=$('<div class="appLive_like_movie_box">');
		if(cfg.data){
			$.each(cfg.data,function(i,n){
				var list=$('<div class="appLive_like_movie_list"><img src="../apps/appShow/img/'+n.url+'" class="fl" alt="#"/><div class="fl title"><p>'+n.title+'</p><p>类型:'+n.type+'</p><p>主演:'+n.actor+'</p></div><span class="like_icon fr"></span></div>');
				box.append(list);
				component.append(box);
			})
		}
		return component;
 	}
 win.appComponentLive_like_movie=appComponentLive_like_movie;
})(window,document,jQuery);

