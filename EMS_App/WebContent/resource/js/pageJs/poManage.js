function findselected(counter) {
       if ($("#productHead_" + counter + " option:selected").text() == 'SIM KIT') {
              $("#primiumCatagory_" + counter).removeAttr("disabled");
       } else {
              $("#primiumCatagory_" + counter).attr('disabled', true);
              $("#primiumCatagory_" + counter).val("");
       }
}

function getUnitPriceByPremiumCat(counter) {

       var premiumCat = $("#primiumCatagory_" + counter + "  option:selected")
                     .text();
       var unitPrice = $("#actualUnitPrice_" + counter).val();
       $('#primiumCatagoryName_' + counter).val($("#primiumCatagory_" + counter + " option:selected").text());
       if (premiumCat == "Please Select") {

              $("#unitPrice_" + counter).val(unitPrice);
       } else {
              var array = premiumCat.split('(');
              var array_fragment = array[1].split(')');
              var premiumPrice = array_fragment[0];
              // var unitPrice = $("#actualUnitPrice_" + counter).val();
              var premiumUnitPrice = +premiumPrice + +unitPrice;
              $("#unitPrice_" + counter).val(premiumUnitPrice);
       }
       
       calculateTotalPrice();

}

function getShippingAddress(counter) {

    var shippingAddress = $("#shippingAddress_" + counter + "  option:selected")
                  .text();
    
    $('#shippingAddressName_' + counter).val($("#shippingAddress_" + counter + " option:selected").text());

}

function calculateTotalPrice() {
       var requestedQuant;
       var unitPrice;
       var total;
       var totalAmount = 0;

       $("#poTable tbody tr").each(function() {
              requestedQuant = $(this).find(".requestedQuantity").val();
              unitPrice = $(this).find(".unitPrice").val();
              total = requestedQuant * unitPrice;
              $(this).find(".total").val(total.toFixed(4));
              totalAmount = +totalAmount + total;
       });

       $("#totalAmount").val(totalAmount.toFixed(4));
}

function compareDate(poRaisedDate, expDeliveryDate) {
       var date1 = expDeliveryDate;
       var date2 = poRaisedDate;

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
              return compareDate($('#poRaisedDate').val(), value);
       }, "Expected Delivery Date should be greater than PO Raised Date .");

       $("#poForm")
                     .validate(
                                  {
                                         ignore : "",
                                         /*rules : {
                                                 remarks : "required", 
                                                expectedDeliveryDate : {
                                                       date_check : $('#expectedDeliveryDate').val(),
                                                },

                                         },*/
                                         // Specify the validation error
											// messages
                                         messages : {
                                                /*
												 * remarks : styleMsgHeader +
												 * "Please Give Remarks" +
												 * styleMsgFooter,
												 */
                                                expectedDeliveryDate : {
                                                       date_check : styleMsgHeader
                                                                     + "Expected Delivery Date should be greater than PO Raised Date ."
                                                                     + styleMsgFooter,
                                                },
                                         },
                                         submitHandler : function(form) {
                                                form.submit();
                                         }
                                  });
});

/*$(document).ready(
              function() {
                     $.each(js.data, function(index, Object) {
                           
                           $("#productHead_0").append(
                                         "<option value=" + Object.headId + ">"
                                                       + Object.headValue + "</option>");
                     });
              });*/

