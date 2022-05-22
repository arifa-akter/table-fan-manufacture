import React from  'react';
import notfound from '../../images/notfound.png'
const NotFound = () => {
    return (
        <section className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 my-24'>
            <div className="flex justify-center items-center">
                <h1 className=' text-center text-5xl font-sans font-bold'>
                OOps! page not Found</h1>
            </div>
            <div className="flex justify-center items-center">
                  <img style={{width:'80%', height:'80%'}} src={notfound} alt="not found" />
            </div>
            </div>
        </section>
    );
};

export default NotFound;