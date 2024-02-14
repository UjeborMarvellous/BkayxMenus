import React from 'react'
// import WelcomeScreen from './WelcomeScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu'
import Protein from './Components/Protein'
import Rice from './Components/Rice'
import Soup from './Components/Soup'
import Swallow from './Components/Swallow'
import Cake from './Components/Cakes'
import IceCream from './Components/Ice-Cream'
import Drinks from './Components/Drinks'
import Toppings from './Components/Toppings'
import Snacks from './Components/Snacks'
import WelcomeScreen from './Components/WelcomeScreen'
// import WelcomeScreen from './Components/WelcomeScreen'

function App() {

  return (
    <>
      <div className="all bg-black text-white h-screen">
        <Router>
          {/* <WelcomeScreen /> */}
          <Routes>
            <Route path='/' element={<WelcomeScreen />} />
            <Route path='/Menu' element={<Menu />} />
            <Route path='/Protein' element={<Protein />} />
            <Route path='/Rice' element={<Rice />} />
            <Route path='/Soup' element={<Soup />} />
            <Route path='/Swallow' element={<Swallow />} />
            <Route path='/Snacks' element={<Snacks />} />
            <Route path='/Cakes' element={<Cake />} />
            <Route path='/Ice-Cream' element={<IceCream />} />
            <Route path='/Drinks' element={<Drinks />} />
            <Route path='/Toppings' element={<Toppings />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
