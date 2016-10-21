/*今日热门*/
(function(win,doc,$){
	function appComponentToday_hot(name,cfg){
		var cfg=cfg||{};
		var basePath = 'http://admin.nmop.site/';
		var component=$('<div class="appToday_hot_wrap">');
		var hot_title=$('<h4 class="hot_title">'+cfg.word[0].content+'</h4>');
		var hot_cont=$('<div class="hot_cont clearfix">');
		var cont_l=$('<ul class="hot_cont_l fl">');
		var cont_r=$('<ul class="hot_cont_r fr">');
		if(cfg){
			$.each(cfg.contL,function(i,n){
				var li_l=$('<li><a href="javascript:void(0);" title="#" target="_blank">'+n.title+'</a></li>');
				cont_l.append(li_l);
			})
			$.each(cfg.contR,function(i,n){
				var li_r=$('<li><div class="mask"></div><a href="javascript:void(0);" title="#" target="_blank"><img src="'+basePath+n.thumb_web_w+'" alt="" style="width:180px;height:103px;"><span>'+n.title+'</span></a></li>');
				cont_r.append(li_r);
			})
			hot_cont.append(cont_l);
			hot_cont.append(cont_r);
			component.append(hot_title);
			component.append(hot_cont);
		}
		return component;
	}
 win.appComponentToday_hot=appComponentToday_hot;
})(window,document,jQuery);