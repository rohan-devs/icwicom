import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <>

      <div className=' my-[10vh] text-center m-7'></div>
      <div className='  text-center duration-1000 text-3xl md:my-[400px] flex flex-col gap-9 items-center justify-center '>
        <div className='flex items-center justify-center   col gap-3' >
          <div>
            Paper Submission deadline: 1<sup>st</sup> May, 2025
          </div>
        </div>
        <div>
          Acceptance Notification: 30<sup>th</sup> June, 2025
        </div>
        <div>


          Registration/Camera Ready Submission: 15<sup>th</sup> July, 2025
        </div>

      </div>

    </>
  )
}

export default page