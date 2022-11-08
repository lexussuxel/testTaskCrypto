import styled from "@emotion/styled";
import {colors} from "../../UI/colors";

export const StyledInput = styled.input`
  display: flex;
  padding: 5px;
  font-size: 15px;
  border-radius: 10px;
  border-color: ${colors.main_grey};
  border-style: solid;

  :hover {
    box-shadow: 0 0 20px ${colors.shadow_2};
  }

  :focus-visible {
    border-color: ${colors.main_blue};
    outline: none;
  }
`
