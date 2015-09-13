$(function() {
	$("#tabs").tabs();
	// alert($('#state').val())
	$("input[type=submit], button").button();	
	$("#endDate").datepicker();
	$("#startDate").datepicker();
	 $('#poNumber').attr('disabled',true);
	// $('#partner').val('${createData.partner}');
	 $('input[type=radio][name=radioscan1]').change(function() {
	        if (this.value == 'Po') {
	        	 $('#startDateNew').val("");
	        	 $('#endDateNew').val("");
	            $('#startDateNew').attr('disabled',true);
	            $('#endDateNew').attr('disabled',true);
	            $('#poNumber').removeAttr('disabled');
	        }
	        else if (this.value == 'date') {
	        	$('#poNumber').val("");
	        	  $('#poNumber').attr('disabled',true);
	        	   $('#startDateNew').removeAttr('disabled');
		            $('#endDateNew').removeAttr('disabled');
	        }
	    });
});


function compareDate(startDate, endDate) {
	var date1 = endDate;
	var date2 = startDate;

	if (date1 != "" && date2 != "") {
		if (Date.parse(date1) > Date.parse(date2)) {
			return true;
		} else {
			return false;
		}
	}
}

$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	$.validator.addMethod("date_check", function(value, element) {
		return compareDate($('#startDateNew').val(), value);
	}, "End Date should be greater than Start Date .");

	$("#poCancelForm")
			.validate(
					{
						ignore : "",
						rules : {
							
							endDate : {
								date_check : $('#endDate').val(),
							},

						},
						// Specify the validation error messages
						messages : {
							
									endDate : {
								date_check : styleMsgHeader
										+ "End Date should be greater than Start Date ."
										+ styleMsgFooter,
							},
						},
						submitHandler : function(form) {
							form.submit();
						}
					});
});






