import React, {FC} from 'react';
import styled from "@emotion/styled";
import {WrapperBase} from "../../UI";

const UnderHeaderWrapper = styled(WrapperBase)`
  background: linear-gradient(90deg, #416fff, #ad16ec);
  width: 100vw;

  @media (min-width: 480px) {
    height: 25vh;
  }
  @media (max-width: 480px) {
    height: 5vh;
  }
\`                                                                                                                                                               
`

const UnderHeader:FC = () => {
    return (
        <UnderHeaderWrapper>

        </UnderHeaderWrapper>
    );
};

export default UnderHeader;