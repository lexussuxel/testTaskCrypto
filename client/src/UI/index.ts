import styled from "@emotion/styled";
import {ReactComponent as Coins} from "./coins.svg"
import {colors} from "./colors";


export const WrapperBase = styled.div`
  display: flex;
  background: #fffefe;
  max-width: 100%;
  box-shadow: 0 10px 70px ${colors.shadow};
  @media (min-width: 480px) {
    
  }
`

export const WrapperComponents = styled(WrapperBase)`
  min-height: 80vh;
  height: 100%;
  padding: 10px;
  @media(min-width: 480px){
    border-radius: 2px;
    top: -25vh;
    margin: -15vh 10% 0 10%;
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

export const WrapperContent = styled.div`
  display:flex;
  width: inherit;
  margin:10px;
`

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InlineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const PlayingLine = styled(WrapperBase)`
  background: ${colors.gradient};
  width: 100vw;
  background-size: 400% 400%;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-name: play;
  @keyframes play {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

export const Logo = styled.div`
  display: flex;
  align-self: center;
  color: ${colors.main_blue};
  font-family: "Courier", serif;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  :hover {
    text-shadow: 0 0 20px ${colors.shadow};
    animation-duration: 0.5s;
    animation-name: oops;
    @keyframes oops {
      0% {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
      33% {
        opacity: 1;
        transform: translate(-50%, -45%);
      }
      66% {
        opacity: 1;
        transform: translate(-50%, -55%);
      }
      100% {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }
  }
`

export const CoinsIcon = styled(Coins)`
  display: flex;
  stroke: ${colors.main_grey};
  width: 30px;
  height: 30px;
  cursor: pointer;
  :hover {
    stroke: #000000;
    stroke-width: 3px;
  }

`

export const StyledButton = styled.button`
  display: flex;
  height: auto;
  text-align: center;
  color: white;
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
`
export const Input = styled.input`
  display: flex;
  padding: 5px;
  font-size: 15px;
  border-radius: 10px;
  border-color: #cdcdcd;
  border-style: solid;

  :hover {
    border-color: #737373;
  }

  :focus-visible {
    border-color: #2698e8;
    outline: none;
  }
`
export const SubmitButton = styled.button`
  cursor: pointer;
  margin-top: 5px;
  color: white;
  background-color: #2698e8;
  border-radius: 10px;
  padding: 5px;
  border: none;

  :disabled {
    background-color: #737373;
  }
`