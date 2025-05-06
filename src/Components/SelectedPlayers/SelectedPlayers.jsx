import SelectPlayer from "../SelectPlayer/SelectPlayer";

const SelectedPlayers = ({selectedPlayer}) => {
  
    return (
        <div className="">
           
            <div className="grid grid-cols-1 gap-10">
                    {
                        selectedPlayer.map(selectPlayer=><SelectPlayer selectPlayer={selectPlayer} ></SelectPlayer>)
                    }
            </div>
        </div>
    );
};

export default SelectedPlayers;