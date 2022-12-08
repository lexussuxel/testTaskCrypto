import AddCurrencyButton from "./index";
import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import '../../localization/i18n'
import {mocElement} from "../../utils/mocItem";
import {mocStore, MocStore} from "../../utils/mocStrore";
import {setRole} from "../../store/reducers/userSlice";

describe(('test add currency button'), ()=>{

    describe(('tests for coin style'), ()=>{

        beforeEach(()=>{
            mocStore.dispatch(setRole('user'))
            render(<MocStore><AddCurrencyButton element={mocElement} style={'coin'}/></MocStore>);
        });

        it('should render coin style', ()=>{
            expect(screen.getByTestId('coin-btn')).toBeInTheDocument();
        });

        it('should open modal for coin', ()=>{
            fireEvent.click(screen.getByTestId('coin-btn'));
            expect(screen.getByTestId('modal')).toHaveStyle({display: 'flex'});
        });
    })

    describe(('tests for full button style'), ()=>{

        beforeEach(()=>{
            mocStore.dispatch(setRole('user'))
            render(<MocStore><AddCurrencyButton element={mocElement}/></MocStore>);
        });

        it('should render button style', ()=>{
            expect(screen.getByTestId('full-btn')).toBeInTheDocument();
        });

        it('should open modal for full button',  ()=>{
            fireEvent.click(screen.getByTestId('full-btn'));
            expect(screen.getByTestId('modal')).toHaveStyle({display: 'flex'});
        });
    })
} )
