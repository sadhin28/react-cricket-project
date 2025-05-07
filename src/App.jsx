import { useEffect, useState } from 'react'
import './App.css'
import HeroSection from './Components/HeroSection/HeroSection'
import Navbar from './Components/Navbar/Navbar'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

    const newfreeclaim = freeClaim + 50000;

    setfreeClaim(newfreeclaim)

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
      toast.error('Alrady Selected This Player');
    } else {
      if (freeClaim == 0 && freeClaim < Player.price) {
        toast.error("Claim free Credit and Chooes Players")
      }
      else {
        setfreeClaim(freeClaim - Player.price)

        if (selectedPlayer.length <= 5) {

          const newselectedPlayer = [...selectedPlayer, Player];
          setSelectedPlayer(newselectedPlayer)
        } else {
          toast.error('Alrady 6 Player Are Selected')
        }
      }



    }


  }
  return (
    <div className='max-w-11/12 mx-auto'>

      <Navbar allimg={allimg} coins={coins} freeClaim={freeClaim}></Navbar>
      <HeroSection heroPhoto={heroPhoto} handelfreeClaim={handelfreeClaim}></HeroSection>
      <AvailablePlayers handelDelatePlayer={handelDelatePlayer} selectedPlayer={selectedPlayer} handelSelectedPlayers={handelSelectedPlayers} allplayers={allplayers} isactive={isactive} handleisActive={handleisActive} ></AvailablePlayers>

    </div>

  )
}

export default App
