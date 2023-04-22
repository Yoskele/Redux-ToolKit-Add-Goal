import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {upDateGoal, deleteGoal} from '../redux/GoalState'

function GoalItem({ goal }) {
    const dispatch = useDispatch();
    const [upDateTime, setUpDateTime] = useState(false);
    const [update, setUpdate] = useState('');

    const updateGoal = () => {
        if(update){
            let id = goal.id
            let text = update;
            dispatch(upDateGoal({id, text}));
            setUpdate('')
        }
    }
    return (
        <div className='goal'>
            <div className='goalContent'>
                <p>{goal.text}</p>
                { upDateTime ? (
                    <>
                    <input type="text" value={update} placeholder={goal.text} onChange={(e) => setUpdate(e.target.value)} />
                    <button 
                        style={{
                            background:'green', 
                            color:'white', 
                            padding:'2px',
                            borderRadius:'3px',
                            cursor:'pointer',
                        }} 
                        onClick={() => updateGoal()}
                    >
                        Save
                    </button>
                        </>
                    ) : null 
                }
            </div>  
            <div className='buttonWrapper'>
                <button className='buttonDelete' onClick={() => dispatch(deleteGoal(goal.id))}>Delete Goal</button>
                <button 
                    onClick={()=>setUpDateTime(!upDateTime)}
                    className='buttonEdit'>Edit Goal</button>
            </div>
        </div>
    )
}

export default GoalItem;

