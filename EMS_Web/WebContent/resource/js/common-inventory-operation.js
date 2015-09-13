$(function(){
	doTabAndEnterOperation();
	$('#enter_common_startSer').focus();
});

function getCatbyHead(counter) {
       var productHeadId = $("#virtaulscmInventoryLineItems_productHead_" + counter).val();
       makeAsyncManterDataCall('ProductGroupByProductHeadInventory', 'ProductHeadId='
   			+ productHeadId, 'virtaulscmInventoryLineItems_productGroup_' + counter);
       $("#virtaulscmInventoryLineItems_productGroup_" + counter).focus();
       $('#enteredquantity_'+counter).val('');
       $('#virtaulscmInventoryLineItems_quantity_'+counter).val('');

}

function getItemByCat(counter) {
     var productHeadId = $("#virtaulscmInventoryLineItems_productGroup_" + counter).val();
     makeAsyncManterDataCall('ProductCodeByProductGroup', 'ProductGroupId='
 			+ productHeadId, 'virtaulscmInventoryLineItems_product_' + counter);
     $("#virtaulscmInventoryLineItems_product_" + counter).focus();
     $('#enteredquantity_'+counter).val('');
     $('#virtaulscmInventoryLineItems_quantity_'+counter).val('');
}

function moveToQuantityBox(index) {
	
	$('#enteredquantity_'+index).val('');
    $('#virtaulscmInventoryLineItems_quantity_'+index).val('');
	$('#enteredquantity_'+index).focus();
}

function checkSerial() {
	var chk = $('#range').is(':checked');
	if(chk) {
		$('#enter_common_endSer').prop('disabled',false);
		$('#enter_common_endSer').val('');
	} else {
		$('#enter_common_endSer').val('');
		$('#enter_common_endSer').prop('disabled',true);
	}
	 
	$('#enter_common_startSer').focus();
	
}

function checkSerialCampaign() {
	var chk = $('#crange').is(':checked');
	if(chk) {
		$('#center_common_endSer').prop('disabled',false);
		$('#center_common_endSer').val('');
	} else {
		$('#center_common_endSer').val('');
		$('#center_common_endSer').prop('disabled',true);
	}
	 
	$('#center_common_startSer').focus();
	
}

function valideVirtualOrNonSerialLineItems() {

	var err = '';
	$("[id^='newTrVirtual']").each(function(){
		
		var idsB = $(this).prop('id');
		var i = idsB.substring(12,idsB.length);
		
		var size = i;
	   	var entrQuan = $('#enteredquantity_'+size).val();
	   	var validateQuan = $('#virtaulscmInventoryLineItems_quantity_'+size).val();
	   	
	   	if(validateQuan == undefined) {
	   		validateQuan = '';
	   	}
	   	 
	   	if(entrQuan != '' && parseFloat(entrQuan) >= 0 && validateQuan == '') {
	   		err += 'error';
	   		$('#enteredquantity_'+size).css('border','3px solid red');
		} else if(entrQuan != '' && parseFloat(entrQuan) >= 0 && validateQuan != '' && parseFloat(validateQuan) >= 0) {
			if(parseFloat(entrQuan) != parseFloat(validateQuan)) {
				err += 'error';
				$('#enteredquantity_'+size).css('border','3px solid red');
			}
		} else if(entrQuan == '' && validateQuan != '' && parseFloat(validateQuan) >= 0) {
			$('#virtaulscmInventoryLineItems_quantity_'+size).val('');
			$('#enteredquantity_'+size).css('border','1px solid #000');
		}
	});
	 
	return err;
}


function addRowSerialSSO(head,headId,type,startSer,endSer,cat,catId,item,itemId,quantity,startRef,endRef,unitPrice,totalPrice) {

   	var sizeOf = $("#hiddenRowSSOSerial").val();
   	var newRow = "<tr id='newTrSerial" + sizeOf + "'>";
   
   	newRow+="<td align='left'><input type='text' name='scmInventoryLineItems["+sizeOf+"].startSerialNumber' readonly='readonly' title='"+startSer+"' value='"+startSer+"' id='scmInventoryLineItems_startSerialNumber_"+sizeOf+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);text-overflow:ellipsis;' class='txtboxPrice' ></td>";
   	newRow+="<td align='left'><input type='text' name='scmInventoryLineItems["+sizeOf+"].endSerialNumber' readonly='readonly' title='"+endSer+"' value='"+endSer+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);text-overflow:ellipsis;' id='scmInventoryLineItems_endSerialNumber_"+sizeOf+"' class='txtboxPrice' ></td>";
   	newRow+="<td align='left'><input type='text' name='scmInventoryLineItems["+sizeOf+"].startReference' readonly='readonly' value='"+startRef+"' id='scmInventoryLineItems_startReferenceNumber_"+sizeOf+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);' class='txtboxPrice' ></td>";
   	newRow+="<td align='left'><input type='text' name='scmInventoryLineItems["+sizeOf+"].endReference'  readonly='readonly' value='"+endRef+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);' id='scmInventoryLineItems_endReferenceNumber_"+sizeOf+"' class='txtboxPrice' ></td>";
   	newRow+="<td align='left'><input type='hidden' id='scmInventoryLineItems_scanType_" +sizeOf+ "' name='scmInventoryLineItems["+sizeOf+"].scanType' value='"+type+"' /><input type='text' class='txtboxPrice' id='head"+sizeOf+"' value='"+head+"' name='head"+sizeOf+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);'  readonly='readonly' /><input type='hidden' id='scmInventoryLineItems_productHead_" +sizeOf+ "' name='scmInventoryLineItems["+sizeOf+"].productHead' value='"+headId+"'  />  </td>";
   	newRow+="<td align='left'><input type='text' class='txtboxPrice' id='category"+sizeOf+"' name='category"+sizeOf+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);' value='"+cat+"' readonly='readonly' /><input type='hidden' id='scmInventoryLineItems_productGroup_" +sizeOf+ "' name='scmInventoryLineItems["+sizeOf+"].productGroup'  value='"+catId+"' /></td>";
  	newRow+="<td align='left'><input type='text' class='txtboxPrice' id='item"+sizeOf+"' name='item"+sizeOf+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);' value='"+item+"' readonly='readonly' /><input type='hidden' id='scmInventoryLineItems_product_" +sizeOf+ "' value='"+itemId+"' name='scmInventoryLineItems["+sizeOf+"].product' /></td>";
   	newRow+="<td align='left'><input type='text' name='scmInventoryLineItems["+sizeOf+"].quantity' id='scmInventoryLineItems_quantity_"+sizeOf+"' class='txtboxPrice'  value='"+quantity+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);' readonly='readonly' ></td>";
   	newRow+="<td align='left'><input type='text' name='scmInventoryLineItems["+sizeOf+"].unitPrice' id='scmInventoryLineItems_unitPrice_"+sizeOf+"' class='txtboxPrice'  value='"+unitPrice+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);' readonly='readonly' ></td>";
   	newRow+="<td align='left'><input type='text' name='scmInventoryLineItems["+sizeOf+"].totalPrice' id='scmInventoryLineItems_totalPrice_"+sizeOf+"' class='txtboxPrice'  value='"+totalPrice+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);' readonly='readonly' ></td>";
   	newRow+="<td><a class='logodelete' title='Delete' id='delRowSerial"+sizeOf+"' style='margin:0;' onclick='delRowSerial("+sizeOf+",\"SSO\")'></a></td>";
   	newRow+="</tr>";
  
   	$("#chkSETbody").prepend(newRow);
   	sizeOf = parseInt(sizeOf)+1;
   	$("#hiddenRowSSOSerial").val(sizeOf);
   	
   	
   	$('#noItem').hide();
   	$('#serialTable').show();
	doTabAndEnterOperation();
 
}


