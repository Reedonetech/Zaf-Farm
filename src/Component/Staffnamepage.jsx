import React, { useState } from 'react'
import StaffName from './StaffName'
// import Sidebar from '../Dashborad/Sidebar'
import Sidebar2 from '../Dashborad/Sidebar2'

const Staffnamepage = () => {
    const [expand, setExpand] = useState(false)
    
      const handleClick = () => {
        setExpand(!expand)
        console.log(expand)
      }
  return (
    <div className='flex flex-row w-full h-screen'>
        <div className={`${expand ? "md:w-[8%] sm:w-0":"md:w-[20%]"} lg:block sm:w-0`}>
            <Sidebar2 handleClick={handleClick}/>
        </div>
        <div className={`${expand ? "w-[92%]":"w-[80%]" } bg-[#f3f4f6] w-full`}>
            <StaffName/>
        </div>
    </div>
  )
}

export default Staffnamepage