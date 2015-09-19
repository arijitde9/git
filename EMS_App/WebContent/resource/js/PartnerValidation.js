//Partner Management validation method--sohini 1.8.2014
$(function() {
	var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
			+ "<strong>Alert!</strong>";
	var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

	// for partner onboarding
	$(function() {
		var styleMsgHeader = "<span class='ui-alert-error' style='float: left; margin-left: 4px;margin-right: 4px;'><a class='logoalert'></a>"
				+ "<strong>Alert!</strong>";
		var styleMsgFooter = "<span style='float: left; margin-left: 4px;'></span></span>";

		$.validator.addMethod("loginRegex", function(value, element) {
			return this.optional(element) || /^[0][1][7][0-9]+$/i.test(value);
		}, "");

		$.validator.addMethod("phnoRegex", function(value, element) {
			return this.optional(element) || /^[0-9\,\-\s]+$/i.test(value);
		}, "Phone No must contain only numbers.");

		$.validator.addMethod("mobileRegex", function(value, element) {
			return this.optional(element) || /^[0-9]+$/i.test(value);
		}, "Mobile No must contain only numbers.");
		
		$.validator
				.addMethod("nameRegex", function(value, element) {
					return this.optional(element)
							|| /^[a-z0-9\-\&\s]+$/i.test(value);
				},
						"Partner name can contain only letters, numbers, dashes, and ampersand(&).");

		$("#partnerOnBoardForm")
				.validate(
						{
							ignore : "",
							rules : {
								channelId : {
									required : true
								},
								partnerTypeId : "required",
								statusId : "required",
								name : {
									required : true,
								},
								tntNumber : {
									phnoRegex : true,
								},
								// shortCode : "required",
								//
								// gpThana : "required",
								ers1 : {
									loginRegex : true,
									minlength : 11,
									maxlength : 11
								},
								ers2 : {
									loginRegex : true,
									minlength : 11,
									maxlength : 11
								},
								ers3 : {
									loginRegex : true,
									minlength : 11,
									maxlength : 11
								},
								ers4 : {
									loginRegex : true,
									minlength : 11,
									maxlength : 11
								},
								ers5 : {
									loginRegex : true,
									minlength : 11,
									maxlength : 11
								},
								ers6 : {
									loginRegex : true,
									minlength : 11,
									maxlength : 11
								},
								ers7 : {
									loginRegex : true,
									minlength : 11,
									maxlength : 11
								},
								mfs1 : {
									loginRegex : true,
									minlength : 11,
									maxlength : 11
								},
								mfs2 : {
									loginRegex : true,
									minlength : 11,
									maxlength : 11
								},
								mfs3 : {
									loginRegex : true,
									minlength : 11,
									maxlength : 11
								},
								mfs4 : {
									loginRegex : true,
									minlength : 11,
									maxlength : 11
								},
								mfs5 : {
									loginRegex : true,
									minlength : 11,
									maxlength : 11
								},
								mfs6 : {
									loginRegex : true,
									minlength : 11,
									maxlength : 11
								},
								mfs7 : {
									loginRegex : true,
									minlength : 11,
									maxlength : 11
								},
								tornedoCon1 : {
									loginRegex : true,
									minlength : 11,
									maxlength : 11
								},
								tornedoCon2 : {
									loginRegex : true,
									minlength : 11,
									maxlength : 11
								},
								gpPhNumber : {
									loginRegex : true,
									minlength : 11,
									maxlength : 11
								},
								mobileNumber : {
									required : true,
									minlength : 11,
									maxlength : 11,
									mobileRegex:true
								},
								addrss : "required",
								adminLocation : "required",
								marketLocation : "required",
								emailAddr : {
									email : true
								},
								gpNameAddr : {
									email : true
								},
								tornedoMail : {
									email : true
								},
								drcCommId : "required",
								stpId : "required",
								serviceTypeId : "required",

							},

							// Specify the validation error messages
							messages : {
								channelId : styleMsgHeader
										+ "Please select Channel"
										+ styleMsgFooter,
								partnerTypeId : styleMsgHeader
										+ "Please select Partner Type"
										+ styleMsgFooter,
								name : {
									required : styleMsgHeader
											+ "Please provide Partner Name"
											+ styleMsgFooter,
								},
								// shortCode : styleMsgHeader
								// + "Please provide Partner ShortCode"
								// + styleMsgFooter,
								//
								// gpThana : styleMsgHeader
								// + "Please select GP Thana"
								// + styleMsgFooter,
								addrss : styleMsgHeader
										+ "Please provide Partner Address"
										+ styleMsgFooter,
								statusId : styleMsgHeader
										+ "Please select Status"
										+ styleMsgFooter,
								mobileNumber : styleMsgHeader
										+ "Please enter proper Phone Number"
										+ styleMsgFooter,
								ers1 : {
									loginRegex : styleMsgHeader
											+ "Please enter a valid ERS Number starting with 017"
											+ styleMsgFooter,
									minlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
									maxlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
								},
								ers2 : {
									loginRegex : styleMsgHeader
											+ "Please enter a valid ERS Number starting with 017"
											+ styleMsgFooter,
									minlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
									maxlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
								},
								ers3 : {
									loginRegex : styleMsgHeader
											+ "Please enter a valid ERS Number starting with 017"
											+ styleMsgFooter,
									minlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
									maxlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
								},
								ers4 : {
									loginRegex : styleMsgHeader
											+ "Please enter a valid ERS Number starting with 017"
											+ styleMsgFooter,
									minlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
									maxlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
								},
								ers5 : {
									loginRegex : styleMsgHeader
											+ "Please enter a valid ERS Number starting with 017"
											+ styleMsgFooter,
									minlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
									maxlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
								},
								ers6 : {
									loginRegex : styleMsgHeader
											+ "Please enter a valid ERS Number starting with 017"
											+ styleMsgFooter,
									minlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
									maxlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
								},
								ers7 : {
									loginRegex : styleMsgHeader
											+ "Please enter a valid ERS Number starting with 017"
											+ styleMsgFooter,
									minlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
									maxlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
								},
								mfs1 : {
									loginRegex : styleMsgHeader
											+ "Please enter a valid MFS Number starting with 017"
											+ styleMsgFooter,
									minlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
									maxlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
								},
								mfs2 : {
									loginRegex : styleMsgHeader
											+ "Please enter a valid MFS Number starting with 017"
											+ styleMsgFooter,
									minlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
									maxlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
								},
								mfs3 : {
									loginRegex : styleMsgHeader
											+ "Please enter a valid MFS Number starting with 017"
											+ styleMsgFooter,
									minlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
									maxlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
								},
								mfs4 : {
									loginRegex : styleMsgHeader
											+ "Please enter a valid MFS Number starting with 017"
											+ styleMsgFooter,
									minlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
									maxlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
								},
								mfs5 : {
									loginRegex : styleMsgHeader
											+ "Please enter a valid MFS Number starting with 017"
											+ styleMsgFooter,
									minlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
									maxlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
								},
								mfs6 : {
									loginRegex : styleMsgHeader
											+ "Please enter a valid MFS Number starting with 017"
											+ styleMsgFooter,
									minlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
									maxlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
								},
								mfs7 : {
									loginRegex : styleMsgHeader
											+ "Please enter a valid Number starting with 017"
											+ styleMsgFooter,
									minlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
									maxlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
								},
								tornedoCon1 : {
									loginRegex : styleMsgHeader
											+ "Please enter a valid Number starting with 017"
											+ styleMsgFooter,
									minlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
									maxlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
								},
								tntNumber : styleMsgHeader
										+ "Phone No must contain only numbers."
										+ styleMsgFooter,

								tornedoCon2 : {
									loginRegex : styleMsgHeader
											+ "Please enter a valid MFS Number starting with 017"
											+ styleMsgFooter,
									minlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
									maxlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
								},
								gpPhNumber : {
									loginRegex : styleMsgHeader
											+ "Please enter a valid Number starting with 017"
											+ styleMsgFooter,
									minlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
									maxlength : styleMsgHeader
											+ "Please enter a 11 digit Number"
											+ styleMsgFooter,
								},
								emailAddr : styleMsgHeader
										+ "Please enter a valid Email Address"
										+ styleMsgFooter,
								gpNameAddr : styleMsgHeader
										+ "Please enter a valid Email Address"
										+ styleMsgFooter,
								tornedoMail : styleMsgHeader
										+ "Please enter a valid Email Address"
										+ styleMsgFooter,
								adminLocation : styleMsgHeader
										+ "Please select Admin Location"
										+ styleMsgFooter,
								marketLocation : styleMsgHeader
										+ "Please select Market Location"
										+ styleMsgFooter,
								drcCommId : styleMsgHeader
										+ "Please select DRC Commission"
										+ styleMsgFooter,
								stpId : styleMsgHeader
										+ "Please select STP flag"
										+ styleMsgFooter,
								serviceTypeId : styleMsgHeader
										+ "Please select Service Type"
										+ styleMsgFooter,
							},

							submitHandler : function(form) {

								form.submit();
							}
						});

	});

	// partner onboard ends

	$("#partnerProposeForm").validate(
			{
				ignore : "",
				rules : {
					channelId : {
						required : true
					},
					proposedByName : {
						required : true
					},
					name : "required",
					posCat : {
						// range: [1, 999]

						required : true

					},
					// adminLocation : {
					// required : true
					// },

					marketLocation : {
						required : true
					},

					addrss : {
						required : true
					},
					// contPhNumber : {
					// minlength : 11,
					// maxlength : 11,
					// number : true
					// },
					partnerTypeId : {
						required : true
					},
					mobileNumber : {

						required : true,
						minlength : 11,
						maxlength : 11,
						number : true

					},
					emailAddr : {
						email : true
					}
				},

				// Specify the validation error messages
				messages : {
					channelId : styleMsgHeader + "Please select Channel"
							+ styleMsgFooter,

					proposedByName : styleMsgHeader
							+ "Please select Proposed By" + styleMsgFooter,

					name : styleMsgHeader + "Please select Partner Name"
							+ styleMsgFooter,
					partnerType : styleMsgHeader + "Please select Partner Type"
							+ styleMsgFooter,
					// partnerShortCode : styleMsgHeader
					// + "Please enter Partner Short Code"
					// + styleMsgFooter,
					partnerAddress : styleMsgHeader
							+ "Please select Partner Address" + styleMsgFooter,
					// adminLocation : styleMsgHeader
					// + "Please select Admin Location" + styleMsgFooter,
					marketLocation : styleMsgHeader
							+ "Please select Market Location" + styleMsgFooter,
					addrss : styleMsgHeader + "Please enter Partner Address"
							+ styleMsgFooter,
					posCat : styleMsgHeader + "Please add POS Category"
							+ styleMsgFooter,
					/*
					 * indx1 : styleMsgHeader + " Atleast one row is required" +
					 * styleMsgFooter,
					 */
					partnerTypeId : styleMsgHeader
							+ "Please select Partner Type" + styleMsgFooter,
					mobileNumber : {

						/*
						 * required : styleMsgHeader + "Please enter a valid
						 * number" + styleMsgFooter
						 */
						required : styleMsgHeader + "Please enter Phone Number"
								+ styleMsgFooter,
						number : styleMsgHeader + "Please enter a valid Number"
								+ styleMsgFooter,
						minlength : styleMsgHeader
								+ "Please enter a 11 digit Number"
								+ styleMsgFooter,
						maxlength : styleMsgHeader
								+ "Please enter a 11 digit Number"
								+ styleMsgFooter
					},
					emailAddr : styleMsgHeader
							+ "Please enter a valid Email Address"
							+ styleMsgFooter,

					contPhNumber : {

						number : styleMsgHeader + "Please enter a valid Number"
								+ styleMsgFooter,
						minlength : styleMsgHeader
								+ "Please enter a 11 digit Number"
								+ styleMsgFooter,
						maxlength : styleMsgHeader
								+ "Please enter a 11 digit Number"
								+ styleMsgFooter
					}

				},

				submitHandler : function(form) {

					form.submit();
				}
			});

	$("#cvForm").validate(
			{
				ignore : "",
				rules : {
					distributor : "required",
					channelId : {
						required : true
					},

					srchPartnerTypeId : "required"

				},
				messages : {
					distributor : styleMsgHeader + "Please select Partner"
							+ styleMsgFooter,
					channelId : styleMsgHeader + "Please select Channel"
							+ styleMsgFooter,

					srchPartnerTypeId : styleMsgHeader
							+ "Please select Partner Type" + styleMsgFooter

				},

				submitHandler : function(form) {
					form.submit();
				}
			});
});

