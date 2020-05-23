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
    DescriptionLine
 } from "./ImageSlideshowStyles";
import { Context } from "../../App";
import moment from "moment";

const ImageSlideshow:FC = ():JSX.Element => {
    const [activeImage , setActiveImage] = useState<number>(0);
    const context = useContext(Context);

    const changeActiveImage = (type : string) => {
      if (type === "BACK") {
        if (activeImage > 0){
          setActiveImage(activeImage - 1)
        }
      }
      if (type === "NEXT") {
        if (activeImage < context.state.length) {
          setActiveImage(activeImage + 1)
        }
      }
    }

    const images = context.state.length > 0 ?
    <>
      <BtnDiv>
        <SlideshowBtn onClick={(event: React.MouseEvent<HTMLAnchorElement>) => changeActiveImage("BACK")}>Back</SlideshowBtn>
        <SlideshowBtn onClick={(event: React.MouseEvent<HTMLAnchorElement>) => changeActiveImage("NEXT")}>Next</SlideshowBtn>
        <ImageDescriptionDiv>
          <DescriptionLine>Image {activeImage} out of {context.state.length}</DescriptionLine>
          <DescriptionLine>Date selected : {moment(context.state[activeImage].earth_date).format('MMMM Do YYYY')}</DescriptionLine>
        </ImageDescriptionDiv>
      </BtnDiv>
      <SlideshowImg src={context.state[activeImage].img_src}/>
      <BtnDiv>
        <SlideshowBtn>Download</SlideshowBtn>
      </BtnDiv>
    </>
    :
  <NoImages>
    <h1>No Images</h1>
  </NoImages>

    return (
        <ImageSlideshowMainDiv>
          <SlideshowBlackBackDrop>
              <SlideshowGreyBackDrop>
                { images }
                </SlideshowGreyBackDrop>
            </SlideshowBlackBackDrop>
        </ImageSlideshowMainDiv>
    )
}

export default ImageSlideshow;