
/*
------------自定义滚轮插件----------------
*/
(function(win,doc,$){
	function Scrollbar(options){
		this._init(options);
	};
	$.extend(Scrollbar.prototype,{
		//初始化函数
		_init:function(options){
			var self=this;
			self.options={
				dirSelector    :'x', //滚动条方向
				contSelector   :'',  //内容选择器
				barSelector    :'',  //滑动槽选择器
				sliderSelector :'',  //滑动块选择器
				wheelStep      :'10' //滚轮步长
			}
			$.extend(true,self.options,options||{});
			self._initDom();
			return self;
		},
		//DOM元素选择操作
		_initDom:function(){
			this.$dir=this.options.dirSelector;
			this.$cont=this.options.contSelector;
			this.$bar=this.options.barSelector;
			this.$slider=this.options.sliderSelector;
			this.$wheelStep=this.options.wheelStep;
			this.$doc=$(doc);
			if(this.$dir==='x'){
			    this._initSliderDragEvent()
			    	._bindContScrollX();
			}
			if(this.$dir==='y'){
				this._initSliderDragEvent()
			    	._bindContScrollY()
			    	._bindMouseWheel();
			}
		},
		//滑块开始拖动函数
		_initSliderDragEvent:function(){
			var self=this;
			var doc=this.$doc;
			if(self.$dir==='x'&&self.$slider){
				var	sliderStartPosX; //鼠标开始拖拽位置
				var	sliderMovePosX;  //鼠标移动时位置
				var contStartPosX;   //内容开始时的滚动距离
				var scaleX;           //内容可滚动的最大高度跟滑块可滑动的距离的比值
				var contMovePosX;    //内容移动时到可视区的距离
				function mousemoveHandler(e){
					e.preventDefault();
					sliderMovePosX=e.pageX;
					contMovePosX=scaleX*(sliderMovePosX-sliderStartPosX)+contStartPosX;
					self._scrollToX(contMovePosX);
				}
			};
			if(self.$dir==='y'&&self.$slider){
				var	sliderStartPosY; //鼠标开始拖拽位置
				var	sliderMovePosY;  //鼠标移动时位置
				var contStartPosY;   //内容开始时的滚动距离
				var scaleY;          //内容可滚动的最大高度跟滑块可滑动的距离的比值
				var contMovePosY;    //内容移动时到可视区的距离
				function mousemoveHandler(e){
					e.preventDefault();
					sliderMovePosY=e.pageY;
					contMovePosY=scaleY*(sliderMovePosY-sliderStartPosY)+contStartPosY;
					self._scrollToY(contMovePosY);
				};
			}
			self.$slider.on('mousedown',function(e){
				e.preventDefault();
				/*X方向*/
				sliderStartPosX=e.pageX;     //鼠标开始拖拽位置
				contStartPosX=self.$cont[0].scrollLeft; //内容开始滚动距离
				scaleX=self._getContMaxScrollX()/self._getSliderMaxScrollX();//比例
				/*Y方向*/
				sliderStartPosY=e.pageY;
				contStartPosY=self.$cont[0].scrollTop;
				scaleY=self._getContMaxScrollY()/self._getSliderMaxScrollY();
				/*移动时函数*/
				doc.on('mousemove.slider',mousemoveHandler).on('mouseup.slider',function(e){
					doc.off('.slider');
				})
			});
			return self;
		},
		//y轴绑定滚轮事件
		_bindMouseWheel:function(){
			var self=this;
			//火狐和其他浏览器的滚轮事件区别
			self.$cont.on('mousewheel DOMMouseScroll',function(e){
				e.preventDefault();
				var oEv=e.originalEvent;//指向原生对象事件
				var range=oEv.wheelDelta?-oEv.wheelDelta/120:(oEv.detail||0)/3;
				var value=self.$cont[0].scrollTop+range*self.$wheelStep;
				self._scrollToY(value);
			})
			return self;
		},
		//x轴监视内容的滚动，滑块开始滚动
		_bindContScrollX:function(){
			var self=this;
			self.$cont.on('scroll',function(){
				self.$slider.css({
					left:self._getSliderScrollX()
				})
			})
			return self;
		},
		//y轴监视内容的滚动，滑块开始滚动
		_bindContScrollY:function(){
			var self=this;
			self.$cont.on('scroll',function(){
				self.$slider.css({
					top:self._getSliderScrollY()
				})
			})
			return self;
		},

		//x轴内容可滚动的最大高度
		_getContMaxScrollX:function(){
			var self=this;
			var _c=self.$cont[0].scrollWidth-self.$cont.width();
			return _c;
		},
		//y轴内容可滚动的最大高度
		_getContMaxScrollY:function(){
			var self=this;
			var _c=self.$cont[0].scrollHeight-self.$cont.height();
			return _c;
		},

		//x轴滑块可滑动的距离
		_getSliderMaxScrollX:function(){
			var self=this;
			return self.$bar.width()-self.$slider.width();

		},
		//y轴滑块可滑动的距离
		_getSliderMaxScrollY:function(){
			var self=this;
			return self.$bar.height()-self.$slider.height();
		},
		//x轴获取滑块当前滚动位置
		_getSliderScrollX:function(){
			var self=this;
			var n=Math.min(self._getSliderMaxScrollX(),self.$cont[0].scrollLeft*self._getSliderMaxScrollX()/self._getContMaxScrollX());
			return n;
		},
		//y轴获取滑块当前滚动位置
		_getSliderScrollY:function(){
			var self=this;
			var n=Math.min(self._getSliderMaxScrollY(),self.$cont[0].scrollTop*self._getSliderMaxScrollY()/self._getContMaxScrollY());
			return n;
		},
		//x轴内容滚动距离
		_scrollToX:function(pos){
			var self=this;
			self.$cont.scrollLeft(pos);
		},
		//y轴内容滚动距离
		_scrollToY:function(pos){
			var self=this;
			self.$cont.scrollTop(pos);
		}
	})
	win.Scrollbar=Scrollbar;
})(window,document,jQuery);

/*
------------自定义菜单收缩展开插件----------------
*/
(function(win,doc,$,undefined){
	var pluginName='metisMenu';
	var defaults={
		toggle:true,
		doubleTapToGo: false
	};
	function Plugins(element,options){
		this.ele=$(element);
		this.settings=$.extend(true,self.options,options||{});
		this._defaults=defaults;
		this._name=pluginName;
		this.init();
	}

})(window,document,jQuery)


/*
------------自定义弹出消息插件----------------
*/



