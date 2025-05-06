import './HeroSection.css'
const HeroSection = () => {
    return (
        <div className=''>
            <div className=' rounded-4xl bg-blend-color-burn lg:h-100 md:h-80 h-60' id="heroSection">
                <img className='w-40 lg:w-60 md:w-50 p-5 mx-auto' src="/src/assets/banner-main.png" alt="" />
            </div>
        </div>
    );
};

export default HeroSection;