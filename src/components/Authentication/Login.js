import React from 'react';
import { useForm } from  "react-hook-form";
import { Link } from 'react-router-dom';
const Login = () => {
    
    // react hook form
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <section className='container mx-auto lg:mt-40 lg:mb-28 mb-11 mt-28'>
        <div className="flex justify-center items-center lg:m-0 m-5">
         <div className="card w-96  shadow-xl">
          <div className="card-body">
          <h2 className="text-center font-bold text-2xl text-primary">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">Email</span>
                 </label>
                 <input type="email" 
                 placeholder="your email" 
                 className="input input-bordered w-full max-w-xs"
                 {...register("email", {
                     required:{
                       value:true,
                       message:'email required enter email'
                     },
                     pattern:{
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message:'error message'
                     }
                     
                   })}
                  />
                 <label className='mt-2 mb-2'>
                 { errors.email?.type === 'required' &&
                 <>
                 <i className="fa fa-exclamation-circle text-red-600 pr-2" aria-hidden="true"></i> 
                 <span class="label-text-alt text-red-600 ">{errors.email.message}</span>
                 </> 
                  }
                   {errors.email?.type === 'pattern' && 
                   <>
                   <i className="fa fa-exclamation-circle text-red-600 pr-2" aria-hidden="true"></i> 
                   <span class="label-text-alt text-red-600 ">{errors.email.message}</span>
                   </> 
                    }
                 </label>
              </div>
              <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">password</span>
                 </label>
                 <input type="password" 
           
                 placeholder="password" 
                 className="input input-bordered w-full max-w-xs"
                 {...register("password", {
                     required:{
                       value:true,
                       message:'password required enter password'
                     },
                     minLength:{
                        value: 6,
                        message:'must be enter up to 6 length'
                     }
                     
                   })}
                  />
                  <span className='text-accent' >Forget password ?</span>
                 <label className='mt-4 mb-4'>
                   { errors.password?.type === 'required' &&
                    <>
                   <i className="fa fa-exclamation-circle text-red-600 pr-2" aria-hidden="true"></i> 
                   <span className="label-text-alt text-red-600">{errors.password.message}</span>
                   </>
                    }
                   { errors.password?.type === 'minLength' && 
                    <>
                    <i className="fa fa-exclamation-circle text-red-600 pr-2" aria-hidden="true"></i> 
                    <span className="label-text-alt text-red-600">{errors.password.message}</span>
                    </>
                   
                   }
                 </label>
              </div>
              {/* {loginLoading}
              {loginError} */}
              <button type="submit"className="btn input-bordered w-full max-w-xs bg-primary">Login</button>
              <span className='text-accent'>New to Doctor portal? </span>
              <Link to="/register" ><span className='text-primary'>creat a new account</span></Link>
            </form>
          <div className="divider">OR</div>
          <button className="btn btn-outline">CONTINUE WITH GOOGLE</button>
         </div>
       </div>
      </div>
     </section>
    );
};

export default Login;