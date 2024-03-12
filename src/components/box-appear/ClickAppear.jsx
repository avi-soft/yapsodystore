import './style.css'
export default function ClickBox({component: Component}){
    return (
        <div>
            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
            <dialog id="my_modal_1" className="modal" style={{ 
                backgroundColor: 'rgb(51 48 48 / 84%)',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center' }}
            >
                <form method="dialog">
                    <div className="temporary-button">
                        <button className="btn btn-sm btn-circle btn-ghost " style={{borderColor:'white',borderWidth:2}}>✕ </button>
                        <div style={{marginLeft:6, display:'grid', placeContent:'center', cursor:'pointer'}} onClick={() => document.getElementById('my_modal_1').close()}>ESC</div>
                    </div>
                </form>
                {/* this form is basically a button to close so you can change according to need (change css accordingly) */}

                <div className="modal-box" style={{ width: 'auto', maxWidth: 'none', padding: 0 }}> 
                    <Component/>
                    {/* the center container width sets automatically according to the defined width of the components */}
                </div>
            </dialog>
        </div>
    )
}