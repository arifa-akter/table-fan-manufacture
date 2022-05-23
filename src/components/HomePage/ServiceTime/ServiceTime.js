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
                      <p className='text-center mt-5 text-accent  mb-5  text-3xl font-bold'> service time</p>
                      <ul className='text-center text-accent'>
                          <li>mon 8am - 11pm</li>
                          <li>Tus 8am - 11pm</li>
                          <li>Thur 8am - 11pm</li>
                          <li>fri 8am - 11pm</li>
                          <li>sat 8am - 11pm</li>
                          <li>wed 8am - 11pm</li>
                          <li>sun --off day</li>
                      </ul>
                     </div>
                     <div className='p-5 lg:block hidden'>
                     <p className='text-center mt-5 mb-5 text-accent text-3xl font-bold'>delivery</p>
                     <ul className='text-center text-accent'>
                       <li>mon 8am - 11pm</li>
                          <li>Tus 8am - 11pm</li>
                          <li>Thur 8am - 11pm</li>
                          <li>fri 8am - 11pm</li>
                          <li>sat 8am - 11pm</li>
                          <li>wed 8am - 11pm</li>
                          <li>sun--off day</li>
                      </ul>
                     </div>
                 </div>
            </div>

          </div>
       </section>
      </section>
    );
};

export default ServiceTime;