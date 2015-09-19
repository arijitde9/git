var temp = 0;
var chkdeletedata = 'test_test';
var rowindx = 0;

$(document).ready(function() {
	// alert($('#rowcnta').val());
	temp = parseInt($('#temp').val());
	chkdeletedata = $('#chkdeletedata').val();
	rowindx = parseInt($('#rowindx').val());
});

$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	$.validator.addMethod("dateChk", function(value, element) {
		return compareDates($('#effectiveDate').val(), value);
	}, "Expiry Date should be greater than Effective Date.");

	$.validator.addMethod("loginRegex", function(value, element) {
		return this.optional(element) || /^[a-z0-9\-\_\(\)\s]+$/i.test(value);
	}, "Username must contain only letters, numbers, or dashes.");

	// Setup form validation on the #register-form element
	// ProductCreate

	$("#productFormEdit")
			.validate(
					{

						ignore : "",
						rules : {
							vendorName : "required",
							productType : "required",
							productCategory : "required",
							productHead : "required",
							productGroup : {
								required : true,
								loginRegex : true,
							},
							expiryDate : {
								dateChk : $('#expiryDate').val(),
							},

						},

						// Specify the validation error messages
						messages : {
							vendorName : styleMsgHeader
									+ "Please select Vendor Name"
									+ styleMsgFooter,
							productType : styleMsgHeader
									+ "Please select Product Type"
									+ styleMsgFooter,
							productCategory : styleMsgHeader
									+ "Please select Product Category"
									+ styleMsgFooter,
							productHead : styleMsgHeader
									+ "Please select Product Head"
									+ styleMsgFooter,
							productGroup : {
								required : styleMsgHeader
										+ "Please enter Product Group Name"
										+ styleMsgFooter,
								loginRegex : styleMsgHeader
										+ "Name should not contain special charecters"
										+ styleMsgFooter,
							},
							expiryDate : {
								dateChk : styleMsgHeader
										+ "Expiry Date should be greater than Effective Date and Present Date."
										+ styleMsgFooter,
							},

						},

						submitHandler : function(form) {

							form.submit();
						}
					});
});

function checkPriceSize(evt) {
	evt = (evt) ? evt : event;
	var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode
			: ((evt.which) ? evt.which : 0));

	if (evt.keyCode == 95 || evt.keyCode == 45) {
		return true;
	}
	if (evt.keyCode >= 48 && evt.keyCode <= 57) {
		return true;
	}
	if (evt.keyCode >= 65 && evt.keyCode <= 90) {
		return true;
	}
	if (evt.keyCode >= 97 && evt.keyCode <= 122) {
		return true;
	}

	return false;
}

function setHiddenValueDiscount(objName, id) {

	if ($('#' + objName + 'Chk' + id).is(":checked") > 0) {
		$('#' + objName + id).val("true");

		document.getElementById("primaryDiscount" + id).disabled = false;
		document.getElementById("secondaryDiscount" + id).disabled = false;
		document.getElementById("tertiaryDiscount" + id).disabled = false;
		$("#primaryDiscount" + id).removeAttr('readonly');
		$("#secondaryDiscount" + id).removeAttr('readonly');
		$("#tertiaryDiscount" + id).removeAttr('readonly');

		document.getElementById("primaryPremium" + id).disabled = false;
		document.getElementById("secondaryPremium" + id).disabled = false;
		document.getElementById("tertiaryPremium" + id).disabled = false;
		$("#primaryPremium" + id).removeAttr('readonly');
		$("#secondaryPremium" + id).removeAttr('readonly');
		$("#tertiaryPremium" + id).removeAttr('readonly');

	} else {
		$('#' + objName + id).val("false");

		document.getElementById("primaryDiscount" + id).disabled = true;
		document.getElementById("secondaryDiscount" + id).disabled = true;
		document.getElementById("tertiaryDiscount" + id).disabled = true;
		document.getElementById("primaryDiscount" + id).readonly = true;
		document.getElementById("secondaryDiscount" + id).readonly = true;
		document.getElementById("tertiaryDiscount" + id).readonly = true;

		document.getElementById("primaryPremium" + id).disabled = true;
		document.getElementById("secondaryPremium" + id).disabled = true;
		document.getElementById("tertiaryPremium" + id).disabled = true;
		document.getElementById("primaryPremium" + id).readonly = true;
		document.getElementById("secondaryPremium" + id).readonly = true;
		document.getElementById("tertiaryPremium" + id).readonly = true;

		$('#primaryDiscount' + id).val('0.0');
		$('#secondaryDiscount' + id).val('0.0');
		$('#tertiaryDiscount' + id).val('0.0');

		$('#primaryPremium' + id).val('0.0');
		$('#secondaryPremium' + id).val('0.0');
		$('#tertiaryPremium' + id).val('0.0');

	}
}

