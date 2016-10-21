
/*点播电影详情*/
(function(win,doc,$){
 	function appComponentLive_play_movie(name,cfg){
 		var cfg=cfg||{};
		var component=$('<div class="appLive_play_movie_wrap">');
		if(cfg.data){
			var title=$('<div class="title clearfix"><div class="title_fl fl"><span class="title_sm">简介</span><i class="fa fa-youtube-play"></i><span>'+cfg.data.num+'次播放</span></div><div class="title_fr fr"><i class="fa fa-star"></i></div></div>');
			var int=$('<div class="introdution"><p>'+cfg.data.director+'</p><p>'+cfg.data.type+'</p><div class="clearfix"><div class="fl">主演：</div><div class="fl"><p>'+cfg.data.actor+'</p></div></div></div>')
			var det=$('<div class="detail">'+cfg.data.detail+'</div>');
			component.append(title);
			component.append(int);
			component.append(det);
		}
		return component;
 	}
 win.appComponentLive_play_movie=appComponentLive_play_movie;
})(window,document,jQuery);
