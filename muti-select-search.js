$(function(){
	var keyArr = ['jy','xl','rz','gz'];
	var keyObj = {'jy':'','xl':'','rz':'','gz':''};
	$(".search-table-tbody tr td").click(function(){
		var isChoose = $(this).hasClass("choice"); 
		var chooseLen = null;
		var $parent = $(this).parent();
		var $index = $(this).parents('.search-table').index();

		//console.log($(this).index())
		if($(this).index()!==0){
			$(this).siblings().removeClass("active");
			if(!isChoose){
				$(this).addClass("choice");
			}else{
				$(this).removeClass("choice");
			}
			chooseLen = $parent.children('.choice').length;
			if(chooseLen==0){
				$parent.children('td').eq(0).addClass('active');
			}
			findQuery($parent,$index)
		}
		else{
			$(this).addClass("active")
			$(this).siblings().removeClass("choice");
			findQuery($parent,$index);
		}
		//ajax
		console.log(JSON.stringify(keyObj,undefined,4))	;
		$("#searchResult").text(JSON.stringify(keyObj,undefined,4));
	});
	function findQuery($ele,_index){
		searchCon = {};
		var oKey = keyArr[_index];
		var hasActive = null;
		hasActive = $ele.children('.active').length>0;
		if(hasActive){
			keyObj[oKey] = '';
		}else{
			var arr =[];
			$ele.children('.choice').each(function(index,item){
				arr.push($(item).text());
			});
			keyObj[oKey] = arr;
			keyObj[oKey] = arr.join(',');
		}
	}
})



