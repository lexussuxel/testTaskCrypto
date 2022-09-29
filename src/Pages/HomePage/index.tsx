import {FC, useEffect, useState} from 'react';
import { WrapperContent, ColumnWrapper, CoinsIcon, StyledButton} from "../../UI";
import {getData, Item} from "../../API";
import {useNavigate} from "react-router-dom";
import { WrapperHome, StyledTable, StyledTHead, StyledTBody, StyledTd, StyledTh, StyledTr, WrapperTable } from './styles';
import {convertBigNumbers} from "../../utils/convertBigNumbers";
import {tableFields, tableFieldsPhone} from "../../utils/types";



const HomePage: FC = () => {

   const navigate = useNavigate();
   const [data, setData] = useState<Array<Item>>([]);
   const [countOfPages, setCountOfPages] = useState<number>(1);
    useEffect(()=>{
        getData({limit: 20, offset: data.length}).then((res)=>{setData(data.concat(res))})
    }, [countOfPages])
    const changeCountOfPages = ()=>{
        setCountOfPages(countOfPages + 1);
    }


    return (
        <>
        <WrapperHome>
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
                                <StyledTh><CoinsIcon/></StyledTh>
                            </StyledTr>
                        )
                        :
                        (
                            <StyledTr key={element.id}>
                                <StyledTd onClick={()=>navigate(`/currency/${element.id}`)}>{element.name}</StyledTd>
                                <StyledTd>{parseFloat(element.priceUsd).toFixed(2)}</StyledTd>
                                <StyledTd>{ parseFloat(element.changePercent24Hr).toFixed(2)}</StyledTd>
                                <StyledTh onClick={()=> console.log("Open Modal")}><CoinsIcon/></StyledTh>
                            </StyledTr>
                        )
                    })
                }</StyledTBody>
            </StyledTable>
                </WrapperTable>
                {countOfPages?
                    <StyledButton onClick={changeCountOfPages}>View more</StyledButton>
                    : null
                }

          </ColumnWrapper>
        </WrapperHome>

        </>
    );
};

export default HomePage;