import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import Header from "./index";
import {HashRouter} from "react-router-dom";
import { Provider } from "react-redux"
import '../../localization/i18n'
import {createStore} from "@reduxjs/toolkit";

import {rootReducer} from "../../store/rootReducer";

describe('tests header',   ()=>{
    const store = createStore(rootReducer);
    beforeEach(()=>{
        render(
            <Provider store={store}>
                <HashRouter>
                    <Header/>
                </HashRouter>
            </Provider>)
    })
    it('render and click coins',   ()=>{
        fireEvent.click(screen.getByTestId('coins'))
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
        }
    )

    it('render and click about',  () =>{
        fireEvent.click( screen.getByTestId('about'))
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    })
})
