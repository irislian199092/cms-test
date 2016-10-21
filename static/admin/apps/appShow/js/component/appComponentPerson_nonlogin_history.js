
/*个人中心未登录观看历史*/
(function(win,doc,$){
 	function appComponentPerson_nonlogin_history(name,cfg){
 		var cfg=cfg||{};
		var component=$('<div class="appPerson_nonlogin_history_wrap">');
		var history_h=$('<div class="appPerson_nonlogin_history_header"><div class="appPerson_nonlogin_history_header_list active"><span class="history_icon_03 fl"></span>观看历史</div></div>');
		var history_c=$('<div class="appPerson_nonlogin_history_content">');
		component.append(history_h);
		if(cfg.data){
			$.each(cfg.data,function(i,n){
				var item=$('<div class="appPerson_nonlogin_history_item">');
				var item_h=$('<h5 class="appPerson_nonlogin_history_h">'+n.date+'</h5>');
				var item_u=$('<ul class="appPerson_nonlogin_history_c">');
				$.each(n.content,function(index,listItem){
					var item_u_li=$('<li><a href="#"><span class="time">'+listItem.time+'</span><span class="title">'+listItem.title+'</span></a></li>');
					item_u.append(item_u_li);
				})
				item.append(item_h);
				item.append(item_u);
				history_c.append(item);
			})
		}
		var history_f=$('<div class="appPerson_nonlogin_history_footer"><div class="box clearfix"><span class="history_icon_edit fl"></span><span class="text fl">编辑</span></div></div>');
		component.append(history_c);
		component.append(history_f);
		return component;
 	}
 win.appComponentPerson_nonlogin_history=appComponentPerson_nonlogin_history;
})(window,document,jQuery);
