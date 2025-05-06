import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Player = ({ allplayers,handelSelectedPlayers }) => {
    const {name,image_url,about,price}=(allplayers)
    return (
        <div>
           
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={image_url}
                        alt="Shoes"
                        className='w-full h-70 object-fill'
                         />
                </figure>
                <div className="card-body text-sm">
                    <h2 className="card-title">
                    <FontAwesomeIcon icon={faUser} />{name}
                        <div className="badge badge-secondary">Price: {price}</div>
                    </h2>
                    <p>{about}</p>
                    <div className="card-actions justify-end">
                       
                        <button onClick={()=>handelSelectedPlayers(allplayers)} className="btn badge badge-outline p-5">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;