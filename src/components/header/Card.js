import React from 'react'
import InputCard from './InputCard';
import GetTicketCard from './GetTicketCard';


function Card() {

    // When the code variable is True, then it show the component which "Enter The Code" and if False, then it show the card in which button show "Get Tickets" 
    const code = true;
    return (
        <div>
            <div className='bg-white border rounded text-slate-500 border-blue-600 my-5 w-[600px]'>
                <div className='py-[30px] px-[20px] flex'>

                    <div className='px-[30px] relative border-r text-center'>
                        <h4 className='mt-[17px] text-[20px] mb-[8px]'>2024-04-8</h4>
                        <p className='text-[16px]'>16:00</p>
                    </div>

                    <div className='pl-[35px] mt-[20px] mb-[3px] text-center text-slate-500'>
                        <p>Sale Ends</p>
                        <div className='text font-medium'>41 Days 4 hours</div>
                    </div>

                    <div className='pl-[70px] text-center text-[12px] text-slate-500'>
                        {
                            code && <InputCard />
                        }
                        {
                            !code && <GetTicketCard />
                        }


                        <div className='mt-[8px]'>Starting from</div>

                        <span>$50.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
