/*点播视频*/
(function(win,doc,$){
 	function appComponentLive_video(name,cfg){
 		var cfg=cfg||{};
		var component=$('<div class="appLive_video_wrap">');
		var h=$('<div class="appLive_video_title"><i class="fa fa-angle-left"></i>'+cfg.data.title+'</div>');
		component.append(h);
		var v=$('<video class="appLive_video_content" autoplay controls><source src="../apps/appShow/img/'+cfg.data.url+'"></video>');
		component.append(v);
		return component;
 	}
 win.appComponentLive_video=appComponentLive_video;
})(window,document,jQuery);