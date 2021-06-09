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
    <div>
      <Monday current={current} />
      <Tuesday current={current} />
      <Wednesday current={current} />
      <Thursday current={current} />
      <Friday current={current} />
    </div>
  );

}

export default App;
