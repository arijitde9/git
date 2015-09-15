<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:url var="login" value="/redirectLogin.con" />
<form role="form" method="post" action="${login}">
	<fieldset>
		<div class="form-group">
			<input class="form-control" placeholder="E-mail" name="email"
				type="email" autofocus>
		</div>
		<div class="form-group">
			<input class="form-control" placeholder="Password" name="password"
				type="password" value="">
		</div>
		<div class="checkbox">
			<label> <input name="remember" type="checkbox"
				value="Remember Me">Remember Me
			</label>
		</div>
		<!-- Change this to a button or input when using this as a form -->
		<input type="submit" class="btn btn-lg btn-success btn-block" value="Login" /> 
	</fieldset>
</form>