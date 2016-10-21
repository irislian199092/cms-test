(function($,eub){

     /**
     * 素材管理
     * @memberOf eub
     */
    var media = eub.media;

    /**
     * 图片修改内容的html
     * @memberOf eub
     * @namespace eub.media.imageEditorHtml
     * @param  {string} dom 
     * @param  {string} isbtn 
     * @example
     *      1, eub.media.imageEditorHtml(dom,isbtn);
     */

     media.imageEditorHtml = function(name){

        var html =  '<div class="popover_edit">'+

                        '<label for="" class="frm_label">编辑名称</label>'+

                        '<div class="frm_controls">'+

                           '<span class="frm_input_box">'+
                                '<input type="text" class="frm_input js_name" value="'+name+'" data-id="">'+
                            '</span>'+

                            '<p class="frm_tips"></p>'+

                            '<p class="frm_msg fail">'+
                                '<span class="frm_msg_content">填错了！！！！</span>'+
                            '</p>'+
                            
                        '</div>'+

                    '</div>';

        return html;

    }

     /**
     * 图片移动分组内容的html
     * @memberOf eub
     * @namespace eub.media.mobilePacketHtm
     * @example
     *      1, eub.media.mobilePacketHtm();
     */
    media.mobilePacketHtm = function(){

        var html = '',
            appenHtml = '';

            $('.ver-inline-menu li').each(function(i){
                if(i > 0){
                    html +=  '<label class="frm_radio_label"><input type="radio" name="media_input" class="frm_radio" data-id="'+$(this).attr('data-id')+'" data-label="'+$(this).find('strong').html()+'" id="checkbox22"><i class="icon_radio"></i><span class="lbl_content">'+$(this).find('strong').html()+'</span></label>'
                }
            })
            appenHtml = '<div class="frm_control group_select">'+html+'</div>';

            
        return appenHtml;
    }

    /**
     * 图片移动分组的内容回调函数
     * @memberOf eub
     * @namespace eub.media.mobilePacketajax
     * @example
     *      1, eub.media.mobilePacketajax();
     */
     media.mobilePacketajax = function(dataId,slef){
        
        if($('.mediaj input').is(':checked')){
            var inds,mobileId,
                data = null;

            $('.mediaj input').each(function(){

                if($(this).is(':checked')){
                        
                    inds = $(this).parent().index()+1;
                    
                    mobileId = $(this).attr('data-id');

                    return false;
                }

            })

            data = {
                id:dataId,
                mobId:mobileId
            }
           
           //eub.tools.ajax('post',url,data,function(){
                
                var numhtml =parseInt($('.ver-inline-menu li').eq(inds).find('span').html().split('(')[1]) + 1;
                
                $('.ver-inline-menu li').eq(inds).find('span').html('('+numhtml+')');

                slef.parents('.sucai3').remove();

                $('.mediaj').remove();
          //})
          
        }else{
            $('.mediaj').remove();
        }
     }

     /**
     * 修改名字回调函数
     * @memberOf eub
     * @namespace eub.media.mobilePacketHtm
     * @example
     *      1, eub.media.mobilePacketHtm();
     */
     media.imageNameajax = function(dataId,slef){
        var val = $('.mediaj .js_name').val(),
                data = {
                    id:dataId,
                    val:val
                };

           //eub.tools.ajax('post',url,data,function(){
                slef.parents('.sckuang').find('.line-name').html(val);
                $('.mediaj').remove();
          //})
     }


     /**
     * 删除元素
     * @memberOf eub
     * @namespace eub.media.imageRemoveajax
     * @example
     *      1, eub.media.imageRemoveajax();
     */
     media.imageRemoveajax = function(dataId,slef){
        var data = {
                id:dataId
            };

       //eub.tools.ajax('post',url,data,function(){
            slef.parents('.sucai3').remove();
            $('.mediaj').remove();
      //})
     }


    media.imageInit = function(){

        eub.media.mediaPoput('#tab_1_2 .retweet',eub.media.mobilePacketHtm,eub.media.mobilePacketajax);

        eub.media.mediaPoput('#tab_1_2 .pencil',eub.media.imageEditorHtml,eub.media.imageNameajax);

        eub.media.mediaPoput('#tab_1_2 .bin',eub.media.removePoputHtml,eub.media.imageRemoveajax);

    }()



})(jQuery,eub);