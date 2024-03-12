"use client"
import React from 'react'

// npm innstall ldrs for loading bar
import { lineWobble } from 'ldrs';

if (typeof window !== 'undefined') {
    // Browser-specific code here
    lineWobble.register();
}


function ProcessingTicket() {
    return (
        <div>
            <div className='mr-auto ml-auto flex flex-col justify-center items-center'>
                <h1 className='text-2xl mb-4'>Processing your Ticket...</h1>


                <l-line-wobble
                    size="80"
                    stroke="5"
                    bg-opacity="0.1"
                    speed="1.75"
                    color="black"
                ></l-line-wobble>
                
                <div className='mt-3 text-slate-500'>
                    This can take up to 3 minutes. DO NOT CLOSE the browser press the back button.
                </div>
            </div>
        </div>
    )
}

export default ProcessingTicket
