import styled from "@emotion/styled";
import {StyledButton} from "../../UI";
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
  cursor: pointer;

  @media (min-width: 480px) {

    :nth-of-type(2) {
      width: 100px;
    }

    width: auto;
    margin: auto;
  }
`


export const StyledTh = styled.th`
`
export const StyledTd = styled.td`

`

export const StyledButtonHome = styled(StyledButton)`
  align-self: center;
  margin: 20px 0;
`