function addRowSerialNew(head,headId,type,startSer,endSer,cat,catId,item,itemId,quantity,startRef,endRef) {

   	//var sizeOf = $("[id^='newTrSerial']").size();
   	
   	var sizeOf = $("#hiddenRowSerial").val();
	
   	
   	var newRow = "<tr id='newTrSerial" + sizeOf + "'>";
   
   	newRow+="<td align='left'><input type='text' name='scmInventoryLineItems["+sizeOf+"].startSerialNumber' readonly='readonly' title='"+startSer+"' value='"+startSer+"' id='scmInventoryLineItems_startSerialNumber_"+sizeOf+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);text-overflow:ellipsis;' class='txtboxPrice' ></td>";
   	newRow+="<td align='left'><input type='text' name='scmInventoryLineItems["+sizeOf+"].endSerialNumber' readonly='readonly' title='"+endSer+"' value='"+endSer+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);text-overflow:ellipsis;' id='scmInventoryLineItems_endSerialNumber_"+sizeOf+"' class='txtboxPrice' ></td>";
   	newRow+="<td align='left'><input type='text' name='scmInventoryLineItems["+sizeOf+"].startReference' readonly='readonly' value='"+startRef+"' id='scmInventoryLineItems_startReferenceNumber_"+sizeOf+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);' class='txtboxPrice' ></td>";
   	newRow+="<td align='left'><input type='text' name='scmInventoryLineItems["+sizeOf+"].endReference'  readonly='readonly' value='"+endRef+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);' id='scmInventoryLineItems_endReferenceNumber_"+sizeOf+"' class='txtboxPrice' ></td>";
   	newRow+="<td align='left'><input type='hidden' id='scmInventoryLineItems_scanType_" +sizeOf+ "' name='scmInventoryLineItems["+sizeOf+"].scanType' value='"+type+"' /><input type='text' class='txtboxPrice' id='head"+sizeOf+"' value='"+head+"' name='head"+sizeOf+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);'  readonly='readonly' /><input type='hidden' id='scmInventoryLineItems_productHead_" +sizeOf+ "' name='scmInventoryLineItems["+sizeOf+"].productHead' value='"+headId+"'  />  </td>";
   	newRow+="<td align='left'><input type='text' class='txtboxPrice' id='category"+sizeOf+"' name='category"+sizeOf+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);' value='"+cat+"' readonly='readonly' /><input type='hidden' id='scmInventoryLineItems_productGroup_" +sizeOf+ "' name='scmInventoryLineItems["+sizeOf+"].productGroup'  value='"+catId+"' /></td>";
  	newRow+="<td align='left'><input type='text' class='txtboxPrice' id='item"+sizeOf+"' name='item"+sizeOf+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);' value='"+item+"' readonly='readonly' /><input type='hidden' id='scmInventoryLineItems_product_" +sizeOf+ "' value='"+itemId+"' name='scmInventoryLineItems["+sizeOf+"].product' /></td>";
   	newRow+="<td align='left'><input type='text' name='scmInventoryLineItems["+sizeOf+"].quantity' id='scmInventoryLineItems_quantity_"+sizeOf+"' class='txtboxPrice'  value='"+quantity+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);' readonly='readonly' ></td>";
   	newRow+="<td><a class='logodelete' title='Delete' id='delRowSerial"+sizeOf+"' style='margin:0;' onclick='delRowSerial("+sizeOf+",\"NRL\")'></a></td>";
   	newRow+="</tr>";
  
   	$("#chkSETbody").append(newRow);
   	sizeOf = parseInt(sizeOf)+1;
 	$("#hiddenRowSerial").val(sizeOf);
   	$('#noItem').hide();
   	$('#serialTable').show();
	doTabAndEnterOperation();
 
}


function MoveCursorToStartSerial(index) {
	$('#scmInventoryLineItems_quantity_'+index).val('');
	$('#scmInventoryLineItems_quantity_'+index).val('');
	$('#scmInventoryLineItems_quantity_'+index).val('');
	$("#entered_scmInventoryLineItems_startSerialNumber_" + index).val('');
	$("#entered_scmInventoryLineItems_endSerialNumber_" + index).val('');
	$("#entered_scmInventoryLineItems_startSerialNumber_" + index).focus();
}


function addRowVirtualSSOCampaign(productHeadId,productHead,productGroupId,productGroup,productId,product,quantity) {
   	var sizeOf = $("[id^='newTrCampaignVirtual']").size();
   	//var sizeOf = $("#hiddenRowSSOCampaignNonSerial").val();
   	//sizeOf = parseInt(sizeOf)+1;
   	var newRow = "<tr id='newTrCampaignVirtual" + sizeOf + "'>";
   	newRow+="<td align='left'><input type='text' class='txtboxPrice' readonly='readonly' id='Campaign_productHead_" +sizeOf+ "' name='Campaign_productHead_" +sizeOf+ "' value='"+productHead+"' /> <input type='hidden' value='"+productHeadId+"' id='campaignVirtaulscmInventoryLineItems_productHead_" +sizeOf+ "' name='campaignVirtaulscmInventoryLineItems["+sizeOf+"].productHead' /> </td>";
   	newRow+="<td align='left'><input type='text' class='txtboxPrice' readonly='readonly' id='Campaign_productGroup_" +sizeOf+ "' name='Campaign_productGroup_" +sizeOf+ "' value='"+productGroup+"' /> <input type='hidden' value='"+productGroupId+"' id='campaignVirtaulscmInventoryLineItems_productGroup_" +sizeOf+ "' name='campaignVirtaulscmInventoryLineItems["+sizeOf+"].productGroup' /> </td>";
   	newRow+="<td align='left'><input type='text' class='txtboxPrice' readonly='readonly' id='Campaign_product_" +sizeOf+ "' name='Campaign_product_" +sizeOf+ "' value='"+product+"' /> <input type='hidden' value='"+productId+"' id='campaignVirtaulscmInventoryLineItems_product_" +sizeOf+ "' name='campaignVirtaulscmInventoryLineItems["+sizeOf+"].product' /> </td>";
   	newRow+="<td align='left'><input type='text' class='txtboxPrice' readonly='readonly' name='campaignVirtaulscmInventoryLineItems["+sizeOf+"].quantity' value='"+quantity+"' id='campaignVirtaulscmInventoryLineItems_quantity_"+sizeOf+"' /></td>";
  	newRow+="</tr>";
   	$("#chkSETbodyCampaignVirtual").append(newRow);
	
	//$("#hiddenRowSSOCampaignNonSerial").val(sizeOf);
}

