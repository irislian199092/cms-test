$(function() {
	
	//获取每项选项卡的宽度总和
    function getWidth(item) {
        var i = 0;
        $(item).each(function() {
            i += $(this).outerWidth(true)
        });
        return i;
    }
    
	//获取每项选项卡的margin值
    function getMarginLeft(item) {
		var	a = getWidth($(item).prevAll());    //导航条中当前选项前面所有的兄弟节点的宽度和
		var	i  = getWidth($(item).nextAll());    //导航条中当前选项后面的兄弟节点的宽度和
		var	n = getWidth($(".content-tabs").children().not(".J_menuTabs"));    //导航条中除了选项卡外其他元素的宽度
		var	s = $(".content-tabs").outerWidth(true) - n;    //导航条中选项卡槽的宽度
		var	r = 0;
		    	
		//如果选项卡的宽度小于选项卡槽的宽度,r=0
		if ($(".page-tabs-content").outerWidth()< s){
			r = 0;
		}else if (i <= s - $(item).outerWidth(true) - $(item).next().outerWidth(true)) {
			if (s - $(item).next().outerWidth(true) > i) {
				r = a;
				for (var o = item; r - $(o).outerWidth() > $(".page-tabs-content").outerWidth() - s;){
		        	 r =r- $(o).prev().outerWidth();
		        	 o = $(o).prev();
				}
			}
		}else if(a > s - $(item).outerWidth(true) - $(item).prev().outerWidth(true)){
			r = a - $(item).prev().outerWidth(true);
		}
        		
		$(".page-tabs-content").animate({
		    marginLeft: 0 - r + "px"
		}, "fast");
    }
	
	//点击右侧导航条往左滚动
	$(".J_tabLeft").on("click", function(){
		var e = Math.abs(parseInt($(".page-tabs-content").css("margin-left")));
		var a = getWidth($(".content-tabs").children().not(".J_menuTabs"));
		var i = $(".content-tabs").outerWidth(true) - a;
		var n = 0;
        if ($(".page-tabs-content").width() < i){
        	return false;
        }
        for (var s = $(".J_menuTab:first"),r = 0; r + $(s).outerWidth(true) <= e;){
        	r += $(s).outerWidth(true);
        	s = $(s).next();
        }
        if (r = 0, getWidth($(s).prevAll()) > i) {
            for (; r + $(s).outerWidth(true) < i && s.length > 0;){
            	r += $(s).outerWidth(true);
            	s = $(s).prev();
            }
            n = getWidth($(s).prevAll());
        }
        $(".page-tabs-content").animate({
            marginLeft: 0 - n + "px"
        }, "fast");
	});
	
	//点击右侧导航条往右滚动
	$(".J_tabRight").on("click", function(){
		var e = Math.abs(parseInt($(".page-tabs-content").css("margin-left")));
		var a = getWidth($(".content-tabs").children().not(".J_menuTabs"));
		var i = $(".content-tabs").outerWidth(true) - a;
		var n = 0;
            	
		if ($(".page-tabs-content").width() < i){
			return false;
		}
		for (var s = $(".J_menuTab:first"), r = 0; r + $(s).outerWidth(!0) <= e;){
			r += $(s).outerWidth(true);
			s = $(s).next();
		}
		for (r = 0; r + $(s).outerWidth(true) < i && s.length > 0;){
			r += $(s).outerWidth(true);
			s = $(s).next();
		}
        n = getWidth($(s).prevAll());
		if(n > 0){
			$(".page-tabs-content").animate({
        	marginLeft: 0 - n + "px"
   		 	}, "fast");
		}
	});
	
    
    function GetRandomNum(Min,Max){   
		var Range = Max - Min;   
		var Rand = Math.random();   
		return(Min + Math.round(Rand * Range));   
	}   
    //新建标签页
    $("#add").on('click',function(){
    	var randnum = GetRandomNum(1,100);
    	var dataid = ''+ new Date().getTime() + randnum;
    	var	tabname ='新建标签页';
        var frameurl ='newtab';
        var tab ='<a href="javascript:;" class="active J_menuTab" data-id="' + dataid + '" data-lock="unlock">' + tabname+ ' <i class="fa fa-times-circle"></i></a>';
        $(".J_menuTab").removeClass("active");
        $(tab).insertBefore($(this));
        $(".J_mainContent").find("iframe.J_iframe").hide()
        var frame = '<iframe class="J_iframe" width="100%" height="100%" src="' + frameurl + '" frameborder="0" data-id="' + dataid + '" data-lock="unlock" seamless style="display:inline;"></iframe>';
        $(".J_mainContent").append(frame);
        getMarginLeft($(".J_menuTab.active"));
    	return false;
    });
    
    //点击左边导航栏时，右边选项卡动态显示
    function rightNav(){
    	var frameurl = $(this).attr("href");//菜单地址
     	var dataid = $(this).data("index");//菜单ID
     	var tabname = $.trim($(this).text());//菜单名称
     	var onOff = true;//开关onOff
     	var tab =false;
     	var ifram =false;
     	$(".J_menuTab").each(function(){
     		if($(this).data("id") == dataid){//如果菜单已经被打开,不需要增加新的,需要直接显示出来
     			onOff=false;//不需要增加新的,需要直接显示出来
     			if(!($(this).hasClass("active"))){
     				//设置当前菜单对应的TAB显示
     				$(this).addClass("active").siblings(".J_menuTab").removeClass("active");
     			}
     			$(".J_mainContent  .J_iframe").each(function(){
     				if($(this).data('id') == dataid){
     					$(this).show().siblings().hide();
     				}
     			});
     			getMarginLeft($(".J_menuTab.active"));
	        }
     		if($(this).hasClass("active")){//tab当前被选中的,如果没有则说明之前没有tab被打开
     			tab = $(this);
     			$(".J_mainContent  .J_iframe").each(function(){
     				if($(this).data('id') == tab.data('id')){
     					iframDiv= $(this);
     				}
     			});
     		}
     	});
     	if(!onOff){
     		return false;
     	}
     	if(tab != false && tab.data("lock") == "unlock"){//有被选中的tab并且是未锁定的状态需要替换
     		var s='<a href="javascript:;" class="active J_menuTab" data-id="' + dataid + '" data-lock="unlock">' + tabname + ' <i class="fa fa-times-circle"></i></a>';
 			$(s).insertBefore(tab);
 			tab.remove();
 			$(iframDiv).attr('src',frameurl);
 			$(iframDiv).data('id',dataid);
 			$(iframDiv).data('lock','unlock');
 			getMarginLeft($(".J_menuTab.active"));
     	}else{//没有或tab已经被锁定的直接增加新的
     		var s = '<a href="javascript:;" class="active J_menuTab" data-id="' + dataid + '" data-lock="unlock">' + tabname + ' <i class="fa fa-times-circle"></i></a>';
            $(".J_menuTab").removeClass("active");
            $(s).insertBefore($(".J_menuTabs .page-tabs-content a:last-child"));
            $(".J_mainContent").find("iframe.J_iframe").hide();
            var r = '<iframe class="J_iframe" width="100%" height="100%" src="' + frameurl + '" frameborder="0" data-id="' + dataid + '" data-lock="unlock" seamless style="display:inline"></iframe>';
            $(".J_mainContent").append(r);
            getMarginLeft($(".J_menuTab.active"));
     	}
     	return false;
    }
    
    $(".J_menuItem").on("click",rightNav);

    
    //点击选项卡时，相应的iframe显示
    $(".J_menuTabs").on("click", ".J_menuTab", function(){
    	$(this).addClass("active").siblings(".J_menuTab").removeClass("active");
    	getMarginLeft($(this));
        var dataid = $(this).data("id");
        $(".J_mainContent .J_iframe").each(function() {
        	if($(this).data("id") == dataid){
        		$(this).show().siblings(".J_iframe").hide();
        	}
        });
    });
    
    //点击右侧选项卡X按钮时
    $(".J_menuTabs").on("click", ".J_menuTab i", function(){
    	//设置变量
    	var a = $(this).parents(".J_menuTab").width();
    	var s = $(this).parents(".J_menuTab").data("id");
        		
        		
        //如果当前选项卡被选中
        if ($(this).parents(".J_menuTab").hasClass("active")) {
        	
        	 //如果当前选项卡后面一个选项卡存在
            if ($(this).parents(".J_menuTab").next(".J_menuTab").size()) {
        		//设置当前选项卡后面一个选项卡ID值
                var i = $(this).parents(".J_menuTab").next(".J_menuTab:eq(0)").data("id");
                $(this).parents(".J_menuTab").next(".J_menuTab:eq(0)").addClass("active");
                $(".J_mainContent .J_iframe").each(function() {
                	if($(this).data("id") == i){
                		$(this).show().siblings(".J_iframe").hide();
                	}
                });
                var n = parseInt($(".page-tabs-content").css("margin-left"));
                if(n>0){
                	$(".page-tabs-content").animate({
                    	marginLeft: n + a + "px"
                	}, "fast");
	            }
                $(this).parents(".J_menuTab").remove();
		        $(".J_mainContent .J_iframe").each(function() {
		        	if($(this).data("id") == s){
		        		$(this).remove();
		        	}
		        });
            }
            
            //如果当前选项卡前面一个选项卡存在 
            if ($(this).parents(".J_menuTab").prev(".J_menuTab").size()) {
            	//设置当前选项卡前面一个选项卡ID值
                var i = $(this).parents(".J_menuTab").prev(".J_menuTab:last").data("id");
                //设置当前选项卡前面一个选项卡加active
                $(this).parents(".J_menuTab").prev(".J_menuTab").addClass("active");
                //设置当前选项卡前面一个选项卡iframe显示
                $(".J_mainContent .J_iframe").each(function() {
                	if($(this).data("id") == i){
                		$(this).show().siblings(".J_iframe").hide();
                	}
            	})
                $(this).parents(".J_menuTab").remove();
		        $(".J_mainContent .J_iframe").each(function() {
		        	if($(this).data("id") == s){
		        		$(this).remove();
		        	}
		        });
        	}else{
        		$(this).parents(".J_menuTab").remove();
		        $(".J_mainContent .J_iframe").each(function() {
		        	if($(this).data("id") == s){
		        		$(this).remove();
		        	}
		        });
			}
        }
        //如果当前选项卡未被选中
        $(this).parents(".J_menuTab").remove();
	        $(".J_mainContent .J_iframe").each(function() {
	        	if($(this).data("id") == s){
	        		$(this).remove();
	        	}
	    });
        getMarginLeft($(".J_menuTab.active"));
		return false;
       
    });
    
	//点击关闭其他时
	$(".J_tabCloseOther").on("click",function(){
		$(".page-tabs-content").children("[data-id]").not(":last").not(".active").each(function() {
            $('.J_iframe[data-id="' + $(this).data("id") + '"]').remove(), $(this).remove();
        });
        $(".page-tabs-content").css("margin-left", "0");
	});

	//点击定位到当前选项卡时
	$(".J_tabShowActive").on("click", function(){
		 getMarginLeft($(".J_menuTab.active"));
	});
	
	//点击关闭全部选项卡时
	$(".J_tabCloseAll").on("click", function() {
        $(".page-tabs-content").children("[data-id]").not(":last").each(function() {
            $('.J_iframe[data-id="' + $(this).data("id") + '"]').remove();
            $(this).remove();
        });
        
        $(".page-tabs-content").css("margin-left", "0");
    });
	
	//循环左侧导航，给每个导航加一个索引值
    $(".J_menuItem").each(function(t) {
        $(this).attr("data-index") || $(this).attr("data-index", t);
    });
    
});