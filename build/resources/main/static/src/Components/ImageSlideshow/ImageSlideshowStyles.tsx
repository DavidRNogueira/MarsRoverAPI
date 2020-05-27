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
justify-content:space-around;
`

export const SlideshowImg = styled.img `
background-color:grey;
max-width: 100%;
max-height: 100%;
align-self:center;
`

export const SlideshowBtn = styled.a `
text-decoration:none;
color: black;
background-color: #fc3d21;
padding:0.75em 1.25em 0.75em 1.25em;
border-radius:10px;
cursor: pointer;
margin:0.5em;

:visited {
    color:black;
}

:hover {
    background-color:orange;
}
`

export const BtnDiv = styled.div `
align-self:flex-end;
margin-bottom:2em;
`

export const NoImages = styled.div `
align-self:center;
`
export const ImageDescriptionDiv = styled.div `
display:flex;
flex-direction:column;
margin-top:2em;
align-self:flex-end;
`
export const DescriptionLine = styled.p `
margin:0;
`

export const DownloadMessage = styled.strong `
margin:0.5em auto 0 auto;
font-size:1.75em;
`