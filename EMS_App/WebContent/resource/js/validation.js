function compareDates(effdate, exdate) {

	var date1 = exdate;
	var date2 = effdate;

	var date3 = new Date;

	if (date1 != "" && date2 != "") {
		if (Date.parse(date1) > Date.parse(date2)
				&& Date.parse(date1) > Date.parse(date3)) {
			return true;
		} else {
			return false;
		}
	} else if (date1 != "" && date2 == "") {
		if (Date.parse(date1) > Date.parse(date3)) {
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
}

function compareDateFromPresent(effdate) {

	var date1 = effdate;
	var date2 = new Date;

	date2 = date2.getMonth() + 1 + '/' + date2.getDate() + '/'
			+ date2.getFullYear();

	if (date1 != "") {
		if (Date.parse(date1) >= Date.parse(date2)) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

// Partner Management validation method--sohini 1.8.2014
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #partnerForm element
	$("#partnerForm").validate(
			{
				ignore : "",
				rules : {
					partnerName : "required",
					partnerType : "required",
					adminLocationType : "required",
					// partnerAddress : "required",
					partnerPhone : {
						// required : true,
						number : true,
						minlength : 12,
						maxlength : 12
					},
					email : {
						// required : true,
						email : true
					},
					email1 : {
						// required : true,
						email : true
					},
					tornedoEmailAddress : {

						email : true
					},
					partnerEmail : {
						// required : true,
						email : true
					},
					effectiveDate : {
						// required : true,
						date : true
					},
					expiryDate : {
						// required : true,
						date : true
					},
					contactPerson : {
					// required : true
					},
					channel : {
						required : true
					},
					marketLocation : {
						required : true
					},
					mobile : {
						// required : true,
						number : true

					},
					gpPhone : {
						// required : true,
						number : true
					},
					flexiNo : {
					// required : true,
					// number : true
					},
					tntPhoneNumber : {
						// required : true,
						number : true
					},
					// ownerName:"required",

					ownerContactNo : {
						// required : true,
						number : true
					},
					fax : {
						// required : true,
						number : true
					},
					gpEmail : {
						// required : true,
						email : true
					},
					/*
					 * commissionPaymentMode:"required", posType:"required",
					 * serviceType:"required", status:"required",
					 * posCategory:"required", posValueClass:"required",
					 * accountNo:"required", drcCommission:"required",
					 * stp:"required", remarks:"required",
					 */
					registrationDate : {
						// required : true,
						date : true
					},
					gpOfficeEmail : {
						// required : true,
						email : true
					},
					// zonalLog:"required",
					adminLocation : "required",
					partnerHierarchyName : "required",
					// partnerHierarchyShortCode:"required",
					parentHierarchyName : "required",
					isOSDOEnable : "required",
					marketLocationType : "required",
					/*
					 * posType:"required", posCategory:"required",
					 */

					partnerAddress : "required",
					partnerPhone : "required",

				},

				// Specify the validation error messages
				messages : {
					partnerName : styleMsgHeader + "Please select partner name"
							+ styleMsgFooter,
					partnerType : styleMsgHeader + "Please select partner type"
							+ styleMsgFooter,
					adminLocationType : styleMsgHeader
							+ "Please select admin location type"
							+ styleMsgFooter,
					/*
					 * partnerAddress : styleMsgHeader + "Please enter partner
					 * address" + styleMsgFooter, email : styleMsgHeader +
					 * "Please enter a valid email address" + styleMsgFooter,
					 * email1 : styleMsgHeader + "Please enter a valid email
					 * address" + styleMsgFooter, partnerEmail : styleMsgHeader +
					 * "Please enter a valid email address" + styleMsgFooter,
					 */
					partnerPhone : {
						/*
						 * required : styleMsgHeader + "Please enter partner
						 * phone number" + styleMsgFooter,
						 */
						number : styleMsgHeader + "Please enter a valid number"
								+ styleMsgFooter,
						minlength : styleMsgHeader
								+ "Please enter a 12 digit number"
								+ styleMsgFooter,
						maxlength : styleMsgHeader
								+ "Please enter a 12 digit number"
								+ styleMsgFooter
					},
					effectiveDate : {
						/*
						 * required : styleMsgHeader + "Please enter effective
						 * date" + styleMsgFooter,
						 */
						date : styleMsgHeader + "Please enter a valid date"
								+ styleMsgFooter
					},
					expiryDate : {
						// required : styleMsgHeader
						// + "Please enter expiry date"
						// + styleMsgFooter,
						date : styleMsgHeader + "Please enter a valid date"
								+ styleMsgFooter
					},
					/*
					 * contactPerson : styleMsgHeader + "Please enter contact
					 * person" + styleMsgFooter,
					 */
					channel : styleMsgHeader + "Please select channel"
							+ styleMsgFooter,
					marketLocation : styleMsgHeader
							+ "Please select market location" + styleMsgFooter,
					mobile : {
						/*
						 * required : styleMsgHeader + "Please enter mobile
						 * number" + styleMsgFooter,
						 */
						number : styleMsgHeader + "Please enter a valid number"
								+ styleMsgFooter
					},
					gpPhone : {
						/*
						 * required : styleMsgHeader + "Please enter phone
						 * number" + styleMsgFooter,
						 */
						number : styleMsgHeader + "Please enter a valid number"
								+ styleMsgFooter
					},
					flexiNo : {
						/*
						 * required : styleMsgHeader + "Please enter phone
						 * number" + styleMsgFooter,
						 */
						number : styleMsgHeader + "Please enter a valid number"
								+ styleMsgFooter
					},
					tntPhoneNumber : {
						/*
						 * required : styleMsgHeader + "Please enter phone
						 * number" + styleMsgFooter,
						 */
						number : styleMsgHeader + "Please enter a valid number"
								+ styleMsgFooter
					},
					/*
					 * ownerName:styleMsgHeader + "Please enter owner name" +
					 * styleMsgFooter,
					 */

					ownerContactNo : {
						/*
						 * required : styleMsgHeader + "Please enter phone
						 * number" + styleMsgFooter,
						 */
						number : styleMsgHeader + "Please enter a valid number"
								+ styleMsgFooter
					},
					fax : {
						/*
						 * required : styleMsgHeader + "Please enter phone
						 * number" + styleMsgFooter,
						 */
						number : styleMsgHeader + "Please enter a valid number"
								+ styleMsgFooter
					},
					tornedoEmailAddress : {

						number : styleMsgHeader
								+ "Please enter a email address"
								+ styleMsgFooter
					},
					marketLocationType : styleMsgHeader
							+ "Please select market type" + styleMsgFooter,
					/*
					 * posType:styleMsgHeader + "Please check pos type" +
					 * styleMsgFooter, posCategory: styleMsgHeader + "Please
					 * check pos category " + styleMsgFooter ,
					 */

					partnerAddress : styleMsgHeader
							+ "Please enter partner address " + styleMsgFooter,
					partnerPhone : styleMsgHeader
							+ "Please enter partner phone " + styleMsgFooter,
					/*
					 * gpEmail : styleMsgHeader + "Please enter a valid email
					 * address" + styleMsgFooter, commissionPaymentMode:
					 * styleMsgHeader + "Please select payment mode" +
					 * styleMsgFooter, posType: styleMsgHeader + "Please select
					 * pos type" + styleMsgFooter, serviceType:styleMsgHeader +
					 * "Please select service type" + styleMsgFooter,
					 * status:styleMsgHeader + "Please enter status" +
					 * styleMsgFooter, posCategory:styleMsgHeader + "Please
					 * select pos category" + styleMsgFooter,
					 * posValueClass:styleMsgHeader + "Please select pos value
					 * class" + styleMsgFooter, accountNo:styleMsgHeader +
					 * "Please enter account no" + styleMsgFooter,
					 * drcCommission:styleMsgHeader + "Please select drs
					 * commission" + styleMsgFooter, stp:styleMsgHeader +
					 * "Please select stp" + styleMsgFooter,
					 * remarks:styleMsgHeader + "Please enter remarks" +
					 * styleMsgFooter, registrationDate : { required :
					 * styleMsgHeader + "Please enter registration date" +
					 * styleMsgFooter, date : styleMsgHeader + "Please enter a
					 * valid date" + styleMsgFooter }, gpOfficeEmail :
					 * styleMsgHeader + "Please enter a valid email address" +
					 * styleMsgFooter, zonalLog:styleMsgHeader + "Please select
					 * zonal log" + styleMsgFooter,
					 */
					adminLocation : styleMsgHeader
							+ "Please select admin location" + styleMsgFooter,
					partnerHierarchyName : styleMsgHeader
							+ "Please enter partner hierarchy name"
							+ styleMsgFooter,
					/*
					 * partnerHierarchyShortCode:styleMsgHeader + "Please enter
					 * partner hierarchy short code" + styleMsgFooter,
					 */
					parentHierarchyName : styleMsgHeader
							+ "Please enter parent hierarchy name"
							+ styleMsgFooter,
					isOSDOEnable : styleMsgHeader + "Please select the value"
							+ styleMsgFooter
				},

				submitHandler : function(form) {

					form.submit();
				}
			});

});

// for sales hierarchy start

$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#shcreateForm").validate(
			{
				ignore : "",
				rules : {
					//hierarchyShortCode : {
						//required : true
					//},
					organization : "required",
					salesHierarchyName : "required",
				// parentHierarchyShortCode : "required",
				},

				// Specify the validation error messages
				messages : {
					//hierarchyShortCode : styleMsgHeader
						//	+ "Please enter Hierarchy Short Code"
							//+ styleMsgFooter,
					organization : styleMsgHeader + "Please enter Organization"
							+ styleMsgFooter,
					salesHierarchyName : styleMsgHeader
							+ "Please select Sales Hierarchy Name"
							+ styleMsgFooter,
					parentHierarchyShortCode : styleMsgHeader
							+ "Please select Parent Hierarchy Short Code"
							+ styleMsgFooter,

				},

				submitHandler : function(form) {

					form.submit();
				}
			});

});

