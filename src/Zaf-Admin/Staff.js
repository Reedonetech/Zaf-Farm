import React, { use, useState } from 'react';
import img from '../zaf 1.png';
import {ToastContainer, toast} from 'react-toastify';


const Staff = () => {
    const [loading, setLoading] = useState(false);
    const [format, setFormat] = useState({
        name: '',
        email: '',
        userType: '',
        password: '',
        confirmPassword: ''
    })


    const handleChange = (e) => {
        const {name, value} = e.target
        setFormat((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    async function handleSubmit(e){
        setLoading(true);
        e.preventDefault();

       try {
        if(!format){
            toast.warn('Please fill all fields')
            setLoading(false);
            return null;
            
        }
        if(format.password !== format.confirmPassword){
            toast.warn('Password does not match')
            setLoading(false);
            return null;
        }
        if(format.password.length < 6){
            toast.warn('Password must be at least 6 characters')
            setLoading(false);
            console.log(format);
            
            return null;
        }
        // const [response, setResponse] = useState({});
        const res = await fetch('https://zaf-farm.onrender.com/admin/regsiter-worker', {
            method:'POST',
            headers:{
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZGMxZTE5NTA1YWU5MTNhNGMyNDczOSIsImVtYWlsIjoicmVlZG9uZTIwMjJAZ21haWwuY29tIiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTc0Mjk5MjA2OSwiZXhwIjoxNzQzNTk2ODY5fQ.MQjY13MLiBoOJHUvCZbvQRMBP3crz7a306sWKbPTBIs",
                'content-type': 'application/json'
            },
            body: JSON.stringify(format)           
           
        })
        // console.log(res);

       if(res.ok){
        const data = await res.json();
        toast.success(data.message)
        setLoading(false);
        
       }
       
       if(!res.ok){
        const err = await res.json();
        setLoading(false);
        throw new Error(err.error)
       }
        
       } catch (error) {
        console.log(error.message);
        toast.error(error.message)
       }
    }
  return (
    <div>
        
        <div className='flex flex-col items-center min-h-[100vh] bg-[#d2c5c5]'>
            <div className='flex flex-col items-center justify-center gap-[20px] p-[2px]'>
                <img src={img} alt="" />
                <p className='text-[30px] font-bold text-white'>Register Staff</p>
            </div>
            <ToastContainer />
            <div className='flex flex-col gap-[20px]'>
                <form className='flex flex-col gap-[10px] items-center' onSubmit={handleSubmit}>
                    <label className='flex flex-col items-start'>
                        <p className='text-[20px] font-bold text-white'>Name:</p>
                        <input className=' py-[2px] px-[3px] w-[30vw] border rounded outline-0 bg-white' type="text" name='name' onChange={handleChange} placeholder='Enter Name' />
                    </label>
                    <label className='flex flex-col items-start'>
                        <p className='text-[20px] font-bold text-white'>Email:</p>
                        <input className=' py-[2px] px-[3px] w-[30vw] border rounded outline-0 bg-white' type="email" name='email' onChange={handleChange} placeholder='Enter Email' />
                    </label>
                    <label className='flex flex-col items-start'>
                        <p className='text-[20px] font-bold text-white'>UserType:</p>
                        <select className='py-[2px] px-[3px] w-[30vw] border rounded outline-0 bg-white' name="userType" onChange={handleChange} id="">
                            <option className='text-[15px] font-bold' value="">Select user type</option>
                            <option className='text-[15px] font-bold' value="admin">Admin</option>
                            <option className='text-[15px] font-bold' value="inventory" >Inventory</option>
                            <option className='text-[15px] font-bold' value="sales">Sales</option>
                            <option className='text-[15px] font-bold' value="production">Production</option>
                            <option className='text-[15px] font-bold' value="stock">Stock</option>
                        </select>
                    </label>
                    <label className='flex flex-col items-start'>
                        <p className='text-[20px] font-bold text-white'>Password:</p>
                        <input className=' py-[2px] px-[3px] w-[30vw] border rounded outline-0 bg-white' type="password" name='password' onChange={handleChange} placeholder='Enter Password' />
                    </label>
                    <label className='flex flex-col items-start'>
                        <p className='text-[20px] font-bold text-white'>Confirm Password:</p>
                        <input className=' py-[2px] px-[3px] w-[30vw] border rounded outline-0 bg-white' type="password" name='confirmPassword' onChange={handleChange} placeholder='Confirm Password' />
                    </label>
                <div className='flex gap-[20px] self-end'>
                    <button className='border rounded px-5 py-2 cursor-pointer bg-blue-400 text-white font-medium' type='sumbit'>{loading ? 'loading....' : 'Register'}</button>
                </div>
                </form>
            </div>
        </div>
        
    </div>
  );
}

export default Staff;
