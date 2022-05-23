import React from 'react';

const ReviewRow = ({review}) => {
    const{name , image , rating , description} = review
    return (
        <div className="card bg-base-100 shadow-xl m-2">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl bg-primary w-[80px] h-[80px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-primary">{name}</h2>
          <p> {rating === '4' &&
          <>
          <i className="fa fa-star text-secondary" aria-hidden="true"></i>
          <i className="fa fa-star text-amber-500" aria-hidden="true"></i>
          <i className="fa fa-star text-secondary" aria-hidden="true"></i>
          <i className="fa fa-star text-amber-500" aria-hidden="true"></i>
          </>
          }
          {rating === '5' &&
              <>
              <i className="fa fa-star text-secondary" aria-hidden="true"></i>
              <i className="fa fa-star text-amber-500" aria-hidden="true"></i>
              <i className="fa fa-star text-secondary" aria-hidden="true"></i>
              <i className="fa fa-star text-amber-500" aria-hidden="true"></i>
              <i className="fa fa-star text-secondary" aria-hidden="true"></i>
              </>
          }
     
          {rating === '3' &&  <>
          <i className="fa fa-star text-secondary" aria-hidden="true"></i>
          <i className="fa fa-star text-amber-500" aria-hidden="true"></i>
          <i className="fa fa-star text-secondary" aria-hidden="true"></i>
          </>}
          {rating === '2' && <>
          <i className="fa fa-star text-secondary" aria-hidden="true"></i>
          <i className="fa fa-star text-amber-500" aria-hidden="true"></i>
          </>}
          {rating === '1' &&<i className="fa fa-star text-amber-500" aria-hidden="true"></i>}
          {rating}</p>

          <p>{description}</p>
        </div>
      </div>
    );
};

export default ReviewRow;