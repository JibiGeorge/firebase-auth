import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    version: 1,
    storage
};

export const reducer = combineReducers({
        user: userSlice.reducer
})

const persistReduhcer = persistReducer(persistConfig, reducer);

export default configureStore({
    reducer: persistReduhcer
})