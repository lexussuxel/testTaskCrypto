import styled from "@emotion/styled";
import {colors} from "../../UI/colors";



export const StyledButtonWrapper = styled.button`
  display: flex;
  height: auto;
  text-align: center;
  color:${"white"};
  padding: 10px 15px;
  margin: 5px;
  background-color: ${colors.main_blue};
  border-style: unset;
  border-radius: 20px;
  cursor: pointer;
    :hover {
        background-color: ${colors.secondary_blue};
        box-shadow: 0 0 20px ${colors.shadow_2};
    }
  :disabled{
    color: ${colors.main_grey};
    border: 1px solid ${colors.main_grey};
    background-color: ${colors.secondary_grey};
    :hover{
      background-color: ${colors.secondary_grey};
      box-shadow: none;
    }
  }
  &[type=button],&[type=reset],&[type=submit]{
    padding: 5px;
    justify-content: center;
  }
`
