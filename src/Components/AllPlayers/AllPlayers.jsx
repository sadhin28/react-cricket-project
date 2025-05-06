import Player from "../Player/Player";

const AllPlayers = ({allplayers}) => {
    
    return (
        <div className="grid justify-center md:items-center  lg:grid-cols-3  md:grid-cols-2 md:justify-between gap-10 lg:mx-auto md:mx-auto ">
            {
                allplayers.map(players=><Player key={players.id} allplayers={players}></Player>)
            }
        </div>
    );
};

export default AllPlayers;