function setHiddenValue(objName, id) {
	var i = $('#indx1').val() - 1;
	if ($('#' + objName + 'Chk' + id).is(":checked") > 0) {
		$('#' + objName + id).val("true");
	} else {
		$('#' + objName + id).val("false");
	}
}

function setHiddenValueEnabled(objName, id) {
	var i = $('#indx1').val() - 1;
	if ($('#' + objName + 'Chk' + id).is(":checked") > 0) {
		$('#' + objName + id).val("true");
	} else {
		$('#' + objName + id).val("false");

		$('#poEnabledChk' + id).removeAttr('checked');
		$('#poEnabledChk' + id).val("false");
		$('#poEnabled' + id).val("false");
	}
}

function addRow() {

	$('span[id^="validation1"]').empty();

	var i = $("[id^='newTr']").size();
	i = parseInt(i) + temp;

	if ($("[id^='newTr']").size() == $("[id^='viewTr']").size())
		var x = $("[id^='viewTr']").last();
	else
		var x = $("[id^='newTr']").last();

	if (x.html() == undefined) {

		x = $('#poTable tr:last');
	}

	x
			.after('<tr id="newTr'
					+ i
					+ '"> <td></td> <td><input type="text"  class="txtboxMedium" id="productCode'
					+ i
					+ '" name="productCode" maxlength="30"  onkeypress="return alphanumeralsOnlyCode()" onblur="checkDupCode('
					+ i
					+ ')"/></td><td><input type="text"  class="txtboxMedium" id="productName'
					+ i
					+ '" name="productName" maxlength="50"  onkeypress="return alphanumeralsOnly()"/></td> '
					+ '<td align="center"><input type="checkbox"  id="enabledChk'
					+ i
					+ '" name="enabledChk" onchange="setHiddenValueEnabled(\'enabled\','
					+ i
					+ ')" /><input type="hidden" id="enabled'
					+ i
					+ '" name="enabled" value=""/></td >'
					+ '<td align="center"><input type="checkBox"  id="poEnabledChk'
					+ i
					+ '" name="poEnabledChk" onchange="setHiddenValue(\'poEnabled\','
					+ i
					+ ')" /><input type="hidden" id="poEnabled'
					+ i
					+ '" name="poEnabled" value=""/></td> '
					+ '<td align="center"><input type="checkbox"   id="discountAllowedChk'
					+ i
					+ '" name="discountAllowedChk" onchange="setHiddenValueDiscount(\'discountAllowed\','
					+ i
					+ ')" /><input type="hidden" id="discountAllowed'
					+ i
					+ '" name="discountAllowed" value=""/></td> '
					+ '<td><input type="text"  class="txtboxSmallll" id="dtrLiftingPrice'
					+ i
					+ '" name="dtrLiftingPrice" onkeypress="return numeralsOnly(\'dtrLiftingPrice'
					+ i
					+ '\')" maxlength="9" onblur="return checkGivenPrice(\'dtrLiftingPrice'
					+ i
					+ '\',\'primaryDiscount'
					+ i
					+ '\',\'primaryPremium'
					+ i
					+ '\',\'discountAllowedChk'
					+ i
					+ '\',this)"/></td><td><input type="text"  class="txtboxSmallll" id="rtrLiftingPrice'
					+ i
					+ '" name="rtrLiftingPrice" onkeypress="return numeralsOnly(\'rtrLiftingPrice'
					+ i
					+ '\')" maxlength="9" onblur="return checkGivenPrice(\'rtrLiftingPrice'
					+ i
					+ '\',\'secondaryDiscount'
					+ i
					+ '\',\'secondaryPremium'
					+ i
					+ '\',\'discountAllowedChk'
					+ i
					+ '\',this)"/></td><td><input type="text"  class="txtboxSmallll" id="mrp'
					+ i
					+ '" name="mrp" value="" onkeypress="return numeralsOnly(\'mrp'
					+ i
					+ '\')" maxlength="9" onblur="return checkGivenPrice(\'mrp'
					+ i
					+ '\',\'tertiaryDiscount'
					+ i
					+ '\',\'tertiaryPremium'
					+ i
					+ '\',\'discountAllowedChk'
					+ i
					+ '\',this)"/></td><td><input type="text"  class="txtboxSmallll" id="primaryDiscount'
					+ i
					+ '" name="primaryDiscount" disabled=true onkeypress="return numeralsOnly(\'primaryDiscount'
					+ i
					+ '\')" maxlength="9" onblur="return checkGivenPrice(\'dtrLiftingPrice'
					+ i
					+ '\',\'primaryDiscount'
					+ i
					+ '\',\'primaryPremium'
					+ i
					+ '\',\'discountAllowedChk'
					+ i
					+ '\',this)"/></td><td><input type="text"  class="txtboxSmallll" id="secondaryDiscount'
					+ i
					+ '" name="secondaryDiscount" disabled=true onkeypress="return numeralsOnly(\'secondaryDiscount'
					+ i
					+ '\')" maxlength="9" onblur="return checkGivenPrice(\'rtrLiftingPrice'
					+ i
					+ '\',\'secondaryDiscount'
					+ i
					+ '\',\'secondaryPremium'
					+ i
					+ '\',\'discountAllowedChk'
					+ i
					+ '\',this)"/></td><td><input type="text"  class="txtboxSmallll" id="tertiaryDiscount'
					+ i
					+ '" name="tertiaryDiscount" disabled=true onkeypress="return numeralsOnly(\'tertiaryDiscount'
					+ i
					+ '\')" maxlength="9" onblur="return checkGivenPrice(\'mrp'
					+ i
					+ '\',\'tertiaryDiscount'
					+ i
					+ '\',\'tertiaryPremium'
					+ i
					+ '\',\'discountAllowedChk'
					+ i
					+ '\',this)"/></td><td><input type="text"  class="txtboxSmallll" id="primaryPremium'
					+ i
					+ '" name="primaryPremium" disabled=true onkeypress="return numeralsOnly(\'primaryPremium'
					+ i
					+ '\')" maxlength="9" onblur="return checkGivenPrice(\'dtrLiftingPrice'
					+ i
					+ '\',\'primaryDiscount'
					+ i
					+ '\',\'primaryPremium'
					+ i
					+ '\',\'discountAllowedChk'
					+ i
					+ '\',this)"/></td><td><input type="text"  class="txtboxSmallll" id="secondaryPremium'
					+ i
					+ '" name="secondaryPremium" disabled=true onkeypress="return numeralsOnly(\'secondaryPremium'
					+ i
					+ '\')" maxlength="9" onblur="return checkGivenPrice(\'rtrLiftingPrice'
					+ i
					+ '\',\'secondaryDiscount'
					+ i
					+ '\',\'secondaryPremium'
					+ i
					+ '\',\'discountAllowedChk'
					+ i
					+ '\',this)"/></td><td><input type="text"  class="txtboxSmallll" id="tertiaryPremium'
					+ i
					+ '" name="tertiaryPremium" disabled=true onkeypress="return numeralsOnly(\'tertiaryPremium'
					+ i
					+ '\')" maxlength="9" onblur="return checkGivenPrice(\'mrp'
					+ i
					+ '\',\'tertiaryDiscount'
					+ i
					+ '\',\'tertiaryPremium'
					+ i
					+ '\',\'discountAllowedChk'
					+ i
					+ '\',this)"/></td><td><input type="text"  class="datepickerSmall" id="prodEffectiveDate'
					+ i
					+ '" name="prodEffectiveDate" onclick="setdefaultval(this)" onchange="checkEffectiveDate('
					+ i
					+ ')" readonly="true" /></td><td><input type="text"  class="datepickerSmall" id="prodExpiryDate'
					+ i
					+ '" name="prodExpiryDate" onclick="setdefaultval(this)" onchange="checkExpiryDate('
					+ i
					+ ')" readonly="true" /></td><td></td><td><a href="#" id="addPrice'
					+ i
					+ '" name="addprice"></a></td><td><a href="#" class="logodeletee" onclick="delRow('
					+ i
					+ ')"></a></td><input type="hidden" id="itemId'
					+ i
					+ '" name="itemId" value=""/><input type="hidden" id="isNewPrice'
					+ i
					+ '" name="isNewPrice" value=""/><input type="hidden" id="isDelete'
					+ i + '" name="isDelete" value=""/></tr>');

	$("#prodEffectiveDate" + i).datepicker({
		yearRange: "-10:+100",
		minDate : new Date(),
		maxDate : $('#expiryDate').val(),
		changeMonth : true,
		changeYear : true,
	});
	$("#prodEffectiveDate" + i).addClass("datepicker");
	$("#prodExpiryDate" + i).datepicker({
		yearRange: "-10:+100",
		minDate : new Date(),
		maxDate : $('#expiryDate').val(),
		changeMonth : true,
		changeYear : true,
	});
	$("#prodExpiryDate" + i).addClass("datepicker");

	/*
	 * $("input#prodEffectiveDate" + i).datepicker('option', 'minDate',
	 * $('#effectiveDate').val()); $("input#prodExpiryDate" +
	 * i).datepicker('option', 'maxDate', $('#expiryDate').val());
	 */

	$("#prodEffectiveDate" + i).val(today(new Date()));
	$("#prodExpiryDate" + i).val($('#expiryDate').val());

	i = Number(i) + 1;
	$('#indx1').val(i);

	var x = $("#checkHide").val();
	x = parseInt($("#checkHide").val()) + 1;
	$("input[id=checkHide]").val(x);

	rowindx++;

}

