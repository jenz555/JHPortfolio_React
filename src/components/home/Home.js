import React from 'react'
import { Link } from 'react-router'
import Masthead from '../masthead/Masthead'
import Carousel from '../carousel/Carousel'
import Footer from '../footer/Footer'




var Home = React.createClass({
   
    render: function() {
    
     
      return (
        <div>
            <Masthead></Masthead>  
        <div className="wrapper--body">
            <Carousel></Carousel>
        </div>

    <Footer></Footer>
        </div>
   
        
      )
    }
})

export default Home 