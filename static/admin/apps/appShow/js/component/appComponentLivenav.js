/*直播导航条*/
(function(win,doc,$){
	function appComponentLivenav(name,cfg){
		var cfg=cfg||{};
		var component=$('<div class="livenav_box">');
		if(cfg.data){
			$.each(cfg.data,function(i,n){
				var list=$('<div class="livenav_item">'+n+'</div>');
				component.append(list);
			})
		}
		return component;
	}
 win.appComponentLivenav=appComponentLivenav;
})(window,document,jQuery);