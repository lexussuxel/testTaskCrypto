import styled from "@emotion/styled";
import {ColumnWrapper, InlineWrapper, WrapperBase} from "../../UI";
import {colors} from "../../UI/colors";
import {ReactComponent as Menu} from "../../UI/menu.svg"
import {ReactComponent as Cross} from "../../UI/cross.svg"

export const WrapperHeader = styled(WrapperBase)`
  position: sticky;
  top: 0;
  height: 60px;
  width: 100vw;
  z-index: 5;
  @media (min-width: 480px) {
  }
  @media (max-width: 480px) {

  }
`

interface SideBarProps {
    isActive: boolean;
}

export const WrapperHeaderContent = styled.div<SideBarProps>`
  display: flex;
  width: inherit;
  height: inherit;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 480px) {
    margin: 0 10%;
  }
  @media (max-width: 480px) {

    background-color: white;
    transition: left 0.3s ease-in;
    width: 75%;
    height: 100%;
    position: fixed;
    top: 0;
    left: ${(props) => (props.isActive ? '0' : '-100%')};
    flex-direction: column;
    box-shadow: 0 10px 70px ${colors.shadow};
  }

`

export const MenuIcon = styled(Menu || "")`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    height: 100%;
    width: max-content;
    fill: ${colors.main_blue};
  }
`
export const CrossIcon = styled(Cross || "")`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    height: 60px;
    margin-left: auto;
    width: max-content;
    fill: ${colors.main_blue};
  }
`
export const ColumnWrapperHeader = styled(ColumnWrapper)`
  div {
    height: auto;
  }

`

export const StyledInlineWrapper = styled(InlineWrapper)`
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`


export const HeaderButtonWrapper = styled.a`
  text-decoration-style: unset;
  cursor: pointer;
  padding: 5px;
  color: ${colors.main_grey};
  height: inherit;
  @media (max-width: 480px) {
    width: 90%;
    background-color: ${colors.secondary_grey};
    margin: 10px 0;
    padding: 0;
    border-radius: 10px;
    box-shadow: 0 0 10px ${colors.shadow_2};
  }

  :hover {
    background: ${colors.secondary_grey};

  }

  .p {
    text-align: center;
  }
`
