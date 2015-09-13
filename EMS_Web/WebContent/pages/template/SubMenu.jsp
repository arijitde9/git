<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
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
  	<ul>
  		<li><span>Test 1</span></li>
  		<li class='has-sub'><span>Test 2</span>
  			<ul>
  				<li><span>Test 2.1</span></li>
  				<li><span>Test 2.2</span></li>
  			</ul>
  		</li>
  		<li><span>Test 3</span></li>
  	</ul>
</div>