// se profile create

$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#seCreateForm").validate(
			{
				ignore : "",
				rules : {

					employeeId : "required",
					employeeName : "required",
					address : "required",
					joiningDate : {
						required : true,
						date : true
					},
					reference : "required",
					mobile : {
						required : true,
						number : true

					},
					ersMsisdn : "required",
					seCategory : "required",
					seType : "required",
					seCategoryName : "required",
					basicSalary : "required",
					photo : "required",
					bulkFile : "required",

				},

				// Specify the validation error messages
				messages : {
					employeeId : styleMsgHeader + "Please enter Employee Id"
							+ styleMsgFooter,
					employeeName : styleMsgHeader
							+ "Please enter Employee Name" + styleMsgFooter,
					address : styleMsgHeader + "Please select Address"
							+ styleMsgFooter,
					joiningDate : styleMsgHeader + "Please select Joining Date"
							+ styleMsgFooter,
					reference : styleMsgHeader + "Please select Reference"
							+ styleMsgFooter,
					mobile : styleMsgHeader + "Please select Mobile"
							+ styleMsgFooter,
					ersMsisdn : styleMsgHeader + "Please select ers Msisdn"
							+ styleMsgFooter,
					seCategory : styleMsgHeader + "Please select SE Category"
							+ styleMsgFooter,
					seType : styleMsgHeader + "Please select SE Type"
							+ styleMsgFooter,
					seCategoryName : styleMsgHeader
							+ "Please select SE CategoryName" + styleMsgFooter,
					basicSalary : styleMsgHeader + "Please select Basic Salary"
							+ styleMsgFooter,
					photo : styleMsgHeader + "Please select Photo"
							+ styleMsgFooter,
					bulkFile : styleMsgHeader + "Please select Bulk File"
							+ styleMsgFooter,

				},

				submitHandler : function(form) {

					form.submit();
				}
			});
});

// se profile edit

