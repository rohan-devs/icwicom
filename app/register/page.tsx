import React from 'react'
import { PaymentTable, TypeTable } from './Table';
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
            <li><b>Non-Presentation Consequence:</b> Paper accepted by the Technical Program Committee but not presented will not be included in the further conference proceedings.</li>
            <li><b>Once the registration fees is paid, it is unrefundable in any circumstances.</b></li>
          </ul>
          <br />
          <div>
            <TypeTable topics={Fees} heading={['Registration Type','Registration Charges']}/>
          </div>
          <h1 className='text-md py-2'><i>Note: Conference registration includes all conference activities, registration kit, two working lunches and refreshments.</i></h1>
          <br />
          <div className='flex flex-col gap-7'>
            <PaymentTable queries={queries} />
            <h1 className='text-lg font-bold'>Payment Mode: (NEFT, WIRE): </h1>
            <ul className='list-decimal'>
              <li >National Electronic Funds Transfer (NEFT)
                <ul className='list-disc'>
                  <li className='pl-5'>The Online Transactions should be made through NEFT with above Account Details. (Please make a note of the transaction number.)
                  </li>
                </ul>
              </li>
              <li>WIRE Transfer.</li>
            </ul>
          </div>

          <div className='py-4 flex flex-col gap-3 text-lg'>
            <h1>Link for registration (After Payment): <span className='underline hover:cursor-pointer'> Click Here</span></h1>
            <h1>Link for Participants/Co-author Registration (After Payment): <span className='underline hover:cursor-pointer'> Click Here</span> </h1>
          </div>
        </div>
</div>
    
    </>
  )
}

export default page;



interface paymentProps {
  id: number,
  query: string,
  ans: string,
};
const queries:paymentProps[] = [
  {
    id: 1,
    query: "Account Name",
    ans:"ICWICOM DJSCE"
    
  },
  {
    id: 2,
    query: "Account Number",
    ans: "3569298087",

  },
  {
    id: 3,
    query: "Bank Name",
    ans: "Central Bank of India"
  },
  {
    id: 4,
    query: "Branch Name",
    ans:"Juhu, Vile Parle, Mumbai - 400056",
  },
  {
    id: 5,
    query: "IFSC Code",
    ans:"CBIN0281621"
  }, {
    id: 6,
    query: "Account Type",
    ans:"Current"
  },
  
]