function changeProdEffectiveDate() {
	var i = $('#indx1').val();
	for (; i > -1; i--) {
		$("input#prodEffectiveDate" + i).datepicker('option', 'minDate',
				$('#effectiveDate').val());

		$("#prodEffectiveDate" + i).val($('#effectiveDate').val());

	}
}

function changeProdExpiryDate() {
	var i = $('#indx1').val();
	for (; i > -1; i--) {

		$("input#prodExpiryDate" + i).datepicker('option', 'maxDate',
				$('#expiryDate').val());
		$("#prodExpiryDate" + i).val($('#expiryDate').val());

	}
}

function checkEffectiveDate(i) {
	// var i = $('#indx1').val() - 1;

	// for (; i > -1; i--) {
	var exdate = $("#prodExpiryDate" + i).val();
	var effecdate = $("#prodEffectiveDate" + i).val();
	// alert('exdate '+exdate);
	// alert('effecdate '+effecdate);
	if (($.datepicker.parseDate('mm/dd/yy', exdate) < $.datepicker.parseDate(
			'mm/dd/yy', effecdate))) {
		alert("Expiry Date should be greater than Effective Date");

		$("#prodEffectiveDate" + i).val(temvalclick);
	}

	// }
}
var temvalclick = "";
function setdefaultval(ids) {
	temvalclick = $("#" + ids.id).val();
}
function checkExpiryDate(i) {
	// var i = $('#indx1').val() - 1;

	// for (; i > -1; i--) {
	var exdate = $("#prodExpiryDate" + i).val();
	var effecdate = $("#prodEffectiveDate" + i).val();
	// alert('exdate '+exdate);
	// alert('effecdate '+effecdate);
	if (($.datepicker.parseDate('mm/dd/yy', exdate) < $.datepicker.parseDate(
			'mm/dd/yy', effecdate))) {
		alert("Expiry Date should be greater than Effective Date");
		$("#prodExpiryDate" + i).val(temvalclick);

	}

	// }
}
/*
 * var temvalclick="";defaultValue $(document).ready(function() {
 * $('.datepicker').click(function() { alert('test'); temvalclick=$(this).val();
 * alert(temvalclick); }); });
 */

