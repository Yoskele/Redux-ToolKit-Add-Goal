import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = '';

export const changeThemeSlice = createSlice({
    name:'changeTheme',
    initialState:{value:initialStateValue},
    reducers:{
        changeColor:(state,action) => {
            state.value = action.payload
        }
    }
})

export const { changeColor } = changeThemeSlice.actions;
export default changeThemeSlice.reducer;

