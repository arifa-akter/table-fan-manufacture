import React from 'react';
import './ServiceTime.css'
const ServiceTime = () => {
    return (
      <section className='mb-28'>
            <h1 className="text-center font-bold lg:text-5xl
              text-2xl text-accent">Service Timing</h1>
              <p className='text-center text-secondary text-xl pt-2 mb-11'>Here you can see our service timing</p>
           <section className=' service-banner'>
          <div className="container mx-auto">
   
            <div className='overlay-text-service'>
                 <div className='grid grid-cols-1 lg:grid-cols-2'>
                     <div className='p-5'>
                      <p className='text-center mt-5 text-white  mb-5  text-3xl font-bold'> service time</p>
                      <ul className='text-center text-white'>
                          <li>mon 8am - 11pm</li>
                          <li>mon 8am - 11pm</li>
                          <li>mon 8am - 11pm</li>
                          <li>mon 8am - 11pm</li>
                          <li>mon 8am - 11pm</li>
                          <li>mon 8am - 11pm</li>
                          <li>mon 8am - 11pm</li>
                      </ul>
                     </div>
                     <div className='p-5 lg:block hidden'>
                     <p className='text-center mt-5 mb-5 text-white text-3xl font-bold'>product Reached out</p>
                     <ul className='text-center text-white'>
                          <li>mon 8am - 11pm</li>
                          <li>mon 8am - 11pm</li>
                          <li>mon 8am - 11pm</li>
                          <li>mon 8am - 11pm</li>
                          <li>mon 8am - 11pm</li>
                          <li>mon 8am - 11pm</li>
                          <li>mon 8am - 11pm</li>
                      </ul>
                     {/* <p className=' text-white font-bold mt-11'>
                      your product reach out and you can also Lorem, ipsum dolor sit
                       amet consectetur adipisicing elit. Quasi maiores maxime quo 
                       quia ipsam nam labore, beatae et ipsa, 
                       magni amet ullam veniam perspiciatis
                       aspernatur, hic numquam sit odio placeat.
                     </p> */}
                     </div>
                 </div>
            </div>

          </div>
       </section>
      </section>
    );
};

export default ServiceTime;