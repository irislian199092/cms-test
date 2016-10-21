/*header--------------------->首页头部导航条*/
(function(win,doc,$){
 function appComponentHeader(name,cfg){
 	var cfg=cfg||{};
	var component=$('<div class="appHeader_wrap">');
	if(cfg.data){
		var ul=$('<ul class="clearfix appHeader_cont">');
		var scrollbar=$('<div class="appHeader_bar"><div class="appHeader_slider"></div></div>');
		$.each(cfg.data,function(i,n){
			var list=$('<li>');
			var text=$('<a href="#">'+n+'</a>');
			list.html(text);
			ul.append(list);
		})
		component.append(ul);
		component.append(scrollbar);
	}
	return component;
 }
 win.appComponentHeader=appComponentHeader;
})(window,document,jQuery);