function upload_clear() {

	$('#file').replaceWith('<input name="file" type="file" id="file"/>');

}

function delRow(i) {

	if (confirm("Do you want to Delete ?")) {

		var tr = 'newTr' + i;

		if ($('#disabledStatus').val() != 'false') {
			$(document.getElementById(tr)).hide();
			$(document.getElementById('isDelete' + i)).val(true);

			var x = $("#checkHide").val();
			x = parseInt($("#checkHide").val()) - 1;
			$("input[id=checkHide]").val(x);

		} else {
			$(document.getElementById(tr)).remove();
			temp = parseInt(temp) + 1;
		}

		if (chkdeletedata == "")
			chkdeletedata = i + "_" + chkdeletedata;
		else
			chkdeletedata = chkdeletedata + "_" + i;

		return false;
	}
}

function delRow1(i) {

	if (confirm("Do you want to Delete ?")) {

		var tr = 'newTr' + i;

		/*
		 * if ($('#disabledStatus').val() != 'false') {
		 * $(document.getElementById(tr)).hide();
		 * $(document.getElementById('isDelete' + i)).val(true);
		 * 
		 * var x = $( "#checkHide" ).val(); x = parseInt($( "#checkHide"
		 * ).val())-1; $("input[id=checkHide]").val(x); } else {
		 */
		$(document.getElementById(tr)).remove();
		temp = parseInt(temp) + 1;
		// }

		/*
		 * if(chkdeletedata=="") chkdeletedata=i+"_"+chkdeletedata; else
		 * chkdeletedata=chkdeletedata+"_"+i;
		 */

		return false;
	}
}

