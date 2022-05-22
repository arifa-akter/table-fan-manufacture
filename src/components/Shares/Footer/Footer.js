import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date ()
    const year = today.getFullYear()
    return (
        <section className='footer'>
           <div className="container mx-auto">
               <div className="footer-main grid lg:grid-cols-4 grid-cols-1 gap-5 mb-11">
                  <div className="pl-3 lg:pl-0 footer-item ">
                      <h1 className='text-white text-2xl font-bold'>AMC manufacture</h1>
                      <p className='text-white mt-5'>Amc manufacture company are provide you very less price product 
                      this manufacture factory make a product and it sale very less price you can search product like 
                      polypropylene for blades plastic pop fan sheet table fan cover exhaust fan blade etc .
                       this website provide for you all in one </p>
                    <div className="icon mt-5">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="footer-item pl-3 lg:pl-0 lg:flex lg:justify-center">
                  <div>
                  <h1 className='text-white text-2xl font-bold mb-5'>useful Link</h1>
                  <p className='text-white mb-2'>Blog</p>
                  <p className='text-white mb-2'>sales</p>
                  <p className='text-white mb-2'>customer review</p>
                  <p className='text-white mb-2'>certification</p>
                  </div>
                  </div>
                  <div className="footer-item pl-3 lg:pl-0 lg:flex lg:justify-center">
                  <div>
                  <h1 className='text-white text-2xl font-bold mb-5'>About</h1>
                  <p className='text-white'>
                      we are sales table fan spare part you can search mane type of part for your 
                      table fan and you can buy minimum quantity of product for your stole .this manufacture 
                      website help to connect us 
                  </p>
                
                  </div>
                  </div>
                  <div className="footer-item pl-3 lg:pl-0 lg:flex lg:justify-center">
                  <div>
                  <h1 className='text-white text-2xl font-bold mb-5'>Address</h1>
                  <p className='text-white mb-2'> <i className="fa fa-address-card text-white text-[16px] mr-2" aria-hidden="true"></i>solimulla rode 12/24</p>
                  <p className='text-white mb-2'>house number-34</p>
                  <p className='text-white mb-2'>under rupali market</p>
                  <p className='text-white mb-2'><i className="fa fa-volume-control-phone text-white text-[16px] mr-2" aria-hidden="true"></i> 12345670-99</p>
                  <p className='text-white mb-2'><i className="fa fa-envelope text-white text-[16px] mr-2" aria-hidden="true"></i>email: AMc@gmail.com</p>
                  </div>
                  </div>
               </div>
               <hr className='border-bottom-style' />
               <div className="copy-right ">
                   <h3 className='text-white mt-5 mb-5'> &copy; copyRight /{year}</h3>
               </div>
           </div>
           
        </section>
    );
};

export default Footer;