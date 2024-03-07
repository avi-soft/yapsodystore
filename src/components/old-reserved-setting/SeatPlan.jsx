import React, { useState } from 'react';



const SeatPlan = ({filled}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };
    

    return (
        <div
            className={`h-5 w-5 border-2 m-1 ${filled?'bg-white':'bg-slate-400'} ${filled?'border-sky-500':'border-slate-400'} rounded`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            
        >
            {isHovered && (
                <div style={{
                    
                    position: 'relative',
                    left: event.clientX + 'px',
                    top: event.clientY + 'px',
                    backgroundColor: 'rgba(51, 44, 47, 0.94)',
                    border: '1px solid #000000',
                    zIndex: '1',
                    color: '#fff',
                    padding: '15px', 
                    height: '55px', 
                    width: '155px', 
                    borderRadius: '5px',
                }}>
                   {
                    !filled && 'BOOKED'
                   }
                   {
                    filled && <div className='flex justify-between'>
                        <span>test</span> 
                        <span>Rs 10</span>
                    </div>
                   }
                </div>
            )}
        </div>
    );
};

export default SeatPlan;
