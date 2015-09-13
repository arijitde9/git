<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<script src="resource/js/ajax.js"></script>
<script src="resource/marquee/js/jquery.easing.min.js"></script>
<script src="resource/marquee/js/jquery.marquee.min.js"></script>
<script src="resource/marquee/js/jquery.pause.js"></script>



<script>
 
	
	$(document).ready(function() {
		$('#save').click(function() {
			$('#emsg').html("");

		});
		$('#edit').click(function() {
			$('#emsg').html("");

		});
		$('#create').click(function() {
			$('#emsg').html("");

		});
	});

	/* window.onload = function() {
		$.ajax({
			type : 'GET',
			url : "broadcastMessage.con",

		});
		alert("onLoad");
	}; */

	$(document).ready(function() {
		$('.marquee').marquee({
			duration : 10000,
			gap : 100,
			delayBeforeStart : 0,
			direction : 'left',
			duplicated : false,
			pauseOnHover : true
		});
	});
	
	function changeRole(value) {
	
		$("#roleId").val($('#changeRoleList').val());
		$("#roleName").val($('#changeRoleList :selected').text());
		
		$('#nav').attr('action', '<c:url value="/changeRole.con"/>');
		$('#nav').submit();
	}

	$(document).ready(function() {
		$('#roleName').val('${fetchData.roleName}');
		//$('#roleId').val('${fetchData.roleId}');//???
	});
</script>
<style>
.marquee {
	width: 900px;
	overflow: hidden;
}
</style>
 
	<table width="100%">
		<tr>
		   <td width="90%"><!--  <marquee scrollAmount=3 direction="right" scrolldelay="1" onMouseover="this.scrollAmount=0" onMouseout="this.scrollAmount=3">-->

			<div class='marquee'> </div>
			</td> 
			<td align="right"><a href="#" class="logomaxmin"
				title="Larger View" onclick="resizeBody()"></a></td>
			<td align="left"><a
				href="#"
				class="logologout" title="Logout"></a></td>
		</tr>
		<tr>
			<td colspan="5">
			<div id="messageId">
			<table align="center">
				<tr>
				<td><div id="emsg">
				 
					</div>
				</td>	
				</tr>
				
				
			</table>
			</div>

			</td>
		</tr>
	</table>