var appComponentVideoplay=function(name,cfg){
	var cfg=cfg||{};
	var component=$('<video autoplay controls><source src="../apps/appShow/img/'+cfg.dataUrl+'"></source></video><div class="appVideo_title"><span>'+cfg.dataTitle+'</span><i class="fa fa-angle-down fr"></i></div><div class="appVideo_time clearfix"><span class="appVideo_time_l fl"><i class="fa fa-toggle-right" style="margin-right: 5px;"></i>'+cfg.dataTime+'次播放</span><span class="appVideo_time_r fr"><i class="fa fa-star-o"></i></span></div>')
	return component;
}
