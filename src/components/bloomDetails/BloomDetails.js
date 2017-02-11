import React from 'react'
import { Link } from 'react-router'
import Masthead from '../masthead/Masthead'
import Home from '../home/Home'
import Swipe from '../swipe/Swipe'




var BloomDetails = React.createClass({

  getInitialState: function(){
     return {
       initialItems: ["Client: Morton Arboretum",

         "Objective: Deliver an elegant invitation suite and supplemental materials based on a selected theme, \"Brilliance in Bloom\". Concept, fold and printing technique has to be vastly different from previous year's invitations. Invite suite included, A7 envelope, RSVP card/envelope, and raffle card.",
         "   Design Concept: Played off the Brilliance In Bloom theme by selecting neon inks, spot varnish and created custom burst diecut for added effect. Roll-fold design included hydrangea flowers which were colorized in separate channels with neon inks. Additional items were secured with two half moon diecuts. "
         
       ],

       items: []
     }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },

  render: function() {
    return (
      <div>

      <Masthead></Masthead>

      <div className="wrapper">
            <Link to="/">
            BACK
            </Link>
    
      <div className="main">
           <Swipe></Swipe>
            <div className="main--description main--description--bkg">
              <div className="arrow__bkg">
              <div className="arrow"><img src="../images/arrow.svg" /></div>
        </div>
      <List items={this.state.items}/>
      </div>
            <img src="../images/bib_ver2_cover.png" className="img img--fill"/>
            </div>

            <div className="main--description--small"><List items={this.state.items}/></div>
      </div>

     
      <br/>
   
      <div className="wrapper"> 
            <img src="../images/bib_ver2-1.png" className="img img--fill"/>
                <br/>
            <img src="../images/bib_ver2-2.png" className="img img--fill"/>
                <br/>

            <div className="flexbox__container flexbox__align-top">
              <div className="flexbox__item">
                   <img src="../images/bib_ver2-3.png" className="img img--fill"/>

             </div>
            <div className="flexbox__item  flexbox__align-top">
            <img src="../images/bib_ver2-4.png" className="img img--fill"/>
            </div>

      </div>   

      </div>
    

      </div>



      );
      },
});
var List = React.createClass({
  render: function(){
    return (

      <ul className="p0 vList vList--piped m5">
      {
        this.props.items.map(function(item) {
          return <li key={item}>{item}</li>
        })
       }
      </ul>
    )  
  }
});


export default BloomDetails