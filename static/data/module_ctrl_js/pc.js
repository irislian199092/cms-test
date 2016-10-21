var App=function(cfg){
	var cfg=cfg||{};
	this.section=[];
	this.addSection=function(moduleid,name,cfg){
		var cfg=cfg||{};
		var section=$('<div mid="'+moduleid+'" class="'+name+' '+cfg.type+'" data-toggle="context" id="'+name+'">');
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
        	case 'slide':
					component = new appComponentSlide(name,cfg); //轮播图
        			break;
        	case 'today_hot':
					component = new appComponentToday_hot(name,cfg);//今日热门
        			break;
        	case 'section_variety':
					component = new appComponentSection_variety(name,cfg);//区块——综艺节目
        			break;
        	case 'section_special':
					component = new appComponentSection_special(name,cfg);//区块——专题
        			break;
        	case 'footer_nav':
					component = new appComponentFooter_nav(name,cfg);//底部导航条
        			break;
			case 'footer':
					component = new appComponentFooter(name,cfg);//底部
					break;
        	default:
		}		
		var whiteMask=$('<div class="whiteMask">');
		var dragBtn=$('<button class="dragBtn" data-type="'+name+'">编辑</button>');		
		var removeBtn=$('<button class="removeBtn">删除</button>');		
		var saveBtn=$('<button class="saveBtn">保存</button>');
		page.append(whiteMask);
		page.append(dragBtn);
		page.append(removeBtn);
		page.append(saveBtn);
		page.append(component);
		return this;
	}
	return this;
}

function fillTheCase(flag,data){
	console.log(data);
};