function addRowSerialSSOCampaign(productHeadId,productHead,productGroupId,productGroup,productId,product,quantity) {
	 
   	var sizeOf = $("[id^='newSerialTrCampaign']").size();
	//var sizeOf = $("#hiddenRowSSOCampaignSerial").val();
   	//sizeOf = parseInt(sizeOf)+1;
   	
   	var newRow = "<tr id='newSerialTrCampaign" + sizeOf + "'>";
   	newRow+="<td align='left'><input type='text' class='txtboxPrice' readonly='readonly' id='Serial_productHead_" +sizeOf+ "' name='Serial_productHead_" +sizeOf+ "' value='"+productHead+"' /> <input type='hidden' value='"+productHeadId+"' id='Serial_productHeadId_" +sizeOf+ "' name='Serial_productHeadId_" +sizeOf+ "' /> </td>";
   	newRow+="<td align='left'><input type='text' class='txtboxPrice' readonly='readonly' id='Serial_productGroup_" +sizeOf+ "' name='Serial_productGroup_" +sizeOf+ "' value='"+productGroup+"' /> <input type='hidden' value='"+productGroupId+"' id='Serial_productGroupId_" +sizeOf+ "' name='Serial_productGroupId_" +sizeOf+ "' /> </td>";
   	newRow+="<td align='left'><input type='text' class='txtboxPrice' readonly='readonly' id='Serial_product_" +sizeOf+ "' name='Serial_product_" +sizeOf+ "' value='"+product+"' /> <input type='hidden' value='"+productId+"' id='Serial_productId_" +sizeOf+ "' name='Serial_productId_" +sizeOf+ "' /> </td>";
   	newRow+="<td align='left'><input type='text' class='txtboxPrice' readonly='readonly' name='Serial_quantity_" +sizeOf+ "' value='"+quantity+"' id='Serial_quantity_" +sizeOf+ "' /></td>";
  	newRow+="</tr>";
   	$("#addCampaignSerial").append(newRow);
   	//$("#hiddenRowSSOCampaignSerial").val(sizeOf);
}

function checkIsValidSerialItemForCampaign(productHeadId,productGroupId,productId,quantity) {

	var isItemExists = false;
	var canProceed = false; 
	$("[id^='newSerialTrCampaign']").each(function(){
			
			var idsB = $(this).prop('id');
			var i = idsB.substring(19,idsB.length);
			var size = i;
		   	
			var pdhId = $('#Serial_productHeadId_'+size).val();
			var pdgId = $('#Serial_productGroupId_'+size).val();
			var pId = $('#Serial_productId_'+size).val();
		   	var quan = $('#Serial_quantity_'+size).val();
		   	
		   	/*console.log(' Entered productHeadId ' + productHeadId + ' -- pdhId -- ' + pdhId);
		   	console.log(' Entered productGroupId ' + productGroupId + ' -- pdgId -- ' + pdgId);
		   	console.log(' Entered productId ' + productId + ' -- pId -- ' + pId);
		   	console.log(' Entered Quan ' + quantity + ' -- Quan -- ' + quan);
		   	*/
		   	
		   	if(pdhId == productHeadId && pdgId == productGroupId && pId == productId && !isItemExists) {
		   			isItemExists = true;
		   			//console.log(' Entered Quan ' + quantity + ' -- Quan -- ' + quan);
		   			if ( parseFloat(quantity) <= parseFloat(quan) ) {
		   				canProceed = true;
		   				var availableQuan = parseFloat(quan) - parseFloat(quantity);
		   				$('#Serial_quantity_'+size).val(availableQuan);
		   			}
		   	}
	});
	
	if(!isItemExists) {
		alert('Given Item isn\'t Offered in this Campaign');
	} else if(isItemExists && !canProceed) {
		alert('Sorry !!! No more item remains in this offer');
	}
	
	return canProceed;
}




function addRowSerialCampaign(head,headId,type,startSer,endSer,cat,catId,item,itemId,quantity,startRef,endRef) {

   	//var sizeOf = $("[id^='newTrCampaignSerial']").size();
   	var sizeOf = $("#hiddenRowSSOCampaignSerial").val();
   	
   	var newRow = "<tr id='newTrCampaignSerial" + sizeOf + "'>";
   
   	newRow+="<td align='left'><input type='text' name='campaignScmInventoryLineItems["+sizeOf+"].startSerialNumber' readonly='readonly' title='"+startSer+"' value='"+startSer+"' id='campaignScmInventoryLineItems_startSerialNumber_"+sizeOf+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);text-overflow:ellipsis;' class='txtboxPrice' ></td>";
   	newRow+="<td align='left'><input type='text' name='campaignScmInventoryLineItems["+sizeOf+"].endSerialNumber' readonly='readonly' title='"+endSer+"' value='"+endSer+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);text-overflow:ellipsis;' id='campaignScmInventoryLineItems_endSerialNumber_"+sizeOf+"' class='txtboxPrice' ></td>";
   	newRow+="<td align='left'><input type='text' name='campaignScmInventoryLineItems["+sizeOf+"].startReference' readonly='readonly' value='"+startRef+"' id='campaignScmInventoryLineItems_startReferenceNumber_"+sizeOf+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);' class='txtboxPrice' ></td>";
   	newRow+="<td align='left'><input type='text' name='campaignScmInventoryLineItems["+sizeOf+"].endReference'  readonly='readonly' value='"+endRef+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);' id='campaignScmInventoryLineItems_endReferenceNumber_"+sizeOf+"' class='txtboxPrice' ></td>";
   	newRow+="<td align='left'><input type='hidden' id='campaignScmInventoryLineItems_scanType_" +sizeOf+ "' name='campaignScmInventoryLineItems["+sizeOf+"].scanType' value='"+type+"' /><input type='text' class='txtboxPrice' id='head"+sizeOf+"' value='"+head+"' name='head"+sizeOf+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);'  readonly='readonly' /><input type='hidden' id='campaignScmInventoryLineItems_productHead_" +sizeOf+ "' name='campaignScmInventoryLineItems["+sizeOf+"].productHead' value='"+headId+"'  />  </td>";
   	newRow+="<td align='left'><input type='text' class='txtboxPrice' id='category"+sizeOf+"' name='category"+sizeOf+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);' value='"+cat+"' readonly='readonly' /><input type='hidden' id='campaignScmInventoryLineItems_productGroup_" +sizeOf+ "' name='campaignScmInventoryLineItems["+sizeOf+"].productGroup'  value='"+catId+"' /></td>";
  	newRow+="<td align='left'><input type='text' class='txtboxPrice' id='item"+sizeOf+"' name='item"+sizeOf+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);' value='"+item+"' readonly='readonly' /><input type='hidden' id='campaignScmInventoryLineItems_product_" +sizeOf+ "' value='"+itemId+"' name='campaignScmInventoryLineItems["+sizeOf+"].product' /></td>";
   	newRow+="<td align='left'><input type='text' name='campaignScmInventoryLineItems["+sizeOf+"].quantity' id='campaignScmInventoryLineItems_quantity_"+sizeOf+"' class='txtboxPrice'  value='"+quantity+"' style='background: none repeat scroll 0% 0% rgb(232, 232, 232);' readonly='readonly' ></td>";
   	newRow+="<td><a class='logodelete' title='Delete' id='delRowSerialCampng"+sizeOf+"' style='margin:0;' onclick='delRowSerialCampng("+sizeOf+")'></a></td>";
   	newRow+="</tr>";
  
   	$("#chkSETbodyCampaignSerial").append(newRow);
   	sizeOf = parseInt(sizeOf)+1;
   	$("#hiddenRowSSOCampaignSerial").val(sizeOf);
   	$('#campaignNoItem').hide();
   	$('#campaignSerialTable').show();
	doTabAndEnterOperation();
 
}




