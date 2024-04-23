import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import RestaurantList from './components/RestaurantList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Header/>
     <HeroSection/>
     <RestaurantList/>
    </div>
  )
}

export default App
