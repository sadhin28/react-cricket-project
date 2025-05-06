import { useEffect, useState } from 'react'
import './App.css'
import HeroSection from './Components/HeroSection/HeroSection'
import Navbar from './Components/Navbar/Navbar'

function App() {

    //fetch allimg json file
    const [allimg,setAllimg]=useState(arguments);
    const [coins,setCoins]=useState(arguments);
    const [heroPhoto,setheroPhoto]=useState(arguments);
    //fetch all img
    useEffect(()=>{
       fetch('Allimg.json')
       .then(res=>res.json())
       .then(images=>{
          setAllimg(images)
         
       })
    },[])
    //fetch coind img
   useEffect(()=>{
     fetch('Coin.json')
     .then(res=>res.json())
     .then(coin=>{
        setCoins(coin)
     })
   },[])
 //fetch hero img
 useEffect(()=>{
    fetch('HreoPhoto.json')
    .then(res=>res.json())
    .then(heroimg=>{
      setheroPhoto(heroimg)
    })
 },[])
  //increment Claim free credit
  const [freeClaim,setfreeClaim]=useState(0)

  const handelfreeClaim=()=>{
    const newfreeclaim=freeClaim + 50000;
    setfreeClaim(newfreeclaim)
  }

  return (
    <div className='max-w-11/12 mx-auto'>
       <Navbar allimg={allimg} coins={coins} freeClaim={freeClaim}></Navbar>
       <div className=''>
          <HeroSection heroPhoto={heroPhoto}  handelfreeClaim={handelfreeClaim}></HeroSection>
       </div>
    </div>
  )
}

export default App
