import React from 'react'

function Cardinfo() {
  return <>
    <div class="contianer">

        <h1>Luxury Mountain lodge</h1>
        <img class="image" src="./image/th.jpg" alt="Room"/>

        <p>OwnedBy Ravi</p>
        <p>Experience luxury in the heart of the mountains</p>
        <p>₹700/night</p>
        <p>Almora,Uttarakhand</p>

       <div style={{'margin-top': '1rem'}}>
        <button class="btn-edit">Edit</button>&nbsp;&nbsp;
        <button class="btn-delete">Delete</button>
       </div>
    </div>
    </>
}

export default Cardinfo
