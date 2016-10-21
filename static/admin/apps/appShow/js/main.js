require.config({
	paths:{
		"jquery":"http://admin.nmop.cn/static/admin/jquery/jquery-1.11.3",
		"bootstrap":"http://admin.nmop.cn/static/admin/bootstrap/3.3.5/js/bootstrap.min"
	},
	shim:{
		"bootstrap":{
			deps:["jquery"],
			exports:"Bootstrap"
		}
	}

});
require(["jquery","bootstrap"],function($,Bootstrap){
	$('.appNav').metisMenu();
	$('.appNav_body_item .add').on('click',function(){
		var s=$(this).siblings('.preview').html();
		var wrap=$('<div class="view"><div class="ui-sortable appWrap appWrap_'+s+'"></div></div>');
		$('.demo').append(wrap);
		if($('.demo').find('.view').size()==2){
			$('.demo').find('.view').eq(0).remove();
		};

		addEdit()
	});

	/*添加组件类型的选择*/
		function addEdit(secOption){
			var title=$(this).parents('ul').siblings().find('.nav-label').html(); //每一项列表的标题
			var index=$(this).data(secOption);   //添加按钮的index
			var arr=[];
			$('.appNav_comp_'+secOption).each(function(i,n){
				var h=$(this).find('.preview').html();
				var o='<option>'+h+'</option>';
				arr.push(o);
			})
			var arr2=arr.join('');
			var formList=$('<div class="form-group"  id='+secOption+'Type" data-type="'+secOption+'"><label class="col-sm-3 control-label" >'+title+':</label><div class="col-sm-9"><select class="form-control" name='+secOption+'Type">'+arr2+'</select></div></div>')
			$('#editForm').append(formList);
			var  b=$('<div class="hr-line-dashed"></div><div class="form-group"><div class="col-sm-12 col-sm-offset-3"><button class="btn btn-primary" id="save">保存内容</button><button class="btn btn-white" id="cancel">取消</button></div></div>')
			$('#editForm').append(b);
			$('#editForm .form-group select option').eq(index).attr('selected','selected');
			$('#editForm .form-group select option').eq(index).addClass('on');
			$('#save').on('click',function(){
				if($('#editForm .form-group').size()==2){
					var selctedV=$("#editForm .form-group select").find("option:selected").html();
					$('.appWrap').attr('class','ui-sortable appWrap appWrap_'+selctedV);
					return false;
				}
				if($('#editForm .form-group input[disabled]').size()===7){
						return false;
				}
				return false;
			})
		}
})