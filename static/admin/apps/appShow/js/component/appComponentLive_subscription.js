
/*订阅频道*/
(function(win,doc,$){
 	function appComponentLive_subscription(name,cfg){
 		var cfg=cfg||{};
		var component=$('<div class="appLive_subscription_wrap">');
		if(cfg.data){
			$.each(cfg.data,function(i,n){
				var list=$('<div class="appLive_subscription_list">');
				var list_h=$('<div class="subscription_header clearfix"><div class="fl">'+n.title+'</div><div class="fr">点击添加</div></div>');
				list.append(list_h);
				var list_b=$('<div class="subscription_body clearfix">');
				if(n.url){
					$.each(n.url,function(i2,n2){
						var list_b_item=$('<img src="../apps/appShow/img/'+n2+'" class="subscription_body_item fl"/>');
						list_b.append(list_b_item);
					})
					list.append(list_b);
					var list_f=$('<div class="subscription_footer"><div class="wrap"><p>点击展开</p><i class="fa fa-chevron-down"></i></div></div>');	
					list.append(list_f);
				}
				else{
					
				}
				component.append(list);
			})
		}
		return component;
 	}
 win.appComponentLive_subscription=appComponentLive_subscription;
})(window,document,jQuery);
