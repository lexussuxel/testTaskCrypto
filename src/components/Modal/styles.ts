import styled from "@emotion/styled";

interface IStyleProps {
    active: boolean;
}

export const WrapperModal = styled.div<IStyleProps>`
  font-family: "Gill Sans", sans-serif;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.active ? '1' : '0')};
`;

export const ContentModal = styled.div`
  padding: 30px;
  background-color: white;
  border-radius: 15px;
  transition: 0.4s all;
  max-width: 480px;
  width: 100%;

  @media (max-width: 480px) {
    margin: 0 10px;
  }
`;

export const Title = styled.h3`
  
`