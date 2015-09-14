function validateCampaign() {

	var i = $('#indx1').val() - 1;
	var j = $('#indx2').val() - 1;
	var k = $('#indx3').val() - 1;

	$("#validation1").html("");
	$("#validation2").html("");
	$("#validation3").html("");
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
	// alert(rowcnta);
	if (rowcnta <= 0) {
		$("#validation1")
				.html(
						styleMsgHeader + "Atleast One row is required"
								+ styleMsgFooter);
	} else if (rowcntb <= 0) {
		$("#validation2")
				.html(
						styleMsgHeader + "Atleast One row is required"
								+ styleMsgFooter);
	} else if (rowcntc <= 0) {
		$("#validation3")
				.html(
						styleMsgHeader + "Atleast One row is required"
								+ styleMsgFooter);
	} else {
		return $('#campaignForm').valid();

	}

	/*
	 * if (document.getElementById("basicDetails[0].posCategoryTabId") ==
	 * undefined &&
	 * document.getElementById("basicDetails[0].posValueClassTabId") ==
	 * undefined && document.getElementById("basicDetails[0].posGeoClassTabId") ==
	 * undefined &&
	 * document.getElementById("basicDetails[0].marketLocationTabId") ==
	 * undefined) { $('#campaignForm').valid(); $("#validation1") .html(
	 * styleMsgHeader + "Atleast One row is required" + styleMsgFooter); } else {
	 * 
	 * for (; i > -1; i--) { if ((document.getElementById("basicDetails[" + i +
	 * "].posCategoryTabId") == null || document.getElementById("basicDetails[" +
	 * i + "].posCategoryTabId").value == null || document
	 * .getElementById("basicDetails[" + i + "].posCategoryTabId").value == '') &&
	 * 
	 * (document.getElementById("basicDetails[" + i + "].posValueClassTabId") ==
	 * null || document.getElementById("basicDetails[" + i +
	 * "].posValueClassTabId").value == null || document
	 * .getElementById("basicDetails[" + i + "].posValueClassTabId").value ==
	 * '') &&
	 * 
	 * (document.getElementById("basicDetails[" + i + "].posGeoClassTabId") ==
	 * null || document.getElementById("basicDetails[" + i +
	 * "].posGeoClassTabId").value == null || document
	 * .getElementById("basicDetails[" + i + "].posGeoClassTabId").value == '') &&
	 * 
	 * (document.getElementById("basicDetails[" + i + "].marketLocationTabId") ==
	 * null || document.getElementById("basicDetails[" + i +
	 * "].marketLocationTabId").value == null || document
	 * .getElementById("basicDetails[" + i + "].marketLocationTabId").value ==
	 * '')) { $('#campaignForm').valid(); $("#validation1").html( styleMsgHeader +
	 * "The Table should not be empty" + styleMsgFooter); } } if
	 * (document.getElementById("groupDetails[0].productTab1Id") == undefined) {
	 * $('#campaignForm').valid(); $("#validation2").html( styleMsgHeader +
	 * "Atleast One row is required" + styleMsgFooter); } else { for (; j > -1;
	 * j--) { if (document.getElementById("groupDetails[" + j +
	 * "].productTab1Id") == null || document.getElementById("groupDetails[" + j +
	 * "].productTab1Id").value == null ||
	 * document.getElementById("groupDetails[" + j + "].productTab1Id").value ==
	 * '') { $('#campaignForm').valid(); $("#validation2").html( styleMsgHeader +
	 * "The Table should not be empty" + styleMsgFooter); } } if
	 * (document.getElementById("compensationList[0].compensationTab2") ==
	 * undefined) { $('#campaignForm').valid(); $("#validation3").html(
	 * styleMsgHeader + "Atleast One row is required" + styleMsgFooter); } else {
	 * for (; k > -1; k--) { if (document.getElementById("compensationList[" + k +
	 * "].compensationTab2") == null ||
	 * document.getElementById("compensationList[" + k +
	 * "].compensationTab2").value == null ||
	 * document.getElementById("compensationList[" + k +
	 * "].compensationTab2").value == '') { $('#campaignForm').valid();
	 * $("#validation3").html( styleMsgHeader + "The Table should not be empty" +
	 * styleMsgFooter); } }
	 * 
	 * return true; } }// }
	 */
	return false;
}

