
define(function (require, exports, module) {
(function($,eub){
     /**
     * 弹窗命名空间
     * @memberOf eub
     * @namespace eub.popup
     */
    var popup = eub.register('eub.popup');

    /**
     * 用于群发弹窗
     * @memberOf eub
     * @namespace eub.popup.popuEditorHtml
     * @param  {object} obj 传入弹窗名字
     * @param  {string} appengHtml 传入的内容 由后台拼接字符串
     * @param  {function} callback 关闭按钮回调函数
     * @example
     *      1，obj = {
     *             "dialogClass":"img_dialog_wrp",
     *             "name":"选择图片",
     *             "close":"关闭",
     *             "appengHtml":"<div></div>"
     *         }
     *         
     *      2, eub.popup.popuEditorHtml(obj,callback);
     */
     popup.popuEditorHtml = function(obj,callback,determineCallback){

        var $dialog_wrp = $('<div class="dialog_wrp"></div>');

        $dialog_wrp.html(
            '<div class="bodyblock"></div>'+

            '<div class="dialog">'+

                '<div class="dialog_hd">'+
                    '<h3>'+ (obj.name ? obj.name : "文本域")+'</h3>'+
                    '<a href="javascript:;" class="icon16_opr closed pop_closed">'+ (obj.close ? obj.close: '关闭')+'</a>'+
                '</div>'+

                '<div class="dialog_bd">'+ (obj.appengHtml ? obj.appengHtml : "内容错误") +'</div>'+

                '<div class="dialog_ft">'+

                    '<span class="btn green disabled">'+
                        '<button type="button" class="js_btn" data-index="0">确定</button>'+
                    '</span>'+

                    '<span class="btn red">'+
                        '<button type="button" class="js_btn" data-index="1">取消</button>'+
                    '</span>'+

                '</div>'+

            '</div>' 
        );

        var $dialog = $dialog_wrp.find('.dialog'),
            $jsbtn = $dialog_wrp.find('.disabled'),
            $closed = $dialog_wrp.find('.pop_closed'),
            $red = $dialog_wrp.find('.dialog_ft .red');

        $dialog_wrp.addClass(obj.dialogClass);

        $dialog_wrp.css({
            "width":"840px",
            "z-index":9999
        });

        $dialog.css({
            "marginTop":"-291px",
            "marginLeft":"-50%",
            "width":"100%",
            "position":"relative",
            "z-index":"2333"
        });



        $('body').append($dialog_wrp);

        $closed.on('click',function(){

            if($.isFunction(callback)){
                callback();
            }

            $dialog_wrp.remove();
        })
        $red.on('click',function(){
            $dialog_wrp.remove();
        })
        $jsbtn.on('click',function(){
            if($.isFunction(determineCallback)){
                determineCallback();
            }
        })
        // $closed.on('click',function(){

        //     _self.jqdom = null;
        //     _self.dataid = undefined;
        //     _self.datatype = constant.TEXT;

        //     $('.tab_panel .tab_content').eq(0).show().siblings().hide();

        //     $dialog_wrp.remove();
        // });

    }

    /**
     * 用于素材管理
     * @memberOf eub
     * @namespace eub.popup.popuMediaHtml
     * @param  {object} obj 
     * @param  {string} appengHtml 传入的内容 
     * @param  {function} primaryCallback 确定回调函数 
     * @param  {function} defaultCallback 取消回调函数 
     * @example
     *      1，obj = {
     *             "domClass":"img_dialog_wrp",
     *             "popover":{
     *                 "top":0,
     *                 "left":0,
     *             }
     *         }
     *         
     *      2, eub.popup.popuMediaHtml(obj,appengHtml);
     */
     popup.popuMediaHtml = function(obj,appengHtml,primaryCallback,defaultCallback){

        $('.pos_center').remove();

        var $div = $('<div class="popover pos_center"></div>');

        $div.html(
            '<div class="popover_inner">'+

                '<div class="popover_content jsPopOverContent">'+ appengHtml +'</div>'+

                '<div class="popover_bar">'+

                    '<a href="javascript:;" class="btn btn_primary jsPopoverBt">确定</a>'+
                    '&nbsp;'+
                    '<a href="javascript:;" class="btn btn_default jsPopoverBt">取消</a>'+

                '</div>'+

        '</div>'+

        '<i class="popover_arrow popover_arrow_out"></i>'+

        '<i class="popover_arrow popover_arrow_in"></i>'

        );

        obj.popover.top ? $div.css(obj.popover) : false;
        obj.domClass ? $div.addClass(obj.domClass) : false;

        $('body').append($div);

        var $btnPrimary = $div.find('.btn_primary'),
            $btnDefault = $div.find('.btn_default');

        $btnPrimary.on('click',function(){
            
            if($.isFunction(primaryCallback)){

                primaryCallback();
            }
        })

        $btnDefault.on('click',function(){

            if($.isFunction(defaultCallback)){

                defaultCallback();
            };

            $div.remove();
        })
        
     }

     /**
     * 用于自定义菜单
     * @memberOf eub
     * @namespace eub.popup.popuCutstomHtml
     * @param  {object} obj 
     * @param  {string} appengHtml 传入的内容 
     * @param  {function} primaryCallback 确定回调函数 
     * @param  {function} defaultCallback 取消回调函数 
     * @example
     *      
     *      1, eub.popup.popuCutstomHtml(obj,appengHtml);
     */
    popup.popuCutstomHtml = function(){

    }
})(jQuery,eub);
})