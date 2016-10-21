/*点播内容列表*/
(function(win,doc,$){
 	function appComponentLive_list(name,cfg){
 		var cfg=cfg||{};
		var component=$('<div class="appLive_list_wrap clearfix">');
		var h=$('<div class="appLive_list_header"><div class="fl">韩剧</div><i class="fa fa-angle-right fr"></i></div>');
		component.append(h);
		if(cfg.data){
			$.each(cfg.data,function(i,n){
				var item=$('<div class="appLive_list_item"><img src="../apps/appShow/img/'+n.url+'" alt=""><p class="title">'+n.title+'</p><p>更新到第六集</p></div>')
				component.append(item);
			})
		}
		return component;
 	}
 win.appComponentLive_list=appComponentLive_list;
})(window,document,jQuery);