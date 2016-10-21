define(function(require, exports, module) {
    var editor = require('wechat/eub.editors');
    //var $modal = $('#ajax-modal');
    //var url = $('#form').attr('data-url');
    var 	$table = $('#table'),   	
        	$remove = $('#remove'),
          $add = $('#add'),
          url = $table.attr('data-url'),
          selections = [];
    var initTable = function() {            
      $table.bootstrapTable({
        height: getHeight(),
        url: $table.attr('data-url')+'/list',
		    method: 'get',
		    toolbar: '#toolbar',
		    pagination: true,
		    sidePagination: "server",
		    queryParamsType: 'page',
		    pageNumber:1,
		    pageSize: 10,
		    pageList: [10, 25, 50, 100],
		    search: true,
		    sortable:true,
        sortOrder:'desc',
		    idField:"id",
		    showColumns: true,
		    showRefresh: true,
		    showToggle: true,
		    showPaginationSwitch:true,
		    responseHandler:responseHandler,
            columns: [{
		        field: 'choose',
		        checkbox: true,
		        align: 'center',
		        valign: 'middle'
		    }, 
		    {
		        title: 'ID',
		        field: 'id',
		        align: 'center',
		        valign: 'middle',
		        sortable: true,
		        footerFormatter: totalTextFormatter
		    }, 
		    {
		        title: '关键词',
		        field: 'keyword',
		        align: 'center',
		        valign: 'middle',
		        sortable: true,		       
          footerFormatter: totalTextFormatter
		    }, 
		    {
		        title: '回复类型',
		        field: 'mtype',
		        align: 'center',
		        valign: 'middle',
		        sortable: true,
		        footerFormatter: totalTextFormatter
		    },
		    {
		        title: '回复内容',
		        field: 'text',
		        align: 'center',
		        valign: 'middle',
		        sortable: true,
		        footerFormatter: totalTextFormatter
		    },
        {
		        title: '备注',
		        field: 'remark',
		        align: 'center',
		        valign: 'middle',
		        sortable: true,
		        footerFormatter: totalTextFormatter
		    },
		    {
		        title: '匹配模式',
		        field: 'match',
		        align: 'center',
		        valign: 'middle',
		        sortable: true,
		        footerFormatter: totalTextFormatter
		    },
		    {
		    	title: '管理操作',
		    	field: 'operate',
          align: 'center',
          valign: 'middle',
          sortable: true,
          events: operateEvents,
          formatter: operateFormatter
        }
		]
    });
    /*删除按钮的状态*/ 
    $table.on('check.bs.table uncheck.bs.table ' +
                'check-all.bs.table uncheck-all.bs.table', function () {
        $remove.prop('disabled', !$table.bootstrapTable('getSelections').length);
        selections = getIdSelections();
    });
    
    /*点击删除按钮*/ 
   	$remove.click(function () {
        var ids = getIdSelections();
        swal({
            title: "确认删除吗？",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1ab394",
            confirmButtonText: "是，删除",
            cancelButtonText: "不，取消",
            closeOnConfirm: false,
            closeOnCancel: true 
    		},
        function (isConfirm) {
            if (isConfirm) {
                swal("Deleted!", "你的记录删除成功", "success");
                $table.bootstrapTable('remove', {
                field: 'id',
                values: ids
            });
             $remove.prop('disabled', true);
            }
        });
           
    });
    
    $add.on('click','',function(){
      var url = $(this).attr('data-url');
        $('#ajax-modal').load(url+'/add','',function(){           
          $('#ajax-modal').modal(); 
          eb.editor.initType('#keyword_content', 'content', 'mtype');
          $('#addSubmit').on('click','',function(){
            /*$("#addKeywordForm").validate({
              rules:{
                keyword:{
                  required:true,               
                },               
              },           
            });*/
            //alert(1);
            if($('#addKeywordForm').valid()){
              var formData = $('#addKeywordForm').serialize();
              $.ajax({
                type:'post',
                url:url+'/adddo',
                cache:false,
                dataType:'json',
                data:formData,
                success:function(data){                 
                  alert(data.message);
                  if(data.state == 1){
                    $('#ajax-modal').modal('hide');
                    $table.bootstrapTable('refresh');
                  }
                }
              })
            }
          })
          $('#preview').on('click','',function(){
            alert(2);
          })
      });
        
    })
  }
    
    
    /*对响应体操作*/ 
	function responseHandler(res) {
		return res.total ? {"rows": res.data,"total": res.total}:{"rows": [],"total": 0}
	};
    
    /*获取元素的id*/
    function getIdSelections() {
        return $.map($table.bootstrapTable('getSelections'), function (row) {
            return row.id
        });
    }
    
	/*获取元素的data数据*/ 
    function getData(){
        return $table.bootstrapTable('getData')
    };
    
     /*获取表格的高度*/ 
    function getHeight() {
        return $(window).height();
    };
    
    /*获取全部表格个数*/
    function totalTextFormatter(data) {
        return 'Total';
    };
		
	/*删除按钮的状态*/
    $table.on('check.bs.table uncheck.bs.table ' +
                     'check-all.bs.table uncheck-all.bs.table', function () {
        $remove.prop('disabled', !$table.bootstrapTable('getSelections').length);
        selections = getIdSelections();
    });
	
    /*点击删除按钮*/ 
   	$remove.click(function () {
        var ids = getIdSelections();
        swal({
            title: "确认删除吗？",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1ab394",
            confirmButtonText: "是，删除",
            cancelButtonText: "不，取消",
            closeOnConfirm: false,
            closeOnCancel: true 
    		},
            function (isConfirm) {
                if (isConfirm) {
                   	swal("Deleted!", "你的记录删除成功", "success");
                  	$table.bootstrapTable('remove', {
		                field: 'userid',
		                values: ids
		            });
		            $remove.prop('disabled', true);
                }
        });
        $(window).resize(function () {
            $table.bootstrapTable('resetView', {
                height: getHeight()
            });
        });
  	});
	
    /*动态添加操作栏*/
    function operateFormatter(value, row, index) {
        return [
        	'<button class="btn edit"  title="点击编辑" style="border:none;background:none" data-toggle="modal">',
            '<i class="glyphicon glyphicon-edit"></i>',
            '</button>',
            '<button class="btn remove"  title="点击删除" style="border:none;background:none">',
            '<i class="glyphicon glyphicon-remove"></i>',
            '</button>',
            /*'<a class="btn .child"  title="点击进入子集" style="border:none;background:none" href="powerSettings_admin_child.html" target="_blank">',
            '<i class="glyphicon glyphicon-link"></i>',
            '</a>'*/
        ].join('');
    };
    
    /*给操作栏添加点击行为*/ 
    window.operateEvents = {
       	'click .edit':function (e, value, row, i) {
       		var eurl = url+'/edit?id='+row.id;
          $('#ajax-modal').load(eurl,'',function(){            
            $('#ajax-modal').modal();    
            eb.editor.initType('#keyword_content', 'content', 'mtype');
            $('#editSubmit').on('click','',function(){
              //alert(1);
              if($('#editKeywordForm').valid()){
                var formData = $('#editKeywordForm').serialize();
                $.ajax({
                  type:'post',
                  url:url+'/editdo',
                  cache:false,
                  dataType:'json',
                  data:formData,
                  success:function(data){                   
                    alert(data.message);
                    if(data.state == 1){  
                      $('#ajax-modal').modal('hide');
                      $table.bootstrapTable('refresh');
                    }
                  }
                })
              }
            })
            $('#preview').on('click','',function(){
              alert(2);
            })
          });          
        },
        'click .remove': function (e, value, row, index) {
        	swal({
              title: "确认删除吗？",
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: "#1ab394",
              confirmButtonText: "是，删除",
              cancelButtonText: "不，取消",
              closeOnConfirm: false,
              closeOnCancel: true 
        		},
            function (isConfirm) {
              if (isConfirm) {
                //console.log(url);return;
                $.ajax({
                  type:'post',
                  url:url+'/delete',
                  cache:false,
                  dataType:'json',
                  data:{id:row.id},
                  success:function(data){                                       
                    if(data.state == 1){  
                      swal("Deleted!", "你的记录删除成功", "success");
                      $table.bootstrapTable('remove', {
                          field: 'id',
                          values: [row.id]
                      });                     
                    }else{
                      swal("Failed", "你的记录删除失败", "warning");
                    }
                  }
                })
                
              }
            });
        }
    };

    exports.init = function() {
        var app = require('init');
        app.init();

        initTable();
    };
});
