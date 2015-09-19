$(function() {
	if($('#showTable').val()=="true"){
		$('#newTr0').show();
	}
	$("#tabs").tabs();
	$("input[type=submit], button").button();
	
	$("#endDate").datepicker({
		 maxDate : new Date(),
		 onSelect: function (date) {
			 var startDate =  $('#startDate');
			 var endDate = $(this).datepicker('getDate');
			 var startVal = $(startDate).val();
			 if(startDate != '') {
				 var edDate = new Date(endDate).getTime();
				 var srtDate = new Date(startVal).getTime();
				 if(edDate < srtDate) {
					 $("#endDate").val('');
					 alert('Incorrect End Date');
				 }
			 }
		 }
	});
	
	$("#startDate").datepicker({
		 maxDate : new Date(),
		 onSelect: function (date) {
			 var endDate = $('#endDate');
			 var startDate = $(this).datepicker('getDate');
			 var endVal = $(endDate).val();
			 if(endVal != '') {
				 var edDate = new Date(endVal).getTime();
				 var srtDate = new Date(startDate).getTime();
				 if(edDate < srtDate) {
					 $("#startDate").val('');
					 alert('Incorrect Start Date');
				 }
			 }
		 }
	});
	
	
	$("[id^=paymentDate]").datepicker();
	$('#addAllPO').click(function(e) {

		var selectedOpts = $('#po option');
		if (selectedOpts.length == 0) {
			alert("Nothing to move.");
			e.preventDefault();
		}

		$('#poNumber').append($(selectedOpts).clone());
		// $(selectedOpts).remove();
		e.preventDefault();
	});
	$('input[type=file]').change(function(e) {
		$in = $(this);
		$in.next().html($in.val());
	});
	$('body').on('focus',".datepickerMedium", function(){
		 $(this).removeClass('hasDatepicker').datepicker({
			 maxDate : new Date()
		 });
	});
	$('input[id$="_amountPaid"]').unbind('keypress').bind('keypress',function(e){
		
		if (e.which != 8 && e.which != 0 && ((e.which < 48 || e.which > 57) && e.which != 46)) {
			e.preventDefault();
	    	return false;
		}
	});	
});


function delRowPayment(i) { 
    var tr ='newTr'+i;
    if(tr != 'newTr0'){
      $(document.getElementById(tr)).remove();
    }	
}

function getDetailsOfPo(index) {
	var poNum = $('#orderList'+index+'_orderNo option:selected').val();
	var poText = $('#orderList'+index+'_orderNo option:selected').text();
	var poURL = getPODetailsURL();
	if(poNum != '') {
		$.ajax({
			type : 'POST',
			url : poURL,
			data : {orderId : poNum},
			cache : false,
			async : false,
			dataType : 'json',
			success : function(data){
				resetPOPaymentTableRowData(index);
				$("#totalAmount_"+(index)).val(parseFloat(data.totalPOAmount).toFixed(2));	
				$("#amountPaid_"+(index)).val(parseFloat(data.totalPaidAmount).toFixed(2));
				$("#amountApproved_"+(index)).val(parseFloat(data.totalApprovedAmount).toFixed(2));
				var amountRemain = parseFloat(data.totalPOAmount) - parseFloat(data.totalRemainingAmount); 
				$("#amountRemain_"+(index)).val(amountRemain.toFixed(2));
				$("#orderList"+(index)+"_poNumber").val(poText);
			
			}, 
			error : function(err) {
				resetPOPaymentTableRowData(index);
			}
		});
		
	} else {
		resetPOPaymentTableRowData(index);
	}
	
}


function resetPOPaymentTableRowData(index) {
	$(document.getElementById("orderList"+index+"_district")).html(
			$('<option></option>').val('').html('Please Select'));
	$(document.getElementById("orderList"+index+"_branch")).html(
			$('<option></option>').val('').html('Please Select'));
	$("#totalAmount_"+(index)).val(parseFloat(0).toFixed(2));	
	$("#amountPaid_"+(index)).val(parseFloat(0).toFixed(2));
	$("#amountApproved_"+(index)).val(parseFloat(0).toFixed(2));
	$("#amountRemain_"+(index)).val(parseFloat(0).toFixed(2));
	$("#orderList"+(index)+"_amountPaid").val('');
	$("#orderList"+(index)+"_accountNo").val('');
	$("#orderList"+(index)+"_paymentDate").val('');
	$("#orderList"+(index)+"_instrumentNo").val('');
	$("#orderList"+(index)+"_remarks").val('');
	$("#orderList"+(index)+"_file").val('');
}

