import React from 'react'

export default function Footer() {
  return (
    <>
        
        <footer>
          <div className='bg w-100'>
            <div className='container p-5'>
                <div className='row align-items-center text-white text-center card-body'>
                   
                   <div className='col-md-4 mb-5'>
                     <h3 className='text-uppercase'>Location</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                   </div>
                   <div className='col-md-4 mb-5'>
                     <h3 className='text-uppercase'>around the web</h3>
                     <ul className="social-icons d-flex justify-content-center list-unstyled">
      <li className="icon-circle">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li className="icon-circle">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li className="icon-circle">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li className="icon-circle">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </li>
    </ul>
                   </div>
                   <div className='col-md-4 mb-5'>
                     <h2 className='text-uppercase'>About Freelancer</h2>
                     <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                   </div>
                
                </div>
            </div>
            <div className='container-fluid' style={{backgroundColor:'rgb(26, 37, 47)'}}>
                <p className='m-0 p-4 text-center text-white'>Copyright &copy; Your Website 2021</p>
            </div>
          </div>
        </footer>
        
    </>
  )
}