$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#seEditForm").validate(
			{
				ignore : "",
				rules : {

					employeeId : "required",
					employeeName : "required",
					address : "required",
					joiningDate : {
						required : true,
						date : true
					},
					reference : "required",
					mobile : {
						required : true,
						number : true

					},
					ersMsisdn : "required",
					seCategory : "required",
					seType : "required",
					seCategoryName : "required",
					basicSalary : "required",
					photo : "required",
					bulkFile : "required",

				},

				// Specify the validation error messages
				messages : {
					employeeId : styleMsgHeader + "Please enter Employee Id"
							+ styleMsgFooter,
					employeeName : styleMsgHeader
							+ "Please enter Employee Name" + styleMsgFooter,
					address : styleMsgHeader + "Please select Address"
							+ styleMsgFooter,
					joiningDate : styleMsgHeader + "Please select Joining Date"
							+ styleMsgFooter,
					reference : styleMsgHeader + "Please select Reference"
							+ styleMsgFooter,
					mobile : styleMsgHeader + "Please select Mobile"
							+ styleMsgFooter,
					ersMsisdn : styleMsgHeader + "Please select ers Msisdn"
							+ styleMsgFooter,
					seCategory : styleMsgHeader + "Please select SE Category"
							+ styleMsgFooter,
					seType : styleMsgHeader + "Please select SE Type"
							+ styleMsgFooter,
					seCategoryName : styleMsgHeader
							+ "Please select SE CategoryName" + styleMsgFooter,
					basicSalary : styleMsgHeader + "Please select Basic Salary"
							+ styleMsgFooter,
					photo : styleMsgHeader + "Please select Photo"
							+ styleMsgFooter,
					bulkFile : styleMsgHeader + "Please select Bulk File"
							+ styleMsgFooter,

				},

				submitHandler : function(form) {

					form.submit();
				}
			});
});

// employee profile create
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#empCreateForm").validate(
			{
				ignore : "",
				rules : {

					employeeID : "required",
					employeeName : "required",
					address : "required",
					salesHierarchy : "required",
					marketHierarchy : "required",
					marketLocation : "required",
					distributionHouse : "required",
					status : "required",
					effectiveDate : {
						required : true,
						date : true
					},
					expiaryDate : {
						required : true,
						date : true
					},

				},

				// Specify the validation error messages
				messages : {
					employeeID : styleMsgHeader + "Please enter Employee ID"
							+ styleMsgFooter,
					employeeName : styleMsgHeader
							+ "Please enter Employee Name" + styleMsgFooter,
					address : styleMsgHeader + "Please select Address"
							+ styleMsgFooter,
					salesHierarchy : styleMsgHeader
							+ "Please select Sales Hierarchy" + styleMsgFooter,
					marketHierarchy : styleMsgHeader
							+ "Please enter Market Hierarchy" + styleMsgFooter,
					marketLocation : styleMsgHeader
							+ "Please enter Market Location" + styleMsgFooter,
					distributionHouse : styleMsgHeader
							+ "Please select Distribution House"
							+ styleMsgFooter,
					status : styleMsgHeader + "Please select Status"
							+ styleMsgFooter,
					effectiveDate : styleMsgHeader
							+ "Please select Effective Date" + styleMsgFooter,
					expiaryDate : styleMsgHeader + "Please select Expiary Date"
							+ styleMsgFooter,

				},

				submitHandler : function(form) {

					form.submit();
				}
			});
});

// employee profile edit
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#empEditForm").validate(
			{
				ignore : "",
				rules : {

					employeeID : "required",
					employeeName : "required",
					address : "required",
					salesHierarchy : "required",
					marketHierarchy : "required",
					marketLocation : "required",
					distributionHouse : "required",
					status : "required",
					effectiveDate : {
						required : true,
						date : true
					},
					expiaryDate : {
						required : true,
						date : true
					},

				},

				// Specify the validation error messages
				messages : {
					employeeID : styleMsgHeader + "Please enter Employee ID"
							+ styleMsgFooter,
					employeeName : styleMsgHeader
							+ "Please enter Employee Name" + styleMsgFooter,
					address : styleMsgHeader + "Please select Address"
							+ styleMsgFooter,
					salesHierarchy : styleMsgHeader
							+ "Please select Sales Hierarchy" + styleMsgFooter,
					marketHierarchy : styleMsgHeader
							+ "Please enter Market Hierarchy" + styleMsgFooter,
					marketLocation : styleMsgHeader
							+ "Please enter Market Location" + styleMsgFooter,
					distributionHouse : styleMsgHeader
							+ "Please select Distribution House"
							+ styleMsgFooter,
					status : styleMsgHeader + "Please select Status"
							+ styleMsgFooter,
					effectiveDate : styleMsgHeader
							+ "Please select Effective Date" + styleMsgFooter,
					expiaryDate : styleMsgHeader + "Please select Expiary Date"
							+ styleMsgFooter,

				},

				submitHandler : function(form) {

					form.submit();
				}
			});
});
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
	$("#gpepeditForm")
			.validate(
					{
						ignore : "",
						rules : {
							employeeId : "required",
							employeeName : "required",
							address : "required",
							salesHierarchy : {
								required : true
							},
							marketHierarchy : {
								required : true
							},
							marketLocation : {
								required : true
							},

							status : {
								required : true,

							},

						},

						// Specify the validation error messages
						messages : {
							employeeId : styleMsgHeader
									+ "Please select Employee Id"
									+ styleMsgFooter,
							employeeName : styleMsgHeader
									+ "Please select Employee Name"
									+ styleMsgFooter,
							address : styleMsgHeader + "Please enter Address"
									+ styleMsgFooter,

							salesHierarchy : styleMsgHeader
									+ "Please enter  Sales Hierarchy"
									+ styleMsgFooter,

							marketHierarchy : styleMsgHeader
									+ "Please enter  Market Hierarchy"
									+ styleMsgFooter,
							marketLocation : styleMsgHeader
									+ "Please select Market Location"
									+ styleMsgFooter,
							status : styleMsgHeader + "Please enter  Status"
									+ styleMsgFooter,
						},

						submitHandler : function(form) {

							form.submit();
						}
					});

});



$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	$("#rcreateForm").validate(
			{
				ignore : "",
				rules : {
					// routePlanShortCode : "required",
					routePlanDescription : "required",
				/*
				 * rtrNameSelected: "required", dayToVisit : { required : true, },
				 * visitOrder : { required : true, },
				 * 
				 * effectiveDate : { required : true, date : true },
				 * 
				 * expiaryDate : { required : true, date : true },
				 */
				},

				// Specify the validation error messages
				messages : {
					// routePlanShortCode : styleMsgHeader
					// + "Please enter Route Plan Short Code"
					// + styleMsgFooter,

					routePlanDescription : styleMsgHeader
							+ "Please enter Route Plan Name" + styleMsgFooter,

				// rtrNameSelected : styleMsgHeader
				// + "Please select RTR Name"
				// + styleMsgFooter,
				// dayToVisit : styleMsgHeader
				// + "Please enter a Day To Visit"
				// + styleMsgFooter,
				//		
				//						
				// visitOrder : styleMsgHeader + "Please enter a Visit Order"
				// + styleMsgFooter,
				//			
				//			
				// effectiveDate : {
				// required : styleMsgHeader
				// + "Please enter Effective Date"
				// + styleMsgFooter,
				// date : styleMsgHeader
				// + "Please enter a valid Date"
				// + styleMsgFooter
				// },
				//			
				// expiaryDate : {
				// required : styleMsgHeader
				// + "Please enter Expiary Date"
				// + styleMsgFooter,
				// date : styleMsgHeader
				// + "Please enter a valid Date"
				// + styleMsgFooter
				// },
				},

				submitHandler : function(form) {

					form.submit();
				}
			});

});