function onButtonClicked(url,status){
	
	  if(status == 'FILTER') {
		  var startDate = $('#startDate').val();
		  var endDate = $('#endDate').val();
		  if(startDate == '') {
			  alert('Please Select Start Date');
		  } else if(endDate == '') {
			  alert('Please Select End Date');
		  } else {
			  $('#poPaymentForm').attr('action',url);
		      $('#poPaymentForm').submit();  
		  } 
	  } else if(status == 'SUBMIT') {
		  
		  var hasErr = validateLineItemsForPayment();
		  if(hasErr == '') { 
			  var hasFileErr = validateLineItemsForPaymentFile();
			  if(hasFileErr == '') {
				  $('#poPaymentForm').attr('action',url);
			      $('#poPaymentForm').submit();
			  } else {
				  var doConfirm = confirm('Do you want to Submit Payment without Attachment ? ');
				  if(doConfirm) {
					  $('#poPaymentForm').attr('action',url);
				      $('#poPaymentForm').submit();
				  } else {
					  return false;
				  }
			  }
			 
		  } else {
			  $('#linePaymentErr').fadeIn(200).fadeOut(6000);
		  }
		   
	  }
	  
}


function validateLineItemsForPaymentFile() {
	 
	var err = '';
	$("[id^='orderList']").each(function(){
 		var value = $(this).val();
		var valueName = $(this).prop('name');
		if(valueName.indexOf('file') > -1) {
			if(value == '') {
				err = 'yes';
				$(this).css('border','3px solid red');
			} else {
				$(this).css('border','1px solid #000');
			}
		}
	});
	 
	return err;
}

function validateLineItemsForPayment() {
 
	var err = '';
	$("[id^='orderList']").each(function(){
 		var value = $(this).val();
		var valueName = $(this).prop('name');
		if(valueName.indexOf('remarks') > -1 || valueName.indexOf('file') > -1) {
		} else {
			if(value == '') {
				err = 'yes';
				$(this).css('border','3px solid red');
			} else {
				$(this).css('border','1px solid #000');
			}
		}
	});
	 
	return err;
}




function populateBranch(value) {

	$("[name='branch']").empty();
	$("[name='branch']").append(
			$('<option></option>').val("").html("Please Select"));
	
}
function populatePOByPartner(value) {

	$("[name='po']").empty();
	$("[name='po']").append(
			$('<option></option>').val("").html("Please Select"));
	$.getJSON("getpopbypartner.con?partner=" + value, function(data) {
		$.each(data, function(index, nodeData) {
			$("[name='po']").append(
					$('<option></option>').val(nodeData.po).html(nodeData.po));
		});

	});
}

function addToListBox(txtId, selectId, clearTxt) {

	// store the value of the text box in a variable
	var txtValue = $('#' + txtId).val();

	// clear the text box
	if (clearTxt == 'true') {
		$('#' + txtId).val('');
	}
	// 
	// create the option string
	var optionVal = '<option value="' + txtValue + '" selected="selected">'
			+ txtValue + '</option>';
	// add the option to the select box

	$('#' + selectId).append(optionVal);

}

function search() {
	var textVal = $('#poSearch').val();
	$("#po > option").each(function() {
		if ((this.text.indexOf(textVal)) == 0) {
			$('#po').val(this.value);
			// populateProductByRtr(this.value);
		}
	});
}

