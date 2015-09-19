$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
$("#pncForm")
.validate(
		{
			ignore: "",
			rules : {
				ruleName : "required",
				core : "required",
				description : "required",
				startDate : {
					required : true,
					date : true
				},
				endDate : {
					required : true,
					date : true
				},
				primaryPrice : {
					required : true
				},
				
				secondaryPrice : {
					required : true,
					
				},
				tertiaryPrice : {
					required : true
				},
				
				primaryDiscount : {
					required : true,
					
				},
				secondaryDiscount : {
					required : true
				},
				
				tertiaryDiscount : {
					required : true,
					
				},
				
			},
			
			// Specify the validation error messages
			messages : {
				ruleName : styleMsgHeader
						+ "Please enter rule"
						+ styleMsgFooter,
				core : styleMsgHeader
						+ "Please enter core"
						+ styleMsgFooter,
				description : styleMsgHeader
						+ "Please enter description"
						+ styleMsgFooter,
				
						startDate : {
							required : styleMsgHeader
									+ "Please enter start date"
									+ styleMsgFooter,
							date : styleMsgHeader
									+ "Please enter a valid date"
									+ styleMsgFooter
						},
						
						endDate : {
							required : styleMsgHeader
									+ "Please enter end date"
									+ styleMsgFooter,
							date : styleMsgHeader
									+ "Please enter a valid date"
									+ styleMsgFooter
						},	
				primaryPrice : styleMsgHeader
						+ "Please enter primary price"
						+ styleMsgFooter,
				secondaryPrice : styleMsgHeader + "Please enter secondary price"
						+ styleMsgFooter,	
				tertiaryPrice : styleMsgHeader
						+ "Please enter tertiary price"
						+ styleMsgFooter,
				primaryDiscount : styleMsgHeader + "Please enter primary discount"
						+ styleMsgFooter,	
				tertiaryDiscount : styleMsgHeader
						+ "Please enter tertiary discount"
						+ styleMsgFooter,
				secondaryDiscount : styleMsgHeader + "Please enter secondary discount"
						+ styleMsgFooter,	
			},

			submitHandler : function(form) {

				form.submit();
			}
		});

});