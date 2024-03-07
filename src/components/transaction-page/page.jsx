'use client'
import './style.css'
import Script from 'next/script'
import { useState } from 'react';
export default function Transaction(){

    const [calenderVisible, setcalenderVisible] = useState(false);
    const [calenderVisibleforold, setcalenderVisibleforold] = useState(false);


    // functionality added when clicked on button..
    const printTicket =()=>{

    }

    const printReceipt = ()=>{

    }

    const addCalendertonewevent = ()=>{
        setcalenderVisible(!calenderVisible);
        
    }
    const addCalendertoold = ()=>{
        setcalenderVisibleforold(!calenderVisibleforold);
        
    }


    return (

        <div className="main-transaction-page">
            <Script src="https://kit.fontawesome.com/8d4b434c6d.js" crossorigin="anonymous" />
            <div className='common-css'>
                <i className="fa-regular fa-circle-check" style={{color:'#3ecb3e' , fontSize:43}}></i>
            </div>
            <div className='common-css'>
                <p style={{color:'#85ca85', fontSize:17, fontWeight:'bold'}}>Thank you! Transaction was Successful!</p>
            </div>
            <div className='content' style={{color:'#646060'}}>
                    <div>Your ticket(s) have been emailed to </div>
                    <div style={{marginLeft:6, fontWeight:'bold', fontStyle:'italic'}}>megha.gupta@avisoft.io.</div>
                    {/* in this div we can add email according to the data it provided */}
            </div>
            <div className='common-css'>
                If you do not receive ticket(s) within a few minutes , please check your email junk/spam
            </div>
            <div className='common-css'>
                folder.
            </div>
            <div className='common-css'>
                Payment instructions
            </div>
            <div className='common-css'>
                <div className='ticket-block'>
                    aaaa
                    {/* in this div you can write code accordingly */}
                </div>
            </div>

            <div className='common-css'>
                <i className="fa-solid fa-ticket"  style={{ color:'#3ecb3e' , fontSize: 20,marginTop:10, transform: 'rotate(135deg)' }}></i>
            </div>
            <div className='common-css'>
                <button className='transaction-button' onClick={printTicket()}>Print My Tickets</button>
            </div>
            <div className='common-css'>
                < i className="fa-solid fa-print"  style={{ color:'#3ecb3e' , fontSize: 25,marginTop:10}}></i>
            </div>
            <div className='common-css'>
                <button className='transaction-button' onClick={printReceipt()}>Print Receipt</button>
            </div>

            <div className='transaction-container' >
                <div className='inside-container'>
                    <div className='common-css'>new event</div>
                    <div className='common-css'>Mar 6 2024, 3:00 PM</div>
                    <div className='common-css'>
                        <button className='transaction-button' style={{marginTop:13}} onClick={addCalendertonewevent}>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                                <div>Add to Calender</div>
                                <div style={{marginLeft:8}}>{calenderVisible ? <span className='span-symbol' >&#8896;</span> : <span className='span-symbol'>&#8897;</span>}</div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='inside-container' style={{marginLeft:20}}>
                    <div className='common-css'>old seat</div>
                    <div className='common-css'>Mar 6 2024, 1:00 PM</div>
                    <div className='common-css'>
                        <button className='transaction-button' style={{marginTop:13}} onClick={addCalendertoold} >
                            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                                <div>Add to Calender</div>
                                <div style={{marginLeft:8}}>{calenderVisibleforold ? <span className='span-symbol'>&#8896;</span> : <span className='span-symbol'>&#8897;</span>}</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}