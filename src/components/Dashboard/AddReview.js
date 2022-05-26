import React from 'react';
import { useForm } from  "react-hook-form";
import { toast } from 'react-toastify';
const AddReview = () => {
          // react hook form
          const { register, formState: { errors }, handleSubmit , reset } = useForm();
          const imageStorageKey = 'ec96e3625e26db4498d432b32450a895'
          const onSubmit = async data => {
              console.log(data)
              if(data.rating === '0' || data.rating < 0 || data.rating > 5){
                  toast.error('you cannot put any negative value or zero or up to 6 rating please follow this')
                  reset()
               
              }
            else{
                const image = data.image[0]
                const formData = new FormData();
                formData.append('image', image);
                fetch(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`,{
                  method:'POST' ,
                  body:formData
                })
                .then(res=>res.json())
                .then(result=>{
                    if(result.success){
                        const img = result.data.url
                        const review ={
                            name:data.name,
                            image:img,
                            rating:data.rating,
                            description:data.description
                        }
                        // insert doctor in mongo db
                        fetch('https://vast-springs-97654.herokuapp.com/review' ,{
                            method:'POST',
                            headers:{
                                'content-type':'application/json',
                            },
                            body:JSON.stringify(review)
                        })
                        .then(res=>res.json())
                        .then(inserted =>{
                            if(inserted.insertedId){
                                toast.success('Review add successfully')
                                reset()
                            }
                            else{
                                toast.error('review does not add')
                            }
                            console.log(inserted)
                        })
                       }
                    // console.log('imageBB', result)
                     })
            }
          
          };
    return (
        <section className='container mx-auto mb-11'>
        <div className="flex justify-center items-center lg:m-0 m-5">
         <div className="card w-96  shadow-xl">
          <div className="card-body">
          <h2 className="text-center font-bold text-2xl text-primary">Add product</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">Name</span>
                 </label>
                 <input 
                 type="text" 
                 placeholder="your name" 
                 className="input input-bordered w-full max-w-xs"
                 {...register("name", {
                     required:{
                       value:true,
                       message:'name required enter name'
                     }  
                   })}
                  />
                 <label className='mt-2 mb-2'>
                 { errors.name?.type === 'required' &&
                 <>
                 <i className="fa fa-exclamation-circle text-red-600 pr-2" aria-hidden="true"></i> 
                 <span class="label-text-alt text-red-600 ">{errors.name.message}</span>
                 </> 
                  }
                 </label>
              </div>
              <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">image</span>
                 </label>
                 <input 
                 type="file" 
                 placeholder="add image" 
                 className="input input-bordered w-full max-w-xs"
                 {...register("image", {
                     required:{
                       value:true,
                       message:'name required enter name'
                     }  
                   })}
                  />
                 <label className='mt-2 mb-2'>
                 { errors.name?.type === 'required' &&
                 <>
                 <i className="fa fa-exclamation-circle text-red-600 pr-2" aria-hidden="true"></i> 
                 <span class="label-text-alt text-red-600 ">{errors.name.message}</span>
                 </> 
                  }
                 </label>
              </div>
    
              <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">Rating</span>
                 </label>
                 <input 
                 type="number" 
                 placeholder="please rating" 
                 className="input input-bordered w-full max-w-xs"
                 {...register("rating", {
                     required:{
                       value:true,
                       message:'name required enter name'
                     }  
                   })}
                  />
                 <label className='mt-2 mb-2'>
                 { errors.name?.type === 'required' &&
                 <>
                 <i className="fa fa-exclamation-circle text-red-600 pr-2" aria-hidden="true"></i> 
                 <span class="label-text-alt text-red-600 ">{errors.name.message}</span>
                 </> 
                  }
                 </label>
              </div>
              
              <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">description</span>
                 </label>
                 <textarea
                 type="textarea" 
                 placeholder="product description" 
                 className="input input-bordered w-full max-w-xs"
                 {...register("description", {
                     required:{
                       value:true,
                       message:'name required enter name'
                     }  
                   })}
                  />
                 <label className='mt-2 mb-2'>
                 { errors.name?.type === 'required' &&
                 <>
                 <i className="fa fa-exclamation-circle text-red-600 pr-2" aria-hidden="true"></i> 
                 <span class="label-text-alt text-red-600 ">{errors.name.message}</span>
                 </> 
                  }
                 </label>
              </div>
              <button type="submit"className="btn input-bordered w-full max-w-xs bg-primary">Add Product</button>
            </form>
         </div>
       </div>
      </div>
     </section>
    );
};

export default AddReview;