function addRowVirtualSSO() {
	 
   	//var sizeOf = $("[id^='newTrVirtual']").size();
	
	var sizeOf = $("#hiddenRowSSONonSerial").val();
	sizeOf = parseInt(sizeOf)+1;
   	var newRow = "<tr id='newTrVirtual" + sizeOf + "'>";
   	newRow+="<td align='left'><select class='selinputsmall valid' id='virtaulscmInventoryLineItems_productHead_" +sizeOf+ "' name='virtaulscmInventoryLineItems["+sizeOf+"].productHead' onchange='getCatbyHead("+sizeOf+")'></select></td>";
   	newRow+="<td align='left'><select class='selinputsmall' id='virtaulscmInventoryLineItems_productGroup_" +sizeOf+ "' name='virtaulscmInventoryLineItems["+sizeOf+"].productGroup' onchange='getItemByCat("+sizeOf+")'></select></td>";
  	newRow+="<td align='left'><select class='selinputsmall' id='virtaulscmInventoryLineItems_product_" +sizeOf+ "' name='virtaulscmInventoryLineItems["+sizeOf+"].product' onchange='moveToQuantityBox("+sizeOf+")'></select></td>";
  	newRow+="<td align='left'><input type='text' name='enteredquantity_"+sizeOf+"' id='enteredquantity_"+sizeOf+"' autocomplete='off' class='txtboxPrice' ><input type='hidden' name='virtaulscmInventoryLineItems["+sizeOf+"].quantity' id='virtaulscmInventoryLineItems_quantity_"+sizeOf+"' /></td>";
  	newRow+="<td align='left'><input type='text' readonly='readonly' id='virtaulscmInventoryLineItems_unitPrice_"+sizeOf+"' name='virtaulscmInventoryLineItems["+sizeOf+"].unitPrice' value='0'  /></td>";
  	newRow+="<td align='left'><input type='text' readonly='readonly' id='virtaulscmInventoryLineItems_totalPrice_"+sizeOf+"' name='virtaulscmInventoryLineItems["+sizeOf+"].totalPrice'  value='0' /></td>";
  	newRow+="<td><a class='logodelete' title='Delete' id='delRowVirtal"+sizeOf+"' onclick='delRowVirtal("+sizeOf+")'></a></td>";
   	newRow+="</tr>";
 
   	$("[id^='newTrVirtual']").last().after(newRow);
   	
	$("#hiddenRowSSONonSerial").val(sizeOf);
   	$("#virtaulscmInventoryLineItems_productHead_" + sizeOf).empty();
   	$("#virtaulscmInventoryLineItems_productHead_" + sizeOf).html($("#virtaulscmInventoryLineItems_productHead_0").html());
   	$("#virtaulscmInventoryLineItems_quantity_" + sizeOf).val('');
 
   	doTabAndEnterOperation();
   	
   	var focusId = "#virtaulscmInventoryLineItems_quantity_" + sizeOf;
    $(focusId).val('loading...').delay(300).queue(function() {
    	$("#virtaulscmInventoryLineItems_productHead_" + sizeOf).focus();
        $(focusId).dequeue();
       	$(focusId).val('');
    });       	

}


function addRowVirtual() {
	 
   	//var sizeOf = $("[id^='newTrVirtual']").size();
   	var sizeOf = $("#hiddenRowNonSerial").val();
   	sizeOf = parseInt(sizeOf)+1;
   	var newRow = "<tr id='newTrVirtual" + sizeOf + "'>";
   	newRow+="<td align='left'><select class='selinputsmall valid' id='virtaulscmInventoryLineItems_productHead_" +sizeOf+ "' name='virtaulscmInventoryLineItems["+sizeOf+"].productHead' onchange='getCatbyHead("+sizeOf+")'></select></td>";
   	newRow+="<td align='left'><select class='selinputsmall' id='virtaulscmInventoryLineItems_productGroup_" +sizeOf+ "' name='virtaulscmInventoryLineItems["+sizeOf+"].productGroup' onchange='getItemByCat("+sizeOf+")'></select></td>";
  	newRow+="<td align='left'><select class='selinputsmall' id='virtaulscmInventoryLineItems_product_" +sizeOf+ "' name='virtaulscmInventoryLineItems["+sizeOf+"].product' onchange='moveToQuantityBox("+sizeOf+")'></select></td>";
  	newRow+="<td align='left'><input type='text' name='enteredquantity_"+sizeOf+"' id='enteredquantity_"+sizeOf+"' autocomplete='off' class='txtboxPrice' ><input type='hidden' name='virtaulscmInventoryLineItems["+sizeOf+"].quantity' id='virtaulscmInventoryLineItems_quantity_"+sizeOf+"' /></td>";
    newRow+="<td><a class='logodelete' title='Delete' id='delRowVirtal"+sizeOf+"' onclick='delRowVirtal("+sizeOf+")'></a></td>";
   	newRow+="</tr>";
 
   	$("[id^='newTrVirtual']").last().after(newRow);
   	
   	$("#hiddenRowNonSerial").val(sizeOf);
   	$("#virtaulscmInventoryLineItems_productHead_" + sizeOf).empty();
   	$("#virtaulscmInventoryLineItems_productHead_" + sizeOf).html($("#virtaulscmInventoryLineItems_productHead_0").html());
   	$("#virtaulscmInventoryLineItems_quantity_" + sizeOf).val('');
 
   	doTabAndEnterOperation();
   	
   	var focusId = "#virtaulscmInventoryLineItems_quantity_" + sizeOf;
    $(focusId).val('loading...').delay(300).queue(function() {
    	$("#virtaulscmInventoryLineItems_productHead_" + sizeOf).focus();
        $(focusId).dequeue();
       	$(focusId).val('');
    });       	

}