$(function() {

	$("input[type=submit], button").button();

	$("#startDate").datepicker();
	$("input#startDate").datepicker('option', 'minDate', new Date());
	$("#endDate").datepicker();
	$("input#endDate").datepicker('option', 'minDate', new Date());

});
/*
 * $(document).ready(function() {
 * 
 * $("#reset").click(function() {
 * 
 * $(".ui-alert-error").hide();
 * 
 * });
 * 
 * });
 */
function returnNullToDef(str) {
	if (str != null && str.trim().length > 0)
		return str;
	else
		return 'test';
}
var rowcnta = 0;
var rowcntb = 0;
var rowcntc = 0;

var dataa = 'test_test_test_test_test_test_test,test_test_test_test_test_test_test';
var datab = 'test_test_test_test_test_test,test_test_test_test_test_test';
var datac = 'test_test_test_test_test_test,test_test_test_test_test_test';

$(document).ready(function() {
	// alert($('#rowcnta').val());
	rowcnta = parseInt($('#rowcnta').val());
	rowcntb = parseInt($('#rowcntb').val());
	rowcntc = parseInt($('#rowcntc').val());
	// alert(rowcnta);
	dataa = $('#dataa').val();
	datab = $('#datab').val();
	datac = $('#datac').val();
});

function addRowToTablea() {
	var i = rowcnta;
	/*
	 * if($('#indx1').val()!="") i=$('#indx1').val();
	 */

	// var i =0;
	var posType = $("#posType").find("option:selected").text();
	var posTypeId = $('#posType').val();

	var posCategory = $("#posCategory").find("option:selected").text();
	var posCategoryId = $('#posCategory').val();

	var posValueClass = $("#valueClass").find("option:selected").text();
	var posValueClassId = $('#valueClass').val();

	var channel = $("#channel").find("option:selected").text();
	var channelId = $("#channel").val();

	var marketHierarchy = $("#marketHierarchy").find("option:selected").text();

	var marketLocation = $("#marketLocation").find("option:selected").text();
	var marketLocationId = $('#marketLocation').val();

	var posGeoClass = $("#posGeoClass").find("option:selected").text();
	var posGeoClassId = $('#posGeoClass').val();

	$("#validation1").html("");
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	var combdata = returnNullToDef(posTypeId) + '_'
			+ returnNullToDef(posCategoryId) + '_'
			+ returnNullToDef(posValueClassId) + '_'
			+ returnNullToDef(channelId) + '_'
			+ returnNullToDef(marketHierarchy) + '_'
			+ returnNullToDef(marketLocationId) + '_'
			+ returnNullToDef(posGeoClassId);

	if (returnNullToDef(posTypeId) != 'test'
			|| returnNullToDef(posValueClassId) != 'test'
			|| returnNullToDef(marketLocationId) != 'test'
			|| returnNullToDef(posGeoClassId) != 'test') {
		if (dataa.indexOf(combdata) <= 0) {

			$('#poTable0 tr:last')
					.after(
							'<tr id="newTra'
									+ i
									+ '"><td><input type="text" readonly="true" class="txtboxMedium1" id="basicDetails['
									+ i
									+ '].posTypeTab" name="basicDetails['
									+ i
									+ '].posTypeTab" value="'
									+ posType
									+ '"/></td><td><input type="text" readonly="true" class="txtboxMedium1" id="basicDetails['
									+ i
									+ '].posCategoryTab" name="basicDetails['
									+ i
									+ '].posCategoryTab" value="'
									+ posCategory
									+ '"/></td><td><input type="text" readonly="true" class="txtboxMedium1" id="basicDetails['
									+ i
									+ '].posValueClassTab" name="basicDetails['
									+ i
									+ '].posValueClassTab" value="'
									+ posValueClass
									+ '"/></td><td><input type="text" readonly="true"class="txtboxMedium1" id="basicDetails['
									+ i
									+ '].channelTab" name="basicDetails['
									+ i
									+ '].channelTab" value="'
									+ channel
									+ '"/></td><td><input type="text" readonly="true" class="txtboxMedium1" id="basicDetails['
									+ i
									+ '].marketHierarchyTab" name="basicDetails['
									+ i
									+ '].marketHierarchyTab" value="'
									+ marketHierarchy
									+ '"/></td><td><input type="text" readonly="true" class="txtboxMedium1" id="basicDetails['
									+ i
									+ '].marketLocationTab" name="basicDetails['
									+ i
									+ '].marketLocationTab" value="'
									+ marketLocation
									+ '"/><td><input type="text" readonly="true" class="txtboxMedium1" id="basicDetails['
									+ i
									+ '].posGeoClassTab" name="basicDetails['
									+ i
									+ '].posGeoClassTab" value="'
									+ posGeoClass
									+ '"/><td><a href="#" class="logodelete" onclick="delRowTablea('
									+ i
									+ ')"></a></td><input type="hidden"  id="basicDetails['
									+ i
									+ '].posTypeTabId" name="basicDetails['
									+ i
									+ '].posTypeTabId" value="'
									+ posTypeId
									+ '"/><input type="hidden"  id="basicDetails['
									+ i
									+ '].posCategoryTabId" name="basicDetails['
									+ i
									+ '].posCategoryTabId" value="'
									+ posCategoryId
									+ '"/><input type="hidden"  id="basicDetails['
									+ i
									+ '].posValueClassTabId" name="basicDetails['
									+ i
									+ '].posValueClassTabId" value="'
									+ posValueClassId
									+ '"/><input type="hidden"  id="basicDetails['
									+ i
									+ '].posGeoClassTabId" name="basicDetails['
									+ i
									+ '].posGeoClassTabId" value="'
									+ posGeoClassId
									+ '"/><input type="hidden"  id="basicDetails['
									+ i
									+ '].marketLocationTabId" name="basicDetails['
									+ i + '].marketLocationTabId" value="'
									+ marketLocationId + '"/></tr>');
			i++;
			$('#indx1').val(i);
			rowcnta++;
			dataa = dataa + "," + combdata;
		} else {
			// alert('You have already select that Combination!');
			$("#validation1").html(
					styleMsgHeader
							+ "You have already select that Combination!"
							+ styleMsgFooter);
		}
	} else {

		// alert('Please select atleast POS Category/Value Class/Market
		// Location/POS GEO Class');
		$("#validation1")
				.html(
						styleMsgHeader
								+ "Please select atleast POS Type/Value Class/Market Location/POS GEO Class"
								+ styleMsgFooter);

	}
}
function addRowToTableb() {
	var i = rowcntb;

	/*
	 * if($('#indx2').val()!=""){ i=$('#indx2').val(); }
	 */

	var campaignGroup = $('#campaignGroup').val();

	var productHeadCam = $("#productHeadCam").find("option:selected").text();
	var productGroupCam = $("#productGroupCam").find("option:selected").text();

	var productCam = $("#productCam").find("option:selected").text();
	var productCamId = $('#productCam').val();
	var minRange = $('#minRange').val();
	var topRange = $('#topRange').val();

	var cond1 = $('#productHeadCam').val() == ""
			&& $('#productGroupCam').val() == ""
			&& $('#productCam').val() == "";
	var cond2 = $('#productHeadCam').val() != ""
			&& $('#productGroupCam').val() != ""
			&& $('#productCam').val() != "";

	if (cond1 || cond2) {

		/*
		 * var
		 * combdata=returnNullToDef(campaignGroup)+'_'+returnNullToDef(productHeadCam)+'_'+returnNullToDef(productGroupCam)+
		 * '_'+returnNullToDef(productCamId)+'_'+returnNullToDef(minRange)+'_'+returnNullToDef(topRange);
		 */

		var combdata = returnNullToDef(campaignGroup) + '_'
				+ returnNullToDef(productHeadCam) + '_'
				+ returnNullToDef(productGroupCam) + '_'
				+ returnNullToDef(productCamId) + '_' + 'test' + '_' + 'test';

		$("#validation2").html("");
		var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
				+ "<strong>Alert!</strong>";
		var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
		/*
		 * if ($('#productCamId').val() == '' || $('#minRange').val() == '' ||
		 * $('#topRange').val() == '' || $('#campaignGroup').val() == '') {
		 */
		/*
		 * if(false){ $("#validation2").html( styleMsgHeader + "Please select
		 * all the mandatory fields" + styleMsgFooter); } else {
		 */

		/*
		 * if(returnNullToDef(campaignGroup)!='test' &&
		 * returnNullToDef(productCamId)!='test' &&
		 * returnNullToDef(minRange)!='test' &&
		 * returnNullToDef(topRange)!='test'){
		 */

		if (returnNullToDef(campaignGroup) != 'test'
				&& returnNullToDef(minRange) != 'test') {

			if (datab.indexOf(combdata) <= 0) {

				$('#poTable1 tr:last')
						.after(
								'<tr id="newTrb'
										+ i
										+ '"><td><input type="text" readonly="true" class="txtboxMedium1" id="groupDetails['
										+ i
										+ '].campaignGroupTab1" name="groupDetails['
										+ i
										+ '].campaignGroupTab1" value="'
										+ campaignGroup
										+ '"/></td><td><input type="text" readonly="true" class="txtboxMedium1" id="groupDetails['
										+ i
										+ '].productHeadTab1" name="groupDetails['
										+ i
										+ '].productHeadTab1" value="'
										+ productHeadCam
										+ '"/></td><td><input type="text" readonly="true" class="txtboxMedium1" id="groupDetails['
										+ i
										+ '].productGroupTab1" name="groupDetails['
										+ i
										+ '].productGroupTab1" value="'
										+ productGroupCam
										+ '"/></td><td><input type="text" readonly="true" class="txtboxMedium1" id="groupDetails['
										+ i
										+ '].productTab1" name="groupDetails['
										+ i
										+ '].productTab1" value="'
										+ productCam
										+ '"/></td><td><input type="text" readonly="true" class="txtboxMedium1" id="groupDetails['
										+ i
										+ '].minRangeTab1" name="groupDetails['
										+ i
										+ '].minRangeTab1" value="'
										+ minRange
										+ '"/></td><td><input type="text" readonly="true" class="txtboxMedium1" id="groupDetails['
										+ i
										+ '].topRangeTab1" name="groupDetails['
										+ i
										+ '].topRangeTab1" value="'
										+ topRange
										+ '"/></td><td><a href="#" class="logodelete" onclick="delRowTableb('
										+ i
										+ ')"</a></td><input type="hidden"  id="groupDetails['
										+ i
										+ '].productTab1Id" name="groupDetails['
										+ i + '].productTab1Id" value="'
										+ productCamId + '"/></tr>');
				i++;
				$('#indx2').val(i);
				rowcntb++;
				datab = datab + "," + combdata;
			} else {
				// alert('You have already select that Combination!');
				$("#validation2").html(
						styleMsgHeader
								+ "You have already select that Combination!"
								+ styleMsgFooter);
			}
		} else {

			$("#validation2").html(
					styleMsgHeader
							+ "Please provide Campaign Group and Min Range"
							+ styleMsgFooter);
			// alert('Please provide Campaign Group,Product,Min Range,Top
			// Range!');
		}
	} else {

		alert('You have to select Product Head, Product Group, Product');
		$('#productHeadCam').val('');
		$('#productGroupCam').val('');
		$('#productCam').val('');

	}

}

