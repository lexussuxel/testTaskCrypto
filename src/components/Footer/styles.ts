import styled from "@emotion/styled";
import {PlayingLine} from "../../UI";

export const FooterWrapper = styled(PlayingLine)`
  align-self: end;
  @media(max-width: 480px){
    height: 10px;
  }
  @media(min-width: 480px){
    margin-top: 5vh;
    height: 20vh;
  }
`