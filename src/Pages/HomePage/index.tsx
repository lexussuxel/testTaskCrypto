import {FC, useEffect, useState} from 'react';
import { WrapperContent, ColumnWrapper} from "../../UI";
import {getData, Item} from "../../API";
import {useNavigate} from "react-router-dom";
import { WrapperHome } from './styles';


const HomePage: FC = () => {
   const response = getData();
   const navigate = useNavigate();
   const [data, setData] = useState<Array<Item>>([]);
    useEffect(()=>{
        response.then((res)=>{setData(res)})
    }, [])
    return (
        <WrapperHome>
            <WrapperContent>
                <ColumnWrapper>
                {
                    data.map((element)=> {return (<div onClick={()=>navigate(`/currency/${element.id}`)}>{element.id}</div>)})
                }
                </ColumnWrapper>
            </WrapperContent>
        </WrapperHome>
    );
};

export default HomePage;