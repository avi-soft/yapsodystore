'use client'
import React, { useState, useEffect } from 'react';
import Script from 'next/script';

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
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <Script src="https://kit.fontawesome.com/8d4b434c6d.js" crossorigin="anonymous" />
            <dialog id="my_modal_2" className="modal" style={{
                backgroundColor: 'rgb(51 48 48 / 84%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <div className="temporary-button1" style={{ width: componentWidth }} onClick={handleClose}>
                    <button className="btn btn-sm btn-circle " style={{ color: 'white', backgroundColor: 'transparent' }}>✕</button>

                </div>

                <div className="modal-box" id='modal-content1'>
                    <Component />
                </div>

            </dialog>
        </div>
    )
}

export default ClickFaq
