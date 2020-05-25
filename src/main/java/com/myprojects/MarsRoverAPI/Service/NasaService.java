package com.myprojects.MarsRoverAPI.Service;

import com.myprojects.MarsRoverAPI.Client.NasaClient;
import com.myprojects.MarsRoverAPI.Dto.PhotoDto;
import com.myprojects.MarsRoverAPI.Dto.PhotosListDto;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.file.Files;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class NasaService {
  private NasaClient nasaClient;

  public NasaService (final NasaClient nasaClient){
    this.nasaClient = nasaClient;
  }

  public List<PhotoDto> makeRequestForImages (final String date) {
    PhotosListDto photosListDto = nasaClient.requestForImages(date);
    List<PhotoDto> filteredList = photosListDto.getPhotos().stream()
        .filter(photo -> photosListDto.getPhotos().indexOf(photo) < 10 )
        .collect(Collectors.toList());

    return filteredList;
  }

  public String downloadImageByUrl (final String url){
    String imageUrl = "https://www.technicalkeeda.com/img/images/article/spring-file-upload-eclipse-setup.png";

    InputStream inputStream = null;
    OutputStream outputStream = null;

    try {
      URL image = new URL(url);
      inputStream = image.openStream();
      File downloads = new File(System.getProperty("user.home") +"/Downloads");
      int count = downloads.list().length;

      File file =  new File(downloads + "/MarsImage" + count + ".jpg");
      outputStream = new FileOutputStream(file);

      byte[] buffer = new byte[2048];
      int length;

      while ((length = inputStream.read(buffer)) != -1) {
        outputStream.write(buffer, 0, length);
      }
      return file.toString();
    } catch (MalformedURLException e) {
      System.out.println("MalformedURLException :- " + e.getMessage());

    } catch (FileNotFoundException e) {
      System.out.println("FileNotFoundException :- " + e.getMessage());

    } catch (IOException e) {
      System.out.println("IOException :- " + e.getMessage());

    } finally {
      try {

        inputStream.close();
        outputStream.close();

      } catch (IOException e) {
        System.out.println("Finally IOException :- " + e.getMessage());
      }
    }
    return null;
  }
}
