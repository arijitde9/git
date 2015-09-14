<!DOCTYPE html>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<title>DMS</title>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=EDGE" />
<link href="resource/css/custom-theme/jquery-ui-1.10.3.custom.css"
	rel="stylesheet">
<link href="resource/css/default.css" rel="stylesheet">
<link href="resource/css/jqgrid.css" rel="stylesheet">
<link href="resource/css/ui.multiselect.css" rel="stylesheet">
<link href="resource/css/jquery-customselect-1.8.1.css" rel="stylesheet">
<link href="resource/css/submenu.css" rel="stylesheet">

<script src="resource/js/jquery-1.9.1.js"></script>
<script src="resource/js/jquery.cookie.js"></script>
<script src="resource/js/jquery-ui-1.10.3.custom.js"></script>
<script src="resource/js/jquery.jqGrid.js"></script>
<script src="resource/js/grid.locale-en.js"></script>
<script src="resource/js/ui.multiselect.js"></script>
<script src="resource/js/jquery.tablednd.js"></script>
<script src="resource/js/custom.js"></script>
<script src="resource/js/validation.js"></script>
<script src="resource/js/jquery.validate.min.js"></script>
<script src="resource/js/menu_jquery.js"></script>
<script src="resource/js/ajax.js"></script>


<script type="text/javascript">
	$.jgrid.no_legacy_api = true;
	$.jgrid.useJSON = true;
</script>
<link type="text/css" href="resource/menu/menu.css" rel="stylesheet" />
<noscript>
	<style type="text/css">
.bodydiv {
	display: none;
}
</style>
	<div class="noscriptmsg">You don't have javascript enabled.
		Please Enable javascript.</div>
</noscript>
<script>
	$(function() {

		//$("#tabs").tabs();
		$("#accordion").accordion();
		$("#accordion").accordion({autoHeight: false});
		$("#create").click(function(){
			$('#accordion .ui-accordion-content').show();
		});
		$("#save").click(function(){
			$('#accordion .ui-accordion-content').show();
		});
		 

	});
	$(function() {
		$("input[type=submit]").button();
	});
	$(function() {
		$("input[type=reset]").button();
	});
	$(function() {
		$("input[type=button]").button();
	});
</script>
<script>
	$(function() {
		$("#dialog").dialog({
			autoOpen : false,
			width : 500,
			buttons : [ {
				text : "Ok",
				click : function() {
					$(this).dialog("close");
				}
			}, {
				text : "Cancel",
				click : function() {
					$(this).dialog("close");
				}
			} ]
		});
	});

	// Link to open the dialog
	$(function() {
		$("#dialog-link").click(function(event) {
			$("#dialog").dialog("open");
			event.preventDefault();
		});
	});
	
</script>
<script>
	$(function() {
		$("#effectiveDate").datepicker();
		$("#effectiveDate").addClass("datepicker");
	});

	$(function() {
		//$("#expiaryDate").datepicker();
		$("#expiaryDate").datepicker({
	        yearRange: "-10:+100",
	        changeMonth: true,
	        changeYear: true,
    	});
		$("#expiaryDate").addClass("datepicker");
	});
	$(function() {
		//$("#expiryDate").datepicker();
		$("#expiryDate").datepicker({
	        yearRange: "-10:+100",
	        changeMonth: true,
	        changeYear: true,
    	});
		$("#expiryDate").addClass("datepicker");
	});
	
	$(function() {
		
		$(".datepicker").dblclick(function(event) {
			if(this.id=='effectiveDate')
				getCurDatePlusN('0',this);
			else
				getCurDatePlusN('1',this);
			event.preventDefault();
		});
	});
	
	var flgm=true;
	function resizeBody()
	{
		if(flgm){
			$("#submenum").hide("slide", { direction: "left" }, 1000, function(){
				//$("#bodym").hide();
				$("#bodym").removeClass("bodydiv");
				$("#bodym").addClass("bodydivfull");
				//$("#accordion").addClass("divaccorfull");
				$("#accordion").css("width", "+=200");
				//$(".ui-jqgrid").css("width", "+=200");
				//$("#bodym").show("slide", { direction: "right" }, 1000);	
				//$("#bodym").show();
				var DataGrid = jQuery('#theGrid');
				 DataGrid.jqGrid('setGridWidth', $('#theGrid').width()+200);
				 
			});
			
			flgm=false;
		}
		else
		{
			$("#submenum").show("slide", { direction: "left" }, 1000);
			$("#bodym").removeClass("bodydivfull");
			$("#bodym").addClass("bodydiv");
			$("#accordion").css("width", "-=200");
			var DataGrid = jQuery('#theGrid');
			 DataGrid.jqGrid('setGridWidth', $('#theGrid').width()-200);
			flgm=true;
		}
		
		
	}
	
	var access = "${ACCESS}";
	
	$(document).ready(function() {
		checkAccessContor();
	});
	
	function checkAccessContor(){
		var attr = access.split(";");
		for (var i = 0; i < attr.length-1; i++) {
			try{
				
			    var acc = attr[i].split(":");
			    
			    
			    if(acc[1] == 'false'){
			    	$("#" + acc[0]).attr("disabled", "disabled");
			    	 $("#" + acc[0]).click(function(e){
			    	        if($("#" + acc[0]).attr("disabled")=="disabled")
			    	        {
			    	            e.preventDefault();    
			    	        }        
			    	    });  		
			    }
			    
			    if(acc[2] == 'false'){
			    	var x_inputType = $("#" + acc[0]).prop("type").toLowerCase();
			    	
			    	if((x_inputType=='button')||(x_inputType=='reset')){
			    		
			    		$("#" + acc[0]).hide();
			    	}else{
			    		$("#" + acc[0]).parent().parent().hide();
			    	}
			}
			    	
			}  catch(err) {
				console.log ( err.message + ' for ' +  "#" + acc[0]);
			}
		}
	}
	
	$(document).ready(function() {

		$("#reset").click(function() {
			$(".ui-alert-error").hide();
			try {
	           $("input[type=text]").not("[readonly]").val("");
	            //alert(t.length);
				/*$("input[type=text]").each(function() {
				    if (!this.readOnly){
				    	
				    	alert(this.id);
				    }
				    
				});*/
	        }
	        catch(error){
	            alert("error :" + error);
	        }
			
			

		});

	});
	
