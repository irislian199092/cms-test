
/*个人中心登录头部*/
(function(win,doc,$){
 	function appComponentPerson_login_header(name,cfg){
 		var cfg=cfg||{};
		if(cfg.data){
				var component=$('<div class="appPerson_login_header_wrap"><div class="appPerson_login_header_image"></div><div class="appPerson_login_header_title">'+cfg.data+'</div><i class="fa fa-angle-left"></i></div>');
			}
		return component;
 	}
 win.appComponentPerson_login_header=appComponentPerson_login_header;
})(window,document,jQuery);


