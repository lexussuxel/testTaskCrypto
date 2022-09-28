import styled from "@emotion/styled";
import {WrapperComponents} from "../../UI";

export const WrapperHome = styled(WrapperComponents)`
  @media(min-width: 480px){
    animation-duration: 1.5s; 
    animation-name: fadeInTop; 
    @keyframes fadeInTop { 
      0% {               
        opacity: 0;
        transform: translate3d(0px, 50%, 0px);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }
  }
`