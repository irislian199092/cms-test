
define(function(require,exports,module){
  //console.log(2);
    // require('./../wechat/eub.base');
    // require('./../wechat/eub.config');
    // require('./../wechat/eub.tools');
    // require('./../wechat/eub.popup');
    seajs.use(['eub.base','eub.config','eub.tools','eub.popup','eub.editor.text','eub.editor.image','eub.editor.voice','eub.editor.video','eub.editor.news'],function(){
      //console.log(3);
    /**
     * 群发
     * @memberOf eub
     * @namespace eub.editor
     */
    var editor = eub.register('eub.editor');
    // require('./../wechat/eub.editor.text');
    // require('./../wechat/eub.editor.image');
    // require('./../wechat/eub.editor.voice');
    // require('./../wechat/eub.editor.video');
    // require('./../wechat/eub.editor.news');
     
    /**
     * 删除
     * @memberOf eub
     * @namespace eub.editor.remoMultiContent
     * @param  {string} datatab 传入的弹窗class或id名称
     * @example
     *      1, eub.editor.remoMultiContent();
     */
    editor.remoMultiContent = function(datatab,domid,domtype){
        $(datatab).on('click','.link_dele',function(){
             var isdomid = domid ? domid : 'dataid',
                 isdomtype = domtype ? domtype : 'datatype';

            eub.editor.jqdom = null;
            eub.editor[isdomid] = undefined;
            eub.editor[isdomtype] = 'text';
            eub.editor.indexDom = 0;
            
            $("[name='" + isdomid + "']").val(eub.editor[isdomid]);
            $("[name='" + isdomtype + "']").val(eub.editor[isdomtype])

            $('.tab_panel .tab_content').eq(0).show().siblings().hide();

            $(this).parent().remove();
        });
    }


    /**
     * 确定点击
     * @memberOf eub
     * @namespace eub.editor.confirmBtn
     * @return {object} eub.editor 
     * @param  {string} documents 点击的class或id
     * @param  {string} datatab 选中的插入那个class或id
     * @param  {number} index 索引用于显示那个
     * @param  {string} text 判断是插入那块
     * @param  {function} callback 回调函数
     * @example
     *           
     *      1, eub.editor.confirmBtn();
     */
    editor.confirmBtn = function(documents,datatab,index,text,domid,domtype,domsf,callback){

        $(documents).on('click',function(){
            //选中了走这里
    
            if($(this).parent('span').hasClass('btn_primary') && eub.editor.jqdom && parseInt($(this).attr('data-index')) == 0){

                var data = null,
                    id = eub.editor.jqdom.attr('data-id'),
                    imgurl = eub.editor.jqdom.attr('data-url')?eub.editor.jqdom.attr('data-url'):eub.editor.jqdom.find('.pic').attr('src'),
                    fileid = eub.editor.jqdom.attr('data-fileid'),
                    htmls = '',

                    audios = eub.editor.jqdom.parent().next().html(),
                    videos = eub.editor.jqdom.html(),
                    Appmsgs = eub.editor.jqdom.find('.appmsg_content').html();

                eub.editor[domid] = id;
                
                if($.isFunction(callback)){
                    callback();
                };
                switch (text){

                    case CONFIG.MASS.EDITOR.IMAGES://图片
                    
                        htmls = '<div id="msgSender_media_1_2">'+
                                    '<div class="appmsgSendedItem simple_img" data-id="'+id+'">'+
                                        '<a class="title_wrp" href="'+imgurl+'" target="_blank">'+
                                            '<img class="icon" src="'+imgurl+'">'+
                                        '</a>'+
                                    '</div>'+
                                    '<a href="javascript:;" class="link_dele">删除</a>'+
                                '</div>';
                            editor[domtype] = 'image';
                        break;

                    case CONFIG.MASS.EDITOR.VOICE://音频
                        htmls = '<div id="msgSender_media_1_3">'+ 
                                    audios + 
                                    '<a href="javascript:;" class="link_dele">删除</a>'+
                                '</div>';
                            editor[domtype] = 'voice';
                            
                        break;

                    case CONFIG.MASS.EDITOR.VIDEO://视频
                        htmls = '<div id="msgSender_media_1_4">'+
                                    '<div id="none" class="richvideo Js_videomsg" data-id='+ id +'>' + 
                                        videos + 
                                    '</div>'+
                                    '<a href="javascript:;" class="link_dele">删除</a>'+
                                '</div>';
                            editor[domtype] = 'video';

                        break;

                    case CONFIG.MASS.EDITOR.NEWS://多图文
                        htmls = '<div id="msgSender_media_1_5">'+
                                    '<div class="appmsg" data-id="' + id + '" data-fileid="' + fileid + '">' +
                                        Appmsgs + 
                                    '</div>'+
                                    '<a href="javascript:;" class="link_dele">删除</a>'+
                                '</div>';
                            editor[domtype] = 'news'
                        break;
                }
                
                $(domsf).find(datatab).html(htmls);
                
                $(this).closest('.dialog_wrp').remove();
                $('.bodyblock').remove();

                $(domsf).find('.tab_content').eq(index).show().siblings().hide();

                //eub.editor.remoMultiContent(datatab,domid,domtype);

                $("[name='" + domid + "']").val(eub.editor[domid]);
                $("[name='" + domtype + "']").val(eub.editor[domtype]);

                
            }else if(parseInt($(this).attr('data-index')) == 1){//这个没选图片 点击取消 删除弹窗

                // eub.editor.jqdom = null;
                // eub.editor.dataid = undefined;
                // eub.editor.datatype = $('#js_msgSender .tab_navs li').eq(0).attr('data-type');
                // eub.editor.indexDom = 0;

                // $('.tab_panel .tab_content').eq(0).show().siblings().hide();


                $(this).closest('.dialog_wrp').remove();
                $('.bodyblock').remove();
            }
        });

        return this;
    }

    
    /**
     * 通用选择元素
     * @memberOf eub
     * @namespace eub.editor.tab
     * @return {object} eub.editor
     * @param  {string} documents 传入class或id名称
     * @param  {string} documents1 传入class或id名称
     * @example
     * 
     *      1, eub.editor.tab(documents,documents);
     */
    editor.tab = function(documents,documents1){

        $(documents).on('click',documents1,function(){
            
            var itenbd = $(this).find('.img_item_bd');

            eub.editor.jqdom = $(this); //把当前选中存在this当中 方便其他方法调用

            if($(this).hasClass('selected')){

                $(this).removeClass('selected');
                $('.dialog_ft_desc .js_selected').html('0');

                $('.dialog .btn.green').addClass('disabled').removeClass('btn_primary');
            }else{
                
                $('.dialog_ft_desc .js_selected').html('1');
                $('.dialog .btn.green').removeClass('disabled').addClass('btn_primary');

                $(documents+' '+documents1).removeClass('selected');
                $(this).addClass('selected');
            };
            return false;
        });
        return this;
    }
    editor.isclick = true;
     /**
     * 初始化是否有
     * @memberOf eub
     * @namespace eub.editor.tab
     * @return {object} eub.editor
     * @param  {object} obj 传入一个对象 默认选中状态属性
     * @param {string} dom传入id或者class 如果不传的的话 默认为'#js_msgSender'  例如:'#js_msgSender','.js_msgSender'
     * @param {string} id  传入字符串绑定在eub.editor对象的属性上的名字 如果不传的的话 默认为'dataid' 例如：'dataid' ,'paid'
     * @param {string} type 传入字符串绑定在eub.editor对象的属性上的名字 如果不传的的话 默认为'datatype' 例如：'datatype' ,'patype'
     * @example
     *      
     *      1, eub.editor.tab(documents,documents);
     */
    editor.initType = function(dom,id,types,domupload){
        var isid = id ? id : 'dataid',
            istype = types ? types : 'datatype',
            isdom = dom ? dom : '#js_msgSender',
            isinitype = true;
        
        !$("[name='" + isid + "']")[0] ? $(isdom).append('<input type="hidden" name='+isid+'>') : false;
        !$("[name='" + istype + "']")[0] ? $(isdom).append('<input type="hidden" name='+istype+' value="text">'):false;

        //eub.tools.textEditor(isdom,isid);

        // $(isdom).find('.edit_area').on('keyup', function(e){
        //     //console.log($(this).html().find('div'))

        //     $("[name=" + isid + "]").val($(this).html());
        // });
        eub.tools.textEditor(isdom,isid)
        

        var index = 0,
            htmls = '',
            type = $(isdom).attr('data-type'),
            ids = $(isdom).attr('data-content'),
            category = $(isdom).attr('data-category');

        if(type != '' && type){
            if(type == 'text'){
                $(isdom).find('.js_editorArea').html($(isdom).attr('data-content'));
                editor[istype] = 'text';
                
                $("[name='" + isid + "']").val($(isdom).attr('data-content'));
                $("[name='" + istype + "']").val(eub.editor[istype]);
            }else{

                eub.tools.ajax('get',CONFIG.MASS.EDITOR_URL.CHOICE+'act=get_'+type+'&id='+ids,{},function(data){
                    
                    switch (type){
                        case 'image'://图片
                                
                                editor[istype] = 'image';
            					editor[isid] = ids;
                                $(isdom).find('.tab_content').eq(1).find('.inner').html(data.data.html);
                                $(isdom).find('.tab_content').eq(1).show().siblings().hide(); 
                            break;

                        case 'voice'://音频
                           
                                editor[istype] = 'voice';
            					editor[isid] = ids;
                                eub.tools.audioPlay();
                                $(isdom).find('.tab_content').eq(2).find('.inner').html(data.data.html);
                                $(isdom).find('.tab_content').eq(2).show().siblings().hide(); 
                                eub.tools.audioPlay('.js_audioArea','.simple_audiomsg');
                            break;

                        case 'video'://视频
                           
                            editor[istype] = 'video';
            				editor[isid] = ids;
                            $(isdom).find('.tab_content').eq(3).find('.inner').html(data.data.html);
                            $(isdom).find('.tab_content').eq(3).show().siblings().hide(); 
                            break;

                        case 'news'://多图文
            				editor[isid] = [];
                            var Appmsgs = '';
                          
                                editor[istype] = 'news';
                                editor[isid] = ids;
                                $(isdom).find('.tab_content').eq(4).find('.inner').html(data.data.html);
                                $(isdom).find('.tab_content').eq(4).show().siblings().hide(); 
                            break;
                    }
                    $("[name='" + isid + "']").val(eub.editor[isid]);
                    $("[name='" + istype + "']").val(eub.editor[istype]);


                })
            }
        }else{
            eub.editor.jqdom = null;
            eub.editor[isid] = undefined;
            eub.editor[istype] = $(isdom+' .tab_navs li').eq(0).attr('data-type');
            eub.editor.indexDom = 0;
        }
        editor.remoMultiContent('body',isid,istype);

        if(editor.isclick){
            
            $(isdom).find('.tab_navs').on('click','li',function(){
                
                var tooltip = $(this).attr('data-tooltip'),//告诉后台给返回我那个弹窗
                    type = $(this).attr('data-type'),
                    tab = $(this).attr('data-tab'), //下面div 显示那个div 其他影藏
                    data = null,
                    ind = $(this).index(),
                    obj = null,
                    iscategory = $(isdom).attr('data-category') ? '&category='+$(isdom).attr('data-category') : '';
                 
                if(tooltip == CONFIG.MASS.EDITOR.TEXT){
                    obj = {
                        dataInd:ind,
                        objsid:isid,
                        objstype:istype,
                        objdomg:isdom
                    }
                    eub.editor.text(obj);

                }else{

                    data={
                        "tooltip":tooltip
                    };
                    if(isinitype){
                        isinitype = false;
                        eub.tools.ajax('get',CONFIG.MASS.EDITOR_URL.CHOICE+'act=get_'+type+'_list&first=1&category=weixin&group=&page=1',data,function(data){
                            isinitype = true;
                            eub.editor.indexDom = ind;
                            obj = {
                                data:data,
                                dataTab:tab,
                                dataTooltip:tooltip,
                                dataInd:ind,
                                istype:type,
                                objsid:isid,
                                objstype:istype,
                                objdomg:isdom,
                                isdomgs:domupload
                            }

                            tooltip == CONFIG.MASS.EDITOR.IMAGES ? eub.editor.image(obj) : false;
                            tooltip == CONFIG.MASS.EDITOR.VOICE ? eub.editor.voice(obj) : false;
                            tooltip == CONFIG.MASS.EDITOR.VIDEO ? eub.editor.video(obj) : false;
                            tooltip == CONFIG.MASS.EDITOR.NEWS ? eub.editor.news(obj) : false;

                            $('.dialog_hd .pop_closed').on('click',function(){
                                $(this).closest('.dialog_wrp').remove();
                                $('.bodyblock').remove();
                            })

                        });
                    }
                }
            });
        }
      }
    });
    exports.editore = editor;
})
