import React from 'react'


export default function Footer() {
  return <>
 <footer id='footerpage'   className="  py-5 " >
  <div className='container'>
        <div className=' row justify-content-center align-items-center '>
              <div className='col-sm-4 text-white'>
              <h3>
                  LOCATION
                  </h3>
                  <p>
                  2215 John Daniel Drive
                  </p>
                  <p>
                  Clark, MO 65243

                  </p>
              </div>

              <div className='col-sm-4  text-white text-text-center mt-4'>
              <h3>
                AROUND THE WEB

                  </h3>
                  <i className=" icon-fotter fa-brands fa-facebook mx-1"></i>
                  <i className=" icon-fotter fa-brands  fa-twitter mx-1"></i>
                  <i className=" icon-fotter fa-brands fa-linkedin-in mx-1"></i>
                   <i class="fa-solid fa-globe icon-fotter  mx-1"></i>
              </div>

              <div className='col-sm-4  text-white text-text-center mt-4'>
              <h3>
              ABOUT FREELANCER

                  </h3>
                  <p>
                  Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                  
              </div>
        </div>
  </div>
</footer>
<div className='text-center  footer-end d-flex justify-content-center align-items-center'>
          <p className='text-white'>
          Copyright © Your Website 2021


          </p>
</div>
  
  </>
}
