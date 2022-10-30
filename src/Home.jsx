import React from 'react'
import Banner from './Components/Banner/Banner'
import Card from './Components/Card/Card'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'




function Home() {
  return (
    <div>
     <Header/>
      <Banner />
      <div className="container">
        <div className="row">
          <Card />
        </div>
      </div>
      <Footer/> 

    </div>
  )
}

export default Home