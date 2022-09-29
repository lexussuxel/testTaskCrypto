import styled from "@emotion/styled";
import {ReactComponent as Wallet}from "./wallet.svg"
import {ReactComponent as Coins} from "./coins.svg"


export const WrapperBase = styled.div`
  display: flex;
  background: #fffefe;
  max-width: 100%;
  box-shadow: 0 10px 70px rgba(183, 255, 228, 0.36);
  @media (min-width: 480px) {

  }
`

export const WrapperComponents = styled(WrapperBase)`
  height: 100%;
  @media(min-width: 480px){
    border-radius: 2px;
    top: -25vh;
    margin: -15vh 10% 0 10%;
    width: 80%;}

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
`

export const ButtonWrapper = styled.div`
  cursor: pointer;
  padding: 5px;
  color: #919191;
  height:inherit;
  
  :hover {
    font-weight: 150;
    background: #f3f3f3;

  }
`
export const PlayingLine = styled(WrapperBase)`
  background: linear-gradient(90deg, #bc3ce7, #238bd5);
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
  color: rgb(14, 161, 253);
  font-family: "Courier", serif;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  :hover {
    text-shadow: 0 0 20px rgba(33, 83, 183, 0.35);
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
  stroke: #515151;
  width: 30px;
  height: 30px;
  :hover {
    stroke: #000000;
    stroke-width: 3px;
  }

`

export const StyledButton = styled.div`
  align-self: center;
  margin: 20px 45%;
  width: 10%;
  text-align: center;
  color: white;
  padding: 5px;
  background-color: #238bd5;
  border-radius: 20px;
  cursor: pointer;
  :hover{
    box-shadow: 0 10px 70px rgba(183, 255, 228, 0.36);
  }
`