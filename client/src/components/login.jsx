import React, { useState } from 'react'
import {useGSAP} from "@gsap/react"
import {gsap} from 'gsap'
function Login() {
  const [user,setUser]=useState({
    email:'',
    password:'',
  });
  const handleInput=(e)=>{
const {name,value}=e.target;
setUser((prev)=>({...prev,[name]:value}))

  }

  useGSAP(()=>{gsap.from('span',{x:30,scale:0.5,duration:1,delay:0.5})})
  
  
  return <>
    <div className='Login'>
      <form className='formContainer tcenter'>
    
    <h1 class="h2 mb-3 fw-normal"><span className='heading_initial'>L</span><span>ogin</span> <span className='heading_initial'>T</span>
    <span>o</span> <span className='heading_initial'>Y</span><span>our</span> <span className='heading_initial'>Acc</span><span>ount</span>
    </h1>

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
export default Login
