import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: "user",
    initialState :{
        username: '',
        email: '',
        phone: ''
    }, reducers : {
        userData : (state, action)=>{
            state.username=action.payload
            console.log(state.username, "name from redux");
        }
    }
})

export const {userData} = authSlice.actions;

export default authSlice.reducer;