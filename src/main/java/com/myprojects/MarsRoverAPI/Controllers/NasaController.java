package com.myprojects.MarsRoverAPI.Controllers;

import com.myprojects.MarsRoverAPI.Dto.PhotoDto;
import com.myprojects.MarsRoverAPI.Service.NasaService;
import com.myprojects.MarsRoverAPI.Dto.PhotosListDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NasaController {
  private final NasaService nasaService;

  public NasaController (NasaService nasaService) {
    this.nasaService = nasaService;
  }

  @GetMapping("/get-images-by-date")
  public List<PhotoDto> getImagesByDate (@RequestParam(name="date") final String date) {
    return nasaService.makeRequestForImages(date);
  }

  @GetMapping("/download-image")
  public String downloadImage (@RequestParam(name="url") final String url){
    return nasaService.downloadImageByUrl(url);
  }
}