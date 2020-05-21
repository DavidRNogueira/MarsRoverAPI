package com.myprojects.MarsRoverAPI.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

  @GetMapping(value="/")
  public String toProject () {
     return "../static/build/index";
  }
}