function addRow1(i) {

	var sizeOf = $("[id^='newTr']").size();
	sizeOf = parseInt(sizeOf) + temp;
	// var i1 = $('#indx1').val();

	var expdtprev = new Date($("#prodEffectiveDate" + i).val());
	var nowdt = new Date();
	// alert(expdtprev);
	// alert(nowdt);

	// var bool=today(new Date($("#prodEffectiveDate" + i).val()))>today(new
	// Date());
	// alert(expdtprev > nowdt);

	if (expdtprev > nowdt) {
		alert('You have already created price for furture!!!');
		$("#prodEffectiveDate" + i).removeAttr('disabled');
		return false;

	}

	// $("[id^='newTr']").last().after(
	$("#newTr" + i).after(
			"<tr id='newTr"
					+ sizeOf
					+ "'>"
					+ $("#newTr" + i).html()
							.replace(new RegExp(i, "g"), sizeOf) + "</tr>");

	/*
	 * var sizeOfRad = $("[id^='lineTr']").size(); //alert(sizeOfRad)
	 * $("[id^='productTr']").last().after( "<tr id='lineTr"+sizeOfRad+"' style='display:none'>" +
	 * $("[id^='lineTr']").last().html().replace( new RegExp(sizeOfRad - 1,
	 * "g"), sizeOfRad) + "</tr>");
	 */

	// $('#lineTable'+sizeOf+' tr:gt(0)').remove();
	$("#itemId" + sizeOf).val($("#itemId" + i).val());
	$("#productCode" + sizeOf).val($("#productCode" + i).val());
	$("#productName" + sizeOf).val($("#productName" + i).val());
	$("#primaryDiscount" + sizeOf).val($("#primaryDiscount" + i).val());
	$("#secondaryDiscount" + sizeOf).val($("#secondaryDiscount" + i).val());
	$("#tertiaryDiscount" + sizeOf).val($("#tertiaryDiscount" + i).val());
	$("#primaryPremium" + sizeOf).val($("#primaryPremium" + i).val());
	$("#secondaryPremium" + sizeOf).val($("#secondaryPremium" + i).val());
	$("#tertiaryPremium" + sizeOf).val($("#tertiaryPremium" + i).val());
	$("#isNewPrice" + sizeOf).val($("#isNewPrice" + i).val());

	document.getElementById("productName" + i).disabled = true;
	// document.getElementById("prodEffectiveDate"+sizeOf).disabled = false;
	// document.getElementById("prodExpiryDate"+sizeOf).disabled = false;

	// $("prodEffectiveDate"+sizeOf).removeAttr('disabled');
	// $("prodExpiryDate"+sizeOf).removeAttr('disabled');

	// $("#prodEffectiveDate" + sizeOf).datepicker();
	$("#prodEffectiveDate" + sizeOf).removeClass('hasDatepicker');
	var t = new Date($("#prodEffectiveDate" + i).val());
	// alert(t.setDate(t.getDate() + 1));
	var efd = today(new Date(t.setDate(t.getDate() + 1)));
	// alert(efd);
	$("#prodEffectiveDate" + sizeOf).datepicker({
		yearRange : "-10:+100",
		minDate : efd,
		maxDate : $('#expiryDate').val(),
		changeMonth : true,
		changeYear : true,
	});

	$("#prodExpiryDate" + sizeOf).removeClass('hasDatepicker');
	$("#prodExpiryDate" + sizeOf).datepicker({
		yearRange : "-10:+100",
		minDate : $("#prodEffectiveDate" + i).val(),
		maxDate : $('#expiryDate').val(),
		changeMonth : true,
		changeYear : true,
	});

	changevalues(i, sizeOf);

	var x = $("#checkHide").val();
	x = parseInt($("#checkHide").val()) + 1;
	$("input[id=checkHide]").val(x);

	event.preventDefault();

}

