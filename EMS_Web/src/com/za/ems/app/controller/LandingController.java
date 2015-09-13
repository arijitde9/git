package com.za.ems.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LandingController {
	
	@RequestMapping(value="/landingHome.con", method = RequestMethod.GET)
	private ModelAndView navigateToHomePage() {
		return new ModelAndView("homepage");
	}
	
}