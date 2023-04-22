import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {changeColor} from '../redux/ChangeTheme'

function ChangeTheme() {
    const [color, setColor] = useState('');
    const dispath = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispath(changeColor(color));
    }
    return (
        <div style={{
            width:'300px',
        }}>
            <h4
                style={{
                    textAlign:'center',
                    fontStyle:'italic',
                    color:'#FD5056'
                }}
            >Change Background Color</h4>
            <form 
                className=''
                onSubmit={handleSubmit}>
                <div className="form-input"> 
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
                    <button className="submitButton" onSubmit={handleSubmit}>Change</button>
                </div>
            </form>
        </div>
    )
}

export default ChangeTheme;

