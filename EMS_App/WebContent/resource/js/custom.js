function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	// add a zero in front of numbers<10
	m = checkTime(m);
	s = checkTime(s);
	// alert(s);
	document.getElementById('time').innerHTML = "Grameenphone Ltd || " + h
			+ ":" + m + ":" + s;
	t = setTimeout(function() {
		startTime()
	}, 500);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
$(document).ready(function() {

	startTime();

});

function alphanumeralsOnlyCODE(evt) {
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

function alphanumeralsForNAME(evt) {
	evt = (evt) ? evt : event;
	var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode
			: ((evt.which) ? evt.which : 0));

	if (evt.keyCode == 60 || evt.keyCode == 62) {
		return false;
	}

	return true;
}

function alphanumeralsForDESP(evt) {
	evt = (evt) ? evt : event;
	/*
	 * var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ?
	 * evt.keyCode : ((evt.which) ? evt.which : 0));
	 */

	if (evt.keyCode == 60 || evt.keyCode == 62) {
		return false;
	}

	return true;
}

// for edit page field disabling

$(document).ready(function() {
	$('#editable').click(function() {

		$("input").removeAttr('disabled');
		$("textarea").removeAttr('disabled');
		$("select").removeAttr('disabled');

		$('#osdoAddress').removeAttr('readonly');
		$('#delete').hide();
		$('#addPos').show();

		$("[id^='statusDecision']").prop('disabled', true);

		$("#save").show();
		$("#reset").show();
		$("#editable").hide();
		$("#add_link").show();

		checkAccessContor();
	});
});

var treetable_rowstate = new Array();
var treetable_callbacks = new Array();

function treetable_hideRow(rowId) {
	el = document.getElementById(rowId);
	el.style.display = "none";
}

function treetable_showRow(rowId) {
	el = document.getElementById(rowId);
	el.style.display = "";
}

function treetable_hasChildren(rowId) {
	res = document.getElementById(rowId + '_0');
	return (res != null);
}

function treetable_getRowChildren(rowId) {
	el = document.getElementById(rowId);
	var arr = new Array();
	i = 0;
	while (true) {
		childRowId = rowId + '_' + i;
		childEl = document.getElementById(childRowId);
		if (childEl) {
			arr[i] = childRowId;
		} else {
			break;
		}
		i++;
	}
	return (arr);
}
function treetable_toggleRow(rowId, state, force) {
	var rowChildren;
	var i;
	// open or close all children rows depend on current state
	force = (force == null) ? 1 : force;
	if (state == null) {
		row_state = ((treetable_rowstate[rowId]) ? (treetable_rowstate[rowId])
				: 1)
				* -1;
	} else {
		row_state = state;
	}
	rowChildren = treetable_getRowChildren(rowId);
	if (rowChildren.length == 0)
		return (false);
	for (i = 0; i < rowChildren.length; i++) {
		if (row_state == -1) {
			treetable_hideRow(rowChildren[i]);
			treetable_toggleRow(rowChildren[i], row_state, -1);
		} else {
			if (force == 1 || treetable_rowstate[rowId] != -1) {
				treetable_showRow(rowChildren[i]);
				treetable_toggleRow(rowChildren[i], row_state, -1);
			}
		}
	}
	if (force == 1) {
		treetable_rowstate[rowId] = row_state;
		treetable_fireEventRowStateChanged(rowId, row_state);
	}
	return (true);
}

function treetable_fireEventRowStateChanged(rowId, state) {
	if (treetable_callbacks['eventRowStateChanged']) {
		callback = treetable_callbacks['eventRowStateChanged'] + "('" + rowId
				+ "', " + state + ");";
		eval(callback);
	}
}

