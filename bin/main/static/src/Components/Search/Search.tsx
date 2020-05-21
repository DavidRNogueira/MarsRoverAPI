import React , { FC } from "react"
import { 
    SearchMainDiv, 
    SearchHeader, 
    SearchDescription,
    NasaImg,
    HeaderDiv,
    DateInput,
    DateDiv,
    SubmitDate
} from "./SearchStyles"
import NasaLogo from "../../Images/1224px-NASA_logo.svg.png"

const Search:FC = ():JSX.Element => {
    return (
        <SearchMainDiv>
            <NasaImg src={NasaLogo}/>
            <HeaderDiv>
                <SearchHeader>Search</SearchHeader>
                <SearchDescription>Enter a date to get a slideshow of all images from Mars for that day.</SearchDescription>
                <DateDiv>
                    <DateInput type="date"/>
                    <SubmitDate>Submit</SubmitDate>
                </DateDiv>
            </HeaderDiv>
        </SearchMainDiv>
    )
}

export default Search;