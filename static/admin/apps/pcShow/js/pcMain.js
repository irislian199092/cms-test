$(function() {

    (function() {
        /*整个项目入口函数*/
        function appMain() {
            appControl();
            appModel();
        }

        /*实现页面交互的函数*/
        function appControl() {
            $('.appNav').metisMenu(); /*菜单折叠*/

            $('.appNav_body_item .add').each(function(t, n) {
                var z = 'data-phone';
                $(this).attr(z) || $(this).attr(z, t);
            });

            $('.appNav_body_item .add').on('click', function() {
               
                var s = $(this).siblings('.preview').html();
                var wrap = $('<div class="view"><div class="ui-sortable appWrap appWrap_' + s + '"></div></div>');
                $('.demo').append(wrap);
                // 组织重复添加容器
                if ($('.demo').find('.view').size() === 2) {
                    $('.demo').find('.view').eq(0).find('.appWrap').attr('class', 'ui-sortable appWrap appWrap_' + s);
                    $('.demo').find('.view').eq(1).remove();
                };
				// 留着备用，增加组件时需要
				// $('#boxForm').show();
                // var index=$(this).data('phone');
                // $('#boxType').find('select option').eq(index).attr('selected','selected');
                // $('#boxType').find('select option').eq(index).siblings('option').attr('selected',false);
                // $('#boxType').find('select option').eq(index).addClass('on');
                // $('#boxType').find('select option').eq(index).siblings('option').removeClass('on');
            });
        }
        /*实现组件UI界面的函数*/
        function appView(secName, secOption, secData) {
            var i = 0;
            /*给每个添加按钮加一个data属性*/
            $('.appNav_comp_' + secOption + ' .add').each(function(t, n) {
                var z = 'data-' + secOption;
                $(this).attr(z) || $(this).attr(z, t);
            });

            /*添加组件操作*/
            $('.appNav_comp_' + secOption + ' .add').on('click', function() {
                /*添加编辑*/
                i++;
                $('#editForm').empty();
                var title = $(this).parents('ul').siblings().find('.nav-label').html(); //每一项列表的标题
                var index = $(this).data(secOption); //添加按钮的index

                /*让容器内排序*/
                $('.appWrap').sortable({ axis: "y" });

                /*添加组件对象*/
                var app = new App();
                var type = $(this).siblings('.preview').html();
                var cfg = {
                    secOption: {
                        type: secName + ($(this).data(secOption) + 1),
                        index: $(this).data(secOption)
                    }
                };
                app.addSection(secName, cfg.secOption).addComponent(secOption, secData);
                /*导航条组件交互处理*/
                if (secName === 'appHeader') {
                    //点击每项加class
                    $('.appHeader_wrap li').eq(0).addClass('active');
                    $('.appHeader_wrap li').on('click', function() {
                        $(this).addClass('active');
                        $(this).siblings().removeClass('active');
                    });
                }
                /*轮播图组件交互处理*/
                if (secName === 'appSlide') {
                    Slide();

                    function Slide() {
                        var current = 1, //当前页指针（从1开始）
                            s = $('.appWrap').width(),
                            num = $('.bannerShow .bd ul li').size();
                        // 初始化
                        var auto = setInterval(function() {
                            $(".bannerShow .next").trigger("click");
                        }, 4000);
                        $('.bannerShow .bd ul li').eq(0).show().siblings().hide(); //初始化轮播图的第一张为show，其他隐藏
                        $(".bannerShow .hd ul li").eq(0).addClass("on").siblings().removeClass();
                        //鼠标移入移出轮播图区域，上一页下一页按钮显现/消失，启动/停止轮播
                        $('.bannerShow').hover(function() {
                                $('.bannerShow .next,.bannerShow .prev').stop(true, true).fadeIn(400);
                                clearInterval(auto);
                            }, function() {
                                $('.bannerShow .next,.bannerShow .prev').stop(true, true).fadeOut(400);
                                auto = setInterval(function() {
                                    $(".bannerShow .next").trigger("click");

                                }, 4000);
                            })
                            //下一张点击切换图片
                        $('.bannerShow .next').click(function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            if (current === num) {
                                $('.bannerShow .bd ul li').eq(0).fadeIn(400).siblings().fadeOut(400);
                                $(".bannerShow .hd ul li").eq(0).addClass("on").siblings().removeClass();
                                current = 1;
                            } else {
                                $('.bannerShow .bd ul li').eq(current).fadeIn(400).siblings().fadeOut(400);
                                $(".bannerShow .hd ul li").eq(current).addClass("on").siblings().removeClass();
                                current++;
                            }
                        });
                        // 上一张点击切换图片
                        $('.bannerShow .prev').click(function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            if (current === 1) {
                                $('.bannerShow .bd ul li').eq(num - 1).fadeIn(400).siblings().fadeOut(400);
                                $(".bannerShow .hd ul li").eq(num - 1).addClass("on").siblings().removeClass();
                                current = num;
                            } else {
                                $('.bannerShow .bd ul li').eq(current - 2).fadeIn(400).siblings().fadeOut(400);
                                $(".bannerShow .hd ul li").eq(current - 2).addClass("on").siblings().removeClass();
                                current--;
                            }
                        });
                        // 小圆点导航按钮点击切换图片
                        $(".bannerShow .hd ul li").click(function() {
                            current = $(this).index() + 1;
                            $(this).addClass("on").siblings().removeClass();
                            $('.bannerShow .bd ul li').eq(current - 1).fadeIn(300).siblings().fadeOut(600);
                        });
                    }
                }
                /*区块*/
                if (secName === 'appSection') {
                    $('.appSection').draggable({
                        handle: '.dragBtn',
                        axis: "y"
                    });
                }
                /*组件对象上的属性*/
                $('.dragBtn').on('click', function() {
                    $('#myModalLabel').html($(this).data('type'));
                });
                $('.removeBtn').on('click', function() {
                    $(this).parent().remove();
                });
                $('.saveBtn').on('click', function() {
                    $(this).siblings('.whiteMask,.dragBtn,.removeBtn').remove();
                    $(this).remove();
                })
            });
        };

        /*实现数据方法函数*/
        function appModel() {

            //首页导航条
            appView('appHeader', 'header', 
                {
                    "Category":
                    [
                        {"node_name":"精选"},
                        {"node_name":"电视剧"},
                        {"node_name":"电影"},
                        {"node_name":"少儿"},
                        {"node_name":"娱乐"},
                        {"node_name":"音频"},
                        {"node_name":"视频"},
                        {"node_name":"广播"},
                        {"node_name":"直播"},
                        {"node_name":"综合"}
                    ]
                }
            );

            //轮播图
            appView('appSlide','slide',
                {
                    "Library_rec":
                    [
                        {"title":"战马","thumb_default":"static/admin/apps/pcShow/img/banner-01.png","thumb_web_h":"static/admin/apps/pcShow/img/banner-01.png","thumb_web_top":"static/admin/apps/pcShow/img/thumb-01.png"},
                        {"title":"简爱","thumb_default":"static/admin/apps/pcShow/img/banner-02.png","thumb_web_h":"static/admin/apps/pcShow/img/banner-02.png","thumb_web_top":"static/admin/apps/pcShow/img/thumb-02.png"},
                        {"title":"傲慢与偏见","thumb_default":"static/admin/apps/pcShow/img/banner-03.png","thumb_web_h":"static/admin/apps/pcShow/img/banner-03.png","thumb_web_top":"static/admin/apps/pcShow/img/thumb-03.png"},
                        {"title":"奈特凯利","thumb_default":"static/admin/apps/pcShow/img/banner-04.png","thumb_web_h":"static/admin/apps/pcShow/img/banner-04.png","thumb_web_top":"static/admin/apps/pcShow/img/thumb-04.png"}
                    ]
                }
            );

            //今日热门
            appView('appToday_hot','today_hot',
                {
                    "word":
                    [
                        {"content":"今日热门"}
                    ],
                    "contL":
                    [
                        {"library_category_id":63,"title":"“天山云TV” 3D+VR专区全新上线 开启广电新时代"},
                        {"library_category_id":63,"title":"“天山云TV” 3D+VR专区全新上线 开启广电新时代"},
                        {"library_category_id":63,"title":"“天山云TV” 3D+VR专区全新上线 开启广电新时代"},
                        {"library_category_id":63,"title":"“天山云TV” 3D+VR专区全新上线 开启广电新时代"},
                        {"library_category_id":63,"title":"“天山云TV” 3D+VR专区全新上线 开启广电新时代"},
                        {"library_category_id":63,"title":"“天山云TV” 3D+VR专区全新上线 开启广电新时代"},
                        {"library_category_id":63,"title":"“天山云TV” 3D+VR专区全新上线 开启广电新时代"},
                        {"library_category_id":63,"title":"“天山云TV” 3D+VR专区全新上线 开启广电新时代"}
                    ],
                    "contR":
                    [
                        {"title":"女汉子真爱公式","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"},
                        {"title":"女汉子真爱公式","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"},
                        {"title":"女汉子真爱公式","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"},
                        {"title":"女汉子真爱公式","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"},
                        {"title":"女汉子真爱公式","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"},
                        {"title":"女汉子真爱公式","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"},
                        {"title":"女汉子真爱公式","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"},
                        {"title":"女汉子真爱公式","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"},
                        {"title":"女汉子真爱公式","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"},
                        {"title":"女汉子真爱公式","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"}
                    ]
                }
            );

            //区块——综艺节目
            appView('appSection_variety','section_variety',
                {
                    "Title":
                    [
                        {"content":"综艺"}
                    ],
                    "Category_rec":
                    [
                        {"node_name":"大陆"},
                        {"node_name":"日本"},
                        {"node_name":"韩国"},
                        {"node_name":"香港"},
                        {"node_name":"台湾"}
                    ],
                    "Code":
                    [
                        {"content":"<a href='javascript:void(0);'>更多</a>"}
                    ],
                    "Library_rec":
                    [
                        {"title":"我们的法则","short_title":"李亚鹏黄子韬互吐槽唱功不行","tags":"真人秀，挑战","thumb_web_w":"static/data/source_video/20160823/1471937144944074.jpeg"}
                    ],
                    "Library":
                    [
                        {"title":"最强女团","short_title":"明道是爱STAR晓琳","tags":"选秀","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"},
                        {"title":"最强女团","short_title":"明道是爱STAR晓琳","tags":"选秀","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"},
                        {"title":"最强女团","short_title":"明道是爱STAR晓琳","tags":"选秀","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"},
                        {"title":"最强女团","short_title":"明道是爱STAR晓琳","tags":"选秀","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"},
                        {"title":"最强女团","short_title":"明道是爱STAR晓琳","tags":"选秀","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"},
                        {"title":"最强女团","short_title":"明道是爱STAR晓琳","tags":"选秀","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"},
                        {"title":"最强女团","short_title":"明道是爱STAR晓琳","tags":"选秀","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"},
                        {"title":"最强女团","short_title":"明道是爱STAR晓琳","tags":"选秀","thumb_web_w":"static/data/source_video/20160901/1472700349474065.jpg"}
                    ]
                }
            );

            //内容专题
            appView('appSection_special','section_special',
                {
                    "leftUrl":
                    [
                        {"content":"static/data/image/20161013/1449226676208.jpg"}
                    ],
                    "rightUrl":
                    [
                        {"content":"static/data/image/20161013/1438224262389.jpg"}
                    ]
                }
            );

            //底部导航条
            appView('appFooter_nav','footer_nav',
                {
                    "Category":
                    [
                        {"node_name":"直播"},
                        {"node_name":"院线"},
                        {"node_name":"特色"},
                        {"node_name":"电影"},
                        {"node_name":"电视剧"},
                        {"node_name":"专题"},
                        {"node_name":"综艺"},
                        {"node_name":"体育"},
                        {"node_name":"新闻"},
                        {"node_name":"纪实"},
                        {"node_name":"动漫"},
                        {"node_name":"娱乐"}
                    ],
                    "Code_Recommend":
                    [
                        {"content":"<a href='javascript:;'>客户端下载</a><a href='javascript:;'>天山云网盘</a><a href='javascript:;'>天山云之家</a><a href='javascript:;'>企业门户</a>"}
                    ],
                    "Code_WeChat":
                    [
                        {"content":'<div class="wexin_box"><img src="http://by.tsytv.com.cn/img/tsytv/images/tsy-anzuo.png" alt=""/><h4>天山云TV—Android</h4><p>下载天山云客户端 时刻享受精彩</p></div><div class="wexin_box"><img src="http://by.tsytv.com.cn/img/tsytv/images/tsy-anzuo.png" alt=""/><h4>天山云TV—Android</h4><p>下载天山云客户端 时刻享受精彩</p></div><div class="wexin_box"><img src="http://by.tsytv.com.cn/img/tsytv/images/tsy-anzuo.png" alt=""/><h4>天山云TV—Android</h4><p>下载天山云客户端 时刻享受精彩</p></div><div class="wexin_box"><img src="http://by.tsytv.com.cn/img/tsytv/images/tsy-anzuo.png" alt=""/><h4>天山云TV—Android</h4><p>下载天山云客户端 时刻享受精彩</p></div><div class="wexin_box"><img src="http://by.tsytv.com.cn/img/tsytv/images/tsy-anzuo.png" alt=""/><h4>天山云TV—Android</h4><p>下载天山云客户端 时刻享受精彩</p></div><div class="wexin_box"><img src="http://by.tsytv.com.cn/img/tsytv/images/tsy-anzuo.png" alt=""/><h4>天山云TV—Android</h4><p>下载天山云客户端 时刻享受精彩</p></div>'}
                    ],
                    "Code_Friend":
                    [
                        {"content":"<a href='javascript:;'>天山云</a><a href='javascript:;'>新疆医科大二附院</a><a href='javascript:;'>新疆日报网</a><a href='javascript:;'>红山网</a><a href='javascript:;'>乌鲁木齐消费晨报</a><a href='javascript:;'>乐视网</a><a href='javascript:;'>爱奇艺</a><a href='javascript:;'>优酷网</a><a href='javascript:;'>360影视</a><a href='javascript:;'>天猫</a><a href='javascript:;'>PPS</a>"}
                    ]
                }
            );

            //底部
            appView('appFooter', 'footer');
            //最近搜索
            appView('appUi_searchbox', 'ui_searchbox');
        }

        appMain()

    })()

})