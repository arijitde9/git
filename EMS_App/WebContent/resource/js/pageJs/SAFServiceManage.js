var myVar;
$(function() {
	doEnterOperationForRange();
	doEnterOperationForIndiv();
	$('#startRange').focus();
	$('#endRange').focus();
	$('#5').focus();
	myVar = setInterval(function(){ 
		var countTrValNew = ($("#poTable > tbody > tr[id^=newTr]").length); 
		$("#scandiv").html(countTrValNew); 
	}, 1000);
});

function doEnterOperationForRange() {
	$("input[id*='Range']")
			.unbind('keypress')
			.bind(
					'keypress',
					function(e) {
						if (e.which == 13) {
							var name = $(this).prop('name');
							var endSer = document.getElementById("endRange").value;
							if (name.indexOf('startRa') > -1) {

								if ($(this).val() == '') {
									$('#errorDivSaf')
											.html(
													'Please Provide Start Simkit No / Reference No');
									$('#errorDivSaf').fadeIn(200).fadeOut(6000);
									$(this).focus();
									return false;
								} else {
									//if (endSer != "") {
										$("#endRange").focus();
										$("#endRange").select();
										return false;
									//}
								}

							} else if (name.indexOf('endRa') > -1) {
								var strtSer = document
										.getElementById("startRange").value;
								if (strtSer == '') {
									$('#errorDivSaf')
											.html(
													'Please Provide Start Simkit No / Reference No');
									$('#errorDivSaf').fadeIn(200).fadeOut(6000);
									$("#startRange").focus();
									$("#startRange").select();
									return false;
								} else {

									if ($(this).val() == '') {
										$('#errorDivSaf')
												.html(
														'Please Provide End Simkit No / Reference No');
										$('#errorDivSaf').fadeIn(200).fadeOut(
												6000);
										return false;
									}

								}

							}
							checkValid();
						}
					});

}

function doEnterOperationForIndiv() {

	$('#range')
			.unbind('keypress')
			.bind(
					'keypress',
					function(e) {

						if (e.which == 13) {
							var name = $(this).prop('name');
							var a = document.getElementById("endRange").value;
							if (name.indexOf('range') > -1) {

								if ($(this).val() == '') {
									$('#errorDivSaf')
											.html(
													'Please Provide  Simkit No / Reference No');
									$('#errorDivSaf').fadeIn(200).fadeOut(6000);
									$(this).focus();
									return false;
								}
							}
							checkValid();
						}
					});
}

function delRow(j) {
	var tr = 'newTr' + j;
	$(document.getElementById(tr)).remove();
	var countTrValNew = ($("#poTable > tbody > tr[id^=newTr]").length); 
	$("#scandiv").html(countTrValNew);
}

function delErrorRow(j, no) {
	$(document.getElementById(no)).remove();

}
function delTabRow(i, no1, action) {
	var tr = 'newTr' + i;
	var startNo = "";
	if (action == 'SR' || action == 'SI') {
		startNo = document.getElementById("simKitNo" + i).value;
	} else if (action == 'MR' || action == 'MI') {
		startNo = document.getElementById("msisdn" + i).value;
	}

	if (no1 == startNo) {
		$(document.getElementById(tr)).remove();
	}
}
$(function() {
	$("#rtrCodeMainDD").customselect();

});

function populatePosCodeByType() {
	var posType = $('#posTypeMain').val();
	var partner = $("#distributer").val();
	var se = $('#se').val();
	if (se == "") {
		makeAsyncManterDataCall('PosCodeByTypeForSAF', 'posType=' + posType
				+ '&partner=' + partner, 'rtrCodeMainDD');
	} else {
		makeAsyncManterDataCall('PosCodeByTypeForSAFOnSE', 'posType=' + posType
				+ '&se=' + se, 'rtrCodeMainDD');
	}

	$("#rtrCodeMainDD").customselect('destroy');
	$("#rtrCodeMainDD").customselect();

}

function clrPos() {
	var posTypeMain = $('#posTypeMain').val();
	if (posTypeMain == "") {
		return false;
	} else {
		$('#posTypeMain').val(" ");
		$("#rtrCodeMainDD").customselect('destroy');
		$("#rtrCodeMainDD").find("option").remove();
		$("#rtrCodeMainDD").append("<option value=''>Please Select</option>");
		$("#rtrCodeMainDD").customselect();
	}
}
$(document).ready(function() {

	$("#reset").click(function() {

		$("#distributer").rules('remove', 'required');
		$("#paperTypeMain").rules('remove', 'required');
		$("#rtrCodeMainDD").rules('remove', 'required');
		$("#posTypeMain").rules('remove', 'required');
		$("#salesDate").rules('remove', 'required');
		$("#noOfPapers").rules('remove', 'required');
		$("#salesDate").val('');
		$('#safsmForm').attr('action', reseturl);
		$('#safsmForm').submit();

	});

});

function populatePosNameByCode() {

	var rtrCode = $("#rtrCodeMainDD").find("option:selected").text();

	pos = rtrCode.indexOf("(") + 1;

	var code = rtrCode.slice(pos, rtrCode.lastIndexOf(")"));
	var name = rtrCode.slice(0, pos - 1);
	$('#rtrCodeMain').val(code);
	$('#rtrNameMain').val(name);

}

function PosNameByCodeResponse(resp) {
	var json = $.parseJSON(resp);
	$.each(json, function(key, val) {
		$('#rtrNameMain').val(val.partnerName);
	});
}

$(function() {

	$("#tabs").tabs();

	$("input[type=submit], button").button();
	$("#receiptDate").datepicker();
	$("#salesDate").datepicker({
		maxDate : new Date(),
	});
	$("#errorDetails").click(function() {
		$('#btnExport').show();
	});
});

