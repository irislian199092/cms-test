/*SECTION--------------------->区块专题*/
(function(win,doc,$){
 function appComponentSection_special(name,cfg){
 	var basePath = 'http://admin.nmop.site/';
 	var component=$('<div class="appSection_special_wrap clearfix">');
 	if(cfg){
 		var l=$('<div class="appSection_special_l fl"><a href=""><img src="'+basePath+cfg.leftUrl[0].content+'" alt=""></a></div>');
 		var r=$('<div class="appSection_special_r fr"><a href=""><img src="'+basePath+cfg.rightUrl[0].content+'" alt=""></a></div>');
 		component.append(l);
 		component.append(r); 
 	}
	return component;
 }
 win.appComponentSection_special=appComponentSection_special;
})(window,document,jQuery);
