import { useSelector } from 'react-redux'
import GoalItem from './GoalItem'
import { useEffect } from 'react'

function Goals() {
    const goals = useSelector((state) => state.goals.goals)
    
    useEffect(() => {

    },[goals])

    return (
        <div className='goalContainer'>
            <div>
                {goals.length > 0 ? (
                    <div className='goals'>
                        <h4 style={{width:'100%'}}>View Goals:</h4>
                        {goals.map((goal) => (
                            <GoalItem key={goal.id} goal={goal} />
                        ))}
                    </div>
                    ) : (
                    <h3 style={{textAlign:'center', color:'white'}}>You have not set any goals</h3>
                    )
                }
            </div>
        </div>
    )
}

export default Goals;

