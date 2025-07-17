import React, {useContext, useState} from 'react';
import img from '../asset/zaf 1.png';
import {ToastContainer, toast} from 'react-toastify';
import { AuthContext } from '../AuthContext/Authcontext';
// import Sidebar from '../Dashborad/Sidebar';



const Staff = () => {
    const {url} = useContext(AuthContext);
    // console.log(url);
    const token = localStorage.getItem('tk')
    
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
         if (!format.name || !format.email || !format.userType || !format.password || !format.confirmPassword) {
            toast.warn('Please fill all fields');
            setLoading(false);
            return;
        }

        if (format.password !== format.confirmPassword) {
            toast.warn('Password does not match');
            setLoading(false);
            return;
        }

        if (format.password.length < 6) {
            toast.warn('Password must be at least 6 characters');
            setLoading(false);
            return;
        }

        // const [response, setResponse] = useState({});
        const res = await fetch(`${url}admin/regsiter-worker`, {
            method:'POST',
            headers:{
                "Authorization":`Bearer ${token} `,
                'Content-Type': 'application/json',

                  
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
        {/* <div className="flex h-screen"> */}
            {/* <Sidebar className="w-[250px]"/>   */}
            <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center justify-center gap-[20px] lg:p-[2px] pt-[20px]'>
                    <img src={img} alt="" />
                </div>
                <ToastContainer />
                <div className='flex flex-col gap-[20px]'>
                    <form className='flex flex-col gap-[10px] items-center' onSubmit={handleSubmit}>
                        <label className='flex flex-col items-start'>
                            <p className='text-[20px] font-bold text-white'>Name:</p>
                            <input className=' py-[2px] px-[3px] lg:w-[30vw] w-[80vw] border rounded outline-0 bg-white' type="text" name='name' onChange={handleChange} placeholder='Enter Name' />
                        </label>
                        <label className='flex flex-col items-start'>
                            <p className='text-[20px] font-bold text-white'>Email:</p>
                            <input className=' py-[2px] px-[3px] lg:w-[30vw] w-[80vw] border rounded outline-0 bg-white' type="email" name='email' onChange={handleChange} placeholder='Enter Email' />
                        </label>
                        <label className='flex flex-col items-start'>
                            <p className='text-[20px] font-bold text-white'>UserType:</p>
                            <select className='py-[2px] px-[3px] lg:w-[30vw] w-[80vw] border rounded outline-0 bg-white' name="userType" onChange={handleChange} id="">
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
                            <input className=' py-[2px] px-[3px] lg:w-[30vw] w-[80vw] border rounded outline-0 bg-white' type="password" name='password' onChange={handleChange} placeholder='Enter Password' />
                        </label>
                        <label className='flex flex-col items-start'>
                            <p className='text-[20px] font-bold text-white'>Confirm Password:</p>
                            <input className=' py-[2px] px-[3px] lg:w-[30vw] w-[80vw] border rounded outline-0 bg-white' type="password" name='confirmPassword' onChange={handleChange} placeholder='Confirm Password' />
                        </label>
                        <div className='flex gap-[20px] self-end'>
                        <button className='border rounded px-5 py-2 cursor-pointer bg-blue-400 text-white font-medium' type='submit' disabled={loading} > {loading ? 'Loading....' : 'Register'}</button>
                        </div>
                    </form>
                </div>
            </div>
        {/* </div> */}
    </div>
  );
}

export default Staff;
