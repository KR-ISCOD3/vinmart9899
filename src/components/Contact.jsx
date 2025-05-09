import React from 'react'

function Contact() {
  return (
    <div className='container-fluid  font-text bg-image'>
        <div className="container text-light py-5">
            <h1 className='font-text fw-normal'>Visit Us or <span className='fw-bold text-decoration-underline'>Call Us Today</span></h1>
            <div className="row">
                <div className="col-lg-6">
                    <p className='text-light'>navin9899@gmail.com</p>
                    <form action="">
                        <input type="text" name="" id="" placeholder='Name' className='form-control rounded-0 shadow-none border border-2 border-light p-3 my-3 bg-transparent'/>
                        <input type="text" name="" id="" placeholder='Email' className='form-control rounded-0 shadow-none border border-2 border-light p-3 my-3 bg-transparent'/>
                        <textarea name="" id="" className='form-control rounded-0 border border-2 border-light shadow-none bg-transparent' rows={10} placeholder='Message...'></textarea>
                        <button className='btn btn-outline-light rounded-0 mt-4 px-5 fs-5'>Submit</button>
                    </form>
                </div>
                <div className="col-lg-6">
                    <img src="./image/bg.png" alt="" className='w-100 h-100 object-fit-cover border border-2 border-light '/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
