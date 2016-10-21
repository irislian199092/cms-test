
/*个人中心登录观看历史*/
(function(win,doc,$){
 	function appComponentPerson_login_body_history(name,cfg){
 		var cfg=cfg||{};
		var component=$('<div class="appPerson_login_body_history_wrap">');
		var history_h=$('<div class="appPerson_login_body_history_header"><div class="appPerson_login_body_history_header_list"><span class="history_icon_01 fl"></span>收藏</div><div class="appPerson_login_body_history_header_list"><span class="history_icon_02 fl"></span>预约</div><div class="appPerson_login_body_history_header_list active"><span class="history_icon_03 fl"></span>观看历史</div></div>');
		var history_c1=$('<div class="appPerson_login_body_history_content appPerson_login_collection" style="display:none">');
		var history_c2=$('<div class="appPerson_login_body_history_content" style="display:none">');
		var history_c3=$('<div class="appPerson_login_body_history_content">');
		component.append(history_h);
		if(cfg.data1){
			var item=$('<ul class="appPerson_login_body_history_item">');
			$.each(cfg.data1,function(i,n){
				var li=$('<li class="appPerson_login_body_history_c clearfix"><a class="fl" href="#"><span class="title">'+n.title+'</span><span class="date">'+n.date+'</span></a><a class="fr" href="#"><span class="collection_icon_01"></span><span class="type">'+n.type+'</span></a></li>');
				item.append(li);
				history_c1.append(item);
			})
		}
		if(cfg.data2){
			$.each(cfg.data2,function(i,n){
				var item=$('<div class="appPerson_login_body_history_item">');
				var item_h=$('<h5 class="appPerson_login_body_history_h">'+n.date+'</h5>');
				var item_u=$('<ul class="appPerson_login_body_history_c">');
				$.each(n.content,function(index,listItem){
					var item_u_li=$('<li><a href="#"><span class="time">'+listItem.time+'</span><span class="title">'+listItem.title+'</span></a></li>');
					item_u.append(item_u_li);
				})
				item.append(item_h);
				item.append(item_u);
				history_c2.append(item);
			})
		}
		if(cfg.data3){
			$.each(cfg.data3,function(i,n){
				var item=$('<div class="appPerson_login_body_history_item">');
				var item_h=$('<h5 class="appPerson_login_body_history_h">'+n.date+'</h5>');
				var item_u=$('<ul class="appPerson_login_body_history_c">');
				$.each(n.content,function(index,listItem){
					var item_u_li=$('<li><a href="#"><span class="time">'+listItem.time+'</span><span class="title">'+listItem.title+'</span></a></li>');
					item_u.append(item_u_li);
				})
				item.append(item_h);
				item.append(item_u);
				history_c3.append(item);
			})

		}
		var history_f=$('<div class="appPerson_login_body_history_footer"><div class="box clearfix"><span class="history_icon_edit fl"></span><span class="text fl">编辑</span></div></div>');
		component.append(history_c1);
		component.append(history_c2);
		component.append(history_c3);
		component.append(history_f);
		return component;
 	}
 win.appComponentPerson_login_body_history=appComponentPerson_login_body_history;
})(window,document,jQuery);
