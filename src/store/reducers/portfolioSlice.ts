import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPortfolio, ShortItem} from "../../utils/types";

const initialState: IPortfolio = {
    portfolio: [],
    percent: 0,
    count: 0
};

const portfolioSlice = createSlice({
    name: 'portdolioSlice',
    initialState,
    reducers:{
        changeCount: (
            state: IPortfolio,
            {payload}: PayloadAction<ShortItem>
        )=>{
            console.log(payload)
            state.count = 0;
            const index = state.portfolio.findIndex((el) => el.id === payload.id)
            if (index === -1)
                state.portfolio = state.portfolio.concat(payload);
            else
            {state.portfolio[index].count += payload.count;
            if (state.portfolio[index].count === 0){
                state.portfolio = state.portfolio.filter((a) => a.id !== payload.id);
            }}

            state.portfolio.forEach(element => state.count += element.count * parseFloat(element.priceUsd));
            state.percent = state.count * 0.018;
        }
        ,
        remove: (
            state: IPortfolio,
            {payload}: PayloadAction<ShortItem>
        )=>{
            state.portfolio = state.portfolio.filter((a) => a.id !== payload.id);
            state.count = 0;
            state.portfolio.forEach(element => state.count += element.count);
            state.percent = state.count * 0.018;
        }

    },
});

export const {changeCount, remove} = portfolioSlice.actions
export default portfolioSlice.reducer;