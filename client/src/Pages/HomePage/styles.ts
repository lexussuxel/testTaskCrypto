import styled from "@emotion/styled";
import {colors} from "../../UI/colors";


export const WrapperTable = styled.div`
    
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
  tr{
    :hover {
      background-color: ${colors.secondary_grey};
    }
  }
`
export const StyledTr = styled.tr`
  text-align: justify;
  right: 0;

  @media (min-width: 480px) {

    :nth-of-type(2) {
      width: 100px;
    }

    width: auto;
    margin: auto;
  }
`

interface ITableProps {
    mobileShown?: boolean;
}

export const StyledTh = styled.th<ITableProps>`
    @media(max-width: 480px){
      display: ${({mobileShown}) => mobileShown ? "table-cell" : "none"}
    }

`
export const StyledTd = styled.td<ITableProps>`
  @media(max-width: 480px){
    display: ${({mobileShown}) => mobileShown ? "table-cell" : "none"}
  }
`

export const StyledButtonHome = styled.div`
  align-self: center;
  margin: 20px 0;
`
