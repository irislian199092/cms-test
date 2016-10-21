
/*点播综艺节目详情*/
(function(win,doc,$){
 	function appComponentLive_play_variety(name,cfg){
 		var cfg=cfg||{};
		var component=$('<div class="appLive_play_variety_wrap">');
		var pro=$('<div class="variety_pro">');
		var time=$('<ul class="variety_pro_time">');
		var pro_title=$('<div class="variety_pro_title clearfix">');
		var pro_con=$('<div class="variety_pro_con">');
		if(cfg.data){
			var data=cfg.data;
			var pro_title_i=$('<div class="div variety_pro_title_fl fl">'+data.key+'</div><div class="div variety_pro_title_fr fr"><i class="fa fa-star"></i></div>');
			pro_title.append(pro_title_i);
			var pro_con_i=$('<div class="variety_pro_con_title">'+data.title+'</div><div class="variety_pro_con_content"><p>'+data.TV+'</p><p class="sm">'+data.host+'</p></div>');
			pro_con.append(pro_con_i);
			$.each(data.time,function(i,n){
				var li=$('<li>');
				var ul=$('<ul>');
				var a_s=$('<a class="clearfix"><span class="fl">'+n.year+'</span><span class="fa arrow fr"></span></a>');
				$.each(n.context,function(index,item){
					var li_s=$('<li class="clearfix">');
					var li_s_con=$('<img src="../apps/appShow/img/'+item.url+'" class="fl"><div class="fr"><p>'+item.key+'</p><p class="time">'+item.date+'</p></div>')
					li_s.append(li_s_con);
					ul.append(li_s);
					
				})
				li.append(a_s);
				li.append(ul);
				time.append(li);
			})
		}
		pro.append(pro_title);
		pro.append(pro_con);
		component.append(pro);
		component.append(time);
		return component;
 	}
 win.appComponentLive_play_variety=appComponentLive_play_variety;
})(window,document,jQuery);
