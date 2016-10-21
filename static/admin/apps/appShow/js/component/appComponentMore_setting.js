/*更多——设置*/
(function(win,doc,$){
 function appComponentMore_setting(name,cfg){
 	var cfg=cfg||{};
	var component=$('<div class="appMore_setting_wrap">');
	var ul_h=$('<ul class="appMore_setting_h">');
	var li_h=$('<li><span class="setting_fl">非WIFI下播放提示</span><span class="setting_wifi fr"></span></li><li><span class="setting_fl">自动跳过片片尾</span><span class="setting_wifi off fr"></span></li><li><span class="setting_fl">推送功能</span><span class="setting_wifi fr on"></span></li>');
	ul_h.append(li_h);
	component.append(ul_h);
	var ul_b=$('<ul class="appMore_setting_b">');
	var li_b=$('<li><span class="setting_fl">版本信息</span><span class="setting_vension fr">多屏看2.0</span></li><li><span class="setting_fl">检测更新</span><i class="fa arrow fr"></i></li><li><span class="setting_fl">清理缓存</span><span class="setting_btn fr">清除</span></li><li><span class="setting_fl">意见反馈</span><i class="fa arrow fr"></i></li>');
	ul_b.append(li_b);
	component.append(ul_b);
	return component;
 }
 win.appComponentMore_setting=appComponentMore_setting;
})(window,document,jQuery);