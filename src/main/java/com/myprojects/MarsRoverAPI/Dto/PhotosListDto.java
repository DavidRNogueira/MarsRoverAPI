package com.myprojects.MarsRoverAPI.Dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class PhotosListDto {
  @JsonProperty("photos")
  private List<PhotoDto> photos;

  public List<PhotoDto> getPhotos() {
    return photos;
  }

  public void setPhotos(List<PhotoDto> photos) {
    this.photos = photos;
  }
}
