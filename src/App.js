import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import Home from './sections/Home';
import Monday from './sections/Monday'
import Tuesday from './sections/Tuesday'
import Wednesday from './sections/Wednesday'
import Thursday from './sections/Thursday'
import Friday from './sections/Friday'
import {useState} from 'react'
import styled from 'styled-components'
import Monav from './sections/Monav';
import Webnav from './sections/Webnav';
import $ from 'jquery';


const DesktopNav=styled.div`
  @media only screen and (max-width: 425px) {
      display: none;
    }
`

function App() {
  //update active day for mobile, and swipe
  const [current, setCurrent]= useState("/");

  window.addEventListener("hashchange", () => mobileSwipe());
  const mobileSwipe=()=>{
    let hash=window.location.hash
    setCurrent(hash)
    window.location.replace(hash)
  }

  var items = $("a");

  items.on("click",function(){
    items.removeClass("active");
    $(this).toggleClass("active");
  });
  
  return (
      <div>
        <Home/>
        <Webnav />
        <Monday current={current} />
        <Tuesday current={current} />
        <Wednesday current={current} />
        <Thursday current={current} />
        <Friday current={current} />
      </div>
  );

}

export default App;
