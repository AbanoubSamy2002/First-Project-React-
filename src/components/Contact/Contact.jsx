import React from 'react'

export default function Contact() {
  return(
  
  <>
  <div className='homepage-contact d-flex align-items-center flex-column content-3'>

<div className='container'>
        <div className='mt-4'>
          <h2 className='text-uppercase fs-1 fw-bolder'>
          conatct section

          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 line-1">

            </div>
            <i  className="fa-solid fa-star"></i>
            <div  className="line ms-3 line-2">
              </div>
              </div>
        </div>
        
  <form action="" className='forom p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched'>
  <label  to="userName" className="position-relative top-0 d-none ">userName : </label>
  <input  id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" data-listener-added_97c45f3c="true"></input>
  <label  to="userAge" className="position-relative top-0 d-none mt-4">userAge : </label>
  <input  id="userAge" type="text" placeholder="userAge" name="userAge" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched mt-4" data-listener-added_97c45f3c="true"></input>
  <label  to="userEmail" className="position-relative top-0 d-none mt-4">userEmail : </label>
  <input  id="userEmail" type="text" placeholder="userEmail" name="userEmail" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched mt-4" data-listener-added_97c45f3c="true"></input>
  <label  to="userPassowrd" className="position-relative top-0 d-none mt-4">userpassword : </label>
  <input  id="userPassowrd" type="text" placeholder="userPassowrd" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched mt-4" data-listener-added_97c45f3c="true"></input>

  <button className="btn btnn mt-4 text-white "> send Message </button>
  </form>
</div>
  </div>


  </>

  )
}
