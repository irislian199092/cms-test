/*轮播图*/
(function(win,doc,$){
	function appComponentSlide(name,cfg){
		var cfg=cfg||{};
		var basePath = 'http://admin.nmop.site/';
		var component2=$('<div class="appSlide_wrap">');
		var component=$('<div class="bannerShow">');
		var ul1=$('<ul>');
		var ul2=$('<ul>');
		var hd=$('<div class="hd">');
		var bd=$('<div class="bd">');
		var but=$('<a class="prev" href="javascript:void(0)"></a><a class="next" href="javascript:void(0)"></a>')
		if(cfg.Library_rec){
			$.each(cfg.Library_rec,function(i,n){
				var list2=$('<li><a href="#"><img class="slideImage" src="'+basePath+n.thumb_web_top+'"/></a>');
				var list=$('<li><a href="#"><img class="slideImage" src="'+basePath+n.thumb_web_h+'"/></a><div class="title">'+n.title+'</div></li>');
				ul1.append(list);
				ul2.append(list2);
			});
		}
		hd.append(ul2);
		bd.append(ul1);
		component.append(hd);
		bd.appendTo(component);
		component.append(but);
		component2.append(component);
		return component2;
	}
 win.appComponentSlide=appComponentSlide;
})(window,document,jQuery);