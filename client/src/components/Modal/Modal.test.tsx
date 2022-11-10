import "@testing-library/jest-dom"
import "../../localization/i18n"
import {fireEvent, render, screen} from "@testing-library/react"
import {MocStore, mocStore} from "../../utils/mocStrore";
import Modal from "./index";
import {mocElement} from "../../utils/mocItem";
import userEvent from "@testing-library/user-event";


describe('testing modal', ()=>{
    describe("testing simple", ()=>{
        let a = true;

        beforeEach(()=>{
            render(<MocStore><Modal isOpen={a} setIsOpen={()=>{a = !a}} element={mocElement}/></MocStore>)
        })
        it('should disable submit when no value in input', ()=> {
            userEvent.type(screen.getByTestId('modal-input'), "-")
            expect(screen.getByRole('button')).toBeDisabled()
        })
        it('should close modal when click on outer area', ()=> {
            fireEvent.click(screen.getByTestId('modal'))
            expect(a).toBeFalsy();
        })
    })

    describe('click submit', ()=>{
        let a = true;
        beforeAll(()=>{
            render(<MocStore><Modal isOpen={a} setIsOpen={()=>{a = !a}} element={mocElement}/></MocStore>)
            userEvent.type(screen.getByTestId('modal-input'), "2")
            fireEvent.click(screen.getByRole('button'))
        })
        it('should add currency to portfolio', ()=> {
            const {portfolio} = mocStore.getState()
            expect(portfolio.portfolio[0].count).toBe(2)
        })
        it('should close modal after adding currency', ()=> {
            expect(a).toBeFalsy();
        })
    })
})

