
define(function(require,exports,module){
(function($,eub){
     /**
     * 鹿陇戮脽路陆路篓
     * @memberOf eub
     * @namespace eub.tools
     */
    var tools = eub.register('eub.tools');


    /**
     * ajax脜脨露脧路脌脰鹿脌麓脨酶脟毛脟贸
     * @memberOf eub
     * @namespace eub.tools.isCAjax
     */
    tools.isCAjax = true;

    /**
     * ajax脟毛脟贸
     * @memberOf msc.tools
     * @namespace eub.tools.ajax
     * @param {string} type 麓芦碌脻路陆路篓脢脟get 禄貌脮脽 post
     * @param {string} url 脟毛脟贸碌脴脰路
     * @param {object} datas 麓芦露脭脧贸 麓芦脰碌赂酶潞贸脤篓 
     * @param {functions} callback 禄脴碌梅潞炉脢媒
     * @function
     * @example
     *     var datas = {
     *         "data1" : "data1",
     *         "data2" : "data2"
     *     }
     *     eub.tools.ajax("url",datas,function(data){
     *        this is callback;
     *     });
     */
    tools.ajax = function(type,url,datas,callback){
     
        if(tools.isCAjax == false){//路脌脰鹿脕卢脨酶脟毛脟贸
            return;
        }
        var _date = new Date();
            _date = _date.getTime();//脢卤录盲麓脕

        $.ajax({
            type: (type ? type : "get"),
            data: datas,
            dataType: 'json',
            url: url,
            success: function(data){
                if(data.error == 0){
                    if(callback){
                        return callback(data);
                    }
                } else{
                    alert(data.msg);
                }
                tools.isCAjax = true;
            },
            error: function(){
                tools.isCAjax = true;
            }
        });
    }



    /**
     * 碌炉麓掳鹿脴卤脮麓貌驴陋
     * @memberOf msc.tools
     * @namespace eub.tools.popup
     * @param {string} dom 麓芦脠毛脛脟赂枚脭陋脣脴碌脛class禄貌脮脽id
     * @param {boolean} boo true 脢脟麓貌驴陋碌炉麓掳  false鹿脴卤脮碌炉麓掳
     * @param {string} attrname 麓芦脠毛卤锚脟漏脢么脨脭脙没 脢么脨脭脰碌脢脟脛茫脪陋碌炉麓掳碌脛class禄貌脮脽id 
     * @param {boolean} callback 禄脴碌梅潞炉脢媒
     * @function
     * @example
     *     1. eub.tools.popup($('.div'),true);//鲁枚碌炉麓掳
     */
    tools.popup = function(dom,boo,attrname,callback){
        $(dom).on('click',function(){
            var dataPopup = $(this).attr(attrname); //=>.poput

            if($.isFunction(callback)){
                callback();
            };

            boo ? $(dataPopup).show() : $(dataPopup).hide();
        })
    }



    /**
     * 陆芒脦枚URL, 禄帽脠隆碌脴脰路脌赂虏脦脢媒
     * @param  {string} name 脪陋禄帽脠隆碌脛虏脦脢媒脙没, 驴脡脪脭脦陋驴脮脭貌卤铆脢戮陆芒脦枚url脦陋露脭脧贸
     * @param  {string} [url=location.URL]  卤禄陆芒脦枚碌脛url, 脠莽鹿没脦陋驴脮脭貌脢鹿脫脙碌卤脙忙脪鲁脙忙碌脛url
     * @return {string}      碌脙碌陆碌脛脰碌, 禄貌脮脽陆芒脦枚潞贸碌脛露脭脧贸
     *
     * @memberOf eub.tools
     * @function
     * @example
     *     1:
     *         url: index.php?a=1&b=2&c=3
     *         eub.tools.queryUrl("a") => 2
     *         eub.tools.queryUrl("b") => 3
     *         eub.tools.reuqest("xx") => ""
     *         eub.tools.queryUrl() => {a:1,b:2,c:3}
     *     2:
     *         eub.tools.queryUrl("a","?a=1&b=2&c=3") => 1
     *     3:
     *         eub.tools.queryUrl("", "?a=1&b=2&c=3") => {a:1, b:2, c:3}
     */

    tools.queryUrl = function(name, url) {
        url = url ? (url.indexOf("?") > -1 ? url.substr(url.indexOf("?") + 1) : url) : location.search.substr(1);
        var results;
        if (name) {
            results = url.match(new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"));
            results = results === null ? "" : decodeURIComponent(results[2]);
        } else {
            results = {};
            if (url) {
                var params = url.split('&'),
                    qrs2,
                    i = 0,
                    len = params.length;
                for (i = 0; i < len; i++) {
                    qrs2 = params[i].split('=');
                    results[qrs2[0]] = (qrs2[1] === undefined ? '' : decodeURIComponent(qrs2[1]));
                }
            }
        }
        return results;
    }
    /**
     * 浏览器判断
     * @memberOf eub
     * @namespace eub.editor.checkBrowser
     * @return {string} 字符传
     * @example
     *      1, eub.editor.checkBrowser();
     */
    tools.checkBrowser = function(){
        var browserName=navigator.userAgent.toLowerCase();
        var strBrowser = '';
         
            if(/msie/i.test(browserName) && !/opera/.test(browserName)){
                strBrowser = "IE: "+browserName.match(/msie ([\d.]+)/)[1];
                
            }else if(/firefox/i.test(browserName)){
                strBrowser = "Firefox: " + browserName.match(/firefox\/([\d.]+)/)[1];;
                
            }else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)){
                strBrowser = "Chrome: " + browserName.match(/chrome\/([\d.]+)/)[1];
                
            }else if(/opera/i.test(browserName)){
                strBrowser = "Opera: " + browserName.match(/opera.([\d.]+)/)[1];
                
            }else if(/webkit/i.test(browserName) &&!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))){
                strBrowser = "Safari: ";
               
            }else{
                strBrowser = "unKnow,未知浏览器 ";
          
            }

         return strBrowser;
    }

    /**
     * 多图文循环判断右边对应选中
     * @memberOf eub
     * @namespace eub.editor.corresponding
     * @param  {string} dom 传入class或id名称
     * @example
     *      1, eub.editor.corresponding();
     */
    tools.corresponding = function(dom){
       $(dom).each(function(){
            $('.'+$(this).attr('id')).addClass('selected');
       })
    }

    /**
     * 翻页选择确定
     * @memberOf eub
     * @namespace eub.editor.correspondings
     * @param  {string} dom 传入class或id名称
     * @example
     *      1, eub.editor.correspondings();
     */
    tools.correspondings = function(dom){
            
            $(dom).addClass('selected');
    }
    /**
     * ajxa路脰脪鲁
     * @memberOf eub
     * @namespace eub.tools.ajaxPaging
     * @param  {object} obj 麓芦脠毛碌脛脰碌
     * @example
     *      1拢卢obj = {
     *             "appendDom":"",//脟毛脟贸脥锚鲁脡脪陋虏氓脠毛碌脛div碌脛脛脷脠脻
     *             "slefDom":"",//碌卤脟掳碌脛碌茫禄梅脭陋脣脴
     *             "slefNum":"",
     *             "lastNum":'',
     *             "num":'', //脫脙脫脷脜脨露脧脢脟脡脧脪禄脪鲁禄鹿脢脟脧脗脪禄脪鲁
     *             "dataTooltip":''
     *         }
     *      2, eub.tools.ajaxPaging(obj);
     */
    tools.ajaxPaging = function(obj){

        $('.dialog_ft_desc .js_selected').html('0');
        $('.dialog .btn.green').addClass('disabled').removeClass('btn_primary');

        var isPaging = obj.num > 0 ? parseInt(obj.slefNum.html())+obj.num <= parseInt(obj.lastNum.html()) : parseInt(obj.slefNum.html())+obj.num > 0,
            data = null;

        if(isPaging){ //脜脨露脧脢脟脟毛脟贸脛脟脪禄脪鲁
            var Paging = parseInt(obj.slefNum.html())*1+obj.num*1;
            var isSoushuo = '';
            if($('#msgSearchInput').val() != ''){
                isSoushuo = 'filter='+$('#msgSearchInput').val();
            }

            eub.tools.ajax('get',obj.url+Paging+isSoushuo,{},function(data){
                tools.isPaging = true;
                obj.slefNum.html(parseInt(obj.slefNum.html())+obj.num);
                $('.'+obj.appendDom).html(data.msg);
                tools.corresponding('.media_news .tuzh');

                if(eub.editor && eub.editor.jqdomid && eub.editor.jqdomid != ''){
                    tools.correspondings('[data-id="'+eub.editor.jqdomid+'"]') ; 
                    $('.dialog_ft_desc .js_selected').html(1);
                }else if(eub.tools && eub.tools.jqdomid && eub.tools.jqdomid != ''){
                   
                    tools.correspondings('[data-id="'+eub.tools.jqdomid+'"]') ;
                    $('.dialog_ft_desc .js_selected').html(1);
                }else{
                    $('.dialog_ft_desc .js_selected').html(0);
                }

            });
        };

    }
    tools.isPaging = true;
    /**
     * 碌茫禄梅路脰脪鲁脢脗录镁
     * @memberOf eub
     * @namespace eub.tools.clickPaging
     * @return {object} eub.tools 
     * @param  {string} dom 脟毛脟贸脥锚鲁脡脪陋虏氓脠毛碌脛div碌脛脛脷脠脻
     * @param  {string} dataTooltip 脫脙脫脷赂忙脣脽潞贸脤篓脦脪脢脟脟毛脟贸脛脟赂枚脛拢驴茅
     * @example
     *           
     *      1, eub.tools.clickPaging(obj);
     */
    tools.clickPaging = function(dom,dataTooltip,url){
        
        $('.page_nav_area').on('click','.page_prev',function(){//脡脧脪禄脪鲁
            var $divself = $(this),
                $slefNum = $divself.parent().find('.page_num label').eq(0),
                $lastNum = $divself.parent().find('.page_num label').eq(1),
                obj = null;
            if(tools.isPaging){
                tools.isPaging = false;
                obj = {
                    "appendDom":dom,//脟毛脟贸脥锚鲁脡脪陋虏氓脠毛碌脛div碌脛脛脷脠脻
                    "slefDom":$divself,//碌卤脟掳碌脛碌茫禄梅脭陋脣脴
                    "slefNum":$slefNum,//碌卤脟掳脪鲁
                    "lastNum":$lastNum,//脳卯潞贸脪鲁
                    "num":-1, //脫脙脫脷脜脨露脧脢脟脡脧脪禄脪鲁禄鹿脢脟脧脗脪禄脪鲁
                    "dataTooltip":dataTooltip,
                    "url":url
                }
            
                eub.tools.ajaxPaging(obj);
                $('.page_nav_area .page_next').show();
                $('.page_nav_area .page_last').hide();

                if($slefNum.html() == 2){
                    $divself.hide();
                }
            }
        });

        $('.page_nav_area').on('click','.page_next',function(){//脧脗脪禄脪鲁
            var $divself = $(this),
                $slefNum = $divself.parent().find('.page_num label').eq(0),
                $lastNum = $divself.parent().find('.page_num label').eq(1),
                obj = null;
            if(tools.isPaging){
                tools.isPaging = false;
                obj = {
                    "appendDom":dom,//脟毛脟贸脥锚鲁脡脪陋虏氓脠毛碌脛div碌脛脛脷脠脻
                    "slefDom":$divself,//碌卤脟掳碌脛碌茫禄梅脭陋脣脴
                    "slefNum":$slefNum,
                    "lastNum":$lastNum,
                    "num":1, //脫脙脫脷脜脨露脧脢脟脡脧脪禄脪鲁禄鹿脢脟脧脗脪禄脪鲁
                    "dataTooltip":dataTooltip,
                    "url":url
                }

                eub.tools.ajaxPaging(obj);
                
                $('.page_nav_area .page_prev').show();

                if($slefNum.html() == ($lastNum.html()-1)){

                    $divself.hide();
                    $('.page_nav_area .page_last').show();
                }
            }
        });

        $('.page_go').on('click',function(){
            var val = $(this).parent().find('input').val(),
                pageNum1 = $('.page_num label').eq(0),
                pageNum2 = $('.page_num label').eq(1);
               
            if(parseInt(val) <= pageNum2.html() && parseInt(val) > 0 ){

                eub.tools.ajax('get',url+parseInt(val),{},function(data){

                    pageNum1.html(parseInt(val));
                    $('.'+dom).html(data.msg);
                });
            }

        })
    }


    /**
     * 脪么脝碌虏楼路脜鹿脴卤脮
     * @memberOf eub
     * @namespace eub.tools.audioPlay
     * @return {object} eub.tools 
     * @example
     *           
     *      1, eub.tools.audioPlay();
     */
    tools.audioPlay = function(dom,dom1){

        $(dom).on('click',dom1,function(){

            var times = parseInt($(this).find('.desc').html())? parseInt($(this).find('.desc').html()) * 1000 : 100000,
                oAudio = $(this).find('audio')[0],
                time = null;

            $('.js_media_list audio').each(function(){
                this.pause();
            });

            if ($(this).parent().hasClass('wxAudioPlaying')) {
                
                $(this).parent().removeClass('wxAudioPlaying');
                oAudio.pause();
            }else {
                
                $('.wxAudioPlaying').removeClass('wxAudioPlaying');

                $(this).parent().removeClass('wxAudioPlaying');
                $(this).parent().addClass('wxAudioPlaying');
                oAudio.play();
                
                time = setTimeout(function(){ 
                    $(this).parent().removeClass('wxAudioPlaying');
                },times);

            };
            
        });   
          
    }

    /**
     * 脢脫脝碌虏楼路脜
     * @memberOf eub
     * @namespace eub.tools.videoPlay
     * @example
     *      1, eub.tools.videoPlay();
     */
    tools.videoPlay = function(){

        $('.js_videoArea').on('click','.video_shot',function(){
            
            $('.video_player video').attr('src',$('.video_player video').attr('data-src'));
            $(this).hide();
            $(this).parents('.js_videoArea').find('.video_player').show();
        });
    }

    /**
     * 通用选择元素
     * @memberOf eub
     * @namespace eub.tools.tab
     * @return {object} eub.tools
     * @param  {string} documents 传入class或id名称
     * @param  {string} documents1 传入class或id名称
     * @example
     * 
     *      1, eub.tools.tab(documents,documents);
     */
    tools.tab = function(documents,documents1){

        $(documents).on('click',documents1,function(){
            
            var itenbd = $(this).find('.img_item_bd');

            eub.tools.jqdom = $(this); //把当前选中存在this当中 方便其他方法调用

            if($(this).hasClass('selected')){

                $(this).removeClass('selected');
                $('.dialog_ft_desc .js_selected').html('0');
                eub.tools.jqdomid ='';
                $('.dialog .btn.green').addClass('disabled').removeClass('btn_primary');
            }else{
                eub.tools.jqdomid = $(this).attr('data-id');
                $('.dialog_ft_desc .js_selected').html('1');
                $('.dialog .btn.green').removeClass('disabled').addClass('btn_primary');

                $(documents+' '+documents1).removeClass('selected');
                $(this).addClass('selected');
            };
            return false;
        });
        return this;
    }


    /**
     * 光标插入连接位置
     * @memberOf eub
     * @namespace eub.tools.insertHtml
     * @param  {string} dom class或者id
     * @example
     *      2, eub.tools.insertHtml(dom);
     */
    tools.insertHtml = function(dom,isid){
        var isadom = null;
        $(dom).find('.js_aLink').on('click',function(){
            $(dom).find('.editInsert').fadeIn(300);
        });
         $(dom).find('.editInsertBtns').on('click',function(){
            $(dom).find('.editInserUrl').val('');
            $(dom).find('.editInserName').val('');
            $(dom).find('.editInsert').fadeOut(300);
            isadom = null;
        });

        $(dom).find('.js_editorArea').on('click','a',function(){
            var asrc = $(this).attr('href'),
                ahtml = $(this).html();
            isadom = $(this);
            if(asrc && ahtml){
                $(dom).find('.editInserUrl').val(asrc);
                $(dom).find('.editInserName').val(ahtml);
                $(dom).find('.editInsert').fadeIn(300);
            }
            return false;
        })

        $(dom).find('.editInsertBtn').on('click',function(){
            if(isadom){
                isadom.attr('href',$(dom).find('.editInserUrl').val())
                isadom.html($(dom).find('.editInserName').val())
                $(dom).find('.editInsert').fadeOut(300);
                $(dom).find('.editInserUrl').val('');
                $(dom).find('.editInserName').val('');
                isadom = null;

            }else if($(dom).find('.editInserUrl').val() != ''){
                var html = "<a href='"+$(dom).find('.editInserUrl').val()+"' contenteditable='false'>"+$(dom).find('.editInserName').val()+"</a>"
                var control=$(dom).find('.edit_area')[0];

                if(!control)return;

                control.focus();

                var selection= window.getSelection ? window.getSelection():document.selection;
            
                //判断浏览器是ie，但不是ie9以上
                var browser = tools.checkBrowser().split(":");
                var IEbrowser = tools.checkBrowser().split(":")[0];
                var IEverson =  Number(tools.checkBrowser().split(":")[1]);

                if(IEbrowser=="IE"&&IEverson<9){

                    tools.range.pasteHTML(html);    

                }else{

                    var node = $(html)[0];

                    if(tools.range.insertNode){
                        tools.range.insertNode(node);
                    }else{
                        $(dom).find('.js_editorArea').append($(html));
                    }

                    

                    //selection.addRange(tools.range);
                    $(dom).find('.editInserUrl').val('');
                    $(dom).find('.editInserName').val('')

                }    
                $(dom).find("[name=" + isid + "]").val($(dom).find('.edit_area').html());
                $(dom).find('.editInsert').fadeOut(300);
            }




        })
        
    }

    tools.range = {};

    /**
     * 文本编辑器
     * @memberOf eub
     * @namespace eub.tools.textEditor
     * @param  {string} dom class或者id
     * @example
     *      2, eub.tools.textEditor(dom);
     */
    tools.textEditor = function(dom,isid){
        tools.insertHtml(dom,isid);
        //判断浏览器
        window.browser = {};   
        if(navigator.userAgent.indexOf("MSIE") > 0) {  
            browser.name = 'MSIE';
            browser.ie = true;  
        } else if(navigator.userAgent.indexOf("Firefox") > 0){ 
            browser.name = 'Firefox'; 
            browser.firefox = true;  
        } else if(navigator.userAgent.indexOf("Chrome") > 0) {
            browser.name = 'Chrome'; 
            browser.chrome = true;  
        } else if(navigator.userAgent.indexOf("Safari") > 0) {
            browser.name = 'Safari';
            browser.safari = true;
        } else if(navigator.userAgent.indexOf("Opera") >= 0) {
            browser.name = 'Opera';
            browser.opera = true;
        } else {
            browser.name = 'unknow';
        }  

        var EditDiv = {
            focus: false //确定当前焦点是否在输出框内
        };
        $(dom).find('.edit_area').on('focus',function(){
            EditDiv.focus = true;
        })
        $(dom).find('.edit_area').on('blur',function(){
            EditDiv.focus = false;
        })
         $(dom).find('.edit_area').on('click', function(e){
            var selection=window.getSelection?window.getSelection():document.selection;

            tools.range = selection.createRange?selection.createRange():selection.getRangeAt(0);

            $(dom).find('.editInsert').fadeOut(300);
         })
        $(dom).find('.edit_area').on('keyup', function(e){
            // if(e.which == 13){
            //     $(this).find('div').before('<br>');
            //     $(this).find('div').remove();
            //     $(this)[0].focus();
            // }

            // var selection=window.getSelection?window.getSelection():document.selection;

            // tools.range = selection.createRange?selection.createRange():selection.getRangeAt(0);

          
            
            //var sel, rang, br, fixbr, node, inner, tempRange, offset;
            // if(key == 13) {
            //     if(ev.preventDefault) {
            //         ev.preventDefault();
            //     } else {
            //         ev.returnValue = false;
            //     }
            //     if(window.getSelection) {
            //         if(EditDiv.focus === false) {
            //             return false;
            //         }
            //         br = document.createElement('br');
            //         sel = window.getSelection();
            //         rang = sel.rangeCount > 0 ? sel.getRangeAt(0) : null;
            //         if (rang === null) {
            //             return false;
            //         }
            //         rang.deleteContents();
            //         node = sel.focusNode;
            //         inner = false;

            //         while(node.parentNode != document.documentElement) {//確定focusNode是否在編輯框內
            //             if(node === this) {
            //                 inner = true;
            //                 break;
            //             } else {
            //                 node = node.parentNode;
            //             }
            //         }
            //         if (inner) {
                        
            //             if(browser.chrome || browser.safari || browser.firefox) {//chrome、safari內，尾部換行時多添加一個<br type='_moz'>

            //                 tempRange = rang.cloneRange();
            //                 tempRange.selectNodeContents(this);
            //                 tempRange.setEnd(rang.endContainer, rang.endOffset);
            //                 offset = tempRange.toString().length;                       
            //                 if(offset == this.textContent.length && this.querySelectorAll("#edit-div br[type='_moz']").length == 0) {//在行尾且不存在<br type='_moz'>時

            //                     fixbr = br.cloneNode();
            //                     fixbr.setAttribute('type', '_moz');
            //                     rang.insertNode(fixbr);
            //                 }
            //             }               
            //             rang.insertNode(br);
            //         }
            //         if (document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("Range", "2.0")) {
            //             tempRange = document.createRange();
            //             tempRange.selectNodeContents(this);
            //             tempRange.setStart(rang.endContainer, rang.endOffset);
            //             tempRange.setEnd(rang.endContainer, rang.endOffset);
            //             sel.removeAllRanges();
            //             sel.addRange(tempRange);
            //         }       
            //     } else {
            //         rang = document.selection.createRange();
            //         if (rang === null) {
            //             return false;
            //         }
            //         rang.collapse(false)
            //         rang.pasteHTML('<br>'); 
            //         rang.select();              
            //     }
            //     //$('[type="_moz"]')[0] && $('[type="_moz"]').prev("br").remove();
            // }
            var ev = e || window.event;
            var key = ev.keyCode || ev.charCode;
            var html = $(this).html(),
                htmls = '',
                sift = /<div>/.test(html);
            if(key == 13){
                if (sift && e(this).find("div").html() != "") {
                    htmls = html.replace('<div>','<br>');
                    htmls = htmls.replace('</div>','')
                    $(this).html(htmls);
                    var control=$(dom).find('.edit_area')[0];

                    if(!control)return;

                    control.focus();

                    var selection= window.getSelection ? window.getSelection():document.selection;
                
                    //判断浏览器是ie，但不是ie9以上
                    var browser = tools.checkBrowser().split(":");
                    var IEbrowser = tools.checkBrowser().split(":")[0];
                    var IEverson =  Number(tools.checkBrowser().split(":")[1]);
                    if(IEbrowser=="IE"&&IEverson<9){

                    }else{

                        var node = $(html)[0];

                        tools.range.insertNode(node);

                        selection.addRange(tools.range);

                    } 
                }
            }
            htmls == ''?$(dom).find("[name=" + isid + "]").val($(this).html()):$(dom).find("[name=" + isid + "]").val(htmls);
        });      
        // document.getElementById('edit-div').onkeydown = function(e) {
            
        // }
    }


})(jQuery,eub);

});
