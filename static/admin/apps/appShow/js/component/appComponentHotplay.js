/*今日热播*/
(function(win,doc,$){
 function appComponentHotplay(name,cfg){
 	var cfg=cfg||{};
	var component=$('<div class="appHotplay_item_wrap">');
	if(cfg.data){
		$.each(cfg.data,function(i,n){
			var  item_t=$('<div class="appHotplay_item_top clearfix"><div class="appHotplay_item_top_l fl"><img src="http://admin.nmop.cn/static/admin/apps/appShow/img/live_1.png"/></div><div class="appHotplay_item_top_m fl"><p class="title">'+n+'</p><p class="num">更新至66集</p></div><div class="appHotplay_item_top_r fl"><span class="hot1"></span><span class="hot2"></span></div></div>')
			//var  item_b=$('<div class="appHotplay_item_bottom"><div class="appHotplay_item_bottom_l fl">15:14 即将播出：<span>娘要嫁人<i>(第16集)<i></span></div><div class="appHotplay_item_bottom_r fr"><span></span></div></div>');
			var  item=$('<div class="appHotplay_item clearfix">');
			item.append( item_t);
			//item.append( item_b);
			component.append(item);
		})
	}
	return component;
 }
 win.appComponentHotplay=appComponentHotplay;
})(window,document,jQuery);