$(document).ready(function() {

	$('#deboard').click(function() {

		/* $("#poTable0").find(".forDeboard").removeAttr('disabled'); */
		$("#remarks").removeAttr('disabled');
		$("#save").hide();
		$("#editable1").hide();
		$("#deboard").hide();
		$("#saveDeboard").show();
		$("#suspendPos").hide();
		$("#saveSuspend").hide();
		$("#deboard").hide();
		$("#resumePos").hide();
		$("#saveResume").hide();
		$("#saveDeboardPartner").hide();

		var i = $('#indx1').val();
		i--;
		for (; i > -1; i--) {
			var td = 'statusDecision' + i;
			$('#' + td).prop('disabled', false);
		}

	});

});

function validateCheck() {

	var list = $("[id^=statusDecision][type=checkbox]");
	var posCheck = "";
	var posTypeCheck="";
	var flag = false;
	for ( var i = 0; i < list.length; i++) {
		if (list[i].checked == true && list[i].disabled == false) {
			flag = true;
			var temp = 'posCatId' + i;
			var posTypeCheckTemp = 'posTypeId' + i;
			$('#' + temp).prop('disabled', false);
			posCheck = posCheck + "," + document.getElementById(temp).value;
			posTypeCheck = posTypeCheck + "," + document.getElementById(posTypeCheckTemp).value;

		}
	}
	$("#posCheck").val(posCheck);
	$("#posTypeCheck").val(posTypeCheck);
	return flag;
}

