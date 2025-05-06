import './HeroSection.css'
const HeroSection = () => {
    return (
        <div className='rounded-3xl mt-10 text-center'>
            <div className='flex flex-col justify-center lg:max-w-330 md:max-w-200 mx-auto rounded-4xl bg-blend-color-burn lg:h-100 md:h-80 h-60' id="heroSection">
                <img className='w-40 lg:w-60 md:w-50 p-5 mx-auto' src="/src/assets/banner-main.png" alt="" />
                <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <button className='btn mb-6 hover:bg-lime-200 mt-4 w-40 mx-auto text-center font-bold bg-[#E7FE29]'>Claim Free Credit</button>
              
            </div>
        </div>
    );
};

export default HeroSection;