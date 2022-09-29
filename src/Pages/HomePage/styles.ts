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

export const WrapperTable = styled.div`
  margin:10px;
`
export const StyledTable = styled.table`
  width:100%;
  overflow: visible;
  border-collapse: collapse;
`

export const StyledTHead = styled.thead`
  font-size: 15px;
`
export const StyledTBody = styled.tbody`
  font-size: 13px;
`
export const StyledTr = styled.tr`
  text-align: justify;
  right: 0;

  @media (min-width: 480px) {

    :nth-child(2) {
      width: 100px;
    }

    width: auto;
    margin: auto;
  }

  :hover {
    background-color: #e8e8e8;
  }

`
export const StyledTh = styled.th`
`
export const StyledTd = styled.td`

`