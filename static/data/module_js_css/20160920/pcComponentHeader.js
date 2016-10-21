/*header--------------------->首页头部导航条*/
(function(win,doc,$){
 function appComponentHeader(name,cfg){
 	var cfg=cfg||{};
 	var component=$('<div class="appHeader_wrap">');
	if(cfg.Category){
		var ul=$('<ul class="clearfix appHeader_cont">');
		var logo=$('<div class="appHeader_logo_box"><a href="javascript:void(0);" class="appHeader_logo"></a></div>');
		var search=$('<form action="#" class="appHeader_search_box"><input type="text" class="appHeader_search"/><input type="button" class="appHeader_sub"/></form>')
		$.each(cfg.Category,function(i,n){
			var list=$('<li>');
			var text=$('<a href="#">'+n.node_name+'</a>');
			list.html(text);
			ul.append(list);
		})
		var login=$('<div class="appHeader_login_box"><a href="javascript:void(0);" class="appHeader_login">登录</a>|<a href="javascript:void(0);" class="appHeader_register">注册</a></div>');
		component.append(logo);
		component.append(ul);
		component.append(search);
		component.append(login);
	}
	return component;
 }
 win.appComponentHeader=appComponentHeader;
})(window,document,jQuery);