$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	// ItemTrack

	$("#itemTrack").validate(
			{

				ignore : "",
				rules : {
					searchBy : "required",
					searchCriteria : "required",
					from : "required",
					to : "required",
					serial : "required",

				},

				// Specify the validation error messages
				messages : {
					searchBy : styleMsgHeader + "Please select Search Criteria"
							+ styleMsgFooter,
					searchCriteria : styleMsgHeader
							+ "Please select Search Criteria" + styleMsgFooter,
					from : styleMsgHeader + "Please Enter Start Value"
							+ styleMsgFooter,
					to : styleMsgHeader + "Please Enter End Value"
							+ styleMsgFooter,
					serial : styleMsgHeader + "Please Enter MSISDN/Serial No."
							+ styleMsgFooter,
				},

				submitHandler : function(form) {

					form.submit();
				}
			});
});

/*
 * $(function() { var styleMsgHeader = "<span class='ui-alert-error'
 * style='float: left; margin-left: 4px;margin-right: 4px;'><a
 * class='logoalert'></a>" + "<strong>Alert!</strong>"; var styleMsgFooter = "<span
 * style='float: left; margin-left: 4px;'></span></span>";
 * 
 * $("#locForm") .validate( { ignore: "", rules : { channel : "required",
 * layerName : "required", parentHierarchy : "required", // layerShortCode :
 * "required", // parentHiarchy : "required", parentLocationName: "required",
 * AdminHierarchyLayerName : "required", // AdminHierarchyLayerShortCode :
 * "required", AdminParentHierarchy : "required", // locationName : "required",
 * adminHierarchyLayer : "required", adminLocationShortCode : "required",
 * adminLocationName : "required", adminParentLocationName : "required",
 * locationName : "required",
 * 
 * 
 * 
 * effectiveDate : { // required : true, date : true }, expiaryDate:{ //
 * required : true, date : true }, expiryDate:{ // required : true, date : true },
 * EffectiveDate : { // required : true, date : true }, ExpiryDate : { //
 * required : true, date : true }, }, // Specify the validation error messages
 * messages : { adminHierarchyLayer : styleMsgHeader + "Please select hierarchy
 * layer name" + styleMsgFooter, channel : styleMsgHeader + "Please select
 * channel name" + styleMsgFooter,
 * 
 * adminLocationShortCode : styleMsgHeader + "Please enter location short code" +
 * styleMsgFooter, adminLocationName : styleMsgHeader + "Please enter location
 * name" + styleMsgFooter, adminParentLocationName : styleMsgHeader + "Please
 * enter parent location name" + styleMsgFooter,
 * 
 * 
 * layerName : styleMsgHeader + "Please enter layer name" + styleMsgFooter,
 * locationName : styleMsgHeader + "Please enter location name" +
 * styleMsgFooter,
 * 
 * layerShortCode : styleMsgHeader + "Please enter layer Short Code" +
 * styleMsgFooter,
 * 
 * parentHierarchy : styleMsgHeader + "Please select parent hierarchy" +
 * styleMsgFooter, AdminHierarchyLayerName : styleMsgHeader + "Please enter
 * layer name" + styleMsgFooter,
 * 
 * AdminHierarchyLayerShortCode : styleMsgHeader + "Please enter layer Short
 * Code" + styleMsgFooter,
 * 
 * AdminParentHierarchy : styleMsgHeader + "Please select Hierarchy" +
 * styleMsgFooter, parentLocationName : styleMsgHeader + "Please select Parent
 * Location Name" + styleMsgFooter,
 * 
 * 
 * 
 * effectiveDate : {
 * 
 * required : styleMsgHeader + "Please enter effective date" + styleMsgFooter,
 * 
 * date : styleMsgHeader + "Please enter a valid date" + styleMsgFooter },
 * 
 * expiaryDate : {
 * 
 * required : styleMsgHeader + "Please enter expiry date" + styleMsgFooter,
 * 
 * date : styleMsgHeader + "Please enter a valid date" + styleMsgFooter },
 * expiryDate : {
 * 
 * required : styleMsgHeader + "Please enter expiry date" + styleMsgFooter,
 * 
 * date : styleMsgHeader + "Please enter a valid date" + styleMsgFooter },
 * EffectiveDate : {
 * 
 * required : styleMsgHeader + "Please enter effective date" + styleMsgFooter,
 * 
 * date : styleMsgHeader + "Please enter a valid date" + styleMsgFooter },
 * 
 * ExpiryDate : {
 * 
 * required : styleMsgHeader + "Please enter expiry date" + styleMsgFooter,
 * 
 * date : styleMsgHeader + "Please enter a valid date" + styleMsgFooter }
 * 
 * submitHandler : function(form) {
 * 
 * form.submit(); } } });
 * 
 * });
 */

// Move Inventory
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#moveInventoryForm").validate(
			{
				ignore : "",
				rules : {

					movementDirection : "required",
					osdoName : {
						required : true,

					},

					movementDate : {
						required : true,
						date : true,
					},
					productID : "required",
					productDescription : "required",
					itemRange : "required",
					startRange : {
						required : true,
						number : true,
					},
					endRange : {
						required : true,
						number : true,
					},

				},

				// Specify the validation error messages
				messages : {
					movementDirection : styleMsgHeader
							+ "Please enter movement Direction"
							+ styleMsgFooter,
					osdoName : styleMsgHeader + "Please enter osdo Name"
							+ styleMsgFooter,
					movementDate : styleMsgHeader
							+ "Please select movement Date" + styleMsgFooter,
					productID : styleMsgHeader + "Please select product ID"
							+ styleMsgFooter,
					productDescription : styleMsgHeader
							+ "Please enter product Description"
							+ styleMsgFooter,
					itemRange : styleMsgHeader + "Please enter item/Range"
							+ styleMsgFooter,
					startRange : styleMsgHeader + "Please enter start Range"
							+ styleMsgFooter,
					endRange : styleMsgHeader + "Please enter end Range"
							+ styleMsgFooter,
				},

				submitHandler : function(form) {

					form.submit();
				}
			});
});

