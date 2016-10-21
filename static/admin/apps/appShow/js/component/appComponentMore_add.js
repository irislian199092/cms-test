/*更多——添加应用*/
(function(win,doc,$){
 function appComponentMore_add(name,cfg){
 	var cfg=cfg||{};
	var component=$('<div class="appMore_add_wrap">');
	var ul_h=$('<ul class="appMore_add_h">');
	if(cfg.data){
		$.each(cfg.data,function(i,n){
			var li=$('<li><a href="#"><span class="appMore_add_h_icon"></span><span class="appMore_add_h_text">'+n+'</span></a></li>');
			ul_h.append(li);
		})
	}
	component.append(ul_h);
	var ul_b=$('<ul class="appMore_add_b">');
	var li_b=$('<li><a href="#" class="clearfix"><span class="b_icon fl"></span><span class="b_text fl">意见反馈</span><i class="fa arrow fr"></i></a></li><li><a href="#" class="clearfix"><span class="b_icon fl"></span><span class="b_text fl">设置</span><i class="fa arrow fr"></i></a></li>');
	ul_b.append(li_b);
	component.append(ul_b);
	return component;
 }
 win.appComponentMore_add=appComponentMore_add;
})(window,document,jQuery);