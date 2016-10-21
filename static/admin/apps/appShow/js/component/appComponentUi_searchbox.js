
/*UI搜索框*/
(function(win,doc,$){
 	function appComponentUi_searchbox(name,cfg){
 		var cfg=cfg||{};
		var component=$('<form action="#" method="get" class="appUi_searchbox_wrap">');
		var con=$('<input type="text" placeholder="搜索" class="searchbox_input" id="search_form"></input><button type="submit" class="searchbox_btn"></button>');
		component.append(con);
		return component;
 	}
 win.appComponentUi_searchbox=appComponentUi_searchbox;
})(window,document,jQuery);