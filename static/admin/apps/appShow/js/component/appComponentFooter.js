/*首页底部导航条*/
(function(win,doc,$){
	function appComponentFooter(name,cfg){
		var cfg=cfg||{};
		var component=$('<ul class="droppable sortable">');
		if(cfg.data){
			$.each(cfg.data,function(index,item){
				var li=$('<li><i class="appIcon '+item.icon+'"></i><a href="javascript:;">'+item.title+'</a></li>');
				component.append(li);
			})
		}
		
		return component;
	}
 win.appComponentFooter=appComponentFooter;
})(window,document,jQuery);