function delRowVirtal(i) {
    var tr ='newTrVirtual'+i;
    if(tr!='newTrVirtual0'){
            $(document.getElementById(tr)).remove();
            if(typeOfSelection == 'SSO') {
            	calculateTotalPrice();
            }
    }
}


function delRowSerialCampng(i) {
	var tr ='newTrCampaignSerial'+i;
	resetCampaignSerialItem(i);
	$(document.getElementById(tr)).remove();
    var sizeOf = $("[id^='newTrCampaignSerial']").size();
    if(sizeOf == 0) {
    	doSerialOperationCampng();
    }
}

function resetCampaignSerialItem(i) {
	
	var isItemExists = false;
	var productHeadId = $('#campaignScmInventoryLineItems_productHead_'+i).val();
	var productGroupId = $('#campaignScmInventoryLineItems_productGroup_'+i).val();
	var productId = $('#campaignScmInventoryLineItems_product_'+i).val();
	var quantity = $('#campaignScmInventoryLineItems_quantity_'+i).val();
	
	$("[id^='newSerialTrCampaign']").each(function(){
			
			var idsB = $(this).prop('id');
			var i = idsB.substring(19,idsB.length);
			var size = i;
		   	
			var pdhId = $('#Serial_productHeadId_'+size).val();
			var pdgId = $('#Serial_productGroupId_'+size).val();
			var pId = $('#Serial_productId_'+size).val();
		   	var quan = $('#Serial_quantity_'+size).val();
		   	
		   	if(pdhId == productHeadId && pdgId == productGroupId && pId == productId && !isItemExists) {
		   			isItemExists = true;
		   			var addedQuan = parseFloat(quan) + parseFloat(quantity);
	   				$('#Serial_quantity_'+size).val(addedQuan);
		   	}
	});
	
	if(!isItemExists) {
		alert('Given Item isn\'t Offered in this Campaign');
	}
}


 

function doSerialOperationCampng() {
	$('#campaignNoItem').show();
   	$('#campaignSerialTable').hide();
   	doTabAndEnterOperation();
}

function delRowSerial(i, type) {
	
    /*var tr ='newTrSerial'+i;
    if(tr!='newTrSerial0'){
        $(document.getElementById(tr)).remove();
        if(typeOfSelection == 'SSO') {
        	calculateTotalPrice();
        }
    }*/
	
	var tr ='newTrSerial'+i;
	$(document.getElementById(tr)).remove();
    if(typeOfSelection == 'SSO') {
    	calculateTotalPrice();
    	resetCampaignDataOnRTRChange();
    }
	
    var sizeOf = $("[id^='newTrSerial']").size();
    if(sizeOf == 0) {
    	doSerialOperation();
    	if(type == 'SSO') {
    		$('#hiddenRowSSOSerial').val(0);
    	} else if(type == 'NRL') {
    		$('#hiddenRowSerial').val(0);
    	}
    }
}


function doSerialOperation() {
	$('#noItem').show();
   	$('#serialTable').hide();
	doTabAndEnterOperation();
}


function validateDuplicateSerialOrReferenceCampaign(startSer, endSer) {
	
	var err = '';
	var type = $('input[name="cradioS"]:checked').val();
	
	if(startSer.length == 28) {
		startSer = startSer.substr(0,26);
	}
	
	if(endSer.length == 28) {
		endSer = endSer.substr(0,26);
	}
	
	err = validateDuplicateSerialOrReferenceBeforeCampaignCheck(startSer, endSer, type);
	
	if(err == '') {
	
		if(type == 'Serial') {
			
			$("[id^='newTrCampaignSerial']").each(function(){
				var idsB = $(this).prop('id');
				var i = idsB.substring(19,idsB.length);
				var startS = $('#campaignScmInventoryLineItems_startSerialNumber_'+i).val();
				var endS = $('#campaignScmInventoryLineItems_endSerialNumber_'+i).val();
				
				if ((startSer >= startS && startSer <= endS) || (endSer >= startS && endSer <= endS)) {
					err = 'Given Number is already in used. Please Check !!!';
				} else {
					if ((startS > startSer && endS < endSer)) {
						err = 'Given Number is already in used. Please Check !!!';
					}
				}		
			});
			
		} else if(type == 'Reference') {
			
			$("[id^='newTrCampaignSerial']").each(function(){
				var idsB = $(this).prop('id');
				var i = idsB.substring(19,idsB.length);
				var startS = $('#campaignScmInventoryLineItems_startReferenceNumber_'+i).val();
				var endS = $('#campaignScmInventoryLineItems_endReferenceNumber_'+i).val();
				
				if ((startSer >= startS && startSer <= endS) || (endSer >= startS && endSer <= endS)) {
					err = 'Given Number is already in used. Please Check !!!';
				} else {
					if ((startS > startSer && endS < endSer)) {
						err = 'Given Number is already in used. Please Check !!!';
					}
				}		
			});
			
		}
		
	}
	
	return err;
}



function validateDuplicateSerialOrReferenceBeforeCampaignCheck(startSer, endSer, type) {
	
	var err = '';
	
	if(startSer.length == 28) {
		startSer = startSer.substr(0,26);
	}
	
	if(endSer.length == 28) {
		endSer = endSer.substr(0,26);
	}
	
	
	if(type == 'Serial') {
		
		$("[id^='newTrSerial']").each(function(){
			var idsB = $(this).prop('id');
			var i = idsB.substring(11,idsB.length);
			var startS = $('#scmInventoryLineItems_startSerialNumber_'+i).val();
			var endS = $('#scmInventoryLineItems_endSerialNumber_'+i).val();
			
			if ((startSer >= startS && startSer <= endS) || (endSer >= startS && endSer <= endS)) {
				err = 'Given Number is already in used. Please Check !!!';
			} else {
				if ((startS > startSer && endS < endSer)) {
					err = 'Given Number is already in used. Please Check !!!';
				}
			}		
		});
		
	} else if(type == 'Reference') {
		
		$("[id^='newTrSerial']").each(function(){
			var idsB = $(this).prop('id');
			var i = idsB.substring(11,idsB.length);
			var startS = $('#scmInventoryLineItems_startReferenceNumber_'+i).val();
			var endS = $('#scmInventoryLineItems_endReferenceNumber_'+i).val();
			
			if ((startSer >= startS && startSer <= endS) || (endSer >= startS && endSer <= endS)) {
				err = 'Given Number is already in used. Please Check !!!';
			} else {
				if ((startS > startSer && endS < endSer)) {
					err = 'Given Number is already in used. Please Check !!!';
				}
			}		
		});
		
	}
	
	return err;
}