function addRowToTablec() {
	var i = rowcntc;
	/*
	 * if($('#indx3').val()!=""){ i=$('#indx3').val(); }
	 */
	var productHeadCom = $("#productHeadCom").find("option:selected").text();
	var productGroupCom = $("#productGroupCom").find("option:selected").text();
	var productCom = $("#productCom").find("option:selected").text();
	var productComId = $('#productCom').val();
	var compensation = $('#compensation').val();
	var nonInventoryGift = $('#nonInventoryGift').val();

	var cond1 = $('#productHeadCom').val() == ""
			&& $('#productGroupCom').val() == ""
			&& $('#productCom').val() == "";
	var cond2 = $('#productHeadCom').val() != ""
			&& $('#productGroupCom').val() != ""
			&& $('#productCom').val() != "";

	if (cond1 || cond2) {

		$("#validation3").html("");
		var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
				+ "<strong>Alert!</strong>";
		var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
		/* if ($('#compensation').val() == '') { */
		/*
		 * if(false){ $("#validation3").html( styleMsgHeader + "Please select
		 * all the mandatory fields" + styleMsgFooter); } else {
		 */

		/*
		 * var
		 * combdata=returnNullToDef(productHeadCom)+'_'+returnNullToDef(productGroupCom)+'_'+returnNullToDef(productComId)+
		 * '_'+returnNullToDef(compensation)+'_'+nonInventoryGift;
		 */

		var combdata = returnNullToDef(productHeadCom) + '_'
				+ returnNullToDef(productGroupCom) + '_'
				+ returnNullToDef(productComId) + '_' + 'test' + '_'
				+ returnNullToDef(nonInventoryGift);

		if (returnNullToDef(compensation) != 'test') {

			if (datac.indexOf(combdata) <= 0) {

				$('#poTable2 tr:last')
						.after(
								'<tr id="newTrc'
										+ i
										+ '"><td><input type="text" readonly="true" class="txtboxMedium1" id="compensationList['
										+ i
										+ '].productHeadTab2" name="compensationList['
										+ i
										+ '].productHeadTab2" value="'
										+ productHeadCom
										+ '"/></td><td><input type="text" readonly="true" class="txtboxMedium1" id="compensationList['
										+ i
										+ '].productGroupTab2" name="compensationList['
										+ i
										+ '].productGroupTab2" value="'
										+ productGroupCom
										+ '"/></td><td><input type="text" readonly="true" class="txtboxMedium1" id="compensationList['
										+ i
										+ '].productTab2" name="compensationList['
										+ i
										+ '].productTab2" value="'
										+ productCom
										+ '"/></td><td><input type="text" readonly="true" class="txtboxMedium1" id="compensationList['
										+ i
										+ '].compensationTab2" name="compensationList['
										+ i
										+ '].compensationTab2" value="'
										+ compensation
										+ '"/></td><td><input type="text" readonly="true" class="txtboxMedium1" id="compensationList['
										+ i
										+ '].nonInventoryGift" name="compensationList['
										+ i
										+ '].nonInventoryGift" value="'
										+ nonInventoryGift
										+ '"/></td><td><a href="#" class="logodelete" onclick="delRowTablec('
										+ i
										+ ')"</a></td><input type="hidden"  id="compensationList['
										+ i
										+ '].productTab2Id" name="compensationList['
										+ i + '].productTab2Id" value="'
										+ productComId + '"/></tr>');
				i++;
				$('#indx3').val(i);
				rowcntc++;
				datac = datac + "," + combdata;
				// datac=datac.replace('%', 'tt');
			} else {
				// alert('You have already select that Combination!');
				$("#validation3").html(
						styleMsgHeader
								+ "You have already select that Combination!"
								+ styleMsgFooter);
			}
		} else {

			$("#validation3").html(
					styleMsgHeader + "Please provide Compensation"
							+ styleMsgFooter);

		}
	} else {

		alert('You have to select Product Head, Product Group, Product');
		$('#productHeadCom').val('');
		$('#productGroupCom').val('');
		$('#productCom').val('');

	}
}

