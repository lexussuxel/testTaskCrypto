import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {isPayloadV1} from "@trpc/server/dist/adapters/aws-lambda";

export interface IUser {
    id: number;
    email: string;
    role: string;
}

const initialState: IUser = {
    id: 0,
    email: "",
    role: ""
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        logIn: (
            state: IUser,
            {payload}: PayloadAction<IUser | null>
        ) => {
            if (payload !== null) {
                state.id = payload.id
                state.role = payload.role
                state.email = payload.email
            }

        }
        ,
        logOut: (
            state: IUser,
        ) => {
            state.id = initialState.id
            state.role = initialState.role
            state.email = initialState.email
            localStorage.removeItem('token')
            localStorage.removeItem('persist:root')
        },
        setRole:(
            state: IUser,
            {payload}: PayloadAction<string | null>
        )=>{
          state.role = payload || 'user'
        }

    },
});

export const {logIn, logOut, setRole} = userSlice.actions
export default userSlice.reducer;
