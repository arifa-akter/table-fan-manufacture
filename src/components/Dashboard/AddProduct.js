import React from 'react';
import { useForm } from  "react-hook-form";
import { toast } from 'react-toastify';

const AddProduct = () => {
      // react hook form
      const { register, formState: { errors }, handleSubmit , reset } = useForm();
         // add product submit part start 
    const onSubmit = async data => {
        const tools ={
            image:data.image,
            name:data.name,
            perUnitPrice:data.perUnitPrice,
            minimumQuantity: data.minimumQuantity,
            availableQuantity: data.availableQuantity,
            description:data.description,
            mQuantity:data.mQuantity
        }
        console.log(tools)
        fetch('http://localhost:5000/tools' ,{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(tools)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success(' add product successfully')
                reset()
            }
            else{
                toast.error(' add product does not add')
            }
            console.log(data)
        })
       }
   
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
                 type="text" 
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
                   <span class="label-text">perUnitPrice</span>
                 </label>
                 <input 
                 type="number" 
                 placeholder="per unit price" 
                 className="input input-bordered w-full max-w-xs"
                 {...register("perUnitPrice", {
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
                   <span class="label-text">minimumQuantity</span>
                 </label>
                 <input 
                 type="number" 
                 placeholder="minimum quantity" 
                 className="input input-bordered w-full max-w-xs"
                 {...register("minimumQuantity", {
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
                   <span class="label-text">availableQuantity</span>
                 </label>
                 <input 
                 type="number" 
                 placeholder="product available quantity" 
                 className="input input-bordered w-full max-w-xs"
                 {...register("availableQuantity", {
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
                   <span class="label-text">mQuantity</span>
                 </label>
                 <input 
                 type="number" 
                 placeholder="product mQuantity" 
                 className="input input-bordered w-full max-w-xs"
                 {...register("mQuantity", {
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

export default AddProduct;