function delRowTablea(i) {
	var tr = 'newTra' + i;

	var posTypeTab = document.getElementById('basicDetails[' + i
			+ '].posTypeTab').value;
	var posTypeTabId = document.getElementById('basicDetails[' + i
			+ '].posTypeTabId').value;
	var posCategoryTabId = document.getElementById('basicDetails[' + i
			+ '].posCategoryTabId').value;
	var posValueClassTabId = document.getElementById('basicDetails[' + i
			+ '].posValueClassTabId').value;
	var marketHierarchyTab = document.getElementById('basicDetails[' + i
			+ '].marketHierarchyTab').value;
	var marketLocationTabId = document.getElementById('basicDetails[' + i
			+ '].marketLocationTabId').value;
	var posGeoClassTabId = document.getElementById('basicDetails[' + i
			+ '].posGeoClassTabId').value;

	var rpval = returnNullToDef(posTypeTab) + '_'
			+ returnNullToDef(posTypeTabId) + '_'
			+ returnNullToDef(posCategoryTabId) + '_'
			+ returnNullToDef(posValueClassTabId) + '_'
			+ returnNullToDef(marketHierarchyTab) + '_'
			+ returnNullToDef(marketLocationTabId) + '_'
			+ returnNullToDef(posGeoClassTabId);
	// alert(rpval);

	dataa = dataa.replace(rpval, 'test_test_test_test_test_test');

	$('#' + tr).remove();

	$('#indx1').val($('#indx1').val() - 1);
	rowcnta--;

	return false;
}
function delRowTableb(i) {
	var tr = 'newTrb' + i;

	var campaignGroupTab1 = document.getElementById('groupDetails[' + i
			+ '].campaignGroupTab1').value;
	var productHeadTab1 = document.getElementById('groupDetails[' + i
			+ '].productHeadTab1').value;
	var productGroupTab1 = document.getElementById('groupDetails[' + i
			+ '].productGroupTab1').value;
	var productTab1Id = document.getElementById('groupDetails[' + i
			+ '].productTab1Id').value;
	var minRangeTab1 = document.getElementById('groupDetails[' + i
			+ '].minRangeTab1').value;
	var topRangeTab1 = document.getElementById('groupDetails[' + i
			+ '].topRangeTab1').value;

	/*
	 * var
	 * rpval=returnNullToDef(campaignGroupTab1)+'_'+returnNullToDef(productHeadTab1)+'_'+returnNullToDef(productGroupTab1)+'_'
	 * +returnNullToDef(productTab1Id)+'_'+returnNullToDef(minRangeTab1)+'_'+returnNullToDef(topRangeTab1);
	 */

	var rpval = returnNullToDef(campaignGroupTab1) + '_'
			+ returnNullToDef(productHeadTab1) + '_'
			+ returnNullToDef(productGroupTab1) + '_'
			+ returnNullToDef(productTab1Id) + '_' + 'test' + '_' + 'test';
	// alert(rpval);

	datab = datab.replace(rpval, 'test_test_test_test_test_test');

	$('#' + tr).remove();

	$('#indx2').val($('#indx2').val() - 1);
	rowcntb--;
	return false;
}
function delRowTablec(i) {
	var tr = 'newTrc' + i;

	var productHeadTab2 = document.getElementById('compensationList[' + i
			+ '].productHeadTab2').value;
	var productGroupTab2 = document.getElementById('compensationList[' + i
			+ '].productGroupTab2').value;
	var productTab2Id = document.getElementById('compensationList[' + i
			+ '].productTab2Id').value;
	var compensationTab2 = document.getElementById('compensationList[' + i
			+ '].compensationTab2').value;

	var nonInventoryGift = document.getElementById('compensationList[' + i
			+ '].nonInventoryGift').value;

	/*
	 * var
	 * rpval=returnNullToDef(productHeadTab2)+'_'+returnNullToDef(productGroupTab2)+'_'+returnNullToDef(productTab2Id)+'_'
	 * +returnNullToDef(compensationTab2);
	 */
	// alert(rpval);
	var rpval = returnNullToDef(productHeadTab2) + '_'
			+ returnNullToDef(productGroupTab2) + '_'
			+ returnNullToDef(productTab2Id) + '_' + 'test' + '_'
			+ returnNullToDef(nonInventoryGift);

	datac = datac.replace(rpval, 'test_test_test_test_test_test');

	$('#' + tr).remove();

	$('#indx3').val($('#indx3').val() - 1);
	rowcntc--;
	return false;
}