</script>

<script>
var matched, browser;

//Use of jQuery.browser is frowned upon.
//More details: http://api.jquery.com/jQuery.browser
//jQuery.uaMatch maintained for back-compat
jQuery.uaMatch = function( ua ) {
 ua = ua.toLowerCase();

 var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
     /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
     /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
     /(msie) ([\w.]+)/.exec( ua ) ||
     ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
     [];

 return {
     browser: match[ 1 ] || "",
     version: match[ 2 ] || "0"
 };
};

matched = jQuery.uaMatch( navigator.userAgent );
browser = {};

if ( matched.browser ) {
 browser[ matched.browser ] = true;
 browser.version = matched.version;
}

//Chrome is Webkit, but Webkit is also Safari.
if ( browser.chrome ) {
 browser.webkit = true;
} else if ( browser.webkit ) {
 browser.safari = true;
}

jQuery.browser = browser;
</script>
<script>
$(document).ajaxStart(function(){
	  //alert('HI');	
	  $('#bodym').hide();
	  $('#loadbodym').show();
});


$(document).ajaxStop(function(){
	$('#bodym').show();
	$('#loadbodym').hide();
});

$(document).ready(function(){
	$('#bodym').show();
	//Added by Arijit 01-17-2015
	$('#submenum').show();
	$('.notobottomborder').show();
	$('#loadbodym').hide();
});

var loaderflag=true;
$(document).ready(function(){
    $(window).on('beforeunload',function(e){
       if(loaderflag){    
	        $('#bodym').hide();
	        //Added by Arijit 01-17-2015
	        $('#submenum').hide();
	        $('.notobottomborder').hide();
	       	$('#loadbodym').show();
       }
       $.removeCookie($('#bodym form').attr('id'));
    });
});

$(document).ready(function(){
	
	//alert($('#bodym form').attr('id'));
	var cname=$('#bodym form').attr('id');
	if (document.cookie.indexOf(cname) < 0){
		//alert('cookie not exist');
		$.cookie(cname, "GP_DMS");
	}else
	{
		//alert('cookie exist');
		$('.bodydivbg').hide();
	}
	
	

});

function reloadPage(){ 
	
	$('#accordion').find('input:text, input:password, input:file, select, textarea')
    .each(function() {
    	//alert(this.tagName);
    	var ids=this.id;
    	if(this.tagName=='SELECT'){
    	$('#'+ids+' option').prop('selected', function() {
    	        return this.defaultSelected;
    	    });    
    	}else{
		var val=this.defaultValue;
		//alert(val);
	    
	    if(val=="12/31/9999"){
		    val="12/31/2114";
	    	}
	    $('#'+this.id).val(val);
    	}
    });
	
}

//...........Right Click disable code................
/* $(document).bind("contextmenu",function(e) {
	alert('Development Mode is disabled');
    e.preventDefault();
}); */

//..........F12 disable code..........................
/* document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
    	alert('Development Mode is disabled');
        return false;
    }
}
document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
    	alert('Development Mode is disabled');
        return false;
    }
}
document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
    	alert('Development Mode is disabled');
        return false;
    }
} */
//...................End..............................
</script>

<script>
       var pageName = (function() {
              var a = window.location.href, b = a.lastIndexOf("/");
              return a.substr(b + 1);
       }());
 
       history.pushState(null, null, pageName);
       window.addEventListener('popstate', function(event) {
              history.pushState(null, null, pageName);
       });
</script>

</head>
<body>
	<table width="100%">
		<!--<tr><td class="blackline"></td></tr>
	-->
		<tr>
			<td>
				<table align="center" cellpadding="0" cellspacing="0"
					id="layouttable" class="layouttable">
					<tr>
						<td class="nobottomborder" style="height: 75px"><tiles:insertAttribute
								name="header" /></td>
					</tr>
					<tr>
						<td class="notobottomborder" style="background: #fff;"><tiles:insertAttribute
								name="menu" /></td>

					</tr>
					<tr>
						<td class="notobottomborder" style="background: #fff;"
							valign="middle"><tiles:insertAttribute name="navigation" /></td>
					</tr>
					<tr>


						<td class="bodydivbg">
							<div class="submenudiv" id="submenum">
								<tiles:insertAttribute name="submenu" />
							</div>
							<div class="bodydiv" id="loadbodym" style='display: none'>
								<a class='logoloading'></a>
								<div class='logoloadingtext'>Loading. Please Wait...</div>
							</div>
							<div class="bodydiv" id="bodym">
								<tiles:insertAttribute name="body" />
							</div>
						</td>
					</tr>
					<tr>
						<td style="background: #fff; height: 10px;" valign="middle"
							class="allborder"><tiles:insertAttribute name="footer" /></td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>
