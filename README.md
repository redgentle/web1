# web1
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
<meta http-equiv="Content-Script-Type" content="text/javascript"/>
<meta http-equiv="Content-Style-Type" content="text/css"/>
<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
<title>온라인 자동 견적 프로그램</title>
<link href='cutting_cal.css' rel='stylesheet' type='text/css'>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.5.2.min.js"></script>
<script type="text/javascript" src="cutting_cal.js"></script>

<script type="text/javascript">
<!-- 수량에 숫자만 입력 가능 -->
	function numbersonly(e, decimal) {
	    var key;
	    var keychar;
	    if (window.event) {  
	        key = window.event.keyCode;
	    } else if (e) {
	        key = e.which;
	    } else {
	        return true;
	    }
	    keychar = String.fromCharCode(key);
	    if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13)
	            || (key == 27) || (key == 96) || (key == 97) || (key == 98) || (key == 99) 
	            || (key == 100) || (key == 101) || (key == 102) || (key == 103) || (key == 104) || (key == 105)) {
	        return true;
	    } else if ((("0123456789").indexOf(keychar) > -1)) {
	        return true;
	    } else if (decimal && (keychar == ".")) {
	        return true;
	    } else if (key == 16) {
	        return false;
		} else {
			return false;
		}
	}
	<!-- 수량 적을때 수 제한 input type="number"-->
	function maxLengthCheck(object){
		if (object.value.length > object.maxLength){
			object.value = object.value.slice(0, object.maxLength);
		}    
	}
</script>
</head>
<body background="image/bg.gif">
<center>




<div id='header'><img src="image/top.png" width="800"></div>
<table width=800 bgcolor="#FFFFFF" style="border: 1px solid #ccc;">
<tr><td align=center>

