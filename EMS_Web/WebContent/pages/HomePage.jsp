<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<table width="100%" align="center">
<tr><td style="color: red;" align="right"><span id="spanPassExpErrorMsg"></span></td></tr>
<tr>
	<td>
		<div id="results">Your captured image will appear here...</div>
		<h3>EMS Test Page</h3>
		<div id="my_camera"></div>
		
		<!-- First, include the Webcam.js JavaScript Library -->
		<script type="text/javascript" src="js/webcam/webcam.js"></script>
		
		<!-- Configure a few settings and attach camera -->
		<script language="JavaScript">
			Webcam.set({
				width: 420,
				height: 340,
				image_format: 'jpeg',
				jpeg_quality: 90
			});
			Webcam.attach( '#my_camera' );
		</script>
		
		<!-- A button for taking snaps -->
		<form>
			<input type=button value="Take Snapshot" onClick="take_snapshot()">
		</form>
		
		<!-- Code to handle taking the snapshot and displaying it locally -->
		<script language="JavaScript">
			//preload shutter audio clip
			var shutter = new Audio();
			shutter.autoplay = false;
			shutter.src = navigator.userAgent.match(/Firefox/) ? 'js/webcam/shutter.ogg' : 'js/webcam/shutter.mp3';
			
			function take_snapshot() {
				// play sound effect
				shutter.play();
				
				// take snapshot and get image data
				Webcam.snap( function(data_uri) {
					// display results in page
					console.log('data_uri :: ' + data_uri);
					document.getElementById('results').innerHTML = '<img src="'+data_uri+'"/>';
				});
			}
		</script>
		
	</td>
</tr>		
</table>