function treetable_collapseAll(tableId) {
	table = document.getElementById(tableId);
	rowChildren = table.getElementsByTagName('tr');
	for (i = 0; i < rowChildren.length; i++) {
		if (index = rowChildren[i].id.indexOf('_')) {
			// do not hide root elements
			if (index != rowChildren[i].id.lastIndexOf('_')) {
				rowChildren[i].style.display = 'none';
			}
			if (treetable_hasChildren(rowChildren[i].id)) {
				treetable_rowstate[rowChildren[i].id] = -1;
				treetable_fireEventRowStateChanged(rowChildren[i].id, -1);
			}
		}
	}
	return (true);
}

function treetable_expandAll(tableId) {
	table = document.getElementById(tableId);
	rowChildren = table.getElementsByTagName('tr');
	for (i = 0; i < rowChildren.length; i++) {
		if (index = rowChildren[i].id.indexOf('_')) {
			rowChildren[i].style.display = '';
			if (treetable_hasChildren(rowChildren[i].id)) {
				treetable_rowstate[rowChildren[i].id] = 1;
				treetable_fireEventRowStateChanged(rowChildren[i].id, 1);
			}
		}
	}
	return (true);
}
var idCount = 0;
function addRowToTable(tableId, theadId, data) {
	var tbl = document.getElementById(tableId);

	// alert("tbl"+tbl);

	var tbody = tbl.getElementsByTagName("tbody")[0];
	var tHead = document.getElementById(theadId);
	var heade = tHead.getElementsByTagName("th");

	var txtObjName = new Array();
	for ( var x = 0; x < heade.length; x++) {
		txtObjName[x] = heade[x].id;
	}

	var noOfLine = tbody.getElementsByTagName("tr").length - 2;

	for ( var i = 0; i < data.length; i++) {
		row = data[i];

		var isOdd = true;
		if (((noOfLine + i) % 2) === 0)
			isOdd = false;

		var tRow = document.createElement("tr");
		/*
		 * if (isOdd) { tRow.className = "evenRow"; } else { tRow.className =
		 * "oddRow"; }
		 */

		tbody.appendChild(tRow);
		for ( var j = 0, k = 0; j < txtObjName.length; j++) {
			var tCell = document.createElement("td");

			// alert("txtObjName[j]"+txtObjName[j]);

			if (txtObjName[j] == "DelRow") {
				var element = document.createElement("a");
				element.setAttribute('href', '#');
				element.setAttribute('onclick', 'deleteRow(this)');

				var elem = document.createElement("img");
				elem.setAttribute("src", "resources/images/delete.png");
				elem.setAttribute("height", "10");
				elem.setAttribute("width", "10");
				elem.setAttribute("alt", "Del");
				element.appendChild(elem);

				tCell.appendChild(element);

			} else if ((/^sel/).test(txtObjName[j])) {

				var element = document.createElement("select");
				element.setAttribute("name", txtObjName[j]);
				element.setAttribute("id", txtObjName[j] + idCount);
				var vals = row[k].split(':');

				for ( var l = 0; l < vals.length; l++) {
					var option;
					// alert(vals[l]);
					option = document.createElement("option");
					option.setAttribute("value", vals[l]);
					option.innerHTML = vals[l];
					element.appendChild(option);
				}

				tCell.appendChild(element);
				element.className = "selinput";

				// element.readOnly = true;
				k++;

			} else if ((/^txt/).test(txtObjName[j])) {

				var element = document.createElement("input");
				element.setAttribute("type", "Textbox");
				element.setAttribute("value", row[k]);
				element.setAttribute("name", txtObjName[j]);
				element.setAttribute("id", txtObjName[j] + idCount);

				tCell.appendChild(element);
				element.className = "inputs";

				k++;
			} else {

				// alert("1111");

				var element = document.createElement("input");
				element.setAttribute("type", "Textbox");
				element.setAttribute("value", row[k]);
				element.setAttribute("name", txtObjName[j]);
				element.setAttribute("id", txtObjName[j] + idCount);

				tCell.appendChild(element);

				if (isOdd) {
					element.className = "lbl-transparent";
				} else {
					element.className = "lbl-transparent";
				}
				// element.readOnly = true;
				k++;
			}
			tRow.appendChild(tCell);
		}
	}

	idCount++;
	console.log(tbl.innerHTML());
}

