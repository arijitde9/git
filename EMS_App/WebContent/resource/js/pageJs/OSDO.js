$(function() {

	/*$("#tabs").tabs();*/
	$("input[type=submit], button").button();
	$("#effectiveDate").datepicker();
	$("#expiaryDate").datepicker();

});

//dependency dropdown 

function populateMKTbyMarketType() {

	var locationTypeId = $('#locationTypeId').val();

	makeAsyncManterDataCall('MarketLocationByMarketType', 'locationTypeId='
			+ locationTypeId, 'marketLocation');
}
function populateADMbyAdminType() {

	var adminHierarchyLayerId = $('#adminHierarchyLayerId').val();

	makeAsyncManterDataCall('AdminLocbyAdminType', 'adminHierarchyLayerId='
			+ adminHierarchyLayerId, 'adminLocId');
}