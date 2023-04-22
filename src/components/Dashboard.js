import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {logout} from '../redux/UserState'
import GoalForm from './GoalForm'
import ChangeTheme from './ChangeTheme'
import Goals from './Goals'

function Dashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.user);
    const colorTheme = useSelector((state) => state.theme);
    
    useEffect(() => {
        if (userData.user == null) {
            navigate('/')
        }
      }, [userData, navigate])
    
    return (
        <div>
            <div className=''>
                <div className="container">
                    <h1 style={{color:'white', fontStyle:'italic'}}>Welcome User: {userData.user ? (<>{userData.user.username}</>) : null} </h1>
                    <button className="buttonDelete" onClick={() => dispatch(logout())}> Log out </button>
                </div>
                <div 
                    style={{ backgroundColor: colorTheme.value }}
                    className="goalsContainerWrapper">
                    <Goals />
                    <GoalForm />
                    <br></br>
                    <ChangeTheme />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;

