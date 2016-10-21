
/*UI搜索框热搜*/
(function(win,doc,$){
 	function appComponentUi_searchbox_hot(name,cfg){
 		var cfg=cfg||{};
		var component=$('<ul class="clearfix">');
		var title=$('<div class="searchbox_hot_title">今日热搜</div>'); 
		var ul=$('<ul class="searchbox_hot_list clearfix">');
		component.append(title);
		if(cfg.data){
			$.each(cfg.data,function(index,n){
				var li=$('<li><a href="javascript:;">'+n+'</a></li>');
				ul.append(li);
			})
		}
		component.append(ul);
		return component;
 	}
 win.appComponentUi_searchbox_hot=appComponentUi_searchbox_hot;
})(window,document,jQuery);
