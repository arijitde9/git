var clpredate;
$(function() {

	$("#tabs").tabs();
	$("input[type=submit], button").button();
	$("#receiptDate").datepicker();
	$("#salesDate").datepicker();
	clpredate = $('#salesDate').val();
	$("#save").click(
			function() {

				$("#paperTypeIdMain").attr("disabled", false);
				$("#receiptDate").attr("disabled", false);

				if (!validatecheck())
					return false;
				if (countValidation()) {
					var list_ret = $("[id$='.ret1'][type=checkbox]");

					for ( var i = 0; i < list_ret.length; i++) {
						if (list_ret[i].checked == true) {
							var param = "2";
							document.getElementById("details[" + i
									+ "].indexId").value = param;

						}
					}

					$('#safupForm').submit();
					$("[id$='.ret1'][type=checkbox]").prop('checked', false);
				}
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

// populate Error Table
function populatetable() {

	var paperTypeId = $('#paperTypeIdMain').val();
	var papRecDate = $('#receiptDate').val();
	var partnerId = $('#partnerId').val();

	$
			.getJSON(
					"populatesaftable.con?action=ErrorList&paperTypeId="
							+ paperTypeId + "&receipt=" + papRecDate
							+ "&partnerId=" + partnerId,
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
																'ReturnCause',
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
																	width : 200
																},
																{
																	name : 'productDescription',
																	index : 'productDescription',
																	width : 200
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
																	index : 'rtrCode',
																	width : 100
																},
																{
																	name : 'posName',
																	index : 'rtrName',
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
	var list_ret = $("[id$='.ret1'][type=checkbox]");
	var assigned_ret = false;
	for ( var j = 0; j < list_ret.length; j++) {
		if (list_ret[j].checked == true) {
			assigned_ret = true;
			break;
		}
	}

	if (!assigned_ret) {
		var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
				+ "<strong>Alert!</strong>";
		var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
		$("#errdiv").html(
				styleMsgHeader + "No Modification Made" + styleMsgFooter);
		return false;

	}
	return true;

}

function countValidation() {
	var count = "";
	var list_ret = $("[id$='.ret1']").serializeArray();
	count = list_ret.length;
	if (count != "1") {
		count = parseInt(10, count);
	}
	var paperNo = $("#noOfPapers").val();
	if (paperNo != "1") {
		paperNo = parseInt(10, paperNo);
	}
	if (count != paperNo) {
		var msg = confirm("Paper Received Count is not same as No Of Papers!!Do You Want To Proceed?");
		if (msg == false) {
			return false;
		} else {
			return true;
		}
	} else {
		return true;
	}
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
	$('#5').focus();
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

function updatetable() {
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
	var i = 0;
	var j = 0;
	var cnt = parseInt($("#tot").val());

	var st = $("#range").val();
	st = st.trim();
	var a = $("#startRange").val();
	a = a.trim();
	var c = $("#endRange").val();
	c = c.trim();
	var paperNo = $("#noOfPapers").val();
	var alength = a.length;
	var clength = c.length;
	var stlength = st.length;
	var statusName = "COLLECTED";
	var b = "1";
	var a1, c1, st1;

	if (action == 'MR' || action == 'MI') {
		if (alength > 10) {
			a1 = a.substring(0, 1);
			if (a1 == '0') {
				a1 = a.substring(1);
				a = a1;
				alength = a1.length;
			}
		}
		if (clength > 10) {
			c1 = c.substring(0, 1);
			if (c1 == '0') {
				c1 = c.substring(1);
				c = c1;
				clength = c1.length;
			}
		}
		if (stlength > 10) {
			st1 = st.substring(0, 1);
			if (st1 == '0') {
				st1 = st.substring(1);
				st = st1;
				stlength = st1.length;
			}
		}
	}

	if (action == 'SR' || action == 'SI') {
		if (alength > 26) {
			a1 = a.substring(0, 1);
			if (a1 == '0') {
				a1 = a.substring(1);
				a = a1;
				alength = a1.length;
			}
		}
		if (clength > 26) {
			c1 = c.substring(0, 1);
			if (c1 == '0') {
				c1 = c.substring(1);
				c = c1;
				clength = c1.length;
			}
		}
		if (stlength > 26) {
			st1 = st.substring(0, 1);
			if (st1 == '0') {
				st1 = st.substring(1);
				st = st1;
				stlength = st1.length;
			}
		}
	}

	if ($("#noOfPapers").val() == "") {
		alert("please enter No of Papers");
		return false;
	}
	if (scanrange == 'rng') {
		if (action == 'SR') {

			if (alength > 26) {
				// a = a.substr(2);
				a = a.substr(0, a.length - 2);
				alength = a.length;
			}

			if (clength > 26) {
				// c = c.substr(2);
				c = c.substr(0, c.length - 2);
				clength = c.length;
			}

			if (a == "" || c == "") {
				alert("Please Enter a Valid Range!!");
				return false;
			}

			if (a == c) {
				//alert("Please Enter Proper Range!!")
				//return false;
			}
			if (a > c) {
				alert("Start Range Should less than End Range");
				return false;
			}
		} else if (action == 'MR') {
			if (alength > 10) {
				// a = a.substr(1);

				a = a.substr(0, a.length - 1);
				alength = a.length;
			}
			if (clength > 10) {
				// c = c.substr(1);
				c = c.substr(0, c.length - 1);
				clength = c.length;
			}
			if (a == "" || c == "") {
				alert("Please Enter a Valid Range!!");
				return false;
			}
			if (a == c) {
				//alert("Please Enter Proper Range!!");
				//return false;
			}

			if (a > c) {
				alert("Start Range Should less than End Range");
				return false;
			}
		}
		var ressub = subBigNo(a, c);
		rwcnt = addBigNo(ressub, b);
		count = parseInt(10, rwcnt);
	}

	if (action == 'SI') {

		if (stlength > 26) {
			// st = st.substr(2);
			st = st.substr(0, st.length - 2);
			stlength = st.length;
		}
	} else if (action == 'MI') {

		if (stlength > 10) {
			// st = st.substr(1);
			st = st.substr(0, st.length - 1);
			stlength = st.length;
		}
	}
	var x1 = 0;
	if (scanrange == 'inv' && document.getElementById('scanby').checked == true) {
		a = st;
		if (stlength != 26) {
			alert("Not Valid No. For SIMKIT");
			return false;
		}
		for (j = x1; j <= cnt - 1; j++) {

			var startNo = document
					.getElementById("details[" + j + "].simKitNo").value;

			if (a == startNo) {

				var x = document.getElementById("details[" + j + "].ret1");
				x.checked = true;
				if (x.checked == true) {
					x1 = j;
				}

				document.getElementById("details[" + j + "].clientSaleDate").value = $(
						'#salesDate').val();
				document.getElementById("details[" + j + "].statusName").value = statusName;
				break;
			}

		}
	}
	if (scanrange == 'inv'
			&& document.getElementById('scanby1').checked == true) {
		a = st;
		if (stlength != 10) {
			alert("Not Valid No. For MSISDN");
			return false;
		}
		for (j = x1; j <= cnt - 1; j++) {

			var startNo = document.getElementById("details[" + j + "].msisdn").value;
			if (a == startNo) {

				var x = document.getElementById("details[" + j + "].ret1");
				x.checked = true;
				if (x.checked == true) {
					x1 = j;
				}

				document.getElementById("details[" + j + "].clientSaleDate").value = $(
						'#salesDate').val();
				document.getElementById("details[" + j + "].statusName").value = statusName;
				break;
			}

		}
	} else if (scanrange == 'rng'
			&& document.getElementById('scanby').checked == true) {
		if (a == "" || c == "") {
			alert("Please Enter a Valid Range!!");
			return false;
		}
		if (a >= c) {
			alert("End Range Should Be Greater than Start Range!!");
			return false;
		}
		if (alength != 26 || clength != 26) {
			alert("Not Valid Range For SIMKIT");
			return false;
		}
		for (i = 0; i <= rwcnt; i++) {
			for (j = x1; j <= cnt - 1; j++) {

				var startNo = document.getElementById("details[" + j
						+ "].simKitNo").value;
				var ret = document.getElementById("details[" + j + "].ret");

				if (a == startNo) {

					var x = document.getElementById("details[" + j + "].ret1");
					x.checked = true;
					if (x.checked == true
							&& document.getElementById('scanby').checked == true) {
						x1 = j;
					} else {
						x1 = 0;
					}

					document
							.getElementById("details[" + j + "].clientSaleDate").value = $(
							'#salesDate').val();
					document.getElementById("details[" + j + "].statusName").value = statusName;
					break;
				}

			}
			if (a < c) {
				var a = addBigNo(a, b);
			} else
				break;

		}
	}

	else if (scanrange == 'rng'
			&& document.getElementById('scanby1').checked == true) {
		if (a == "" || c == "") {
			alert("Please Enter a Valid Range!!");
			return false;
		}
		if (a >= c) {
			alert("End Range Should Be Greater than Start Range!!");
			return false;
		}
		if (alength != 10 || clength != 10) {
			alert("Not Valid Range For MSISDN");
			return false;
		}
		for (i = 0; i <= rwcnt; i++) {
			for (j = x1; j <= cnt - 1; j++) {

				var startNo = document.getElementById("details[" + j
						+ "].msisdn").value;
				var ret = document.getElementById("details[" + j + "].ret");

				if (a == startNo) {

					var x = document.getElementById("details[" + j + "].ret1");
					x.checked = true;
					if (x.checked == true
							&& document.getElementById('scanby').checked == true) {
						x1 = j;
					} else {
						x1 = 0;
					}

					document
							.getElementById("details[" + j + "].clientSaleDate").value = $(
							'#salesDate').val();
					document.getElementById("details[" + j + "].statusName").value = statusName;
					break;
				}

			}
			if (a < c) {
				var a = addBigNo(a, b);
			} else
				break;

		}
	}
	$("#startRange").val("");
	$("#endRange").val("");
	$("#range").val("");

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
