import './App.css'
import HeroSection from './Components/HeroSection/HeroSection'
import Navbar from './Components/Navbar/Navbar'

function App() {
 
  return (
    <div className='max-w-11/12 mx-auto'>
       <Navbar></Navbar>
       <div className=''>
          <HeroSection></HeroSection>
       </div>
    </div>
  )
}

export default App