function checkError() {

	if ($('#buttonShow').val() == "true") {
		$('#errorDetails').show();

	}

}
function showError() {

	$('#errorTab').toggle();
}

// date Validation
function dateValidate(e) {

	date1 = $("#salesDate").val();
	date2 = $("#receiptDate").val();

	if (Date.parse(date1) > Date.parse(date2)) {

		alert("Client Sale Date should be less than Recieved Date ");
		date1 = $("#salesDate").val('');
	}
}

// label populate
function getLabel() {
	var labelName = $("#rtrCode").val() + "|" + $("#rtrName").val() + "|"
			+ $("#paperType").val() + "|" + $("#noOfPapers").val();
	document.getElementById("labelPop").value = labelName;
}

// this prints current date
$(document).ready(function() {
	var currentTime = new Date();
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
	var year = currentTime.getFullYear();
	var popDate = (month + "/" + day + "/" + year);
	document.getElementById("receiptDate").value = popDate;

});

// validation on range

function doValidation(value) {

	if (value == 'rng') {
		$("#disp").show();
		$("#disp1").show();
		$("#dispstrat").show();
		$("#dispstrat1").show();
		$("#dispstratind").hide();
		$("#dispstratind1").hide();

	}

	else {
		$("#disp").hide();
		$("#disp1").hide();
		$("#dispstratind").show();
		$("#dispstratind1").show();
		$("#dispstrat").hide();
		$("#dispstrat1").hide();
	}

}

// Message for selecting se
function shownMessage() {

	var pse = $("#se").find("option:selected").text();
	var pseVal = $("#se").val();
	if (pseVal != '')
		alert("You are creating SAF on behalf of " + pse);
}

// table populate with checking validation
function checkValid() {

	if (validateRtr()) {
		if ($('#safsmForm').valid()) {
			beforeTablePopulate();
		}
	}
}

function addBigNo(a, b) {

	var bigno = a;
	var smallno = b;

	if (a < b) {
		bigno = b;
		smallno = a;
	}
	var alength = a.length;
	var blength = b.length;

	var tempno = 0;
	var no = 1;
	var inhand = 0;
	var result = '';
	for ( var cnt = bigno.length; cnt >= 1; cnt--) {
		var nosmall = 0;

		if (no <= smallno.length)
			nosmall = parseInt(smallno.substring(smallno.length - no,
					smallno.length - tempno));

		var nobig = 0;

		nobig = parseInt(bigno.substring(bigno.length - no, bigno.length
				- tempno));
		tempno = no;
		no++;

		var tempadd = parseInt(nobig) + parseInt(nosmall) + inhand;
		if (parseInt(tempadd) >= 10) {
			inhand = 1;
			result = result + (tempadd - 10);
		} else {
			result = tempadd + result;
			inhand = 0;
		}
	}

	if (inhand == 1) {

		result = inhand + result;
	}

	return result;
}

function subBigNo(a, b) {
	var bigno = a;
	var smallno = b;

	var alength = a.length;
	var blength = b.length;

	if (alength == blength) {
		var incrm = 0;
		for ( var cnt = a.length; cnt >= 1; cnt--) {
			var fstno = parseInt(a.substring(incrm, incrm + 1));
			var sndno = parseInt(b.substring(incrm, incrm + 1));
			if (fstno == sndno) {
				incrm++;
			} else if (sndno > fstno) {
				bigno = b;
				smallno = a;
				break;
			}
		}
		var no = 1;
		var tempno = 0;
		var sres = 0;
		var inhnd = 0;
		var result = '';
		for ( var cnt = bigno.length; cnt >= 1; cnt--) {
			var nosmall = parseInt(smallno.substring(smallno.length - no,
					smallno.length - tempno));
			var nobig = parseInt(bigno.substring(bigno.length - no,
					bigno.length - tempno));
			tempno = no;
			no++;
			nosmall = nosmall + inhnd;
			if (nosmall > nobig) {
				sres = (nobig + 10) - nosmall;
				inhnd = 1;
			} else {
				sres = nobig - nosmall;
				inhnd = 0;
			}
			result = sres + result;
		}
		var noofzero = 0;
		var chkallzero = true;
		for ( var fr = 0; fr < result.length; fr++) {
			var chkzero = parseInt(result.substring(fr, fr + 1));

			if (chkzero == 0) {
				noofzero++;
			} else {
				chkallzero = false;
				break;
			}
		}
		var actualresult = 0;
		if (!chkallzero)
			actualresult = result.substring(noofzero, result.length);

	} else {
		alert('Length of both number must be same!!!');
		return false;
	}
	return actualresult;
}

