/*内容区块*/
(function(win,doc,$){
	function appComponentSection(name,cfg){
		var cfg=cfg||{};
		var component=$('<div class="appSection_wrap">');
		if(cfg.data){
			$.each(cfg.data,function(index,item){
				var appSection=$('<div class="appSection_wrap_list clearfix">');
				var h3=$('<h3 class="clearfix"><span class="appTitle_icon"></span><span class="appTitle">'+item.title+'</span><span class="appMore"></span></h3>');
				appSection.append(h3);
				if(item.content){
					$.each(item.content,function(i,n){
						var appSection_list=$('<div class="appSection_1_wrap"><img src="../apps/appShow/img/'+n.contentSrc+'" alt="#"/><p class="title">'+n.contentTitle+'</p><p class="pv">播放:'+n.contentPv+'万</p></div>');
						appSection.append(appSection_list);
					})
				}
				component.append(appSection);
			})
		}
		return component;
	}
 win.appComponentSection=appComponentSection;
})(window,document,jQuery);