function makeEnabled() {

	$("tr td input[type='text']").removeAttr("disabled");
}

$(document).ready(function() {
	$(function() {
		if ($('#disabledStatus').val() == 'false') {
			makeEnabled();
		}
	});
});

function resetDropdownComp() {

	$("#productHeadCom").change(
			function() {
				// alert(this.value);
				if (this.value == null || this.value == undefined
						|| this.value == '') {
					$("#productGroupCom").find("option").remove();
					$("#productGroupCom").append(
							"<option value=''>Please Select</option>");

					$("#productCom").find("option").remove();
					$("#productCom").append(
							"<option value=''>Please Select</option>");
				}

				else {
					populateProductGroupComp();
					$("#productCom").find("option").remove();
					$("#productCom").append(
							"<option value=''>Please Select</option>");

				}
			});

}

function resetDropdownCampOn() {

	$("#productHeadCam").change(
			function() {
				// alert(this.value);
				if (this.value == null || this.value == undefined
						|| this.value == '') {
					$("#productGroupCam").find("option").remove();
					$("#productGroupCam").append(
							"<option value=''>Please Select</option>");

					$("#productCam").find("option").remove();
					$("#productCam").append(
							"<option value=''>Please Select</option>");
				}

				else {
					populateProductGroup();
					$("#productCam").find("option").remove();
					$("#productCam").append(
							"<option value=''>Please Select</option>");

				}
			});

}

