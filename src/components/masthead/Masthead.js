import React from 'react'
import { Link } from 'react-router'

var Masthead = React.createClass({
   
    render: function() {
    
     
      return (
      
       <div className="flexbox__container flexbox__container--borderBottom">
                <div className="flexbox__item">
              <div className="jh_logo--wrapper">
                    <img src="../images/jh_logo.svg" className="jh_logo"/>
                </div>   
                </div>
             </div>
           
      )
    }
})

export default Masthead