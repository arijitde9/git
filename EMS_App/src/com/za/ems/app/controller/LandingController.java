package com.za.ems.app.controller;


import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LandingController {
	
	
	@RequestMapping(value="/landingHome.con", method = {RequestMethod.GET, RequestMethod.POST})
	private ModelAndView navigateToHomePage(HttpSession session) {
		String userName = (String) session.getAttribute("userName");
		if(userName == null) {
			return new ModelAndView("loginpage");
		} else {
			return new ModelAndView("homepage");
		}
		
	}
	
	@RequestMapping(value="/", method = {RequestMethod.GET, RequestMethod.POST})
	private String navigateUser(HttpSession session) {
		String userName = (String) session.getAttribute("userName");
		if(userName == null) {
			return "redirect:/login.con";
		} else {
			return "redirect:/landingHome.con";
		}
	} 
	
}