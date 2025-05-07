
import AllPlayers from "../AllPlayers/AllPlayers";
import SelectPlayer from "../SelectPlayer/SelectPlayer";

const SelectedPlayers = ({selectedPlayer,handelDelatePlayer,handleisActive,isactive}) => {

    return (
        <div className="">
           
            <div className="grid gap-10">
                    {
                       isactive.available?'':selectedPlayer.map(selectPlayer=><SelectPlayer key={selectPlayer.id} handelDelatePlayer={handelDelatePlayer} selectPlayer={selectPlayer} ></SelectPlayer>)
                    }
                   <div className="">
                     {
                         selectedPlayer.length == false ?'':<button onClick={()=>handleisActive('available')} className={`${isactive.available?'btn':'active btn'} font-black p-5 rounded-tr-2xl rounded-br-2xl`}>Add More Player</button>
                     }
                      
                  </div>
            </div>
             
            
        </div>
    );
};

export default SelectedPlayers;