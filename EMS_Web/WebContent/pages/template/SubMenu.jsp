<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@page import="com.wipro.dms.gp.dto.SubMenuResponseDTO"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.Iterator"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>


<script>
	function toggleDiv(ids) {

		$('#' + ids).slideToggle(1000);
	}
	function loadSession(ids) {

	}
</script>
<div id='cssmenu'>
	<%
		if (session.getAttribute("Menu") != null) {
	%>
	<ul>
		<%
			Map menuMap = ((SubMenuResponseDTO) session
						.getAttribute("Menu")).getSubmenu();
				Iterator iterator = menuMap.entrySet().iterator();
				while (iterator.hasNext()) {
					Map.Entry mapEntry = (Map.Entry) iterator.next();

					SubMenuResponseDTO dto = (SubMenuResponseDTO) mapEntry
							.getValue();
					//System.out.println("************"+dto);
					if (dto.getName().equals(session.getAttribute("MainMenu"))) {
						Map submenuMap = dto.getSubmenu();
						//System.out.println("11111111111111111"+dto);
						Iterator subiterator = submenuMap.entrySet().iterator();
						int cnt = 0;
						while (subiterator.hasNext()) {
							Map.Entry submapEntry = (Map.Entry) subiterator
									.next();

							SubMenuResponseDTO subdto = (SubMenuResponseDTO) submapEntry
									.getValue();

							if (subdto.getSubmenu() != null) {
		%>
		<c:set var="subMenuIdFrmXml" value="<%=subdto.getId()%>" />
		<c:forEach var="subMenuIdFrmDb" items="${atrrCodeList}">
			<c:if test="${subMenuIdFrmDb eq subMenuIdFrmXml}">
				<li class='has-sub'><a href="<%=subdto.getUrl()%>")"><span><%=subdto.getName()%></span></a>
					<ul>
						<%
							Map submenuMap1 = subdto.getSubmenu();
														//submenuMap1.remove("m00431");
														Iterator subiterator1 = submenuMap1
																.entrySet().iterator();
														while (subiterator1.hasNext()) {
															Map.Entry submapEntry1 = (Map.Entry) subiterator1
																	.next();

															SubMenuResponseDTO subdto1 = (SubMenuResponseDTO) submapEntry1
																	.getValue();
															//if(!subdto1.getId().equals("m00431")){
						%>

						<c:set var="subMenuIdFrmXml3" value="<%=subdto1.getId()%>" />
						<c:forEach var="subMenuIdFrmDb" items="${atrrCodeList}">
							<c:if test="${subMenuIdFrmDb eq subMenuIdFrmXml3}">
								<li><a href="<%=subdto1.getUrl()%>"><span><%=subdto1.getName()%></span></a>
								</li>
							</c:if>
						</c:forEach>

						<%
							//}
														}
						%>
					</ul></li>
			</c:if>
		</c:forEach>
		<%
			} else {
		%>

		<c:set var="subMenuIdFrmXml2" value="<%=subdto.getId()%>" />
		<c:forEach var="subMenuIdFrmDb2" items="${atrrCodeList}">
			<c:if test="${subMenuIdFrmDb2 eq subMenuIdFrmXml2}">
				<li class='active'><a href="<%=subdto.getUrl()%>"
					id="<%=subdto.getName()%>" onclick="loadSession(this)"><span><%=subdto.getName()%></span></a>
				</li>
			</c:if>
		</c:forEach>

		<%
			}
							cnt++;
						}
					}
				}
		%>
	</ul>
	<%
		} else {
	%>
	<table width="100%" class="submenutble">
		<tr>
			<td>Session Expire... Plz Click Home Icon for Extend Session...</td>
		</tr>
	</table>
	<%
		}
	%>
</div>