package com.za.ems.app.controller;


import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.za.ems.app.service.EmsUserMasterService;

 
@Controller
public class LoginController {

	@Autowired
	EmsUserMasterService emsUserMasterService;

	@RequestMapping(method = {RequestMethod.GET, RequestMethod.POST})
	private ModelAndView navigateToRoot(HttpSession session) {
		
		List list = emsUserMasterService.populateUserList();
		if(list != null) {
			System.out.println("List size 1");
		} else {
			System.out.println("List size 2");
		}
		System.out.println("Inside Root");
		String userName = (String) session.getAttribute("userName");
		if(userName == null) {
			return new ModelAndView("loginpage");
		} else {
			return new ModelAndView("homepage");
		}
		
	}
	
	
	@RequestMapping(value="/login.con", method = {RequestMethod.GET, RequestMethod.POST})
	private ModelAndView navigateToLogin(HttpSession session) {
		System.out.println("Inside Login");
		List list = emsUserMasterService.populateUserList();
		if(list != null) {
			System.out.println("List size 1");
		} else {
			System.out.println("List size 2");
		}
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