function beforeTablePopulate() {
	var rwcnt = 0;
	var action = '';
	var a1, c1, st1;
	var result = 0;
	var scanrange = $('input[type=radio][id=scanrange]:checked').val();
	if (document.getElementById('scanby').checked && (scanrange == 'rng')) {
		action = 'SR';
	} else if (document.getElementById('scanby1').checked
			&& (scanrange == 'rng')) {

		action = 'MR';
	} else if (document.getElementById('scanby').checked
			&& (scanrange == 'inv')) {

		action = 'SI';
	}

	else if (document.getElementById('scanby1').checked && (scanrange == 'inv')) {

		action = 'MI';

	}

	if (scanrange == 'rng') {
		var d = "1";
		var b = document.getElementById("startRange").value;
		b = b.trim();
		var a = document.getElementById("endRange").value;
		a = a.trim();
		var alength = a.length;
		var blength = b.length;
		if (action == 'SR') {

			if (alength > 26) {
				a1 = a.substring(0, 1);
				if (a1 == '0') {
					a1 = a.substring(1);
					a = a1;
					alength = a1.length;
				}
			}
			if (blength > 26) {
				c1 = b.substring(0, 1);
				if (c1 == '0') {
					c1 = b.substring(1);
					b = c1;
					blength = c1.length;
				}
			}

			if (alength > 26) {
				// a = a.substr(2);
				a = a.substr(0, a.length - 2);

			}
			if (blength > 26) {
				// b = b.substr(2);
				b = b.substr(0, b.length - 2);
			}

			if (a == "" || b == "") {
				alert("Please Enter a Valid Range!!");
				return false;
			}

			if (a == b) {
				//alert("Please Enter Proper Range!!");
				//return false;
			}

			if (b > a) {

				alert("Start Range Should less than End Range!!");
				return false;
			}
		} else if (action == 'MR') {

			if (alength > 10) {
				a1 = a.substring(0, 1);
				if (a1 == '0') {
					a1 = a.substring(1);
					a = a1;
					alength = a1.length;
				}
			}
			if (blength > 10) {
				c1 = b.substring(0, 1);
				if (c1 == '0') {
					c1 = b.substring(1);
					b = c1;
					blength = c1.length;
				}
			}
			if (alength > 10) {
				// a = a.substr(1);
				a = a.substr(0, a.length - 1);
			}
			if (blength > 10) {
				// b = b.substr(1);
				b = b.substr(0, b.length - 1);
			}
			if (a == "" || b == "") {
				alert("Please Enter a Valid Range!!");
				return false;
			}
			if (a == b) {
				//alert("Please Enter Proper Range!!");
				//return false;
			}

			if (b > a) {

				alert("Start Range Should less than End Range!!");
				return false;
			}

		}

		result = subBigNo(a, b);
		rwcnt = addBigNo(result, d);
		count = parseInt(10, rwcnt);
		if (rwcnt > 100) {
			alert("Maximum 100 Serial No/MSISDN can be searched");
			return false;
		}
	}
	
	var paperNo = document.getElementById("noOfPapers").value;
	paperNo = paperNo.trim();
	var actualCount = 0, paperNoAct = 0;
	var countTrVal = ($("#poTable > tbody > tr").length);
	if(paperNo != "") {
		paperNoAct = parseFloat(paperNo);
		actualCount = parseFloat(countTrVal);
	}
	
	actualCount = parseFloat(actualCount) + parseFloat(result);
	if(actualCount <= paperNoAct) {
		addRowToTable(action);
		var countTrValNew = ($("#poTable > tbody > tr[id^=newTr]").length); 
		$("#scandiv").html(countTrValNew); 
	} else {
		alert('Paper Received Count should be less than or equal to No Of Papers!! Please check...');
		return false;
	}

}
function delTabRowActIndiv(no1, action, count) {

	var startNo = "";
	var i = 0;
	var j = 0;
	var rows = $('tr', poTable);
	for ( var count = 2; count < rows.length; count++) {
		var compnnt = rows[count];
		var componentID = compnnt.id;
		i = parseInt(componentID.match(/[0-9]+/)[0], 10);
		if (action == 'SR' || action == 'SI') {
			startNo = document.getElementById("simKitNo" + i).value;
		} else if (action == 'MR' || action == 'MI') {
			startNo = document.getElementById("msisdn" + i).value;
		}
		if (no1 == startNo) {
			alert("Duplicate Data");
			return false;

		}

	}

	return true;

}
function delTabRowErr(no1, action, count) {

	var startNo = "";
	var i = 0;
	var j = 0;
	var rows = $('tr', errorTab);
	for ( var count = 2; count < rows.length; count++) {
		var compnnt = rows[count];
		var componentID = compnnt.id;
		i = parseInt(componentID.match(/[0-9]+/)[0], 10);
		if (action == 'SR' || action == 'SI') {
			startNo = document.getElementById("simKitNoError" + i).value;
		} else if (action == 'MR' || action == 'MI') {
			startNo = document.getElementById("msisdnError" + i).value;
		}
		if (no1 == startNo) {
			alert("Duplicate Data");
			return false;
			// break;
		}

	}

	return true;

}
function delTabRowActRng(no1, action, count, diff) {
	var i = 0;
	var startNo = "";
	var j = 0;
	var k = 0;
	var d = "1";
	var idList = "";
	var rows = $('tr', poTable);
	for (j = 0; j < diff; j++) {
		for ( var count = 2; count < rows.length; count++) {
			var compnnt = rows[count];
			var componentID = compnnt.id;
			i = parseInt(componentID.match(/[0-9]+/)[0], 10);
			if (action == 'SR' || action == 'SI') {
				startNo = document.getElementById("simKitNo" + i).value;
			} else if (action == 'MR' || action == 'MI') {
				startNo = document.getElementById("msisdn" + i).value;
			}
			if (no1 == startNo) {
				idList = idList + "," + componentID;
			}

		}
		no1 = addBigNo(no1, d);
	}
	var del = idList.split(",");
	for (k = 1; k < del.length; k++) {
		var tr = del[k];
		$(document.getElementById(tr)).remove();

	}
}

