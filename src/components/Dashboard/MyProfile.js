import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from  "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
       // react hook form
       const { register, formState: { errors }, handleSubmit , reset } = useForm();
       // add product submit part start 
  const onSubmit = async data => {
      const profile ={
         name:user?.displayName,
         email:user?.email,
         education:data.education,
         location:data.location,
         phone:data.phone,
         linkDin:data.linkDin
      }
      console.log(profile)
      fetch('https://vast-springs-97654.herokuapp.com/profile' ,{
          method:'POST',
          headers:{
              'content-type':'application/json',
          },
          body:JSON.stringify(profile)
      })
      .then(res=>res.json())
      .then(data=>{
          if(data.insertedId){
              toast.success(' your  successfully profile add')
              reset()
          }
          else{
              toast.error('your profile does not add')
          }
          console.log(data)
      })
     }
    return (
        <section className='container mx-auto mb-11'>
        <div className="flex justify-center items-center lg:m-0 m-5">
         <div className="card w-96  shadow-xl">
          <div className="card-body">
          <h2 className="text-center font-bold text-2xl text-primary">my profile</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">Name</span>
                 </label>
                 <input 
                 type="text" 
                 placeholder="your name" 
                 value={user?.displayName}
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
                   <span class="label-text">email</span>
                 </label>
                 <input 
                 type="email" 
                 value={user?.email}
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
                   <span class="label-text">Education</span>
                 </label>
                 <input 
                 type="education" 
                 placeholder="education" 
                 className="input input-bordered w-full max-w-xs"
                 {...register("perUnitPrice", {
                     required:{
                       value:true,
                       message:'education'
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
                   <span class="label-text">location/city</span>
                 </label>
                 <input 
                 type="text" 
                 placeholder="city name" 
                 className="input input-bordered w-full max-w-xs"
                 {...register("location", {
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
                   <span class="label-text">phone Number</span>
                 </label>
                 <input 
                 type="number" 
                 placeholder="your phone number" 
                 className="input input-bordered w-full max-w-xs"
                 {...register("phone", {
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
                   <span class="label-text">Link din profile</span>
                 </label>
                 <input 
                 type="text" 
                 placeholder="please enter link din profile" 
                 className="input input-bordered w-full max-w-xs"
                 {...register("linkDin", {
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
          
              <button type="submit"className="btn input-bordered w-full max-w-xs bg-primary">add profile</button>
            </form>
         </div>
       </div>
      </div>
     </section>
    );
};

export default MyProfile;