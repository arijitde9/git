<!DOCTYPE html>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<title>DMS</title>
<head>
<meta http-equiv="X-UA-Compatible" />
<link href="resource/css/custom-theme/jquery-ui-1.10.3.custom.css"
	rel="stylesheet">
<link href="resource/css/default.css" rel="stylesheet">
<link href="resource/css/jqgrid.css" rel="stylesheet">
<link href="resource/css/ui.multiselect.css" rel="stylesheet">
<link href="resource/css/jquery-customselect-1.8.1.css" rel="stylesheet">
<link href="resource/css/submenu.css" rel="stylesheet">

<script src="resource/js/jquery-1.9.1.js"></script>
<script src="resource/js/jquery-ui-1.10.3.custom.js"></script>
<script src="resource/js/jquery.jqGrid.js"></script>
<script src="resource/js/grid.locale-en.js"></script>
<script src="resource/js/ui.multiselect.js"></script>
<script src="resource/js/jquery.tablednd.js"></script>
<script src="resource/js/custom.js"></script>
<script src="resource/js/validation.js"></script>
<script src="resource/js/jquery.validate.min.js"></script>
<script src="resource/js/menu_jquery.js"></script>

<script src="resource/js/PartnerProductRule.js"></script>



<script type="text/javascript">
	$.jgrid.no_legacy_api = true;
	$.jgrid.useJSON = true;
</script>
<link type="text/css" href="resource/menu/menu.css" rel="stylesheet" />
<!-- <script type="text/javascript" src="resource/menu/jquery.js"></script>-->
<script type="text/javascript" src="resource/menu/menu.js"></script>
<script type="text/javascript">
	$(document).ready(function() {
		$('a[href$="http://apycom.com/"]').parent().hide();
		$('a[href$="http://apycom.com/"]').hide();
	});
</script>

<script>
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
$( "#dialog" ).dialog({
	autoOpen: false,
	width: 500,
	buttons: [
		{
			text: "Ok",
			click: function() {
				$( this ).dialog( "close" );
			}
		},
		{
			text: "Cancel",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});
});

// Link to open the dialog
$(function() {
$( "#dialog-link" ).click(function( event ) {
	$( "#dialog" ).dialog( "open" );
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
		$("#expiaryDate").datepicker();
		$("#expiaryDate").addClass("datepicker");
	});
	$(function() {
		$("#expiryDate").datepicker();
		$("#expiryDate").addClass("datepicker");
	});
</script>
</head>
<body>
<table width="100%" >
	<!--<tr><td class="blackline"></td></tr>
	--><tr>
		<td>
		<table align="center" cellpadding="0" cellspacing="0" id="layouttable" class="layouttable">
			<tr>
				<td class="nobottomborder"  style="height:75px"><tiles:insertAttribute
					name="header"/></td>
			</tr>
			
			<tr>
				<td class="notobottomborder"  style="background: #fff;" valign="middle" colspan="2"></td>
			</tr>
			<tr>
			
				<td valign="top" class=bodydivbg align="center">
					<div class="bodydiv">
						<tiles:insertAttribute name="body" />
					</div>	
				</td>
			</tr>
			<tr>
				<td style="background: #fff;height: 10px;" valign="middle" class="allborder" colspan="2"><tiles:insertAttribute
					name="footer" /></td>
			</tr>
		</table>
		</td>
	</tr>
</table>
</body>
</html>