function getCatbyHead(counter) {
		
       findselected(counter);
       var productHeadId = $("#productHead_" + counter).val();
       
       makeAsyncManterDataCall('ProductGroupByProductHeadForPO', 'ProductHeadId='
   			+ productHeadId, 'productGroup_' + counter);
       
       var valu=$("#productHead_" + counter + " option:selected").text();
       $('#productHeadName_' + counter).val(valu);
       
      /* $('#productGroup_' + counter).children().remove().end().append('<option selected value="">Please Select</option>') ;
       $('#productCode_' + counter).children().remove().end().append('<option selected value="">Please Select</option>') ;*/
       /*var obj = getObjects(js, 'headId', productHeadId);*/
      /* $.each(obj[0].sub, function(index, Object) {
              
              $("#productGroup_" + counter).append(
                           "<option value=" + Object.catId + ">" + Object.catValue
                                         + "</option>");
       });*/
}

	//added by Barnasree for Create Non GP PO
	function getNonGpCatbyHead(counter) {
	    findselected(counter);
	    var productHeadId = $("#productHead_" + counter).val();
	    
	    makeAsyncManterDataCall('NonGpProductGroupByProductHead', 'ProductHeadId='
				+ productHeadId, 'productGroup_' + counter);
	    
	    var valu=$("#productHead_" + counter + " option:selected").text();
	    $('#productHeadName_' + counter).val(valu);
	}


function getItemByCat(counter) {
	
	 findselected(counter);
     var productHeadId = $("#productGroup_" + counter).val();
     var partnerCode = $("#id_partnerId").val();
     makeAsyncManterDataCall('ProductCodeByProductGroupAndPartner', 'ProductGroupId='
 			+ productHeadId + '&partnerCode=' + partnerCode, 'productCode_' + counter);
     var valu=$("#productGroup_" + counter + " option:selected").text();
     $('#productGroupName_' + counter).val(valu);

      /* var productCatId = $("#productGroup_" + counter).val();
       $('#productGroupName_' + counter).val($("#productGroup_" + counter + " option:selected").text());*/
       
     /*  var obj = getObjects(js, 'catId', productCatId);
       $('#productCode_' + counter).children().remove().end().append('<option selected value="">Please Select</option>') ;
       $.each(obj[0].sub, function(index, Object) {
       
              $("#productCode_" + counter).append(
                           "<option value=" + Object.itemId + ">" + Object.itemValue
                                         + "</option>");
       });*/

}

function getProductDetailByProdCode(counter) {

       var partnerCode = document.getElementById("id_partnerCode").value;

       var productCode = $("#productCode_" + counter).val();

       var productCat = $("#productGroup_" + counter).val();
       $('#productCodeName_' + counter).val($("#productCode_" + counter + " option:selected").text());

       $.getJSON("getProductDetailByProdCode.con?partnerCode=" + partnerCode
                     + "&productCode=" + productCode + "&counter" + counter
                     + "&productCat=" + productCat, function(data) {
             /* var data = eval(data1);*/
    	 /*  alert(data.allocatedQuantity);*/
    	   if(data.allocatedQuantity == 0)
    		   {
    		   $("#allocatedQuantity_" + counter).val('');
    		   $("#remainingQuantity_" + counter).val('');
    		   }
    	   else
    		   {
    		   $("#allocatedQuantity_" + counter).val(data.allocatedQuantity);
    		   $("#remainingQuantity_" + counter).val(data.remainingQuantity);
    		   }
    	      
              $("#liftedtedQuantity_" + counter).val(data.liftedtedQuantity);
             
              $("#partnerStock_" + counter).val(data.partnerStock);
              //$("#productDescription_" + counter).val(data.productDescription);
              //		$("#total_" + counter).val(data.total);
       });

       var obj = getObjects(js, 'itemId', productCode);

       $.each(obj, function(index, Object) {
              // alert(Object.)
              $("#unitPrice_" + counter).val(Object.sub.firstPrice);

              $("#packageId_" + counter).val(Object.sub.packid);
              $("#actualUnitPrice_" + counter).val(Object.sub.firstPrice);
       });
       
       $("#primiumCatagory_" + counter).val("");
       calculateTotalPrice();

}

