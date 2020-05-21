package com.myprojects.MarsRoverAPI.Service;

import com.myprojects.MarsRoverAPI.Client.NasaClient;
import com.myprojects.MarsRoverAPI.Dto.PhotosListDto;
import org.springframework.stereotype.Service;

@Service
public class NasaService {
  private NasaClient nasaClient;

  public NasaService (NasaClient nasaClient){
    this.nasaClient = nasaClient;
  }

  public PhotosListDto makeRequestForImages (String date) {
    return nasaClient.requestForImages(date);
  }
}
