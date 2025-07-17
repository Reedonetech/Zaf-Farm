import React from 'react';
// import { IoMenu } from "react-icons/io5";
// import { IoClose } from "react-icons/io5";
import img1 from '../asset/zaf 1.png';

const Navbar = () => {
  return (
  <div className='flex flex-col sm:overflow-hidden lg:w-[100%] sm:w-[50%]'>
      <div className='flex items-center lg:justify-end justify-center'>
          <img className='lg:w-[100px] w-[70px] h-[70px] lg:h-[100px]' src={img1} alt="Zaf Farm Logo" />
      </div>

      <div className='flex flex-col items-center justify-center gap-[20px] p-[10px]'>
        <h1 className='lg:text-[30px] text-center font-bold'>Hello {} Welcome to Zaf Farm</h1>
        <h3 className='lg:text-[20px] font-bold underline'>Recent Transaction</h3>
      </div>

    <div className='lg:overflow-x-auto overflow-x-visible'>
        <table className='min-w-full table-auto'>
          <thead>
            <tr className='underline'>
            <th className='px-4 py-2 text-left'>No:</th>
            <th className='px-4 py-2 text-left'>Details</th>
            <th className='px-4 py-2 text-right'>Price</th>
            <th className='px-4 py-2 text-left'>Date</th>
            <th className='px-4 py-2 text-left'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='px-4 py-2 text-left'>1</td>
              <td className='px-4 py-2 text-left'>Purchase Chicken</td>
              <td className='px-4 py-2 text-right'>5000</td>
              <td className='px-4 py-2 text-left'>2/12/2005</td>
              <td className='px-4 py-2 text-left'>Good</td>
            </tr>
          </tbody>
        </table>
    </div>
    <div className='flex items-center justify-end gap-[20px] px-[20px] py-[20px]'>
      <button className='text-[18px] font-bold hover:text-blue-600 transition text-gray-800 '>See All</button>
    </div>
</div>
  );
}

export default Navbar;
