define(function(require,exports,module){
(function($,eub){

    var editor = eub.editor ? eub.editor :eub.register('eub.editor');

    editor.isupimages = true;
    /**
     * 图片上传
     * @memberOf eub
     * @namespace eub.editor.upimages
     * @example
     *      1, eub.editor.upimages();
     */
    editor.upimages = function(){
        $('.longsf').hide();
         $('#uploadImg').fileupload({
            url:'/admin/upload.php',
            dataType: 'json',
            formData: {act:'upload', type: 'image',category:'weixin'},
            send: function (e, data) {
                if(data.files[0].size > 5242880){
                    alert("图片大于5M");
                    return false;
                }
                $('.longsfds').html('上传图片中');
                $('.longsf').show();
            },
            done: function (e, data) {
                if(data.result.error !=1){
                    $('.longsf').hide();
                    var $list = $('<li class="img_item js_imageitem"></li>'),
                        html = '<label class="frm_checkbox_label img_item_bd">'+
                                    '<img src="'+data.result.data.src+'" alt="'+data.result.data.title+'" class="pic">'+
                                    '<span class="lbl_content">'+data.result.data.title+'</span> '+
                                    '<div class="selected_mask">'+
                                        '<div class="selected_mask_inner"></div>'+
                                        '<div class="selected_mask_icon"></div>'+
                                    '</div>'+
                                '</label>';
                        
                        $list.attr('data-url',data.result.data.src);
                        $list.attr('data-id',data.result.data.id);
                        $list.html(html);
                        $('.img_list').prepend($list);
                        $('.img_list li').eq(9).remove();
                }
            }
        });
    }
    /**
     * 图片
     * @memberOf eub
     * @namespace eub.editor.image
     * @param  {object} obj 传入的值
     * @example
     *      1, obj = {
     *           data:data,//后台传过来的值
     *           dataTab:tab,//显示那个div 其他影藏
     *           dataTooltip:tooltip, //判断点击的是那个窗口
     *           dataInd:ind //索引
     *      };
     *      
     *      2, eub.editor.image();
     */
    editor.image = function(obj){
        var datahtml = obj.data.msg;

        //editor.datatype = obj.istype;

        eub.popup.popuEditorHtml({
            "dialogClass":"img_dialog_wrp",
            "name":CONFIG.MASS.EDITOR.CHOICE+CONFIG.MASS.EDITOR.IMAGES,
            "close":"关闭",
            "appengHtml":datahtml
        },function(){
            eub.editor.jqdom = null;
            eub.editor[obj.isid] = undefined;
            eub.editor[obj.istypes] = 'text';
        });
        
        eub.tools.clickPaging('img_list',obj.istype,CONFIG.MASS.EDITOR_URL.CHOICE+'act=get_image_list&first=&group=&page=');

        editor.tab('.img_list','li').confirmBtn('.js_btn',obj.dataTab,obj.dataInd,obj.dataTooltip,obj.objsid,obj.objstype,obj.objdomg);
        if(obj.isdomgs){
            editor.upimages();
        }else{
            $('.in_dialog >div').hide();
        }
        
    }


})(jQuery,eub);
});
