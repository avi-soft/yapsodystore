'use client'
import React, { useState, useEffect } from 'react';
import { RxCrossCircled } from "react-icons/rx";

const ClickFaq = ({ component: Component, onClose }) => {
    const [componentWidth, setComponentWidth] = useState(0)
    const handleClose = () => {
        onClose();
    }
    useEffect(() => {
        document.getElementById('my_modal_2').showModal();
    }, []);

    useEffect(() => {
        function handleResize() {
            const modalContent = document.getElementById('modal-content1');
            setComponentWidth(modalContent.offsetWidth);
        }

        handleResize(); // Set initial width
        window.addEventListener('resize', handleResize); // Update width on resize

        return () => {
            window.removeEventListener('resize', handleResize); // Remove event listener on cleanup
        };
    }, []);

    return (
        <div>
            {/* <dialog id="my_modal_2" className="modal" style={{
                backgroundColor: 'rgb(51 48 48 / 84%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="modal-box" id='modal-content1'>
                    <Component />
                </div>
                <form method="dialog" className="modal-backdrop">
                    <div className="temporary-button1" style={{ width: componentWidth }} onClick={handleClose}>           
                        <div style={{fontSize:'25px', color:'white', }}><RxCrossCircled style={{cursor:'pointer', width:'24px', height:'24px'}}/></div>
                    </div>    
                </form>          

            </dialog> */}

            <dialog id="my_modal_2" className="modal" style={{
                backgroundColor:'rgb(51 48 48 / 84%)',
            }} onClose={handleClose}>
                <div className="modal-box" id='modal-content1'>
                    <Component />
                </div>
                <form method="dialog" className="modal-backdrop" onClick={handleClose}>
                    <button style={{cursor:'auto'}} >close</button>
                    <div className="temporary-button1" style={{ width: componentWidth }} >
                        <div ><RxCrossCircled style={{ cursor: 'pointer', width: '24px', height: '24px',color:'white' }} /></div>
                    </div>
                </form>
            </dialog>

        </div>
    )
}

export default ClickFaq
