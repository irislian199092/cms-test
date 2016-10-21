define(function(require,exports,module){
(function($,eub){
     var editor = eub.editor ? eub.editor :eub.register('eub.editor');

     editor.newsTab = function(dom){
		//editor.dataid = [];
        $('.dialog_media_inner').on('click',dom,function(){
            if($(this).hasClass('selected')){
                $('.media_news').find('#'+'appmsg'+$(this).attr('data-id')).remove();
                $(this).removeClass('selected');
            }else{
                var $domDiv = $('<div></div>');
                $domDiv.addClass('tuzh');
                $domDiv.attr('id','appmsg'+$(this).attr('data-id'))
                $domDiv.attr('data-id',$(this).attr('data-id'))
                $domDiv.html($(this).find('.appmsg_content').html())
                $domDiv.append('<a href="javascript:void(0);" class="btn red icn-only remove_icon"><i class="icon-remove icon-white"></i></a>')
                $domDiv.find('.appmsg_thumb_wrp').append('<img class="appmsg_thumbs" src="'+$(this).find('.appmsg_content .appmsg_thumb_wrp img').attr('data-src')+'">');
                $('.media_news').append($domDiv);
                $(this).addClass('selected');
            };
            $( ".media_news" ).sortable({
                axis:"y",
                cursor: "move",
                items :".tuzh",                      
                revert: true,  
                placeholder: 'sortable-box-placeholder round-all',
                forcePlaceholderSize: true,          
                update : function(event, ui){       
                    // editor.dataid = [];
                    // var newsId = $(this).sortable("toArray");
                    // for(var i=0; i<newsId.length;i++){
                    //     editor.dataid.push(newsId[i].split('appmsg')[1])
                    // }   
                }
            })
        })
     }

    editor.yesBtn = function(type,id,dom){
        $('.dialog .disabled').on('click',function(){
            if($('.media_news .tuzh')[0]){
                editor[id] = [];
                $('.media_news .tuzh').each(function(){
                    editor[id].push($(this).attr('data-id'))
                })
                
                var divHtml = '<div id="msgSender_media_1_5">'+
                                        '<div class="appmsg">' +
                                            $('.media_news').html() + 
                                        '</div>'+
                                        '<a href="javascript:;" class="link_dele">删除</a>'+
                                    '</div>'
                $(dom).find('.tab_panel .tab_content').eq(4).find('.inner').html(divHtml);
                $(dom).find('.tab_panel .tab_content').eq(4).show().siblings().hide();

                editor[type] = 'news';

                $("[name='" + id + "']").val(editor[id]);
                $("[name='" + type + "']").val(editor[type]);

                $('.appmsg .remove_icon').remove();
                $('.dialog_wrp').remove();
            }
        })

        $('.media_news').on('click','.icn-only',function(){
            $(this).parent().remove();
            $('.'+$(this).parent().attr('id')).removeClass('selected');
        })
     }

     editor.sousuo = function(){
        $('#msgSearchBtn').on('click',function(){
            var val = $('#msgSearchInput').val();
            eub.tools.ajax('get',CONFIG.MASS.EDITOR_URL.CHOICE+'act=get_news_list&page=1&filter='+val,{},function(data){
				$('.appmsg_list').html(data.msg);
                $('.page_num label').eq(0).html('1');
                $('.page_num label').eq(1).html(data.data.count);
                $('.page_prev').hide();
                $('.page_next').show();
                eub.tools.corresponding('.media_news .tuzh');
            })
        })

        $('.del_btn').on('click',function(){
            eub.tools.ajax('get',CONFIG.MASS.EDITOR_URL.CHOICE+'act=get_news_list&page=1&filter=&group=',{},function(data){
                $('#msgSearchInput').val('')
                $('.appmsg_list').html(data.msg);
                $('.page_num label').eq(0).html('1');
                $('.page_num label').eq(1).html(data.data.count);
                $('.page_prev').hide();
                $('.page_next').show();
                eub.tools.corresponding('.media_news .tuzh');
            })
        })
     }

    /**
     * 多图文
     * @memberOf eub
     * @namespace eub.editor.news
     * @param  {object} obj 传入的值
     * @example
     *      1, obj = {
     *           data:data,//后台传过来的值
     *           dataTab:tab,//显示那个div 其他影藏
     *           dataTooltip:tooltip, //判断点击的是那个窗口
     *           dataInd:ind //索引
     *      };
     *      
     *      2, eub.editor.news();
     */
    editor.news = function(obj){

        var datahtml = obj.data.msg;

        eub.popup.popuEditorHtml({
            "dialogClass":"appmsg_dialog_wrp",
            "name":"选择素材",
            "close":"关闭",
            "appengHtml":datahtml
        },function(){
            eub.editor.jqdom = null;
            eub.editor[obj.objsid] = undefined;
            eub.editor[obj.objstype] = 'text';
        });
        editor.newsTab('.js_appmsg_list .appmsg');
        editor.yesBtn(obj.objstype,obj.objsid,obj.objdomg);
        
        editor.remoMultiContent('.js_appmsgArea')
        
        eub.tools.clickPaging('appmsg_list',obj.istype,CONFIG.MASS.EDITOR_URL.CHOICE+'act=get_news_list&first=&group=&page=');
        
        $('.appmsg_media_dialog').find('input').on('focus',function(){
            
        })
        editor.sousuo();
        //editor.tab('.media_dialog','.appmsg').confirmBtn('.js_btn',obj.dataTab,obj.dataInd,obj.istype,CONFIG.MASS.EDITOR.UPLOAD_URL);
    }

})(jQuery,eub);
})
