define(function (require, exports, module) {
  var editor = require('wechat/eub.editors');    
	var url = $('form').attr('data-url');
		
    var initPage = function() {
        eb.editor.initType('#default_content', 'content', 'mtype');
		//添加
		$('.add').on('click', function(){
      var formData = $('#defaultForm').serialize();
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
			if(window.confirm('删除后，发送设置以外的信息到公众号将无法收到默认消息，确定删除吗？')) {
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
