 $( document ).ready(function() {
	 var c=0;
	 $('input[id^="chk"]').each(function(){
		 $(this).click(function(){
			 if($(this).is(':checked')){
				 $('input[id*="_' + $(this).attr('id').split('_')[1]+'"]').prop('checked', true); 
				 $('input[id*=".functionChecked_MAINMENU_HOME'+'"]').prop('checked', true);
			 }
			 else{
				 $('input[id*="_' + $(this).attr('id').split('_')[1]+'"]').prop('checked', false); 
			 }
		 });
	 });
	 $('input[id*=".functionChecked"]').each(function(){
	 			$(this).click(function(){
	 				 if($(this).is(':checked')){
	 					$('input[id*="' + $(this).attr('id').split('_')[1]+'_'+$(this).attr('id').split('_')[2]+'"]').prop('checked', true);
	 					$('input[id*="' + $(this).attr('id').split('_')[1]+'_MAINMENU'+'"]').prop('checked', true);
	 					$('input[id*="_' + $(this).attr('id').split('_')[3].trim()+'_MAINMENU'+'"]').prop('checked', true);
	 					console.log('we r good'+'.functionChecked_MAINMENU_' + $(this).attr('id'));
	 					//console.log($(this).attr('id'));
	 					$('input[id*=".functionChecked_MAINMENU_' + $(this).attr('id').split('_')[1]+'"]').prop('checked', true);
	 					$('input[id*=".functionChecked_MAINMENU_HOME'+'"]').prop('checked', true);
	 					$('input[id*="chk_' + $(this).attr('id').split('_')[1]+'"]').prop('checked', true);
	 					$('input[id*="_MAINMENU_'+$(this).attr('id').split('_')[1]+'_'+$(this).attr('id').split('_')[1]+'_'+$(this).attr('id').split('_')[2]+'_MAINMENU"]').prop('checked', true);
	 				 }
	 				 else{
	 					$('input[id*="' + $(this).attr('id').split('_')[1]+'_'+$(this).attr('id').split('_')[2]+'_'+$(this).attr('id').split('_')[3]+'"]').prop('checked', false);
	 					$('input[id*="' + $(this).attr('id').split('_')[3]+'_MAINMENU'+'"]').prop('checked', false);
	 					//console.log('-----Tes3--------'+$('input[id*="'+ $(this).attr('id').split('_')[3]+'"]:checkbox:checked').length);
	 					//This is for Items under Menu in Main Menu (Not Home)
	 					if($('input[id*="'+ $(this).attr('id').split('_')[3]+'"]:checkbox:checked').length==0)
	 						$('input[id*="_' + $(this).attr('id').split('_')[3].trim()+'_MAINMENU'+'"]').prop('checked', false);
	 					if($('input[id*="'+ $(this).attr('id').split('_')[1]+'"]:checkbox:checked').length<=4){
	 						$('input[id*="chk_' + $(this).attr('id').split('_')[1]+'"]').prop('checked', false);
	 						$('input[id*="' + $(this).attr('id').split('_')[1]+'_MAINMENU'+'"]').prop('checked', false);
	 					}
	 					if($('input[id*="_'+ 'Home Page'+'_"]:checkbox:checked').length<=1){
	 						$('input[id*="_'+ 'Home Page'+'_"]').prop('checked', false);
	 					}
	 					if($('input[id*="_MAINMENU_'+ $(this).attr('id').split('_')[1]+'_"]:checkbox:checked').length<=1){
	 						//$('input[id*="_'+ $(this).attr('id').split('_')[1]+'_"]').prop('checked', false);
	 					}
	 				 }
	 			});
	 		});
	 $('input[id^="functionList"]').each(function(){
		 if($(this).attr('id').split('.').length==3){
			 if($(this).prop('checked')){
				 $('input[id*="chk_' + $(this).attr('id').split('_')[1]+'"]').prop('checked', true);
				 $('input[id*=".functionChecked_MAINMENU_' + $(this).attr('id').split('_')[1]+'"]').prop('checked', true);
 				 $('input[id*="' + $(this).attr('id').split('_')[3]+'_MAINMENU'+'"]').prop('checked', true);
 				 $('input[id*=".functionChecked_' + $(this).attr('id').split('_')[1]+'_'+$(this).attr('id').split('_')[2]+'"]').prop('checked', true);
 				 $('input[id*=".functionChecked_MAINMENU_HOME'+'"]').prop('checked', true);
 				 $('input[id*="'+$(this).attr('id').split('_')[1]+'_MAINMENU'+'"]').prop('checked', true);
 				 $('input[id*="_MAINMENU_'+$(this).attr('id').split('_')[1]+'_'+$(this).attr('id').split('_')[1]+'_'+$(this).attr('id').split('_')[2]+'_MAINMENU"]').prop('checked', true);
			 }
			$(this).click(function(){
				 if($(this).prop('checked')){
					 console.log($(this).attr('id').split('_')[3].trim()+'_MAINMENU'+'=====');
						 $('input[id*="chk_' + $(this).attr('id').split('_')[1]+'"]').prop('checked', true);
						 $('input[id*=".functionChecked_MAINMENU_' + $(this).attr('id').split('_')[1]+'"]').prop('checked', true);
		 				 $('input[id*="_' + $(this).attr('id').split('_')[3].trim()+'_MAINMENU'+'"]').prop('checked', true);
		 				 //console.log('_'+$(this).attr('id').split('_')[3].trim()+'_MAINMENU'+'----');
		 				 $('input[id*=".functionChecked_' + $(this).attr('id').split('_')[1]+'_'+$(this).attr('id').split('_')[2]+'"]').prop('checked', true);
		 				 $('input[id*=".functionChecked_MAINMENU_HOME'+'"]').prop('checked', true);
		 				 $('input[id*="_'+$(this).attr('id').split('_')[1]+'_MAINMENU'+'"]').prop('checked', true);
		 				 $('input[id*="'+$(this).attr('id').split('_')[1]+'_'+$(this).attr('id').split('_')[2]+'_MAINMENU"]').prop('checked', true);
		 				 //console.log(''+$(this).attr('id').split('_')[1]+'_MAINMENU');
		 				 //console.log(''+$(this).attr('id'));
		 				//console.log('herrl'+$('input[id*="_'+ $(this).attr('id').split('_')[3]+'_"]:checkbox:checked').length);
				 }
				 else{
					 
					 if($('input[id*="_' +$(this).attr('id').split('_')[1]+'_'+ $(this).attr('id').split('_')[2]+'_"]:checkbox:checked').length<2){
						 $('input[id*="_' +$(this).attr('id').split('_')[1].trim()+'_'+ $(this).attr('id').split('_')[2].trim()+'_"]').prop('checked', false);
						 $('input[id*="_' +$(this).attr('id').split('_')[1].trim()+'_'+ $(this).attr('id').split('_')[3].trim()+'_"]').prop('checked', false);
					 }
					 $('input[id*="' + $(this).attr('id')+'"]').prop('checked', false);
					//Hard Code to Handle Common Visible - No issue with this
					 if($(this).attr('id').split('_')[4].trim()=='Common Visible')
						 $('input[id*="_'+$(this).attr('id').split('_')[2]+'_'+$(this).attr('id').split('_')[3]+'_'+$(this).attr('id').split('_')[4]+'_"]').prop('checked', false);
						
					 $('input[id*="_'+'_' +$(this).attr('id').split('_')[1]+'_'+ $(this).attr('id').split('_')[2]+'_"]').prop('checked', false);
					
					 
					 if($('input[id*="_'+ $(this).attr('id').split('_')[3]+'_"]:checkbox:checked').length==0 ||
					   $('input[id*="_'+ $(this).attr('id').split('_')[3]+'_"]:checkbox:checked').length==4){
						 //console.log('Total  Length---'+$('input[id*="_'+ $(this).attr('id').split('_')[3].trim()+'_"]:checkbox:checked').length);
						$('input[id*="_'+ $(this).attr('id').split('_')[3].trim()+'_MAINMENU'+'"]').prop('checked', false);
						//$('input[id*="_'+ $(this).attr('id').split('_')[3]+'_'+'"]').prop('checked', false);
						$('input[id*="_'+ $(this).attr('id').split('_')[1].trim()+'_MAINMENU'+'"]').prop('checked', false);
					}
					var subMenuCount=$('input[id*="'+ $(this).attr('id').split('_')[1]+'"]:checkbox:checked').length;
					console.log('-AC--' +subMenuCount);
					switch(subMenuCount) {
				    case 6: if($(this).attr('id').split('_')[1].trim()=='ROUTE')
				    			$('input[id*="chk_' + $(this).attr('id').split('_')[1]+'"]').prop('checked', false);
				    		break;
				    case 0:if($(this).attr('id').split('_')[1].trim()=='SAF' || $(this).attr('id').split('_')[1].trim()=='PARTNER')
		    				$('input[id*="chk_' + $(this).attr('id').split('_')[1]+'"]').prop('checked', false);
		    			   break;
				    case 1:if($(this).attr('id').split('_')[1].trim()=='SAF' || $(this).attr('id').split('_')[1].trim()=='PARTNER' || $(this).attr('id').split('_')[1].trim()=='CONFIGURATION')
	    					$('input[id*="chk_' + $(this).attr('id').split('_')[1]+'"]').prop('checked', false);
	    			   		break;
				    case 3:if($(this).attr('id').split('_')[1].trim()=='MISCELLANEOUS'  || $(this).attr('id').split('_')[1].trim()=='UAM')
	    					$('input[id*="chk_' + $(this).attr('id').split('_')[1]+'"]').prop('checked', false);
	    			   		break;
				    case 7:if($(this).attr('id').split('_')[1].trim()=='SCM')
	    					$('input[id*="chk_' + $(this).attr('id').split('_')[1]+'"]').prop('checked', false);
	    			   		break;
				    default: break;
				    
				}
					if($('input[id*="_'+ $(this).attr('id').split('_')[2]+'"]:checkbox:checked').length<2)
						 $('input[id*=".functionChecked_' + $(this).attr('id').split('_')[1]+'_'+$(this).attr('id').split('_')[2]+'"]').prop('checked', false);
					
					 if($('input[id*="_'+ $(this).attr('id').split('_')[1]+'_"]:checkbox:checked').length<3 ){
						 console.log('--------------------'+$('input[id*="_'+ $(this).attr('id').split('_')[3]+'_"]:checkbox:checked').length+'-----'+$(this).attr('id'));
						 $('input[id*="' + $(this).attr('id').split('_')[3]+'_MAINMENU'+'"]').prop('checked', false);
						 $('input[id*=".functionChecked_'+$(this).attr('id').split('_')[1]+'_' + $(this).attr('id').split('_')[2]+'"]').prop('checked', false);
						 $('input[id*=".functionChecked_MAINMENU_' + $(this).attr('id').split('_')[1]+'"]').prop('checked', false);
						 $('input[id*="_MAINMENU_HOME PAGE_Home Page_' + $(this).attr('id').split('_')[1]+'"]').prop('checked', false);
						 $('input[id*="' + $(this).attr('id').split('_')[3]+'_MAINMENU'+'"]').prop('checked', false);
						 $('input[id*="'+$(this).attr('id').split('_')[1]+'_MAINMENU"]').prop('checked', false);
						 
						 if($('input[id*="'+ $(this).attr('id').split('_')[1]+'"]:checkbox:checked').length>0
								 && ! $('input[id*=".functionChecked_' + $(this).attr('id').split('_')[1]+'"]'). prop('checked')){
							 
						 }
						 $('input[id*=".functionChecked_MAINMENU_HOME'+'"]').prop('checked', false);
					 }
					 //console.log('_'+$(this).attr('id').split('_')[3].trim()+'_MAINMENU');
					 //$('input[id*="_'+$(this).attr('id').split('_')[3].trim()+'_MAINMENU"]').prop('checked', false);
				 }
			});
		 }
		});
	 
	 $('.panel-heading').each(function(){
			var tempId='nc'+c;
			//console.log($(this).attr('id').split('_')[0]=='fun'+'----'+$(this).attr('id').split('_')[0]);
			if(tempId!='nc0' && $(this).attr('id')!='fun'){
				//if(!$(this).attr('id').match(/fun[0-9]/g)){
				 $(this).next('div').slideUp();
				 $(this).children("span").addClass('panel-collapsed');
				 $(this).children("span").find('i').removeClass('glyphicon-arrow-down').addClass('glyphicon-arrow-up');
				//}
			}
			c++;
		
			});
	        $('.panel-heading span.clickable').on("click", function (e) {
			//alert($(this).parents('.panel-heading').next('div').attr('class'));
	            if ($(this).hasClass('panel-collapsed')) {
	                // expand the panel
					 $(this).parents('.panel-heading').next('div').slideDown();
	                
	                $(this).removeClass('panel-collapsed');
					
	                $(this).find('i').removeClass('glyphicon-arrow-up').addClass('glyphicon-arrow-down');
	            }
	            else {
	                
					$(this).parents('.panel-heading').next('div').slideUp();
	                $(this).addClass('panel-collapsed');
					
					$(this).find('i').removeClass('glyphicon-arrow-down').addClass('glyphicon-arrow-up');
	            }
	        });
	    });
 
 	$(function() {
 		$("#tabs").tabs();
 		$("input[type=submit], button").button();
 	});

 	
 	function toggleDiv(togleDivId,event) {
 		var index = togleDivId.substring(9, togleDivId.length);
 		event.preventDefault();
 		$('#functAttrRow' + index).toggle();	
 	}
 	
 	function toggleAllDiv(event) {
 		$("[id*=functAttrRow]").each(function() {
 			$('#'+this.id).toggle();
 		});
 		event.preventDefault();	
 	}
 	
 	$(function() {
 		$('[id^="functAttrRow"]').each(function() {
 			$('tr[id^="functAttrRow"]').hide();
 		});

 	});
 	$('#saveEdited').click(
 			function() {
 			
 				checkIsFunctionSelect();
 				
 				$('#roleCreateEditForm').attr('action',
 						'<c:url value="/editUserRole.con"/>');
 				$('#roleCreateEditForm').submit();
 			});


 	$(document).ready(
 			function() {
 				/*if ("${createData.roleId}".length > 0) {
 					$("#create").css("display", "none");
 					$("#reset").css("display", "none");
 					$("#saveEdited").css("display", "block");
 					
 					//$('#accordion').find('input,textarea, select').attr('disabled','disabled');
 				    //$('.txtbox2').attr('disabled','disabled');
 				    $('.selinput').attr('disabled','disabled');
 				    $('.txtarea').attr('disabled','disabled');

 					$('#roleId').attr('readonly',true);
 				} else {
 					//$("#create").css("display", "block");					
 					$("#delete").css("display", "none");
 					$("#editable2").css("display", "none");
 				}

*/ 				/*$('#create').click(					
  						function() {
  							checkIsFunctionSelect();
  							$('#roleCreateEditForm').attr('action',
 									'<c:url value="/createuserrole.con"/>');
  							$('#roleCreateEditForm').submit();
  						});

 				$('#saveEdited').click(
 						function() {
 						
 							checkIsFunctionSelect();
 							
 							$('#roleCreateEditForm').attr('action',
 									'<c:url value="/editUserRole.con"/>');
 							$('#roleCreateEditForm').submit();
 						});

 				$('#delete').click(function(){
 					$('#dialog_box').dialog({
 					  title: 'Really delete this role?',
 					  width: 500,
 					  height: 200,
 					  modal: true,
 					  resizable: false,
 					  draggable: false,
 					  buttons: [{
 					  text: 'Yes, delete it!',
 					  click: function(){
 					      //delete it
 						  $('#roleCreateEditForm').attr('action',
 							'<c:url value="/deleteUserRole.con"/>');
 					     $('#roleCreateEditForm').submit();
 					    }
 					  },
 					  {
 					  text: 'No!',
 					  click: function() {
 					      $(this).dialog('close');
 					    }
 					  }]
 					});
 					});
 				
*/ 				/*
 				$('#delete').click(
 						function() {
 							var retVal = confirm("Are you confirmed to delete this role?");
 							if (retVal == true) {
 							$('#roleCreateEditForm').attr('action',
 									'<c:url value="/deleteUserRole.con"/>');
 							$('#roleCreateEditForm').submit();
 							} else {
 								return false;
 							}
 						});
 				*/

 				/*$('#editable2').click(function() {
 					$('#accordion').find('input, textarea, select').removeAttr("disabled");
 					
 					$("#editable2").css("display", "none");
 					$("#saveEdited").css("display", "block");
 					$("#delete").css("display", "block");
 				});*/
 				
 				
 			});

 	
 	function checkIsFunctionSelect(){
 		var flag1 = false;
 		
 		 $("[id$='].functionChecked']").each(function() {
 			 if(document.getElementById(this.id).checked==true){
 					flag1 = true;		
 					
 					document
 					.getElementById("errdivoldAtlestOneFunctionRequired").style.display = "none";
 			 }
 	 		});

 		if (flag1 == false) {
 			document
 				.getElementById("errdivoldAtlestOneFunctionRequired").style.display = "block";
 			
 			return false;
 		}
 	}
 	
  /*function checkUncheckAttr(index,elementId){
 	 var eleId="functionList["+index+"].attributeBeanList";
 	 var eleId2="functionList["+index+"].functionChecked";
 	 var visibleEleId="functionList["+index+"].visible";
 	 var editableEleId="functionList["+index+"].editable2";
 	//alert(index);alert(eleId);
 	 if(document.getElementById(eleId2).checked==true){
 		 $('input[id^="' + eleId +'"]').prop('checked', true);
 		 $('input[id^="' + visibleEleId +'"]').prop('checked', true);
 		 $('input[id^="' + editableEleId +'"]').prop('checked', true);
 	 }else 	 if(document.getElementById(eleId2).checked==false){
 			 $('input[id^="' + eleId +'"]').prop('checked', false);	
 			 $('input[id^="' + visibleEleId +'"]').prop('checked', false);
 			 $('input[id^="' + editableEleId +'"]').prop('checked', false);	
 		}
 	
  }
  
*/  function clickOnCheckAll(index1,index2,elementId){
 	 var eleId="functionList["+index1+"].visible["+index2+"].visible";
 	 var eleId2="functionList["+index1+"].editable2["+index2+"].editible";
 	 
 	 var funId="functionList["+index1+"].functionChecked";

 	 if(document.getElementById(elementId.id).checked==true){
 		 $('input[id^="' + eleId +'"]').prop('checked', true);	 
 		 $('input[id^="' + eleId2 +'"]').prop('checked', true);			 
 	 }else 	 if(document.getElementById(elementId.id).checked==false){
 			 $('input[id^="' + eleId +'"]').prop('checked', false);	
 			 $('input[id^="' + eleId2 +'"]').prop('checked', false);			 
 		}
 	 
 	
 	
 	 var partId=elementId.id.substring(0,elementId.id.length-15);
      var notAttrChecked=false;
  	 $('input[id^="' + partId +'"]').each(function() {
  		 if((this).checked==true){
  			notAttrChecked=true;
  	       }
 		});
 	 
  	 if(notAttrChecked==true){
  		 $('input[id^="' + funId +'"]').prop('checked', true);	  
  	 }else{
  		 $('input[id^="' + funId +'"]').prop('checked', false);	 
  	 }
 	
  }
  

  
