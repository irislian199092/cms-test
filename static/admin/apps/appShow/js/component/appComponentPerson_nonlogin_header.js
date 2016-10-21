
/*个人中心未登录头部*/
(function(win,doc,$){
 	function appComponentPerson_nonlogin_header(name,cfg){
 		var cfg=cfg||{};
		var component=$('<div class="appPerson_nonlogin_header_wrap"><div class="appPerson_nonlogin_header_image"></div><div class="appPerson_nonlogin_header_title">登录后更精彩</div><i class="fa fa-angle-left"></i></div>');
		return component;
 	}
 win.appComponentPerson_nonlogin_header=appComponentPerson_nonlogin_header;
})(window,document,jQuery);
