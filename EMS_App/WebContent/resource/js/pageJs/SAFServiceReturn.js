var clpredate;

$(document).ready(function() {

	$("#reset").click(function() {
		$('#safsmForm').attr('action', reseturl);
		$('#safsmForm').submit();

	});

});

$(document).ready(function() {

	$("#resetSafRet").click(function() {
		$('#safretForm').attr('action', reseturl);
		$('#safretForm').submit();

	});

});

$(function() {

	$("#tabs").tabs();
	$("input[type=submit], button").button();
	$("#receiptDate").datepicker();
	$("#salesDate").datepicker();
	var indexId = "";
	clpredate = $('#salesDate').val();
	$("#save").click(function() {

		if (!validatecheck())
			return false;
		var list = $("input[name*='check']");
		var rowCount = $('#poTable tr').length;
		var cnt = (rowCount - 2);
		if (cnt != "1")
			var cnt = parseInt(10, cnt);
		$("#tot").val(cnt);
		for ( var i = 0; i < list.length; i++) {
			if (list[i].checked == true) {
				indexId = indexId + "," + i;
				$("#reqId").val(indexId);
			}
		}
		$("input[name^='clientSaleDate']").prop('disabled', false);
		$("input[name^='paperReceiptDate']").prop('disabled', false);
		$("input[name^='scanDate']").prop('disabled', false);
		$("input[name^='archieveDate']").prop('disabled', false);
		$('#safretForm').submit();
		$("[id^=ret][type=checkbox]").prop('checked', false);
	});
});

// label populate
function getLabel() {
	var labelName = $("#rtrCode").val() + "|" + $("#rtrName").val() + "|"
			+ $("#paperType").val() + "|" + $("#noOfPapers").val();
	document.getElementById("labelPop").value = labelName;
}

function getRTRNAme() {

	var value = $("select#rtrCode option").filter(":selected").val();
	$.getJSON("populateRTRName.con?rtrCode=" + value, function(data) {
		$('#rtrName').val(data.rtrName);

	});
}

