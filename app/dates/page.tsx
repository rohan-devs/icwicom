import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <>

    <div className=' my-[10vh] text-center m-7'></div>
    <div className='  text-center duration-1000 text-3xl md:my-[400px] flex flex-col gap-9 items-center justify-center '>
      <div className='flex items-center justify-center flex-col gap-3' >

          Paper Submission deadline: 1st May, 2025 
          <br />
      </div>
      <div>


Acceptance Notification: 30th June, 2025 
      </div>
      <div>


Registration/Camera Ready Submission: 20th July, 2025 
      </div>

    </div>
    
    </>
  )
}

export default page