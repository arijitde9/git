<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<div id="headpanel">
<table width="100%">
	<tr>
		<td width="30%"><!-- <a class="logoheader1"></a>--></td>
		<td width="45%" style="vertical-align: bottom;">
		<span class="dmshdr">
		
			<span class="dmsbold">D</span>istribution <span class="dmsbold">M</span>anagement <span class="dmsbold">S</span>ystem
		</span>
		</td>
		<td  class="logowipro">
		<table width="100%">
			<tr>
			<td style="height:7px"></td>
			</tr>
			<tr>
				<td><span class="dmshdr1">Welcome : ${primaryLoggedinFullUserName}</span></td> 
			</tr>
			<tr>
				<td><span class="dmshdr1" id="defaultRoleSpan">Role : ${defaultRoleName}</span></td> 
			</tr>
			<c:if test="${loggedinUserPartners != 'a'}">
				<tr>
					<td><span class="dmshdr1">House : ${loggedinUserPartners}</span></td> 
				</tr>
			</c:if>
			<tr>
				<td><span class="dmshdr1" id="time"></span></td>
			</tr>
		</table>
		</td>
	</tr>
</table>
</div>
