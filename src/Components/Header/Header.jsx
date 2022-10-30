import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Heade = () => {
  return (
    <div className="container-fluid ">
      <div className='row align10'>

        <div className="logo ">
          <h3 className='fw-bold m-0 ms-3' >Cake World</h3>
        </div>

        <div className="nav-bar">
          <li>
            <NavLink to={'/home'}>Home</NavLink>
          </li>

          <li>
            <NavLink to={'/about'} >About</NavLink>
          </li>

          <li>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>

          <li>
            <NavLink to={'/cart'}>Cart</NavLink>
          </li>

        </div>



      </div>
      {/* Mob-nav */}

      <div className="mob-nav">
        <div className="sub-nav">

          <div className="brand-name ">
            <h1  className=' logo-title fw-bold m-0'>cake world</h1>
          </div>
          <div className="handbuger">
            <i data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" class="fa-solid fa-bars display-2"></i>
          </div>
          <div class=" mob-offcan offcanvas offcanvas-end " tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="mob-offcan-head  offcanvas-header">
              <h5 className=' logo-title fw-bold m-0' id="offcanvasRightLabel  ">Cake World</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="mob-offcan-body offcanvas-body">
              <li >
                <NavLink to={'/home'}>Home</NavLink>
              </li>

              <li>
                <NavLink to={'/about'} >About</NavLink>
              </li>

              <li>
                <NavLink to={'/contact'}>Contact</NavLink>
              </li>

              <li>
                <NavLink to={'/cart'}>Cart</NavLink>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heade