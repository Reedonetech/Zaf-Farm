import React, { useState } from 'react'

const Dashboardpage = () => {
    const [mobilesidebar, setMobilesidebar] = useState(false)

    const handleClick = () =>{
        setMobilesidebar(!mobilesidebar)
    }
  return (
    <div className='relative'>

        {
            mobilesidebar && (
                <div className='absolute z-[5000] w-[50%] top-0 left-0 h-screen bg-black ' onClick={()=>setMobilesidebar(false)}></div>
            )
        }

        <button onClick={handleClick} className='lg:hidden sm:block'>=</button>
        Dashboardpage
        </div>
  )
}

export default Dashboardpage