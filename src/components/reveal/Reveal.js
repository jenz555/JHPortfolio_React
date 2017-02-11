import React from 'react'
import { Link } from 'react-router'
import ReactSwipe from 'react-swipe';

var Slider = require('react-slick');

var Reveal = React.createClass({
   
    render: function() {
    
     
      return (
      <div>
       <ReactSwipe className="reveal" swipeOptions={{continuous: true}}>
                <div>PANE 1</div>
                <div>PANE 2</div>
                <div>PANE 3</div>
            </ReactSwipe>
           </div>
      )
    }
})
export default Reveal