// this is the main page means import this page to make this functional

import React from 'react'
import SelectOption from './SelectBar'
import ShowEventTime from './ShowTimePart'
import Script from 'next/script'
import './style.css'
const ShowEventLeft = () => {
    return (
        <div className='page-divide'>
            <Script src="https://kit.fontawesome.com/8d4b434c6d.js" crossorigin="anonymous"/>
            <div className='left-page'>
                <div className='getticket-main'>
                    <div className='mainbox-event'>
                        <div className='divide-main'>
                            <div className='box'>
                                <div className='diagonal'>MULTI Events</div>
                            </div>
                            <div className='event-name'>MULTI Events</div>
                        </div>
                        <ShowEventTime/>
                    </div>
                    <div className='select-ticket'>
                        <div className='part'>
                            <div className='upper-part'>Adult </div>   
                        </div>
                        <div  className='part'>
                            <div className='mid-part'>
                                <div className='dollar'>$50.00</div>
                            </div>
                        </div>
                        <SelectOption/>
                    </div>
                </div>
            </div>
            <div className='right-page'>Right part</div>
        </div>
    )
}
export default ShowEventLeft
