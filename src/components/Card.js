import React from "react";

export default function Card (props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText ="SOLD OUT"
    } else if (props.location==="Online") {
        badgeText="ONLINE"
    }
    return (
        <section className="Card">
           { 
           badgeText && 
           <div className="card--badge">{badgeText}</div>
           }
            <img className="card--pic" src={`assets/${props.coverImg}`} alt="CardImage"/>
            <div className="card--stats">
                <div className="rating">
                    <img className="star--icon" src="assets/Star.png" alt="Star" />
                    <p>{props.stats.rating}<span className="gray">({props.stats.reviewCount}) • {props.location} </span></p>
                </div>
                <p>{props.title}</p>
                <p className="card--cost"><span>From ${props.price}</span> /person</p>
            </div>
        </section>
    )
}