function resetDropdownMarketByChannel() {

	$("#channel").change(
			function() {
				// alert(this.value);
				if (this.value == null || this.value == undefined
						|| this.value == '') {
					$("#marketHierarchy").find("option").remove();
					$("#marketHierarchy").append(
							"<option value=''>Please Select</option>");

					$("#marketLocation").find("option").remove();
					$("#marketLocation").append(
							"<option value=''>Please Select</option>");
				}

				else {
					populateMarketHierarchy();
					$("#marketLocation").find("option").remove();
					$("#marketLocation").append(
							"<option value=''>Please Select</option>");

				}
			});

}

function populatePosCategory() {
	var posType = $('#posType').val();
	// alert(posType);
	makeAsyncManterDataCall('PosCatByPosType', 'posType=' + posType,
			'posCategory');
}

function populateMarketHierarchy() {
	var channelId = $('#channel').val();

	makeAsyncManterDataCall('MarketTypeByChannel', 'channelId=' + channelId,
			'marketHierarchy');
}

function populateMarketLocation() {
	var locationTypeId = $('#marketHierarchy').val();

	makeAsyncManterDataCall('MarketLocationByMarketType', 'locationTypeId='
			+ locationTypeId, 'marketLocation');
}

function populateProductGroup() {
	var prodId = $('#productHeadCam').val();

	makeAsyncManterDataCall('ProdGrpbyProdHead', 'prodId=' + prodId,
			'productGroupCam');
}
function numeralsOnly(evt) {
	evt = (evt) ? evt : event;
	var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode
			: ((evt.which) ? evt.which : 0));
	// alert(charCode);
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	}
	return true;
}
function numeralsOnlyAndPer(evt) {
	evt = (evt) ? evt : event;
	var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode
			: ((evt.which) ? evt.which : 0));
	// alert(charCode);
	var txtval = $('#compensation').val();
	if (charCode == 37) {
		if ($('#productCom').val() == "") {
			if (txtval.trim().length > 0 && txtval.indexOf('%') <= 0)
				return true;
		} else {
			return false;
		}
	}
	if (txtval.indexOf('%') > 0) {
		return false;
	}
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	}
	return true;
}
function checkcomp() {

	var txtval = $('#compensation').val();
	$('#compensation').val(txtval.replace('%', ''));
	$('#nonInventoryGift').val("");
}
function chvaldni() {
	if ($('#productCom').val() == "")
		return true;
	else
		return false;

}

