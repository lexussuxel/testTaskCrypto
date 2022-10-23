import {combineReducers} from "redux";
import portfolioReducer from "./reducers/portfolioSlice"

export const rootReducer = combineReducers({
    portfolio: portfolioReducer,
});
