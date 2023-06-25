import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        loggedUserData: []
    },
    reducers:{
        setLoggedUserData: (state, action: PayloadAction<any>)=> {
            state.loggedUserData = action.payload
        }
    }
})

export const {setLoggedUserData} = userSlice.actions
export const loggedUserData = (state: { user: { loggedUserData: any; }; }) => state.user.loggedUserData;