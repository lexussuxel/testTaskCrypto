import {combineReducers} from "redux";
import portfolioReducer from "./reducers/portfolioSlice"
import userReducer from "./reducers/userSlice"

export const rootReducer = combineReducers({
    portfolio: portfolioReducer,
    user: userReducer,
});
