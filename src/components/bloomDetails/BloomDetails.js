import React from 'react'
import { Link } from 'react-router'
import Masthead from '../masthead/Masthead'
import Home from '../home/Home'
import Reveal from '../reveal/Reveal'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6


var BloomDetails = React.createClass({


  getInitialState: function(){
     return {
       title: ["Dinner Party Invitation"],
       description: [   "Deliver an elegant invitation suite and supplemental materials based on a selected theme, \"Brilliance in Bloom\". Concept, fold and printing technique has to be vastly different from previous year's invitations. Invite suite included, A7 envelope, RSVP card/envelope, and raffle card.",
         "Played off the Brilliance In Bloom theme by selecting neon inks, spot varnish and created custom burst diecut for added effect. Roll-fold design included hydrangea flowers which were colorized in separate channels with neon inks. Additional items were secured with two half moon diecuts. "    ],
     }
  },
  componentWillMount: function(){
    this.setState({items: this.state.title})
    this.setState({items: this.state.description})
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

        <div className="main--title">
          <List items={this.state.title}/>
          </div>

           <div className="main--description">
            <div className="main--description--text">
          <List items={this.state.description}/>
          </div>
          </div>

           
     
                 
            </div>

            <div className="main--description--small"><List items={this.state.description}/></div>
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

      <ul className="p0 vList vList--piped">
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