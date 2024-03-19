'use client'
import { useState } from 'react';
export default function CalenderNewEvent() {

    const [calenderVisible, setcalenderVisible] = useState(false);
    const addCalendertonewevent = ()=>{
        setcalenderVisible(!calenderVisible);
        
    }
    return (
        <div className='inside-container'>
            <div className='common-css'>new event</div>
            <div className='common-css'>Mar 6 2024, 3:00 PM</div>
            <div className='common-css'>
                <button className='transaction-button' style={{ marginTop: 13 }} onClick={addCalendertonewevent}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <div>Add to Calender</div>
                        <div style={{ marginLeft: 8 }}>{calenderVisible ? <span className='span-symbol' >&#8896;</span> : <span className='span-symbol'>&#8897;</span>}</div>
                    </div>
                </button>
            </div>
        </div>
    );
}