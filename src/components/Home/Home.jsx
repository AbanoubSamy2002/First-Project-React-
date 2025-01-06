import React from 'react'
import imgpage from "../../assets/avataaars.svg"
export default function Home() {
  return <>
  
  <div className='homepage d-flex align-items-center justify-content-center accordion flex-column content'>
    <div className='pt-5 img-444 '>
    <img className=' img-445' src={imgpage} alt="" />
    </div>
    <div className='text-white pt-4'>
      <h2 className='fs-1 fw-bolder text-uppercase'>
      start Framework

      </h2>
      <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 line-4">
              
            </div>
            <i  className="fa-solid fa-star"></i>
            <div  className="line ms-3 line-5">
              </div>
              </div>

      <p>
      Graphic Artist - Web Designer - Illustrator
      </p>
    </div>
    
      </div>
  </>
   
  
}
