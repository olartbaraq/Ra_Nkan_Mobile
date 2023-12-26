import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reduxfeatures/userSlice'
export const Store = configureStore({
    reducer: {
    // our reducers goes here
        userReducer
    },
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;