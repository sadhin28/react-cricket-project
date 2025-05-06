import AllPlayers from '../AllPlayers/AllPlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';
import './AvailablePlayer.css'
const AvailablePlayers = ({handleisActive,isactive,allplayers,handelSelectedPlayers,selectedPlayer}) => {
    console.log(selectedPlayer)
    return (
        <div className='mx-5' >
            <div className="  mt-10 mb-10 flex  font-black justify-between text-sm lg:text-2xl md:text-xl">
             <div>
                {
                    isactive.available?<h>Available Players</h>:<h>Selected Player ({selectedPlayer.length}/6)</h>
                }
             </div>
            <div className="join ">
                <button onClick={()=>handleisActive('available')} className={`${isactive.available?'btn active':'btn'} font-black p-5 rounded-tl-2xl rounded-bl-2xl`}>Available</button>
                <button  onClick={()=>handleisActive('selected')} className={`${isactive.available?'btn':'active btn'} font-black p-5 rounded-tr-2xl rounded-br-2xl`}>Selected ({selectedPlayer.length})</button>

            </div>
            </div>
            <div className='lg:grid md:grid'>
                {
                    isactive.available?<AllPlayers key={allplayers.id} handelSelectedPlayers={handelSelectedPlayers} allplayers={allplayers}></AllPlayers>:<SelectedPlayers  selectedPlayer={selectedPlayer}></SelectedPlayers>
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;