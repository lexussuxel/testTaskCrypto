import styled from "@emotion/styled";
import {InlineWrapper, PlayingLine} from "../../UI";

export const UnderHeaderWrapper = styled(PlayingLine)`
  justify-self: center;
  
  @media (min-width: 480px) {
    min-height: 25vh;
  }
  @media (max-width: 480px) {
    height: auto;
  }
`

export const ItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  padding: 5px;
  color: white;
  max-height: 10vh;
  border: 2px solid rgba(255, 222, 173, 0);
  border-radius: 5px;
  @media (min-width: 480px) {
    margin: 10px 60px 15vh 60px;
    :hover {
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-name: borderAnimation;
      @keyframes borderAnimation {
        0% {
          border-color: #8181f8;
          padding: 5px;
        }
        100% {
          border-color: #e281f8;
          padding: 8px;
        }
      }
      
    }
  }


`

export const InlineItemsWrapper = styled(InlineWrapper)`
  margin: 0 10%;
  justify-content: space-between;
  text-align: center;
`

export const ItemTitle = styled.div`
  
  @media (min-width: 480px) {
    max-font-size: 35px;
    font-size: 2em;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`

export const ItemDescription = styled.div`
  @media (min-width: 480px) {
    font-size: 15px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`
