import React, { useState } from 'react'
// import Dashboard from './Dashboard'
import Sidebar2 from './Sidebar2'
import Dashboardpage from './Dashboardpage'
// import Sidebar2 from './Sidebar'

const Dashboard = () => {
  const [expand, setExpand] = useState(true)

  const handleClick = () => {
    setExpand(!expand)
    // console.log(expand)
  }

  return (
    <div className='flex flex-row w-full h-screen'>
        
        <div className={`${expand ? "md:w-[15%] sm:w-0":"md:w-[12%]"} lg:block sm:w-0`}>
            <Sidebar2 handleClick={handleClick}/>
        </div>
        <div className={`${expand ? "md:w-[85%]":" w-[88%] sm:w-full" } bg-[#f3f4f6] w-full`}>
            <Dashboardpage/>
        </div>
    </div>
  )
}

export default Dashboard