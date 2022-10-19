import {Provider} from "react-redux";
import {FC} from "react";
import {configureStore, createSlice} from "@reduxjs/toolkit";

export const MocStore:FC<React.PropsWithChildren> = ({children} )=>
    <Provider store={configureStore({
        reducer: {
            mocRed: createSlice({
                name: 'mocRed',
                initialState: [],
                reducers: {

                },
            }).reducer,
        },
    })}>{children}</Provider>