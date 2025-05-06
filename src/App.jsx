import { useEffect, useState } from 'react'
import './App.css'
import HeroSection from './Components/HeroSection/HeroSection'
import Navbar from './Components/Navbar/Navbar'

function App() {
  //increment Claim free credit
  const [freeClaim,setfreeClaim]=useState(0)

  const handelfreeClaim=()=>{
    const newfreeclaim=freeClaim + 50000;
    setfreeClaim(newfreeclaim)
  }
  //fetch json file
  const [allimg,setAllimg]=useState(arguments);
  useEffect(()=>{
     fetch('Allimg.json')
     .then(res=>res.json())
     .then(images=>{
        setAllimg(images)
     })
  },[])
  return (
    <div className='max-w-11/12 mx-auto'>
       <Navbar allimg={allimg} freeClaim={freeClaim}></Navbar>
       <div className=''>
          <HeroSection handelfreeClaim={handelfreeClaim}></HeroSection>
       </div>
    </div>
  )
}

export default App