/*  function clickOnEditableVisible(index1,index2){
 	 var eleId="functionList["+index1+"].visible["+index2+"].visible";
 	 var eleId2="functionList["+index1+"].editable2["+index2+"].editible";
 	 var eleId3="functionList["+index1+"].attributeBeanList["+index2+"].attrChecked";

 	 if(document.getElementById(eleId).checked==false && document.getElementById(eleId2).checked==false){
 		 $('input[id^="' + eleId3 +'"]').prop('checked', false);
 	 }
 	
 	 if(document.getElementById(eleId).checked==true || document.getElementById(eleId2).checked==true ){
 		 $('input[id^="' + eleId3 +'"]').prop('checked', true);
 	 }
  }
*/
  
     function clearForm(form) {
 		// iterate over all of the inputs for the form
 		// element that was passed
 		$(':input', form).each(function() {
 			var type = this.type;
 			var tag = this.tagName.toLowerCase();
 			if (type == 'text' || type == 'password' || tag == 'textarea')
 				this.value = "";
 			else if (type == 'checkbox' || type == 'radio')
 				this.checked = false;
 			else if (tag == 'select')
 				this.selectedIndex = -1;
 		});
 	};
         var specialKeys = new Array();
         specialKeys.push(8); //Backspace
         specialKeys.push(9); //Tab
         specialKeys.push(46); //Delete
         specialKeys.push(36); //Home
         specialKeys.push(35); //End
         specialKeys.push(37); //Left
         specialKeys.push(39); //Right
         function removeSpecialCharFrmRoleName(e) {
             var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
             if(keyCode!=95 &&  keyCode!=32){
             var ret = (keyCode==44 || keyCode==46  || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));           
             document.getElementById("errdivrolename").style.display = ret ? "none" : "inline";
             return ret;
             }else{
             	return true;
             }
         }
         function removeSpecialCharFrmRoleDesc(e) {
             var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
             if(keyCode!=95 &&  keyCode!=32){
             var ret = (keyCode==44 || keyCode==46  || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
             document.getElementById("errdivroledesc").style.display = ret ? "none" : "inline";
             return ret;
             }else{
             	return true;
             }
         }

