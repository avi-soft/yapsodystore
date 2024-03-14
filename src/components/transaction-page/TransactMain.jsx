'use client'
import './style.css'
import Script from 'next/script'
import CalenderNewEvent from './CalenderNew';
import CalenderOldEvent from './CalenderOld';
export default function Transaction(){

  // functionality added when clicked on button..
    const printTicket =()=>{

    }
    const printReceipt = ()=>{

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
                <CalenderNewEvent/>
                <CalenderOldEvent/>
            </div>
        </div>
    );
}