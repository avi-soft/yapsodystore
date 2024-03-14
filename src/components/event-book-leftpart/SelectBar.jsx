export default function SelectOption() {
    return (
        <div className='part'>
            <div className='lower-part'>
                <label for="quantity" >Quantity</label>
                <select name="quantity" className='quantity'>
                    <option value="select" style={{ color: 'gray' }} selected disabled>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
            </div>
        </div>
    );
}