
/*个人中心消息中心*/
(function(win,doc,$){
 	function appComponentPerson_login_message(name,cfg){
 		var cfg=cfg||{};
		var component=$('<ul class="appPerson_login_message_wrap">');
		if(cfg.data){
			$.each(cfg.data,function(i,n){
				var li=$('<li><a href="#" class="clearfix"><span class="fl">'+n.title+'</span><span class="fr">'+n.date+'</span></a></li>')
				component.append(li);
			})
		}
		
		return component;
 	}
 win.appComponentPerson_login_message=appComponentPerson_login_message;
})(window,document,jQuery);
