import {FC} from "react";
import { Logo, InlineWrapper, ButtonWrapper} from "../../UI";
import {useNavigate} from "react-router-dom";
import { WrapperHeader, WrapperHeaderContent } from "./styles";



const Header: FC = ()=>{
    const navigate = useNavigate()
    return (
        <WrapperHeader>
            <WrapperHeaderContent>
                <InlineWrapper>
                    <ButtonWrapper onClick={()=> navigate('/')}>Coins</ButtonWrapper>
                    <ButtonWrapper onClick={()=> navigate('/about')}>About</ButtonWrapper>
                </InlineWrapper>
                <Logo onClick={()=> navigate('/')}>CryptoMan</Logo>
                <InlineWrapper>
                    <ButtonWrapper onClick={()=> navigate('/portfolio')}>Portfolio</ButtonWrapper>
                </InlineWrapper>
            </WrapperHeaderContent>
        </WrapperHeader>)
}

export default Header;