// Inventory allocation

$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#inventoryAllocation").validate(
			{
				ignore : "",
				rules : {

					distributor : {
						required : true,

					},
					osdo : {
						required : true,
					},
					se : {
						required : true,
					},
					inventory : {
						required : true,
					},
					inventoryDate : {
						required : true,
						date : true,
					},

				},

				// Specify the validation error messages
				messages : {
					distributor : styleMsgHeader + "Please select distributor"
							+ styleMsgFooter,
					osdo : styleMsgHeader + "Please select osdo "
							+ styleMsgFooter,
					inventoryDate : styleMsgHeader
							+ "Please enter inventory Date" + styleMsgFooter,
					inventory : styleMsgHeader + "Please select inventory"
							+ styleMsgFooter,
					se : styleMsgHeader + "Please select se" + styleMsgFooter,
				},

				submitHandler : function(form) {

					form.submit();
				}
			});
});

// Inventory allocation Acknowledgement

$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#invackbyseForm").validate(
			{
				ignore : "",
				rules : {

					distributor : {
						required : true,

					},
					osdo : {
						required : true,
					},
					se : {
						required : true,
					},
					inventory : {
						required : true,
					},

				},

				// Specify the validation error messages
				messages : {
					distributor : styleMsgHeader + "Please select distributor"
							+ styleMsgFooter,
					osdo : styleMsgHeader + "Please select osdo "
							+ styleMsgFooter,
					inventory : styleMsgHeader + "Please select inventory"
							+ styleMsgFooter,
					se : styleMsgHeader + "Please select se" + styleMsgFooter,
				},

				submitHandler : function(form) {

					form.submit();
				}
			});
});

// Sales Return
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#salesReturnForm").validate(
			{
				ignore : "",
				rules : {

					se : {
						required : true,

					},
					movementDate : {
						required : true,
						date : true,
					},

				},

				// Specify the validation error messages
				messages : {
					se : styleMsgHeader + "Please Select SE" + styleMsgFooter,
					movementDate : styleMsgHeader
							+ "Please select movement Date" + styleMsgFooter,
				},

				submitHandler : function(form) {

					form.submit();
				}
			});
});

// Sales Return Acknowledgement
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#salesReturnack").validate({
		ignore : "",
		rules : {

			se : {
				required : true,

			},

		},

		// Specify the validation error messages
		messages : {
			se : styleMsgHeader + "Please Select SE" + styleMsgFooter,
		},

		submitHandler : function(form) {

			form.submit();
		}
	});
});

// Assign Route TO SE
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#assignRouteSeForm").validate(
			{
				ignore : "",
				rules : {

					selectedSE : {
						required : true,

					},

				},

				// Specify the validation error messages
				messages : {
					selectedSE : styleMsgHeader + "Please enter Se Name"
							+ styleMsgFooter,

				},

				submitHandler : function(form) {

					form.submit();
				}
			});
});

// set up for track Actual Performance
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
	// Setup form validation on the #register-form element
	$("#tapForm").validate(
			{
				ignore : "",
				rules : {
					channel : {
						required : true,
					},
					marketHierarchyLevel : {
						required : true,
					},
					performanceFor : {
						required : true,
					}
				},
				// Specify the validation error messages
				messages : {
					channel : styleMsgHeader + "Please enter Channel"
							+ styleMsgFooter,
					marketHierarchyLevel : styleMsgHeader
							+ "Please enter Market Hierarchy Level"
							+ styleMsgFooter,
					performanceFor : styleMsgHeader
							+ "Please enter Performance For" + styleMsgFooter,
				},
				submitHandler : function(form) {
					form.submit();
				}
			});
});

// market location type view validation
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#mlhForm").validate(
			{
				ignore : "",
				rules : {

					channel : {
						required : true,

					},

				},

				// Specify the validation error messages
				messages : {
					channel : styleMsgHeader + "Please enter Channel "
							+ styleMsgFooter,

				},

				submitHandler : function(form) {

					form.submit();
				}
			});
});

$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#slhForm").validate(
			{
				ignore : "",
				rules : {

					channel : {
						required : true,

					},

				},

				// Specify the validation error messages
				messages : {
					channel : styleMsgHeader + "Please enter Channel "
							+ styleMsgFooter,

				},

				submitHandler : function(form) {

					form.submit();
				}
			});
});

$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#phForm").validate(
			{
				ignore : "",
				rules : {

					channel : {
						required : true,

					},

				},

				// Specify the validation error messages
				messages : {
					channel : styleMsgHeader + "Please enter Channel "
							+ styleMsgFooter,

				},

				submitHandler : function(form) {

					form.submit();
				}
			});
});
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	$.validator.addMethod("loginRegex", function(value, element) {
		return this.optional(element) || /^[a-z0-9\-\s]+$/i.test(value);
	}, "Username must contain only letters, numbers, or dashes.");

	$.validator.addMethod("loginRegex1", function(value, element) {
		return this.optional(element) || /^[a-z0-9\-]+$/i.test(value);
	}, "Username must contain only letters, numbers, or dashes.");

	// Setup form validation on the #register-form element
	$("#phEditForm")
			.validate(
					{
						ignore : "",
						rules : {
							channel : {
								required : true
							},
							partnerHierarchyName : {
								required : true,
								loginRegex : true,
							},
							partnerHierarchyShortCode : {
								required : true,
								loginRegex1 : true,
							},
							marketHierarchyId : "required",
						},

						// Specify the validation error messages
						messages : {
							channel : styleMsgHeader + "Please enter Channel"
									+ styleMsgFooter,
							partnerHierarchyName : {
								required : styleMsgHeader
										+ "Please Provide Partner Hierarchy Name"
										+ styleMsgFooter,
								loginRegex : styleMsgHeader
										+ "Name should not contain special characters"
										+ styleMsgFooter,
							},
							partnerHierarchyShortCode : {
								required : styleMsgHeader
										+ "Please Provide Partner Hierarchy Short Code"
										+ styleMsgFooter,
								loginRegex1 : styleMsgHeader
										+ "Name should not contain special characters"
										+ styleMsgFooter,
							},
							marketHierarchyId : styleMsgHeader
									+ "Please select Market Hierarchy"
									+ styleMsgFooter,

						},

						submitHandler : function(form) {

							form.submit();
						}
					});

});

