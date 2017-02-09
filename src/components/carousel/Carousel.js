import React from 'react'
var Slider = require('react-slick');
import { Link } from 'react-router'

import Bloom from '../bloom/Bloom'
import Provena from '../provena/Provena'
import Logos from '../logos/Logos'
import BloomDetails from '../bloomDetails/BloomDetails'
import WalkInWoods from '../walkInWoods/WalkInWoods'
import RoadSmart from '../roadSmart/RoadSmart'
import Footer from '../footer/Footer'


var Carousel = React.createClass({
    render: function () {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,

        };

        return (
        <Slider {...settings}>

            <div>
           <div className="wrapper">
             <div className="flexbox__container">
                <div className="flexbox__item">
                <div className="flexbox__header flexbox__header--design">
                 <img src="../images/designHeader.svg" className="img img--fill"/>
                </div>
                </div>
             </div>
             </div>
              <div className="flexbox__container">
                <div className="flexbox__item flexbox__item--bib">
                <Link to="/BloomDetails">
                <Bloom></Bloom>
                </Link>
               
                
                </div>
                <div className="flexbox__item flexbox__item--provena">
                <WalkInWoods></WalkInWoods>
                </div>
              </div>

               <div className="flexbox__container">
                <div className="flexbox__item flexbox__item--bib">
                <Logos></Logos>
                </div>
                <div className="flexbox__item flexbox__item--provena">
                <Provena></Provena>
                </div>
              </div>

               
            </div>
            
            <div>
            <div className="wrapper">

             <div className="flexbox__container">
                <div className="flexbox__item">
                  <div className="flexbox__header flexbox__header--develop">
                   <img src="../images/developHeader.svg" className="img img--fill"/>
                  </div>
                </div>

             </div>

             <div className="flexbox__container">
                <div className="flexbox__item">
                   <img src="../images/roadSmart.png" className="img img--fill"/>
                </div>

                 <div className="flexbox__item">
                  <RoadSmart></RoadSmart>
                </div>
                </div>


            </div>

            </div>

            

        

      </Slider>





        );
    }
});

module.exports = Carousel;