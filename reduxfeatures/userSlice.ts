import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";


export type User =  {
    id: string;
    name: string;
    email: string;
}
const initialState: User =
    {
        id: '',
        name: '',
        email: '',
    }

export const userSlice = createSlice({
    name: "USER_DETAILS",
    initialState,
    reducers: {
        updateUser: (state: any, action: PayloadAction<User>) => {
            state.id = (action.payload.id);
            state.email = (action.payload.email);
            state.name = (action.payload.name);
        },
        resetUser: (state: any, action: PayloadAction<User>) => {
            initialState
        },
    },
});

export const { updateUser, resetUser } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;