$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
	// Setup form validation on the #register-form element
	$("#reportDashForm").validate(
			{
				ignore : "",
				rules : {
					searchBy : {
						required : true
					},
					searchByValue : "required",
				},
				// Specify the validation error messages
				messages : {
					searchBy : styleMsgHeader + "Please enter Search By"
							+ styleMsgFooter,
					searchByValue : styleMsgHeader
							+ "Please enter Search By Value" + styleMsgFooter,
				},
				submitHandler : function(form) {
					// form.submit();
				}
			});
});
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
	// Setup form validation on the #register-form element
	$("#grnNonGpForm").validate(
			{
				ignore : "",
				rules : {
					partnerName : {
						required : true
					},
					purchaseOrder : "required",
				},
				// Specify the validation error messages
				messages : {
					partnerName : styleMsgHeader + "Please Select Partner Name"
							+ styleMsgFooter,
					purchaseOrder : styleMsgHeader
							+ "Please Select Purchase Order" + styleMsgFooter,
				},
				submitHandler : function(form) {
					form.submit();
				}
			});
});
// MoveInventoryAcknowledgement
/*
 * $(function() { var styleMsgHeader = "<span class='ui-alert-error'
 * style='float: left; margin-left: 4px;margin-right: 4px;'><a
 * class='logoalert'></a>" + "<strong>Alert!</strong>"; var styleMsgFooter = "<span
 * style='float: left; margin-left: 4px;'></span></span>"; // Setup form
 * validation on the #register-form element $("#miackForm").validate( { ignore :
 * "", rules : { movementDirection : "required", }, // Specify the validation
 * error messages messages : { movementDirection : styleMsgHeader + "Please
 * select an option " + styleMsgFooter, }, submitHandler : function(form) {
 * form.submit(); } }); });
 */
// Sales Order Create
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
	// Setup form validation on the #register-form element
	$("#socForm").validate(
			{
				ignore : "",
				rules : {
					orderFrm : "required",
					se : "required",
					rtr : "required",

				},
				// Specify the validation error messages
				messages : {
					orderFrm : styleMsgHeader + "Please select an option "
							+ styleMsgFooter,
					se : styleMsgHeader + "Please select an option "
							+ styleMsgFooter,
					rtr : styleMsgHeader + "Please select an option "
							+ styleMsgFooter,

				},
				submitHandler : function(form) {
					form.submit();
				}
			});
});
// Return Order Create
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
	// Setup form validation on the #register-form element
	$("#roForm").validate(
			{
				ignore : "",
				rules : {
					returnFrom : "required",

					returnType : "required",
				},
				// Specify the validation error messages
				messages : {

					returnFrom : styleMsgHeader + "Please select an option "
							+ styleMsgFooter,

					returnType : styleMsgHeader + "Please select an option "
							+ styleMsgFooter,

				},
				submitHandler : function(form) {
					form.submit();
				}
			});
});

/*
 * $(function() { var styleMsgHeader = "<span class='ui-alert-error'
 * style='float: left; margin-left: 4px;margin-right: 4px;'><a
 * class='logoalert'></a>" + "<strong>Alert!</strong>"; var styleMsgFooter = "<span
 * style='float: left; margin-left: 4px;'></span></span>"; // Setup form
 * validation on the #register-form element $("#campaignForm").validate( {
 * ignore : "", rules : { campaignCode : "required", campaignName : { required :
 * true, }, startDate : { required : true, date : true }, endDate : { required :
 * true, date : true }, }, // Specify the validation error messages messages : {
 * campaignCode : styleMsgHeader + "Please enter campaign Code" +
 * styleMsgFooter, campaignName : styleMsgHeader + "Please enter campaign Name" +
 * styleMsgFooter, startDate : styleMsgHeader + "Please select start Date" +
 * styleMsgFooter, endDate : styleMsgHeader + "Please select end Date" +
 * styleMsgFooter, }, submitHandler : function(form) { form.submit(); } }); });
 */

// Role page field validation
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#roleCreateEditForm").validate(
			{
				ignore : "",
				rules : {
					roleName : "required",
					userType : "required",
				},

				// Specify the validation error messages
				messages : {
					roleName : styleMsgHeader + "Please enter Role Name"
							+ styleMsgFooter,
					userType : styleMsgHeader + "Please select User Type"
							+ styleMsgFooter

				},

				submitHandler : function(form) {

					form.submit();
				}
			});
});

