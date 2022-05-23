import React, { useEffect, useState } from 'react';
import ReviewRow from './ReviewRow';

const Review = () => {
    const [reviews , setReview] = useState([])
     useEffect(()=>{
          fetch('http://localhost:5000/review')
          .then(res=>res.json())
          .then(data=>setReview(data))
     } ,[])
    return (
     <section className=" lg:mb-28 mb-11">
         <div className="container mx-auto">
             <h1 className="text-center font-bold lg:text-5xl
              text-2xl text-accent">Customer Review</h1>
              <p className='text-center text-secondary text-xl pt-2 mt-5 mb-11'>Here you can see our customer review</p>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                  {
                    reviews.map(review=><ReviewRow 
                        key={review._id}
                        review={review}
                    ></ReviewRow>)
                  }
              </div>
         </div>
         
     </section>
    );
};

export default Review;