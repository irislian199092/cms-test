/*点播导航*/
(function(win,doc,$){
 function appComponentLive_nav(name,cfg){
 		var cfg=cfg||{};
		var component=$('<div class="appLive_nav_wrap">');
		if(cfg.data){
			$.each(cfg.data,function(i,n){
				var list=$('<div class="appLive_nav_item"><a href="#">'+n+'</a></div>');
				component.append(list);
			})
		}
		return component;

 }
 win.appComponentLive_nav=appComponentLive_nav;
})(window,document,jQuery);