// User page field validation
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
	
	$.validator.addMethod("loginRegex017", function(value, element) {
		return this.optional(element) || /^[0][1][7][0-9]+$/i.test(value);
	}, "");
	
	$.validator.addMethod("userCreateLength01", function(value, element) {
		if($("#usrDesig option:selected").text()=="Sales Executive"){
			if(value.length>2 && value.length<16)
				return true;
			else
				return false;
		}
		else
			return true;
		}, "");
	$.validator.addMethod("SEIsNumber", function(value, element) {
		if($("#usrDesig option:selected").text()=="Sales Executive"){
			console.log($.isNumeric(value)+'-----'+value);
			if(!$.isNumeric(value))
				return true;
			else
				return false;
		}
		else
			return true;
		}, "");
	
	
	// Setup form validation on the #register-form element
	$("#userCreateEditForm").validate(
			{
				ignore : "",
				rules : {
					seName: {
						userCreateLength01:true ,
						SEIsNumber:true,
						required: function(element) {					
						if($("#usrDesig option:selected").text()=="Sales Executive"){
						return true;
						}
						else
						return false; 
						} 
				    },
					userType : "required",
					userActivationDate : {
						required : true,
						date : true
					},
					userFName : "required",
					usrDesig : "required",
					workPhone : {
						required : true,
						number : true

					},
					mailAddress : {
						required: function(element) {					
							if($("#userType option:selected").text()=="GP"){
							return true;
							}
							else
							return false; 
							} ,
						email : true
					},
					userPassword : "required",
					//loginId : "required",
					loginId: {
							required: function(element) {					
							if($("#userType option:selected").text()=="GP"){
							return true;
							}
							else
							return false; 
							} 
					    },
					// motherName : "required",
					userExpiryDate : "required",
					homePhone : {
						number : true
					},
					mobile : {
						number : true
					},
					altMobile : {
						number : true
					},
					supervisorSal : {
						number : true
					},
					ersMsisdn :{
						number : true,
						loginRegex017 : true
					}
				},

				// Specify the validation error messages
				messages : {
					seName : {
					required : styleMsgHeader + "Please Enter SE # for SE"
					+ styleMsgFooter,
					userCreateLength01 : styleMsgHeader + "Please Enter SE # of length between 3 and 15"
					+ styleMsgFooter,
					SEIsNumber : styleMsgHeader + "SE# Must Not Be Number"
					+ styleMsgFooter
					},
					userType : styleMsgHeader + "Please enter User Name"
							+ styleMsgFooter,
					userType : styleMsgHeader + "Please enter User Name"
							+ styleMsgFooter,
					userActivationDate : {
						required : styleMsgHeader
								+ "Please enter effective date"
								+ styleMsgFooter,
						date : styleMsgHeader + "Please enter Employee Name"
								+ styleMsgFooter
					},
					userFName : styleMsgHeader + "Please enter Employee Name"
							+ styleMsgFooter,
					usrDesig : styleMsgHeader + "Please select Designation"
							+ styleMsgFooter,
					workPhone : {
						required : styleMsgHeader + "Please enter work phone"
								+ styleMsgFooter,
						number : styleMsgHeader + "Please enter number only"
								+ styleMsgFooter
					},
					mailAddress : styleMsgHeader + "Please enter Mail Address"
							+ styleMsgFooter,
					userPassword : styleMsgHeader + "Please enter Password"
							+ styleMsgFooter,
					loginId : styleMsgHeader + "Please select enter Login ID"
							+ styleMsgFooter,
					/*
					 * motherName : styleMsgHeader + "Please select enter Mother
					 * Name" + styleMsgFooter,
					 */
					userExpiryDate : styleMsgHeader
							+ "Please select enter User Expiry Date"
							+ styleMsgFooter,
					homePhone : {
						number : styleMsgHeader + "Please enter number only"
								+ styleMsgFooter
					},
					mobile : {
						number : styleMsgHeader + "Please enter number only"
								+ styleMsgFooter
					},
					altMobile : {
						number : styleMsgHeader + "Please enter number only"
								+ styleMsgFooter
					},
					supervisorSal : {
						number : styleMsgHeader + "Please enter number only"
								+ styleMsgFooter
					},
					ersMsisdn : {
						number : styleMsgHeader + "Please enter number only"
						+ styleMsgFooter ,
						loginRegex017 : styleMsgHeader + "Please provide ERS number starting with '017'"
						+ styleMsgFooter
					}

				},

				submitHandler : function(form) {

					form.submit();
				}
			});
});

// User delegation page field validation
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#userDelegationCreateEditForm").validate(
			{
				ignore : "",
				rules : {
					delegationStartDt : "required",
					selectedUser : "required",
					delegationEndDt : "required",
				},

				// Specify the validation error messages
				messages : {
					delegationStartDt : styleMsgHeader
							+ "Please enter Start Date" + styleMsgFooter,
					selectedUser : styleMsgHeader + "Please select User"
							+ styleMsgFooter,
					delegationEndDt : styleMsgHeader + "Please enter End date"
							+ styleMsgFooter

				},

				submitHandler : function(form) {

					form.submit();
				}
			});
});
// Route Search View page field validation
/*
 * $(function() { var styleMsgHeader = "<span class='ui-alert-error'
 * style='float: left; margin-left: 4px;margin-right: 4px;'><a
 * class='logoalert'></a>" + "<strong>Alert!</strong>"; var styleMsgFooter = "<span
 * style='float: left; margin-left: 4px;'></span></span>";
 * $.validator.addMethod("loginRegex", function(value, element) { return
 * this.optional(element) || /^[a-z0-9\-\s]+$/i.test(value); }, "Username must
 * contain only letters, numbers, or dashes."); // Setup form validation on the
 * #register-form element $("#routeViewForm") .validate( { ignore : "", rules : {
 * routeOwner : "required", channelId : "required", locationTypeId : "required",
 * marketLocation : "required", route : { required : true, minlength : 3,
 * loginRegex : true, }, }, // Specify the validation error messages messages : {
 * channelId : styleMsgHeader + "Please Select Channel" + styleMsgFooter,
 * locationTypeId : styleMsgHeader + "Please Select Market Hierarchy" +
 * styleMsgFooter, marketLocation : styleMsgHeader + "Please Select Market
 * location" + styleMsgFooter,
 * 
 * routeOwner : styleMsgHeader + "Please Select Route Owner" + styleMsgFooter,
 * 
 * route : { required : styleMsgHeader + "Please enter Route Name " +
 * styleMsgFooter, minlength : styleMsgHeader + "Please enter Route Name having
 * atleast 3 digit" + styleMsgFooter, loginRegex : styleMsgHeader + "Should not
 * contain special characters" + styleMsgFooter, }, },
 * 
 * submitHandler : function(form) {
 * 
 * form.submit(); } }); });
 */
// Realize Payment View page field validation
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#realizePaymentForm")
			.validate(
					{
						ignore : "",
						rules : {
							channelPayment : "required",
							marketHierarchy : "required",
							marketLocation : "required",
							posCode : "required",

						},

						// Specify the validation error messages
						messages : {
							channelPayment : styleMsgHeader
									+ "Please Select Channel" + styleMsgFooter,
							marketHierarchy : styleMsgHeader
									+ "Please Select Market Hierarchy"
									+ styleMsgFooter,
							marketLocation : styleMsgHeader
									+ "Please Select Market location"
									+ styleMsgFooter,

							posCode : styleMsgHeader
									+ "Please Select Partner Code"
									+ styleMsgFooter,
						/*
						 * seName : styleMsgHeader + "Please Select SE Name " +
						 * styleMsgFooter, routeMember : styleMsgHeader +
						 * "Please Select Route Member " + styleMsgFooter,
						 */

						},

						submitHandler : function(form) {

							form.submit();
						}
					});
});

// -----------------------------Miscellaneous-------------------------------

// ------------------ Campaign Validation Starts here--------------------