$(document).ready(function() {
	animateLock();
});
function animateLock() {
	jQuery("#id_Locked").animate({
		opacity : 1.0
	}, {
		duration : 1000
	}).animate({
		opacity : 0
	}, {
		duration : 1000
	}).animate({
		opacity : 0
	}, {
		duration : 1000
	}).animate({
		opacity : 1.0
	}, {
		duration : 1000,
		complete : animateLock
	})
}

function deleteDbTr(tr) {
	$('#' + tr + ' td').each(function() {
		var $tds = $(this).find('*');
		$tds.css('color', 'red');
		// $tds.attr( "disabled", "disabled");
	});

}

// ************************ for Json *******************************//
// return an array of objects according to key, value, or key and value matching
function getObjects(obj, key, val) {
	var objects = [];
	for ( var i in obj) {
		if (!obj.hasOwnProperty(i))
			continue;
		if (typeof obj[i] == 'object') {
			objects = objects.concat(getObjects(obj[i], key, val));
		} else
		// if key matches and value matches or if key matches and value is not
		// passed (eliminating the case where key matches but passed value does
		// not)
		if (i == key && obj[i] == val || i == key && val == '') { //
			objects.push(obj);
		} else if (obj[i] == val && key == '') {
			// only add if the object is not already in the array
			if (objects.lastIndexOf(obj) == -1) {
				objects.push(obj);
			}
		}
	}
	return objects;
}

// return an array of values that match on a certain key
function getValues(obj, key) {
	var objects = [];
	for ( var i in obj) {
		if (!obj.hasOwnProperty(i))
			continue;
		if (typeof obj[i] == 'object') {
			objects = objects.concat(getValues(obj[i], key));
		} else if (i == key) {
			objects.push(obj[i]);
		}
	}
	return objects;
}

// return an array of keys that match on a certain value
function getKeys(obj, val) {
	var objects = [];
	for ( var i in obj) {
		if (!obj.hasOwnProperty(i))
			continue;
		if (typeof obj[i] == 'object') {
			objects = objects.concat(getKeys(obj[i], val));
		} else if (obj[i] == val) {
			objects.push(i);
		}
	}
	return objects;
}

// ************************ for Json *******************************//