function validateCheckForTelcoDeboard() {
	var list = $("[id^=statusDecision][type=checkbox]");
	var flag = 1;
	for ( var i = 0; i < list.length; i++) {
		if (list[i].checked == true && list[i].disabled == false) {
			flag = 2;
			var posTypeCheckTemp = 'posTypeId' + i;
			if(document.getElementById(posTypeCheckTemp).value == 4 && list.length > 1 ){
				flag = 3;
				break;
			}
		}
	}
	return flag;
}


function chckERS(i) {
	if (($('#posTypeId' + i).val() == "988")
			&& ($('#ers1').val() == "" || $('#mfs1').val() == "")) {
		alert("Please Enter Primary ERS NO & MFS NO first");
		$('#posTypeId' + i).val("");
		$("#posCatId" + i).find("option").remove();
		$("#posCatId" + i).append("<option value=''>Please Select</option>");
	}
	if (($('#posTypeId' + i).val() == "987") && ($('#ers1').val() == "")) {
		alert("Please Enter Primary ERS NO first");
		$('#posTypeId' + i).val("");
		$("#posCatId" + i).find("option").remove();
		$("#posCatId" + i).append("<option value=''>Please Select</option>");
	}

	if (($('#posTypeId' + i).val() == "5") && ($('#mfs1').val() == "")) {
		alert("Please Enter Primary MFS NO first");
		$('#posTypeId' + i).val("");
		$("#posCatId" + i).find("option").remove();
		$("#posCatId" + i).append("<option value=''>Please Select</option>");
	}

	else {
		chckDulicate(i);
	}
}
function chckDulicate(i) {

	var flag = false;
	var k = $('#indx1').val();
	var l = k - 1;
	if ($("#partnerTypeId").find("option:selected").text() == 'DTR') {
		if ($('#posTypeId' + i).val() != "988") {
			alert("Please select POS Type DIST");
			$('#posTypeId' + i).val("");
			$("#posCatId" + i).find("option").remove();
			$("#posCatId" + i)
					.append("<option value=''>Please Select</option>");

		} else {
			$('#addPos').prop('disabled', true);
		}
	} else {
		if ($('#posTypeId' + i).val() == "988") {
			if (k == 1) {
				alert("You cannot select any other POS Type");
				$('#addPos').prop('disabled', true);

			} else {

				for (j = 0; j < k - 1; j++) {
					if (document.getElementById("posTypeId" + j) == null) {
						for (; l > -1; l--) {
							flag = true;
							if (document.getElementById("posTypeId" + (l - 1)) == null) {
								alert("You cannot select any other POS Type");
								$('#addPos').prop('disabled', true);
								break;
							} else {
								alert('To select POS Type DIST,please delete other POS Types');
								$('#posTypeId' + i).val("");
								$("#posCatId" + i).find("option").remove();
								$("#posCatId" + i)
										.append(
												"<option value=''>Please Select</option>");
								break;
							}
						}
						if (flag == false) {
							alert("You cannot select any other POS Type");
							$('#addPos').prop('disabled', true);
							break;
						} else {
							break;
						}

					}

					else {
						alert('To select POS Type DIST,please delete other POS Types');
						$('#posTypeId' + i).val("");
						$("#posCatId" + i).find("option").remove();
						$("#posCatId" + i).append(
								"<option value=''>Please Select</option>");
						break;
					}
				}

			}

		} else {

			var posType = $('#posTypeId' + i).val();
			for (j = 0; j < k; j++) {

				if (k != 1) {
					if (i != j) {

						if (($('#posTypeId' + i).val() == $('#posTypeId' + j)
								.val())
								&& ($('#posStatusId' + j).val() == "9995" || $(
										'#posStatusId' + j).val() == "9999")) {
							alert('Please select different POS Type');
							$('#posTypeId' + i).val("");
							$("#posCatId" + i).find("option").remove();
							$("#posCatId" + i).append(
									"<option value=''>Please Select</option>");
							$('#addPos').prop('disabled', false);
							break;

						}
						
						else if($('#posTypeId'+i).val()=="4" && $('#posTypeId'+j).val()=="4" && $('#posStatusId' + j).val() != "9990"){
							alert('Please select different POS Type than TELCO');
							$('#posTypeId' + i).val("");
							$("#posCatId" + i).find("option").remove();
							$("#posCatId" + i).append(
									"<option value=''>Please Select</option>");
							$('#addPos').prop('disabled', false);
							break;
						}
					}
				}
				$('#addPos').prop('disabled', false);
			}
		}
	}
}