function addRow() {
	
		var productHead = $("#productHead_").find("option:selected").text();
		
		var productGroupName = $("#productGroup_").find("option:selected").text();
		
		var productCodeName = $("#productCode_").find("option:selected").text();
		
		var primiumCatagoryName = $("#primiumCatagory_").find("option:selected").text();
		
		var shippingAddressName = $("#shippingAddress_").find("option:selected").text();
		

       //var sizeOf = $("[id^='newTr']").size();
		var sizeOf = $("#hiddenRow").val();
		sizeOf = parseInt(sizeOf)+1;
      
       /*
		 * var newRow = "<tr id='newTr"    + sizeOf + "'>" +
		 * $("[id^='newTr']").last().html().replace(new RegExp("\\w\\[" +
		 * (sizeOf - 1), "g"), ("[" + sizeOf)) + "</tr>";
		 */
       var newRow = "<tr id='newTr"      + sizeOf + "'>"      ;
       newRow+="<td align='left'><select class='selinputsmall valid' id='productHead_" +sizeOf+ "' name='productDetails["+sizeOf+"].productHead' onchange='getCatbyHead("+sizeOf+")'></select>";
       newRow+="<input type='hidden' id='productDetailshta'"+sizeOf +">";

       newRow+= "<input type='hidden' id='productHeadName_"+ sizeOf + "' name='productDetails["+sizeOf+"].productHeadName' value='" + productHead + "'></td>";
 
       newRow+="<td align='left'><select class='selinputsmall' id='productGroup_" +sizeOf+ "' name='productDetails["+sizeOf+"].productGroup' onchange='getItemByCat("+sizeOf+")'></select>";
       newRow+="<input type='hidden' id='productDetailshta'"+sizeOf +">";
       newRow+= "<input type='hidden' id='productGroupName_"+ sizeOf + "' name='productDetails["+sizeOf+"].productGroupName' value='" + productGroupName + "'></td>";
	
       
       newRow+="<td align='left'><select class='selinputsmall' id='productCode_" +sizeOf+ "' name='productDetails["+sizeOf+"].productCode' onchange='getProductDetailByProdCode("+sizeOf+")'></select>";
       newRow+="<input type='hidden' id='productDetailshtac'"+sizeOf +">";
       newRow+= "<input type='hidden' id='productCodeName_"+ sizeOf + "' name='productDetails["+sizeOf+"].productCodeName' value='" + productCodeName + "'></td>";
       
       newRow+="<td align='left'><select class='selinputsmall' id='primiumCatagory_" +sizeOf+ "' name='productDetails["+sizeOf+"].primiumCatagory' onchange='getUnitPriceByPremiumCat("+sizeOf+")' disabled='true'></select>";
       newRow+="<input type='hidden' id='productDetailshta'"+sizeOf +">";
       newRow+= "<input type='hidden' id='primiumCatagoryName_"+ sizeOf + "' name='productDetails["+sizeOf+"].primiumCatagoryName' value='" + primiumCatagoryName + "'></td>";
       
       newRow+="<td align='left'><input type='text' name='productDetails["+sizeOf+"].allocatedQuantity' id='allocatedQuantity_"+sizeOf+"' class='txtboxPrice' readonly='true' ></td>";
       newRow+="<td align='left'><input type='text' name='productDetails["+sizeOf+"].liftedtedQuantity' id='liftedtedQuantity_"+sizeOf+"' class='txtboxPrice' readonly='true' ></td>";
       newRow+="<td align='left'><input type='text' name='productDetails["+sizeOf+"].remainingQuantity' id='remainingQuantity_"+sizeOf+"' class='txtboxPrice' readonly='true' ></td>";
       newRow+="<td align='left'><input type='text' name='productDetails["+sizeOf+"].partnerStock' id='partnerStock_"+sizeOf+"' class='txtboxPrice' readonly='true' ></td>";
       newRow+="<td align='left'><input type='text' name='productDetails["+sizeOf+"].unitPrice' id='unitPrice_"+sizeOf+"' class='txtboxForPrice unitPrice' readonly='true' ></td>";
       newRow+="<td align='left'><input type='text' name='productDetails["+sizeOf+"].requestedQuantity' id='requestedQuantity_"+sizeOf+"' class='txtboxPrice requestedQuantity' onkeyup='calculateTotalPrice("+sizeOf+")' ></td>";
       newRow+="<td align='left'><input type='text' name='productDetails["+sizeOf+"].total' id='total_"+sizeOf+"' class='txtboxForPrice total' readonly='true' ></td>";
       newRow+="<td align='left'><input type='text' name='productDetails["+sizeOf+"].remark' id='remark_"+sizeOf+"' class='txtboxPrice'></td>";
       newRow+="<td align='left'><select class='selinputsmall' id='shippingAddress_" +sizeOf+ "' name='productDetails["+sizeOf+"].shippingAddress' onchange='getShippingAddress("+sizeOf+")'></select>";
       newRow+="<input type='hidden' id='productDetailsht'"+sizeOf +">";
       newRow+= "<input type='hidden' id='shippingAddressName_"+ sizeOf + "' name='productDetails["+sizeOf+"].shippingAddressName' value='" + shippingAddressName + "'></td>";
       newRow+="<td><a class='logodelete' title='Delete' id='delRow"+sizeOf+"' onclick='delRow("+sizeOf+")'></a></td>";
       newRow+="<input type='hidden' id='packageId_"+sizeOf+"' name='productDetails["+sizeOf+"].packageId'>";
       newRow+="<input type='hidden' id='actualUnitPrice_"+sizeOf+"' name='productDetails["+sizeOf+"].actualUnitPrice'>";
       newRow+="</tr>";
                                                                                                                            
       
     
       $("[id^='newTr']").last().after(newRow);
       $("#hiddenRow").val(sizeOf);
       $("#productHead_" + sizeOf).empty();
       $("#productHead_" + sizeOf).html($("#productHead_0").html());
       
       $("#shippingAddress_" + sizeOf).empty();
       $("#shippingAddress_" + sizeOf).html($("#shippingAddress_0").html());
       
       $("#primiumCatagory_" + sizeOf).empty();
       $("#primiumCatagory_" + sizeOf).html($("#primiumCatagory_0").html());
       $("#primiumCatagory_" + sizeOf).attr('disabled', true);

       resetDrowdown($("#productGroup_" + sizeOf));
       resetDrowdown($("#productCode_" + sizeOf));

       $("#productDetails[" + sizeOf + "].allocatedQuantity").val('');
       $("#productDetails[" + sizeOf + "].liftedtedQuantity").val('');
       $("#productDetails[" + sizeOf + "].remainingQuantity").val('');
       $("#productDetails[" + sizeOf + "].partnerStock").val('');
       $("#productDetails[" + sizeOf + "].unitPrice").val('');
       $("#productDetails[" + sizeOf + "].requestedQuantity").val('');
       $("#productDetails[" + sizeOf + "].total").val('');
       $("#productDetails[" + sizeOf + "].remark").val('');
       // $("#shippingAddress_" + sizeOf + "
		// option[value='165052']").attr('selected','selected');
       $("#shippingAddress_" + sizeOf ).val($("#shippingAddress_" + (sizeOf - 1) ).val());
       
      
}

