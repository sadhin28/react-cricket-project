
const Navbar = ({freeClaim,allimg}) => {
     
    return (
        <div className="">
            <div className="gap-5 place-items-center px-6 items-center  rounded-b-2xl navbar bg-base-300 font-bold grid lg:flex lg:justify-between md:flex md:justify-between md:items-center lg:text-2xl md:text-1xl">
               
                <img className="w-12 lg:w-20 md:w-15 mx-auto lg:mx-0 md:mx-0" src={allimg[0].logo} alt="" />
                
                <ul className="mx-auto gap-5 lg:mx-0 md:mx-0 lg:flex md:flex items-center ">
                        <div className="  items-center flex gap-5 lg:gap-6 md:gap-4 mx-auto lg:mx-0 md:mx-0 ">
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                         </div>
                        <p className="text-center"><small className="  border-2 rounded-2xl place-items-center  w-40 md:w-50 p-2 mx-auto  flex justify-center">{freeClaim} Coin <img className="w-6" src="/src/assets/653278_coin_bitcoin_cash_currency_dollar_icon.ico" alt="" /></small></p>
                </ul>
                
               
            </div>

        </div>
    );
};

export default Navbar;