<!-- 견적서 작성 -->
<div id='input'>
	<div id='inputFix'>
	</div>
	<div id='inputSubject'><img src="image/title_11.png"></div>
	<div id='inputContents'>
		<table style='width: 100%;' bgcolor="#FFFFFF" height=70>
			<tr bgcolor="#FFFFFF" height=30>
				<td><b>목재종류선택</b></td>
				<td id='w_str'><b>가로폭</b></td>
				<td id='h_str'><b>길이(결방향)</b></td>
				<td><b>수량</b>/EA</td>
				<td style="width: 110px;"><b>금액</b>/원</td>
				<td rowspan="2"><a onclick="add_form()"><img src='http://iveranda.cafe24.com/image/btn_add.gif' alt='추가' style="cursor:hand"></a></td>
			</tr>
			<tr>
				<td><select id='selectItems' onchange='changeItem()'><option>목재종류선택</option><option id='1370760755' value='1370760755'> 001.삼나무집성판재12T</option><option id='1370761591' value='1370761591'> 002.삼나무집성판재15T</option><option id='1370762757' value='1370762757'> 003.삼나무집성판재18T</option><option id='1370763411' value='1370763411'> 004.삼나무집성판재24T</option><option id='1370765139' value='1370765139'> 005.레드파인집성판재12T</option><option id='1370766602' value='1370766602'> 006.레드파인집성판재15T</option><option id='1370767000' value='1370767000'> 007.레드파인집성판재18T</option><option id='1370767594' value='1370767594'> 008.레드파인집성판재24T</option><option id='1370767922' value='1370767922'> 009.레드파인집성판재30T</option><option id='1445341605' value='1445341605'> 012.라디에타파인(미송)12T</option><option id='1549848076' value='1549848076'> 012.라디에타파인(미송)15T</option><option id='1370825049' value='1370825049'> 012.라디에타파인(미송)18T</option><option id='1370825075' value='1370825075'> 013.라디에타파인(미송)24T</option><option id='1370825175' value='1370825175'> 014.</option><option id='1500440490' value='1500440490'> 016.히노끼집성판재18T(B등급)-유절</option><option id='1500440506' value='1500440506'> 016.히노끼집성판재24T(B등급)-유절</option><option id='1370831465' value='1370831465'> 019.미송옹이합판4.8T</option><option id='1370832198' value='1370832198'> 020.미송옹이합판7.5T</option><option id='1370832324' value='1370832324'> 021.미송옹이합판9T</option><option id='1370832929' value='1370832929'> 022.미송옹이합판12T</option><option id='1370833348' value='1370833348'> 023.미송옹이합판15T</option><option id='1433986133' value='1433986133'> 023.미송옹이합판18T</option><option id='1370834026' value='1370834026'> 024.자작나무합판4T</option><option id='1370834257' value='1370834257'> 025.자작나무합판6.5T</option><option id='1370834372' value='1370834372'> 026.자작나무합판9T</option><option id='1370834658' value='1370834658'> 027.자작나무합판12T</option><option id='1370835015' value='1370835015'> 028.자작나무합판15T</option><option id='1370835174' value='1370835174'> 029.자작나무합판18T</option><option id='1400560455' value='1400560455'> 030.자작나무합판24T</option><option id='1400560480' value='1400560480'> 031.자작나무합판30T</option><option id='1517561381' value='1517561381'> 032.OSB 합판 SE0 11T</option><option id='1517561348' value='1517561348'> 032.OSB 합판 SE0 9T</option><option id='1440204201' value='1440204201'> 033.</option><option id='1440204111' value='1440204111'> 035.에쉬 집성판재21T</option><option id='1440204704' value='1440204704'> 036.화이트오크 집성판재 20T</option><option id='1440204837' value='1440204837'> 037.아카시아 집성판재 18T</option><option id='1517551443' value='1517551443'> 038. 고무나무 집성판재 12T</option><option id='1440205089' value='1440205089'> 038.고무나무 집성판재 18T</option><option id='1440205223' value='1440205223'> 039.고무나무 집성판재 24T</option><option id='1440205412' value='1440205412'> 040.엘더 집성판재 20T</option><option id='1479371302' value='1479371302'> 042.멀바우 집성판재 12T</option><option id='1479371431' value='1479371431'> 043.멀바우 집성판재 15T</option><option id='1479371528' value='1479371528'> 044.멀바우 집성판재 18T</option><option id='1517561571' value='1517561571'> 045.러스틱월넛 집성판재 18T</option><option id='1517561610' value='1517561610'> 045.레드오크 집성판재 18T</option><option id='1479371578' value='1479371578'> 045.멀바우 집성판재 24T</option><option id='1517561435' value='1517561435'> 045.티크 집성판재 18T</option><option id='1517561465' value='1517561465'> 045.티크 집성판재 24T</option></select><input type='hidden' id='only_wh_1370760755' value='N'><input type='hidden' id='w_low_1370760755' value='50'><input type='hidden' id='h_low_1370760755' value='50'><input type='hidden' id='w_max_1370760755' value='600'><input type='hidden' id='h_max_1370760755' value='1200'><input type='hidden' id='area_price_1370760755' value='0'><input type='hidden' id='item_price_1370760755' value='50'><input type='hidden' id='only_wh_1370761591' value='N'><input type='hidden' id='w_low_1370761591' value='50'><input type='hidden' id='h_low_1370761591' value='50'><input type='hidden' id='w_max_1370761591' value='600'><input type='hidden' id='h_max_1370761591' value='1200'><input type='hidden' id='area_price_1370761591' value='0'><input type='hidden' id='item_price_1370761591' value='64'><input type='hidden' id='only_wh_1370762757' value='N'><input type='hidden' id='w_low_1370762757' value='50'><input type='hidden' id='h_low_1370762757' value='50'><input type='hidden' id='w_max_1370762757' value='600'><input type='hidden' id='h_max_1370762757' value='1200'><input type='hidden' id='area_price_1370762757' value='0'><input type='hidden' id='item_price_1370762757' value='73'><input type='hidden' id='only_wh_1370763411' value='N'><input type='hidden' id='w_low_1370763411' value='50'><input type='hidden' id='h_low_1370763411' value='50'><input type='hidden' id='w_max_1370763411' value='600'><input type='hidden' id='h_max_1370763411' value='1200'><input type='hidden' id='area_price_1370763411' value='0'><input type='hidden' id='item_price_1370763411' value='99'><input type='hidden' id='only_wh_1370765139' value='N'><input type='hidden' id='w_low_1370765139' value='50'><input type='hidden' id='h_low_1370765139' value='50'><input type='hidden' id='w_max_1370765139' value='600'><input type='hidden' id='h_max_1370765139' value='1200'><input type='hidden' id='area_price_1370765139' value='0'><input type='hidden' id='item_price_1370765139' value='66'><input type='hidden' id='only_wh_1370766602' value='N'><input type='hidden' id='w_low_1370766602' value='50'><input type='hidden' id='h_low_1370766602' value='50'><input type='hidden' id='w_max_1370766602' value='600'><input type='hidden' id='h_max_1370766602' value='1200'><input type='hidden' id='area_price_1370766602' value='0'><input type='hidden' id='item_price_1370766602' value='78'><input type='hidden' id='only_wh_1370767000' value='N'><input type='hidden' id='w_low_1370767000' value='50'><input type='hidden' id='h_low_1370767000' value='50'><input type='hidden' id='w_max_1370767000' value='600'><input type='hidden' id='h_max_1370767000' value='1200'><input type='hidden' id='area_price_1370767000' value='0'><input type='hidden' id='item_price_1370767000' value='81'><input type='hidden' id='only_wh_1370767594' value='N'><input type='hidden' id='w_low_1370767594' value='50'><input type='hidden' id='h_low_1370767594' value='50'><input type='hidden' id='w_max_1370767594' value='600'><input type='hidden' id='h_max_1370767594' value='1200'><input type='hidden' id='area_price_1370767594' value='0'><input type='hidden' id='item_price_1370767594' value='109'><input type='hidden' id='only_wh_1370767922' value='N'><input type='hidden' id='w_low_1370767922' value='50'><input type='hidden' id='h_low_1370767922' value='50'><input type='hidden' id='w_max_1370767922' value='600'><input type='hidden' id='h_max_1370767922' value='1200'><input type='hidden' id='area_price_1370767922' value='0'><input type='hidden' id='item_price_1370767922' value='166'><input type='hidden' id='only_wh_1445341605' value=''><input type='hidden' id='w_low_1445341605' value='50'><input type='hidden' id='h_low_1445341605' value='50'><input type='hidden' id='w_max_1445341605' value='600'><input type='hidden' id='h_max_1445341605' value='1200'><input type='hidden' id='area_price_1445341605' value='0'><input type='hidden' id='item_price_1445341605' value='63'><input type='hidden' id='only_wh_1549848076' value=''><input type='hidden' id='w_low_1549848076' value='50'><input type='hidden' id='h_low_1549848076' value='50'><input type='hidden' id='w_max_1549848076' value='600'><input type='hidden' id='h_max_1549848076' value='1200'><input type='hidden' id='area_price_1549848076' value='0'><input type='hidden' id='item_price_1549848076' value='89'><input type='hidden' id='only_wh_1370825049' value='N'><input type='hidden' id='w_low_1370825049' value='50'><input type='hidden' id='h_low_1370825049' value='50'><input type='hidden' id='w_max_1370825049' value='600'><input type='hidden' id='h_max_1370825049' value='1200'><input type='hidden' id='area_price_1370825049' value='0'><input type='hidden' id='item_price_1370825049' value='82'><input type='hidden' id='only_wh_1370825075' value='N'><input type='hidden' id='w_low_1370825075' value='50'><input type='hidden' id='h_low_1370825075' value='50'><input type='hidden' id='w_max_1370825075' value='600'><input type='hidden' id='h_max_1370825075' value='1200'><input type='hidden' id='area_price_1370825075' value='0'><input type='hidden' id='item_price_1370825075' value='110'><input type='hidden' id='only_wh_1370825175' value='N'><input type='hidden' id='w_low_1370825175' value='0'><input type='hidden' id='h_low_1370825175' value='0'><input type='hidden' id='w_max_1370825175' value='0'><input type='hidden' id='h_max_1370825175' value='0'><input type='hidden' id='area_price_1370825175' value='0'><input type='hidden' id='item_price_1370825175' value='0'><input type='hidden' id='only_wh_1500440490' value=''><input type='hidden' id='w_low_1500440490' value='50'><input type='hidden' id='h_low_1500440490' value='50'><input type='hidden' id='w_max_1500440490' value='600'><input type='hidden' id='h_max_1500440490' value='1200'><input type='hidden' id='area_price_1500440490' value='0'><input type='hidden' id='item_price_1500440490' value='101'><input type='hidden' id='only_wh_1500440506' value=''><input type='hidden' id='w_low_1500440506' value='50'><input type='hidden' id='h_low_1500440506' value='50'><input type='hidden' id='w_max_1500440506' value='600'><input type='hidden' id='h_max_1500440506' value='1200'><input type='hidden' id='area_price_1500440506' value='0'><input type='hidden' id='item_price_1500440506' value='131'><input type='hidden' id='only_wh_1370831465' value='N'><input type='hidden' id='w_low_1370831465' value='50'><input type='hidden' id='h_low_1370831465' value='50'><input type='hidden' id='w_max_1370831465' value='600'><input type='hidden' id='h_max_1370831465' value='1200'><input type='hidden' id='area_price_1370831465' value='0'><input type='hidden' id='item_price_1370831465' value='27'><input type='hidden' id='only_wh_1370832198' value='N'><input type='hidden' id='w_low_1370832198' value='50'><input type='hidden' id='h_low_1370832198' value='50'><input type='hidden' id='w_max_1370832198' value='600'><input type='hidden' id='h_max_1370832198' value='1200'><input type='hidden' id='area_price_1370832198' value='0'><input type='hidden' id='item_price_1370832198' value='43'><input type='hidden' id='only_wh_1370832324' value='N'><input type='hidden' id='w_low_1370832324' value='50'><input type='hidden' id='h_low_1370832324' value='50'><input type='hidden' id='w_max_1370832324' value='600'><input type='hidden' id='h_max_1370832324' value='1200'><input type='hidden' id='area_price_1370832324' value='0'><input type='hidden' id='item_price_1370832324' value='46'><input type='hidden' id='only_wh_1370832929' value='N'><input type='hidden' id='w_low_1370832929' value='50'><input type='hidden' id='h_low_1370832929' value='50'><input type='hidden' id='w_max_1370832929' value='600'><input type='hidden' id='h_max_1370832929' value='1200'><input type='hidden' id='area_price_1370832929' value='0'><input type='hidden' id='item_price_1370832929' value='62'><input type='hidden' id='only_wh_1370833348' value='N'><input type='hidden' id='w_low_1370833348' value='50'><input type='hidden' id='h_low_1370833348' value='50'><input type='hidden' id='w_max_1370833348' value='600'><input type='hidden' id='h_max_1370833348' value='1200'><input type='hidden' id='area_price_1370833348' value='0'><input type='hidden' id='item_price_1370833348' value='77'><input type='hidden' id='only_wh_1433986133' value=''><input type='hidden' id='w_low_1433986133' value='50'><input type='hidden' id='h_low_1433986133' value='50'><input type='hidden' id='w_max_1433986133' value='600'><input type='hidden' id='h_max_1433986133' value='1200'><input type='hidden' id='area_price_1433986133' value='0'><input type='hidden' id='item_price_1433986133' value='95'><input type='hidden' id='only_wh_1370834026' value='N'><input type='hidden' id='w_low_1370834026' value='50'><input type='hidden' id='h_low_1370834026' value='50'><input type='hidden' id='w_max_1370834026' value='600'><input type='hidden' id='h_max_1370834026' value='1200'><input type='hidden' id='area_price_1370834026' value='0'><input type='hidden' id='item_price_1370834026' value='67'><input type='hidden' id='only_wh_1370834257' value='N'><input type='hidden' id='w_low_1370834257' value='50'><input type='hidden' id='h_low_1370834257' value='50'><input type='hidden' id='w_max_1370834257' value='600'><input type='hidden' id='h_max_1370834257' value='1200'><input type='hidden' id='area_price_1370834257' value='0'><input type='hidden' id='item_price_1370834257' value='85'><input type='hidden' id='only_wh_1370834372' value='N'><input type='hidden' id='w_low_1370834372' value='50'><input type='hidden' id='h_low_1370834372' value='50'><input type='hidden' id='w_max_1370834372' value='600'><input type='hidden' id='h_max_1370834372' value='1200'><input type='hidden' id='area_price_1370834372' value='0'><input type='hidden' id='item_price_1370834372' value='100'><input type='hidden' id='only_wh_1370834658' value='N'><input type='hidden' id='w_low_1370834658' value='50'><input type='hidden' id='h_low_1370834658' value='50'><input type='hidden' id='w_max_1370834658' value='600'><input type='hidden' id='h_max_1370834658' value='1200'><input type='hidden' id='area_price_1370834658' value='0'><input type='hidden' id='item_price_1370834658' value='123'><input type='hidden' id='only_wh_1370835015' value='N'><input type='hidden' id='w_low_1370835015' value='50'><input type='hidden' id='h_low_1370835015' value='50'><input type='hidden' id='w_max_1370835015' value='600'><input type='hidden' id='h_max_1370835015' value='1200'><input type='hidden' id='area_price_1370835015' value='0'><input type='hidden' id='item_price_1370835015' value='145'><input type='hidden' id='only_wh_1370835174' value='N'><input type='hidden' id='w_low_1370835174' value='50'><input type='hidden' id='h_low_1370835174' value='50'><input type='hidden' id='w_max_1370835174' value='600'><input type='hidden' id='h_max_1370835174' value='1200'><input type='hidden' id='area_price_1370835174' value='0'><input type='hidden' id='item_price_1370835174' value='167'><input type='hidden' id='only_wh_1400560455' value='N'><input type='hidden' id='w_low_1400560455' value='50'><input type='hidden' id='h_low_1400560455' value='50'><input type='hidden' id='w_max_1400560455' value='600'><input type='hidden' id='h_max_1400560455' value='1200'><input type='hidden' id='area_price_1400560455' value='0'><input type='hidden' id='item_price_1400560455' value='231'><input type='hidden' id='only_wh_1400560480' value='N'><input type='hidden' id='w_low_1400560480' value='50'><input type='hidden' id='h_low_1400560480' value='50'><input type='hidden' id='w_max_1400560480' value='600'><input type='hidden' id='h_max_1400560480' value='1200'><input type='hidden' id='area_price_1400560480' value='0'><input type='hidden' id='item_price_1400560480' value='300'><input type='hidden' id='only_wh_1517561381' value=''><input type='hidden' id='w_low_1517561381' value='50'><input type='hidden' id='h_low_1517561381' value='50'><input type='hidden' id='w_max_1517561381' value='600'><input type='hidden' id='h_max_1517561381' value='1200'><input type='hidden' id='area_price_1517561381' value='0'><input type='hidden' id='item_price_1517561381' value='53'><input type='hidden' id='only_wh_1517561348' value=''><input type='hidden' id='w_low_1517561348' value='50'><input type='hidden' id='h_low_1517561348' value='50'><input type='hidden' id='w_max_1517561348' value='600'><input type='hidden' id='h_max_1517561348' value='1200'><input type='hidden' id='area_price_1517561348' value='0'><input type='hidden' id='item_price_1517561348' value='42'><input type='hidden' id='only_wh_1440204201' value='선'><input type='hidden' id='w_low_1440204201' value='0'><input type='hidden' id='h_low_1440204201' value='0'><input type='hidden' id='w_max_1440204201' value='0'><input type='hidden' id='h_max_1440204201' value='0'><input type='hidden' id='area_price_1440204201' value='0'><input type='hidden' id='item_price_1440204201' value='0'><input type='hidden' id='only_wh_1440204111' value=''><input type='hidden' id='w_low_1440204111' value='50'><input type='hidden' id='h_low_1440204111' value='50'><input type='hidden' id='w_max_1440204111' value='900'><input type='hidden' id='h_max_1440204111' value='1700'><input type='hidden' id='area_price_1440204111' value='0'><input type='hidden' id='item_price_1440204111' value='335'><input type='hidden' id='only_wh_1440204704' value=''><input type='hidden' id='w_low_1440204704' value='50'><input type='hidden' id='h_low_1440204704' value='50'><input type='hidden' id='w_max_1440204704' value='900'><input type='hidden' id='h_max_1440204704' value='1800'><input type='hidden' id='area_price_1440204704' value='0'><input type='hidden' id='item_price_1440204704' value='335'><input type='hidden' id='only_wh_1440204837' value=''><input type='hidden' id='w_low_1440204837' value='50'><input type='hidden' id='h_low_1440204837' value='50'><input type='hidden' id='w_max_1440204837' value='600'><input type='hidden' id='h_max_1440204837' value='1200'><input type='hidden' id='area_price_1440204837' value='0'><input type='hidden' id='item_price_1440204837' value='90'><input type='hidden' id='only_wh_1517551443' value=''><input type='hidden' id='w_low_1517551443' value='50'><input type='hidden' id='h_low_1517551443' value='50'><input type='hidden' id='w_max_1517551443' value='600'><input type='hidden' id='h_max_1517551443' value='1200'><input type='hidden' id='area_price_1517551443' value='0'><input type='hidden' id='item_price_1517551443' value='89'><input type='hidden' id='only_wh_1440205089' value=''><input type='hidden' id='w_low_1440205089' value='50'><input type='hidden' id='h_low_1440205089' value='50'><input type='hidden' id='w_max_1440205089' value='600'><input type='hidden' id='h_max_1440205089' value='1200'><input type='hidden' id='area_price_1440205089' value='0'><input type='hidden' id='item_price_1440205089' value='116'><input type='hidden' id='only_wh_1440205223' value=''><input type='hidden' id='w_low_1440205223' value='50'><input type='hidden' id='h_low_1440205223' value='50'><input type='hidden' id='w_max_1440205223' value='600'><input type='hidden' id='h_max_1440205223' value='1200'><input type='hidden' id='area_price_1440205223' value='0'><input type='hidden' id='item_price_1440205223' value='156'><input type='hidden' id='only_wh_1440205412' value=''><input type='hidden' id='w_low_1440205412' value='50'><input type='hidden' id='h_low_1440205412' value='50'><input type='hidden' id='w_max_1440205412' value='600'><input type='hidden' id='h_max_1440205412' value='1200'><input type='hidden' id='area_price_1440205412' value='0'><input type='hidden' id='item_price_1440205412' value='180'><input type='hidden' id='only_wh_1479371302' value=''><input type='hidden' id='w_low_1479371302' value='50'><input type='hidden' id='h_low_1479371302' value='50'><input type='hidden' id='w_max_1479371302' value='600'><input type='hidden' id='h_max_1479371302' value='1200'><input type='hidden' id='area_price_1479371302' value='0'><input type='hidden' id='item_price_1479371302' value='149'><input type='hidden' id='only_wh_1479371431' value=''><input type='hidden' id='w_low_1479371431' value='50'><input type='hidden' id='h_low_1479371431' value='50'><input type='hidden' id='w_max_1479371431' value='600'><input type='hidden' id='h_max_1479371431' value='1200'><input type='hidden' id='area_price_1479371431' value='0'><input type='hidden' id='item_price_1479371431' value='189'><input type='hidden' id='only_wh_1479371528' value=''><input type='hidden' id='w_low_1479371528' value='50'><input type='hidden' id='h_low_1479371528' value='50'><input type='hidden' id='w_max_1479371528' value='600'><input type='hidden' id='h_max_1479371528' value='1200'><input type='hidden' id='area_price_1479371528' value='0'><input type='hidden' id='item_price_1479371528' value='206'><input type='hidden' id='only_wh_1517561571' value=''><input type='hidden' id='w_low_1517561571' value='50'><input type='hidden' id='h_low_1517561571' value='50'><input type='hidden' id='w_max_1517561571' value='600'><input type='hidden' id='h_max_1517561571' value='1200'><input type='hidden' id='area_price_1517561571' value='0'><input type='hidden' id='item_price_1517561571' value='250'><input type='hidden' id='only_wh_1517561610' value=''><input type='hidden' id='w_low_1517561610' value='50'><input type='hidden' id='h_low_1517561610' value='50'><input type='hidden' id='w_max_1517561610' value='600'><input type='hidden' id='h_max_1517561610' value='1200'><input type='hidden' id='area_price_1517561610' value='0'><input type='hidden' id='item_price_1517561610' value='182'><input type='hidden' id='only_wh_1479371578' value=''><input type='hidden' id='w_low_1479371578' value='50'><input type='hidden' id='h_low_1479371578' value='50'><input type='hidden' id='w_max_1479371578' value='600'><input type='hidden' id='h_max_1479371578' value='1200'><input type='hidden' id='area_price_1479371578' value='0'><input type='hidden' id='item_price_1479371578' value='295'><input type='hidden' id='only_wh_1517561435' value=''><input type='hidden' id='w_low_1517561435' value='50'><input type='hidden' id='h_low_1517561435' value='50'><input type='hidden' id='w_max_1517561435' value='600'><input type='hidden' id='h_max_1517561435' value='1200'><input type='hidden' id='area_price_1517561435' value='0'><input type='hidden' id='item_price_1517561435' value='187'><input type='hidden' id='only_wh_1517561465' value=''><input type='hidden' id='w_low_1517561465' value='50'><input type='hidden' id='h_low_1517561465' value='50'><input type='hidden' id='w_max_1517561465' value='600'><input type='hidden' id='h_max_1517561465' value='1200'><input type='hidden' id='area_price_1517561465' value='0'><input type='hidden' id='item_price_1517561465' value='268'></td>
				<td><input type="number" id='width' style="width: 80px;" onchange="changePrice()"/></td>
				<td><input type="number" id='height'style="width: 80px;" onchange="changePrice()"/></td>
				<td><input type="number" id='ea' style="width: 70px; ime-mode:Disabled;" onchange="changePrice()" onkeydown="return numbersonly(event, false)" max="9999"maxlength="4" oninput="maxLengthCheck(this)" /></td>
				<td><input type="number" id='price'style="width: 80px;" readonly /></td>
				<input type='hidden' id='odr_id' value='ODR1569663956'>
			</tr>
		</table>
	</div>
