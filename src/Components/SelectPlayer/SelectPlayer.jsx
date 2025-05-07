
const SelectPlayer = ({selectPlayer,handelDelatePlayer}) => {
   const {name,image_url,about,id,price}=(selectPlayer)
  
    return (
        <div className="md:text-xl text-sm">
            <div class="card w-full bg-base-100 card-md shadow-sm">
                <div class="card-body">
                    <div className=" grid gap-5 md:flex md:gap-5  md:items-center">
                        <img className=" w-full h-50 mx-auto lg:mx-0 md:mx-0 lg:w-30 md:w-30 md:h-30  rounded-2xl" src={image_url} alt="" />
                        <div>
                        <h2 class="card-title">{name}</h2>
                        <p className="text-justify">{about}</p>
                        </div>
                    </div>
                    <div class="justify-end card-actions">
                        <button onClick={()=>handelDelatePlayer(id,price)} class="hover:bg-[#E7FE29] btn btn-primary bg-white text-black border-black rounded-xl">Delate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectPlayer;