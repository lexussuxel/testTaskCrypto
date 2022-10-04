import {FC, useEffect, useState} from 'react';
import { ColumnWrapper, CoinsIcon , WrapperComponents} from "../../UI";
import {getData} from "../../API";
import {useNavigate} from "react-router-dom";
import {  StyledTable, StyledTHead, StyledTBody, StyledTd, StyledTh, StyledTr, WrapperTable, StyledButtonHome } from './styles';
import {convertBigNumbers} from "../../utils/convertBigNumbers";
import {Item, tableFields, tableFieldsPhone} from "../../utils/types";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {changeCount} from "../../store/reducers/portfolioSlice";
import Modal from "../../components/Modal";



const HomePage: FC = () => {

   const navigate = useNavigate();
   const [data, setData] = useState<Array<Item>>([]);
   const [countOfPages, setCountOfPages] = useState<number>(1);
   const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
   const [element, setElement] = useState<Item>();
    useEffect(()=>{
        getData({limit: 20, offset: data.length}).then((res)=>{setData(data.concat(res.data.data))})
    }, [countOfPages])
    const changeCountOfPages = ()=>{
        setCountOfPages(countOfPages + 1);
    }
    const dispatch = useAppDispatch()

    const openModal = (currency: Item)=>{
        setElement(currency)
        setIsOpenModal(true);
    }

    const addCurrency = (count: number)=>{
        dispatch(changeCount(element ? {...element, count}: null));
    }

    return (
        <div>
        <WrapperComponents>
            <ColumnWrapper>
                <WrapperTable>
            <StyledTable>
                {window.innerWidth >= 480?
                    <StyledTHead>
                        <StyledTr>
                            {tableFields.map((a, key)=> <StyledTh key={key}>{a}</StyledTh>)}
                        </StyledTr>
                    </StyledTHead>
                    :
                    <StyledTHead>
                        <StyledTr>
                            {tableFieldsPhone.map((a, key)=> <StyledTh key={key}>{a}</StyledTh>)}
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
                                <StyledTh onClick={() => openModal(element)}><CoinsIcon/></StyledTh>
                            </StyledTr>
                        )
                        :
                        (
                            <StyledTr key={element.id}>
                                <StyledTd onClick={()=>navigate(`/currency/${element.id}`)}>{element.name}</StyledTd>
                                <StyledTd>{parseFloat(element.priceUsd).toFixed(2)}</StyledTd>
                                <StyledTd>{ parseFloat(element.changePercent24Hr).toFixed(2)}</StyledTd>
                                <StyledTh  onClick={() => openModal(element)}><CoinsIcon /></StyledTh>
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
            <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} onClose={addCurrency} price={parseFloat(element?.priceUsd || "0")}></Modal>
        </div>
    );
};

export default HomePage;