
const Navbar = () => {
    return (
        <div className="">
            <div class="sticky  navbar bg-base-300 font-bold flex justify-between px-10 text-sm lg:text-1xl md:text-1xl">
               
                <img className="w-12 lg:w-20 md:w-15" src="/src/assets/logo.png" alt="" />
                
                <ul className="flex gap-3 lg:gap-6 md:gap-4 ">
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                        <li className="flex">{0} coin <img
                        className="w-6"
                         src="/src/assets/653278_coin_bitcoin_cash_currency_dollar_icon.ico" alt="" /></li>
                </ul>
               
            </div>

        </div>
    );
};

export default Navbar;