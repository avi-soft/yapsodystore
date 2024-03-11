"use client"
import React, { useState } from 'react';
import Link from 'next/link';

// npm install react-icons
import { RxCrossCircled } from "react-icons/rx";


function Contact() {
    const [prevState, setPrevState] = useState(true);

    function changeState() {
        setPrevState(!prevState);
    }

    return (
        <>
            {/* By activating we can check that form is show and hide whwn its State changes by clicking on the button */}

            {/* <button type="button" className='bg-blue-500' onClick={changeState}>Click me</button> */}
            
            {prevState && (
                <div className='mr-auto ml-auto h-full flex flex-col justify-center items-center w-[70%]'>

                    <button onClick={changeState} className='flex self-end '>
                        <RxCrossCircled />
                        <span>ESC</span>
                    </button>
                    <div className='border rounded my-4 mx-2 w-full p-4'>
                        <h3 className='py-2 text-lg'>Contact Presenter</h3>
                        <form action="" className='text mb-4 text-slate-500'>
                            <div className='mb-4'>
                                <label className='' htmlFor="">Event Name</label><br />
                                <select className='border text-slate-700 rounded w-full mt-1 py-2 px-4'>
                                    <option value="MULTI Events">MULTI Events</option>
                                    <option value="RS Event 28603">RS Event 28603</option>
                                    <option value="GA-SD">GA-SD</option>
                                    <option value="RS-SD">RS-SD</option>
                                    <option value="Copy of GA-SD">Copy of GA-SD</option>
                                    <option value="Copy of RS-SD">Copy of RS-SD</option>
                                </select>
                            </div>

                            <div className='mb-4'>
                                <label className='' htmlFor="">Full Name</label><br />
                                <input className='border rounded w-full outline-blue-300 mt-1 py-2 px-4' type="text" name="" id="" />
                            </div>

                            <div className='mb-4'>
                                <label className='mb-1' htmlFor="">Email</label><br />
                                <input className='border rounded w-full outline-blue-300 mt-1 py-2 px-4' type="text" name="" id="" />
                            </div>

                            <div className='mb-4'>
                                <label className='mb-1' htmlFor="">Message</label><br />
                                <textarea className='border rounded w-full outline-blue-300 mt-1 py-2 px-4 h-32 resize-none' name="" id="" cols="30" rows="10"></textarea>
                            </div>

                            <div className='mb-4'>
                                <div className='flex justify-between'>
                                    <div className='text-xs'>
                                        <div>For technical questions please contact</div>
                                        <Link className='text-purple-400' href='/'>Yapsody Customer Support.</Link>
                                    </div>
                                    <div>
                                        <button className="bg-purple-400 tracking-wide text-white w-36 font-medium text-sm py-2 px-4 rounded">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Contact;
