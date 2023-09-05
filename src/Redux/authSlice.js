import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: "user",
    initialState: {
        token: null,
        user: null,
    }, reducers: {
        userData: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        signout: (state) => {
          state.token = null;
          state.user = null;
        }
    }
})

export const { userData, signout } = authSlice.actions;

export default authSlice.reducer;