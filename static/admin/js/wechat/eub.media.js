define(function(require,exports,module){
(function($,eub){
     /**
     * 素材管理
     * @memberOf eub
     * @namespace eub.media
     */
    var media = eub.register('eub.media');


    /**
     * 删除弹窗内容的html
     * @memberOf eub
     * @namespace eub.media.removePoputHtml
     * @example
     *      1, eub.media.removePoputHtml();
     */
    media.removePoputHtml = function(){

        var html = '<div class="popover_edit">确定删除此素材？</div>';

        return html;
    }

    /**
     * 弹窗
     * @memberOf eub
     * @namespace eub.media.removeDom
     * @param  {string} dom 
     * @example
     *      1, eub.multi.removeDom();
     */
    media.mediaPoput = function(dom,htmlCallback,callback){

        $(dom).on('click',function(evt){

            evt.stopPropagation();//阻止事件冒泡

            var slef = $(this),
                top = slef.parent().offset().top + slef.parent().height()+15,
                left = slef.parent().offset().left - slef.parent().width()+15,

                dataId = slef.parent().attr('data-id'),

                popupData = {
                    "domClass":"mediaj",
                    "popover":{
                        "top":top,
                        "left":left
                    }
                },

                name = slef.parents('.sckuang').find('.line-name').html() ? slef.parents('.sckuang').find('.line-name').html() : false;

                html = ($.isFunction(htmlCallback) && name) ? htmlCallback(name) : htmlCallback();

                console.log()

            if($.isFunction(callback)){

                eub.popup.popuMediaHtml(popupData,html,function(){
                    callback(dataId,slef)
                })
                
            }
                
        })

    }

    
})(jQuery,eub);

});