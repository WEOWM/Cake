import React from 'react'
import './Card.css'
import Data from './../../Data/data.json'
import { NavLink } from 'react-router-dom'

const Card = () => {
    return (
        <div className='container'>
            <div className="row"  >
                {

                    Data.map((iteam, index) => {

                        return (

                            <div className="col-md-3 p-2 mt-4" key={index}>


                                <div className=" crd shadow-sm card  h-100 text-center">
                                    <img src={iteam.image} className="card-img-top" alt="..." height="200px" />
                                    <div className="card-body">
                                        <h5 className="card-title ">{iteam.previewDescription.substring(0, 12)}...</h5>
                                        <p className="card-text lead fw-bolder">{iteam.Price}</p>

                                        <NavLink to={`/product/${iteam.id}`} className="btn btn-outline-dark ">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>





                        )
                    }



                    )
                }
            </div>

        </div>
    )
}

export default Card
