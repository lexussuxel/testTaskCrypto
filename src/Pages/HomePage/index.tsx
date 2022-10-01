import {FC, useEffect, useState} from 'react';
import { ColumnWrapper, CoinsIcon , WrapperComponents} from "../../UI";
import {getData} from "../../API";
import {useNavigate} from "react-router-dom";
import {  StyledTable, StyledTHead, StyledTBody, StyledTd, StyledTh, StyledTr, WrapperTable, StyledButtonHome } from './styles';
import {convertBigNumbers} from "../../utils/convertBigNumbers";
import {Item, tableFields, tableFieldsPhone} from "../../utils/types";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {changeCount} from "../../store/reducers/portfolioSlice";



const HomePage: FC = () => {

   const navigate = useNavigate();
   const [data, setData] = useState<Array<Item>>([]);
   const [countOfPages, setCountOfPages] = useState<number>(1);
    useEffect(()=>{
        getData({limit: 20, offset: data.length}).then((res)=>{setData(data.concat(res.data.data))})
    }, [countOfPages])
    const changeCountOfPages = ()=>{
        setCountOfPages(countOfPages + 1);
    }
    const dispatch = useAppDispatch()

    const addCurrency = (currency: Item)=>{
        dispatch(changeCount({...currency, count: 1}))
    }

    return (
        <WrapperComponents>
            <ColumnWrapper>
                <WrapperTable>
            <StyledTable>
                {window.innerWidth >= 480?
                    <StyledTHead>
                        <StyledTr>
                            {tableFields.map((a)=> <StyledTh>{a}</StyledTh>)}
                        </StyledTr>
                    </StyledTHead>
                    :
                    <StyledTHead>
                        <StyledTr>
                            {tableFieldsPhone.map((a)=> <StyledTh>{a}</StyledTh>)}
                        </StyledTr>
                    </StyledTHead>
                }
                <StyledTBody>
                {
                    data.map((element)=> {return window.innerWidth >= 480?
                        (
                            <StyledTr key={element.id}>
                                <StyledTd>{element.rank}</StyledTd>
                                <StyledTd onClick={()=>navigate(`/currency/${element.id}`)}>
                                    <ColumnWrapper>
                                        <div>{element.name}</div>
                                        <div style={{fontSize:'10px'}}>{element.symbol}</div>
                                    </ColumnWrapper>
                                </StyledTd>
                                <StyledTd>{"$"+convertBigNumbers(element.priceUsd)}</StyledTd>
                                <StyledTd>{"$"+convertBigNumbers(element.marketCapUsd )}</StyledTd>
                                <StyledTd>{"$"+convertBigNumbers(element.vwap24Hr)}</StyledTd>
                                <StyledTd>{convertBigNumbers(element.supply  )}</StyledTd>
                                <StyledTd>{"$"+convertBigNumbers(element.volumeUsd24Hr  )}</StyledTd>
                                <StyledTd>{convertBigNumbers(element.changePercent24Hr) + "%"}</StyledTd>
                                <StyledTh onClick={()=> addCurrency(element)}><CoinsIcon/></StyledTh>
                            </StyledTr>
                        )
                        :
                        (
                            <StyledTr key={element.id}>
                                <StyledTd onClick={()=>navigate(`/currency/${element.id}`)}>{element.name}</StyledTd>
                                <StyledTd>{parseFloat(element.priceUsd).toFixed(2)}</StyledTd>
                                <StyledTd>{ parseFloat(element.changePercent24Hr).toFixed(2)}</StyledTd>
                                <StyledTh onClick={()=> console.log("Open Modal")}><CoinsIcon /></StyledTh>
                            </StyledTr>
                        )
                    })
                }</StyledTBody>
            </StyledTable>
                </WrapperTable>
                {countOfPages?
                    <StyledButtonHome onClick={changeCountOfPages}>View more</StyledButtonHome>
                    : null
                }

          </ColumnWrapper>
        </WrapperComponents>
    );
};

export default HomePage;