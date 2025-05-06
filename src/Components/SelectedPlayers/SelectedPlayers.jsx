import SelectPlayer from "../SelectPlayer/SelectPlayer";

const SelectedPlayers = ({selectedPlayer,handelDelatePlayer}) => {
  
    return (
        <div className="">
           
            <div className="grid grid-cols-1 gap-10">
                    {
                        selectedPlayer.map(selectPlayer=><SelectPlayer key={selectPlayer.id} handelDelatePlayer={handelDelatePlayer} selectPlayer={selectPlayer} ></SelectPlayer>)
                    }
            </div>
        </div>
    );
};

export default SelectedPlayers;