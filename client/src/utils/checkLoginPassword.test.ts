import {verifyLogin, verifyPassword} from "./verifyLoginPassword";


describe("test check login", ()=>{
    it("email with @ symbol", ()=>{
        expect(verifyLogin('simpleemail1234@gmail.com')).toBeTruthy();
    });
    it('email without @ symbol', ()=> {
        expect(verifyLogin('simpleemail1234/gmail.com')).toBeFalsy();
    });
});

describe("test check password", ()=>{
    it("correct password", ()=>{
        expect(verifyPassword('sasa1234')).toBeTruthy();
    });
    it('password less than 5', ()=> {
        expect(verifyPassword('1234')).toBeFalsy();
    });
    it('password more than 20', ()=> {
        expect(verifyPassword('123412341234123412341')).toBeFalsy();
    });
});
