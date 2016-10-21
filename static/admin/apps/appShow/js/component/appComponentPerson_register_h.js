
/*个人中心注册头部*/
(function(win,doc,$){
 	function appComponentPerson_register_h(name,cfg){
 		var cfg=cfg||{};
		var component=$('<div class="appPerson_register_h_wrap">');
		var i=$('<i class="fa fa-angle-left"></i>');
		var span=$('<span class="title">注册</span>');
		component.append(i);
		component.append(span);
		return component;
 	}
 win.appComponentPerson_register_h=appComponentPerson_register_h;
})(window,document,jQuery);