
import './Subscribe.css'

const Subscribe = ({handelSubscribe}) => {


    


    return (
        <div id='subscribe' className='border border-blue-300
          h-79  w-9/12 mx-auto rounded-2xl object-cover
           relative top-37 bg-gray-100'>
            <div className="grid gap-3 justify-center text-center my-12   font-black p-5">

                <div className='grid gap-3'>
                <h1 className='md:text-2xl'>Subscribe to our Newsletter</h1>
                <p className='md:text-2xl'>Get the latest updates and news right in your inbox!</p>
                </div>
                <div className='join mx-auto mt-'>
                
                <input
                    id='inputValue'
                    type="email"
                   
                    placeholder="Subscribe By Email@"
                    className="input rounded-tl-2xl rounded-bl-2xl md:w-100 p-8 input-bordered join-item text-black" />
                <button onClick={handelSubscribe} className="btn rounded-tr-2xl rounded-br-2xl p-8 hover:bg-[#E7FE29] border-2  join-item">Subscribe</button>
               
                </div>
               
            </div>
              
        </div>
    );
};

export default Subscribe;