(function($,eub){
    /**
     * 素材管理
     * @memberOf eub
     */
    var media = eub.media;

    /**
     * 多图文修改按钮
     * @memberOf eub
     * @namespace eub.media.messagefun
     * @example
     *      1, eub.media.messagefun();
     */
    media.messagefun = function(){

        $('#tab_1_1 .file').on('click',function(){
            var nameId = $(this).attr('data-id'),
                data = {
                    id: nameId
                };

            // eub.tools.ajax('post',MEDIA_REMOV_URL,data,function(){
                //是刷新页面还是后台传我的值
            // })
        })

    }();

    
})(jQuery,eub);