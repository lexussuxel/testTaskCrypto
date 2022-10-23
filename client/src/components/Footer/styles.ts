import styled from "@emotion/styled";
import {PlayingLine} from "../../UI";

export const FooterWrapper = styled(PlayingLine)`
  align-self: end;
  color: white;
  align-content: center;
  text-align: center;
  @media(max-width: 480px){
    height: auto;
  }
  @media(min-width: 480px){
    margin-top: 5vh;
    height: 20vh;
  }
`

export const Title = styled.div`
  
`