/*footer--------------------->底部*/
(function(win,doc,$){
 function appComponentFooter(name,cfg){
 	var cfg=cfg||{};
	var component=$('<div class="appFooter_wrap">');
	var footer_link=$('<div class="footer_link">');
	var footer_link_a=$('<a href="javascript:;">意见反馈&nbsp;|&nbsp;</a><a href="javascript:;">加入收藏&nbsp;|&nbsp;</a><a href="javascript:;">隐私权保护&nbsp;|&nbsp;</a><a href="javascript:;">关于我们&nbsp;|&nbsp;</a><a href="javascript:;">天山云之家&nbsp;|&nbsp;</a><a href="javascript:;">企业门户&nbsp;|&nbsp;</a><a href="javascript:;">移动客户端</a>');
	footer_link.append(footer_link_a);
	var footer_id=$('<div class="footer_id">');
	var footer_id_con=$('<a href="javascript:;"><img src="http://by.tsytv.com.cn/img/tsytv/images/batb.png" alt=""/><p>新公网安备 65010202000002号</p></a>');
	footer_id.append(footer_id_con);
	var footer_detail=$('<div class="footer_detail">');
	var footer_detail_con=$('<span>国新办发函[2003]106号</span><span>邮编:830000</span><span>地址:新疆乌鲁木齐哈密路330号</span><span>微信公众@天山云TV，新浪微博<a target="_blank" href="http://weibo.com/xjtsyzz?from=myfollow_all">@天山云TV</a></span>');
	footer_detail.append(footer_detail_con);
	component.append(footer_link);
	component.append(footer_id);
	component.append(footer_detail);
	return component;
 }
 win.appComponentFooter=appComponentFooter;
})(window,document,jQuery);