function getCurDatePlusN(plusday, setInDate) {

	var fullDate = new Date();
	// Thu May 19 2011 17:25:38 GMT+1000 {}

	// convert month to 2 digits
	var twoDigitMonth = ((fullDate.getMonth().length + 1) === 1) ? (fullDate
			.getMonth() + 1) : '0' + (fullDate.getMonth() + 1);

	// alert(parseInt(plusday));
	var currentDatePlus = twoDigitMonth + "/"
			+ (fullDate.getDate() + parseInt(plusday)) + "/"
			+ fullDate.getFullYear();

	$('#' + setInDate.id).val(currentDatePlus);
}
function getCurDatePlusCustN(plusday, setInDate) {

	var fullDate = new Date();
	// Thu May 19 2011 17:25:38 GMT+1000 {}

	// convert month to 2 digits
	var twoDigitMonth = ((fullDate.getMonth().length + 1) === 1) ? (fullDate
			.getMonth() + 1) : '0' + (fullDate.getMonth() + 1);

	// alert(parseInt(plusday));
	var currentDatePlus = twoDigitMonth + "/"
			+ (fullDate.getDate() + parseInt(plusday)) + "/"
			+ fullDate.getFullYear();

	document.getElementById(setInDate).value = currentDatePlus;

}
function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
	// If JSONData is not an object then JSON.parse will parse the JSON string
	// in an Object
	var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

	// alert(arrData);

	var tempdata = 't_t';
	var tempcnt = 0;

	var CSV = '';
	// Set Report title in first row or line

	// CSV += ReportTitle + '\r\n\n';

	// This condition will generate the Label/Header
	if (ShowLabel) {
		var row = "";

		// This loop will extract the label from 1st index of on array
		for ( var index in arrData[0]) {

			// Now convert each value to string and comma-seprated
			if (index.trim() != 'edit' && index.trim() != 'Edit'
					&& index.trim() != 'delete' && index.trim() != 'Delete'
					&& index.trim() != 'id') {
				row += toTitleCase(index) + ',';
				// alert('aaa'+index);
			} else {
				tempdata = tempdata + '_' + 't' + tempcnt + 't';
				// alert(tempdata);
			}
			tempcnt++;

		}

		row = row.slice(0, -1);

		// append Label row with line break
		CSV += row + '\r\n';
	}

	// 1st loop is to extract each row
	for ( var i = 0; i < arrData.length; i++) {
		var row = "";
		var tempcnt2 = 0;
		// 2nd loop will extract each column and convert it in string
		// comma-seprated
		for ( var index in arrData[i]) {
			/*
			 * if((arrData[i][index]+"")!='edit' ||
			 * (arrData[i][index]+"")!='Edit' ||
			 * (arrData[i][index]+"")!='delete' ||
			 * (arrData[i][index]+"")!='Delete')
			 */
			if (tempdata.indexOf('t' + tempcnt2 + 't') <= 0)
				row += '"' + arrData[i][index] + '",';

			tempcnt2++;
		}

		row.slice(0, row.length - 1);

		// add a line break after each row
		// alert(row);
		CSV += row + '\r\n';

	}

	if (CSV == '') {
		alert("Invalid data");
		return;
	}

	// Generate a file name
	var fileName = "DMSReport_";
	// this will remove the blank-spaces from the title and replace it with an
	// underscore
	fileName += ReportTitle.replace(/ /g, "_");

	// Initialize file format you want csv or xls
	var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

	// Now the little tricky part.
	// you can use either>> window.open(uri);
	// but this will not work in some browsers
	// or you will not get the correct file extension

	// this trick will generate a temp <a /> tag
	var link = document.createElement("a");
	link.href = uri;

	// set the visibility hidden so it will not effect on your web-layout
	link.style = "visibility:hidden";
	link.download = fileName + ".csv";

	// this part will append the anchor tag and remove it after automatic click
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function JSONToCSVConvertorForRoute(JSONData, ReportTitle, ShowLabel) {
	// If JSONData is not an object then JSON.parse will parse the JSON string
	// in an Object
	var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

	// alert(arrData);

	var tempdata = 't_t';
	var tempcnt = 0;

	var CSV = '';
	// Set Report title in first row or line

	// CSV += ReportTitle + '\r\n\n';

	// This condition will generate the Label/Header
	if (ShowLabel) {
		var row = "";

		// This loop will extract the label from 1st index of on array
		for ( var index in arrData[0]) {

			// Now convert each value to string and comma-seprated
			if (index.trim() != 'edit' && index.trim() != 'Edit'
					&& index.trim() != 'delete' && index.trim() != 'Delete'
					&& index.trim() != 'routeOwner'
					&& index.trim() != 'unassign'
					&& index.trim() != 'associatedSE') {
				row += toTitleCase(index) + ',';
				// alert('aaa'+index);
			} else {
				tempdata = tempdata + '_' + 't' + tempcnt + 't';
				// alert(tempdata);
			}
			tempcnt++;

		}

		row = row.slice(0, -1);

		// append Label row with line break
		CSV += row + '\r\n';
	}

	// 1st loop is to extract each row
	for ( var i = 0; i < arrData.length; i++) {
		var row = "";
		var tempcnt2 = 0;
		// 2nd loop will extract each column and convert it in string
		// comma-seprated
		for ( var index in arrData[i]) {
			/*
			 * if((arrData[i][index]+"")!='edit' ||
			 * (arrData[i][index]+"")!='Edit' ||
			 * (arrData[i][index]+"")!='delete' ||
			 * (arrData[i][index]+"")!='Delete')
			 */
			if (tempdata.indexOf('t' + tempcnt2 + 't') <= 0)
				row += '"' + arrData[i][index] + '",';

			tempcnt2++;
		}

		row.slice(0, row.length - 1);

		// add a line break after each row
		// alert(row);
		CSV += row + '\r\n';

	}

	if (CSV == '') {
		alert("Invalid data");
		return;
	}

	// Generate a file name
	var fileName = "DMSReport_";
	// this will remove the blank-spaces from the title and replace it with an
	// underscore
	fileName += ReportTitle.replace(/ /g, "_");

	// Initialize file format you want csv or xls
	var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

	// Now the little tricky part.
	// you can use either>> window.open(uri);
	// but this will not work in some browsers
	// or you will not get the correct file extension

	// this trick will generate a temp <a /> tag
	var link = document.createElement("a");
	link.href = uri;

	// set the visibility hidden so it will not effect on your web-layout
	link.style = "visibility:hidden";
	link.download = fileName + ".csv";

	// this part will append the anchor tag and remove it after automatic click
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function JSONToCSVConvertorForSAF(JSONData, ReportTitle, ShowLabel) {
	// If JSONData is not an object then JSON.parse will parse the JSON string
	// in an Object
	var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
	var tempdata = 't_t';
	var tempcnt = 0;
	var CSV = '';

	// This condition will generate the Label/Header
	if (ShowLabel) {
		var row = "";

		// This loop will extract the label from 1st index of on array
		for ( var index in arrData[0]) {

			// Now convert each value to string and comma-seprated
			if (index.trim() != 'edit' && index.trim() != 'Edit'
					&& index.trim() != 'delete' && index.trim() != 'Delete'
					&& index.trim() != 'error' && index.trim() != 'inventoryId'
					&& index.trim() != 'paperType'
					&& index.trim() != 'salesDate'
					&& index.trim() != 'receiptDate'
					&& index.trim() != 'simKitNo') {
				row += toTitleCase(index) + ',';
			} else {
				tempdata = tempdata + '_' + 't' + tempcnt + 't';
			}
			tempcnt++;
		}

		row = row.slice(0, -1);
		// append Label row with line break
		CSV += row + '\r\n';
	}

	// 1st loop is to extract each row
	for ( var i = 0; i < arrData.length; i++) {
		var row = "";
		var tempcnt2 = 0;
		// 2nd loop will extract each column and convert it in string
		// comma-seprated
		for ( var index in arrData[i]) {
			if (tempdata.indexOf('t' + tempcnt2 + 't') <= 0)
				row += '"' + arrData[i][index] + '",';

			tempcnt2++;
		}

		row.slice(0, row.length - 1);

		// add a line break after each row
		CSV += row + '\r\n';

	}

	if (CSV == '') {
		alert("Invalid data");
		return;
	}

	// Generate a file name
	var fileName = "DMSReport_";
	// this will remove the blank-spaces from the title and replace it with an
	// underscore
	fileName += ReportTitle.replace(/ /g, "_");

	// Initialize file format you want csv or xls
	var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

	// Now the little tricky part.
	// you can use either>> window.open(uri);
	// but this will not work in some browsers
	// or you will not get the correct file extension

	// this trick will generate a temp <a /> tag
	var link = document.createElement("a");
	link.href = uri;

	// set the visibility hidden so it will not effect on your web-layout
	link.style = "visibility:hidden";
	link.download = fileName + ".csv";

	// this part will append the anchor tag and remove it after automatic click
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function toTitleCase(str) {
	return str.replace(/(?:^|\s)\w/g, function(match) {
		return match.toUpperCase();
	});
}