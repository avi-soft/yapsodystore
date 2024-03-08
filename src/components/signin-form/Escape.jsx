import Script from 'next/script'
export default function Escapediv() {
    const escape = () => {}  // this is the function through page will exit
    return (
        <>
            <Script src="https://kit.fontawesome.com/8d4b434c6d.js" crossorigin="anonymous" />
            <div className='escape-button'>
                <div className='inside-escape-button' onClick={escape}>
                    <i className="fa-regular fa-circle-xmark" style={{ fontSize: 24, margin: '10px 12px' }}></i>
                    <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>ESC</div>
                </div>
            </div>
        </>
    )
}