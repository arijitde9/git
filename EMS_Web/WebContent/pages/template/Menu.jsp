<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page import="com.wipro.dms.gp.dto.SubMenuResponseDTO" %>
<%@page import="java.util.Map" %>
<%@page import="java.util.Iterator" %>
<div id="menu">
<ul class="menu">
	<li><a class="logohome" href="landinghome.con?username=${loggedinUserCode}" title="Home"></a></li>		
	<%
	if(session.getAttribute("Menu")!=null){
	Map menuMap = ((SubMenuResponseDTO)session.getAttribute("Menu")).getSubmenu();
	Iterator iterator = menuMap.entrySet().iterator();
	while (iterator.hasNext()) {
		Map.Entry mapEntry = (Map.Entry) iterator.next();
		
		SubMenuResponseDTO dto = (SubMenuResponseDTO)mapEntry.getValue();
		//System.out.println(dto);
		if(session.getAttribute("MainMenu")!=null){
			if(session.getAttribute("MainMenu").equals(dto.getName())){
		%>
		<c:set var="menuIdfromXml" value="<%=dto.getId()%>" />
	    <c:forEach var="menuId" items="${atrrCodeList}">
		 <c:if test="${menuId eq menuIdfromXml}">
		    <li><span><a href="<%=dto.getUrl()%>?menu=<%=dto.getName()%>" class="parent" style="color:#000"><%=dto.getName()%></a></span></li>
		 </c:if>
        </c:forEach>
		<%
			 }else{%>
		<c:set var="menuIdfromXml1" value="<%=dto.getId()%>" />
		<c:forEach var="menuId1" items="${atrrCodeList}">
		  <c:if test="${menuId1 eq menuIdfromXml1}">
			 <li><span><a href="<%=dto.getUrl()%>?menu=<%=dto.getName()%>" class="parent"><%=dto.getName()%></a></span></li>
		  </c:if>
        </c:forEach>
			   <%}
			 }else{%>
		<c:set var="menuIdfromXml2" value="<%=dto.getId()%>" />
	    <c:forEach var="menuId2" items="${atrrCodeList}">
		 <c:if test="${menuId2 eq menuIdfromXml2}">
			 <li><span><a href="<%=dto.getUrl()%>?menu=<%=dto.getName()%>" class="parent"><%=dto.getName()%></a></span></li>
		  </c:if>
        </c:forEach>
			   <%}
		   }
		}
		%>
	<li class="last"><a class="logohelp" href="#" title="Help"></a></li>
</ul>
</div>

