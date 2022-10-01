import {FC} from "react";
import { Logo, InlineWrapper, StyledButton} from "../../UI";
import {useNavigate} from "react-router-dom";
import { WrapperHeader, WrapperHeaderContent, HeaderButtonWrapper, ColumnWrapperHeader } from "./styles";
import {useAppSelector} from "../../hooks/useTypedSelector";



const Header: FC = ()=>{
    const navigate = useNavigate();
    const { count, percent} = useAppSelector((state)=> state.portfolio);
    return (
        <WrapperHeader>
            <WrapperHeaderContent>
                <InlineWrapper>
                    <HeaderButtonWrapper onClick={()=> navigate('/')}><p>Coins</p></HeaderButtonWrapper>
                    <HeaderButtonWrapper onClick={()=> navigate('/about')}><p>About</p></HeaderButtonWrapper>
                </InlineWrapper>
                <Logo onClick={()=> navigate('/')}>CryptoMan</Logo>
                <InlineWrapper>
                    <StyledButton onClick={()=> navigate('/portfolio')}>
                            <ColumnWrapperHeader>
                                <div>Portfolio</div>
                                <div>${count.toFixed(2)} + ${percent.toFixed(2)}%</div>
                            </ColumnWrapperHeader>
                    </StyledButton>
                </InlineWrapper>
            </WrapperHeaderContent>
        </WrapperHeader>)
}

export default Header;