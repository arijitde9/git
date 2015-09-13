<%@page import="org.springframework.web.context.request.RequestContextHolder"%>
<%@page import="org.springframework.web.context.request.ServletRequestAttributes"%>
<%@page import="javax.servlet.http.HttpSession"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@page import="com.wipro.solution.utility.CustomPropertyReader" %>


<div id="menu">
<ul class="menu">

	<%
	String serverUrl = (String)request.getHeader("referer");
	request.getSession().setAttribute("refererUrl", serverUrl);
	//if(ip.equalsIgnoreCase(CustomPropertyReader.getProperty("secure.ip"))){
		if(serverUrl.startsWith(CustomPropertyReader.getProperty("secure.url"))){
		%>
	<li><a href="<%=CustomPropertyReader.getProperty("secure.url")%>landingdms.con"
		 class="parent"><span>Home</span></a>
	</li>
	<%}
	//if(ip.equalsIgnoreCase(CustomPropertyReader.getProperty("unsecure.ip"))){
	else if(serverUrl.startsWith(CustomPropertyReader.getProperty("unsecure.url"))){
		%>
		<li><a href="<%=CustomPropertyReader.getProperty("unsecure.url")%>landingdms.con" 
				class="parent"><span>Home</span></a>
		</li>
	
	<%}	else{
		%>
		<li><a href="landinghome.con?username=${loggedinUserCode}" class="parent"><span>Home</span></a>
		<%} %>
		<li><a href="#" class="parent"><span>AboutUs</span></a>
	<li><a href="#"><span>Help</span></a></li>
	<li class="last"><a href="#"><span>Contacts</span></a></li>
</ul>
</div>
