/*区块-综艺节目*/
(function(win,doc,$){
	function appComponentSection_variety(name,cfg){
		var cfg=cfg||{};
		var basePath = 'http://admin.nmop.site/';
		var component=$('<div class="appSection_variety_wrap">');
		//标题
		var title=$('<div class="appSection_variety_title">');
		var title_l=$('<div class="variety_title_l fl"><a href="">'+cfg.Title[0].content+'</a></div>');
		var title_m=$('<div class="variety_title_m fl">');
		var title_r=$('<div class="variety_title_r fr">'+cfg.Code[0].content+'</div>');
		if(cfg.Category_rec){
			$.each(cfg.Category_rec,function(i,n){
				var title_m_link=$('<a href="javascript:void(0);">'+n.node_name+'</a>');
				title_m.append(title_m_link);
			})
			title.append(title_l);
			title.append(title_m);
			title.append(title_r);
			component.append(title);
		}
		var cont=$('<div class="appSection_variety_cont">');
		if(cfg.Library_rec[0]){
			var data=cfg.Library_rec[0];
			var cont_big=$('<div class="variety_big"><div class="mask"></div><a href="javascript:void(0);"><img src="'+basePath+data.thumb_web_w+'" alt="" style="width:370px;height:159px;"></a><span class="big_t">'+data.title+'<i>('+data.tags+')</i>'+'</span><span class="small_t">'+data.short_title+'</span></div>');
			cont.append(cont_big);
		}
		if(cfg.Library){
			var data2 =cfg.Library;
			$.each(data2,function(i,n){
				var cont_small=$('<div class="variety_small"><div class="mask"></div><a href="javascript:void(0);"><img src="'+basePath+n.thumb_web_w+'" alt="" style="width:180px;height:103px;"><span class="type">'+n.tags+'</span><p class="name">'+n.title+'</p><p class="title">'+n.short_title+'</p></a></div>');
				cont.append(cont_small);
			})
		}
		component.append(cont);
		return component;
	}
 win.appComponentSection_variety=appComponentSection_variety;
})(window,document,jQuery);