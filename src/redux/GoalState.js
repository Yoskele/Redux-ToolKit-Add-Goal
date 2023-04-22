import {createSlice} from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const goalSlice = createSlice({
    name: 'goals',
    initialState: { goals: [] },
    reducers: {
        addGoal: (state, action) => {
            const goal = {
                id: uuid(),
                text: action.payload,
            };
            return {
                ...state,
                goals: [...state.goals, goal],
            };
        },
        upDateGoal:(state, action) => {
            const {id, text}  = action.payload; // Extract id and inputValue from action.payload
            // Find the Goal you want to update.
            const goalToUpdate = state.goals.find((goal) => goal.id ===  id);
            if(goalToUpdate){
                goalToUpdate.text = text;
            }
        },
        deleteGoal: (state, action) => {
            state.goals = state.goals.filter((goal) => goal.id !== action.payload);
        },
    },
});

export const {addGoal, upDateGoal, deleteGoal} = goalSlice.actions;
export default goalSlice.reducer;

