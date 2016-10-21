
/*个人中心登录详细信息*/
(function(win,doc,$){
 	function appComponentPerson_login_body_detail(name,cfg){
 		var cfg=cfg||{};
		var component=$('<ul class="appPerson_login_body_detail_wrap">');
		if(cfg.data){
			var li=$('<li><i class="left">用户名：</i>'+cfg.data.name+'</li><li><i class="left">性别：</i><span>男</span><span class="active">女</span></li><li><i class="left">年龄：</i>'+cfg.data.age+'</li><li><i class="left">手机：</i>'+cfg.data.telephone+'</li><li><i class="left">邮箱：</i>'+cfg.data.email+'</li><li><i class="left">智能卡号：</i>'+cfg.data.cardCode+'</li><li><i class="left">喜好：</i><span>'+cfg.data.interests[0]+'</span><span class="active">'+cfg.data.interests[1]+'</span><span>'+cfg.data.interests[2]+'</span></li>');
			component.append(li);
		}
		return component;
 	}
 win.appComponentPerson_login_body_detail=appComponentPerson_login_body_detail;
})(window,document,jQuery);