function changevalues(i, i1) {

	var d = new Date();
	var d1 = $('#expiryDate').val();

	var tempprevexpdt = $("#prodExpiryDate" + i).val();

	// var day = d.getDate();
	// var dayminsone=d.getDate()-1;

	// var t=new Date($("#prodEffectiveDate" + i).val());
	var t = new Date();
	var neweffecdate = today(new Date(t.setDate(t.getDate() + 1)));

	var prevexpdate = today(new Date(t.setDate(t.getDate() - 1)));

	/*
	 * $("#prodExpiryDate" + i).val( d.getMonth() + 1 + '/' + d.getDate() + '/' +
	 * d.getFullYear());
	 */

	$("#prodExpiryDate" + i).val(prevexpdate);
	$("#isNewPrice" + i).val("N");
	$("#itemId" + i).val("-99");
	/*
	 * $("#newTr" + i).readOnly=true; $("#newTr" + i).disabled=true;
	 */
	$("#primaryDiscount" + i).prop('disabled', true);
	$("#secondaryDiscount" + i).prop('disabled', true);
	$("#tertiaryDiscount" + i).prop('disabled', true);
	$("#primaryDiscount" + i).prop('readOnly', true);
	$("#secondaryDiscount" + i).prop('readOnly', true);
	$("#tertiaryDiscount" + i).prop('readOnly', true);

	$("#primaryPremium" + i).prop('disabled', true);
	$("#secondaryPremium" + i).prop('disabled', true);
	$("#tertiaryPremium" + i).prop('disabled', true);
	$("#primaryPremium" + i).prop('readOnly', true);
	$("#secondaryPremium" + i).prop('readOnly', true);
	$("#tertiaryPremium" + i).prop('readOnly', true);

	$("#dtrLiftingPrice" + i).prop('disabled', true);
	$("#rtrLiftingPrice" + i).prop('disabled', true);
	$("#mrp" + i).prop('disabled', true);
	$("#dtrLiftingPrice" + i).prop('readOnly', true);
	$("#rtrLiftingPrice" + i).prop('readOnly', true);
	$("#mrp" + i).prop('readOnly', true);

	$("#enabledChk" + i).prop('disabled', true);
	$("#poEnabledChk" + i).prop('disabled', true);
	$("#discountAllowedChk" + i).prop('disabled', true);
	$("#enabledChk" + i).prop('readOnly', true);
	$("#poEnabledChk" + i).prop('readOnly', true);
	$("#discountAllowedChk" + i).prop('readOnly', true);

	$("#prodEffectiveDate" + i).prop('disabled', true);
	$("#prodExpiryDate" + i).prop('disabled', true);
	$("#prodEffectiveDate" + i).prop('readOnly', true);
	$("#prodExpiryDate" + i).prop('readOnly', true);

	$("#prodEffectiveDate" + i1).prop('disabled', false);
	$("#prodExpiryDate" + i1).prop('disabled', false);
	$("#prodEffectiveDate" + i1).prop('readOnly', false);
	$("#prodExpiryDate" + i1).prop('readOnly', false);

	// $("#productName" + i1).prop('disabled', true);

	$("#enabledChk" + i1).prop('checked', false);
	$("#poEnabledChk" + i1).prop('checked', false);
	$("#discountAllowedChk" + i1).prop('checked', false);

	$("#primaryDiscount" + i1).prop('disabled', true);
	$("#secondaryDiscount" + i1).prop('disabled', true);
	$("#tertiaryDiscount" + i1).prop('disabled', true);
	$("#primaryDiscount" + i1).prop('readOnly', true);
	$("#secondaryDiscount" + i1).prop('readOnly', true);
	$("#tertiaryDiscount" + i1).prop('readOnly', true);

	$("#primaryPremium" + i1).prop('disabled', true);
	$("#secondaryPremium" + i1).prop('disabled', true);
	$("#tertiaryPremium" + i1).prop('disabled', true);
	$("#primaryPremium" + i1).prop('readOnly', true);
	$("#secondaryPremium" + i1).prop('readOnly', true);
	$("#tertiaryPremium" + i1).prop('readOnly', true);

	$("#dtrLiftingPrice" + i1).val("");
	$("#rtrLiftingPrice" + i1).val("");
	$("#mrp" + i1).val("");
	$("#primaryDiscount" + i1).val("");
	$("#secondaryDiscount" + i1).val("");
	$("#tertiaryDiscount" + i1).val("");
	$("#primaryPremium" + i1).val("");
	$("#secondaryPremium" + i1).val("");
	$("#tertiaryPremium" + i1).val("");

	$("#isNewPrice" + i1).val("Y");
	$("#dtrLiftingPrice" + i1).val("");
	$("#rtrLiftingPrice" + i1).val("");
	$("#mrp" + i1).val("");

	// var day = d.getDate();

	/*
	 * $("#prodEffectiveDate" + i1).val( d.getMonth() + 1 + '/' + day + '/' +
	 * d.getFullYear());
	 */

	$("#prodEffectiveDate" + i1).val(neweffecdate);
	$("#prodExpiryDate" + i1).val(d1);

	// $("#prodExpiryDate" + i1).prop('readOnly', true);
	$("#prodEffectiveDate" + i1).change(
			function() {

				var changeddate = new Date($("#prodEffectiveDate" + i1).val());

				var exdate = $("#prodExpiryDate" + i1).val();
				var effecdate = $("#prodEffectiveDate" + i1).val();

				if (($.datepicker.parseDate('mm/dd/yy', exdate) > $.datepicker
						.parseDate('mm/dd/yy', effecdate))) {
					var changeddateminone = today(new Date(
							changeddate - 86400000));// today(changeddate);
					// alert(changeddateminone);

					$("#prodExpiryDate" + i).val(changeddateminone);

				}

			});
	// alert(i1);
	$("#div_del" + i1).html("");
	$("#div_del" + i1).html(
			'<a href="#" class="logodeletee" id="delRow' + i1
					+ '" name="delRow"></a>');

	var temppcode = $("#productCode" + i).val();
	$("#productCode" + i).val($("#productCode" + i).val() + "_Expired");
	// $("#productCode" + i).addClass( "fntred" );
	$("#newTr" + i).addClass("bgred");

	$("#div_add" + i).toggle();
	$("#div_add" + i1).toggle();
	$("#div_view" + i1).toggle();
	$("#div_up" + i).toggle();

	$("#div_del" + i).toggle();
	// $("#div_del" + i1).hide();
	$("#div_del" + i1).click(function dispAdd() {

		$("#div_add" + i).toggle();
		$("#div_del" + i).toggle();
		$("#prodExpiryDate" + i).val(tempprevexpdt);
		// $(document.getElementById('isDelete' + i1)).val(true);

		// $("#newTr" + i).removeAttr('disabled');
		$("#productName" + i).prop('disabled', false);

		$("#dtrLiftingPrice" + i).removeAttr('disabled');
		$("#rtrLiftingPrice" + i).removeAttr('disabled');
		$("#mrp" + i).removeAttr('disabled');
		$("#dtrLiftingPrice" + i).removeAttr('readonly');
		$("#rtrLiftingPrice" + i).removeAttr('readonly');
		$("#mrp" + i).removeAttr('readonly');

		$("#enabledChk" + i).removeAttr('readonly');
		$("#poEnabledChk" + i).removeAttr('readonly');
		$("#discountAllowedChk" + i).removeAttr('readonly');
		$("#enabledChk" + i).removeAttr('disabled');
		$("#poEnabledChk" + i).removeAttr('disabled');
		$("#discountAllowedChk" + i).removeAttr('disabled');

		if ($("#discountAllowedChk" + i).prop('checked')) {
			$("#primaryDiscount" + i).removeAttr('disabled');
			$("#secondaryDiscount" + i).removeAttr('disabled');
			$("#tertiaryDiscount" + i).removeAttr('disabled');
			$("#primaryDiscount" + i).removeAttr('readonly');
			$("#secondaryDiscount" + i).removeAttr('readonly');
			$("#tertiaryDiscount" + i).removeAttr('readonly');

			$("#primaryPremium" + i).removeAttr('disabled');
			$("#secondaryPremium" + i).removeAttr('disabled');
			$("#tertiaryPremium" + i).removeAttr('disabled');
			$("#primaryPremium" + i).removeAttr('readonly');
			$("#secondaryPremium" + i).removeAttr('readonly');
			$("#tertiaryPremium" + i).removeAttr('readonly');

			$("#newTr" + i).removeClass("bgred");

		}
		$("#productCode" + i).val(temppcode);
		$("#itemId" + i).val($("#itemId" + i1).val());

		$("#isNewPrice" + i1).val("");
		$("#isNewPrice" + i).val("");

		$('#newTr' + i1).remove();
		temp = parseInt(temp) + 1;

		if (chkdeletedata == "")
			chkdeletedata = i1 + "_" + chkdeletedata;
		else
			chkdeletedata = chkdeletedata + "_" + i1;

	});

	// for (; i1 >= 0; i1--) {
	// $("#div" + i1).hide();
	// }

}

