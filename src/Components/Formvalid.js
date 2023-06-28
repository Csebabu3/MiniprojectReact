import React from 'react'
import {useNavigate} from "react-router-dom"



const Formvalid = () => {
  const navigate = useNavigate();
  return (
    <div className='sign-in bg-light text-center mt-5'>
       <h1><b>Sign-in Form</b></h1>
       <input className='w-50 mt-4' type='text' placeholder='Username'></input>
       <input className='w-50 mt-4' type='text' placeholder='Password'></input>
       <button onClick={()=>navigate("/Faculty")} className='btn btn-success w-50 mt-4'>Sign-in</button>
    </div>
   
  )
}

export default Formvalid
