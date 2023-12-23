import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";


export type User =  {
    id: string;
    name: string;
    email: string;
}
const initialState: Array<User> = [
    {
        id: '',
        name: '',
        email: '',
    }
]
export const userSlice = createSlice({
    name: "USER_DETAILS",
    initialState,
    reducers: {
            addUser: (state: any[], action: PayloadAction<User>) => {
            state.push(action.payload);
        },
    },
});

export const { addUser } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;