function addNonGpRow() {
	
	var productHead = $("#productHead_").find("option:selected").text();
	
	var productGroupName = $("#productGroup_").find("option:selected").text();
	
	var productCodeName = $("#productCode_").find("option:selected").text();
	
	var primiumCatagoryName = $("#primiumCatagory_").find("option:selected").text();
	
	var shippingAddressName = $("#shippingAddress_").find("option:selected").text();
	

   //var sizeOf = $("[id^='newTr']").size();
	var sizeOf = $("#hiddenRow").val();
	sizeOf = parseInt(sizeOf)+1;
  
   /*
	 * var newRow = "<tr id='newTr"    + sizeOf + "'>" +
	 * $("[id^='newTr']").last().html().replace(new RegExp("\\w\\[" +
	 * (sizeOf - 1), "g"), ("[" + sizeOf)) + "</tr>";
	 */
   var newRow = "<tr id='newTr"      + sizeOf + "'>"      ;
   newRow+="<td align='left'><select class='selinputsmall valid' id='productHead_" +sizeOf+ "' name='productDetails["+sizeOf+"].productHead' onchange='getNonGpCatbyHead("+sizeOf+")'></select>";
   newRow+="<input type='hidden' id='productDetailshta'"+sizeOf +">";

   newRow+= "<input type='hidden' id='productHeadName_"+ sizeOf + "' name='productDetails["+sizeOf+"].productHeadName' value='" + productHead + "'></td>";

   newRow+="<td align='left'><select class='selinputsmall' id='productGroup_" +sizeOf+ "' name='productDetails["+sizeOf+"].productGroup' onchange='getItemByCat("+sizeOf+")'></select>";
   newRow+="<input type='hidden' id='productDetailshta'"+sizeOf +">";
   newRow+= "<input type='hidden' id='productGroupName_"+ sizeOf + "' name='productDetails["+sizeOf+"].productGroupName' value='" + productGroupName + "'></td>";

   
   newRow+="<td align='left'><select class='selinputsmall' id='productCode_" +sizeOf+ "' name='productDetails["+sizeOf+"].productCode' onchange='getProductDetailByProdCode("+sizeOf+")'></select>";
   newRow+="<input type='hidden' id='productDetailshtac'"+sizeOf +">";
   newRow+= "<input type='hidden' id='productCodeName_"+ sizeOf + "' name='productDetails["+sizeOf+"].productCodeName' value='" + productCodeName + "'></td>";
   
   newRow+="<td align='left'><select class='selinputsmall' id='primiumCatagory_" +sizeOf+ "' name='productDetails["+sizeOf+"].primiumCatagory' onchange='getUnitPriceByPremiumCat("+sizeOf+")' disabled='true'></select>";
   newRow+="<input type='hidden' id='productDetailshta'"+sizeOf +">";
   newRow+= "<input type='hidden' id='primiumCatagoryName_"+ sizeOf + "' name='productDetails["+sizeOf+"].primiumCatagoryName' value='" + primiumCatagoryName + "'></td>";
   
   newRow+="<td align='left'><input type='text' name='productDetails["+sizeOf+"].allocatedQuantity' id='allocatedQuantity_"+sizeOf+"' class='txtboxPrice' readonly='true' ></td>";
   newRow+="<td align='left'><input type='text' name='productDetails["+sizeOf+"].liftedtedQuantity' id='liftedtedQuantity_"+sizeOf+"' class='txtboxPrice' readonly='true' ></td>";
   newRow+="<td align='left'><input type='text' name='productDetails["+sizeOf+"].remainingQuantity' id='remainingQuantity_"+sizeOf+"' class='txtboxPrice' readonly='true' ></td>";
   newRow+="<td align='left'><input type='text' name='productDetails["+sizeOf+"].partnerStock' id='partnerStock_"+sizeOf+"' class='txtboxPrice' readonly='true' ></td>";
   newRow+="<td align='left'><input type='text' name='productDetails["+sizeOf+"].unitPrice' id='unitPrice_"+sizeOf+"' class='txtboxForPrice unitPrice' readonly='true' ></td>";
   newRow+="<td align='left'><input type='text' name='productDetails["+sizeOf+"].requestedQuantity' id='requestedQuantity_"+sizeOf+"' class='txtboxPrice requestedQuantity' onkeyup='calculateTotalPrice("+sizeOf+")' ></td>";
   newRow+="<td align='left'><input type='text' name='productDetails["+sizeOf+"].total' id='total_"+sizeOf+"' class='txtboxForPrice total' readonly='true' ></td>";
   newRow+="<td align='left'><input type='text' name='productDetails["+sizeOf+"].remark' id='remark_"+sizeOf+"' class='txtboxPrice'></td>";
   newRow+="<td align='left'><select class='selinputsmall' id='shippingAddress_" +sizeOf+ "' name='productDetails["+sizeOf+"].shippingAddress' onchange='getShippingAddress("+sizeOf+")'></select>";
   newRow+="<input type='hidden' id='productDetailsht'"+sizeOf +">";
   newRow+= "<input type='hidden' id='shippingAddressName_"+ sizeOf + "' name='productDetails["+sizeOf+"].shippingAddressName' value='" + shippingAddressName + "'></td>";
   newRow+="<td><a class='logodelete' title='Delete' id='delRow"+sizeOf+"' onclick='delRow("+sizeOf+")'></a></td>";
   newRow+="<input type='hidden' id='packageId_"+sizeOf+"' name='productDetails["+sizeOf+"].packageId'>";
   newRow+="<input type='hidden' id='actualUnitPrice_"+sizeOf+"' name='productDetails["+sizeOf+"].actualUnitPrice'>";
   newRow+="</tr>";
                                                                                                                        
   
 
   $("[id^='newTr']").last().after(newRow);
   $("#hiddenRow").val(sizeOf);
   $("#productHead_" + sizeOf).empty();
   $("#productHead_" + sizeOf).html($("#productHead_0").html());
   
   $("#shippingAddress_" + sizeOf).empty();
   $("#shippingAddress_" + sizeOf).html($("#shippingAddress_0").html());
   
   $("#primiumCatagory_" + sizeOf).empty();
   $("#primiumCatagory_" + sizeOf).html($("#primiumCatagory_0").html());
   $("#primiumCatagory_" + sizeOf).attr('disabled', true);

   resetDrowdown($("#productGroup_" + sizeOf));
   resetDrowdown($("#productCode_" + sizeOf));

   $("#productDetails[" + sizeOf + "].allocatedQuantity").val('');
   $("#productDetails[" + sizeOf + "].liftedtedQuantity").val('');
   $("#productDetails[" + sizeOf + "].remainingQuantity").val('');
   $("#productDetails[" + sizeOf + "].partnerStock").val('');
   $("#productDetails[" + sizeOf + "].unitPrice").val('');
   $("#productDetails[" + sizeOf + "].requestedQuantity").val('');
   $("#productDetails[" + sizeOf + "].total").val('');
   $("#productDetails[" + sizeOf + "].remark").val('');
   // $("#shippingAddress_" + sizeOf + "
	// option[value='165052']").attr('selected','selected');
   $("#shippingAddress_" + sizeOf ).val($("#shippingAddress_" + (sizeOf - 1) ).val());
   
  
}

