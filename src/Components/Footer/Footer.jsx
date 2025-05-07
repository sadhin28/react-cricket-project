

const Footer = ({coins}) => {
   console.log(coins[0].coin)
    return (
        <div>
            
            <footer class="mt-40 bg-black text-white h-120 p-10">
             <div className="border h-50 -z-20 fixed">

             </div>
             <div className="w-20 mx-auto lg:w-30 mt-20">
                <img src={coins[0].footer_logo} alt="" />
             </div>
             
           
            </footer>
        </div>
    );
};

export default Footer;