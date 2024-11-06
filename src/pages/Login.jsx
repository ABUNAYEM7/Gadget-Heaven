import React, { useEffect, useState } from "react";
import Info from "../components/Info";
import { useForm } from "react-hook-form";
import { getStoredEmail, setEmail } from "../Utility/utility";
import { toast } from "react-toastify";


const Login = () => {
    const [isLogin, setIsLogin] = useState(false);

    const { register,
         handleSubmit,
          watch, 
          reset,
          formState: { errors , isSubmitting} } = useForm()

useEffect(()=>{
    const email =getStoredEmail()
    if(email.length > 0){
        const userName = email[0].split('@')[0]
        toast.success(`Welcome Back Dear ${userName}`)
        setIsLogin(true)
    }
},[])

  const onSubmit =async (data) => {
    await new Promise((resolve)=>setTimeout(resolve,3000))
    toast.success('Welcome To Gadget Heaven')
    const{email} = data
    setEmail(email)
    setIsLogin(true);
    reset()
  }

 
  const logOutClickHandler=()=>{
    localStorage.removeItem('email')
    setIsLogin(false)
    toast.warn('You Log Out')
  }

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto mb-6 bg-highlight  p-4">
        <div className="max-w-screen-xl mx-auto min-h-[300px]">
          <Info
            title={"Welcome To Gadget Heaven"}
            subtitle={
              "Log In to Your Tech Hub — Unlock Exclusive Deals, Track Your Orders, and Stay Updated with the Latest in Gadgets and Innovations."
            }
          />
        </div>
      </div>
      <section className="min-h-[300px] max-w-screen-xl mx-auto">
        <div className="md:relative w-3/4 lg:max-w-[1100px] lg:h-[400px]  mx-auto">
          <div className="h-full outline-offset-4 outline-double outline-white rounded-xl p-4  backdrop-blur-md backdrop-blur-50 lg:absolute lg:-top-52  inset-0 m-auto shadow-xl lg:shadow-none">
            <div className="h-full flex items-center justify-center ">
              {isLogin
                ? 
                 <div className="p-4 my-4 space-y-6 flex flex-col items-center">
                <h3 className="text-2xl font-semibold md:text-3xl md:font-bold text-primary text-center">Thank For Being With Gadget Heaven</h3>
                <p className="text-xl font-semibold text-dark1 text-center">Grab Your Deal Now</p>
                <button
                onClick={logOutClickHandler}
                 className="w-full btn bg-highlight text-white hover:text-highlight">Log Out</button>
              </div>
                
                : 
                
              <form
              onSubmit={handleSubmit(onSubmit)}
               className="card-body h-full border-2 border-b">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                  {...register("email",{ required: true })}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                  {...register("password",
                    { required: true, 
                    minLength :{
                        value :3,
                        message :'Please enter at least 3 characters'
                    },
                    maxLength:{
                        value :8,
                        message:' Please enter no more than 8 characters'
                    }
                    })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                   {errors.password && <p className="my-2 text-xl font-medium text-red-600">{errors.password.message}</p>} 
                </div>
                <div className="form-control mt-6">
                  <button
                   disabled={isSubmitting}
                   className="btn bg-highlight text-white hover:text-highlight">
                    {isSubmitting? 'Login...' :'Login'}
                    </button>
                </div>
              </form>
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
