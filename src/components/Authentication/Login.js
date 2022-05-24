import React, { useEffect, useRef} from 'react';
import { useForm } from  "react-hook-form";
import { useSignInWithGoogle ,useSignInWithEmailAndPassword ,useSendPasswordResetEmail} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import useToken from '../../hooks/useToken';
import { toast } from 'react-toastify';
const Login = () => {
  const emailRef = useRef('')
  console.log(emailRef.current.value)
     // sIgn in with Google
     const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

     // sign in with email and password
     const [signInWithEmailAndPassword,user,loading,error, ] = useSignInWithEmailAndPassword(auth);
    //  password reset
     const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
     // react hook form
        const { register, formState: { errors }, handleSubmit } = useForm();
    
     // userToken
     const[token]= useToken(user||gUser)
 
     // user navigate from login to appointment
     let navigate = useNavigate();
     let location = useLocation();
     let from = location.state?.from?.pathname || "/";
    if(token){
      navigate('/')
    }
 
     useEffect(()=>{
       if(user || gUser){
         navigate(from, { replace: true });
       }
     },[user,gUser ,navigate,from])
     // user part
    //  useEffect (()=>{
    //    console.log(token)
    //    if(token){
    //      navigate(from, { replace: true });
      
    //    }
    //  },[token,navigate, from])
   
   
     // loading part start
     let loginLoading
     if(loading||gLoading){
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
        user does not found </p>
     }
     if(gError){
      loginError = <p className='text-red-600 '> 
       <i className="fa fa-exclamation-circle text-red-600 pr-2" aria-hidden="true"></i>
       Google popUp closed try again </p>
     }
 
     // form submit part start 
     const onSubmit = async data => {
         console.log(data)
         signInWithEmailAndPassword(data.email ,data.password)
      
     };
     const resetPassword= async()=>{
      const email = emailRef.current.value
      console.log(email)
      if(email){
          await sendPasswordResetEmail(email);
          toast('Sent email please check email and set password');
      }
      else{
          toast('please enter email'); 
      }
    
   }
         


    
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
                 ref={emailRef}
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
              <span className='text-secondary'type="submit" onClick={resetPassword}>Forget password</span>
              <button type="submit"className="btn input-bordered w-full max-w-xs bg-primary">Login</button>
              <span className='text-secondary'>New to Doctor portal? </span>
              <Link to="/register" ><span className='text-primary'>creat a new account</span></Link>
            </form>
          <div className="divider">OR</div>
          <button className="btn btn-outline" onClick={()=>signInWithGoogle()}>CONTINUE WITH GOOGLE</button>
         </div>
       </div>
      </div>
     </section>
    );
};

export default Login;