function addRow() {
	
		var sizeOf = $("[id^='newTr']").size();
		$("[id^='newTr']").last().after(
			"<tr id='newTr"+sizeOf+"'>"
					+ $("[id^='newTr']").last().html().replace(
							new RegExp(sizeOf - 1, "g"), sizeOf) + "</tr>");
		$("[id^=paymentDate]").datepicker();

		var options=$(document.getElementById("orderList0_orderNo")).html();
		$(document.getElementById("orderList"+sizeOf+"_orderNo")).html(options);
		var options=$(document.getElementById("orderList0_bank")).html();
		$(document.getElementById("orderList"+sizeOf+"_bank")).html(options);
		var options=$(document.getElementById("orderList0_paymentMode")).html();
		$(document.getElementById("orderList"+sizeOf+"_paymentMode")).html(options);
		$(document.getElementById("orderList"+sizeOf+"_district")).html('<option value="">Please Select</option>');
		$(document.getElementById("orderList"+sizeOf+"_branch")).html('<option value="">Please Select</option>');
		
		$("#totalAmount_"+(sizeOf)).val(0);	
		$("#amountPaid_"+(sizeOf)).val(0);
		$("#amountApproved_"+(sizeOf)).val(0);
		$("#amountRemain_"+(sizeOf)).val(0); 
		$("#orderList"+(sizeOf)+'_orderNo').css('width','150px');
		$("#orderList"+(sizeOf)+'_remarks').css('width','180px');
		$("#orderList"+(sizeOf)+'_paymentMode').css('width','150px');
		$("#orderList"+(sizeOf)+'_paymentDate').css('width','79px');
		
}


function checkBalance(index) {
	var curBal = $('#orderList'+index+'_amountPaid').val();
	var avaBal = $('#amountRemain_'+index).val();
	
	if(curBal != '') {
		var balNow = parseFloat(curBal);
		var avBal = parseFloat(avaBal);
		if(balNow > avBal) {
			//alert('Invalid Amount. Please Check !!!');
		}
	} 
}



function populateDropdownForDistict(sizeOf){
	var bank = document.getElementById("orderList"+sizeOf+"_bank").value;
	if(bank != '') {

		$.ajax({
			type : 'GET',
			url : "dependenddataselect.con?operationType=DistrictOnBank&districtId=" + bank,
			cache : false,
			dataType : 'json',
			success : function(data) {
				var newData = eval(data);
				if(newData != null && newData.length > 0) {
					$(document.getElementById("orderList"+sizeOf+"_district")).html(
							$('<option></option>').val('').html('Please Select'));
					$.each(newData, function(index, nodeData) {
						$(document.getElementById("orderList"+sizeOf+"_district")).append(
								$('<option></option>').val(nodeData.value).html(
										nodeData.value));
					});
				} else {
					$(document.getElementById("orderList"+sizeOf+"_district")).html(
							$('<option></option>').val('').html('Please Select'));
				}
				
			},
			error : function(err) {
				$(document.getElementById("orderList"+sizeOf+"_district")).html(
						$('<option></option>').val('').html('Please Select'));
			}
		});
		$(document.getElementById("orderList"+sizeOf+"_branch")).html(
				$('<option></option>').val('').html('Please Select'));
 
	} else {
		alert('Please Choose Bank');
		$(document.getElementById("orderList"+sizeOf+"_district")).html(
				$('<option></option>').val('').html('Please Select'));
		$(document.getElementById("orderList"+sizeOf+"_branch")).html(
				$('<option></option>').val('').html('Please Select'));
	}

}
 
function populateDropdownForBranch(sizeOf){

	var bank = document.getElementById("orderList"+sizeOf+"_bank").value;
	var districtName = document.getElementById("orderList"+sizeOf+"_district").value;
	var err = '';
	if(bank == '') {
		err = 'Please Select the Bank';
	} else if(districtName == '') {
		err = 'Please Select District';
	}
	
	if(err == '') {
		
		$.ajax({
			type : 'GET',
			url : "dependenddataselect.con?operationType=BranchOnDistrict&bankId=" + bank + '&districtName=' + districtName,
			cache : false,
			dataType : 'json',
			success : function(data) {
				var newData = eval(data);
				if(newData != null && newData.length > 0) {
					$(document.getElementById("orderList"+sizeOf+"_branch")).html(
							$('<option></option>').val('').html('Please Select'));
					$.each(newData, function(index, nodeData) {
						$(document.getElementById("orderList"+sizeOf+"_branch")).append(
								$('<option></option>').val(nodeData.key).html(
										nodeData.value));
					});
				} else {
					$(document.getElementById("orderList"+sizeOf+"_branch")).html(
							$('<option></option>').val('').html('Please Select'));
				}
				
				
			},
			error : function(err) {
				$(document.getElementById("orderList"+sizeOf+"_branch")).html(
						$('<option></option>').val('').html('Please Select'));
			}
		});
		 
	} else {
		alert(err);
		$(document.getElementById("orderList"+sizeOf+"_branch")).html(
				$('<option></option>').val('').html('Please Select'));
	}
	
}