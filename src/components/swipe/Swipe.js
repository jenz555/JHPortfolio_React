import React from 'react'
import { Link } from 'react-router'

var SwipeToRevealOptions = require('react-swipe-to-reveal-options');

 var Swipe = React.createClass({
      displayName: "Swipe",
      render() {
        var items = [
          {
            leftOptions: [{
              label: 'Trash',
              class: 'trash',
            }],
            rightOptions: [{
              label: 'Move',
              class: 'move',
            },{
              label: 'Archive',
              class: 'archive',
            
            }],
            content: "Mail from Mathieu",
            callActionWhenSwipingFarLeft: true,
            callActionWhenSwipingFarRight: true
          },
          {
            leftOptions: [{
              label: 'Trash',
              class: 'trash',
            }],
            rightOptions: [{
              label: 'Move',
              class: 'move',
              
            },{
              label: 'Archive',
              class: 'archive',
            }],
            content: "Mail from Arseny",
            callActionWhenSwipingFarRight: true,
            callActionWhenSwipingFarLeft: false
          },
          {
            leftOptions: [{
              label: 'Trash',
              class: 'trash',
            }],
            rightOptions: [{
              label: 'Move',
              class: 'move',
            },{
              label: 'Archive',
              class: 'archive',
            }],
            content: "Mail from Bruno",
            callActionWhenSwipingFarRight: false,
            callActionWhenSwipingFarLeft: false
          }
        ]; 
        
          return (
          React.createElement("div", null,
          items.map(function(item, i) {
            return (
             
                
                <SwipeToRevealOptions key={i}
                 leftOptions={item.leftOptions}
              rightOptions={item.rightOptions}
              callActionWhenSwipingFarRight={item.callActionWhenSwipingFarRight}
              callActionWhenSwipingFarLeft={item.callActionWhenSwipingFarLeft}>
{item.content}
                </SwipeToRevealOptions>
             
            );
          })
          )
        );
      },

});
export default Swipe