function validateDuplicateSerialOrReference(startSer, endSer) {
	
	var err = '';
	var type = $('input[name="radioS"]:checked').val();
	
	if(startSer.length == 28) {
		startSer = startSer.substr(0,26);
	}
	
	if(endSer.length == 28) {
		endSer = endSer.substr(0,26);
	}
	
	if(type == 'Serial') {
		
		$("[id^='newTrSerial']").each(function(){
			var idsB = $(this).prop('id');
			var i = idsB.substring(11,idsB.length);
			var startS = $('#scmInventoryLineItems_startSerialNumber_'+i).val();
			var endS = $('#scmInventoryLineItems_endSerialNumber_'+i).val();
			
			if ((startSer >= startS && startSer <= endS) || (endSer >= startS && endSer <= endS)) {
				err = 'Given Number is already in used. Please Check !!!';
			} else {
				if ((startS > startSer && endS < endSer)) {
					err = 'Given Number is already in used. Please Check !!!';
				}
			}		
		});
		
	} else if(type == 'Reference') {
		
		$("[id^='newTrSerial']").each(function(){
			var idsB = $(this).prop('id');
			var i = idsB.substring(11,idsB.length);
			var startS = $('#scmInventoryLineItems_startReferenceNumber_'+i).val();
			var endS = $('#scmInventoryLineItems_endReferenceNumber_'+i).val();
			
			if ((startSer >= startS && startSer <= endS) || (endSer >= startS && endSer <= endS)) {
				err = 'Given Number is already in used. Please Check !!!';
			} else {
				if ((startS > startSer && endS < endSer)) {
					err = 'Given Number is already in used. Please Check !!!';
				}
			}		
		});
		
	}
	
	return err;
}

function validateDuplicateSerialOrReferenceForSingle(startSer) {
	
	var err = '';
	var type = $('input[name="radioS"]:checked').val();
	
	if(startSer.length == 28) {
		startSer = startSer.substr(0,26);
	}
  
	if(type == 'Serial') {
	
		$("[id^='newTrSerial']").each(function(){
			var idsB = $(this).prop('id');
 			var i = idsB.substring(11,idsB.length);
 			var startS = $('#scmInventoryLineItems_startSerialNumber_'+i).val();
			var endS = $('#scmInventoryLineItems_endSerialNumber_'+i).val();
 			if ((startSer >= startS && startSer <= endS)) {
				err = 'Given Number is already in used. Please Check !!!';
			}
		});
		
	} else if(type == 'Reference') {
		
		$("[id^='newTrSerial']").each(function(){
			var idsB = $(this).prop('id');
			var i = idsB.substring(11,idsB.length);
			var startS = $('#scmInventoryLineItems_startReferenceNumber_'+i).val();
			var endS = $('#scmInventoryLineItems_endReferenceNumber_'+i).val();
 			if ((startSer >= startS && startSer <= endS)) {
				err = 'Given Number is already in used. Please Check !!!';
			}
		});
		
	}
	
	return err;
}


