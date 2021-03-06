import React from 'react';
import { useNavigate} from 'react-router-dom';
const Tools = ({fanTool}) => {
    const {_id ,image ,name ,description,perUnitPrice,minimumQuantity,availableQuantity} =fanTool
    const navigate = useNavigate()
    const handlePurchase =(id)=>{
      navigate(`/purchase/${id}`)
    }
    return (
        <div className="card bg-base-100 shadow-xl m-3">
        <figure className="px-10 pt-10">
          <img style={{width:'200px' ,height:'200px'}}src={image}alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-accent">{name}</h2>
          <p><span className='text-primary  font-medium'>  per Unit Price</span> ${perUnitPrice}</p>
          <p><span className='text-primary font-medium'>minimum Quantity </span>:{minimumQuantity}</p>
          <p><span className='text-primary font-medium'>available Quantity</span> :{availableQuantity}</p>
          <p><span className='text-primary font-medium'>description:</span> {description}</p>
          <div className="card-actions">
            <button className="btn btn-primary text-white" onClick={()=>handlePurchase(_id)}>Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Tools;