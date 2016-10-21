var App=function(cfg){
	var cfg=cfg||{};
	this.section=[];
	this.addSection=function(name,cfg){
		var cfg=cfg||{};
		var section=$('<div class="draggable '+name+' '+cfg.type+'" data-toggle="context" data-eindex="'+cfg.index+'">');
		cfg.height&&section.height(cfg.height);
		cfg.maxHeight&&section.height(cfg.maxHeight);
		section.css({
			'background':cfg.background,
			'color':cfg.color,
			'fontSize':cfg.fontSize,
			'opacity':cfg.opacity,
			'marginTop':cfg.marginTop+'px',
			'marginBottom':cfg.marginBottom+'px',
			'fontWeight':cfg.fontWeight,
			'height':cfg.height
		})
		$('.appWrap').append(section);
		this.section.push(section);
		return this;
	}
	this.addComponent=function(name,cfg){
		var cfg = cfg || {};
		var page = this.section.slice(-1)[0];
		var component;
		switch(name){
			case 'header':
					component = new appComponentHeader(name,cfg);//首页导航条
        			break;
			case 'logo':
					component = new appComponentLogo(name,cfg);	 //logo
					break;
			case 'logo2':
					component = new appComponentLogo2(name,cfg);	 //logo
					break;
        	case 'slide':
					component = new appComponentSlide(name,cfg); //轮播图
        			break;
        	case 'section':
					component = new appComponentSection(name,cfg);//内容区块
        			break;
        	case 'footer':
					component = new appComponentFooter(name,cfg);//底部导航
        			break;
        	case 'videoplay':
					component = new appComponentVideoplay(name,cfg);//视频播放
        			break;
        	case 'hotsearch':
					component = new appComponentHotsearch(name,cfg);//热搜
        			break;
        	case 'hotplay':
					component = new appComponentHotplay(name,cfg);//热搜
        			break;
			case 'person_nonlogin_header':
					component = new appComponentPerson_nonlogin_header(name,cfg);//个人中心未登录头部
					break;
			case 'person_login_header':
					component = new appComponentPerson_login_header(name,cfg);//个人中心登录头部
					break;
			case 'person_login_body_detail':
					component = new appComponentPerson_login_body_detail(name,cfg);//个人中心登录详细信息
					break;
			case 'person_login_message':
					component = new appComponentPerson_login_message(name,cfg);//个人中心登录消息中心
					break;
			case 'person_login_body_history':
					component = new appComponentPerson_login_body_history(name,cfg);//个人中心登录观看历史
					break;
			case 'personbody':
					component = new appComponentPersonbody(name,cfg);//个人中心未登录身体
					break;
			case 'person_nonlogin_history':
					component = new appComponentPerson_nonlogin_history(name,cfg);//个人中心未登录观看历史
					break;
			case 'person_register_h':
					component = new appComponentPerson_register_h(name,cfg);//个人中心注册头部
					break;
			case 'person_register_b':
					component = new appComponentPerson_register_b(name,cfg);//个人中心注册身体
					break;
			case 'livenav':
					component = new appComponentLivenav(name,cfg);//直播导航条
					break;
			case 'livecontent':
					component = new appComponentLivecontent(name,cfg);//直播内容
					break;
			case 'live_header':
					component = new appComponentLive_header(name,cfg);//点播标题
					break;
			case 'live_nav':
					component = new appComponentLive_nav(name,cfg);//点播导航条
					break;
			case 'live_list':
					component = new appComponentLive_list(name,cfg);//点播内容列表
					break;
			case 'live_video':
					component = new appComponentLive_video(name,cfg);//点播视频
					break;
			case 'live_play_tv':
					component = new appComponentLive_play_tv(name,cfg);//点播电视剧选集
					break;
			case 'live_like_tv':
					component = new appComponentLive_like_tv(name,cfg);//点播电视剧猜你喜欢
					break;
			case 'live_play_variety':
					component = new appComponentLive_play_variety(name,cfg);//点播综艺节目详情
					break;
			case 'live_play_movie':
					component = new appComponentLive_play_movie(name,cfg);//点播电影详情
					break;
			case 'live_like_movie':
					component = new appComponentLive_like_movie(name,cfg);//点播电影猜你喜欢
					break;
			case 'live_subscription':
					component = new appComponentLive_subscription(name,cfg);//订阅频道
					break;

			case 'more_add':
					component = new appComponentMore_add(name,cfg);        //更多——添加应用
					break;
			case 'more_setting':
					component = new appComponentMore_setting(name,cfg);    //更多——设置
					break;
			case 'more_advise':
					component = new appComponentMore_advise(name,cfg);    //更多——意见反馈
					break;
			case 'ui_searchbox':
					component = new appComponentUi_searchbox(name,cfg);//搜索框
					break;
			case 'ui_searchbox_lately':
					component = new appComponentUi_searchbox_lately(name,cfg);//搜索框
					break;
			case 'ui_searchbox_hot':
					component = new appComponentUi_searchbox_hot(name,cfg);//搜索框
					break;
        	default:
		}
		page.append(component);
		return this;
	}
	return this;
}

