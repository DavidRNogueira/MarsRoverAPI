package com.myprojects.MarsRoverAPI.Dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true )
public class PhotoDto {
  @JsonProperty("id")
  private int id;
  @JsonProperty("img_src")
  private String img_src;
  @JsonProperty("earth_date")
  private String earth_date;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getImg_src() {
    return img_src;
  }

  public void setImg_src(String img_src) {
    this.img_src = img_src;
  }

  public String getEarth_date() {
    return earth_date;
  }

  public void setEarth_date(String earth_date) {
    this.earth_date = earth_date;
  }
}
