import styled from "@emotion/styled";
import {WrapperBase} from "../../UI";

export const WrapperHeader = styled(WrapperBase)`
  position: sticky;
  top: 0;
  height: 60px;
  width: 100vw;
  //justify-content: center;
  @media (min-width: 480px) {
  }
  @media (max-width: 480px) {
  }
`
export const WrapperHeaderContent = styled.div`
  display: flex;
  width: inherit;
  margin: 0 10%;
  flex-direction: row;
  justify-content: space-between;
  
`