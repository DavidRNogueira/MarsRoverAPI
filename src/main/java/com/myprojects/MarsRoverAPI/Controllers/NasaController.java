package com.myprojects.MarsRoverAPI.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NasaController {

  @GetMapping("/get-images-by-date")
  public void getImagesByDate (@RequestParam(name="date") String date) {

  }
}
