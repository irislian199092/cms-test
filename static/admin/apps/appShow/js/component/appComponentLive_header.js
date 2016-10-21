/*点播标题*/
(function(win,doc,$){
 function appComponentLive_header(name,cfg){
 	var cfg=cfg||{};
	var component=$('<div class="appLive_header_wrap">');
	if(cfg.data){
		var list1=$('<div class="appLive_header_list"><i class="fa fa-angle-left"></i></div>');
		var list2=$('<div class="appLive_header_list">'+cfg.data+'</div>');
		var list3=$('<div class="appLive_header_list"><i class="fa fa-search"></i></div>');
		component.append(list1);
		component.append(list2);
		component.append(list3);
	}
	return component;
 }
 win.appComponentLive_header=appComponentLive_header;
})(window,document,jQuery);


