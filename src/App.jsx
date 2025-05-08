import { useEffect, useState } from 'react'
import './App.css'
import HeroSection from './Components/HeroSection/HeroSection'
import Navbar from './Components/Navbar/Navbar'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers';
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';
import Subscribe from './Components/SubscribeSection/Subscribe';
function App() {

  //fetch allimg json file
  const [allimg, setAllimg] = useState(arguments);
  const [coins, setCoins] = useState(arguments);
  const [heroPhoto, setheroPhoto] = useState(arguments);
  //fetch all img
  useEffect(() => {
    fetch('Allimg.json')
      .then(res => res.json())
      .then(images => {
        setAllimg(images)

      })
  }, [])
  //fetch coind img
  useEffect(() => {
    fetch('Coin.json')
      .then(res => res.json())
      .then(coin => {
        setCoins(coin)
      })
  }, [])
  //fetch hero img
  useEffect(() => {
    fetch('HreoPhoto.json')
      .then(res => res.json())
      .then(heroimg => {
        setheroPhoto(heroimg)
      })
  }, [])
  //increment Claim free credit
  const [freeClaim, setfreeClaim] = useState(0)
  const handelfreeClaim = () => {

    const newfreeclaim = freeClaim + 30000;
    
    setfreeClaim(newfreeclaim)
    toast.success("Claim Successfull")
  }


  //button goggle 
  const [isactive, setisactive] = useState({
    available: true,
    Status: 'available'
  })
 
  //handel button 
  const handleisActive = (Status) => {
    if (Status == 'available') {
      setisactive({
        available: true,
        Status: 'available'
      })
    } else {
      setisactive({
        available: false,
        Status: 'selected'
      })
    }
  }
  //Allplayers
  const [allplayers, setallplayers] = useState([])

  useEffect(() => {
    fetch('AllPlayers.json')
      .then(res => res.json())
      .then(players => {
        setallplayers(players)
      })
  }, [])
  //handel selected player
  const handelDelatePlayer = (id, price) => {
    setfreeClaim(freeClaim + price)
    const newPlayer = selectedPlayer.filter((p) => p.id !== id);
    setSelectedPlayer(newPlayer)
  }


  const [selectedPlayer, setSelectedPlayer] = useState([]);


  const handelSelectedPlayers = (Player) => {

   
    const isexist = selectedPlayer.find(p => p.id == Player.id);

    if (isexist) {
      toast.error('player already selected');
    } else {
      if (freeClaim == 0 && freeClaim !== isNaN ) {
        toast.error("Claim free Credit Then Chooes Players")
      }
      else {
        if(Player.price <= freeClaim){
          if (selectedPlayer.length <= 5) {
            const newselectedPlayer = [...selectedPlayer, Player];
            setfreeClaim(freeClaim - Player.price)
            setSelectedPlayer(newselectedPlayer)
          } else {
            toast.error('6 player already selected')
          }
        }else{
          toast.error("You do not have enough coins. Please collect free coins")
        }

        
      }



    }


  }
//handel subscrive local store delate


  //handel subscribe section

 const handelSubscribe =()=>{
   
   const data = document.getElementById('inputValue').value

   if(data !== 0 && isNaN(data)){
    
    localStorage.setItem('email',data)
    
    document.getElementById('inputValue').value=''
    toast.success('Thank You for Subscribe')
     
   }else{
    toast.error('Place enter valid Email')
     
   }
 }
  return (
    <div className='max-w-11/12 mx-auto'>

       <div className='sticky top-0 z-60'>
       <Navbar allimg={allimg} coins={coins} freeClaim={freeClaim}></Navbar>
       </div>
      <HeroSection heroPhoto={heroPhoto} handelfreeClaim={handelfreeClaim}></HeroSection>
      <AvailablePlayers  handelDelatePlayer={handelDelatePlayer} selectedPlayer={selectedPlayer} handelSelectedPlayers={handelSelectedPlayers} allplayers={allplayers} isactive={isactive} handleisActive={handleisActive} ></AvailablePlayers>
      <div>
           <Subscribe   handelSubscribe={handelSubscribe}></Subscribe>
      </div>
      <Footer coins={coins}></Footer>
      
      
      
      <ToastContainer position='top-center'autoClose={1500}/>
    </div>
  
  )
}

export default App