function delTabRowErrorRng(no1, action, count, diff) {
	var startNo = "";
	var i = 0;
	var j = 0;
	var k = 0;
	var d = "1";
	var idList = "";
	var rows = $('tr', errorTab);
	for (j = 0; j < diff; j++) {
		for ( var count = 2; count < rows.length; count++) {
			var compnnt = rows[count];
			var componentID = compnnt.id;
			i = parseInt(componentID.match(/[0-9]+/)[0], 10);
			if (action == 'SR' || action == 'SI') {
				startNo = document.getElementById("simKitNoError" + i).value;
			} else if (action == 'MR' || action == 'MI') {
				startNo = document.getElementById("msisdnError" + i).value;
			}
			if (no1 == startNo) {
				idList = idList + "," + componentID;
			}

		}
		no1 = addBigNo(no1, d);
	}

	// return true;
	var del = idList.split(",");
	for (k = 1; k < del.length; k++) {
		var tr = del[k];
		$(document.getElementById(tr)).remove();
	}
}
/*
 * var recountRows = function() { var index = 1;
 * 
 * $("tr[id^=" + newTr + "]").each(function() { $(this).html(index); index++;
 * }); }
 */

var stTemp = "";
var enTemp = "";
var invdTemp = "";
var extremeStVal = "";
var extremeEndVal = "";
var stTemp1 = "";
var enTemp1 = "";
var invdTemp1 = "";
var extremeStVal1 = "";
var extremeEndVal1 = "";
var prePos = "";
var clpredate = "";
function addRowToTable(action) {
	var reqVal = 0;
	var indx = $('#indx').val();
	var eNo = 0;
	var a1, c1, st1;
	var sNo = document.getElementById("startRange").value;
	sNo = sNo.trim();
	var stNo = document.getElementById("range").value;
	stNo = stNo.trim();
	eNo = document.getElementById("endRange").value;
	eNo = eNo.trim();
	
	//Added By Arijit Start
	if((action == 'SR') && (sNo == eNo)) {
		stNo = sNo;
		sNo = '';
		eNo = '';
		action = 'SI';
	}
	//Added By Arijit End
	
	var pos = $("#rtrCodeMainDD").val();
	var clDate = $('#salesDate').val();
	var alength = sNo.length;
	var blength = eNo.length;
	var stlength = stNo.length;
	var noOfRowsOfActualTab = $("#poTable > tbody > tr").length;
	var reqdRowsOfActTab = 0;
	if (noOfRowsOfActualTab != "1") {
		reqdRowsOfActTab = (noOfRowsOfActualTab - 1);
		if (reqdRowsOfActTab != "1")
			reqdRowsOfActTab = parseInt(10, reqdRowsOfActTab);
	} else {
		reqdRowsOfActTab = 0;
	}

	var noOfRowsOfErrorTab = ($("#errorTab > tbody > tr").length);
	var reqdRowsOfErrTab = 0;
	if (noOfRowsOfErrorTab != "1") {
		reqdRowsOfErrTab = (noOfRowsOfErrorTab - 1);
		if (reqdRowsOfErrTab != "1")
			reqdRowsOfErrTab = parseInt(10, reqdRowsOfErrTab);

	} else {
		reqdRowsOfErrTab = 0;
	}
	if (action == 'SR' || action == 'SI') {

		if (alength > 26) {
			a1 = sNo.substring(0, 1);
			if (a1 == '0') {
				a1 = sNo.substring(1);
				sNo = a1;
				alength = a1.length;
			}
		}
		if (blength > 26) {
			c1 = eNo.substring(0, 1);
			if (c1 == '0') {
				c1 = eNo.substring(1);
				eNo = c1;
				blength = c1.length;
			}
		}
		if (stlength > 26) {
			st1 = stNo.substring(0, 1);
			if (st1 == '0') {
				st1 = stNo.substring(1);
				stNo = st1;
				stlength = st1.length;
			}

		}
		if (alength > 26) {
			// sNo = sNo.substr(2);
			sNo = sNo.substr(0, sNo.length - 2);
			alength = sNo.length;
		}
		if (blength > 26) {
			// eNo = eNo.substr(2);
			eNo = eNo.substr(0, eNo.length - 2);
			blength = eNo.length;
		}
		if (stlength > 26) {
			// stNo = stNo.substr(2);
			stNo = stNo.substr(0, stNo.length - 2);
			stlength = stNo.length;
		}
	} else if (action == 'MR' || action == 'MI') {

		if (alength > 10) {
			a1 = sNo.substring(0, 1);
			if (a1 == '0') {
				a1 = sNo.substring(1);
				sNo = a1;
				alength = a1.length;
			}
		}
		if (blength > 10) {
			c1 = eNo.substring(0, 1);
			if (c1 == '0') {
				c1 = eNo.substring(1);
				eNo = c1;
				blength = c1.length;
			}
		}
		if (stlength > 10) {
			st1 = stNo.substring(0, 1);
			if (st1 == '0') {
				st1 = stNo.substring(1);
				stNo = st1;
				stlength = st1.length;
			}
		}
		if (alength > 10) {
			// sNo = sNo.substr(1);
			sNo = sNo.substr(0, sNo.length - 1);
			alength = sNo.length;
		}
		if (blength > 10) {
			// eNo = eNo.substr(1);
			eNo = eNo.substr(0, eNo.length - 1);
			blength = eNo.length;
		}
		if (stlength > 10) {
			// stNo = stNo.substr(1);
			stNo = stNo.substr(0, stNo.length - 1);
			stlength = stNo.length;
		}
	}
	if (action == 'SR') {
		if (alength != 26 || blength != 26) {
			alert("Not Valid Range For SIMKIT");
			return false;
		}
	} else if (action == 'SI') {
		if (stlength != 26) {
			alert("Not Valid No. For SIMKIT");
			return false;
		}
	} else if (action == 'MR') {
		if (alength != 10 || blength != 10) {
			alert("Not Valid Range For MSISDN");
			return false;
		}
	} else if (action == 'MI') {
		if (stlength != 10) {
			alert("Not Valid No. For MSISDN");
			return false;
		}
	}
	if ((prePos == pos || prePos == "")) {
		if (clpredate == "" || clpredate == clDate) {

			if (action == 'SI') {

				sNo = stNo;
				eNo = sNo;
				invdTemp = sNo;
				if (invdTemp == stTemp || invdTemp == enTemp) {
					alert("Duplicate Data");
					return false;
				} else {
					if (reqdRowsOfActTab != 0) {
						var res_act = delTabRowActIndiv(sNo, action,
								reqdRowsOfActTab);
						if (!res_act) {
							return false;
						}
					}

					if (reqdRowsOfErrTab != 0) {
						var res_error = delTabRowErr(sNo, action,
								reqdRowsOfErrTab);
						if (!res_error) {
							return false;
						}
					}

					setDataToTable(sNo, eNo, action);
				}

				invdTemp = sNo;
				enTemp = sNo;
				stTemp = sNo;
				prePos = pos;
				clpredate = clDate;
			} else if (action == 'MI') {

				sNo = stNo;
				eNo = sNo;
				invdTemp1 = sNo;
				if (invdTemp1 == stTemp1 || invdTemp1 == enTemp1) {
					alert("Duplicate Data");
					return false;
				} else {
					if (reqdRowsOfActTab != 0) {
						var res_act = delTabRowActIndiv(sNo, action,
								reqdRowsOfActTab);
						if (!res_act) {
							return false;

						}

					}

					if (reqdRowsOfErrTab != 0) {
						var res_error = delTabRowErr(sNo, action,
								reqdRowsOfErrTab);
						if (!res_error) {
							return false;
						}
					}

					setDataToTable(sNo, eNo, action);
				}

				invdTemp1 = sNo;
				enTemp1 = sNo;
				stTemp1 = sNo;
				prePos = pos;
				clpredate = clDate;
			}

			else if (action == 'SR') {
				if (stTemp != "" && enTemp != "") {

					if (sNo >= stTemp && eNo <= enTemp) {
						alert("Duplicate Range");
						return false;
					} else if (sNo < stTemp && eNo <= enTemp) {
						var d = "1";
						var i = 1;
						var result = subBigNo(stTemp, sNo);
						if (result == "1") {
							eNo = sNo;
						} else {
							result = parseInt(10, result);
							var temp = sNo;
							for (i = 1; i < result; i++) {
								var eNo = addBigNo(temp, d);
								temp = eNo;
							}
						}

						extremeStVal = sNo;

						setDataToTable(sNo, eNo, action);
					}

					else if (sNo >= stTemp && eNo > enTemp) {
						var d = "1";
						var i = 1;
						var sNo = addBigNo(enTemp, d);
						var result = subBigNo(eNo, enTemp);
						if (result == "1") {
							eNo = sNo;
						} else {
							result = parseInt(10, result);
							var temp = enTemp;
							for (i = 1; i <= result; i++) {
								var eNo = addBigNo(temp, d);
								temp = eNo;
							}
						}
						extremeEndVal = eNo;

						setDataToTable(sNo, eNo, action);

					} else if (sNo < stTemp && eNo > enTemp) {
						var i = 0;
						var d = "1";
						var sub = subBigNo(enTemp, stTemp);
						var result = addBigNo(sub, d);
						result = parseInt(10, result);
						for (i = 0; i < result; i++) {
							delRow(i);
						}
						var no1 = sNo;
						if (($("#errorTab > tbody > tr").length) > 1) {
							for (i = 0; i < result; i++) {
								delErrorRow(i, no1);
								no1 = addBigNo(no1, d);
							}
						}

						setDataToTable(sNo, eNo, action);
						extremeEndVal = eNo;
						extremeStVal = sNo;
					}
				}

				else {

					setDataToTable(sNo, eNo, action);
					extremeEndVal = eNo;
					extremeStVal = sNo;
				}
				enTemp = extremeEndVal;
				stTemp = extremeStVal;
				prePos = pos;
				clpredate = clDate;

			} else if (action == 'MR') {
				if (stTemp1 != "" && enTemp1 != "") {

					if (sNo >= stTemp1 && eNo <= enTemp1) {
						alert("Duplicate Range");
						return false;
					} else if (sNo < stTemp1 && eNo <= enTemp1) {
						var d = "1";
						var i = 1;
						;
						var result = subBigNo(stTemp1, sNo);
						if (result == "1") {
							eNo = sNo;
						} else {
							result = parseInt(10, result);
							var temp = sNo;
							for (i = 1; i < result; i++) {
								var eNo = addBigNo(temp, d);
								temp = eNo;
							}
						}
						extremeStVal1 = sNo;

						setDataToTable(sNo, eNo, action);
					}

					else if (sNo >= stTemp1 && eNo > enTemp1) {
						var d = "1";
						var i = 1;
						var sNo = addBigNo(enTemp1, d);
						var result = subBigNo(eNo, enTemp1);
						if (result == "1") {
							eNo = sNo;
						} else {
							result = parseInt(10, result);
							var temp = enTemp1;
							for (i = 1; i <= result; i++) {
								var eNo = addBigNo(temp, d);
								temp = eNo;
							}
						}

						extremeEndVal1 = eNo;

						setDataToTable(sNo, eNo, action);

					} else if (sNo < stTemp1 && eNo > enTemp1) {
						var i = 0;
						var d = "1";
						var sub = subBigNo(enTemp1, stTemp1);
						var result = addBigNo(sub, d);
						result = parseInt(10, result);
						for (i = 0; i < result; i++) {
							delRow(i);
						}
						if (($("#errorTab > tbody > tr").length) > 1) {
							reqVal = document.getElementById(sNo).innerHTML;
							for (i = 0; i < result; i++) {
								delErrorRow(i, reqVal);
								reqVal = addBigNo(reqVal, d);
							}
						}

						setDataToTable(sNo, eNo, action);
						extremeEndVal1 = eNo;
						extremeStVal1 = sNo;

					}
				} else {

					setDataToTable(sNo, eNo, action);
					extremeEndVal1 = eNo;
					extremeStVal1 = sNo;
				}
				enTemp1 = extremeEndVal1;
				stTemp1 = extremeStVal1;
				prePos = pos;
				clpredate = clDate;

			}
		} else {
			if (action == 'SI' || action == 'MI') {

				sNo = stNo;
				eNo = sNo;

				if (reqdRowsOfActTab != 0) {
					var no1 = sNo;
					delTabRowActRng(no1, action, reqdRowsOfActTab, 1);
				}

				if (reqdRowsOfErrTab != 0) {
					var no1 = sNo;
					delTabRowErrorRng(no1, action, reqdRowsOfErrTab, 1);

				}

				setDataToTable(sNo, eNo, action);
				prePos = pos;
				clpredate = clDate;
			} else if (action == 'SR' || action == 'MR') {

				var d = "1";
				var sub = subBigNo(eNo, sNo);
				var result = addBigNo(sub, d);
				result = parseInt(10, result);

				var no2 = sNo;
				if (reqdRowsOfActTab != 0) {
					delTabRowActRng(no2, action, reqdRowsOfActTab, result);
				}
				if (reqdRowsOfErrTab != 0) {
					var no1 = sNo;
					delTabRowErrorRng(no1, action, reqdRowsOfErrTab, result);

				}
				setDataToTable(sNo, eNo, action);
				prePos = pos;
				clpredate = clDate;
			}
		}
	} else {
		if (action == 'SI' || action == 'MI') {

			sNo = stNo;
			eNo = sNo;

			if (reqdRowsOfActTab != 0) {
				var no1 = sNo;
				delTabRowActRng(no1, action, reqdRowsOfActTab, 1);
			}

			if (reqdRowsOfErrTab != 0) {
				var no1 = sNo;
				delTabRowErrorRng(no1, action, reqdRowsOfErrTab, 1);

			}

			setDataToTable(sNo, eNo, action);
			prePos = pos;
			clpredate = clDate;
		} else if (action == 'SR' || action == 'MR') {

			var d = "1";
			var sub = subBigNo(eNo, sNo);
			var result = addBigNo(sub, d);
			result = parseInt(10, result);

			var no2 = sNo;
			if (reqdRowsOfActTab != 0) {
				delTabRowActRng(no2, action, reqdRowsOfActTab, result);
			}
			if (reqdRowsOfErrTab != 0) {
				var no1 = sNo;
				delTabRowErrorRng(no1, action, reqdRowsOfErrTab, result);

			}

			setDataToTable(sNo, eNo, action);
			prePos = pos;
			clpredate = clDate;
		}
	}

	$("#startRange").val("");
	$("#endRange").val("");
	$("#range").val("");
}