function populateProductGroupComp() {
	var prodId = $('#productHeadCom').val();

	makeAsyncManterDataCall('ProdGrpbyProdHead', 'prodId=' + prodId,
			'productGroupCom');
}

function populateProduct() {
	var prodGrpId = $('#productGroupCam').val();

	makeAsyncManterDataCall('ProdbyProdGrp', 'prodGrpId=' + prodGrpId,
			'productCam');
}

function populateProductComp() {
	var prodGrpId = $('#productGroupCom').val();

	makeAsyncManterDataCall('ProdbyProdGrp', 'prodGrpId=' + prodGrpId,
			'productCom');
}

$(function() {

	if ($('#disabledStatus').val() == 'true') {
		$("#camp_criteria_part").hide();
		$("#camp_eligiblillity_part").hide();
		$("#comp_part").hide();
		$("#button_delete").show();
		// $("#indx1").removeAttr("disabled");
		$("#button_save").hide();
		$("#button_reset").hide();
		/*
		 * $("#DelRowa").hide(); $("#DelRowb").hide(); $("#DelRowc").hide(); var
		 * i = $('#indx1').val(); var j = $('#indx2').val(); var k =
		 * $('#indx3').val(); // var i = 1; alert($('#indx1').val()); for (; i >
		 * -1; i--) { var td = 'basicDelete[' + i + ']';
		 * $(document.getElementById(td)).remove(); } for (; j > -1; j--) { var
		 * td = 'campOnDelete[' + j + ']';
		 * $(document.getElementById(td)).remove(); } for (; k > -1; k--) { var
		 * td = 'compDelete[' + k + ']';
		 * $(document.getElementById(td)).remove(); }
		 */

	}
});

