import {FC, useState} from "react";
import { Logo, StyledButton} from "../../UI";
import {useNavigate} from "react-router-dom";
import { WrapperHeader, WrapperHeaderContent, HeaderButtonWrapper, ColumnWrapperHeader, MenuIcon, StyledInlineWrapper, CrossIcon } from "./styles";
import {useAppSelector} from "../../hooks/useTypedSelector";
import {convertBigNumbers} from "../../utils/convertBigNumbers";



const Header: FC = ()=>{
    const navigate = useNavigate();
    const { count, percent} = useAppSelector((state)=> state.portfolio);
    const [isActive, setIsActive]=useState<boolean>(false);

    const navigateTo = (to: string)=>{
        navigate(to);
        setIsActive(false);
    }
    return (
        <WrapperHeader>
            <Logo onClick={()=> navigate('/')}>CryptoMan</Logo>
            <MenuIcon onClick={()=> setIsActive(true)}/>
            <WrapperHeaderContent isActive={isActive}>
                <CrossIcon onClick={()=> setIsActive(false)}/>
                <StyledInlineWrapper>
                    <HeaderButtonWrapper onClick={()=> navigateTo('/')}><p>Coins</p></HeaderButtonWrapper>
                    <HeaderButtonWrapper onClick={()=> navigateTo('/about')}><p>About</p></HeaderButtonWrapper>
                </StyledInlineWrapper>

                <StyledInlineWrapper>
                    <StyledButton onClick={()=> navigateTo('/portfolio')}>
                            <ColumnWrapperHeader>
                                <div>Portfolio</div>
                                <div>${convertBigNumbers(count.toString())} + ${convertBigNumbers(percent.toString())}%</div>
                            </ColumnWrapperHeader>
                    </StyledButton>
                </StyledInlineWrapper>
            </WrapperHeaderContent>
        </WrapperHeader>)
}

export default Header;