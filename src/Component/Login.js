import React, { useState } from 'react'
import img1 from '../asset/zaf 1.png';
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const [loading, setLoading] = useState(false)
  const [formdata,setFormdata]=useState({
      email:'',
      password:''
     })
     
  
const handlechange=(e)=>{
const {name, value} = e.target
setFormdata((prev)=>({
 ...prev,
 [name]: value
}))
}

const handleSubmit = async(e)=>{
  setLoading(true);
  e.preventDefault();
try {
  if (!formdata.email || !formdata.password) {
    toast.error('You can not login');
    setLoading(false);
    return null;
  }
  if (formdata.password.length < 6 ) {
    toast.warn('Password must be at least 6 characters')
    setLoading(false);
    return null;
  }

  const url=` https://zaf-farm.onrender.com/login-as-admin`;

 
 const data = await fetch(url,{
  
   method:'POST',
   body:JSON.stringify(formdata ),
   headers:{
    "content-type":"application/json",
   }
   
 });
 const response = await data.json()
 console.log(response);
 toast.success(`${response.message} check ${response.email}`)
 
 
   if (!response.ok) {

     console.log(response);
     setLoading(false);
     toast.error(response.error)
     
   }

  //  toast.success(response.message)

} catch (error) {
  console.log(error);
  
}
}

  return (
    <div>
      
        <div className="flex flex-col items-center h-[100vh] p-[20px] bg-slate-600">
        <div className="flex flex-col items-center justify-center gap-[20px] p-[10px]">
          <img src={img1} alt="" />
          <ToastContainer/>
          <h3 className="text-[24px] text-[white] font-serif font-extrabold">Login</h3>
        </div>
        <form className='flex flex-col gap-[10px]' onSubmit={handleSubmit}>
          <label className="flex flex-col items-start ">
            <p className=" flex items-center justify-center text-[white] text-[20px] font-bold ">Email Address:</p>
            <input type="email" name="email" onChange={handlechange} className=" py-[6px] w-[25vw] max-sm:w-[70vw]   max-md:w-[50vw] max-lg:w-[60vw] border rounded outline-0 gap-[10px] border-black placeholder:italic placeholder:text-slate-400 px-4 " id="" placeholder='Enter Email...' />
          </label>
            {/* <input name='email' onChange={handlechange} className=" py-[6px] w-[25vw] border rounded outline-0 gap-[10px] border-black placeholder:italic placeholder:text-slate-400 px-4 " type="email" placeholder='Enter Email...' /> */}

          <label className="flex flex-col items-start ">
            <p className="items-center justify-center text-[white] font-bold text-[20px] ">Password:</p>
            <input name='password' onChange={handlechange}  className=" py-[6px] w-[25vw] max-sm:w-[70vw] max-md:w-[50vw] max-lg:w-[60vw] border rounded outline-0 border-black placeholder:italic placeholder:text-slate-400 px-4" type="password" placeholder='Enter Password...' />
          </label>
          <div className="flex gap-[20px] items-center self-end">
            <button onClick={handleSubmit}  className="text-[white] rounded p-[10px] w-[10vw] max-sm:w-[30vw] max-md:w-[50vw] max-lg:w-[40vw] bg-black hover:bg-red-600 ">{loading ? 'Loading...' : 'Sign In'}</button>
          </div>
        </form>
      </div>
      

      
    </div>
  )
}

export default Login