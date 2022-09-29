import React from 'react'
import Smallhead from './Components/SmallHeader/Smallhead'
import Header from './Components/Main.Head/Header'
import Banner from './Components/Banner/Banner'
import Card from './Components/Card/Card'
import Footer from './Components/Footer/Footer'

const App = () => {
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

export default App
