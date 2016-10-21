define(function(require,exports,module){
(function($,eub){

    var editor = eub.editor ? eub.editor :eub.register('eub.editor');

    editor.isupvoices = true;
    /**
     * 音频上传
     * @memberOf eub
     * @namespace eub.editor.upvoices
     * @example
     *      1, eub.editor.upvoices();
     */
    editor.upvoices = function(){
        $('.longsf').hide();
        $('#uploadVoice').fileupload({
            url:'/admin/upload.php',
            dataType: 'json',
            formData: {act:'upload', type: 'voice',category:'weixin'},
            send: function (e, data) {
                if(data.files[0].size > 31457280){
                    alert("音频不能大于30M");
                    return false;
                }
                $('.longsfds').html('上传音频中');
                $('.longsf').show();
            },
            done: function (e, data) {
                if(data.result.error !=1){
                    $('.longsf').hide();
                    var dates = new Date();
                    var $list = $('<li class="media_item"></li>'),
                        html = '<div class="media_info">'+
                                    '<label class="media_name frm_radio_label" for="checkbox'+dates.getTime()+'" data-id="'+data.result.data.id+'">'+
                                    '    <i class="icon_radio"></i>'+
                                    '    <input name="media" type="radio" class="frm_radio" value="207827452">'+data.result.data.title+
                                    '</label>'+
                                    '<span class="media_size">'+data.result.data.size+'</span>'+
                                    '<span class="media_time">'+data.result.data.ctime+'</span>'+
                                '</div>'+
                                '<div data-id="'+data.result.data.id+'" data-type="3" class="media_content">'+
                                    '<div class="appmsgSendedItem simple_audiomsg" data-aid="" data-id="'+data.result.data.id+'" data-source="file">'+
                                        '<div class="adiu">'+
                                        '    <audio src="'+data.result.data.src+'" loop="loop"></audio>'+
                                        '</div>'+
                                        '<a class="title_wrp" href="javascript:;" title="点击播放">'+
                                        '    <span class="icon icon_lh" src=""></span>'+
                                        '    <span class="title">[语音'+parseInt(data.result.data.duration)+'"]</span>'+
                                        '</a>'+
                                        '<p class="desc">'+parseInt(data.result.data.duration)+'"</p>'+
                                    '</div>'+
                                '</div>';

                    $list.html(html);
                    $('.js_media_list').prepend($list);
                }
            }
        });
    }

     /**
     * 音频
     * @memberOf eub
     * @namespace eub.editor.audio
     * @param  {object} obj 传入的值
     * @example
     *      1, obj = {
     *           data:data,//后台传过来的值
     *           dataTab:tab,//显示那个div 其他影藏
     *           dataTooltip:tooltip, //判断点击的是那个窗口
     *           dataInd:ind //索引
     *      };
     *      
     *      2, eub.editor.audio();
     */
    editor.voice = function(obj){

        var datahtml = obj.data.msg;

        //editor.datatype = obj.istype;

        eub.popup.popuEditorHtml({
            "dialogClass":"appmsg_dialog_wrp",
            "name":"选择语音",
            "close":"关闭",
            "appengHtml":datahtml
        },function(){

            eub.editor.jqdom = null;
            eub.editor[obj.isid] = undefined;
            eub.editor[obj.istypes] = 'text';
        })
        
        eub.tools.audioPlay('.js_media_list','.simple_audiomsg');
        
        eub.tools.clickPaging('js_media_list',obj.istype,CONFIG.MASS.EDITOR_URL.CHOICE+'act=get_voice_list&first=&group=&page=');

        editor.tab('.appmsg_dialog_wrp','.media_item label').confirmBtn('.js_btn',obj.dataTab,obj.dataInd,obj.dataTooltip,obj.objsid,obj.objstype,obj.objdomg);
        if(obj.isdomgs){
            editor.upvoices();
        }else{
            $('.in_dialog').hide();
        }   

    }

})(jQuery,eub);
});
