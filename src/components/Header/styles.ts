import styled from "@emotion/styled";
import {ColumnWrapper, WrapperBase} from "../../UI";

export const WrapperHeader = styled(WrapperBase)`
  position: sticky;
  top: 0;
  height: 60px;
  width: 100vw;
  @media (min-width: 480px) {
  }
  @media (max-width: 480px) {
  }
`
export const WrapperHeaderContent = styled.div`
  display: flex;
  width: inherit;
  height: inherit;

  flex-direction: row;
  justify-content: space-between;
  @media(min-width: 480px){
    margin: 0 10%;
  }
  
`
export const ColumnWrapperHeader = styled(ColumnWrapper)`
  div{
    height: auto;
  }
`

export const HeaderButtonWrapper = styled.div`
  cursor: pointer;
  padding: 5px;
  color: #919191;
  height: inherit;
  :hover {
    background: #f3f3f3;

  }
  .p{
    text-align: center;
  }
`