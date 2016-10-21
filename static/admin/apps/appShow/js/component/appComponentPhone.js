/*添加容器*/
function addWrap(){
	$('.appNav_body_item .add').on('click',function(){
		var s=$(this).siblings('.preview').html();
		var wrap=$('<div class="view"><div class="ui-sortable appWrap appWrap_'+s+'"></div></div>');
		$('.demo').append(wrap);
		if($('.demo').find('.view').size()==2){
			$('.demo').find('.view').eq(0).remove();
		};
	});
}
addWrap();

