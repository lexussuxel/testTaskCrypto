import {FC} from "react";
import styled from "@emotion/styled";
import {WrapperBase, WrapperContent, Logo, InlineWrapper, ButtonWrapper} from "../../UI";
import {useNavigate} from "react-router-dom";


const WrapperHeader = styled(WrapperBase)`
  position: sticky;
  top: 0;
  height: 60px;
  width: 100vw;
  @media (min-width: 480px) {
  }
  @media (max-width: 480px) {
  }
`
const WrapperHeaderContent = styled.div`
  display: flex;
  width: inherit;
  margin: 0 10%;
  flex-direction: row;
  justify-content: space-between;
`

const Header: FC = ()=>{
    const navigate = useNavigate()
    return (
        <WrapperHeader>
            <WrapperHeaderContent>
                <InlineWrapper><ButtonWrapper>Coins</ButtonWrapper> <ButtonWrapper>About</ButtonWrapper></InlineWrapper>
                <Logo onClick={()=> navigate('/')}>CryptoMan</Logo>
                <InlineWrapper><ButtonWrapper>Portfolio</ButtonWrapper></InlineWrapper>
            </WrapperHeaderContent>
        </WrapperHeader>)
}

export default Header;