import React from "react"
import TravelList from "./TravelList"
import TravelCard from "./TravelCard" 

export default function Travel() {
    const travelList = TravelList.map(item => <TravelCard {...item}/>)
    return (
        <div>
            <h1>My Travel Experiences</h1>
            {travelList}
        </div>
    )
}