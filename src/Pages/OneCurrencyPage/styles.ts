import {InlineWrapper, WrapperComponents} from "../../UI";
import styled from "@emotion/styled";
import {colors} from "../../UI/colors";

export const WrapperCurrency = styled(WrapperComponents)`
    flex-direction: column;
  @media(min-width: 480px){
  }
  @media(max-width: 480px){
  }
  
`

export const Title = styled.h1`
  color: ${colors.main_blue};
`

export const FieldName = styled.div`
  font-weight: bold;
`
export const FieldDescription = styled.div`
  margin-left: 4px;
  font-style: italic;
`

export const SecondaryText = styled.div`
  font-size: 0.8rem;
  color: ${colors.main_grey};
`

export const StyledInlineWrapper = styled(InlineWrapper)`
  margin-bottom: 8px;
`

export const ParamsWrapper = styled.div`
  justify-self: center;
  @media(min-width: 480px){
    position: relative;
    left: -10%;
    padding: 10px 10%;
  }
 
  background-color: ${colors.bright_blue};
  transition: width 2s ease-in, color 2s ease-in;
  animation-name: a;
  animation-fill-mode: both;
  animation-duration: 2s;
  @keyframes a{
    0%{
      width: 15%;
      color:transparent;
    }
    100%{
      width: 100%;
      color: white;
    }
  }
`
