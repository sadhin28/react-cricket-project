import Player from "../Player/Player";

const AllPlayers = ({allplayers}) => {
    
    return (
        <div className="grid justify-center lg:grid lg:grid-cols-3 lg:justify-between md:grid-cols-2 md:justify-between gap-10 ">
            {
                allplayers.map(players=><Player key={players.id} allplayers={players}></Player>)
            }
        </div>
    );
};

export default AllPlayers;