function rangeCheckingForErrortab() {

	var action = '';
	var scanrange = $('input[type=radio][id=scanrange]:checked').val();
	var stNo = $("#range").val();
	stNo = stNo.trim();
	var sNo = $("#startRange").val();
	sNo = sNo.trim();
	var eNo = $("#endRange").val();
	eNo = eNo.trim();
	var alength = sNo.length;
	var blength = eNo.length;
	var stlength = stNo.length;
	var b = "1";
	var a1, c1, st1;
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

	if (action == 'MR' || action == 'MI') {
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
	}

	if (action == 'SR' || action == 'SI') {
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

	if (action == 'SR' || action == 'SI') {
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
		if (sNo == "" || eNo == "") {
			alert("Please Enter a Valid Range!!");
			return false;
		}
		if (sNo >= eNo) {
			alert("End Range Should Be Greater than Start Range!!");
			return false;
		}
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
		if (sNo == "" || eNo == "") {
			alert("Please Enter a Valid Range!!");
			return false;
		}
		if (sNo >= eNo) {
			alert("End Range Should Be Greater than Start Range!!");
			return false;
		}
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
	if (action == 'SI' || action == 'MI') {
		sNo = stNo;
		eNo = sNo;
	}
	populatetable(sNo, eNo, action);
}

// populate Error Table
function populatetable(startRange, endRange, action) {

	$
			.getJSON(
					"populatesaferrortable.con?startRange=" + startRange
							+ "&endRange=" + endRange + "&action=" + action,
					function(data) {
						var parsed = JSON.parse(data);
						$(document)
								.ready(
										function() {
											'use strict';
											var gidData = parsed, theGrid = $("#theGrid"), numberTemplate = {
												formatter : 'number',
												align : 'right',
												sorttype : 'number'
											}, horizontalScrollPosition = 0, selectedRow = null;

											var myCustomFormatterEdit = function(
													cellVal, options, rowObject) {

												return "<a class='logoedit' title='Details' onclick=\"sendtoEdit("
														+ cellVal + ")\" ></a>";

											};
											var myCustomFormatterDel = function(
													cellVal, options, rowObject) {

												return "<a class='logodelete' title='Delete' onclick=\"sendtoDelete("
														+ cellVal + ")\"></a>";

											};

											theGrid
													.jqGrid({
														datatype : 'local',
														data : gidData,
														colNames : [
																'Sim Kit No',
																'MSISDN',
																'Product Group Name',
																'Product Group Description',
																'Paper Receipt No',
																'POS Type',
																'POS Code',
																'POS Name',
																'Secondary Sales Date',
																'SE', 'Route',
																'Status',
																'Return Cause',
																'Return Reason' ],
														colModel : [

																{
																	name : 'simKit',
																	index : 'simKit',
																	width : 200
																},
																{
																	name : 'msisdn',
																	index : 'msisdn',
																	width : 100
																},
																{
																	name : 'productName',
																	index : 'productName',
																	width : 100
																},
																{
																	name : 'productDescription',
																	index : 'productDescription',
																	width : 100
																},
																{
																	name : 'receiptNo',
																	index : 'receiptNo',
																	width : 100
																},
																{
																	name : 'posType',
																	index : 'posType',
																	width : 100
																},
																{
																	name : 'posCode',
																	index : 'posCode',
																	width : 100
																},
																{
																	name : 'posName',
																	index : 'posName',
																	width : 100
																},
																{
																	name : 'secondarySalesDate',
																	index : 'secondarySalesDate',
																	width : 100
																},
																{
																	name : 'seName',
																	index : 'seName',
																	width : 100
																},
																{
																	name : 'route',
																	index : 'route',
																	width : 100
																},
																{
																	name : 'statusName',
																	index : 'statusName',
																	width : 100
																},
																{
																	name : 'retType',
																	index : 'retType',
																	width : 100
																},
																{
																	name : 'retCause',
																	index : 'retCause',
																	width : 100
																},

														],
														gridview : true,
														rownumbers : false,
														rowNum : 10,
														rowList : [ 5, 10, 15 ],
														pager : '#gridPager',
														viewrecords : true,
														multiSort : true,
														sortname : 'orderdate asc, price',
														sortorder : 'asc',
														editurl : '#',
														caption : 'View Error Details...',
														height : '100%',
														width : '1000'
													});
											jQuery("#theGrid").jqGrid('navGrid','#gridPager',{edit:false,add:false,del:false,search:true,refresh:true},
										            {},{},{},{multipleSearch:true, multipleGroup:false, showQuery: false}).navButtonAdd('#gridPager', {
										                caption: "Export to Excel",
										                buttonicon: "ui-icon-disk",
										                onClickButton: function (e) {
										                	JSONToCSVConvertorForSAF(parsed,'SAF_ERROR_LIST',true);
										                },
										                position: "last"
											
													});
										});

					});
}

function validatecheck() {

	$("#errdiv").html("");
	var list = $("input[name*='check']");
	var assigned = false;
	for ( var i = 0; i < list.length; i++) {
		if (list[i].checked == true) {
			assigned = true;
			break;
		}
	}

	if (!assigned) {
		var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
				+ "<strong>Alert!</strong>";
		var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
		$("#errdiv").html(
				styleMsgHeader + "No Modification Made" + styleMsgFooter);
		return false;

	}
	return true;

}

function checkRowByID() {

	var list = $("[id$='.ret'][type=checkbox]");
	for ( var i = 0; i < list.length; i++) {
		if (list[i].checked == true) {
			var tr = 'PoTbody' + i;

			$(document.getElementById(tr)).remove();
			populatetable();
		}
	}

}

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
function subBigNo(a, c) {
	var bigno = a;
	var smallno = c;
	var actualresult = 0;
	var alength = a.length;
	var blength = c.length;
	if (a == "" || c == "") {
		if (a != "") {
			actualresult = a;
		} else {
			actualresult = c;
		}
	} else {
		if (alength == blength) {
			var incrm = 0;
			for ( var cnt = a.length; cnt >= 1; cnt--) {
				var fstno = parseInt(a.substring(incrm, incrm + 1));
				var sndno = parseInt(c.substring(incrm, incrm + 1));
				if (fstno == sndno) {
					incrm++;
				} else if (sndno > fstno) {
					bigno = c;
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

			if (!chkallzero) {
				actualresult = result.substring(noofzero, result.length);

			}

		} else {
			alert('Length of both number must be same!!!');
			return false;
		}
	}
	return actualresult;
}
$(function() {
	doEnterOperationForRange();
	doEnterOperationForIndiv();
	$('#startRange').focus();
	$('#endRange').focus();
	$('#range').focus();
});
function doEnterOperationForRange() {
	$('#endRange').unbind('keypress').bind('keypress', function(e) {
		if (e.which == 13) {
			updatetable();
		}
	});

}
function doEnterOperationForIndiv() {

	$('#range').unbind('keypress').bind('keypress', function(e) {

		if (e.which == 13) {
			updatetable();
		}
	});
}

function delRow(j) {

	var tr = 'newTr' + j;

	$(document.getElementById(tr)).remove();

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

	// return true;
	var del = idList.split(",");
	for (k = 1; k < del.length; k++) {
		var tr = del[k];
		$(document.getElementById(tr)).remove();
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
			startNo = document.getElementById("simKitNo" + i).value;
		} else if (action == 'MR' || action == 'MI') {
			startNo = document.getElementById("msisdn" + i).value;
		}
		if (no1 == startNo) {
			alert("Duplicate Data");
			return false;
			// break;
		}

	}

	return true;

}

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

function updatetable() {
	var action = '';
	var rwcnt = 0;
	var scanrange = $('input[type=radio][id=scanrange]:checked').val();
	var i = 0;
	var j = 0;
	var d = "1";
	var cnt = parseInt($("#tot").val());
	var a1, c1, st1;
	var stNo = $("#range").val();
	stNo = stNo.trim();
	var sNo = $("#startRange").val();
	sNo = sNo.trim();
	var eNo = $("#endRange").val();
	eNo = eNo.trim();
	var alength = sNo.length;
	var blength = eNo.length;
	var stlength = stNo.length;
	var b = "1";
	var noOfRowsOfActualTab = $("#poTable > tbody > tr").length;
	var reqdRowsOfActTab = 0;
	if (noOfRowsOfActualTab != "1") {
		reqdRowsOfActTab = (noOfRowsOfActualTab - 1);
		if (reqdRowsOfActTab != "1")
			reqdRowsOfActTab = parseInt(10, reqdRowsOfActTab);
	} else {
		reqdRowsOfActTab = 0;
	}
	/*
	 * var noOfRowsOfErrorTab = ($("#errorTab > tbody > tr").length); var
	 * reqdRowsOfErrTab = 0; if (noOfRowsOfErrorTab != "1") { reqdRowsOfErrTab =
	 * (noOfRowsOfErrorTab - 1); if (reqdRowsOfErrTab != "1") reqdRowsOfErrTab =
	 * parseInt(10, reqdRowsOfErrTab); } else { reqdRowsOfErrTab = 0; }
	 */

	/*
	 * if (alength > 26) { //sNo = sNo.substr(2); sNo = sNo.substr(0, sNo.length -
	 * 2); alength = sNo.length; } if (blength > 26) { //eNo = eNo.substr(2);
	 * eNo = eNo.substr(0, eNo.length - 2); blength = eNo.length; } if (stlength >
	 * 26) { //stNo = stNo.substr(2); stNo = stNo.substr(0, stNo.length - 2);
	 * stlength = stNo.length; }
	 */

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
		
		var result = subBigNo(eNo, sNo);
		rwcnt = addBigNo(result, d);
		count = parseInt(10, rwcnt);
		if (rwcnt > 100) {
			alert("Maximum 100 Serial No/MSISDN can be searched");
			return false;
		}
	}
	

	if (action == 'MR' || action == 'MI') {
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
	}

	if (action == 'SR' || action == 'SI') {
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
		if (sNo == "" || eNo == "") {
			alert("Please Enter a Valid Range!!");
			return false;
		}
		if (sNo >= eNo) {
			alert("End Range Should Be Greater than Start Range!!");
			return false;
		}
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
		if (sNo == "" || eNo == "") {
			alert("Please Enter a Valid Range!!");
			return false;
		}
		if (sNo >= eNo) {
			alert("End Range Should Be Greater than Start Range!!");
			return false;
		}
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

	if (action == 'SI') {

		sNo = stNo;
		eNo = sNo;
		invdTemp = sNo;
		if (invdTemp == stTemp || invdTemp == enTemp) {
			alert("Duplicate Data");
			return false;
		} else {
			if (reqdRowsOfActTab != 0) {
				var res_act = delTabRowActIndiv(sNo, action, reqdRowsOfActTab);
				if (!res_act) {
					return false;
				}
			}

			setDataToTable(sNo, eNo, action);
		}

		invdTemp = sNo;
		enTemp = sNo;
		stTemp = sNo;

	} else if (action == 'MI') {

		sNo = stNo;
		eNo = sNo;
		invdTemp1 = sNo;
		if (invdTemp1 == stTemp1 || invdTemp1 == enTemp1) {
			alert("Duplicate Data");
			return false;
		} else {
			if (reqdRowsOfActTab != 0) {
				var res_act = delTabRowActIndiv(sNo, action, reqdRowsOfActTab);
				if (!res_act) {
					return false;

				}

			}

			setDataToTable(sNo, eNo, action);
		}

		invdTemp1 = sNo;
		enTemp1 = sNo;
		stTemp1 = sNo;

	}

	else if (action == 'SR') {
		if (stTemp != "" && enTemp != "") {

			if (sNo >= stTemp && eNo <= enTemp) {
				alert("Duplicate Range");
				return false;
			} else if (sNo < stTemp && eNo <= enTemp) {
				var d = "1";
				var i = 1;
				;
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

				setDataToTable(sNo, eNo, action);
				extremeEndVal1 = eNo;
				extremeStVal1 = sNo;

			}
		}

		else {
			if (reqdRowsOfActTab != 0) {
				var no1 = sNo;
				delTabRowActRng(no1, action, reqdRowsOfActTab, 1);
			}

			setDataToTable(sNo, eNo, action);
			extremeEndVal1 = eNo;
			extremeStVal1 = sNo;
		}
		enTemp1 = extremeEndVal1;
		stTemp1 = extremeStVal1;

	}

	$("#startRange").val("");
	$("#endRange").val("");
	$("#range").val("");
}

function setDataToTable(startRange, endRange, action) {

	$
			.getJSON(
					"getDetailsBySimKitOrMsisdnForReturn.con?startRange="
							+ startRange + "&endRange=" + endRange + "&action="
							+ action,
					function(data) {
						var parsed = JSON.parse(data);

						$
								.each(
										parsed,
										function(index, nodeData) {

											var j = $('#indx').val();
											$('#poTable')
													.append(

															"<tr id='newTr"
																	+ j
																	+ "'><td><input type='checkbox' align='right' id='ret"
																	+ j
																	+ "' name='check' </td><td><input type='text' align='right' id='simKitNo"
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
																	+ "' name='posType' readonly </td><td><input type='txtboxSmall' id='rtrCode"
																	+ j
																	+ "' name='rtrCode' readonly </td><td><input type='txtboxSmall' id='rtrName"
																	+ j
																	+ "' name='rtrName' readonly </td><td><input type='text' class='datepick' id='clientSaleDate"
																	+ j
																	+ "' name='clientSaleDate' readonly='true' disabled='true' </td><td><input type='text' class='datepick' id='paperReceiptDate"
																	+ j
																	+ "' name='paperReceiptDate' readonly='true' disabled='true' </td><td><input type='text' class='datepick' id='scanDate"
																	+ j
																	+ "' name='scanDate' readonly='true' disabled='true' </td><td><input type='text' class='datepick' id='archieveDate"
																	+ j
																	+ "' name='archieveDate' readonly='true' disabled='true' </td><td><input type='txtboxSmall' id='statusName"
																	+ j
																	+ "' name='statusName' readonly </td><td><select class='selinput' id='retType"
																	+ j
																	+ "' name='retType' >"
																	+ selstr
																	+ "</select></td><td><input type='txtboxSmall' id='retCause"
																	+ j
																	+ "' name='retCause' </td>"
																	+ "<input type='hidden' name='safId' id='safId"
																	+ j
																	+ "'/>"
																	+ "<input type='hidden' name='indexId' id='indexId"
																	+ j
																	+ "'/>"
																	+ "<input type='hidden' name='rtrId' id='rtrId"
																	+ j
																	+ "'/>"
																	+ "<input type='hidden' name='paperTypeId' id='paperTypeId"
																	+ j
																	+ "'/>"
																	+ "<input type='hidden' name='inventoryId' id='inventoryId"
																	+ j + "'/>");

											document
													.getElementById("productName"
															+ j).value = nodeData.productName;
											document
													.getElementById("productDescription"
															+ j).value = nodeData.productDescription;
											document.getElementById("simKitNo"
													+ j).value = nodeData.simKitNo;
											document.getElementById("msisdn"
													+ j).value = nodeData.msisdn;

											document
													.getElementById("inventoryId"
															+ j).value = nodeData.inventoryId;
											document
													.getElementById("paperTypeId"
															+ j).value = nodeData.paperTypeId;
											document
													.getElementById("rtrId" + j).value = nodeData.rtrId;
											document
													.getElementById("safId" + j).value = nodeData.safId;

											document.getElementById("posType"
													+ j).value = nodeData.posType;
											document.getElementById("rtrCode"
													+ j).value = nodeData.rtrCode;
											document.getElementById("rtrName"
													+ j).value = nodeData.rtrName;
											document
													.getElementById("clientSaleDate"
															+ j).value = nodeData.clientSaleDate;
											document
													.getElementById("paperReceiptDate"
															+ j).value = nodeData.paperReceiptDate;
											document.getElementById("scanDate"
													+ j).value = nodeData.scanDate;
											document
													.getElementById("archieveDate"
															+ j).value = nodeData.archieveDate;
											document
													.getElementById("statusName"
															+ j).value = nodeData.statusName;
											document.getElementById("receiptNo"
													+ j).value = nodeData.receiptNo;

											j++;
											$('#indx').val(j);
											$(".datepick").datepicker({
												yearRange : "-10:+100",
												changeMonth : true,
												changeYear : true,
											});
											$(".datepick").addClass(
													"datepicker");

										});

					});
}

// date Validation
function dateValidate() {

	date1 = $("#salesDate").val();
	date2 = $("#receiptDate").val();

	if (Date.parse(date1) > Date.parse(date2)) {

		alert("Client Sale Date should be less than Recieved Date ");
		date1 = $("#salesDate").val("");
	}
}

function clearTxt() {

	$("#salesDate").next().text("");

}
