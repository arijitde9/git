<!doctype html>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=EDGE"/>
<link href="resource/css/custom-theme/jquery-ui-1.10.3.custom.css"
	rel="stylesheet">
<link href="resource/css/style.css" rel="stylesheet">	
<link href="resource/css/default.css" rel="stylesheet">
<link href="resource/css/jqgrid.css" rel="stylesheet">
<link href="resource/css/ui.multiselect.css" rel="stylesheet">

<script src="resource/js/jquery-1.9.1.js"></script>
<script src="resource/js/jquery-ui-1.10.3.custom.js"></script>
<script src="resource/js/jquery.jqGrid.js"></script>
<script src="resource/js/grid.locale-en.js"></script>
<script src="resource/js/ui.multiselect.js"></script>
<script src="resource/js/jquery.tablednd.js"></script>
<script src="resource/js/custom.js"></script>
<script src="resource/js/validation.js"></script>
<script src="resource/js/jquery.validate.min.js"></script>
<script src="resource/js/Telenor_400.font.js"></script>

<link href="resource/slider/themes/js-image-slider.css" rel="stylesheet" type="text/css" />
<script src="resource/slider/themes/js-image-slider.js" type="text/javascript"></script>

<noscript>
    <style type="text/css">
        .maindiv {display:none;}
    </style>
    <div class="noscriptmsg">
    You don't have javascript enabled.  Please Enable javascript.
    </div>
</noscript>  

<script>
/* function compCheck() {
    var iec = new IECompatibility();
    //alert('IsIE: ' + iec.IsIE + '\nVersion: ' + iec.Version + '\nCompatability On: ' + iec.IsOn);
	if(iec.IsOn){
	alert('Plz Turn Off Browser Compltibility Mode:');
	document.getElementById('maindiv').style.display = "none";
	document.getElementById('alertdiv').style.display = "block";
	}
	
  }

  function IECompatibility() {
    var agentStr = navigator.userAgent;
    this.IsIE = false;
    this.IsOn = false;  //defined only if IE
    this.Version = false;

    if (agentStr.indexOf("MSIE 7.0") > -1) {
      this.IsIE = true;
      this.IsOn = true;
      if (agentStr.indexOf("Trident/6.0") > -1) {
        this.Version = 'IE10';
      } else if (agentStr.indexOf("Trident/5.0") > -1) {
        this.Version = 'IE9';
      } else if (agentStr.indexOf("Trident/4.0") > -1) {
        this.Version = 'IE8';
      } else {
        this.IsOn = false; // compatability mimics 7, thus not on
        this.Version = 'IE7';
      }
    } //IE 7
  } */
</script>    
<script>
var matched, browser;


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

$(document).ready(function() {
	
	  //if ($.browser.mozilla && $.browser.version >= "2.0" ){
	   //alert('Mozilla above 1.9');
	  //}
	  //if( $.browser.safari ){
	   //alert('Safari');
	  //}
	  //if ($.browser.msie && $.browser.version <= 9 ){
		  
	  if ($.browser.msie){  
		  $('#alert').html('Your Browser is Internet Explorer. Please Use Google Chrome or Mozila FireFox for Better Experience!!!');
		  //$('#maindiv').hide();
		  $('#alert').show();
	  }
	  if( $.browser.opera){
		   $('#alert').html('Your Browser is Opera. Please Use Google Chrome or Mozila FireFox !!!');
		   $('#maindiv').hide();
		   $('#alert').show();
	  } 
});

</script>

<script type="text/javascript">
	$.jgrid.no_legacy_api = true;
	$.jgrid.useJSON = true;
</script>
<link type="text/css" href="resource/menu/menu.css" rel="stylesheet" />

<script>
	$(function() {
		$("input[type=submit], button").button();
	});
	$(function() {
		$("input[type=button]").button();
	});
</script>
</head>
<script type='text/javascript'>
function disableSelection(target){
	if (typeof target.onselectstart!="undefined") //IE route
	target.onselectstart=function(){return false;}
	else if (typeof target.style.MozUserSelect!="undefined") //Firefox route
	target.style.MozUserSelect="none";
	else //All other route (ie: Opera)
	target.onmousedown=function(){return false;}
	target.style.cursor = "default";
}
</script>
<body oncontextmenu='return false;'>
<script type='text/javascript'>
disableSelection(document.body);
</script>
<table width="100%">
	<!--<tr><td class="blackline"></td></tr>
	--><tr>
		<td>
		<table align="center" cellpadding="0" cellspacing="0" id="loginlayouttable" class="loginlayouttable">
			<tr>
				<td class="nobottomborder"  style="height:75px"><tiles:insertAttribute
					name="header"/></td>
			</tr>
			<tr>
				<td class="notopbottomborder"  style="background: #fff;"><tiles:insertAttribute
					name="menu" /></td>
			</tr>
			<tr>
				<td class="notobottomborder"  style="background: #fff;" valign="middle" colspan="2">
				</td>
			</tr>
			<tr>
				<td valign="top" class=bodydivbg align="center">
				
				<div id="alert" class="alert" style="display:none"></div>
					<div id="maindiv" class="maindiv">
						<tiles:insertAttribute name="body" />
					</div>
					
				</td>
			</tr>
			<tr>
				<td style="background: #fff;height: 10px;" valign="middle" class="allborder"><tiles:insertAttribute
					name="footer" /></td>
			</tr>
		</table>
		</td>
	</tr>
</table>
</body>
</html>
