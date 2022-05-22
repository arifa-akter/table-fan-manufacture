import React from 'react';

const Business = () => {
    return (
       <section className='lg:mb-28 mb-11'>
        <div className="container mx-auto">
        <h1 className="text-center font-bold lg:text-5xl
              text-2xl text-accent">Business Trust Us</h1>
              <p className='text-center text-secondary text-xl pt-2 lg:mb-20 mb-11'>understand client expectation</p>
             <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                 <div className='flex justify-center'>
                 <div>
                 <i class="fa fa-flag-o text-accent text-[50px] pl-5" aria-hidden="true"></i>
                 <p className='text-[40px] text-secondary pl-2'>256</p>
                 <p className='text-accent font-bold text-xl'>countries</p>
                 </div>
                 </div>
                 <div className='flex justify-center'>
                     <div>
                     <i className="fa fa-users text-accent text-[50px]  pl-5" aria-hidden="true"></i>
                     <p className='text-[40px] text-secondary pl-2'>266+</p>
                     <p className='text-accent font-bold text-xl'>customer</p>
                     </div>
                 </div>
                 <div className='flex justify-center'>
                     <div>
                     <i className="fa fa-star-o text-accent text-[50px] pl-5" aria-hidden="true"></i>
                     <p className='text-[40px] text-secondary pl-2'>356</p>
                     <p className='text-accent font-bold text-xl'>services</p>
                     </div>

                 </div>
                 <div className='flex justify-center'>
                     <div>
                     <i class="fa fa-thumbs-up text-accent text-[50px] pl-5" aria-hidden="true"></i>
                     <p className='text-[40px] text-secondary pl-2'>200</p>
                     <p className='text-accent font-bold text-xl'>feedback</p>
                     </div>
 
                 </div>
             </div>
             <hr className='mt-11'/>
             <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 text-center mt-11 shadow-xl pb-11'>
                <div>
                <h1 className='text-accent font-bold '>have any question about us?</h1>
                 <p className='text-secondary font-bold'>Dont hesitate to contact us</p>
                </div>
                <div>
                <button className="btn gap-2 bg-primary text-white">
                  contact us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
                </div>
             </div>
        </div>
       </section>
    );
};

export default Business;