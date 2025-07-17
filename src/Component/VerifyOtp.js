import React, { useContext, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import img1 from '../asset/zaf 1.png';
import { AuthContext } from '../AuthContext/Authcontext';
import { useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
    const [loading, setLoading] = useState(false)
    const {url} = useContext(AuthContext)
    const [formatotp, setFormatOtp] = useState({
        email:'',
        otp:'',
    })
    const navigate = useNavigate()

    const handlechange = (e) => {
        const {name, value} = e.target
        setFormatOtp((prev)=>({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e)=>{
        setLoading(true)
        e.preventDefault();
        try {
            if(!formatotp.email || !formatotp.otp){
                toast.error('You are not Verify');
                setLoading(false)
                return null;
            }
            const response = await fetch(`${url}verify-otp`, {
                method: 'POST',
                headers : {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formatotp)
            })
            if(response.ok){
                const data = await response.json();
                setLoading(false)
                toast.success(`${data.message}`);
                const token = data.token
                localStorage.setItem('tk', token)
            }else{
                const data = await response.json()
                setLoading(false)
                toast.error(`${data.error}`);
                navigate('/staff')
            }

        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
  return (
    <div>
         <div className="flex flex-col items-center h-[100vh] p-[20px]  bg-[#d2c5c5]">
        <div className="flex flex-col items-center justify-center gap-[20px] p-[10px]">
          <img src={img1} alt="" />
          <ToastContainer/>
          <h3 className="text-[24px] text-[white] font-serif font-extrabold">Verify OTP</h3>
        </div>
        <form className='flex flex-col gap-[10px]' onSubmit={handleSubmit}>
          <label className="flex flex-col items-start ">
            <p className=" flex items-center justify-center text-[white] text-[20px] font-bold ">Email Address:</p>
            <input type="email" name="email" onChange={handlechange} className=" py-[6px] w-[25vw] max-sm:w-[70vw]   max-md:w-[50vw] max-lg:w-[60vw] border rounded outline-0 gap-[10px] border-black placeholder:italic placeholder:text-slate-400 px-4 " id="" placeholder='Enter Email...' />
          </label>
            {/* <input name='email' onChange={handlechange} className=" py-[6px] w-[25vw] border rounded outline-0 gap-[10px] border-black placeholder:italic placeholder:text-slate-400 px-4 " type="email" placeholder='Enter Email...' /> */}

          <label className="flex flex-col items-start ">
            <p className="items-center justify-center text-[white] font-bold text-[20px] ">Password:</p>
            <input name='otp' onChange={handlechange}  className=" py-[6px] w-[25vw] max-sm:w-[70vw] max-md:w-[50vw] max-lg:w-[60vw] border rounded outline-0 border-black placeholder:italic placeholder:text-slate-400 px-4" type="number" placeholder='Enter OTP...' />
          </label>
          <div className="flex gap-[20px] items-center self-end">
            <button onClick={handleSubmit}  className="text-[white] rounded p-[10px] w-[10vw] max-sm:w-[30vw] max-md:w-[50vw] max-lg:w-[40vw] bg-black hover:bg-red-600 ">{loading ? 'Loading...' : 'Sign In '}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default VerifyOtp