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

<form:form id="nav" method="post" action="landinghome.con"
	commandName="fetchData">

	<table width="100%">
		<tr>
		   <td width="90%"><!--  <marquee scrollAmount=3 direction="right" scrolldelay="1" onMouseover="this.scrollAmount=0" onMouseout="this.scrollAmount=3">-->

			<div class='marquee'><c:forEach items="${allDatalist}"
				var="allData" varStatus="cnt">
				<%-- Welcome ${allData.userId},   
					Your Partner Name is ${allData.partnerName}. ${allData.message} --%>
			</c:forEach></div>
			</td>
			<td>Change&nbsp;Role:</td>
			<td align="right"><input type="hidden" id="roleName"
				name="roleName" /> 
				<input type="hidden" id="roleId"
				name="roleId" />
				<input type="hidden"  id="daysLeftToPassExpiration" value="${daysLeftToPassExpiration}">
				<select class="selinputrole" id="changeRoleList"
				onchange="changeRole(this.value)" value="${defaultRoleId}">
					<c:forEach var="roleVar" items="${userRoleNameList}">
					<c:if test="${defaultRoleId eq roleVar.key}"> 
						<option	value="${roleVar.key}" selected="selected" >${roleVar.value}</option>
							</c:if>
							<c:if test="${defaultRoleId ne roleVar.key}"> 
						<option	value="${roleVar.key}">${roleVar.value}</option>
							</c:if>
					</c:forEach>
			</select></td>

			<td align="right"><a href="#" class="logomaxmin"
				title="Larger View" onclick="resizeBody()"></a></td>
			<td align="left"><a
				href="<c:url value="/logout.con" />"
				class="logologout" title="Logout"></a></td>
		</tr>
		<tr>
			<td colspan="5">
			<div id="messageId">
			<table align="center">
				<tr>
				<td><div id="emsg">
					<c:forEach items="${messageList.message}" var="msg">
						 <c:choose>
					        <c:when test="${fn:startsWith(msg, 'BVS')}">
					        	<span class="logoreddotgreen"></span>
					            <span class="msgbx">
					            
					            <c:if test="${fn:contains(msg, '&')}">
					               <c:set var="dateParts" value="${fn:split(msg, '&')}" />
								   <spring:message code="${dateParts[0]}" arguments="${dateParts[1]}"/>
								</c:if>
								<c:if test="${not fn:contains(msg, '&')}">
								   <spring:message code="${msg}" />
								</c:if>
					            
					            
					            </span>
					        </c:when>
					        <c:otherwise>
					        	 <span class="logoreddotred"></span>
					             <span class="errbx">
					             
					             <c:if test="${fn:contains(msg, '&')}">
					               <c:set var="dateParts" value="${fn:split(msg, '&')}" />
								   <spring:message code="${dateParts[0]}" arguments="${dateParts[1]}"/>
								</c:if>
								<c:if test="${not fn:contains(msg, '&')}">
								   <spring:message code="${msg}" />
								</c:if>
								
					             </span>
					        </c:otherwise>
					    </c:choose>
					</c:forEach>
					</div>
				</td>	
				</tr>
				
				<c:if test="${infoList.size() > 0}">
					<tr>
						<td>
							<c:forEach items="${infoList}" var="msg">
				            	<c:choose>
							        <c:when test="${msg.code == 'ERR-SO'}">
							        	<span class="logoreddotgreen"></span>
							            <span class="errbx"><spring:message code="${msg.code}"  arguments="${msg.name}" /></span>
							        </c:when>
							        <c:otherwise>
							        	 <span class="logoreddotred"></span>
				             			 <span class="errbx"><spring:message code="${msg.code}"  arguments="${msg.name}" /></span>
							        </c:otherwise>
							   </c:choose>
							</c:forEach>
						</td>
					</tr>
				</c:if>
				
			</table>
			</div>

			</td>
		</tr>
	</table>
</form:form>
