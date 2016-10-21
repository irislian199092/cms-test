/*热搜*/
(function(win,doc,$){
 function appComponentHotsearch(name,cfg){
 	var cfg=cfg||{};
	var component=$('<div class="appHotsearch_box">');
	var form=$('<form class="search-form" role="search" method="post" action="#" name="hotsearch"><input type="text" placeholder="请输入您需要查找的内容" name="topsearch"/></form>')
	var title=$('<div class="appHotsearch_title clearfix"><span class="appHotsearch_title_icon fl"></span><span class="appHotsearch_title_content fl">'+cfg.title+'</span></div>');
	var ul=$('<ul class="clearfix">');
	if(cfg.data){
		$.each(cfg.data,function(i,n){
			var li= $('<li><i class="fa fa-circle"></i><a href="javascript:;">'+n+'</a></li>');
			ul.append(li);
			component.append(form);
			component.append(title);
			component.append(ul);
		})
	}
	return component;
 }
 win.appComponentHotsearch=appComponentHotsearch;
})(window,document,jQuery);


