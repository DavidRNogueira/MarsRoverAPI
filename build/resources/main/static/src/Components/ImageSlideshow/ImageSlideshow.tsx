import React, { FC, useState, useContext } from "react"
import { 
    ImageSlideshowMainDiv,
    SlideshowBlackBackDrop,
    SlideshowGreyBackDrop,
    SlideshowImg,
    BtnDiv,
    SlideshowBtn,
    NoImages,
    ImageDescriptionDiv,
    DescriptionLine,
    DownloadMessage
 } from "./ImageSlideshowStyles";
import { Context } from "../../App";
import moment from "moment";
import Axios from "axios";
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft , faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ImageSlideshow:FC = ():JSX.Element => {
    const [activeImage , setActiveImage] = useState<number>(0);
    const [fileName , setFileName] = useState<string>("");
    const [isImageDownloaded , setIsImageDownloaded] = useState<boolean>(false);
    const [errors , setErrors] = useState<string[]>([]);
    
    const context = useContext(Context);

    const changeActiveImage = (type : string) => {
      if (type === "BACK") {
        if (activeImage > 0){
          setActiveImage(activeImage - 1)
        }
      }
      if (type === "NEXT") {
        if (activeImage < (context.state.length - 1)) {
          if (isImageDownloaded) {
            setIsImageDownloaded(false);
          }
          setActiveImage(activeImage + 1)
        }
      }
    }

    const images = context.state.length > 0 ?
    <>
      <BtnDiv>
        <SlideshowBtn onClick={(event: React.MouseEvent<HTMLAnchorElement>) => changeActiveImage("BACK")}>
          <FontAwesomeIcon icon={faChevronLeft}/>
        </SlideshowBtn>
        <SlideshowBtn onClick={(event: React.MouseEvent<HTMLAnchorElement>) => changeActiveImage("NEXT")}>
          <FontAwesomeIcon icon={faChevronRight}/>
        </SlideshowBtn>
        <ImageDescriptionDiv>
          <DescriptionLine>Image {activeImage + 1} out of {context.state.length}</DescriptionLine>
          <DescriptionLine>Date selected : {moment(context.state[activeImage].earth_date).format('MMMM Do YYYY')}</DescriptionLine>
        </ImageDescriptionDiv>
      </BtnDiv>
      <SlideshowImg src={context.state[activeImage].img_src}/>
      <BtnDiv>
        <SlideshowBtn onClick={(event:React.MouseEvent<HTMLAnchorElement>) => {debounceImageDownload();}}>Download</SlideshowBtn>
      </BtnDiv>
    </>
    :
  <NoImages>
    <h1>No Images</h1>
  </NoImages>

  const handleImageDownload = async () => {
    try {
      const request = await Axios.get(`/download-image?url=${context.state[activeImage].img_src}`);
        if (request.status === 200) {
            console.log(request.data)
            setFileName(request.data)
            setIsImageDownloaded(true);
        }
    } catch (error) {
      setErrors([...errors , "failed-download"])
    }
}

  const debounceImageDownload = AwesomeDebouncePromise(handleImageDownload , 500)

    return (
        <ImageSlideshowMainDiv>
          <SlideshowBlackBackDrop>
              <SlideshowGreyBackDrop>
                { images }
                </SlideshowGreyBackDrop>
            </SlideshowBlackBackDrop>
            {
            isImageDownloaded &&
            <DownloadMessage style={{color: "green"}}>Your image has been downloaded successfully as {fileName}</DownloadMessage>
          }
          {
            errors.includes("failed-download") && 
            <DownloadMessage style={{color: "red"}}></DownloadMessage>
          }
        </ImageSlideshowMainDiv>
    )
}

export default ImageSlideshow;