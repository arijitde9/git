package com.za.ems.app.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {


	@RequestMapping(value="/login.con", method = {RequestMethod.GET, RequestMethod.POST})
	private ModelAndView navigateToLogin(HttpSession session) {
		String userName = (String) session.getAttribute("userName");
		if(userName == null) {
			return new ModelAndView("loginpage");
		} else {
			return new ModelAndView("homepage");
		}
		
	}
	
	@RequestMapping(value="/redirectLogin.con", method = {RequestMethod.GET, RequestMethod.POST})
	private String redirectLogin(HttpSession session) {
		session.setAttribute("userName", "Admin");
		return "redirect:/landingHome.con";
	}
	
	@RequestMapping(value="/logout.con", method = {RequestMethod.GET, RequestMethod.POST})
	private String redirectLogout(HttpSession session) {
		session.removeAttribute("userName");
		session.invalidate();
		return "redirect:/login.con";
	}
	
}
