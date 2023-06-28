import React from 'react'
import '../App.css';

function Contact() {
  return (
   <div className='contact mt-5 d-flex'>
      <div className='col-4'>
        <h1 className='mt-5'>Let's chat.<br></br>Tell me about your<br></br> project.</h1>
        <p className='mt-4'>Let's create something together</p>
        <h4 className='mt-4'><i class="fa fa-envelope-o" aria-hidden="true"></i> Mail me at csebabu3@gmail.com</h4>
      </div>
      <div class="vl ms-5"></div>
      <div className='col-5 ms-5'>
        <h1>Send as a message</h1>
        <input type='text' placeholder='Enter name' />
        <input type='text' placeholder='Email' />
        <input type='text' placeholder='Contact' />
        <input type='text' placeholder='message' />
        <button className='btn btn-success mt-4'>Send message</button>
      </div>
   </div>
  )
}

export default Contact
