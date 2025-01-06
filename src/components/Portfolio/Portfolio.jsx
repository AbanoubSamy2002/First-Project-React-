import React from 'react'
import imgportfolio1 from "../../assets/poert1.png"
import imgportfolio2 from "../../assets/port2.png"
import imgportfolio3 from "../../assets/port3.png"
export default function Portfolio() {
  return (
    <div className='content-3'>
      <div className=' mb-5  '>
        <div className='container'>
          <div>
          <h2 className='text-uppercase   mt-4 fw-bold fs-1'>
      portfolio component

      </h2>

      <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 line-1">
              
            </div>
            <i  className="fa-solid fa-star"></i>
            <div  className="line ms-3 line-2">
              </div>
              </div>
          </div>
        <div className='row g-5   '>
        <div className="col-lg-4 col-md-6 ">
          <div className='position-relative overflow-hidden rounded-3'>
          <img className="w-100 rounded-3" src={imgportfolio1} alt="" />

<div className="layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">
  <i className="text-white fa-solid fa-plus fa-6x"></i>
</div>
          </div>
          </div>  

            <div className='col-lg-4 col-md-6 '>
              <div className='position-relative overflow-hidden rounded-3'>
              <img className='w-100 rounded-3' src={imgportfolio2} alt="" />
                  <div className="layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">
    <i className="text-white fa-solid fa-plus fa-6x"></i>
  </div>
              </div>
                 
            </div> 
            <div className='col-lg-4 col-md-6 '>
              <div className='position-relative overflow-hidden rounded-3'>
              <img className='w-100 rounded-3' src={imgportfolio3} alt="" />
                  <div className="layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">
    <i className="text-white fa-solid fa-plus fa-6x"></i>
  </div>
              </div>
                 
            </div> 
            <div className='col-lg-4 col-md-6'>
              <div className='position-relative overflow-hidden rounded-3'>
              <img className='w-100 rounded-3' src={imgportfolio1} alt="" />
                  <div className="layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">
    <i className="text-white fa-solid fa-plus fa-6x"></i>
  </div>
              </div>
                 
            </div> 
            <div className='col-lg-4 col-md-6'>
              <div className='position-relative overflow-hidden rounded-3'>
              <img className='w-100 rounded-3' src={imgportfolio2} alt="" />
                  <div className="layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">
    <i className="text-white fa-solid fa-plus fa-6x"></i>
  </div>
              </div>
                 
            </div> 
            <div className='col-lg-4 col-md-6 '>
              <div className='position-relative overflow-hidden rounded-3'>
              <img className='w-100 rounded-3' src={imgportfolio3} alt="" />
                  <div className="layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">
    <i className="text-white fa-solid fa-plus fa-6x"></i>
  </div>
              </div>
                  
            </div> 
        </div>
        </div>
      
      </div>
     



    </div>
  )
}
