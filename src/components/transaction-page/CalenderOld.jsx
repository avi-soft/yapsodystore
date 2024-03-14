'use client'
import { useState } from 'react';
export default function CalenderOldEvent() {
    const [calenderVisibleforold, setcalenderVisibleforold] = useState(false);

    const addCalendertoold = () => {
        setcalenderVisibleforold(!calenderVisibleforold);

    }
    return (
        <div className='inside-container' style={{ marginLeft: 20 }}>
            <div className='common-css'>old seat</div>
            <div className='common-css'>Mar 6 2024, 1:00 PM</div>
            <div className='common-css'>
                <button className='transaction-button' style={{ marginTop: 13 }} onClick={addCalendertoold} >
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <div>Add to Calender</div>
                        <div style={{ marginLeft: 8 }}>{calenderVisibleforold ? <span className='span-symbol'>&#8896;</span> : <span className='span-symbol'>&#8897;</span>}</div>
                    </div>
                </button>
            </div>
        </div>
    );
}
