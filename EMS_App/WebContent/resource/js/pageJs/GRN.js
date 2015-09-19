function addResult() {
	
		var sizeOf = $("[id^='newTrSerial']").size();
		if(sizeOf == null || sizeOf == 'undefined')
		{
			sizeOf = 0;
		}
		
		var err = '';
		
		var inputType = $('[name=inputType]:checked').val();
		var numberType = $('[name=numberType]:checked').val();
		var startSerial = $('[name=startSerial]').val();
		var endSerial = $('[name=endSerial]').val();
		var shipId = $('#shipment').val();
		var partner = $('#partner').val();
		var sOrder = $('#salesOrder').val();
		var pOrder = $('#purchaseOrder').val();
		
		if(shipId == null || shipId == "" || shipId == undefined)
		{
			err = "Please Select a Shipment!!!";
				
		}
		
		if(pOrder == null || pOrder == "" || pOrder == undefined)
		{
			err = "Please Select a Purchase Order!!!";
				
		}
		
		if(sOrder == null || sOrder == "" || sOrder == undefined)
		{
			err = "Please Select Sales Order!!!";
				
		}
		
		if(partner == null || partner == "" || partner == undefined)
		{
			err = "Please Select a Partner!!!";
				
		}
		
		if(startSerial == ""  && inputType == "Single")
		{
			startSerial = endSerial;
		}
		
		if(endSerial == "" && inputType == "Single")
		{
			endSerial = startSerial;
		}
		
	 
       
              
       if(startSerial>endSerial)
       {
       		err = 'Start Serial should be lesser than End Serial \n'; 
       }
       
       if(startSerial == '') {
              err = 'Please provide Start Serial Number \n'; 
       } 
       
       if(endSerial == '') {
              err = 'Please provide End Serial Number \n';  
       } 
       
       /* if(type == 'Please Select') {
              err = 'Please Select Scan Type \n'; 
       } */
       
       					var hasErr = "";
                           var errMsg = "";
                           var itemName = "";
                           var category = "";
                           var quantityReceived = "";
                           var itemId = "";
                           var itemCode = "";
                           var shippedQuantity = "";
                           var grnQuantity = "";
                           var dbStartSerial = "";
                           var dbEndSerial = "";
                           
       if(err == '') {
              $.ajax({
                     type : 'GET',
                     url : 'getDataForShipment.con',
                     data : {startSerial : startSerial, endSerial : endSerial, type : numberType, allocatedTo : 'DTR', shipId : shipId},
                     dataType : 'json',
                     async : false,
                     cache : false,
                     success : function(data) {
                           
                           hasErr = data.hasError;
                           if(hasErr == 'no') {
                           errMsg = data.errorMsg;
                           itemName = data.itemName;
                           category = data.category;
                           quantityReceived = data.quantity;
                           itemId = data.itemId;
                           productType = data.productHead; 
                           shippedQuantity = data.shippedQuan;
                           if(data.grnQuantity == null || data.grnQuantity == 'null' || data.grnQuantity =='' )
                    	   {
                        	   grnQuantity = "0";
                    	   }
                           else
                           {
                        	   grnQuantity = data.grnQuantity;
                           }
                           itemCode = data.itemCode;
                           dbStartSerial = data.dbStartSerial;
                           dbEndSerial = data.dbEndSerial;
                           } else {
                                 errMsg = data.errorMsg;
                           } 
                          
                     },
                     error : function(err) {
                           /* alert('Please Provide Correct Data'); */
                            itemName = "";
                          		 category = "";
                          		 quantity = 0;
                          		 itemId ="";
                          		 categoryId = "";
                                 itemCode = ""; 
                     }
              }); 
       } else {
              alert(err);
              return false;
       }
       
       if(!checkForDuplicate(dbStartSerial, dbEndSerial))
    	   {
    	   	   	hasErr = 'yes';
    	   	   	errMsg = 'Given Number is already in used. Please Check !!!';
    	   }
       
	
    var newRow = '';
	if(hasErr == 'no')
		{
		newRow = "<tr id='newTrSerial" + sizeOf + "'>";
		newRow+="<td><input type='text' readonly='true' class='selinputsmall valid' id='prodHead_" +sizeOf+ "' name='grn["+sizeOf+"].itemHead' value='"+productType+"'></input></td>";
		newRow+="<td align='left'><input type='text' readonly='true' class='selinputsmall valid' id='product_" +sizeOf+ "' name='grn["+sizeOf+"].product' value='"+itemName+"("+itemCode+")"+"'></input></td>";
		newRow+="<input type='hidden' class='selinputsmall valid' id='prodId_" +sizeOf+ "' name='grn["+sizeOf+"].prodId' value='"+itemId+"'></input></td>";
		newRow+="<input type='hidden' class='selinputsmall valid' id='dbStartSerial_" +sizeOf+ "' name='grn["+sizeOf+"].dbStartSerial' value='"+dbStartSerial+"'></input></td>";
		newRow+="<input type='hidden' class='selinputsmall valid' id='dbEndSerial_" +sizeOf+ "' name='grn["+sizeOf+"].dbEndSerial' value='"+dbEndSerial+"'></input></td>";
		newRow+="<input type='hidden' class='selinputsmall valid' id='catId_" +sizeOf+ "' name='grn["+sizeOf+"].category' value='"+category+"'></input></td>";
		newRow+="<td align='left'><input type='text' readonly='true' class='selinputsmall valid' id='type_" +sizeOf+ "' name='grn["+sizeOf+"].type' value='"+numberType+"'></input></td>";
		newRow+="<td align='left'><input type='text' readonly='true' class='selinputsmall valid' id='startNumber_" +sizeOf+ "' name='grn["+sizeOf+"].startNumber' value='"+startSerial+"'></input></td>";
		newRow+="<td align='left'><input type='text' readonly='true' class='selinputsmall valid' id='endNumber_" +sizeOf+ "' name='grn["+sizeOf+"].endNumber' value='"+endSerial+"'></input></td>";
		newRow+="<td align='left'><input type='text' readonly='true' class='selinputsmall valid' id='shippedQuantity_" +sizeOf+ "' name='grn["+sizeOf+"].shippedQuantity' value='"+shippedQuantity+"'></input></td>";
		newRow+="<td align='left'><input type='text' readonly='true' class='selinputsmall valid' id='grnQuantity_" +sizeOf+ "' name='grn["+sizeOf+"].grnQuantity' value='"+grnQuantity+"'></input></td>";
		newRow+="<td align='left'><input type='text' readonly='true' class='selinputsmall valid' id='receivedQuantity_" +sizeOf+ "' name='grn["+sizeOf+"].receivedQuantity' value='"+quantityReceived+"'></input></td>";

		newRow+="<td><a class='logodelete' title='Delete' id='delRow"+sizeOf+"' onclick='delRow("+sizeOf+")'></a></td>";
		newRow+="</tr>";
		
		$('[name=startSerial]').val('');
		$('[name=endSerial]').val('');
		
		}
		else if(hasErr == 'yes'){
			alert(errMsg);
		}
		
		
		if(sizeOf != 0)
		{
			$("[id^='newTrSerial']").last().after(newRow);
		}
		else
		{
			$('#GrnTbody').append(newRow);
		}
		
		
		
	}


