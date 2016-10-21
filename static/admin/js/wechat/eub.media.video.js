(function($,eub){

     /**
     * 素材管理
     * @memberOf eub
     */
    var media = eub.media;

     /**
     * 删除元素
     * @memberOf eub
     * @namespace eub.media.videoRemoveajax
     * @example
     *      1, eub.media.videoRemoveajax();
     */
     media.videoRemoveajax = function(dataId,slef){
        
        var data = {
                id:dataId
            };

       //eub.tools.ajax('post',url,data,function(){
            slef.parents('.sckuang').remove();
            $('.mediaj').remove();
      //})
     }


    media.videoInit = function(){

        eub.media.mediaPoput('#tab_1_4 .bin',eub.media.removePoputHtml,eub.media.videoRemoveajax);

        eub.tools.videoPlay();
    }()

    
})(jQuery,eub);