import Player from "../Player/Player";

const AllPlayers = ({allplayers,handelSelectedPlayers}) => {
    
    return (
        <div className="mb-20 grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:gap-30">
            {
                allplayers.map(players=><Player key={players.id} handelSelectedPlayers={handelSelectedPlayers} allplayers={players}></Player>)
            }
        </div>
    );
};

export default AllPlayers;