function validate_itemCategory()
{
	var sizeOf = $("[id^='newTr']").size();
    
    
	 var errormsg = "";
	 var haserror = false;
     for(var lop = 0 ; lop <= sizeOf ; lop++)
     {
		    	 var error = false;
		if ($("#productCode_" + lop).val() != null
				&& $("#productCode_" + lop).val() != ""
				&&  typeof $("#productCode_" + lop).val() != 'undefined') {
			var remainQuanity = document.getElementById("remainingQuantity_"
					+ lop).value;

			var productGroupTOCheck = $("#productGroup_" + lop).val();
			var productGroupName = $("#productGroup_" + lop).find(
					"option:selected").text();
			var totalProductGroupOrdered = 0;
			for ( var j = 0; j <= sizeOf; j++) {

				if ($("#productCode_" + j).val() != null
						&& $("#productCode_" + j).val() != ""
						&& $("#productCode_" + j).val() != 'undefined') {

					var productGroupLookingFor = $("#productGroup_" + j).val();
					if (productGroupLookingFor == productGroupTOCheck) {

						var requestedQuanity = document
								.getElementById("requestedQuantity_" + j).value;
						totalProductGroupOrdered = parseInt(totalProductGroupOrdered)
								+ parseInt(requestedQuanity);
						if (parseInt(totalProductGroupOrdered) > parseInt(remainQuanity)) {
							error = true;
							break;
						}
					}
				}
			}

		}
    	if(error)
    		 {
    		 	errormsg = "Order consists more than remaining quantity for Product Group : " + productGroupName;
    		 	haserror = true;
    		 	break;
    		 }
     }
     
     if(haserror)
    	 {
	    	  alert(errormsg);
	    	  return false;
    	 }
     else
    	 {
    	 	  return true;
    	 }
     


}