function setDataToTable(startRange, endRange, action) {

	$
			.getJSON(
					"getDetailsBySimKitOrMsisdn.con?startRange=" + startRange
							+ "&endRange=" + endRange + "&action=" + action
							+ "&rtrId=" + $('#rtrCodeMainDD').val()
							+ "&salesDate=" + $('#salesDate').val()
							+ "&distributer=" + $('#distributer').val(),
					function(data) {
						// parseFloat Added By Arijit
						var parsed = JSON.parse(data);
						if (parseFloat(parsed) == -99) {
							showRangeError();
						} else if (parseFloat(parsed) == -98) {
							showSerialError();
						} else if (parseFloat(parsed) == -97) {
							showScannedError();
						} else {
							$("#errdiv").html(''); //Added By Arijit
							$("#errdiv").hide();
							$.each(parsed, function(index, nodeData) {

												if (nodeData.error == false) {
													var posType = $(
															"#posTypeMain")
															.find(
																	"option:selected")
															.text();
													var rtrCode = $(
															"#rtrCodeMain")
															.val();
													var rtrName = $(
															"#rtrNameMain")
															.val();

													var salesDate = $(
															"#salesDate").val();
													var receiptDate = $(
															"#receiptDate")
															.val();
													var paperType = $(
															"#paperTypeMain")
															.find(
																	"option:selected")
															.text();
													var seId = $('#se').val();
													var paperTypeId = $(
															'#paperTypeMain')
															.val();
													var rtrId = $(
															'#rtrCodeMainDD')
															.val();
													var j = $('#indx').val();
													$('#poTable')
															.append(

																	"<tr id='newTr"
																			+ j
																			+ "'><td><input type='text' align='right' id='simKitNo"
																			+ j
																			+ "' name='simKitNo'  readonly /></td><td><input type='text' id='msisdn"
																			+ j
																			+ "' name='msisdn' readonly /></td><td><input type='text' id='productName"
																			+ j
																			+ "' name='productName' readonly /></td><td><input type='text' id='productDescription"
																			+ j
																			+ "' name='productDescription' readonly /></td><td><input type='txtboxSmall' id='receiptNo"
																			+ j
																			+ "' name='receiptNo'  /></td><td><input type='txtboxSmall' id='posType"
																			+ j
																			+ "' name='posType' readonly value='"
																			+ posType
																			+ "' /></td><td><input type='txtboxSmall' id='rtrCode"
																			+ j
																			+ "' name='rtrCode' readonly value='"
																			+ rtrCode
																			+ "'/></td><td><input type='txtboxSmall' id='rtrName"
																			+ j
																			+ "' name='rtrName' readonly value='"
																			+ rtrName
																			+ "'/></td><td><input type='txtboxSmall' class='text' id='paperType"
																			+ j
																			+ "' name='paperType' value='"
																			+ paperType
																			+ "' readonly /></td><td><input type='text' class='text' id='clientSaleDate"
																			+ j
																			+ "' name='clientSaleDate' value='"
																			+ salesDate
																			+ "' readonly /></td><td><input type='text' class='text' id='paperReceiptDate"
																			+ j
																			+ "' name='paperReceiptDate' value='"
																			+ receiptDate
																			+ "' readonly /></td>"
																			+ "<td><a href='#' class='logodelete' onclick='delRow("
																			+ j
																			+ ")'></a></td></tr>"
																			+ "<input type='hidden' name='paperTypeId' id='paperTypeId"
																			+ j
																			+ "' value='"
																			+ paperTypeId
																			+ "'/>"
																			+ "<input type='hidden' name='seId' id='seId"
																			+ j
																			+ "' value='"
																			+ seId
																			+ "'/>"
																			+ "<input type='hidden' name='rtrId' id='rtrId"
																			+ j
																			+ "' value='"
																			+ rtrId
																			+ "'/>"
																			+ "<input type='hidden' name='secondarySalesDate' id='secondarySalesDate"
																			+ j
																			+ "'/>"
																			+ "<input type='hidden' name='route' id='route"
																			+ j
																			+ "'/>"
																			+ "<input type='hidden' name='seName' id='seName"
																			+ j
																			+ "'/>"
																			+ "<input type='hidden' name='retCause' id='retCause"
																			+ j
																			+ "'/>"
																			+ "<input type='hidden' name='inventoryId' id='inventoryId"
																			+ j
																			+ "'/>");

													document
															.getElementById("productName"
																	+ j).value = nodeData.productName;
													document
															.getElementById("productDescription"
																	+ j).value = nodeData.productDescription;
													document
															.getElementById("simKitNo"
																	+ j).value = nodeData.simKitNo;
													document
															.getElementById("msisdn"
																	+ j).value = nodeData.msisdn;

													document
															.getElementById("inventoryId"
																	+ j).value = nodeData.inventoryId;
													document
															.getElementById("secondarySalesDate"
																	+ j).value = nodeData.secondarySalesDate;
													document
															.getElementById("route"
																	+ j).value = nodeData.route;
													document
															.getElementById("seName"
																	+ j).value = nodeData.seName;
													document
															.getElementById("retCause"
																	+ j).value = nodeData.retCause;
													j++;
													$('#indx').val(j);
													$(".datepick").datepicker({
														yearRange : "-10:+100",
														changeMonth : true,
														changeYear : true,
													});
													$(".datepick").addClass(
															"datepicker");
												} else {
													$('#buttonShow')
															.val("true");
													var posType = $(
															"#posTypeMain")
															.find(
																	"option:selected")
															.text();
													var rtrCode = $(
															"#rtrCodeMain")
															.val();
													var rtrName = $(
															"#rtrNameMain")
															.val();
													var salesDate = $(
															"#salesDate").val();
													var receiptDate = $(
															"#receiptDate")
															.val();
													var paperType = $(
															"#paperTypeMain")
															.find(
																	"option:selected")
															.text();
													var seId = $('#se').val();
													var paperTypeId = $(
															'#paperTypeMain')
															.val();
													var rtrId = $(
															'#rtrCodeMainDD')
															.val();

													j = $('#indxErr').val();
													$('#errorTab')
															.append(
																	"<tr id='errorTr"
																			+ j
																			+ "'><td id='"
																			+ nodeData.msisdn
																			+ "'>"
																			+ "'"
																			+ nodeData.simKitNo
																			+ "</td><td>"
																			+ nodeData.msisdn
																			+ "</td><td>"
																			+ nodeData.productName
																			+ "</td><td>"
																			+ nodeData.productDescription
																			+ "</td><td>"
																			+ posType
																			+ "</td><td>"
																			+ rtrCode
																			+ "</td><td>"
																			+ rtrName
																			+ "</td><td>"
																			+ paperType
																			+ "</td><td>"
																			+ salesDate
																			+ "</td><td>"
																			+ receiptDate
																			+ "</td><td>"
																			+ nodeData.secondarySalesDate
																			+ "</td><td>"
																			+ nodeData.seName
																			+ "</td><td>"
																			+ nodeData.route
																			+ "</td><td>"
																			+ nodeData.retCause
																			+ "</td>"
																			+ "</tr><input type='hidden' name='details["
																			+ j
																			+ "].paperTypeId' id='details["
																			+ j
																			+ "].paperTypeId' value='"
																			+ paperTypeId
																			+ "'/>"
																			+ "<input type='hidden' name='details["
																			+ j
																			+ "].seId' id='details["
																			+ j
																			+ "].seId' value='"
																			+ seId
																			+ "'/>"
																			+ "<input type='hidden' name='details["
																			+ j
																			+ "].rtrId' id='details["
																			+ j
																			+ "].rtrId' value='"
																			+ rtrId
																			+ "'/>"
																			+ "<input type='hidden' name='details["
																			+ j
																			+ "].salesDateHid' id='details["
																			+ j
																			+ "].salesDateHid' value='"
																			+ salesDate
																			+ "'/>"
																			+ "<input type='hidden' name='details["
																			+ j
																			+ "].receiptDateHid' id='details["
																			+ j
																			+ "].receiptDateHid' value='"
																			+ receiptDate
																			+ "'/>"
																			+ "<input type='hidden' name='details["
																			+ j
																			+ "].retCauseHid' id='details["
																			+ j
																			+ "].retCauseHid' value='"
																			+ nodeData.retCause
																			+ "'/>"
																			+ "<input type='hidden' name='details["
																			+ j
																			+ "].inventoryId' id='details["
																			+ j
																			+ "].inventoryId'  value='"
																			+ nodeData.inventoryId
																			+ "' />"
																			+ "<input type='hidden' id='msisdnError"
																			+ j
																			+ "' value='"
																			+ nodeData.msisdn
																			+ "'/>"
																			+ "<input type='hidden' id='simKitNoError"
																			+ j
																			+ "' value='"
																			+ nodeData.simKitNo
																			+ "'/>");

													j++;
													$('#indxErr').val(j);
												}

												checkError();
											});
							 
						}

					});
}
function validateRtr() {
	$("#errdiv1").html("");
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
	var rtrCode = $("#rtrCodeMainDD").find("option:selected").text();
	if (rtrCode == "Please Select" || rtrCode == "Select Data") {
		$('#safsmForm').valid();
		$("#errdiv1").html(
				styleMsgHeader + "Please select POS Code" + styleMsgFooter);
		return false;
	}
	return true;
}

