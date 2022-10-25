import {Provider} from "react-redux";
import {FC} from "react";
import {configureStore, createSlice} from "@reduxjs/toolkit";
import {store} from "../store";

export const MocStore: FC<React.PropsWithChildren> = ({children}) =>
    <Provider store={store}>{children}</Provider>