function delRow(i) {
	var tr = 'newTrSerial' + i;
	
	
		/*if ($('#disabledStatus').val() != 'false') {
			$(document.getElementById(tr)).remove();
			$(document.getElementById('isDelete' + i)).val(true);
			
			var x = $( "#checkHide" ).val();
			x = parseInt($( "#checkHide" ).val())-1;
			$("input[id=checkHide]").val(x);
			
		} else {*/
			$(document.getElementById(tr)).remove();
			/*temp = parseInt(temp)+1;
		}*/
	
	/*if(chkdeletedata=="")
		chkdeletedata=i+"_"+chkdeletedata;
		else
		chkdeletedata=chkdeletedata+"_"+i;*/
	
	return false;
}







function checkForDuplicate(startSer, endSer)
{
	var booleanTrueFalse = true;
	$("[id^='newTrSerial']").each(function(){
		var idsB = $(this).prop('id');
		var i = idsB.substring(11,idsB.length);
		
		var startS = $('#dbStartSerial_'+i).val();
		var endS = $('#dbEndSerial_'+i).val();

		if ((parseFloat(startSer) >= parseFloat(startS) && parseFloat(startSer) <= parseFloat(endS)) || (parseFloat(endSer) >= parseFloat(startS) && parseFloat(endSer) <= parseFloat(endS))) {
			
			booleanTrueFalse = false;
		} else {
			if ((parseFloat(startS) > parseFloat(startSer) && parseFloat(endS) < parseFloat(endSer))) {
				
				booleanTrueFalse = false;
			}
		}	
		
		
	});
	
	return booleanTrueFalse;

}