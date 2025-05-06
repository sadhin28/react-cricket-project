import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Player = ({ allplayers }) => {
    const {name,image_url,rating,price}=(allplayers)
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
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                       
                        <button className="btn badge badge-outline">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;