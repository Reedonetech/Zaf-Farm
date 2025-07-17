import React from 'react'
import img1 from '../asset/zaf 1.png';

const StaffName = () => {
  return (
    <div>
      <div>
        <div className='flex items-center justify-end'>
          <img className='w-[100px] h-[100px]' src={img1} alt="Zaf Farm Logo" />
        </div>
        <div className='flex flex-col items-center justify-center gap-[20px] p-[10px]'>
          <h1 className='text-[30px] text-center font-bold'>All STAFFS NAMES AND ROLES</h1>
        </div>
        <div className='flex flex-col justify-between px-[20px]'>
          <table className=''>
            <thead>
              <tr className='underline'>
                <th className='px-4 py-2 text-left'>No:</th>
                <th className='px-4 py-2 text-left'>Name</th>
                <th className='px-4 py-2 text-left'>Role</th>
                <th className='px-4 py-2 text-right'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-4 py-2 text-left'>1</td>
                <td className='px-4 py-2 text-left'>Abdulkadir Ridwan</td>
                <td className='px-4 py-2 text-left'>Admin</td>
                <td className='px-4 py-2 text-right'>Good</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default StaffName