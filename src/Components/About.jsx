import React from 'react'

export default function About() {
  return (
    <>

<div className="about mt-5 d-flex flex-column align-items-center justify-content-center">
 

    <div className="text-center text-white mt-5 pt-4">
      <h2 className="text-uppercase mb-3 fs-1 fw-bolder mt-5">About Component</h2>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="line me-3 bg-white"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line ms-3 bg-white"></div>
      </div>
      
    </div>

    <div className='container text-white'>
    <div className='row px-5'>
        <div className='col-md-6 ps-md-5'><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
        <div className='col-md-6 pe-md-5'><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
    </div>
    </div>
  
</div>

    </>
  )
}
