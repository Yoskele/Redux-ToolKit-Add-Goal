import React, {useState}  from 'react'
import { useDispatch } from 'react-redux';
import { addGoal } from '../redux/GoalState';

function GoalForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addGoal(input))
    setInput('');
  }

  return (
    <div className='inputFormWrapper'>
        <h4 style={{color:'#FD5056', fontStyle:'italic'}}>Add Your Goals</h4>
        <form onSubmit={handleSubmit}>
            <div className='form-input'>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button 
                  className="submitButton"
                  onSubmit={handleSubmit}>Add</button>
            </div>
        </form>
    </div>
  )
}

export default GoalForm;

