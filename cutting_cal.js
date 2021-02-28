
	function changeItem(){	// 상품을 변경했을 때
		var select_itemid;
		select_itemid = $("#selectItems option:selected").val();

		var only_wh = $("#only_wh_"+select_itemid).val();	// 가로고정여부
		var w_low = $("#w_low_"+select_itemid).val();	// 최하(단위)가로
		var h_low = $("#h_low_"+select_itemid).val();	// 최하(단위)세로
		var w_max = $("#w_max_"+select_itemid).val();	// 최대가로
		var h_max = $("#h_max_"+select_itemid).val();	// 최대세로
				
		var area_price = $("#area_price_"+select_itemid).val();	// 상품가격(원판단위가격)
		var item_price = $("#item_price_"+select_itemid).val();	// 단위가격
		
		$("#w_str").empty();
		$("#h_str").empty();
		$("#w_str").append("<b>가로폭</b><br>(최대"+w_max+"mm)");
		$("#h_str").append("<b>길이(결방향)</b><br>(최대"+h_max+"mm)");	
		
		if(only_wh=='H'){
			$("#width").attr('readonly', true);
		} else {
			$("#width").removeAttr('readonly');
		}
		
		$("#width").val(w_low);
		input_width = $("#width").val();
		
		$("#height").val(h_low);
		input_height = $("#height").val();
		
		$("#ea").val(1);
		var ea = $("#ea").val();
		
		var price = calculate(input_width, input_height, w_low, h_low, ea, item_price, area_price);
		$("#price").val(price);
	}
	
	function changePrice() {	// 입력필드가 변경됐을 때
	/*$("#selectItems").change(function(){*/
			
		var select_itemid = $("#selectItems option:selected").val();
	
		var w_low = parseInt($("#w_low_"+select_itemid).val());	// 최하(단위)가로
		var h_low = parseInt($("#h_low_"+select_itemid).val());	// 최하(단위)세로
		
		var w_max = parseInt($("#w_max_"+select_itemid).val());	// 최대가로
		var h_max = parseInt($("#h_max_"+select_itemid).val());	// 최대세로
	
		var area_price = parseInt($("#area_price_"+select_itemid).val());	// 상품가격(원판단위가격)
		var item_price = parseInt($("#item_price_"+select_itemid).val());	// 단위가격
		
		var input_width = parseInt($("#width").val());	// 입력받은 가로
		var input_height = parseInt($("#height").val());	// 입력받은 세로
		var ea = $("#ea").val();	// 입력 받은 수량
		
		//alert(input_width+"/"+input_height+"/"+ea);		
		if(input_width > w_max){
			alert("최대 "+w_max+"mm까지 주문 가능합니다.");
			$("#width").val(w_max);
			input_width = w_max;
		}
		if(input_height > h_max){
			alert("최대 "+h_max+"mm까지 주문 가능합니다.");
			$("#height").val(h_max);
			input_height = h_max;
		}
		if(input_width < w_low){
			alert("최하 "+w_low+"mm부터 주문 가능합니다.");
			$("#width").val(w_low);
			input_width = w_low;
		}
		if(input_height < h_low){
			alert("최하 "+h_low+"mm부터 주문 가능합니다.");
			$("#height").val(h_low);
			input_height = h_low;
		}


		var price = calculate(input_width, input_height, w_low, h_low, ea, item_price, area_price);

		$("#price").val(price);
	}

	function calculate(input_width, input_height, low_width, low_height, input_ea, item_price, area_price) {
		var area1 = input_width*input_height;
		//사용자 입력 가로사이즈 * 세로사이즈

		var area2 =low_width *low_height;
		//최소가로사이즈 * 최소세로사이즈

		var area_total_price = (area1 * item_price) / area2;
		//가격은 사용자선택사이즈 * 아이템단위가격 / 최소면적으로 나눔
		var area_total_price2 = Math.floor(area_total_price / 10) * 10;
		


		//이때 가격이 원판단위가격(area_price) 보다 작으면 원판 가격을 적용함.
 
		//결국 사장님께서 궁금하신 부분은 원판단위가격(area_price) 부분이실텐데요, 최소주문금액 같은 개념으로 보시면 될 것 같네요
		//단 여기서 아래 chg_won 함수에서 보시면 아시겠지만 올림 개념이 있습니다. 1000단위.이 함수를 적용하시지 않으시면 정확한 단위 금액까지 계산이 되겠죠?.
		//즉 주문금액이 area_price  금액보다 작으면 주문금액은 area_price 금액이 된다는 의미입니다.(즉 임의 설정하시면 되시겠네요)
		//이 개념이 필요치 않으시면 item_price 와 동일한 금액으로 설정하시면 되시겠네요.
		
		if (area_total_price2 < area_price) {
			area_total_price2 = area_price;
			area_total_price2 = chg_won(area_total_price2, 'C', 1000)
			area_total_price2 = area_total_price2 * input_ea;
			return area_total_price2;
		} else {
			area_total_price2 = chg_won(area_total_price2, 'C', 1000)
			area_total_price2 = area_total_price2 * input_ea;
			return area_total_price2;
		}
	}

	
	function chg_won(amount, mode, unit) {	//R반올림, C올림, F버림

		var remove_amount = amount/unit;
		
		switch (mode){
			case 'F':
				remove_amount = Math.floor(remove_amount);
				break;
			case 'R':
				remove_amount = Math.round(remove_amount);
				break;
			case 'C':
				remove_amount = Math.ceil(remove_amount);
 				break;
 			default :
 				remove_amount = Math.round(remove_amount);
				break; 			
		}
		remove_amount = remove_amount * unit;
 		return remove_amount;
	}


	function add_form(){
		
		var odr_id = $("#odr_id").val();	// 입력 받은 수량
		var select_itemid = $("#selectItems option:selected").val();
		
		var input_width = parseInt($("#width").val());	// 입력받은 가로
		var input_height = parseInt($("#height").val());	// 입력받은 세로
		var ea = $("#ea").val();	// 입력 받은 수량
		var price = $("#price").val();
		
		if(isNaN(select_itemid)==true){
			alert("목재종류를 선택해주세요.");
			$("#selectItems").focus();
			return false;	
		}else if(!input_width){
			alert("가로길이를 입력해주세요.");
			$("#width").focus();
			return false;			
		}else if(!input_height){
			alert("세로길이를 입력해주세요.");
			$("#height").focus();
			return false;
		}else if(!ea){
			alert("주문수량을 입력해주세요.");
			$("#ea").focus();
			return false;
		}
		
		$.post("/orderList.php",{
			"odr_id":odr_id,
			"item_id":select_itemid,
			"width":input_width,
			"height":input_height,
			"ea":ea,
			"price":price
			

			
		},function(data){
			$("#listContents").append(data);	
			
			//alert("추가되었습니다!");
		});
	}
	function del_form(mode){
		if(mode=='all'){
			$("#listContents").empty();
		}
		TotalPrice();
	}


	function send_mail(){
	
		var check = $(".orderPrice").val();
		var order_list = $("#listContents").html();
		
		var order_name = $("#order_name").val();
		var order_tel = $("#order_tel").val();
		var order_email = $("#order_email").val();
		var order_memo = $("#order_memo").val();
		var market_name = $("#market_name").val();
		var odr_id = $("#odr_id").val();
		
		if(!check){
			alert("견적서를 추가해주세요.");
			return false;
		}
		
		if(!order_name){
			alert("주문자명을 입력해주세요.");
			$("#order_name").focus();
			return false;			
		}
		if(!order_tel){
			alert("연락처를 입력해주세요.");
			$("#order_tel").focus();
			return false;
			
		}
		if(!order_email){
			alert("이메일을 입력해주세요.");
			$("#order_email").focus();			
			return false;
		}
		//alert(order_name+order_tel+order_email);
		
		$.post("cutting_email.php",{
			"order_email":order_email,
			"order_tel":order_tel,
			"order_name":order_name,
			"order_memo":order_memo,
			"order_list":order_list,
			"market_name":market_name,
			"odr_id":odr_id
		},function(data){
			$("#mail_confirm").empty();
			$("#mail_confirm").append(data);
			
			
			alert("요청하신 견적 작업이 정상 처리 되었습니다. \n\n목재의 사이즈는 고객님의 이메일로도 전송이 되십니다");			
			location.href='/?market_name='+market_name;
	    	
	
			
			
		});
	}


