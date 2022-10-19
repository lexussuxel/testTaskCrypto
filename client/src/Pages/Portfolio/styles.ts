import styled from "@emotion/styled";
import {colors} from "../../UI/colors";
import {InlineWrapper, WrapperComponents} from "../../UI";

export const PortfolioWrapper = styled(WrapperComponents)`
  display: flex;
    @media(min-width: 480px){
      margin: -15vh auto 0 auto;
      width: 40vw;
    }
`

export const Title = styled.h3`
  color: ${colors.main_blue};

`

export const ItemWrapper = styled.div`

`

export const StyledHr = styled.hr`
  border: none;
  background-color: ${colors.main_grey};
  height: 1px;
  transition: width 2s ease-in;
  animation-name: a;
  animation-duration: 2s;
  @keyframes a{
    0%{
      width: 5px;
    }
    100%{
      width: 100%;
    }
  }
  
`

export const InfoWrapper = styled.div`
  align-self: center;

`
interface IButtonProps{
    visible?:boolean;
}

export const ButtonWrapper = styled.div<IButtonProps>`
  ${({visible})=>visible? null:'display: none;'};
  justify-self: right;
`
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 15px auto;
`
export const StyledInlineWrapper = styled(InlineWrapper)`
  justify-content: space-between;
  p, h3{
    margin-block-end: 0;
    margin-block-start: 0;
    text-align: center;
  }
`

export const ItemDescription = styled.div`
  color: ${colors.main_grey};
  font-size: 0.9rem;
`