$(function() {
	if ($('#disabledStatus').val() == 'false') {
		$("#button_delete").hide();
		$("#button_save").show();
		$("#button_reset").show();

	}
});

function clearTxt1() {

	$("#startDate").next().text("");

}

function clearTxt2() {

	$("#endDate").next().text("");

}

$(document).ready(
		function() {
			$('#reset').click(
					function() {

						$('#posType').val("");
						$("#posCategory").find("option").remove();
						$("#posCategory").append(
								"<option value=''>Please Select</option>");
						$('#valueClass').val("");
						$('#channel').val("");
						$("#marketHierarchy").find("option").remove();
						$("#marketHierarchy").append(
								"<option value=''>Please Select</option>");
						$("#marketLocation").find("option").remove();
						$("#marketLocation").append(
								"<option value=''>Please Select</option>");
						$('#posGeoClass').val("");
						$('#productHeadCam').val("");
						$("#productGroupCam").find("option").remove();
						$("#productGroupCam").append(
								"<option value=''>Please Select</option>");
						$("#productCam").find("option").remove();
						$("#productCam").append(
								"<option value=''>Please Select</option>");
						$('#productHeadCom').val("");
						$("#productGroupCom").find("option").remove();
						$("#productGroupCom").append(
								"<option value=''>Please Select</option>");
						$("#productCom").find("option").remove();
						$("#productCom").append(
								"<option value=''>Please Select</option>");

						var i = $('#indx1').val() - 1;
						var j = $('#indx2').val() - 1;
						var k = $('#indx3').val() - 1;
						for (; i > -1; i--) {
							var tr = 'newTra' + i;
							$(document.getElementById(tr)).remove();
						}
						for (; j > -1; j--) {
							var tr = 'newTrb' + j;
							$(document.getElementById(tr)).remove();
						}
						for (; k > -1; k--) {
							var tr = 'newTrc' + k;
							$(document.getElementById(tr)).remove();
						}
						return false;
					});
		});
