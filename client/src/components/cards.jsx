import React from 'react'
import Card from './card'
function Cards() {
  return (
    <div className='cardcontainer' >
        
  
      <div className="cardOffers">
        <div className="cardHeading">OFFERS</div>
        <div className="cardcontent">
            <ul >
            <a><li className='listitems'>All Offers</li></a>
            <a><li className='listitems'>Flights</li></a>
            <a><li className='listitems'>Hotels</li></a>
            <a><li className='listitems'>Holidays</li></a>
            <a><li className='listitems'>Trains</li></a>
            <a><li className='listitems'>Cabs</li></a>

            </ul>
      </div>
    </div>
    <div className="cardbody">
        <Card/>
    </div>
    </div>
  )
}

export default Cards
