<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page import="java.util.Map" %>
<%@page import="java.util.Iterator" %>
<div id="menu">
<ul class="menu">
	<li><a class="logohome" href="landinghome.con?username=${loggedinUserCode}" title="Home"></a></li>		
	 
	<li class="last"><a class="logohelp" href="#" title="Help"></a></li>
</ul>
</div>

