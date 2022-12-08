import {createStore} from "@reduxjs/toolkit";
import {rootReducer} from "../store/rootReducer";
import {FC, ReactNode} from "react";
import {Provider} from "react-redux";

interface IMocStore{
    children: ReactNode;
}
export const mocStore = createStore(rootReducer);

export const MocStore: FC<IMocStore> = ({children})=>{

    return <Provider store={mocStore}>{children}</Provider>
}
