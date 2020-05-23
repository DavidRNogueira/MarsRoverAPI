package com.myprojects.MarsRoverAPI.Service;

import com.myprojects.MarsRoverAPI.Client.NasaClient;
import com.myprojects.MarsRoverAPI.Dto.PhotoDto;
import com.myprojects.MarsRoverAPI.Dto.PhotosListDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class NasaService {
  private NasaClient nasaClient;

  public NasaService (NasaClient nasaClient){
    this.nasaClient = nasaClient;
  }

  public List<PhotoDto> makeRequestForImages (String date) {
    PhotosListDto photosListDto = nasaClient.requestForImages(date);
    List<PhotoDto> filteredList = photosListDto.getPhotos().stream()
        .filter(photo -> photosListDto.getPhotos().indexOf(photo) < 10 )
        .collect(Collectors.toList());

    return filteredList;
  }
}
