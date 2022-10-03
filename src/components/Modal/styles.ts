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
  :disabled{
    background-color: #737373;
  }
`
export const Title = styled.h3`
  
`