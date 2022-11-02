import styled from "@emotion/styled";
import {colors} from "../../UI/colors";

export const SwitchWrapper = styled.div`
  border: 1px solid ${colors.main_grey};
  border-radius: 5px;
  flex-direction: row;
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
  margin-right: 10px;
`

interface ISingleSwitch {
    set?: boolean;
}

export const SingleSwitch = styled.button<ISingleSwitch>`
  border: none;
  background-color: ${({set}) => set ? colors.secondary_grey : 'transparent'};
  padding: 5px;
  border-radius: 5px;

  :hover {
    background-color: ${colors.secondary_grey};
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`
