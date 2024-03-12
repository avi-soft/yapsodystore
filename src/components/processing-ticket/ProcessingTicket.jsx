"use client"
import React from 'react'

import "./processingTicket.css"


function ProcessingTicket() {
    return (
        <div>
            <div className='mr-auto ml-auto flex flex-col justify-center items-center'>
                <h1 className='text-2xl mb-6'>Processing your Ticket...</h1>

                <div className="bg-[#53ac1cab] h-[12px] p-[1px] w-[15%] mr-auto ml-auto rounded-sm">
                    <div class="fill c"></div>
                </div>


                <div className='mt-3 text-slate-500'>
                    This can take up to 3 minutes. DO NOT CLOSE the browser press the back button.
                </div>
            </div>
        </div>
    )
}

export default ProcessingTicket
