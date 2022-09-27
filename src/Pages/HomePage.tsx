import {FC, useEffect, useState} from 'react';
//import {useNavigate} from "react-router-dom";
import {WrapperBase, WrapperContent, WrapperComponents, ColumnWrapper} from "../UI";
import styled from "@emotion/styled";
import {getData, Item} from "../components/API";

const WrapperHome = styled(WrapperComponents)`
  @media(min-width: 480px){
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
const HomePage: FC = () => {
   const response = getData();
   const [data, setData] = useState<Array<Item>>([]);
    useEffect(()=>{
        response.then((res)=>{setData(res.data.data)})
    }, [])
    //data.sort((a,b)=>  parseInt(a.rank) - parseInt(b.rank))
    return (
        <WrapperHome>
            <WrapperContent>
                <ColumnWrapper>
                {
                    data.map((element)=> {return (<div>{element.id}</div>)})
                }
                </ColumnWrapper>
            </WrapperContent>
        </WrapperHome>
    );
};

export default HomePage;