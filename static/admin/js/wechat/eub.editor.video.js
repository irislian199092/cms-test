define(function(require,exports,module){
(function($,eub){

     var editor = eub.editor ? eub.editor :eub.register('eub.editor');

    /**
     * 音频
     * @memberOf eub
     * @namespace eub.multi.img
     * @param  {object} obj 传入的值
     * @example
     *      1, obj = {
     *           data:data,//后台传过来的值
     *           dataTab:tab,//显示那个div 其他影藏
     *           dataTooltip:tooltip, //判断点击的是那个窗口
     *           dataInd:ind //索引
     *      };
     *      
     *      2, eub.multi.img();
     */
    editor.video = function(obj){

        var datahtml = obj.data.msg;

        //editor.datatype = obj.istype;

        eub.popup.popuEditorHtml({
            "dialogClass":"appmsg_dialog_wrp",
            "name":"选择视频",
            "close":"关闭",
            "appengHtml":datahtml
        },function(){

            eub.editor.jqdom = null;
            eub.editor[obj.isid] = undefined;
            eub.editor[obj.istypes] = 'text';
        })
        eub.tools.clickPaging('media_dialog',obj.istype,CONFIG.MASS.EDITOR_URL.CHOICE+'act=get_video_list&first=&group=&page=');
        eub.editor.tab('#js_videomsg_list','.richvideo').confirmBtn('.js_btn',obj.dataTab,obj.dataInd,obj.dataTooltip,obj.objsid,obj.objstype,obj.objdomg);

        eub.tools.videoPlay();
    }
})(jQuery,eub);
})