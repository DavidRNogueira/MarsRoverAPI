import styled from "styled-components"

export const SearchMainDiv = styled.div `
display:flex;
background-color:#0b3d91;
justify-content:center;
padding:1em;
`
export const HeaderDiv = styled.div `
display:flex;
flex-direction:column;
margin: 1em 0.5em 1em 0.5em;
color:white;
`

export const SearchHeader = styled.h1 `
margin:0;
`

export const SearchDescription = styled.p `
margin:0;
`

export const NasaImg = styled.img `
width:10em;
justify-self:center;
`

export const DateDiv = styled.div `
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-evenly;
margin-top:0.5em;
`

export const DateInput = styled.input `
line-height:1.75em;
font-size:1.25em;
font-family:inherit;
width:40%;
text-align:center;
`

export const SubmitDate = styled.a `
text-decoration:none;
color: black;
background-color: #fc3d21;
padding:0.75em 1.25em 0.75em 1.25em;
border-radius:10px;
cursor: pointer;

:visited {
    color:black;
}

:hover {
    background-color:orange;
}
`