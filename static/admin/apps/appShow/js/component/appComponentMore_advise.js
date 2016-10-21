/*更多——意见反馈*/
(function(win,doc,$){
 function appComponentMore_advise(name,cfg){
 	var cfg=cfg||{};
	var component=$('<div class="appMore_advise_wrap">');
	var h=$('<div class="appMore_advise_h"><i class="fa fa-angle-left fl"></i><span class="fl">意见反馈</span></div>');
	var b=$('<form class="appMore_advise_b"><textarea name="advise" id="" placeholder="留下点意见吧"></textarea><input type="submit" value="提交"  class="advise_btn" /></form>');
	component.append(h);
	component.append(b);
	return component;
 }
 win.appComponentMore_advise=appComponentMore_advise;
})(window,document,jQuery);