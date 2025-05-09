
import './HeroSection.css'
const HeroSection = ({handelfreeClaim,heroPhoto}) => {
    const [heroimg]=heroPhoto
    return (
        <div id='hero' className='mt-10 text-center bg-base-100 '>
            <div className='flex  flex-col justify-center lg:max-w-330 md:max-w-200 mx-auto rounded-xl bg-blend-color-burn lg:h-100 md:h-80 h-60' id="heroSection">
                <img className='w-40 lg:w-60 md:w-50 p-5 mx-auto' src={heroimg.heroimg} alt="" />
                <h1 className='font-bold lg:text-2xl md:text-xl'><small>BPL-DREAM 11</small></h1>
            
                <button onClick={handelfreeClaim} className=' p-6 font-black rounded-xl btn mb-6 hover:bg-lime-200 mt-4  mx-auto text-center bg-[#E7FE29]'>Claim Free Credit</button>
               
            </div>
           
        </div>
    );
};

export default HeroSection;