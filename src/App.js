import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Monday from './sections/Monday'
import Tuesday from './sections/Tuesday'
import Wednesday from './sections/Wednesday'
import Thursday from './sections/Thursday'
import Friday from './sections/Friday'
import {useState} from 'react'


function App() {
  //update active day for mobile, and swipe
  const [current, setCurrent]= useState("/");

  window.addEventListener("hashchange", () => mobileSwipe());
  const mobileSwipe=()=>{
    let hash=window.location.hash
    setCurrent(hash)
    window.location.replace(hash)
  }
  
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      <div>
        <Monday current={current} />
        <Tuesday current={current} />
        <Wednesday current={current} />
        <Thursday current={current} />
        <Friday current={current} />
      </div>
    </>
  );

}

export default App;