$(document).ready(function() {

	$('#suspendPos').click(function() {

		// $("#poTable0").find(".forDeboard").removeAttr('disabled');
		$("#remarks").removeAttr('disabled');

		$("#save").hide();
		$("#editable1").hide();
		$("#suspendPos").hide();
		$("#saveSuspend").hide();
		$("#resumePos").hide();
		$("#saveResume").hide();
		$("#deboard").hide();
		$("#saveDeboardPartner").hide();
		$("#saveDeboard").hide();
		$("#saveSuspendPos").show();
		$("#statusDecision").val("suspend");

		var i = $('#indx1').val();
		i--;
		for (; i > -1; i--) {
			var td = 'statusDecision' + i;
			$('#' + td).prop('disabled', false);
		}

	});
});

$(document).ready(function() {

	$('#resumePos').click(function() {

		// $("#poTable0").find(".forDeboard").removeAttr('disabled');
		$("#remarks").removeAttr('disabled');

		$("#save").hide();
		$("#editable1").hide();
		$("#resumePos").hide();
		$("#saveResume").hide();
		$("#suspendPos").hide();
		$("#saveSuspend").hide();
		$("#deboard").hide();
		$("#saveDeboardPartner").hide();
		$("#saveDeboard").hide();
		$("#saveSuspendPos").hide();
		$("#saveResumePos").show();

		$("#statusDecision").val("suspend");

		var i = $('#indx1').val();
		i--;
		for (; i > -1; i--) {
			var td = 'statusDecision' + i;
			$('#' + td).prop('disabled', false);
		}

	});
});

