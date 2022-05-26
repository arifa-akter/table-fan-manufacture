import React from 'react';

const MyPortfolio = () => {
    return (
        
    <section className=" lg:mb-28 lg:mt-40 mt-28 mb-11">
         <div className="container mx-auto">
             <h1 className="text-center font-bold lg:text-5xl
              text-2xl text-accent mb-11">my profile</h1>
              <div className="grid grid-cols-1 shadow-xl pb-20">
                <div className='lg:w-[600px] mx-auto shadow-xl py-11 px-5'>
                    <div>
                        <p className="mb-5"><span className='font-bold lg:text-xl text-secondary pr-3'>Name:</span>
                        <span className='font-bold lg:text-xl'>Arifa akter choity</span></p>
                        <p className="mb-5"><span className='font-bold lg:text-xl text-secondary pr-3'>Email Address:</span>
                        <span className='font-bold lg:text-xl'>arifaakterchoity@gamil.com</span></p>
                        <p className="mb-5"><span className='font-bold lg:text-xl text-secondary pr-3'>Education:</span>
                        <span className='font-bold lg:text-xl'>Bsc computer science and engineering from National university</span></p>
                        <p className="mb-5"><span className='font-bold lg:text-xl text-secondary pr-3'>Technology:</span>
                        <span className='font-bold lg:text-xl'>I know about bootstrap, tailwind, react.js node.js mongodb </span></p>
                        <p className="mb-5"><span className='font-bold lg:text-xl text-secondary pr-3'>link :<span className='text-accent'>websiteLink</span>  https://wild-photographer-1fd87.web.app/</span>
                        </p>
                        <p className="mb-5"><span className='font-bold lg:text-xl text-secondary pr-3'>link :<span className='text-accent'>websiteLink</span> https://car-inventory-613c5.web.app/</span>
                        </p>
                        <p className="mb-5"><span className='font-bold lg:text-xl text-secondary pr-3'>link :<span className='text-accent'>websiteLink</span></span>
                        </p>
                    </div>
                </div>
              </div>
         </div>
         
     </section>

    );
};

export default MyPortfolio;