$(document).ready(function() {
	$('#resetAll1').click(function() {

		$("#vendorName").rules('remove', 'required');
		$("#productType").rules('remove', 'required');
		$("#productCategory").rules('remove', 'required');
		$("#productHead").rules('remove', 'required');
		$("#productGroup").val("");
		$("#productGroup").rules('remove', 'required');

		$('#productFormEdit').attr('action', reseturl);
		$('#productFormEdit').submit();

	});
});
function today(date) {
	var tempdate = date;
	var days = tempdate.getDate();
	var months = tempdate.getMonth() + 1;
	var years = tempdate.getYear() + 1900;
	var defdate = months + "/" + days + "/" + years;
	return defdate;
}
var drtdefprice = "";
var rtrdefprice = "";
var mrpdefprice = "";

function checkGivenPrice(aid, did, pid, dsnt, e) {

	var apr = $('#' + aid).val();
	var discnt = $('#' + did).val();
	var pre = $('#' + pid).val();

	// alert(parseFloat(apr));
	// alert(parseFloat(discnt));
	// alert(e.defaultValue);
	if ($("#" + dsnt).prop('checked')) {
		if (parseFloat(discnt) > parseFloat('0.0')
				&& parseFloat(pre) > parseFloat('0.0')) {

			alert("Either Discount or Premium can be applicable!!!");
			// $('#'+did).val("0.0");
			// $('#'+e.id).val(e.defaultValue);
			$('#' + e.id).val('0.0');
			return false;

		}
		// if(parseFloat(pre)<=parseFloat('0.0') &&
		// parseFloat(apr)<parseFloat(discnt))
		// {
		// alert("Discount Cannot be greater than its original price!!!");
		// //$('#'+did).val("0.0");
		// $('#'+e.id).val(e.defaultValue);
		// return false;
		// }
		// if(parseFloat(discnt)<=parseFloat('0.0') &&
		// parseFloat(apr)>parseFloat(pre))
		// {
		// alert("Premium Cannot be lesser than its original price!!!");
		// //$('#'+did).val("0.0");
		// $('#'+e.id).val(e.defaultValue);
		// return false;
		// }
		return true;
	}
	return true;

}

