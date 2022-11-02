import {convertBigNumbers} from "./convertBigNumbers";


describe("test big numbers convertion", ()=>{
    it('should return two digits', ()=>{
        expect(convertBigNumbers('1.2564534523423424')).toBe('1.26');
    });
    it('should return m', ()=> {
        expect(convertBigNumbers('1500000')).toBe('1.50m');
    });
    it('should return b', ()=> {
        expect(convertBigNumbers('3000000000')).toBe('3.00b');
    });
});