function doTabAndEnterOperation() {
	
	$('input[id^="scmInventoryLineItems_"]').unbind('keypress').bind('keypress',function(e){
		e.preventDefault();
	});
	
	$('input[id^="virtaulscmInventoryLineItems_"]').unbind('keypress').bind('keypress',function(e){
		if (e.which == 13) {
			e.preventDefault();
 		}
	});
	
	$('input[id^="enter_common"]').unbind('click').bind('click',function(e){
		$(this).select();
	});
	
	$('input[id^="entered_scmInventoryLineItems_"]').unbind('click').bind('click',function(e){

		var name = $(this).prop('name');
 	   	if(name.indexOf('startSerialNumber') > -1) {
 	   		$(this).select();  
 	   	} else if(name.indexOf('endSerialNumber') > -1) {
 	   		$(this).select();
 	   	}
	});

	
	
	
	
	$('input[id^="center_common"]').unbind('click').bind('click',function(e){
		$(this).select();
	});
	
	
	$('input[id^="center_common"]').unbind('keypress').bind('keypress',function(e){	 
		
		if (e.which == 13) {
		
			e.preventDefault();
			var name = $(this).prop('name');
			var type = $('input[name="cradioS"]:checked').val();
 			if(name.indexOf('startSer') > -1) {
				
 				  
		 		  if($(this).val() == '') {
		 			 $('#errorDivCampaign').html('Please Provide Start Serial / Reference No');
		 			 $('#errorDivCampaign').fadeIn(200).fadeOut(6000);
		 			 $(this).focus();
		 		  } else {
		 			  
		 			  var isEndSer = $("#center_common_endSer").prop('disabled');
		 			  var startSerialR = $('#center_common_startSer').val();
		 			  
		 			  if(type == 'Reference') {
		 				// if(startSerialR.length == 10 && startSerialR.indexOf('17') == 0) {
		 					 
		 					 if(isEndSer) {
				 				 
		 		 				var bHalfOf = getOnBehalfOf();
		 						if(bHalfOf != '') {
		 							var hasErr = validateDuplicateSerialOrReferenceCampaign(startSerialR, startSerialR);
		 							if(hasErr == '') {
		 								getDataForItemSelectedSerialsCampaign(bHalfOf);	
		 							} else {
		 								alert(hasErr);
		 								$('#center_common_startSer').select();
		 							}
		 						}
		 		 				
		 		 			  } else {
		 		 				 $("#center_common_endSer").focus();
		 			 			 $("#center_common_endSer").select(); 
		 		 			  }
		 				 /*} else {
		 					 alert('Invalid Number.Please Check.');
		 					 $('#center_common_startSer').focus();
		 					 $('#center_common_startSer').select();
		 				 }*/
		 				 
		 			  } else {
		 				  
		 				 if(isEndSer) {
			 				 
			 				var bHalfOf = getOnBehalfOf();
							if(bHalfOf != '') {
								var hasErr = validateDuplicateSerialOrReferenceCampaign(startSerialR, startSerialR);
								if(hasErr == '') {
									getDataForItemSelectedSerialsCampaign(bHalfOf);	
								} else {
									alert(hasErr);
									$('#center_common_startSer').select();
								}
							}
			 				
			 			  } else {
			 				 $("#center_common_endSer").focus();
				 			 $("#center_common_endSer").select(); 
			 			  }
		 			  }
		 			  
		 			  
		 		  }
		 		  
		 	} else if(name.indexOf('endSer') > -1) {
				
				var strtSer = $("#center_common_startSer").val();
				if(strtSer == '') {
					$('#errorDivCampaign').html('Please Provide Start Serial / Reference No');
					$('#errorDivCampaign').fadeIn(200).fadeOut(6000);
					$("#center_common_startSer").focus();
					$("#center_common_startSer").select();
				} else {
					
					if($(this).val() == '') {
						$('#errorDivCampaign').html('Please Provide End Serial / Reference No');
						$('#errorDivCampaign').fadeIn(200).fadeOut(6000);
					} else {
						
						var startSerial = $('#center_common_startSer').val();
						var endSerial = $('#center_common_endSer').val();
						
						if(type == 'Reference') {
			 				  
	 		 				 //if(endSerial.length == 10 && endSerial.substr(0,2) == '17') {
	 		 					var bHalfOf = getOnBehalfOf();
								if(bHalfOf != '') {
									var hasErr = validateDuplicateSerialOrReferenceCampaign(startSerial, endSerial);
									if(hasErr == '') {
										getDataForItemSelectedSerialsCampaign(bHalfOf);
									} else {
										alert(hasErr);
										$('#center_common_endSer').select();
									}
								}
	 		 				/* } else {
	 		 					alert('Invalid Number.Please Check.');
			 					 $('#center_common_endSer').focus();
			 					 $('#center_common_endSer').select();
	 		 				 }*/
	 		 				 
						} else {
							var bHalfOf = getOnBehalfOf();
							if(bHalfOf != '') {
								/*if(startSerial == endSerial) {
									alert('Please Uncheck the Range and Try Again');
									$(this).select();
								} else {
									var hasErr = validateDuplicateSerialOrReferenceCampaign(startSerial, endSerial);
									if(hasErr == '') {
										getDataForItemSelectedSerialsCampaign(bHalfOf);
									} else {
										alert(hasErr);
										$('#center_common_endSer').select();
									}									
								}*/
								var hasErr = validateDuplicateSerialOrReferenceCampaign(startSerial, endSerial);
								if(hasErr == '') {
									getDataForItemSelectedSerialsCampaign(bHalfOf);
								} else {
									alert(hasErr);
									$('#center_common_endSer').select();
								}	
							}
						}
						
							

					}

				}
			
		 	}  
		
		}			 
		
	});
	
	
	
	$('input[id^="enter_common"]').unbind('keypress').bind('keypress',function(e){	 
		
		if (e.which == 13) {
		
			e.preventDefault();
			var name = $(this).prop('name');
			var type = $('input[name="radioS"]:checked').val();
 			if(name.indexOf('startSer') > -1) {
				
		 		  if($(this).val() == '') {
		 			 $('#errorDiv').html('Please Provide Start Serial / Reference No');
		 			 $('#errorDiv').fadeIn(200).fadeOut(6000);
		 			 $(this).focus();
		 		  } else {
		 			 
		 			  var isEndSer = $("#enter_common_endSer").prop('disabled');
		 			  var startSerialR = $('#enter_common_startSer').val();
		 			  

		 			  if(type == 'Reference') {
		 				  
 		 				 //if(startSerialR.length == 10 && startSerialR.substr(0,2) == '17') {
		 					if(isEndSer) {
				 				  
				 				if(typeOfSelection == 'SSO') {
										
									var bHalfOf = getOnBehalfOf();
									if(bHalfOf != '') {
										var hasErr = validateDuplicateSerialOrReferenceForSingle(startSerialR);
										if(hasErr == '') {
											getDataForItemSelectedSerials(bHalfOf);	
										} else {
											alert(hasErr);
											$('#enter_common_startSer').select();
										}
									}
									
								} else {
									var hasErr = validateDuplicateSerialOrReferenceForSingle(startSerialR);
									if(hasErr == '') {
										getDataForItemSelectedSerials();	
									} else {
										alert(hasErr);
										$('#enter_common_startSer').select();
									}
								}
				 				
				 			  } else {
				 				 $("#enter_common_endSer").focus();
					 			 $("#enter_common_endSer").select(); 
				 			  }
		 				 /*} else {
		 					 alert('Invalid Number.Please Check.');
		 					 $('#center_common_startSer').focus();
		 					 $('#center_common_startSer').select();
		 				 }*/
 		 				 
		 			  } else {
		 				  
		 				  	if(isEndSer) {
			 				  
				 				if(typeOfSelection == 'SSO') {
										
									var bHalfOf = getOnBehalfOf();
									if(bHalfOf != '') {
										var hasErr = validateDuplicateSerialOrReferenceForSingle(startSerialR);
										if(hasErr == '') {
											getDataForItemSelectedSerials(bHalfOf);	
										} else {
											alert(hasErr);
											$('#enter_common_startSer').select();
										}
									}
									
								} else {
									var hasErr = validateDuplicateSerialOrReferenceForSingle(startSerialR);
									if(hasErr == '') {
										getDataForItemSelectedSerials();	
									} else {
										alert(hasErr);
										$('#enter_common_startSer').select();
									}
								}
				 				
				 			  } else {
				 				 $("#enter_common_endSer").focus();
					 			 $("#enter_common_endSer").select(); 
				 			  }
		 			  }
		 			  
		 			  
		 		  }
		 		  
		 	} else if(name.indexOf('endSer') > -1) {
				
				var strtSer = $("#enter_common_startSer").val();
				if(strtSer == '') {
					$('#errorDiv').html('Please Provide Start Serial / Reference No');
					$('#errorDiv').fadeIn(200).fadeOut(6000);
					$("#enter_common_startSer").focus();
					$("#enter_common_startSer").select();
				} else {
					
					if($(this).val() == '') {
						$('#errorDiv').html('Please Provide End Serial / Reference No');
						$('#errorDiv').fadeIn(200).fadeOut(6000);
					} else {
						
						var startSerial = $('#enter_common_startSer').val();
						var endSerial = $('#enter_common_endSer').val();
						
						 if(type == 'Reference') {
			 				  
	 		 				// if(endSerial.length == 10 && endSerial.substr(0,2) == '17') {
	 		 					 
	 		 					if(typeOfSelection == 'SSO') {
	 								
	 								var bHalfOf = getOnBehalfOf();
	 								if(bHalfOf != '') {
	 									/*if(startSerial == endSerial) {
	 										alert('Please Uncheck the Range and Try Again');
	 										$(this).select();
	 									} else {
	 										var hasErr = validateDuplicateSerialOrReference(startSerial, endSerial);
	 										if(hasErr == '') {
	 											resetCampaignDataOnRTRChange();
	 											getDataForItemSelectedSerials(bHalfOf);
	 										} else {
	 											alert(hasErr);
	 											$('#enter_common_endSer').select();
	 										}									
	 									}*/
	 									var hasErr = validateDuplicateSerialOrReference(startSerial, endSerial);
 										if(hasErr == '') {
 											resetCampaignDataOnRTRChange();
 											getDataForItemSelectedSerials(bHalfOf);
 										} else {
 											alert(hasErr);
 											$('#enter_common_endSer').select();
 										}	
	 								}
	 								
	 							} else {
	 								
	 								/*if(startSerial == endSerial) {
	 									alert('Please Uncheck the Range and Try Again');
	 									$(this).select();  
	 								} else {
	 									var hasErr = validateDuplicateSerialOrReference(startSerial, endSerial);
	 									if(hasErr == '') {
	 										getDataForItemSelectedSerials();
	 									} else {
	 										alert(hasErr);
	 										$('#enter_common_endSer').select();
	 									}
	 									
	 								}*/
	 								var hasErr = validateDuplicateSerialOrReference(startSerial, endSerial);
 									if(hasErr == '') {
 										getDataForItemSelectedSerials();
 									} else {
 										alert(hasErr);
 										$('#enter_common_endSer').select();
 									}
	 							}
	 		 					
	 		 				 /*} else {
	 		 					 alert('Invalid Number.Please Check.');
			 					 $('#enter_common_endSer').focus();
			 					 $('#enter_common_endSer').select();
	 		 				 }*/
	 		 				 
						 } else {
							 
							 if(typeOfSelection == 'SSO') {
									
									var bHalfOf = getOnBehalfOf();
									if(bHalfOf != '') {
										/*if(startSerial == endSerial) {
											alert('Please Uncheck the Range and Try Again');
											$(this).select();
										} else {
											var hasErr = validateDuplicateSerialOrReference(startSerial, endSerial);
											if(hasErr == '') {
												resetCampaignDataOnRTRChange();
												getDataForItemSelectedSerials(bHalfOf);
											} else {
												alert(hasErr);
												$('#enter_common_endSer').select();
											}									
										}*/
										var hasErr = validateDuplicateSerialOrReference(startSerial, endSerial);
										if(hasErr == '') {
											resetCampaignDataOnRTRChange();
											getDataForItemSelectedSerials(bHalfOf);
										} else {
											alert(hasErr);
											$('#enter_common_endSer').select();
										}	
									}
									
								} else {
									
									/*if(startSerial == endSerial) {
										alert('Please Uncheck the Range and Try Again');
										$(this).select();  
									} else {
										var hasErr = validateDuplicateSerialOrReference(startSerial, endSerial);
										if(hasErr == '') {
											getDataForItemSelectedSerials();
										} else {
											alert(hasErr);
											$('#enter_common_endSer').select();
										}
										
									}*/
									var hasErr = validateDuplicateSerialOrReference(startSerial, endSerial);
									if(hasErr == '') {
										getDataForItemSelectedSerials();
									} else {
										alert(hasErr);
										$('#enter_common_endSer').select();
									}
								}
							 
						 } 
							
					}

				}
			
		 	}  
		
		}			 
		
	});
	
	
	
	$('input[id^="entered_scmInventoryLineItems_"]').unbind('keypress').bind('keypress',function(e){	 
		
		if (e.which == 13) {
			
		       e.preventDefault();
		 	   var name = $(this).prop('name');
		 	   var id = $(this).prop('id');
		 	   var index = id.substring(id.lastIndexOf('_')+1,id.length);
		 	   if(name.indexOf('startSerialNumber') > -1) {
			 		  if($(this).val() == '') {
			 			 $('#errorDiv').html('Please Provide Start Serial / Reference No');
			 			 $('#errorDiv').fadeIn(200).fadeOut(6000);
			 			 $(this).focus();
			 		  } else {
			 			 $("#entered_scmInventoryLineItems_endSerialNumber_" + index).focus();
			 			 $("#entered_scmInventoryLineItems_endSerialNumber_" + index).select();
			 		  }
			 		  
			 	} else if(name.indexOf('endSerialNumber') > -1) {
						var strtSer = $("#entered_scmInventoryLineItems_startSerialNumber_" + index).val();
						if(strtSer == '') {
							$('#errorDiv').html('Please Provide Start Serial / Reference No');
							$('#errorDiv').fadeIn(200).fadeOut(6000);
							$("#entered_scmInventoryLineItems_startSerialNumber_" + index).focus();
							$("#entered_scmInventoryLineItems_startSerialNumber_" + index).select();
						} else {
							if($(this).val() == '') {
								$('#errorDiv').html('Please Provide End Serial / Reference No');
								$('#errorDiv').fadeIn(200).fadeOut(6000);
							} else {
								
								if(typeOfSelection == 'SSO') {
									
									var bHalfOf = getOnBehalfOf();
									if(bHalfOf != '') {
										resetCampaignDataOnRTRChange();
										getDataForItemForOSDONew(index, bHalfOf);
									}
									
								} else {
									getDataForItemForOSDONew(index);
								}
									
							}
						}
			 	}
 		} 
		 
 	}); 
	
	$('input[id^="enteredquantity"]').unbind('keypress').bind('keypress',function(e){ 

		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
	    	
			if (e.which == 13) {
				
				e.preventDefault();
		 	   	var id = $(this).prop('id');
		 	   	var index = id.substring(id.lastIndexOf('_')+1,id.length);
		 	   	if($(this).val() == '') {
					$('#errorDivVirtual').html('Please Provide Quantity');
					$('#errorDivVirtual').fadeIn(200).fadeOut(6000);
				} else {
					
					if(typeOfSelection == 'SSO') {
						
						var bHalfOf = getOnBehalfOf();
						if(bHalfOf != '') {
							resetCampaignDataOnRTRChange();
							getQuantityForNonSerialItems(index, bHalfOf);
						}
					} else {
						getQuantityForNonSerialItems(index);
					}
				}
		 	   	
			} else {
				e.preventDefault();
		    	return false;
			}
			
	    }
		
		
		
		/* else if (e.which == 0) {
			
				e.preventDefault();
		 	   	var id = $(this).prop('id');
		 	   	var index = id.substring(id.lastIndexOf('_')+1,id.length);
		 	   	if($(this).val() == '') {
					$('#errorDivVirtual').html('Please Provide Quantity');
					$('#errorDivVirtual').fadeIn(200).fadeOut(6000);
				} else {
					getQuantityForNonSerialItems(index);	
				}
		} */
		
	});
	
}