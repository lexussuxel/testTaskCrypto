import {convertBigNumbers} from "./convertBigNumbers";


describe("test big numbers convertation", ()=>{
    it("there's should be two digits after point", ()=>{
        expect(convertBigNumbers('1.2564534523423424')).toBe('1.26');
    });
    it('should convert to million', ()=> {
        expect(convertBigNumbers('1500000')).toBe('1.50m');
    });
    it('should convert to billion', ()=> {
        expect(convertBigNumbers('3000000000')).toBe('3.00b');
    });
});
