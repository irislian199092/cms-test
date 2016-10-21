
/*个人中心未登录区块*/
(function(win,doc,$){
 	function appComponentPersonbody(name,cfg){
 		var cfg=cfg||{};
		var component=$('<div class="appPerson_body">');
		var form=$('<form class="appPerson_body_form">');
		var form1=$('<div class="form-group"><input type="text" placeholder="用户名"  name="ausername"/><span class="username_icon"></span></div>');
		var form2=$('<div class="form-group"><input type="password" placeholder="密码"  name="apassword"/><span class="password_icon"></span></div>');
		var form3=$('<div class="form-group"><button  class="appPerson_btn"  type="submit">登录</button></div>');
		var reg=$('<div class="appPerson_body_register">注册新用户</div>');
		form.append(form1);
		form.append(form2);
		form.append(form3);
		component.append(form);
		component.append(reg);
		return component;
 	}
 win.appComponentPersonbody=appComponentPersonbody;
})(window,document,jQuery);


