import React from "react"

export default function TravelCard({...props}) {
    console.log(props.img)
    return (
        <div className="travelcard">
            <div>
                <img className="travelcard--image" src={props.image}/> 
            </div>
            <div>
                <h2>{props.title}</h2>
                <h5>{props.time}</h5>
                <p>{props.description}</p>
            </div>

        </div>
    )
}