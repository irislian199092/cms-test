define(function(require, exports, module) {
    require('fileupload/jquery.fileupload');
    //require('eub.config');
    //require('eub.base');
    //require('eub.tools');
    //require('eub.popup');
    require('wechat/eub.editors');
    //var $modal = $('#ajax-modal');
    //var url = $('#form').attr('data-url');

    var initPage = function() {     
        $('#ajax-modal').on('click','#coverbutton', function() {
            eub.tools.jqdomid = '';
            eub.tools.ajax('get', CONFIG.MASS.EDITOR_URL.CHOICE + 'type=image&first=1&group=&page=1', {}, function(data) {
              //alert(1)
                eub.popup.popuEditorHtml({
                    "dialogClass": "news_img_dialog_wrp img_dialog_wrp",
                    "name": '图片',
                    "close": "关闭",
                    "appengHtml": data.msg
                }, false, function() {
                    if ($('.news_img_dialog_wrp .img_list .selected')) {

                        $('#image').val($('.news_img_dialog_wrp .img_list .selected').attr('data-url'));
                        $('#galleryimage').attr('src', $('.news_img_dialog_wrp .img_list .selected').attr('data-url'))
                        $('.news_img_dialog_wrp').remove();
                    }
                });
                //alert(2)
                eub.tools.tab('.img_lists', 'li');
                eub.tools.clickPaging('img_lists', 'image', CONFIG.MASS.EDITOR_URL.CHOICE + 'type=image&first=&group=&page=');
                $('#uploadImg').fileupload({
                    url: '/admin/upload.php',
                    dataType: 'json',
                    formData: {act: 'upload', type: 'image'},
                    progressall: function(e, data) {
                        $('.longsf').show();
                    },
                    done: function(e, data) {

                        $('.longsf').hide();
                        var $list = $('<li class="img_item js_imageitem"></li>'),
                                html = '<label class="frm_checkbox_label img_item_bd">' +
                                '<img src="' + data.result.data.src + '" alt="' + data.result.data.title + '" class="pic">' +
                                '<span class="lbl_content">' + data.result.data.title + '</span> ' +
                                '<div class="selected_mask">' +
                                '<div class="selected_mask_inner"></div>' +
                                '<div class="selected_mask_icon"></div>' +
                                '</div>' +
                                '</label>';
                        console.log(data.result.data.id)
                        $list.attr('data-url', data.result.data.src);
                        $list.attr('data-id', data.result.data.id);
                        $list.html(html);
                        $('.img_list').prepend($list);
                        $('.img_list li').eq(9).remove();
                    }
                });
            })

            // $modal.load(url + '?act=ueditorimage', '', function() {
            // 	$modal.modal();
            // 	pageImage(1);
            // 	$('.img_pick_area').on('click','.js_imageitem',function(){
            // 		if($(this).hasClass('selected')){
            // 			$('#img_id').attr('value',"");
            // 			$('#img_url').attr('value',"");
            // 			$(this).removeClass('selected');
            // 			$('.dialog_ft_desc .js_selected').html('0');
            // 		}else{
            // 			$('.dialog_ft_desc .js_selected').html('1');
            // 			$('.js_imageitem').removeClass('selected');
            // 			$('#img_id').attr('value',$(this).attr('data-id'));
            // 			$('#img_url').attr('value',$(this).attr('data-url'));
            // 			$(this).addClass('selected');
            // 		}; 
            // 	});
            // 	$('.btn-primary').on('click',function(){
            // 		$('#galleryimage').attr('src',$('#img_url').attr('value'));
            // 		if ($('#galleryimage').attr('src')==""){
            // 			$('#galleryimage').attr('src',"/images/common/admin/fmtp.png");
            // 		}
            // 		$('#image').attr('value',$('#img_url').attr('value'));
            // 		$modal.modal('hide');
            // 	});
            // });
        });
        $('#smallcoverbutton').on('click', function() {
            eub.tools.jqdomid = '';
            eub.tools.ajax('get', CONFIG.MASS.EDITOR_URL.CHOICE + 'act=get_image_list&first=1&group=&page=1', {}, function(data) {

                eub.popup.popuEditorHtml({
                    "dialogClass": "news_img_dialog_wrp img_dialog_wrp",
                    "name": '图片',
                    "close": "关闭",
                    "appengHtml": data.msg
                }, false, function() {
                    if ($('.news_img_dialog_wrp .img_list .selected')) {
                        $('#small_image').attr('value', $('.news_img_dialog_wrp .img_list .selected').attr('data-url'));
                        $('#small_galleryimage').attr('src', $('.news_img_dialog_wrp .img_list .selected').attr('data-url'));
                        $('.news_img_dialog_wrp').remove();
                    }
                });
                eub.tools.tab('.img_lists', 'li');
                eub.tools.clickPaging('img_lists', 'image', CONFIG.MASS.EDITOR_URL.CHOICE + 'act=get_image_list&first=&group=&page=');
                $('#uploadImg').fileupload({
                    url: '/admin/upload.php',
                    dataType: 'json',
                    formData: {act: 'upload', type: 'image'},
                    progressall: function(e, data) {
                        $('.longsf').show();
                    },
                    done: function(e, data) {

                        $('.longsf').hide();
                        var $list = $('<li class="img_item js_imageitem"></li>'),
                                html = '<label class="frm_checkbox_label img_item_bd">' +
                                '<img src="' + data.result.data.src + '" alt="' + data.result.data.title + '" class="pic">' +
                                '<span class="lbl_content">' + data.result.data.title + '</span> ' +
                                '<div class="selected_mask">' +
                                '<div class="selected_mask_inner"></div>' +
                                '<div class="selected_mask_icon"></div>' +
                                '</div>' +
                                '</label>';
                        console.log(data.result.data.id)
                        $list.attr('data-url', data.result.data.src);
                        $list.attr('data-id', data.result.data.id);
                        $list.html(html);
                        $('.img_list').prepend($list);
                        $('.img_list li').eq(9).remove();
                    }
                });
            })
            // $modal.load(url + '?act=ueditorimage', '', function() {
            // 	$modal.modal();
            // 	pageImage(1);
            // 	$('.img_pick_area').on('click','.js_imageitem',function(){
            // 		if($(this).hasClass('selected')){
            // 			$('#img_id').attr('value',"");
            // 			$('#img_url').attr('value',"");
            // 			$(this).removeClass('selected');
            // 			$('.dialog_ft_desc .js_selected').html('0');
            // 		}else{
            // 			$('.dialog_ft_desc .js_selected').html('1');
            // 			$('.js_imageitem').removeClass('selected');
            // 			$('#img_id').attr('value',$(this).attr('data-id'));
            // 			$('#img_url').attr('value',$(this).attr('data-url'));
            // 			$(this).addClass('selected');
            // 		}; 
            // 	});
            // 	$('.btn-primary').on('click',function(){
            // 		$('#small_galleryimage').attr('src',$('#img_url').attr('value'));
            // 		if ($('#small_galleryimage').attr('src')==""){
            // 			$('#small_galleryimage').attr('src',"/images/common/admin/fmtp.png");
            // 		}
            // 		$('#small_image').attr('value',$('#img_url').attr('value'));
            // 		$modal.modal('hide');
            // 	});
            // });
        });
        $('#submit-add').click(function() {
            var rules = {
                title: {
                    minlength: 1,
                    maxlength: 64,
                    required: true
                }
            };
            var validator = $('#form').validate({
                rules: rules
            });
            if (validator.form()) {
                $('#form').ajaxSubmit({
                    url: url,
                    type: 'post',
                    dataType: 'json',
                    beforeSubmit: function() {
                    },
                    success: function(data) {
                        if (data.error) {
                            alert(data.msg);
                        } else {
                            alert(data.msg);
                            window.location.reload();
                        }
                    }
                });
            }
        });
        $('#submit-edit').click(function() {
            var rules = {
                title: {
                    minlength: 1,
                    maxlength: 100,
                    required: true
                }
            };
            var validator = $('#form').validate({
                rules: rules
            });
            if (validator.form()) {
                $('#form').ajaxSubmit({
                    url: url,
                    type: 'post',
                    dataType: 'json',
                    beforeSubmit: function() {
                    },
                    success: function(data) {
                        if (data.error) {
                            alert(data.msg);
                        } else {
                            alert(data.msg);
                            window.history.back(-1);
                        }
                    }
                });
            }
        });
        //增加预览相关add by aoniboy<mingzhen.sun@eub-inc.com>        
        $('.Preview').click(function() {
            $('#wx_user').val('');
            $('#Preview_pop').show();
        });
        $('.close_pop').click(function() {
            $(this).parents('.Popup-General').hide()
        });
        //预览 
        $('#Preview_btn').click(function() {
            $('#Preview_btn').attr('disabled', true);
            var dataid = $('input[name="id"]').val();
            if ($('#wx_user').val() == '') {
                alert('请填写预览微信号');
                $('#Preview_btn').attr('disabled', false);
                return;
            } else {

                var rules = {
                    title: {
                        minlength: 1,
                        maxlength: 64,
                        required: true
                    }
                };
                var validator = $('#form').validate({
                    rules: rules
                });
                if (validator.form()) {
                    var act = $('input[name="act"]').val();
                    $('input[name="act"]').val('preview');
                    $('input[name="wx_user"]').val($('#wx_user').val());
                    $('#form').ajaxSubmit({
                        url: '/admin/wechat/material/news/action.php',
                        type: 'post',
                        dataType: 'json',
                        beforeSubmit: function() {
                        },
                        success: function(data) {
                            if (data.error == 1) {
                                alert(data.msg);
                            } else {
                                alert(data.msg);
                                $('#Preview_pop').hide();
                            }
                            $('#Preview_btn').attr('disabled', false);
                            $('input[name="act"]').val(act);
                        }
                    });
                }
                $('#Preview_btn').attr('disabled', false);

            }
        });

        function pageImage(page) {
            $.ajax({
                type: "post",
                url: url,
                data: {act: 'pageimage', page: page},
                dataType: "json",
                success: function(data) {
                    $('#page_area').html(data.msg);
                }
            });
            $('.img_pick_area').on('click', '.page_prev', function() {
                page = parseInt($('#pagination').attr('data-page')) - 1;
                pageImage(page);
            });
            $('.img_pick_area').on('click', '.page_next', function() {
                page = parseInt($('#pagination').attr('data-page')) + 1;
                pageImage(page);
            });
        }

        function pageVideo(page) {
            $.ajax({
                type: "post",
                url: url,
                data: {act: 'pagevideo', page: page},
                dataType: "json",
                success: function(data) {
                    $('#page_area').html(data.msg);
                }
            });
            $('.img_pick_area').on('click', '.page_prev', function() {
                page = parseInt($('#pagination').attr('data-page')) - 1;
                pageVideo(page);
            });
            $('.img_pick_area').on('click', '.page_next', function() {
                page = parseInt($('#pagination').attr('data-page')) + 1;
                pageVideo(page);
            });
        }
        function pageVoice(page) {
            $.ajax({
                type: "post",
                url: url,
                data: {act: 'pagevoice', page: page},
                dataType: "json",
                success: function(data) {
                    $('#page_area').html(data.msg);
                }
            });
            $('.img_pick_area').on('click', '.page_prev', function() {
                page = parseInt($('#pagination').attr('data-page')) - 1;
                pageVoice(page);
            });
            $('.img_pick_area').on('click', '.page_next', function() {
                page = parseInt($('#pagination').attr('data-page')) + 1;
                pageVoice(page);
            });
        }
    }

    exports.init = function() {
        var app = require('init');
        app.init();

        initPage();
    };
});
