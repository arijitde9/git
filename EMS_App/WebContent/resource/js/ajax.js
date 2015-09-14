var AJAX_RESPONSE_TYPE_JSON = "JSON";
var AJAX_RESPONSE_TYPE_HTML = "HTML";

var AJAX_RETURN = "";

function makeAsynchronousCall(controller, operation, param, tergetDD,
		responseFunction, responseType) {

	$.ajax({
		url : controller,
		data : "operationType=" + operation + "&" + param,
		async : false,
		success : function(response) {
			if (responseType == AJAX_RESPONSE_TYPE_JSON && response!="") {
				var resp = JSON.stringify(response);
				if (window.execScript)
					window.execScript("(" + responseFunction + '(\'' + tergetDD
							+ '\',' + resp + ')' + ")"); // execScript
															// doesn’t return
															// anything
				else
					eval(responseFunction + '(' + tergetDD + ',' + resp + ')');
			}
		},
		error : function(response) {
			alert(response.status);
			alert("Error");
		}

	});
}
function makeSynchronousCall(controller, operation, param, tergetDD,
		responseFunction, responseType) {

	$.ajax({
		url : controller,
		data : "operationType=" + operation + "&" + param,
		async : true,
		success : function(response) {
			if (responseType == AJAX_RESPONSE_TYPE_JSON) {
				var resp = JSON.stringify(response);
				if (window.execScript)
					window.execScript("(" + responseFunction + '(\'' + tergetDD
							+ '\',' + resp + ')' + ")"); // execScript
															// doesn’t return
															// anything
				else
					eval(responseFunction + '(' + tergetDD + ',' + resp + ')');
			}
		},
		error : function(response) {
//			alert(response.status);
//			alert("Error");
		}

	});
}
/*
 * function makeAsynchronousCallToBroadcast(controller){
 * 
 * $.ajax({ url : controller, async : false, success : function(response) {
 * alert(reaponse.status); alert("Success"); }, error : function(response) {
 * alert(response.status); alert("Error"); }
 * 
 * });
 *  }
 */

function makeAsynchronousCallWORO(controller, operation, param,
		responseFunction, responseType) {
	$.ajax({
		url : controller,
		data : "operationType=" + operation + "&" + param,
		async : false,
		success : function(response) {
			if (responseType == AJAX_RESPONSE_TYPE_JSON) {
				var resp = JSON.stringify(response);

				if (window.execScript)
					window.execScript("(" + responseFunction + '(' + resp + ')'
							+ ")"); // execScript doesn’t return anything
				else
					eval(responseFunction + '(' + resp + ')');
			}
		},
		error : function(response) {
			alert(response.status);
			alert("Error");
		}

	});
}
function makeCallToBroadcast() {
	var res;
	$.ajax({
		type : 'GET',
		async : false,
		url : "broadcastMessage.con",
		success : function(result) {

			res = result;
		}
	});

	return res;
	/*
	 * var controller = 'broadcastMessage.con';
	 * makeAsynchronousCallToBroadcast(controller);
	 */
}

function makeAsyncJsonDataCall(operation, param, tergetDD, responseType) {
	var controller = 'dependenddataselect.con';
	makeAsynchronousCall(controller, operation, param, tergetDD,
			'asyncManterDataResponse', responseType);
}

function makeAsyncManterDataCall(operation, param, tergetDD) {
	var controller = 'dependenddataselect.con';
	makeAsynchronousCall(controller, operation, param, tergetDD,
			'asyncManterDataResponse', AJAX_RESPONSE_TYPE_JSON);
}
function makeSyncManterDataCall(operation, param, tergetDD) {
	var controller = 'dependenddataselect.con';
	makeSynchronousCall(controller, operation, param, tergetDD,
			'asyncManterDataResponse', AJAX_RESPONSE_TYPE_JSON);
}
function asyncManterDataResponse(tergetDD, response) {

	
	
	var json = $.parseJSON(response);
	var i = 0;
	
	if(Object.keys(json).length == 0){
		clearDropdown(tergetDD);
		addOptionToDropdown(tergetDD, "", "Please Select");
	}
	
	$.each(json, function(key, val) {
		if(i == 0){
			if(val.key != "NDF"){
				clearDropdown(tergetDD);
				addOptionToDropdown(tergetDD, "", "Please Select");
				addOptionToDropdown(tergetDD, val.key, val.value);
			} else {
				AJAX_RETURN = "NDF";
				try {
					specialOperationOnNDF();
				}catch(err) {// No need to handle
				}
			}
		} else {
			addOptionToDropdown(tergetDD, val.key, val.value);
		}
		
		i++;
	})
}

function clearDropdown(dropDownId) {
	if (window.execScript) {
		tergetDD1 = document.getElementById(dropDownId);
		for ( var i = tergetDD1.length - 1; i >= 0; i--) {
			tergetDD1.remove(i);
		}
	} else {
		$(dropDownId).empty();
	}
}

function addOptionToDropdown(dropDownId, key, value) {
	if (window.execScript) {
		tergetDD1 = document.getElementById(dropDownId);
		var option = document.createElement("option");
		option.text = value;
		option.value = key;
		tergetDD1.add(option);
	} else {
		var option = document.createElement("option");
		option.text = value;
		option.value = key;
		dropDownId.add(option);
	}
}

function makeAsynDetailsDataCall(controller, operation, param, tergetFun) {
	makeAsynchronousCallWORO((controller + ".con"), operation, param,
			tergetFun, AJAX_RESPONSE_TYPE_JSON);
}

function makeAsynDetailsDataCall(controller, param, tergetFun) {
	makeAsynchronousCallWORO((controller + ".con"), "individual", param,
			tergetFun, AJAX_RESPONSE_TYPE_JSON);
}
