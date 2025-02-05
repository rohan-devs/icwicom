import React from 'react'
import Table from './Table'
import { Fees } from './feesDetails'

function page() {
  return (
    <>
      <div className='w-3/4 mx-auto py-8 flex flex-col gap-7 '>
        <h1 className='text-4xl font-bold'>Registration</h1>
        <div className='flex flex-col gap-3'>
          <ul className='list-decimal flex flex-col gap-3 text-lg'  >
            <li><b>Online Registration: </b> Registration of the conference must be completed online. Prospective authors can register only after receiving the provisional acceptance notification for their full paper. </li>
            <li><b>Adhere to dates: </b> Participants should follow the conference dates as specified on the conference website.</li>
            <li><b>Mandatory Registration:</b> At least one author of an accepted papers must register for the conference for the paper to be included in the conference proceedings.</li>
            <li><b>Separate Registration for multiple papers: </b> If an author has multiple accepted papers each paper should be registered separately</li>
            <li><b>Once the registration fees is paid, it is unrefundable in any circumstances.</b></li>
          </ul>
          <div>
            <Table topics={Fees} heading={['Registration Type','Registration Charges']}/>
          </div>
          {/* <div>
            todo: add payment details
          </div> */}

          <div className='py-4 flex flex-col gap-3 text-lg'>
            <h1>Link for registration (After Payment): <span className='underline hover:cursor-pointer'> Click Here</span></h1>
            <h1>Link for registration (After Payment): <span className='underline hover:cursor-pointer'> Click Here</span> </h1>
          </div>
        </div>
</div>
    
    </>
  )
}

export default page