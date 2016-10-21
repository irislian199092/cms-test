/*轮播图*/
(function(win,doc,$){
	function appComponentSlide(name,cfg){
		var cfg=cfg||{};
		var component=$('<div class="bannerShow">');
		var ul1=$('<ul>');
		var ul2=$('<ul>');
		var hd=$('<div class="hd">');
		var bd=$('<div class="bd">');
		var but=$('<a class="prev" href="javascript:void(0)"></a><a class="next" href="javascript:void(0)"></a>')
		if(cfg){
			$.each(cfg,function(i,n){
				var list2=$('<li>');
				var list=$('<li><a href="#"><img class="slideImage" src="../apps/appShow/img/'+n.dataUrl+'"/></a><div class="title">'+n.dataTitle+'</div></li>');
				ul1.append(list);
				ul2.append(list2);
			});
		}
		hd.append(ul2);
		bd.append(ul1);
		component.append(hd);
		bd.appendTo(component);
		component.append(but);
		return component;
	}
 win.appComponentSlide=appComponentSlide;
})(window,document,jQuery);