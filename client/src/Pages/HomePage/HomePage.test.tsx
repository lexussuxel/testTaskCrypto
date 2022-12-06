import "@testing-library/jest-dom"
import "../../localization/i18n"
import HomePage from "./index";
import {render} from "@testing-library/react";
import {mocElement} from "../../utils/mocItem";

describe('testing HomePage', ()=>{
    // jest.mock('trpc', ()=>({
    //     getData: {
    //         useQuery: jest.fn().mockReturnValue(({data: []}))
    //     }
    // }))
    render(<HomePage/>)
})