$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	$.validator.addMethod("loginRegex", function(value, element) {
		return this.optional(element) || /^[a-z0-9\-\_\s]+$/i.test(value);
	}, "Username must contain only letters, numbers, or dashes.");

	$.validator.addMethod("dateChk", function(value, element) {
		return compareDates($('#startDate').val(), value);
	}, "Expiry Date should be greater than Effective Date.");

	// Setup form validation on the #register-form element
	$("#campaignForm")
			.validate(
					{
						ignore : "",
						rules : {
							campaignCode : {
								//required : true,
								loginRegex : true,
							},
							campaignName : {
								required : true,
								loginRegex : true,
							},
							endDate : {
								required : true,
								date : true,
								dateChk : $('#endDate').val()
							},
							startDate : {
								required : true,
								date : true
							},

						/*
						 * productCam : "required", compensation : { required :
						 * true, number : true, }, nonInventoryGift : {
						 * loginRegex : true, }, campaignGroup : { required :
						 * true, loginRegex : true, }, minRange : { required :
						 * true, number : true, }, topRange : { required : true,
						 * number : true, },
						 */

						},

						// Specify the validation error messages
						messages : {
							campaignCode : {
								required : styleMsgHeader
										+ "Please enter Campaign Code"
										+ styleMsgFooter,
								loginRegex : styleMsgHeader
										+ "Code should not contain special charecters"
										+ styleMsgFooter,
							},
							campaignName : {
								required : styleMsgHeader
										+ "Please enter Campaign Name"
										+ styleMsgFooter,
								loginRegex : styleMsgHeader
										+ "Name should not contain special charecters"
										+ styleMsgFooter,
							},
							startDate : styleMsgHeader
									+ "Please select Effective Date"
									+ styleMsgFooter,

							endDate : {
								required : styleMsgHeader
										+ "Please select Expiry Date"
										+ styleMsgFooter,
								dateChk : styleMsgHeader
										+ "Expiry Date should be greater than Effective Date and Present Date."
										+ styleMsgFooter,
							},

						/*
						 * productCam : styleMsgHeader + "Please select Product" +
						 * styleMsgFooter,
						 * 
						 * compensation : { required : styleMsgHeader + "Please
						 * enter Compensation" + styleMsgFooter, number :
						 * styleMsgHeader + "Please enter proper Compensation" +
						 * styleMsgFooter, },
						 * 
						 * nonInventoryGift : { loginRegex : styleMsgHeader +
						 * "Please enter proper Non Inventory Gift" +
						 * styleMsgFooter, },
						 * 
						 * campaignGroup : { required : styleMsgHeader + "Please
						 * enter Campaign Group" + styleMsgFooter, loginRegex :
						 * styleMsgHeader + "Campaign Group should not contain
						 * special charecters" + styleMsgFooter, }, minRange :
						 * styleMsgHeader + "Please enter Min Range" +
						 * styleMsgFooter, topRange : styleMsgHeader + "Please
						 * enter Top Range" + styleMsgFooter,
						 */

						},

						submitHandler : function(form) {
							form.submit();
						}
					});
});

// ------------------ Broadcast Validation Starts here-------------------------

$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
	$.validator.addMethod("dateChk", function(value, element) {
		return compareDates($('#startDate').val(), value);
	}, "Expiry Date should be greater than Effective Date.");

	// Setup form validation on the #register-form element
	$("#broadcastForm")
			.validate(
					{
						ignore : "",
						rules : {
							startDate : {
								required : true,
								date : true
							},
							endDate : {
								required : true,
								date : true,
								//dateChk : $('#endDate').val()
							},
							marketLocation : "required",
							role : "required",
							body : "required",

						},

						// Specify the validation error messages
						messages : {
							startDate : styleMsgHeader
									+ "Please select Effective Date"
									+ styleMsgFooter,

							endDate : {
								required : styleMsgHeader
										+ "Please select Expiry Date"
										+ styleMsgFooter,
								/*dateChk : styleMsgHeader
										+ "Expiry Date should be greater than Effective Date and Present Date."
										+ styleMsgFooter,*/
							},
							marketLocation : styleMsgHeader
									+ "Please select Market Location"
									+ styleMsgFooter,
							role : styleMsgHeader + "Please select Role"
									+ styleMsgFooter,
							body : styleMsgHeader + "Please enter Message"
									+ styleMsgFooter,

						},

						submitHandler : function(form) {
							form.submit();
						}
					});
});

// ----------------- Item Track Validation Strats here---------------------

$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// Setup form validation on the #register-form element
	$("#itemTrack").validate(
			{
				ignore : "",
				rules : {
					searchBy : "required",
					from : "required",
					to : "required",
					serial : "required",
				},

				// Specify the validation error messages
				messages : {
					searchBy : styleMsgHeader + "Please select Serch Criteria"
							+ styleMsgFooter,
					from : styleMsgHeader + "Please enter Strat value"
							+ styleMsgFooter,
					to : styleMsgHeader + "Please enter End Value"
							+ styleMsgFooter,
					serial : styleMsgHeader + "Please enter MSISDN/Serial No."
							+ styleMsgFooter,
				},

				submitHandler : function(form) {
					form.submit();
				}
			});
});

// -------------------- Audit Stock starts here-------------------------

$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";
	// Setup form validation on the #register-form element
	$("#auditStockForm").validate(
			{
				ignore : "",
				rules : {
					auditBy : "required",
					productHead : "required",
					partnerId : "required",
					serial : "required",
					fromSerial : "required",
					toSerial : "required",
				}, // Specify the validation error messages
				messages : {

					auditBy : styleMsgHeader + "Please select Audit By"
							+ styleMsgFooter,
					productHead : styleMsgHeader + "Please select Product Head"
							+ styleMsgFooter,
					partnerId : styleMsgHeader + "Please select Partner"
							+ styleMsgFooter,
					serial : styleMsgHeader + "Please enter Serial No./MSISDN "
							+ styleMsgFooter,
					fromSerial : styleMsgHeader
							+ "Please enter From Serial No./MSISDN"
							+ styleMsgFooter,
					toSerial : styleMsgHeader
							+ "Please enter To Serial No./MSISDN"
							+ styleMsgFooter,
				},
				submitHandler : function(form) {
					form.submit();
				}
			});
});

// Audit Stock ends here

// -------------------- Premium Number starts here-------------------------

/*
 * $(function() { var styleMsgHeader = "<span class='ui-alert-error'
 * style='float: left; margin-left: 4px;margin-right: 4px;'><a
 * class='logoalert'></a>" + "<strong>Alert!</strong>"; var styleMsgFooter = "<span
 * style='float: left; margin-left: 4px;'></span></span>"; // Setup form
 * validation on the #register-form element $("#pncForm").validate( { ignore :
 * "", rules : { file : "required", }, // Specify the validation error messages
 * messages : {
 * 
 * file : styleMsgHeader + "Please select a file to upload" + styleMsgFooter, },
 * submitHandler : function(form) { form.submit(); } }); });
 */

// Premium Number ends here
