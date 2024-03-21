'use client'
import React, { useState, useEffect, use} from 'react';
import './style.css';
import { RxCrossCircled } from "react-icons/rx";

export default function ClickBox({ component: Component, onClose}) {

    const [componentWidth, setComponentWidth] = useState(0)
    const handleClose1=()=>{
        onClose();
      }

    useEffect(()=>{
        document.getElementById('my_modal_1').showModal();
    },[]);


    useEffect(() => {
        function handleResize() {
            const modalContent = document.getElementById('modal-content2');
            setComponentWidth(modalContent.offsetWidth);
        }

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize); // Update width on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on cleanup
    };
  }, []);

    return (
        <div>
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            
            <dialog id="my_modal_1" className="modal" style={{ 
                backgroundColor: 'rgb(51 48 48 / 84%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }} onClose={handleClose1}>
                {/* <form method="dialog" className="modal-backdrop" onClick={handleClose1}> */}
                
                    <div className="temporary-button" style={{ width: componentWidth }}  >
                            {/* <button className="btn btn-sm btn-circle btn-ghost close-button" style={{ borderWidth: 2 }}>✕</button> */}
                            <div style={{display:'flex', flexDirection:'row',  cursor: 'pointer'}} onClick={handleClose1}>
                                <div style={{fontSize:'24px'}}><RxCrossCircled /></div>
                                <div style={{ marginLeft: 6, display: 'grid', placeContent: 'center',fontSize:'1em', textTransform:'uppercase' }} >ESC</div>
                            </div>
                        
                    </div> 
                {/* </form> */}
 
                <div className="modal-box" style={{ width:'auto', maxWidth:'100%', padding: 0 ,borderRadius:'9px'}} id="modal-content2">
                    <Component />
                </div>
                
            </dialog>
        </div>
    )
}