define(function(require,exports,module){
(function($,eub){
    var editor = eub.editor ? eub.editor :eub.register('eub.editor');

    /**
     * 文字
     * @memberOf eub
     * @namespace eub.editor.texts
     * @param  {number} index 索引
     * @example
     * 
     *      1, eub.editor.texts();
     */
    editor.text = function(obj){

        eub.editor.jqdom = null;
        eub.editor[obj.isid] = undefined;
        eub.editor[obj.objstype] = 'text';
        eub.editor.indexDom = 0;

        $("[name='" + obj.isid + "']").val(' ');
        $("[name='" + obj.objstype + "']").val(eub.editor[obj.objstype]);
        //更换显示文本编辑框
        $(obj.objdomg).find('.tab_content').eq(obj.dataInd).show().siblings().hide();
    }
    
})(jQuery,eub);
});