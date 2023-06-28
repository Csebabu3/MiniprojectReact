import React from 'react'

function StuData() {
  return (
    <div className='student text-center'>
      <h1>Student Form</h1>
      <input type='text' className='w-50' placeholder='Enter the name' />
      <input type='text' className='w-50' placeholder='Enter Email' />
      <input type='text' className='w-50' placeholder='Enter password' />
      <input type='text' className='w-50' placeholder='Enter the ph No' />
      <input type='text' className='w-50' placeholder='Enter the name' />
      <button className='w-50 bg-success p-2 fw-bolder mt-3'>submit</button>
      
    </div>
  )
}

export default StuData