function resetDropdownPartnerTypeByChannel() {

	$("#channelId").change(
			function() {
				if (this.value == null || this.value == undefined
						|| this.value == '') {
					$("#partnerTypeId").find("option").remove();
					$("#partnerTypeId").append(
							"<option value=''>Please Select</option>");

					$("#parentId").find("option").remove();
					$("#parentId").append(
							"<option value=''>Please Select</option>");

					$("#marketLocationType").find("option").remove();
					$("#marketLocationType").append(
							"<option value=''>Please Select</option>");

					$("#marketLocations").find("option").remove();
					$("#marketLocations").append(
							"<option value=''>Please Select</option>");

					$("#marketLocation").find("option").remove();

					$("#partMarketLocation").find("option").remove();

					$("#gpThana").find("option").remove();
					$("#gpThana").append(
							"<option value=''>Please Select</option>");

					$("#adminLocType").val("");

					$("#adminLocation").find("option").remove();
					$("#adminLocation").append(
							"<option value=''>Please Select</option>");
				} else {
					populateParentType();

					$("#parentId").find("option").remove();
					$("#parentId").append(
							"<option value=''>Please Select</option>");

					$("#marketLocationType").find("option").remove();
					$("#marketLocationType").append(
							"<option value=''>Please Select</option>");

					$("#marketLocations").find("option").remove();
					$("#marketLocations").append(
							"<option value=''>Please Select</option>");

					$("#marketLocation").find("option").remove();

					$("#partMarketLocation").find("option").remove();

					$("#gpThana").find("option").remove();
					$("#gpThana").append(
							"<option value=''>Please Select</option>");

					$("#adminLocType").val("");

					$("#adminLocation").find("option").remove();
					$("#adminLocation").append(
							"<option value=''>Please Select</option>");

				}
			});

}

