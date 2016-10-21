var appComponentLogo2=function(name,cfg){
	var cfg=cfg||{};
	var component=$('<ul class="droppable sortable clearfix"><li><span class="appLogo_list"></span></li><li><span class="appLogo_title">'+cfg.title+'</span></li><li><span class="appLogo_search"></span></li><li><span class="appLogo_profile"></span></li></ul>');
	return component;
}
