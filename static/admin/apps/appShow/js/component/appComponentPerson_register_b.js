
/*个人中心注册身体*/
(function(win,doc,$){
 	function appComponentPerson_register_b(name,cfg){
 		var cfg=cfg||{};
		var component=$('<div class="appPerson_register_b_wrap clearfix">');
		var form=$('<form action="" class="register">')
		var form1=$('<div class="form-group"><input type="text"  name="username" placeholder="用户名/手机号/邮箱"/><span class="username_icon"></span></div>')
		var form2=$('<div class="form-group"><input type="password"  name="password" placeholder="密码" /><span class="password_icon"></span></div>')
		var form3=$('<div class="form-group"><input type="password" name="rpassword" placeholder="确认密码" class="last"/><span class="password_icon"></span></div>')
		var form4=$('<div class="checkbox i-checks"><div class="icheckbox_square-green checked" style="position: relative;"><input type="checkbox"  style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>点击下面的注册按钮表示您同意《许可及服务协议》</div>')
		var form5=$('<div class="form-group sub"><button type="submit" class="appPerson_btn">马上注册</button><div class="tips">已经是会员直接登录</div></div>')
		form.append(form1);
		form.append(form2);
		form.append(form3);
		form.append(form4);
		form.append(form5);
		component.append(form);
		return component;
 	}
 win.appComponentPerson_register_b=appComponentPerson_register_b;
})(window,document,jQuery);