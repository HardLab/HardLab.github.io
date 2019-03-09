/*function myFunction(){
	var content = document.getElementById('talk').innerHtml;
	console.log(content);
}*/
$(document).ready(function(){
	$('#buttonImg').click(function(){
		var content = $('#talk').val();
		var place = -1;
		var x = new Array(6).fill(-1);
		x[0]=content.indexOf('讨厌');
		x[1] = content.indexOf('睡不着');
		x[2] = content.indexOf('分钟');
		x[3] = content.indexOf('看什么');
		x[4] = content.indexOf('理你');
		x[5] = content.indexOf('怎么办');
		for(var i = 0;i<6;i++){
			//x[i]=content.indexOf('讨厌');
			if(x[i]>=0){
				place = i;
				break;
			}
		}
		//}
		console.log(place);
		//console.log(content.indexOf('讨厌'));
		switch(place){
			case (0):
				$("#think").val("你一点都不讨厌"); break;
			case(1):
				$("#think").val("你快来陪陪我"); break;
			case(2):
				$("#think").val("一个小时");break;
			case(3):
				$("#think").val("哈哈,在多看一会");break;
			case(4):
				$("#think").val("快哄我啊");break;
			case(5):
				$("#think").val("超开心");break;
		}
	});
});


