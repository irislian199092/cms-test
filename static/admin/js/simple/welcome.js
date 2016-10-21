define(function (require, exports, module) {
  var editor = require('wechat/eub.editors');    
	var url = $('form').attr('data-url');
		
    var initPage = function() {
        eb.editor.initType('#welcome_content', 'content', 'mtype');
		//添加
		$('.add').on('click', function(){
      var formData = $('#subscribeForm').serialize();
			$.ajax({
				url: url,
				type:'post',
        data:formData,
				dataType:'json',
				success:function(data){
          alert(data.message);
          if(data.state == 1) {
              window.location.reload();
          }
				}
			});
		});	
		$('.del').on('click', function(){
			if(window.confirm('删除后，关注该公众号的用户将不再接收该回复，确定删除？')) {
				$.post($(this).attr('data-url'),{act:'del'},function(data){
					alert(data.message);
          if(data.state == 1){
            window.location.reload();
          }
          
				},'json');
			}	
		});	
    };
    //main function to initiate the module
    exports.init = function () {
    	var app = require('init'); 	      
      app.init();
        
      initPage();
	}
});
