import React from 'react'
import Banner from './Components/Banner/Banner'
import Card from './Components/Card/Card'
import Footer from './Components/Footer/Footer'
import Header from './Components/mainhead/Header'
import Smallhead from './Components/SmallHeader/Smallhead'



function Home() {
  return (
    <div>
      <Smallhead />
      <Header />
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