</div>
<br><br>

<div id='wrap'>
<!-- 견적서 확인 -->
<div id='list'>
	<div id='listFix'>
	</div>
	<div id='listSubject'><img src="image/title_01.png"></div>
	<div id='listTitle' style="height:20px;padding-top:7px;">
		<div style='float:left; padding-left: 10px;'>선택</div>
		<div style='float:left; width:300px;'>제품명</div>
		<div style='float:left; width:210px;'>재단사이즈</div>
		<div style='float:left; width:100px;padding-left:10px;'>수량</div>
		<div>가격</div>
	</div>
	<div id='listContents' style="height:200px;"></div>
	<input type='hidden' id='cargo'>
	<div id='listCargo' style="text-align:right; height:50px; display: none"><!--화물배송비 추가 작업용 필드(작업예정)--></div>
	<div id='listBottom'>
		
		<table width=780>
		<tr>
		<td width=65 align=center><img src="image/btn_02.gif" onClick="del()" style="cursor:hand"></td>
		<td width=65 align=center><img src="image/btn_02-2.gif" onClick="del_form('all')"  style="cursor:hand"></td>
		<td width=50></td>
		<td><img src="http://iveranda.cafe24.com/image/total.gif" alt="ToTal"></td>
		<td><div id='total_price'></div><div id='total_ea'></div>
			<td>천원단위</td>
			<td><div id='total_1000'></div></td>
			<td>백원단위</td><td><div id='total_100'></div></td>
		</tr>
		</table><br>
		<!--
		<div style="float:left; width: 88px; height: 32px; background-image: url('http://iveranda.iwnx.net/img/cal_btn02.png'); cursor:pointer;" onClick="del()"><img src="image/btn_02.gif"></div>
		<div style="float:left; width: 88px; height: 32px; background-image: url('http://iveranda.iwnx.net/img/cal_btn02.png'); background-position: -87px 0; cursor:pointer;" onClick="del_form('all')"><img src="image/btn_02-2.gif"></div>
		<div style="width:300px"></div>
		<div style='float:left; padding:0 3px 0 0;'><img src="http://iveranda.cafe24.com/image/total.gif" alt="ToTal">ss</div>
		<div id='total_price'></div><div id='total_ea'></div>
		-->
	</div>