function countValidation() {
	var paperNo = $("#noOfPapers").val();
	var actualCount = "";
	var count = ($("#poTable > tbody > tr").length);
	if (count != "1") {
		var actualCnt = (count - 1);
		if (actualCnt != "1")
			actualCount = parseInt(10, actualCnt);
		else {
			actualCount = actualCnt;
		}
		if (paperNo != "1")
			paperNo = parseInt(10, paperNo);
		if (actualCount != paperNo) {
			var msg = confirm("Paper Received Count is not same as No Of Papers!!Do You Want To Proceed?");
			if (msg == false) {
				return false;
			} else
				return true;

		} else
			return true;
	} else
		return true;
}
function validateSAF() {

	$("#errdiv").html("");
	var actualCount = "";
	var errorCount = "";
	validateRtr();
	if (countValidation()) {

		var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
				+ "<strong>Alert!</strong>";
		var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

		var count = ($("#poTable > tbody > tr").length);
		var errCount = ($("#errorTab > tbody > tr").length);
		if (count != "1") {
			var actualCnt = (count - 1);
			if (actualCnt != "1")
				actualCount = parseInt(10, actualCnt);
		} else {
			actualCount = count;
		}
		if (errCount != "1") {
			var errorCnt = (errCount - 1);
			if (errorCnt != "1")
				errorCount = parseInt(10, errorCnt);
		} else {
			errorCount = errCount;
		}
		if (actualCount == "1" && errorCount == "1") {
			$('#safsmForm').valid();
			$("#errdiv").html(
					styleMsgHeader + "Atleast One row is required"
							+ styleMsgFooter);
		}

		else {
			$("#receiptDate").prop('disabled', false);
			$('#safsmForm').attr('action', saveurl);
			$('#safsmForm').submit();

		}
	}
}
function showRangeError() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
	$("#errdiv").html(styleMsgHeader + "Not a Valid Range" + styleMsgFooter);
	$("#errdiv").show();//Added By Arijit
}
function showSerialError() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
	$("#errdiv").html(styleMsgHeader + "Not a Valid No" + styleMsgFooter);
	$("#errdiv").show();//Added By Arijit
}
function showScannedError() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
	$("#errdiv").html(styleMsgHeader + "Already Scanned SAF" + styleMsgFooter);
	$("#errdiv").show();//Added By Arijit
}

