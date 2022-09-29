import React from 'react'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval='2000'>
                        <img src="image/bbb1.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item"data-bs-interval='2000'>
                        <img src="image/n1.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item"data-bs-interval='2000'>
                        <img src="image/n2.jpg" class="d-block w-100" alt="..."/>
                    </div>
                   
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <br />
            <hr />
          
        </div>
    )
}

export default Banner