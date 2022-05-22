import React from 'react';
import banner from '../../images/banner.jpg'
const OfferPart = () => {
    return (
        <section className='lg:mb-28 mt-11 bg-[#020225ee] pt-11 pb-11'>
            <div className="container mx-auto">
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 items-center'>
                  <div>
                      <img src={banner} alt="" />
                  </div>
                  <div>
                      <p className='text-white  font-bold text-3xl pb-6'>Our Offer</p>
                      <p className='text-white  font-bold pb-6'>
                          here show some discount for manufacture part you can find 
                          more product to click in see more button . you can buy a 50 pice or other 
                          you can discount .please check see more link and explore of product . 
                      </p>
                      <h1 className='text-white'>plastic fan body : <span className='text-secondary pl-5'>100 pice of 20% Discount</span></h1>
                      <h1 className='text-white'> motor fan: <span className='text-secondary pl-5'>50 pice of 10% Discount</span></h1>
                      <h1 className='text-white'>plastic fan blades : <span className='text-secondary pl-5'>40 pice of 10% Discount</span></h1>
                      <h1 className='text-white'>stand table : <span className='text-secondary pl-5'>50 pice of 20% Discount</span></h1>
                      <h1 className='text-white'>plastic fan body : <span className='text-secondary pl-5'>100 pice of 20% Discount</span></h1>
                      <p className='text-secondary pt-6'>See More <i className="fa fa-arrow-right text-secondary" aria-hidden="true"></i></p>
                  </div>
              </div>
            </div>
        </section>
    );
};

export default OfferPart;