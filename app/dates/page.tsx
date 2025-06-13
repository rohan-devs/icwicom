'use client'

import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <>

      <div className=' my-[10vh] text-center  m-7'></div>
      <div className='  text-center duration-1000 text-3xl md:my-[400px] flex flex-col gap-9 items-center justify-center w-full'>
        <div className='flex items-center justify-center   col gap-3' >
          <div className='flex w-full items-center justify-center flex-col gap-4'>
            <div className='w-full'>
              <div className="overflow-hidden whitespace-nowrap">
                <div className="inline-block animate-marquee">
                  The Paper Submission Deadline is extended till 20<sup>th</sup> May, 2025.
                </div>
              </div>
            </div>
            <div>
              Paper Submission deadline: <span style={{ textDecoration: "line-through" }}>1</span><sup>st</sup><span style={{ textDecoration: "line-through" }}> May, 2025</span> 20<sup>th</sup> May, 2025

            </div>
          </div>
        </div>
        <div>
          Acceptance Notification: <span style={{ textDecoration: "line-through" }}>30</span><sup>th</sup><span style={{ textDecoration: "line-through" }}> June, 2025</span> 10<sup>th</sup> July, 2025
        </div>
        <div>
          Registration/Camera Ready Submission: <span style={{ textDecoration: "line-through" }}>15</span><sup>th</sup><span style={{ textDecoration: "line-through" }}> July, 2025</span> 20<sup>th</sup> July, 2025
        </div>

      </div>

    </>
  )
}

export default page