</div>
<br><br>
<!-- 주문서 작성 -->
 
<div id='order'>
	<div id='orderFix'>
	</div>
	<div id='orderSubject'><img src="image/title_02.png"><span id="orderSubject"><strong>* 주문서를 꼭 판매자에게 보내주셔야 확인후 맞춤재단하여 보내드릴 수 있습니다</strong></span></div>
	<div id='orderContents'>
		<input type='hidden' id='market_name' value='A_finger'>
		<input type='hidden' id="delgubn" value=''>		
	  <table width=780 border="0" bgcolor="#f3f3f3">
	    <tr bgcolor="#f3f3f3">
	      <td bgcolor="#f3f3f3" class='style1'>* 수취인명</td>
	      <td bgcolor="#f3f3f3" class='style2'><input type="text" id='order_name'></td>

	      <td bgcolor="#f3f3f3" class='style1'>* 주문자 연락처</td>
	      <td bgcolor="#f3f3f3" class='style2'><input type="text" id='order_tel' /></td>

	      <td bgcolor="#f3f3f3" class='style1'>* 이메일</td>
	      <td bgcolor="#f3f3f3" class='style2'><input type="text" id='order_email' /></td>
        </tr>
	    <tr>
	      <td bgcolor="#f3f3f3" class='style1'>* 기타 요구사항</td>
	      <td colspan=5 bgcolor="#f3f3f3" class='style2'><textarea name="order_memo" rows='3' id='order_memo' style='width:98%'></textarea></td>
        </tr>
	    <tr>
	      <td colspan="6" bgcolor="#f3f3f3" style="width:340px; height:50px; text-align: right;">* 이메일을 기재해주시면 견적내용을 회신 받을수 있습니다 <img src="image/btn_03.gif" alt="견적확인" style='cursor:pointer;' onclick="send_mail()" /></td>
        </tr>

      </table>
	</div>
</div>
</div>
<div id='mail_confirm'></div>
</td></tr></table>
</center>
</body>
</html>
