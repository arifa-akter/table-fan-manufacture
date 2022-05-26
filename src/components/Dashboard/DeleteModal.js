import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({deleteModal , setDeleteModal ,refetch}) => {
    const { _id ,name} = deleteModal
    const handleProduct =(id)=>{
        console.log(id)
        fetch(`https://vast-springs-97654.herokuapp.com/tools/${_id}` , {
          method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount){
            toast.success(`${name} product delete`)
            setDeleteModal(null)
            refetch()
          }
        })
        
     }
    return (
       <div>
       {/* <!-- Put this part before </body> tag --> */}
         <input type="checkbox" id="delete-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <h3 className="font-bold text-lg text-accent">are you sure you want to delete this product <span className ="text-red-600">{name}</span></h3>
        <p className="py-4 text-secondary">if you delete you can not find it. you also add a product</p>
        <div className="modal-action">
        <button className="btn btn-xs bg-accent" onClick={()=>handleProduct(_id)}>Delete</button>
         <label for="delete-modal" className="btn btn-xs bg-red-600">cancel</label>
        </div>
      </div>
      </div>
     </div>
    );
};

export default DeleteModal;