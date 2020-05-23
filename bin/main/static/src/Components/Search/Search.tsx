import React , { FC, useState, useContext } from "react"
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
import axios from "axios"
import moment from "moment"
import { Context } from "../../App"

const Search:FC = ():JSX.Element => {
    const [date , setDate] = useState<string>("");
    const context = useContext(Context)

    const handleSubmit = async () => {
        const formattedDate = moment(date).format("YYYY-M-D")
        const request = await axios.get(`/get-images-by-date?date=${formattedDate}`);
            if (request.status === 200) {
                console.log(request.data)
                context.dispatch({
                    type:"SET_IMAGES" ,
                    payload : request.data
                })
            }
    }

    return (
        <SearchMainDiv>
            <NasaImg src={NasaLogo}/>
            <HeaderDiv>
                <SearchHeader>Search</SearchHeader>
                <SearchDescription>Enter a date to get a slideshow of all images from Mars for that day.</SearchDescription>
                <DateDiv>
                    <DateInput type="date" onChange={(event:React.ChangeEvent<HTMLInputElement>) => setDate(event.currentTarget.value)} value={date}/>
                    <SubmitDate onClick={handleSubmit}>Submit</SubmitDate>
                </DateDiv>
            </HeaderDiv>
        </SearchMainDiv>
    )
}

export default Search;