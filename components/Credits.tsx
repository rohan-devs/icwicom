import React from 'react'
import Link from 'next/link'

function Credits() {
    return (
        <div className='w-4/5 mx-auto py-5 text-lg'>The <Link href={"https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"}  target='blank' className='underline text-blue-500'> Microsoft CMT service</Link> was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</div>
    )
}

export default Credits