// orderList.php

$(document).ready(function(){

	TotalPrice();
	//alert(total_price);
});

/*
function del(){
	$(".checkbox:checked").each(function(){
		$("#order_data_"+$(this).val()).remove();
		$("#orderPrice_"+$(this).val()).remove();		
	});
	TotalPrice();	
}
*/




function del(){
	
	$(".checkbox:checked").each(function(){
	$("#order_data_"+$(this).val()).remove();
	$("#orderPrice_"+$(this).val()).remove();		
			$.post("orderList.php",{
			"delgubn":"1",
			"del_seqno":$("#del_seqno_"+$(this).val()).val()
		}
			);
	alert("삭제되었습니다!");
	});
	TotalPrice();	
}


function TotalPrice(){
	var total_price = 0;
	$(".orderPrice").each(function(){
		total_price = total_price + parseInt($(this).val());
	});
	//alert(total_price);
	$("#total_price").html(" <b>"+ addCommas(total_price)+"원");
	
	var total_ea = total_price / 1000;
	//$("#total_ea").html("신청수량 <b>"+total_ea+"개</b>");

	//var tmpval = 16500;
	var t_1000 = parseInt(total_price / 1000);
	var t_100 = parseInt(total_price % 1000)/100;
	
	$("#total_1000").html("수량 <b>"+addCommas(t_1000)+"개</b>");
	$("#total_100").html("수량 <b>"+addCommas(t_100)+"개</b>");

}
function addCommas(Str)
{
	Str += '';
	x = Str.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