function resetDropdownParentByPartnertype() {

	$("#partnerTypeId").change(
			function() {
				if (this.value == null || this.value == undefined
						|| this.value == '') {

					$("#parentId").find("option").remove();
					$("#parentId").append(
							"<option value=''>Please Select</option>");

					$("#marketLocationType").find("option").remove();
					$("#marketLocationType").append(
							"<option value=''>Please Select</option>");

					$("#marketLocations").find("option").remove();
					$("#marketLocations").append(
							"<option value=''>Please Select</option>");

					$("#marketLocation").find("option").remove();

					$("#partMarketLocation").find("option").remove();

					$("#gpThana").find("option").remove();
					$("#gpThana").append(
							"<option value=''>Please Select</option>");

					$("#adminLocType").val("");

					$("#adminLocation").find("option").remove();
					$("#adminLocation").append(
							"<option value=''>Please Select</option>");
				} else {
					populateParentParent();
					populateMarketLocTypeByPartnertype();

					$("#marketLocations").find("option").remove();
					$("#marketLocations").append(
							"<option value=''>Please Select</option>");

					$("#marketLocation").find("option").remove();

					$("#partMarketLocation").find("option").remove();

					$("#gpThana").find("option").remove();
					$("#gpThana").append(
							"<option value=''>Please Select</option>");

					$("#adminLocType").val("");

					$("#adminLocation").find("option").remove();
					$("#adminLocation").append(
							"<option value=''>Please Select</option>");

				}
			});

}

function resetDropdownMarketLocationByLocationtype() {

	$("#marketLocationType").change(
			function() {
				if (this.value == null || this.value == undefined
						|| this.value == '') {

					$("#marketLocations").find("option").remove();
					$("#marketLocations").append(
							"<option value=''>Please Select</option>");

					$("#marketLocation").find("option").remove();

					$("#partMarketLocation").find("option").remove();

					$("#gpThana").find("option").remove();
					$("#gpThana").append(
							"<option value=''>Please Select</option>");

					$("#adminLocType").val("");

					$("#adminLocation").find("option").remove();
					$("#adminLocation").append(
							"<option value=''>Please Select</option>");
				} else {
					populateMarketLocByMarketType_parentPartner();

					$("#marketLocation").find("option").remove();

					$("#partMarketLocation").find("option").remove();

					$("#gpThana").find("option").remove();
					$("#gpThana").append(
							"<option value=''>Please Select</option>");

					$("#adminLocType").val("");

					$("#adminLocation").find("option").remove();
					$("#adminLocation").append(
							"<option value=''>Please Select</option>");

				}
			});

}

function resetDropdownGPThanaByLocation() {

	$("#marketLocation").change(
			function() {
				if (this.value == null || this.value == undefined
						|| this.value == '') {

					$("#partMarketLocation").find("option").remove();

					$("#gpThana").find("option").remove();
					$("#gpThana").append(
							"<option value=''>Please Select</option>");

					$("#adminLocType").val("");

					$("#adminLocation").find("option").remove();
					$("#adminLocation").append(
							"<option value=''>Please Select</option>");
				} else {
					$("#partMarketLocation").find("option").remove();
					$("#gpThana").find("option").remove();
					$("#gpThana").append(
							"<option value=''>Please Select</option>");
					populateGPThanaByTerritory();
					populateAdminLocation();

				}
			});

}

