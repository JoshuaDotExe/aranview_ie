import { Route, Routes } from 'react-router-dom';
import { useRef, useCallback } from 'react';

import './App.css';

import Home from "./pages/Home"
import About from "./pages/About"
import Geopark from "./pages/Geopark"
import Sustainability from "./pages/Sustainability"
import Contact from "./pages/Contact"

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const mainRef = useRef(null);
  const scrollTimerRef = useRef(null);

  const handleScroll = useCallback(() => {
    const el = mainRef.current;
    if (!el) return;
    el.classList.add('is-scrolling');
    clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      el.classList.remove('is-scrolling');
    }, 800); // fade out 800ms after scrolling stops
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/*                                              __----~~~~~~~~~~~------___
                                  .  .   ~~//====......          __--~ ~~
                  -.            \_|//     |||\\  ~~~~~~::::... /~
               ___-==_       _-~o~  \/    |||  \\            _/~~-
       __---~~~.==~||\=_    -_--~/_-~|-   |\\   \\        _/~
   _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \      /
 .~       .~       |   \\ -_    /  /-   /   ||      \   /
/  ____  /         |     \\ ~-_/  /|- _/   .||       \ /
|~~    ~~|--~~~~--_ \     ~==-/   | \~--===~~        .\
         '         ~-|      /|    |-~\~~       __--~~
                     |-~~-_/ |    |   ~\_   _-~            /\
                          /  \     \__   \/~                \__
                      _--~ _/ | .-~~____--~-/                  ~~==.
                     ((->/~   '.|||' -_|    ~~-/ ,              . _||
                                -_     ~\      ~~---l__i__i__i--~~_/
                                _-~-__   ~)  \--______________--~~
                              //.-~~~-~_--~- |-------~~~~~~~~
                                     //.-~~~--\*/}
      <Navbar></Navbar>
      <main ref={mainRef} onScroll={handleScroll} className='flex flex-col h-full relative overflow-y-auto'>
          <div className='flex-1'>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/sustainability" element={<Sustainability/>} />
              <Route path="/geopark" element={<Geopark/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </div>
          <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
