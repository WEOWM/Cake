import React from 'react'
import './Produtscart.css'
import Data from '../../Data/data.json'
import { useParams } from 'react-router-dom'

const Produtscart = () => {

    let { id } = useParams()

    console.log(typeof(id));



    return (
        <div className="container">

            {
                Data.filter((items)=>{

                    return items ? items.id.toString() === id : null

                }).map((items) => {
                    return (
                        <div className="row carting">
                            <div className=" right-img  col-lg-6 ">
                                <div className="card  mt-5" >
                                    <img src={items.image} className="card-img-top" alt={items.title} />
                                </div>
                            </div>
                            <div className="left-div col-lg-6 mt-5">

                                <div className="cart-title mt-3 pt-5">
                                    <h1>{items.title}</h1>
                                    <h5 className="card-title ">{items.previewDescription}</h5>
                                    <p className='card-title '>{items.detailDescription}</p>
                                    

                                </div>
                                <div classNameName="button ">

                                    <button className=' btn btn-outline-dark  ' type='button'>Add to Cart</button>
                                </div>
                            </div>


                        </div>
                    )
                })
            }


        </div>
    )
}

export default Produtscart