
const Navbar = () => {
    return (
        <div className="">
            <div class=" items-center sticky top-0 rounded-b-3xl navbar bg-base-300 font-bold grid lg:flex lg:justify-between md:flex md:justify-between md:items-center px-10 text-sm lg:text-2xl md:text-1xl">
               
                <img className="w-12 lg:w-20 md:w-15 mx-auto lg:mx-0 md:mx-0" src="/src/assets/logo.png" alt="" />
                
                <ul className="flex gap-3 lg:gap-6 md:gap-4 mx-auto lg:mx-0 md:mx-0 ">
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                        <li className="flex border px-1 border-blue-700 rounded-3xl">{600} coin <img
                        className="w-6"
                         src="/src/assets/653278_coin_bitcoin_cash_currency_dollar_icon.ico" alt="" /></li>
                </ul>
               
            </div>

        </div>
    );
};

export default Navbar;