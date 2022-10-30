import React from 'react'
 import './Card.css'
import Data from './../../Data/data.json'
import { NavLink } from 'react-router-dom'

const Card = () => {
    return (
        <>
            {

                Data.map((iteam, index) =>

                (
                    
                    <div className="col-md-3 p-2 mt-4">
                   

                            <div class=" crd shadow-sm card  h-100 text-center" key={index}>
                                <img src={iteam.image} class="card-img-top" alt="..." height="200px"/>
                                <div class="card-body">
                                    <h5 class="card-title ">{iteam.previewDescription.substring(0,12)}...</h5>
                                    <p class="card-text lead fw-bolder">{iteam.Price}</p>

                                    <NavLink to={`/product/${iteam.id}`} className="btn btn-outline-dark ">Buy Now</NavLink>
                                </div>p
                            </div>
                        </div>
                   




                )



                )
            }

        </>
    )
}

export default Card
