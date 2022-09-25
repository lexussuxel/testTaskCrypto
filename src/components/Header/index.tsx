import {FC} from "react";
import styled from "@emotion/styled";

const WrapperHeader = styled.div`
  display:flex;
  position:sticky;
  background: white;
  margin: 0 auto;
  height: 80px;
  width: 800px;
  border-radius: 0 0 10px 10px;
`

const Header: FC = ()=>{
    return <WrapperHeader>

    </WrapperHeader>
}

export default Header;