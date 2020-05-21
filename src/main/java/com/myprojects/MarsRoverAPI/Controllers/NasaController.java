package com.myprojects.MarsRoverAPI.Controllers;

import com.myprojects.MarsRoverAPI.Dto.PhotosListDto;
import com.myprojects.MarsRoverAPI.Service.NasaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NasaController {
  private NasaService nasaService;

  public NasaController (NasaService nasaService) {
    this.nasaService = nasaService;
  }

  @GetMapping("/get-images-by-date")
  public PhotosListDto getImagesByDate (@RequestParam(name="date") String date) {
    return nasaService.makeRequestForImages(date);
  }
}
