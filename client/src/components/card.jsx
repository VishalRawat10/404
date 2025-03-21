import React from 'react'
import { FaStar } from "react-icons/fa6";
import {useGSAP} from "@gsap/react"
import {gsap} from 'gsap'
import {Link} from 'react-router'
function Card() {
   const obj={
    title:'title',
    image:'images/vv.jpg',
    name:'manali',
    ratings:'4.8',
    distance:'2km',
    price:'2345'
   }
   useGSAP(()=>{gsap.from('.cardcontainer',{y:50,scale:1,duration:1.5,delay:0.5})})
  return <>
 <div className="cardbodyconatiner">
  <div className="cardbody">
  <div className="cardcontainer">
    <div className="cardimage"><Link to={"/login"} ><img src={obj.image} alt={obj.title} /></Link></div>
    <div className="cardname  ">
        <div className="destinationName">{obj.name}</div>
        <div className="rating"><FaStar style={{color:'#F6DC43'}}/> {obj.ratings}</div>
    </div>
    <div className="destinationDistance">{obj.distance}</div>
    <div className="destinationPrice">₹ {obj.price}  /night</div>
  </div>
  <div className="cardcontainer">
    <div className="cardimage"><img src={obj.image} alt={obj.title} /></div>
    <div className="cardname flex ">
        <div className="destinationName">{obj.name}</div>
        <div className="rating">{obj.ratings}</div>
    </div>
    <div className="destinationDistance">{obj.distance}</div>
    <div className="destinationPrice">{obj.price}</div>
  </div>
  <div className="cardcontainer">
    <div className="cardimage"><img src={obj.image} alt={obj.title} /></div>
    <div className="cardname flex ">
        <div className="destinationName">{obj.name}</div>
        <div className="rating">{obj.ratings}</div>
    </div>
    <div className="destinationDistance">{obj.distance}</div>
    <div className="destinationPrice">{obj.price}</div>
  </div>
  <div className="cardcontainer">
    <div className="cardimage"><img src={obj.image} alt={obj.title} /></div>
    <div className="cardname flex ">
        <div className="destinationName">{obj.name}</div>
        <div className="rating">{obj.ratings}</div>
    </div>
    <div className="destinationDistance">{obj.distance}</div>
    <div className="destinationPrice">{obj.price}</div>
  </div>
  <div className="cardcontainer">
    <div className="cardimage"><img src={obj.image} alt={obj.title} /></div>
    <div className="cardname flex ">
        <div className="destinationName">{obj.name}</div>
        <div className="rating">{obj.ratings}</div>
    </div>
    <div className="destinationDistance">{obj.distance}</div>
    <div className="destinationPrice">{obj.price}</div>
  </div>
  <div className="cardcontainer">
    <div className="cardimage"><img src={obj.image} alt={obj.title} /></div>
    <div className="cardname flex ">
        <div className="destinationName">{obj.name}</div>
        <div className="rating">{obj.ratings}</div>
    </div>
    <div className="destinationDistance">{obj.distance}</div>
    <div className="destinationPrice">{obj.price}</div>
  </div>
  </div>
  </div>
  </>
}

export default Card;
