import {render, screen, fireEvent, act} from "@testing-library/react";
import "@testing-library/jest-dom"
import Header from "./index";
import {HashRouter} from "react-router-dom";
import { Provider } from "react-redux"
import '../../localization/i18n'
import {configureStore} from "@reduxjs/toolkit";
import portfolioSlice from "../../store/reducers/portfolioSlice";

describe('tests header',   ()=>{
    const store = configureStore({
        reducer: portfolioSlice,
        preloadedState:
            {
                portfolio: [],
                percent: 0,
                count: 0
            }
    });

    it('render and click coins',  ()=>{
        act( async ()=>{render(
            <Provider store={store}>
                <HashRouter>
                    <Header/>
                </HashRouter>
            </Provider>)

            fireEvent.click(await screen.findByTestId('coins'))
            })
            expect(window.location.pathname).toBe("/")
        }
    )

    it('render and click about', () =>{
        act( async ()=>{render(
            <Provider store={store}>
                <HashRouter>
                    <Header/>
                </HashRouter>
            </Provider>)

            fireEvent.click(await screen.findByTestId('about'))
        })
        expect(window.location.pathname).toBe("/about")
    })
})
