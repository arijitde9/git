$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
	$("#mtrForm")
			.validate(
					{
						ignore : "",

						rules : {
							partnerId : "required",
							proposedPartner : "required",
//							selectedRtr : "required",

						},

						// Specify the validation error messages
						messages : {
							partnerId : styleMsgHeader
									+ "Please select Partner" + styleMsgFooter,
//							selectedRtr : styleMsgHeader + "Please select POS"
//									+ styleMsgFooter,

						},

						submitHandler : function(form) {

							form.submit();
						}
					});
	
	

});

function validatePropPartner() {
	$("#errdiv").html("");
	$("#errdiv1").html("");
	var returnVal = false;
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
	var rtrCode = $("#proposedPartner").find("option:selected").text();
	var initialPtr = $("#partnerId").find("option:selected").text();
	var numberOfRTRs = $('select#selectedRtr option').length;
	if(numberOfRTRs == 'undefined' || numberOfRTRs == 0){
		$("#errdiv").html(
				styleMsgHeader + "Please select POS" + styleMsgFooter);
		$('#mtrForm').valid();
		returnVal = false;
	}else{
		$('#selectedRtr option').prop('selected', true);
		returnVal = true;
	}
	if (rtrCode == "Please Select" || rtrCode == "Select Data") {
		$('#mtrForm').valid();
		$("#errdiv1").html(
				styleMsgHeader + "Please select Proposed Partner" + styleMsgFooter);
		returnVal = false;
	}
	if(initialPtr == rtrCode){
		$('#mtrForm').valid();
		$("#errdiv1").html(
				styleMsgHeader + "Proposed Partner and From Partner cannot be same" + styleMsgFooter);
		returnVal = false;
	}
	return returnVal;
}

$(document).ready(function() {
	$('#reset').click(function() {
		
		$('#channelId').val("");
		$("#partnerId").find("option").remove();
	    $("#partnerId").append("<option value=''>Please Select</option>");
		$("#marketLocation").find("option").remove();
	    $("#marketLocation").append("<option value=''>Please Select</option>");

	    $("#rtrtemp").customselect('destroy');
	    $("#rtrtemp").find("option").remove();
	    $("#rtrtemp").append("<option value=''>Select Data</option>");
	    $("#rtrtemp").customselect();
	    
	    $("#proposedPartner").customselect('destroy');
	    $("#proposedPartner").find("option").remove();
	    $("#proposedPartner").append("<option value=''>Select Data</option>");
	    $("#proposedPartner").customselect();
	    
		
	    $("#selectedRtr").find("option").remove();
	    $("#selectedRtr").customselect();
	});
});