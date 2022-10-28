import React from 'react'
import './Smallhead.css'
import { NavLink } from 'react-router-dom'



const Smallhead = () => {
    return (
        <div>
            {/* Mobile nav */}

            <div className="mob-nav">
                <div className="hand-burger">




                    <i class=" fa-solid fa-bars display-5 ms-3 mt-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"></i>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Cake Boy</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <li className="mob-nov ">
                            <NavLink className="nav-link hvr " aria-current="page" to="wwwww">Home</NavLink>
                        </li>
                        <li className="mob-nov  ">
                            <NavLink className="nav-link  hvr" aria-current="page" to="wwwww">Profile</NavLink>
                        </li>
                        <li className="mob-nov  ">
                            <NavLink className="nav-link hvr " to="wwwww">Delivary</NavLink>
                        </li>
                        <li className="mob-nov  ">
                            <NavLink className="nav-link hvr " to="wwwww">Cart</NavLink>
                        </li>
                          
                        </div>
                    </div>


                </div>
            </div>

            <div className="mob-nav-bottom  bg-white text-dark fl gap-5">
            <i class="fa-brands fa-linkedin display-2">hhh</i>
            <i class="fa-brands fa-linkedin display-2"></i>
            <i class="fa-brands fa-linkedin display-2"></i>
            <i class="fa-brands fa-linkedin display-2"></i>
            <i class="fa-brands fa-linkedin display-2"></i>
            </div>





            {/* Desktop nav */}
            <ul className="nav justify-content-end  gap-5 shadow-lg nav2">
                <li className="nav-item">
                    <NavLink className="nav-link  smal-head" aria-current="page" to="wwwww">Reviews</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link  smal-head" to="wwwww">Offer</NavLink>
                </li>
                <li className="nav-item  ">
                    <NavLink className="nav-link  smal-head" to="wwwww">Help</NavLink>
                </li>
                <li className="nav-item  ">
                    <NavLink className="nav-link  smal-head" to="wwwww">Parter with us</NavLink>
                </li>

            </ul>



        </div>
    )
}

export default Smallhead
