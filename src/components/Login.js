import { useState, useEffect } from "react"
import  {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import {login} from '../redux/UserState'

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alertMessage, setAlertMessage] = useState('');

    const tempUser = {
        username:'yos',
        password:'123'
    }

    const _user = useSelector((state) => state.user);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // Validate User.
        if(tempUser.username === username && tempUser.password === password){
            dispatch(login({
                username,
                password,
                isLogged:true
            }))
            // Navigate user.
            navigate('/dashboard')
        }else{
            setAlertMessage('Wrong Credentials.')
        }
    }

    useEffect(() => {

    },[_user])

    return (
        <div className="FormWrapper"> 
            <b className="loginAlert"> {alertMessage} </b>
            <h2> Please Login </h2>
            <div className='inputFormWrapper'>
                <form onSubmit={handleSubmit}>
                    <div className="form-input"> 
                        <label>Username:</label>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-input">
                        <label>Passoword:</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button 
                        className="submitButton"
                        onClick={handleSubmit}>Login</button>
                </form>
            </div>
            <label style={{fontStyle:'italic'}}>Username: yos & Pass: 123</label>
        </div>
    )
}

export default Login;