function resetDropdownAdminLocationByGPThana() {

	$("#gpThana").change(
			function() {
				if (this.value == null || this.value == undefined
						|| this.value == '') {

					$("#adminLocType").val("");

					$("#adminLocation").find("option").remove();
					$("#adminLocation").append(
							"<option value=''>Please Select</option>");
				} else {

					populateAdminLocation();

				}
			});

}

/*-----------------Partner Propose--------------------*/

function resetDropdownAdminLocationByMarketLocation() {

	$("#marketLocation").change(
			function() {
				if (this.value == null || this.value == undefined
						|| this.value == '') {

					$("#adminLocation").find("option").remove();
					$("#adminLocation").append(
							"<option value=''>Please Select</option>");
				} else {
					populateAdminLocationbyAdminType();
				}
			});
}

function resetDropdownDistributorByChannel() {

	$("#channelId").change(
			function() {
				if (this.value == null || this.value == undefined
						|| this.value == '') {
					$("#distributor").find("option").remove();
					$("#distributor").append(
							"<option value=''>Please Select</option>");

					$("#proposedByName").find("option").remove();
					$("#proposedByName").append(
							"<option value=''>Please Select</option>");

					$("#partnerTypeId").find("option").remove();
					$("#partnerTypeId").append(
							"<option value=''>Please Select</option>");

					$("#marketLocationType").find("option").remove();
					$("#marketLocationType").append(
							"<option value=''>Please Select</option>");

					$("#marketLocation").find("option").remove();
					$("#marketLocation").append(
							"<option value=''>Please Select</option>");

					$("#adminLocationType").val("");

					$("#adminLocation").find("option").remove();
					$("#adminLocation").append(
							"<option value=''>Please Select</option>");
				} else {
					populateDtrByChannel();
					populatePartnerTypeByChannel();

					$("#proposedByName").find("option").remove();
					$("#proposedByName").append(
							"<option value=''>Please Select</option>");

					$("#marketLocationType").find("option").remove();
					$("#marketLocationType").append(
							"<option value=''>Please Select</option>");

					$("#marketLocation").find("option").remove();
					$("#marketLocation").append(
							"<option value=''>Please Select</option>");

					$("#adminLocationType").val("");

					$("#adminLocation").find("option").remove();
					$("#adminLocation").append(
							"<option value=''>Please Select</option>");

				}
			});

}

function resetDropdownLocationtypeByPartnerType() {

	$("#partnerTypeId").change(
			function() {
				if (this.value == null || this.value == undefined
						|| this.value == '') {
					$("#marketLocationType").find("option").remove();
					$("#marketLocationType").append(
							"<option value=''>Please Select</option>");

					$("#marketLocation").find("option").remove();
					$("#marketLocation").append(
							"<option value=''>Please Select</option>");

					$("#adminLocationType").val("");

					$("#adminLocation").find("option").remove();
					$("#adminLocation").append(
							"<option value=''>Please Select</option>");
				} else {
					populateMarketLocTypeByPartnertype();

					$("#marketLocation").find("option").remove();
					$("#marketLocation").append(
							"<option value=''>Please Select</option>");

					$("#adminLocationType").val("");

					$("#adminLocation").find("option").remove();
					$("#adminLocation").append(
							"<option value=''>Please Select</option>");

				}
			});

}

function resetDropdownLocationByLocationType() {

	$("#marketLocationType").change(
			function() {
				if (this.value == null || this.value == undefined
						|| this.value == '') {

					$("#marketLocation").find("option").remove();
					$("#marketLocation").append(
							"<option value=''>Please Select</option>");

					$("#adminLocationType").val("");

					$("#adminLocation").find("option").remove();
					$("#adminLocation").append(
							"<option value=''>Please Select</option>");
				} else {
					populateMarketLocByMarketType();
					$("#adminLocationType").val("");

					$("#adminLocation").find("option").remove();
					$("#adminLocation").append(
							"<option value=''>Please Select</option>");

				}
			});

}