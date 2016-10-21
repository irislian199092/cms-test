/*点播电视剧详情*/
(function(win,doc,$){
 	function appComponentLive_play_tv(name,cfg){
 		var cfg=cfg||{};
		var component=$('<div class="appLive_play_tv_wrap">');
		var choose=$('<div class="appLive_play_tv_choose">');
		var choose_i=$('<div class="title clearfix"><div class="title_fl fl"><span class="title_sm">选集</span><i class="fa fa-youtube-play"></i><span>512次播放</span></div><div class="title_fr fr"><i class="fa fa-star"></i></div></div>')
		choose.append(choose_i);
		if(cfg.data){
			var pro=$('<div class="appLive_play_tv_profile">');
			var pro_i=$('<div class="title_2">简介</div><div class="title_profile"><p>地区：'+cfg.data.local+'</p><p>语言：'+cfg.data.lan+'</p><p>类型：'+cfg.data.type+'</p><p>主演：'+cfg.data.actor+'</p><p>导演：'+cfg.data.director+'</p></div><div class="detail"><p>'+cfg.data.detail+'</p></div>')
			pro.append(pro_i);
			var number=$('<div class="numbers clearfix">');
			$.each(cfg.data.num,function(i,n){
				var item=$('<div class="numbers_item"><a href="#">第'+(i+1)+'集</a></div>');
				number.append(item);
			})
			choose.append(number);
		}
		component.append(choose);
		component.append(pro);
		return component;
 	}
 win.appComponentLive_play_tv=appComponentLive_play_tv;
})(window,document,jQuery);
