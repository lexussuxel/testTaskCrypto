import AddCurrencyButton from "./index";
import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import '../../localization/i18n'
import {createStore} from "@reduxjs/toolkit";
import {rootReducer} from "../../store/rootReducer";
import {Provider} from "react-redux";
import before from "ts-types/@types/lodash/before";

describe(('test add currency button'), ()=>{
    const mocElement = {   id: "1",
        rank: "",
        symbol: "",
        name: "",
        supply: "",
        maxSupply: "",
        marketCapUsd: "",
        volumeUsd24Hr: "",
        priceUsd: "",
        changePercent24Hr: "",
        vwap24Hr: ""
    }
    const store = createStore(rootReducer);
    describe(('tests for coin style'), ()=>{

        beforeEach(()=>{
            render(<Provider store={store}><AddCurrencyButton element={mocElement} style={'coin'}/></Provider>)
        })

        it('should render coin style', ()=>{
            expect(screen.getByTestId('coin-btn')).toBeInTheDocument()
        });
        it('should open modal for coin', ()=>{
            fireEvent.click(screen.getByTestId('coin-btn'))
            expect(screen.getByTestId('modal')).toHaveStyle({display: 'flex'})
        });
    })

    describe(('tests for full button style'), ()=>{

        beforeEach(()=>{
            render(<Provider store={store}><AddCurrencyButton element={mocElement}/></Provider>)
        })

        it('should render button style', ()=>{
            expect(screen.getByTestId('full-btn')).toBeInTheDocument()
        })

        it('should open modal for full button',  ()=>{
            fireEvent.click(screen.getByTestId('full-btn'))
            expect(screen.getByTestId('modal')).toHaveStyle({display: 'flex'})
        })
    })
} )
