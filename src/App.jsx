
import './App.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import HeroCarousel from './components/HeroCarousel'




import image1 from "./assets/image1.avif"
import image2 from "./assets/image2.avif"
import image3 from "./assets/image3.avif"

import MobileBottomNav from './components/MobileNav'
import { Home } from './pages/Home';
import MoviesPage from './pages/Movies';



const images = [
  image1,
  image2,
  image3
]


console.log(images)
function App() {

  return (
    <>



<Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage title="Movies"/>} />
        
      </Routes>
    </Router>
  
   
       

    
    </>
  

  )
}

export default App