function clearTxt() {

	$("#salesDate").next().text("");

}
function populateSe() {

	var distributer = $('#distributer').val();

	makeAsyncManterDataCall('SEByDTR', 'distributer=' + distributer, 'se');

	$("#se option[value='']").text('NO SE');
}

function numeralsOnly(evt) {
	evt = (evt) ? evt : event;
	var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode
			: ((evt.which) ? evt.which : 0));
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	}
	return true;
}

$(function() {

	$("#clientSaleDate").datepicker({
		yearRange : "-10:+100",
		changeMonth : true,
		changeYear : true,
	});
	$("#clientSaleDate").addClass("datepicker");

	$("#paperReceiptDate").datepicker({
		yearRange : "-10:+100",
		changeMonth : true,
		changeYear : true,
	});
	$("#paperReceiptDate").addClass("datepicker");

	$(".datepick").datepicker({
		yearRange : "-10:+100",
		changeMonth : true,
		changeYear : true,
	});
	$(".datepick").addClass("datepicker");

});

$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	$("#safsmForm")
			.validate(
					{
						ignore : "",
						rules : {
							paperTypeMain : "required",
							salesDate : {
								required : true,
								date : true
							},

							noOfPapers : {
								required : true,
								number : true,
								max : 100,
								
							},

							posTypeMain : {
								required : true,
							},
							receiptNoTab : {
								number : true,
							},
						},

						// Specify the validation error messages
						messages : {
							paperTypeMain : {
								required : styleMsgHeader
										+ "Please enter Paper Type"
										+ styleMsgFooter,
							},
							salesDate : {
								required : styleMsgHeader
										+ "Please enter Sales Date"
										+ styleMsgFooter,
								date : styleMsgHeader
										+ "Please enter a valid Date"
										+ styleMsgFooter
							},
							noOfPapers : {
								required : styleMsgHeader
										+ "Please enter No Of Papers "
										+ styleMsgFooter,
								number : styleMsgHeader + "Should be Numeric"
										+ styleMsgFooter,
								max : styleMsgHeader
										+ "No Of Papers Should not be  more than 100"
										+ styleMsgFooter,
							},

							posTypeMain : styleMsgHeader
									+ "Please select Pos Type" + styleMsgFooter,

						},

						submitHandler : function(form) {

							form.submit();
						}
					});

});


/*function noValidation(){
	
	no=$("#noOfPapers").val();
}*/
