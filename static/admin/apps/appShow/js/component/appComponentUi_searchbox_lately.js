
/*UI搜索框最近搜索*/
(function(win,doc,$){
 	function appComponentUi_searchbox_lately(name,cfg){
 		var cfg=cfg||{};
		var component=$('<div class="appUi_searchbox_lately_wrap">');
		var title=$('<div class="searchbox_lately_title">最近搜索</div>');
		component.append(title);
		var ul=$('<ul class="searchbox_lately_list clearfix">');
		if(cfg.data){
			$.each(cfg.data,function(i,n){
				var li=$('<li><a href="#">'+n+'</a></li>');
				ul.append(li);
			})
		}
		component.append(ul);
		return component;
 	}
 win.appComponentUi_searchbox_lately=appComponentUi_searchbox_lately;
})(window,document,jQuery);
