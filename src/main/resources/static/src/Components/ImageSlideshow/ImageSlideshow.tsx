import React, { FC } from "react"
import { 
    ImageSlideshowMainDiv,
    SlideshowBlackBackDrop,
    SlideshowGreyBackDrop,
    SlideshowImg
 } from "./ImageSlideshowStyles";

const ImageSlideshow:FC = ():JSX.Element => {
    return (
        <ImageSlideshowMainDiv>
            <SlideshowBlackBackDrop>
                <SlideshowGreyBackDrop>
                    <SlideshowImg/>
                </SlideshowGreyBackDrop>
            </SlideshowBlackBackDrop>
        </ImageSlideshowMainDiv>
    )
}

export default ImageSlideshow;