import styled from "@emotion/styled";

export const WrapperBase = styled.div`
  display: flex;
  background: #fffefe;
  max-width: 100%;
  box-shadow: 0 10px 70px rgba(183, 255, 228, 0.36);
  @media (min-width: 480px) {

  }
`

export const WrapperComponents = styled(WrapperBase)`
  height: 100vh;
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
`

export const InlineWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const ButtonWrapper = styled.div`
  font-family: "Gill Sans", sans-serif;
  cursor: pointer;
  padding: 5px;
  color: #919191;
  height:inherit;
  :hover {
    font-weight: 150;
    background: #f3f3f3;

  }
`

export const Logo = styled.div`
  display: flex;
  align-self: center;
  color: rgb(38, 14, 253);
  font-family: "Courier", serif;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;

  :hover {
    text-shadow: 0 0 20px rgba(33, 83, 183, 0.35);
    animation-duration: 0.5s;
    animation-name: oops;
    @keyframes oops {
      0% {
        opacity: 1;
        transform: none
      }
      33% {
        opacity: 1;
        transform: translate3d(0px, 5%, 0px);
      }
      66% {
        opacity: 1;
        transform: translate3d(0px, -5%, 0px);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }
  }
`