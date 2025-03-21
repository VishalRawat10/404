import React from 'react'

function Card() {
   const obj={
    title:'title',
    image:'images/vv.jpg',
    name:'manali',
    ratings:'4.8',
    distance:'2km',
    price:'2345'
   }
  return <>
  <div style={{width:'100vw'}}></div>
  <div className="cardbody">
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

  </>
}

export default Card;
