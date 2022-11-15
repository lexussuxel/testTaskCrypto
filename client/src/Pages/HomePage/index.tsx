import {FC, useEffect, useState} from 'react';
import {ColumnWrapper, WrapperComponents} from "../../UI";
import {useNavigate} from "react-router-dom";
import {
    StyledButtonHome,
    StyledTable,
    StyledTBody,
    StyledTd,
    StyledTh,
    StyledTHead,
    StyledTr,
    WrapperTable
} from './styles';
import {convertBigNumbers} from "../../utils/convertBigNumbers";
import {Item, tableFields} from "../../utils/types";
import AddCurrencyButton from "../../components/AddCurrencyButton";
import StyledButton from "../../components/StyledButton"
import {useTranslation} from "react-i18next";
import { trpc } from '../../utils/trpc';


const HomePage: FC = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [data, setData] = useState<Array<Item>>([]);
    const [countOfPages, setCountOfPages] = useState<number>(1);
    const res = trpc.getData.useQuery({ offset: 20*(countOfPages - 1), limit:20});
    useEffect(() => {
        res.data ?
            setData(data.concat(res.data?.data))
            : null
    }, [countOfPages, res.status])
    const changeCountOfPages = () => {
        setCountOfPages(countOfPages + 1);
    }

    return (
        <div data-testid="main-page">
            <WrapperComponents>
                <ColumnWrapper>
                    <WrapperTable>
                        <StyledTable>
                            <StyledTHead>
                                <StyledTr>
                                    {tableFields.map((a, key) => <StyledTh key={key}
                                                                           mobileShown={a.mobileShown}>{t(`Currency.${a.id}`)}</StyledTh>)}
                                </StyledTr>
                            </StyledTHead>

                            <StyledTBody>
                                {
                                    data.map((element:Item) =>
                                        <StyledTr key={element.id}>
                                            <StyledTd mobileShown={true}>{element.rank}</StyledTd>
                                            <StyledTd mobileShown={true}
                                                      onClick={() => navigate(`/currency/${element.id}`)}
                                                      style={{cursor: 'pointer'}}>
                                                <ColumnWrapper>
                                                    <div>{element.name}</div>
                                                    <div style={{fontSize: '10px'}}>{element.symbol}</div>
                                                </ColumnWrapper>
                                            </StyledTd>
                                            <StyledTd>{"$" + convertBigNumbers(element.priceUsd)}</StyledTd>
                                            <StyledTd>{"$" + convertBigNumbers(element.marketCapUsd)}</StyledTd>
                                            <StyledTd>{"$" + convertBigNumbers(element.vwap24Hr)}</StyledTd>
                                            <StyledTd>{convertBigNumbers(element.supply)}</StyledTd>
                                            <StyledTd>{"$" + convertBigNumbers(element.volumeUsd24Hr)}</StyledTd>
                                            <StyledTd
                                                mobileShown={true}>{convertBigNumbers(element.changePercent24Hr) + "%"}</StyledTd>
                                            <StyledTd mobileShown={true}><AddCurrencyButton element={element}
                                                                                            style={'coin'}/></StyledTd>
                                        </StyledTr>
                                    )
                                }
                            </StyledTBody>
                        </StyledTable>
                    </WrapperTable>
                    {countOfPages ?
                        <StyledButtonHome><StyledButton onClick={changeCountOfPages} data_testid='get-more-button'>{t(`View more`)}</StyledButton></StyledButtonHome>
                        : null
                    }

                </ColumnWrapper>
            </WrapperComponents>
        </div>
    );
};

export default HomePage;
