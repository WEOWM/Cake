import React from 'react'
import { NavLink } from 'react-router-dom'
import './Head.css'


const Header = () => {
    return (
        <div>
            <nav className='nav2 ' >
                <h4 className='ms-4'>Cake Boy</h4>
                <div className="align">

                    <ul className="nav  gap-5  ">
                        <li className="nav-item ">
                            <NavLink className="nav-link hvr " aria-current="page" to="wwwww">Home</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link  hvr" aria-current="page" to="wwwww">Profile</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link hvr " to="wwwww">Delivary</NavLink>
                        </li>
                        <li className="nav-item  ">
                            <NavLink className="nav-link hvr " to="wwwww">Cart</NavLink>
                        </li>

                    </ul>
                    <form className='d-flex' >
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Header
