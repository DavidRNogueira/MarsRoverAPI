package com.myprojects.MarsRoverAPI.Client;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.myprojects.MarsRoverAPI.Dto.PhotosListDto;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import com.fasterxml.jackson.databind.ObjectReader;
import org.springframework.stereotype.Component;

@Component
public class NasaClient {

  private HttpURLConnection httpURLConnection;
  private ObjectReader objectReader;

  public NasaClient () {
    objectReader = new ObjectMapper().readerFor(PhotosListDto.class);
  }

  public PhotosListDto requestForImages (String date) {

    try {
      BufferedReader reader;
      String line;
      StringBuffer responseContent = new StringBuffer();
      String returnContent = null;

      URL url = new URL("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+ date +"&api_key=rUczv4Aj5GSAgiJOdHOylN07IFNqd0xBdsPEK1oZ");
      httpURLConnection = (HttpURLConnection) url.openConnection();
      httpURLConnection.setRequestMethod("GET");
      httpURLConnection.setConnectTimeout(5000);
      httpURLConnection.setReadTimeout(5000);
      httpURLConnection.connect();

      int status = httpURLConnection.getResponseCode();

      if (status > 299) {
        System.out.println("ERROR");
        reader = new BufferedReader(new InputStreamReader(httpURLConnection.getErrorStream()));

        while ((line = reader.readLine()) != null){
          responseContent.append(line);
        }
        reader.close();
      } else {
        System.out.println("SUCCESS");
        reader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));

        while ((line = reader.readLine()) != null){
          responseContent.append(line);
        }
        reader.close();

        String results = responseContent.toString();
        PhotosListDto photos = objectReader.readValue(results);
        return photos;

    }
  } catch (ProtocolException e) {
      e.printStackTrace();
    } catch (MalformedURLException e) {
      e.printStackTrace();
    } catch (IOException e) {
      e.printStackTrace();
    }
    return null;
  }
}
