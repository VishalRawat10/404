import { useGSAP } from '@gsap/react';
import React, { useState } from 'react'
import gsap from 'gsap';
function Signup() {
  
 
  const [user,setUser]=useState({
    name:'',
    email:'',
    password:'',
  });
  const handleInput=(e)=>{
const {name,value}=e.target;
setUser((prev)=>({...prev,[name]:value}))
console.log(user)
  }

  useGSAP(()=>{gsap.from('span',{x:30,scale:0.5,duration:1,delay:0.5})})
  
  
  return <>
 
    <div className='Login'>
      <form className='formContainer tcenter'>
    
    <h1 class="h2 mb-3 fw-normal"><span className='heading_initial'>Cr</span><span>eate</span> <span className='heading_initial'>Yo</span>
    <span>ur</span>  <span className='heading_initial'>Acc</span><span>ount</span>
    </h1>

    <div class="form-floating">
      <input type="text" class="form-control form" id="floatingInput" placeholder="Name" value={user.name} name='name' onChange={handleInput}/>
      <label for="floatingInput">Name</label>
    </div>
    <div class="form-floating">
      <input type="email" class="form-control form" id="floatingInput" placeholder="name@example.com" value={user.email} name='email' onChange={handleInput}/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class=" btn-primary form-control form" id="floatingPassword" placeholder="Password" name='password' value={user.password} onChange={handleInput}/>
      <label for="floatingPassword">Password</label>
    </div>

   <div className="formFooter">
    <button class="btn btn-primary w-1 py-2 formbtn" type="submit">Sign in</button>
    <button class="btn btn-primary w-1 py-2 m-2" type="submit">New User</button>
    </div>
  </form>
    </div>
 
  

  </>
}

export default Signup
