import React from 'react'
import poert1 from "../assets/reactimages/poert1.png";
import port2 from "../assets/reactimages/port2.png";
import port3 from "../assets/reactimages/port3.png";
export default function Portfolio() {
  return (
    <>
<div className="portfolio mt-5 mb-5 d-flex flex-column align-items-center justify-content-center">
 
 <div className="text-center mt-5 pt-4">
   <h2 className="text-uppercase mb-3 fs-1 fw-bolder">portfolio Component</h2>
   <div className="d-flex align-items-center justify-content-center mb-3">
     <div className="line me-3 bg-black"></div>
     <i className="fa-solid fa-star"></i>
     <div className="line ms-3 bg-black"></div>
   </div>
   
 </div>
   <div className='container'>
   <div className="row g-4">
    <div className="col-md-6 col-lg-4">
        <div className='rounded-3 overflow-hidden position-relative'>
              <img src={poert1} className='rounded-3 w-100' alt="الصورة 1" />
              <div class="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
              <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
        </div>
    </div>
    <div className="col-md-6 col-lg-4">
        <div className='rounded-3 overflow-hidden position-relative'>
              <img src={port2} className='rounded-3 w-100' alt="الصورة 1" />
              <div class="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
              <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
        </div>
    </div>
    <div className="col-md-6 col-lg-4">
        <div className='rounded-3 overflow-hidden position-relative'>
              <img src={port3} className='rounded-3 w-100' alt="الصورة 1" />
              <div class="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
              <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
        </div>
    </div>
    <div className="col-md-6 col-lg-4">
        <div className='rounded-3 overflow-hidden position-relative'>
              <img src={poert1} className='rounded-3 w-100' alt="الصورة 1" />
              <div class="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
              <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
        </div>
    </div>
    <div className="col-md-6 col-lg-4">
        <div className='rounded-3 overflow-hidden position-relative'>
              <img src={port2} className='rounded-3 w-100' alt="الصورة 1" />
              <div class="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
              <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
        </div>
    </div>
    <div className="col-md-6 col-lg-4">
        <div className='rounded-3 overflow-hidden position-relative'>
              <img src={port3} className='rounded-3 w-100' alt="الصورة 1" />
              <div class="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
              <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
        </div>
    </div>
</div>

 
   </div>

</div>

    </>
  )
}
