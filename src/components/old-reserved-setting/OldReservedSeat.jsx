"use client"

// JSON Temporary Data
const seats =
    [
        { rowId: "a1", row: [{ seatKey: '1', hold_code_id: '123',seat_is_priced:'10' }, { seatKey: '2', hold_code_id: 'null',seat_is_priced:'10' }, { seatKey: '3', hold_code_id: 'null',seat_is_priced:'10' }] },
        { rowId: "a2", row: [{ seatKey: '4', hold_code_id: 'null',seat_is_priced:'10' }, { seatKey: '5', hold_code_id: 'null',seat_is_priced:'10' }, { seatKey: '6', hold_code_id: 'null',seat_is_priced:'10' }] },
        { rowId: "a3", row: [{ seatKey: '7', hold_code_id: 'null',seat_is_priced:'10' }, { seatKey: '8', hold_code_id: 'null',seat_is_priced:'10' }, { seatKey: '9', hold_code_id: 'null',seat_is_priced:'10' }] }
    ]


import React from 'react'
import { useState } from 'react';

import SeatPlan from './SeatPlan';

// For Icon
import { FaBox } from "react-icons/fa";


function Popup({ seatInfo, isVisible }) {
    const { seatKey, rowId, seat_is_priced } = seatInfo;
    return isVisible && (
        <div style={{ position: 'absolute', top: seatInfo.y-20, left: seatInfo.x+20, backgroundColor: 'rgba(51, 44, 47, 0.94)', color: '#fff', padding: '15px', height: '85px', width: '155px', borderRadius: '5px' }}>
            <div className='text mb-2'> {rowId}-{seatKey}  </div>
            <div className='flex justify-between'>
                <div>test</div>
                <div className='text text-white text-lg'>RS {seat_is_priced}</div>
            </div>
        </div>
    );
}

function OldReservedSeat() {
    const [buttonColor, setButtonColor] = useState({});
    const [popupState, setPopupState] = useState({ isVisible: false, position: { x: 0, y: 0 }, seatInfo: {} });

    const handler = (seatKey, rowId, holdCodeId) => {
        setButtonColor(prevState => ({
            ...prevState,
            [seatKey]: prevState[seatKey] === 'bg-white' ? 'bg-blue-500' : 'bg-white'
        }));
        setPopupState({ isVisible: true, position: { x: window.event.clientX, y: window.event.clientY }, seatInfo: { seatKey, rowId, holdCodeId } });
    };

    return (

        <>
        <div>
            <div className='flex text-slate-400 space-x-8'>
                <div>
                     <FaBox className='h-8 w-8' />
                </div>
                <div>
                    <label htmlFor="pricing" className='mr-3'>Section</label>
                    <select className='border py-[5px] pr-7 pl-3 border-slate-500 rounded' name="pricing">
                        <option value="test">test(10+left)</option>
                    </select>
                </div>
            </div>

            <div className='mt-[15px] flex'>
                <div>Pricing:</div>
                <SeatPlan filled={true}/>
                <SeatPlan filled = {false}/>

            </div>

        </div>

            <div>
                {
                    seats.map((e, Ukey) =>
                    (
                        <span className='flex'>
                            <div className='text-slate-500 m-1'>{e.rowId}</div>
                            <div key={Ukey} className='flex'>
                                {
                                    e.row.map((v, id) =>
                                    (
                                        <div>
                                            {
                                                v.hold_code_id != 'null' && <div key={id} className={`h-5 w-5 border-2 m-1 bg-slate-400  rounded border-sky-500`}>
                                                </div>
                                            }
                                            {
                                                v.hold_code_id == 'null' && <button key={id} className={`h-5 w-5 border-2 m-1 ${v.hold_code_id != 'null' ? 'bg-slate-500' : 'null'} ${buttonColor[v.seatKey] || 'bg-white'} rounded border-sky-500`} 
                                                onMouseEnter={ () => setPopupState({ isVisible: true, position: { x: window.event.clientX, y: window.event.clientY }, seatInfo: { seatKey: v.seatKey, rowId: e.rowId, seat_is_priced: v.seat_is_priced } })}
                                                    onMouseLeave={() => setPopupState({ isVisible: false, position: { x: 0, y: 0 }, seatInfo: {} })}
                                                    onClick={() => handler(v.seatKey, e.rowId, v.seat_is_priced)} >

                                                </button>
                                            }
                                        </div>
                                    )
                                    )}
                            </div>
                        </span>
                    ))
                }
            </div>

            <Popup seatInfo={{ x: popupState.position.x, y: popupState.position.y, ...popupState.seatInfo }} isVisible={popupState.isVisible} />
        </>
    )
}

export default OldReservedSeat