function alphanumeralsOnlyCode(evt) {
	evt = (evt) ? evt : event;
	var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode
			: ((evt.which) ? evt.which : 0));

	if (evt.keyCode == 95 || evt.keyCode == 45) {
		return true;
	}
	if (evt.keyCode >= 48 && evt.keyCode <= 57) {
		return true;
	}
	if (evt.keyCode >= 65 && evt.keyCode <= 90) {
		return true;
	}
	if (evt.keyCode >= 97 && evt.keyCode <= 122) {
		return true;
	}

	return false;
}

function alphanumeralsOnly(evt) {
	evt = (evt) ? evt : event;
	var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode
			: ((evt.which) ? evt.which : 0));

	if (evt.keyCode == 95 || evt.keyCode == 45 || evt.keyCode == 32
			|| evt.keyCode == 40 || evt.keyCode == 41) {
		return true;
	}
	if (evt.keyCode >= 48 && evt.keyCode <= 57) {
		return true;
	}
	if (evt.keyCode >= 65 && evt.keyCode <= 90) {
		return true;
	}
	if (evt.keyCode >= 97 && evt.keyCode <= 122) {
		return true;
	}

	return false;
}

function validateForms(flags) {

	var len = 0;// $("[id^='newTr']").size();
	// alert(flags);

	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	if (flags == 'c') {
		len = rowindx;
	} else {
		len = parseInt($("[id^='newTr']").size()) + temp;
	}
	// alert(chkdeletedata);
	// alert(len);
	var spldata = chkdeletedata.split('_');
	if ((spldata.length - 2) != len) {

		for ( var i = 0; i < len; i++) {

			// alert('PName :' + document.getElementById("productCode"+
			// i).value);
			// alert('PCode :' + document.getElementById("productName"+
			// i).value);

			var bool = true;

			for ( var j = 0; j < spldata.length; j++) {

				if (i == spldata[j]) {
					bool = false;
				}

			}

			if (bool) {

				var pcode = "";
				var pname = "";

				$("#validation1").html("");

				if (document.getElementById("productCode" + i) != null)
					pcode = document.getElementById("productCode" + i).value
							.trim();

				if (document.getElementById("productName" + i) != null)
					pname = document.getElementById("productName" + i).value
							.trim();

				// alert(pcode);
				if (pcode == "") {
					$("#validation1")
							.html(
									styleMsgHeader
											+ "In Table Product Code should not be empty"
											+ styleMsgFooter);
					return false;
				} else if (pname == "") {
					$("#validation1")
							.html(
									styleMsgHeader
											+ "In Table Product Name should not be empty"
											+ styleMsgFooter);
					return false;
				}

			}
		}
	} else {

		$("#validation1").html(
				styleMsgHeader + "Atleast One Row is Required!!!"
						+ styleMsgFooter);
		return false;

	}

	return true;
}
function checkDupCode(i) {

	for ( var j = 0; j < i; j++) {

		if ($('#productCode' + j).val() == $('#productCode' + i).val()) {
			alert('Product Code Already Exist!!!');
			$('#productCode' + i).val('');
			return false;
		}

	}

}
