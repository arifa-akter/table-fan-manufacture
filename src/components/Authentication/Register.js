import React from 'react';
import { useForm } from  "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile} from 'react-firebase-hooks/auth';
import { Link,useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import useToken from '../../hooks/useToken';
const Register = () => {
    // sIgn in with Google
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    // creat a new user with email and password
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification:true});
    // react hook form
    const { register, formState: { errors }, handleSubmit } = useForm();
    // update profile
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    // user part
    const navigate = useNavigate()
    // useToken use form custom hook
    const [token] = useToken(user || gUser)
    // if(user || gUser){
    //     console.log(user)
    // }
    if(token){
    navigate('/')
    }
 
    // loading part start
    let loginLoading
    if(loading||gLoading ||updating){
      loginLoading =<div class="flex items-center justify-center space-x-2 animate-bounce">
      <div class="w-3 h-3 bg-primary rounded-full"></div>
      <div class="w-3 h-3 bg-secondary rounded-full"></div>
      <div class="w-3 h-3 bg-primary rounded-full"></div>
  </div>
    }
    // error part start
    let loginError;
    if(error){
     loginError = <p className='text-red-600 '> 
      <i className="fa fa-exclamation-circle text-red-600 pr-2" aria-hidden="true"></i>
       user already exist</p>
    }
    if(updateError){
     loginError = <p className='text-red-600 '> 
      <i className="fa fa-exclamation-circle text-red-600 pr-2" aria-hidden="true"></i>
       user Dose not update</p>
    }
    if(gError){
     loginError = <p className='text-red-600 '> 
      <i className="fa fa-exclamation-circle text-red-600 pr-2" aria-hidden="true"></i>
      Google popUp closed try again </p>
    }

    // form submit part start 
    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email , data.password)
        await updateProfile({ displayName :data.name});
        console.log('Updated profile');
        navigate('/')
    };
     
    return (
        <section className='container mx-auto lg:mt-40 lg:mb-28 mb-11 mt-28'>
        <div className="flex justify-center items-center lg:m-0 m-5">
         <div className="card w-96  shadow-xl">
          <div className="card-body">
          <h2 className="text-center font-bold text-2xl text-primary">Register</h2>
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
              {loginLoading}
              {loginError}
              <button type="submit"className="btn input-bordered w-full max-w-xs bg-primary">Register</button>
              <span className='text-secondary'><small>already have an account</small></span>
              <Link to="/login" ><span className='text-primary'><small>Login</small></span></Link>
            </form>
          <div className="divider">OR</div>
          <button className="btn btn-outline"onClick={()=>signInWithGoogle()}>CONTINUE WITH GOOGLE</button>
         </div>
       </div>
      </div>
     </section>
    );
};

export default Register;