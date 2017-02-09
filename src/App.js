import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Masthead from './components/masthead/Masthead'
import Home from './components/home/Home'
import Bloom from './components/bloom/Bloom'

import BloomDetails from './components/bloomDetails/BloomDetails'
import Provena from './components/provena/Provena'
import Logos from './components/logos/Logos'
import Carousel from './components/carousel/Carousel'
import WalkInWoods from './components/walkInWoods/WalkInWoods'
import RoadSmart from './components/roadSmart/RoadSmart'
import Footer from './components/footer/Footer'




class App extends React.Component {
  render() {
    return (
      <Router history={ hashHistory } onUpdate={() => window.scrollTo(0, 0)} >
        <Route path="/" component={ Home }>Home</Route>
         
        <Route path="/masthead" component={ Masthead }>Masthead</Route>
        <Route path="/bloom" component={ Bloom }>Bloom</Route>
          <Route path="/bloomDetails" component={ BloomDetails }>BloomDetails</Route>
        <Route path="/provena" component={ Provena }>Provena</Route>
        <Route path="/logos" component={ Logos }>Logos</Route>
        <Route path="/carousel" component={ Carousel }>Carousel</Route>
        <Route path="/walkInWoods" component={ WalkInWoods }>WalkInWoods</Route>
        <Route path="/roadSmart" component={ RoadSmart }>RoadSmart</Route>


        <Route path="/footer" component={ Footer }>Footer</Route>
    

      </Router>
    )
  }
}

export default App