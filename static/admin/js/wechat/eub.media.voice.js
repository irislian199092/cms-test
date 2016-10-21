(function($,eub){
     /**
     * 素材管理
     * @memberOf eub
     */
    var media = eub.media;

     /**
     * 删除元素
     * @memberOf eub
     * @namespace eub.media.audioRemoveajax
     * @example
     *      1, eub.media.audioRemoveajax();
     */
     media.audioRemoveajax = function(dataId,slef){
        
        var data = {
                id:dataId
            };

       //eub.tools.ajax('post',url,data,function(){
            slef.parents('.sckuang').remove();
            $('.mediaj').remove();
      //})
     }


    media.audioInit = function(){
        
        eub.media.mediaPoput('#tab_1_3 .bin',eub.media.removePoputHtml,eub.media.audioRemoveajax);

        eub.tools.audioPlay('.icon_audio_msg');
    }()

})(jQuery,eub);