import styled from "styled-components"

export const ImageSlideshowMainDiv = styled.div `
display:flex;
flex-direction:column;
margin-top:1em;
`

export const SlideshowBlackBackDrop = styled.div `
width:70%;
height:70vh;
background-color:black;
margin:auto;

display:flex;
align-items:center;
justify-content:center;
`
export const SlideshowGreyBackDrop = styled.div `
width:95%;
height:65vh;
background-color:grey;
margin:auto;

display:flex;
align-items:center;
justify-content:center;

`

export const SlideshowImg = styled.img `
background-color:grey;
max-width: 100%;
max-height: 100%;`