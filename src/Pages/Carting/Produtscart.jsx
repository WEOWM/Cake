import React from 'react'
import './Produtscart.css'
import Data from '../../Data/data.json'

const Produtscart = () => {


    return (
        <div className="container">
            <div className="row carting">
                <div className=" right-img  col-lg-6 ">
                    <div class="card  mt-5" >
                        <img src={Data[0].image} class="card-img-top" alt={Data[0].title} />
                    </div>
                </div>
                <div className="left-div col-lg-6 mt-5">

                    <div className="cart-title mt-3 pt-5">
                        <h1>{Data[0].title}</h1>
                        <h5 class="card-title ">{Data[0].previewDescription}</h5>
                        <p  className='card-title '>{Data[0].detailDescription}</p>
                        
                    </div>
                    <div className="button ">
                    
                        <button className=' btn btn-outline-dark  ' type='button'>Add to Cart</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Produtscart